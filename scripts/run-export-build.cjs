/**
 * Setzt NEXT_EXPORT=1 und startet `next build` (statischer Export).
 * Umgeht Windows/npm-Pfadprobleme mit "&" im Projektordner (ohne cross-env).
 */
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const root = path.join(__dirname, "..");
const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");

const result = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  cwd: root,
  env: { ...process.env, NEXT_EXPORT: "1" },
});

process.exit(result.status === null ? 1 : result.status);
