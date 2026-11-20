import { spawn } from "node:child_process";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const port = Number(process.env.TRAVELLERS_TEST_PORT || 3042),
  origin = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  [
    resolve("node_modules/next/dist/bin/next"),
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    String(port),
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let log = "",
  count = 0;
server.stdout.on("data", (d) => (log += d));
server.stderr.on("data", (d) => (log += d));
const check = (condition, label) => {
  assert.ok(condition, label);
  count++;
};
try {
  let response;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode != null)
      throw new Error(`Next.js exited before readiness.\n${log}`);
    try {
      response = await fetch(origin);
      if (response.ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 100));
  }
  assert.ok(response?.ok, `Server did not become ready.\n${log}`);
  const html = await response.text();
  check(
    html.includes("Natalie") &&
      html.includes("Jordan") &&
      html.includes("their roora"),
    "Roora and couple server-rendered",
  );
  check(
    html.includes("Wednesday, December 1, 2027"),
    "Ceremony date server-rendered",
  );
  check(
    html.includes("Watch the journey") && html.includes('id="film-play"'),
    "Motion controls server-rendered",
  );
  check(
    (html.match(/<html\b/g) || []).length === 1 &&
      (html.match(/<main\b/g) || []).length === 1,
    "One actual Next.js document and main landmark",
  );
  check(
    !html.includes("<iframe") && !html.includes("/app.mjs"),
    "Application is rendered in Next.js, not a static iframe",
  );
  check(
    (html.match(/<form\b[^>]*\binert(?:="[^"]*")?[^>]*>/g) || []).length === 2,
    "All forms wait for client handlers",
  );
  check(
    html.includes('href="https://thetrippsroora.netlify.app/"') &&
      html.includes('href="https://outfitsroora.netlify.app/"') &&
      !html.includes("thetrippsroora.vercel.app") &&
      !html.includes('id="measure-dialog"'),
    "Family invitation and existing measurements form replace obsolete destinations",
  );
  check(html.includes('id="travellers-app"'), "React effect boundary present");
  check(
    html.includes('role="tablist"') && html.includes("wallet-roora"),
    "Journey and date-wallet controls present",
  );
  check(
    response.headers.get("x-content-type-options") === "nosniff",
    "Security header present",
  );
  const manifest = JSON.parse(
    readFileSync("public/assets/approved-media.json", "utf8"),
  );
  for (const [name, sha] of Object.entries(manifest)) {
    const asset = await fetch(`${origin}/assets/${name}`);
    assert.equal(asset.status, 200, name);
    const bytes = Buffer.from(await asset.arrayBuffer());
    check(
      createHash("sha256").update(bytes).digest("hex") === sha,
      `Unchanged approved asset: ${name}`,
    );
  }
  for (const name of [
    "africa-route.svg",
    "departure.webp",
    "departure-small.webp",
    "display.ttf",
    "body.ttf",
    "body-semibold.ttf",
  ]) {
    const asset = await fetch(`${origin}/assets/${name}`);
    const bytes = await asset.arrayBuffer();
    check(asset.ok && bytes.byteLength > 0, `Required asset: ${name}`);
  }
  const chunks = [
    ...new Set(
      [
        ...html.matchAll(
          /(?:src|href)="([^" ]*\/_next\/static\/[^" ]+\.(?:js|css))"/g,
        ),
      ].map((m) => m[1]),
    ),
  ];
  check(
    chunks.some((p) => p.endsWith(".js")) &&
      chunks.some((p) => p.endsWith(".css")),
    "Next.js JavaScript and stylesheet bundles emitted",
  );
  for (const path of chunks) {
    const asset = await fetch(new URL(path, origin));
    check(asset.ok, `Next.js chunk: ${path}`);
  }
  check(
    !/uncaught|unhandled|Invalid DOM property|Each child in a list/.test(log),
    "No server rendering errors",
  );
  console.log(
    `${count} production Next.js HTTP, SSR, asset and bundle checks passed.`,
  );
  console.log(
    "Browser interaction, hydration and physical-device performance are separate checks.",
  );
} finally {
  server.kill("SIGTERM");
  await Promise.race([
    new Promise((r) => server.once("exit", r)),
    new Promise((r) =>
      setTimeout(() => {
        server.kill("SIGKILL");
        r();
      }, 2000),
    ),
  ]);
}
