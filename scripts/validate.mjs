// Conformance gate for the OKF-Strategy profile (SPEC §7). Run: npm run validate [bundle-dir ...]
//
// With no arguments it validates every bundle under examples/bundles/. With arguments, each argument is
// one bundle root, so a producer can check its own output.
//   - root index.md frontmatter            -> bundle.schema.json
//   - every other concept .md frontmatter   -> concept.schema.json
//   - root glossary.md                      -> carries cps.profile 1.x (§9)
//   - root lookups                          -> required table columns (§2.1)
//   - data/*-series.json                    -> series.schema.json + index alignment + order (§6.1)
//   - data/*-status.json                    -> status.schema.json + order (§4.3.1)
//   - data/layout-*.json                    -> producer presentation data, not checked (§6.3)
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, basename, resolve } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { parse as parseYaml } from "yaml";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const schemaDir = join(root, "schemas");

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
for (const f of readdirSync(schemaDir).filter((f) => f.endsWith(".json"))) {
    ajv.addSchema(JSON.parse(readFileSync(join(schemaDir, f), "utf8")));
}
const byId = (id) => ajv.getSchema(`https://clearpointstrategy.com/okf-strategy/${id}`);
const conceptSchema = byId("concept.schema.json");
const bundleSchema = byId("bundle.schema.json");
const seriesSchema = byId("series.schema.json");
const statusSchema = byId("status.schema.json");

// SPEC §2.1: file -> columns that must appear in one of its tables.
const LOOKUP_COLUMNS = {
    "users.md": ["ID", "Name", "Email", "Type", "Active", "Last Login"],
    "statuses.md": ["ID", "Name", "Color", "Score", "Meaning", "Applies To"],
    "tags.md": ["ID", "Name", "Color"],
    "periods.md": ["ID", "Name", "Date"],
    "periodicities.md": ["ID", "Name", "Periods", "Default", "Period IDs"],
    "custom-fields.md": ["ID", "Name", "Element Type", "Field Type", "Mode", "Scorecards"],
    "glossary.md": ["Type", "Term", "Plural"],
    "user-access.md": ["Profile", "Users"],
};
const PROFILE = /^1\.\d+$/;
const FM = /^---\n([\s\S]*?)\n---/;
let failures = 0;
let checked = 0;

const fail = (path, problems) => {
    failures++;
    console.log(`FAIL  ${relative(process.cwd(), path)}`);
    for (const p of problems) console.log(`   ${p}`);
};
const schemaProblems = (validate, data) => (validate(data) ? [] : validate.errors.map((e) => `${e.instancePath || "/"} ${e.message}`));
const ascending = (periods) => {
    const dates = periods.map((p) => p.periodDate).filter(Boolean);
    return !dates.some((d, i) => i > 0 && d < dates[i - 1]);
};

// Header rows of every Markdown table in a body: a "| a | b |" line followed by a "| --- |" line.
const tableHeaders = (body) => {
    const lines = body.split("\n");
    const out = [];
    for (let i = 0; i + 1 < lines.length; i++) {
        if (/^\|.*\|$/.test(lines[i].trim()) && /^\|\s*-{3}/.test(lines[i + 1].trim())) {
            out.push(lines[i].trim().slice(1, -1).split("|").map((c) => c.trim()));
        }
    }
    return out;
};

const checkSeries = (path) => {
    const data = JSON.parse(readFileSync(path, "utf8"));
    const problems = schemaProblems(seriesSchema, data);
    if (!problems.length) {
        const n = data.periods.length;
        for (const s of data.series) {
            if (s.values.length !== n) problems.push(`series "${s.name}" has ${s.values.length} values for ${n} periods`);
            if (s.labels && s.labels.length !== n) problems.push(`series "${s.name}" has ${s.labels.length} labels for ${n} periods`);
        }
        if (!ascending(data.periods)) problems.push("periods are not in ascending periodDate order");
    }
    return problems;
};

const checkStatus = (path) => {
    const data = JSON.parse(readFileSync(path, "utf8"));
    const problems = schemaProblems(statusSchema, data);
    if (!problems.length && !ascending(data.periods)) problems.push("periods are not in ascending periodDate order");
    return problems;
};

const checkMarkdown = (bundleRoot, path) => {
    const name = basename(path);
    const rel = relative(bundleRoot, path);
    if (name === "log.md") return [];
    const text = readFileSync(path, "utf8");
    const m = FM.exec(text);
    if (!m) return name === "index.md" ? [] : ["/ missing frontmatter"];
    let fm;
    try {
        fm = parseYaml(m[1]);
    } catch (e) {
        return [`/ frontmatter is not valid YAML: ${e.message.split("\n")[0]}`];
    }
    if (rel === "index.md") return schemaProblems(bundleSchema, fm);
    const problems = schemaProblems(conceptSchema, fm);
    if (!rel.includes("/")) {
        if (rel === "glossary.md" && !PROFILE.test(String(fm?.cps?.profile ?? ""))) problems.push("/cps/profile must be a 1.x version string (SPEC §9)");
        const need = LOOKUP_COLUMNS[rel];
        if (need) {
            const headers = tableHeaders(text.slice(m[0].length));
            const missing = need.filter((c) => !headers.some((h) => h.includes(c)));
            if (missing.length) problems.push(`lookup is missing required column(s): ${missing.join(", ")} (SPEC §2.1)`);
        }
    }
    return problems;
};

const walk = (dir, fn) => {
    for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        if (statSync(p).isDirectory()) walk(p, fn);
        else fn(p);
    }
};

const validateBundle = (bundleRoot) => {
    if (!existsSync(join(bundleRoot, "glossary.md"))) fail(join(bundleRoot, "glossary.md"), ["/ missing: a bundle carries the root lookups (SPEC §2)"]);
    walk(bundleRoot, (path) => {
        let problems;
        if (path.includes("/data/")) {
            if (path.endsWith("-series.json")) problems = checkSeries(path);
            else if (path.endsWith("-status.json")) problems = checkStatus(path);
            else return;
        } else if (path.endsWith(".md")) {
            problems = checkMarkdown(bundleRoot, path);
        } else return;
        checked++;
        if (problems.length) fail(path, problems);
    });
};

const args = process.argv.slice(2);
const bundles = args.length
    ? args.map((a) => resolve(a))
    : readdirSync(join(root, "examples", "bundles")).map((b) => join(root, "examples", "bundles", b)).filter((p) => statSync(p).isDirectory());
for (const b of bundles) validateBundle(b);

console.log(`\n${bundles.length} bundle(s), ${checked} file(s) checked.`);
console.log(failures ? `${failures} failure(s).` : "All conformant.");
process.exit(failures ? 1 : 0);
