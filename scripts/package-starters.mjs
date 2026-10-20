#!/usr/bin/env node
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'starters', 'portfolio');
const outDir = join(root, 'public', 'downloads');

mkdirSync(outDir, { recursive: true });

// Assets used by live portfolio previews on the workshop site
const previewAssets = join(root, 'public', 'starter-assets');
rmSync(previewAssets, { recursive: true, force: true });
mkdirSync(previewAssets, { recursive: true });
cpSync(join(source, 'public'), previewAssets, { recursive: true });
console.log(`Synced preview assets to ${previewAssets}`);

function shouldCopy(src) {
  const parts = src.split(/[/\\]/);
  return !parts.some((part) =>
    ['node_modules', 'dist', '.astro', '.DS_Store', 'samples'].includes(part),
  );
}

const folderName = 'my-resume-site';
const zipPath = join(outDir, 'portfolio-starter.zip');
const staging = join(outDir, '.staging-starter');
const wrap = join(outDir, '.wrap-starter');

rmSync(staging, { recursive: true, force: true });
rmSync(wrap, { recursive: true, force: true });
if (existsSync(zipPath)) rmSync(zipPath);

cpSync(source, staging, { recursive: true, filter: shouldCopy });
mkdirSync(wrap, { recursive: true });
cpSync(staging, join(wrap, folderName), { recursive: true });
execFileSync('zip', ['-r', '-q', zipPath, folderName], { cwd: wrap });
rmSync(staging, { recursive: true, force: true });
rmSync(wrap, { recursive: true, force: true });
console.log(`Wrote ${zipPath}`);

// Legacy ZIP names → same starter so old links keep working
const aliases = [
  'portfolio-student.zip',
  'portfolio-emerging.zip',
  'portfolio-professional.zip',
  'portfolio-editorial.zip',
  'portfolio-developer.zip',
];
for (const alias of aliases) {
  const aliasPath = join(outDir, alias);
  if (existsSync(aliasPath)) rmSync(aliasPath);
  cpSync(zipPath, aliasPath);
  console.log(`Wrote alias ${aliasPath}`);
}
