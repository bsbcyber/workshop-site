#!/usr/bin/env node
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'starters', 'portfolio');
const outDir = join(root, 'public', 'downloads');
const themes = ['student', 'emerging', 'professional'];

mkdirSync(outDir, { recursive: true });

// Assets used by live portfolio previews on the workshop site
const previewAssets = join(root, 'public', 'starter-assets');
rmSync(previewAssets, { recursive: true, force: true });
mkdirSync(previewAssets, { recursive: true });
cpSync(join(source, 'public'), previewAssets, { recursive: true });
console.log(`Synced preview assets to ${previewAssets}`);

function profileForTheme(theme) {
  if (theme === 'student') {
    return readFileSync(join(source, 'src', 'data', 'profile.js'), 'utf8');
  }
  return readFileSync(join(source, 'src', 'data', 'samples', `${theme}.js`), 'utf8');
}

function shouldCopy(src) {
  const parts = src.split(/[/\\]/);
  return !parts.some((part) => ['node_modules', 'dist', '.astro', '.DS_Store', 'samples'].includes(part));
}

for (const theme of themes) {
  const staging = join(outDir, `.staging-${theme}`);
  const zipPath = join(outDir, `portfolio-${theme}.zip`);

  rmSync(staging, { recursive: true, force: true });
  if (existsSync(zipPath)) rmSync(zipPath);

  cpSync(source, staging, { recursive: true, filter: shouldCopy });

  const profilePath = join(staging, 'src', 'data', 'profile.js');
  writeFileSync(profilePath, profileForTheme(theme));

  // zip contents so extracting creates a single top-level folder
  const folderName = `portfolio-${theme}`;
  const wrap = join(outDir, `.wrap-${theme}`);
  rmSync(wrap, { recursive: true, force: true });
  mkdirSync(wrap, { recursive: true });
  cpSync(staging, join(wrap, folderName), { recursive: true });

  execFileSync('zip', ['-r', '-q', zipPath, folderName], { cwd: wrap });

  rmSync(staging, { recursive: true, force: true });
  rmSync(wrap, { recursive: true, force: true });
  console.log(`Wrote ${zipPath}`);
}

// Generic starter defaults to student (kept for older links)
const generic = join(outDir, 'portfolio-starter.zip');
if (existsSync(generic)) rmSync(generic);
cpSync(join(outDir, 'portfolio-student.zip'), generic);
console.log(`Wrote ${generic}`);

// Keep old ZIP names as copies so prior links do not 404 during transition
const aliases = [
  ['portfolio-editorial.zip', 'portfolio-student.zip'],
  ['portfolio-developer.zip', 'portfolio-emerging.zip'],
  ['portfolio-professional.zip', 'portfolio-professional.zip'],
];
for (const [alias, target] of aliases) {
  if (alias === target) continue;
  const aliasPath = join(outDir, alias);
  if (existsSync(aliasPath)) rmSync(aliasPath);
  cpSync(join(outDir, target), aliasPath);
  console.log(`Wrote alias ${aliasPath} → ${target}`);
}
