// Conformance gate for the OKF-CPS profile. Run: npm run validate
//
// Descends from cps-parse's validator, elevated from "does this envelope match a schema"
// to "does this bundle conform to the open profile":
//   - root index.md frontmatter        -> bundle.schema.json
//   - every other concept .md frontmatter -> concept.schema.json (cps block optional)
//   - data/*-series.json sidecars        -> series.schema.json + index alignment (SPEC §6.1)
//   - any other *.json under examples/   -> concept.schema.json (frontmatter-as-JSON)
//
// YAML frontmatter needs the `yaml` package. If deps aren't installed the run degrades
// gracefully (validates JSON, skips .md) rather than crashing — install with `npm install`.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, basename } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const schemaDir = join(root, "schemas");
const exampleDir = join(root, "examples");

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
for (const f of readdirSync(schemaDir).filter((f) => f.endsWith(".json"))) {
    ajv.addSchema(JSON.parse(readFileSync(join(schemaDir, f), "utf8")));
}
const byId = (id) => ajv.getSchema(`https://clearpointstrategy.com/okf-strategy/${id}`);
const conceptSchema = byId("concept.schema.json");
const bundleSchema = byId("bundle.schema.json");
const seriesSchema = byId("series.schema.json");

// Optional YAML — frontmatter validation is skipped (not failed) if it isn't installed.
let parseYaml = null;
try {
    ({ parse: parseYaml } = await import("yaml"));
} catch {
    console.warn("NOTE  `yaml` not installed — skipping .md frontmatter checks (run `npm install`).\n");
}

const FM = /^---\n([\s\S]*?)\n---/;
let failures = 0;
let skipped = 0;

const check = (path, data, validate, label) => {
    const ok = validate(data);
    console.log(`${ok ? "PASS" : "FAIL"}  [${label}]  ${relative(root, path)}`);
    if (!ok) {
        failures++;
        for (const e of validate.errors) console.log(`   ${e.instancePath || "/"} ${e.message}`);
    }
};

// Index alignment and period order are §6.1 rules JSON Schema cannot express.
const checkSeries = (path) => {
    const data = JSON.parse(readFileSync(path, "utf8"));
    check(path, data, seriesSchema, "series");
    if (!seriesSchema(data)) return;
    const n = data.periods.length;
    const problems = [];
    for (const s of data.series) {
        if (s.values.length !== n) problems.push(`series "${s.name}" has ${s.values.length} values for ${n} periods`);
        if (s.labels && s.labels.length !== n) problems.push(`series "${s.name}" has ${s.labels.length} labels for ${n} periods`);
    }
    const dates = data.periods.map((p) => p.periodDate).filter(Boolean);
    if (dates.some((d, i) => i > 0 && d < dates[i - 1])) problems.push("periods are not in ascending periodDate order");
    if (problems.length) {
        failures++;
        console.log(`FAIL  [series]  ${relative(root, path)}`);
        for (const p of problems) console.log(`   ${p}`);
    }
};

const walk = (dir, fn) => {
    for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        if (statSync(p).isDirectory()) walk(p, fn);
        else fn(p);
    }
};

if (existsSync(exampleDir)) {
    walk(exampleDir, (path) => {
        const name = basename(path);
        if (path.includes("/data/")) {
            // metric sidecars are not concepts (§6); -series.json files have their own schema (§6.1)
            if (path.endsWith("-series.json")) checkSeries(path);
            return;
        }
        if (path.endsWith(".json")) {
            check(path, JSON.parse(readFileSync(path, "utf8")), conceptSchema, "concept");
        } else if (path.endsWith(".md")) {
            if (name === "log.md") return; // reserved, no frontmatter
            if (!parseYaml) {
                skipped++;
                return;
            }
            const m = FM.exec(readFileSync(path, "utf8"));
            if (!m) {
                // A missing frontmatter block is only a failure for concepts, not for index.md.
                if (name !== "index.md") {
                    console.log(`FAIL  [concept]  ${relative(root, path)}\n   / missing frontmatter`);
                    failures++;
                }
                return;
            }
            const fm = parseYaml(m[1]);
            const isRootIndex = name === "index.md" && relative(exampleDir, dirname(path)).split("/").length <= 2;
            check(path, fm, isRootIndex ? bundleSchema : conceptSchema, isRootIndex ? "bundle" : "concept");
        }
    });
}

if (skipped) console.log(`\n${skipped} markdown file(s) skipped (install \`yaml\`).`);
console.log(failures ? `\n${failures} failure(s).` : "\nAll conformant.");
process.exit(failures ? 1 : 0);
