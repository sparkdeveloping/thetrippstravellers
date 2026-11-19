import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
const jsx = walk("app")
  .filter((p) => p.endsWith(".jsx"))
  .map((p) => readFileSync(p, "utf8"))
  .join("\n");
const css = walk("app")
  .filter((p) => p.endsWith(".css"))
  .map((p) => readFileSync(p, "utf8"))
  .join("\n");
const code = walk("lib")
  .filter((p) => p.endsWith(".mjs"))
  .map((p) => readFileSync(p, "utf8"))
  .join("\n");
const assets = JSON.parse(
  readFileSync("public/assets/approved-media.json", "utf8"),
);
for (const [name, expected] of Object.entries(assets)) {
  const bytes = readFileSync(join("public/assets", name));
  if (createHash("sha256").update(bytes).digest("hex") !== expected)
    throw new Error(`Approved media changed: ${name}`);
}
for (const path of [...jsx.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)]
  .map((m) => m[1])
  .concat(
    [...css.matchAll(/url\(['"]?(\/assets\/[^)'"\s]+)/g)].map((m) => m[1]),
  ))
  if (!existsSync(join("public", path)))
    throw new Error(`Missing local asset: ${path}`);
const ids = [...jsx.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
if (new Set(ids).size !== ids.length)
  throw new Error("Duplicate JSX element IDs");
for (const ref of [...jsx.matchAll(/(?:href="#|htmlFor=")([^" ]+)"/g)].map(
  (m) => m[1],
))
  if (!ids.includes(ref)) throw new Error(`Broken in-page reference: ${ref}`);
for (const match of jsx.matchAll(
  /aria-(?:labelledby|describedby|controls)="([^"]+)"/g,
))
  for (const ref of match[1].split(/\s+/))
    if (!ids.includes(ref))
      throw new Error(`Broken accessibility reference: ${ref}`);
for (const text of ["Natalie", "Jordan", "roora", "2027-12-01"])
  if (!(jsx + code).includes(text))
    throw new Error(`Missing event context: ${text}`);
if (/\b\d{2}-\d{6}[A-Z]\d{2}\b/.test(jsx + code))
  throw new Error("Recipient identity document leaked");
if (/fetch\(|XMLHttpRequest|sendBeacon/.test(code))
  throw new Error("Unexpected guest-data submission transport");
for (const file of walk("lib").filter((p) => p.endsWith(".mjs")))
  execFileSync(process.execPath, ["--check", resolve(file)]);
const files = walk("public/assets");
console.log(
  `Next.js source verification passed: ${ids.length} unique JSX IDs; ${Object.keys(assets).length} approved-media hashes; ${files.length} local assets / ${files.reduce((n, p) => n + statSync(p).size, 0).toLocaleString()} bytes; valid anchors, ARIA references and module syntax.`,
);
