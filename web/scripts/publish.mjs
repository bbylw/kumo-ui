import { execFileSync } from "node:child_process";
import { cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// GitHub Pages for this repository is published from the `main` branch root
// (legacy "deploy from a branch" mode), so the production build has to live
// next to the source. This script builds `web/` and copies the output to the
// repository root. Keep the copy list in sync with `web/public/`.
const webRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = resolve(webRoot, "..");
const dist = resolve(webRoot, "dist");

execFileSync("pnpm", ["run", "build"], { cwd: webRoot, stdio: "inherit" });

// `assets/` only ever contains build output, so it is safe to replace it.
await rm(resolve(repoRoot, "assets"), { recursive: true, force: true });
await cp(resolve(dist, "assets"), resolve(repoRoot, "assets"), { recursive: true });

for (const file of ["index.html", "favicon.svg", "CNAME", ".nojekyll"]) {
  const source = resolve(dist, file);
  if (existsSync(source)) {
    await cp(source, resolve(repoRoot, file));
  }
}

console.log("Published production build to the repository root.");
