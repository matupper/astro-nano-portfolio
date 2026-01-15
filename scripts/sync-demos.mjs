import fs from "node:fs/promises";
import path from "node:path";

const workspaceRoot = process.cwd();

/**
 * Copy a demo folder (stored under src/content) into public/ so it can be served
 * directly by Astro (static assets).
 */
async function syncDemo({ srcRel, destRel }) {
  const src = path.join(workspaceRoot, srcRel);
  const dest = path.join(workspaceRoot, destRel);

  try {
    // Clean destination so deletions in src are reflected.
    await fs.rm(dest, { recursive: true, force: true });
    await fs.mkdir(dest, { recursive: true });

    await copyDirFiltered(src, dest, (filePath) => {
      const base = path.basename(filePath);
      if (base === "node_modules") return false;
      if (base.startsWith(".")) return false;
      if (base === "package-lock.json") return false;
      if (base === "package.json") return false;
      if (base.toLowerCase() === "readme.md") return false;
      return true;
    });
  } catch (err) {
    console.warn(`[sync-demos] Skipping missing demo folder: ${srcRel}`);
    console.warn(err && err.message ? err.message : err);
  }
}

async function copyDirFiltered(srcDir, destDir, allowPath) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  await fs.mkdir(destDir, { recursive: true });

  await Promise.all(
    entries.map(async (entry) => {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);

      if (!allowPath(srcPath)) return;

      if (entry.isDirectory()) {
        await copyDirFiltered(srcPath, destPath, allowPath);
        return;
      }

      if (entry.isFile()) {
        await fs.copyFile(srcPath, destPath);
      }
    }),
  );
}

await Promise.all([
  syncDemo({
    srcRel: "src/content/projects/JS-3D-renderer/demo",
    destRel: "public/demos/js-3d-renderer",
  }),
]);

