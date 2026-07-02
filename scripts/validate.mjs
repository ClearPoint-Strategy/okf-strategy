// Conformance gate for the OKF-CPS profile. Run: npm run validate
//
// Descends from cps-parse's validator, elevated from "does this envelope match a schema"
// to "does this bundle conform to the open profile":
//   - root index.md frontmatter        -> bundle.schema.json
//   - every other concept .md frontmatter -> concept.schema.json (cps block optional)
//   - any *.json under examples/         -> concept.schema.json (frontmatter-as-JSON)
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
const byId = (id) => ajv.getSchema(`https://clearpointstrategy.com/cps-okf/${id}`);
const conceptSchema = byId("concept.schema.json");
const bundleSchema = byId("bundle.schema.json");

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
        if (path.includes("/data/")) return; // metric sidecars are not concepts (§6)
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
