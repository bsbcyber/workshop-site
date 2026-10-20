#!/usr/bin/env node
/**
 * Build a PowerPoint export of the workshop HTML deck.
 * Usage: node scripts/export-slides-pptx.mjs
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import PptxGenJS from 'pptxgenjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'src', 'pages', 'slides', 'index.astro');
const outDir = join(root, 'public', 'downloads');
const outPath = join(outDir, 'workshop-1-presentation.pptx');

function decode(text = '') {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\{import\.meta\.env\.BASE_URL\}/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(html = '') {
  return decode(
    html
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|li|div|h[1-6]|pre)>/gi, '\n')
      .replace(/<[^>]+>/g, ' '),
  )
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function extractTitle(block) {
  const m = block.match(/data-title="([^"]*)"/);
  return m ? decode(m[1]) : '';
}

function extractNotes(block) {
  const m = block.match(/data-notes="([^"]*)"/);
  return m ? decode(m[1]) : '';
}

function firstMatch(block, re) {
  const m = block.match(re);
  return m ? decode(m[1].replace(/<[^>]+>/g, ' ')) : '';
}

function bulletsFrom(block) {
  const items = [];
  for (const m of block.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
    const text = stripTags(m[1]).join(' ');
    if (text) items.push(text);
  }
  // Also pull short callout / pipeline / status blocks
  for (const m of block.matchAll(/<(?:b|h3)[^>]*>([\s\S]*?)<\/(?:b|h3)>\s*<(?:p|span|small)[^>]*>([\s\S]*?)<\/(?:p|span|small)>/gi)) {
    const title = stripTags(m[1]).join(' ');
    const body = stripTags(m[2]).join(' ');
    if (title && body && title.length < 80) items.push(`${title}: ${body}`);
  }
  // Code blocks as single bullets
  for (const m of block.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/gi)) {
    const code = decode(m[1]).replace(/\s*\n\s*/g, ' · ');
    if (code && code.length < 220) items.push(code);
  }
  // Dedupe while preserving order
  const seen = new Set();
  return items.filter((item) => {
    const key = item.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const html = readFileSync(source, 'utf8');
const sections = [...html.matchAll(/<section class="deck-slide[\s\S]*?<\/section>/g)].map((m) => m[0]);

const slides = sections.map((block, index) => {
  const title = extractTitle(block) || `Slide ${index + 1}`;
  const notes = extractNotes(block);
  const eyebrow = firstMatch(block, /class="eyebrow[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
  const heading = firstMatch(block, /<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const subtitle = firstMatch(block, /class="slide-subtitle"[^>]*>([\s\S]*?)<\/p>/i);
  const engage = firstMatch(block, /class="engage"[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>/i);
  const bottoms = [...block.matchAll(/class="slide-bottom"[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>\s*<span>([\s\S]*?)<\/span>/gi)].map(
    (m) => `${stripTags(m[1]).join(' ')} · ${stripTags(m[2]).join(' ')}`,
  );
  const bullets = bulletsFrom(block).slice(0, 10);
  return { title, notes, eyebrow, heading, subtitle, engage, bottoms, bullets };
});

const pptx = new PptxGenJS();
pptx.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 });
pptx.layout = 'WIDE';
pptx.author = 'MIS Club · Wichita State';
pptx.title = 'Workshop 1 — Git & GitHub';
pptx.subject = 'Facilitator deck export from the workshop site';

const BLACK = '000000';
const YELLOW = 'FFDB00';
const INK = '1A1A1A';
const MUTED = '555555';
const LINE = 'E5E5E5';

for (const [i, slide] of slides.entries()) {
  const s = pptx.addSlide();
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.18,
    fill: { color: BLACK },
    line: { color: BLACK },
  });
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 0.18,
    w: 13.333,
    h: 0.08,
    fill: { color: YELLOW },
    line: { color: YELLOW },
  });

  s.addText('WICHITA STATE · MIS CLUB · WORKSHOP 1', {
    x: 0.55,
    y: 0.4,
    w: 10.5,
    h: 0.28,
    fontSize: 11,
    fontFace: 'Arial',
    color: MUTED,
    bold: true,
    charSpacing: 2,
  });
  s.addText(`${String(i + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`, {
    x: 11.2,
    y: 0.4,
    w: 1.6,
    h: 0.28,
    fontSize: 11,
    fontFace: 'Arial',
    color: MUTED,
    align: 'right',
    bold: true,
  });

  if (slide.eyebrow) {
    s.addText(slide.eyebrow.toUpperCase(), {
      x: 0.55,
      y: 0.75,
      w: 12.2,
      h: 0.28,
      fontSize: 12,
      fontFace: 'Arial',
      color: MUTED,
      bold: true,
    });
  }

  s.addText(slide.heading || slide.title, {
    x: 0.55,
    y: 1.05,
    w: 12.2,
    h: 0.85,
    fontSize: 28,
    fontFace: 'Arial',
    color: INK,
    bold: true,
    valign: 'top',
  });

  let y = 1.95;
  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      x: 0.55,
      y,
      w: 12.2,
      h: 0.55,
      fontSize: 15,
      fontFace: 'Arial',
      color: MUTED,
    });
    y += 0.65;
  }

  const body = slide.bullets.length
    ? slide.bullets
    : [slide.title, 'See the live web deck for full layout and screenshots.'].filter(Boolean);

  s.addText(
    body.map((text) => ({ text, options: { bullet: true, breakLine: true } })),
    {
      x: 0.55,
      y,
      w: 12.2,
      h: Math.min(3.6, 0.38 * body.length + 0.2),
      fontSize: 15,
      fontFace: 'Arial',
      color: INK,
      paraSpacing: 6,
      valign: 'top',
    },
  );
  y += Math.min(3.6, 0.38 * body.length + 0.35);

  if (slide.engage && y < 6.2) {
    s.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.55,
      y: Math.min(y, 5.55),
      w: 12.2,
      h: 0.7,
      fill: { color: 'FFF8CC' },
      line: { color: YELLOW },
      rectRadius: 0.06,
    });
    s.addText(`Ask the room: ${slide.engage}`, {
      x: 0.7,
      y: Math.min(y, 5.55) + 0.12,
      w: 11.9,
      h: 0.48,
      fontSize: 13,
      fontFace: 'Arial',
      color: INK,
      bold: true,
    });
  }

  const footer = slide.bottoms[0] || 'ARROWS ON THE WEB DECK · R FOR RESOURCES · N FOR NOTES';
  s.addShape(pptx.shapes.RECTANGLE, {
    x: 0,
    y: 7.05,
    w: 13.333,
    h: 0.45,
    fill: { color: BLACK },
    line: { color: BLACK },
  });
  s.addText(footer, {
    x: 0.55,
    y: 7.14,
    w: 12.2,
    h: 0.28,
    fontSize: 11,
    fontFace: 'Arial',
    color: YELLOW,
    bold: true,
  });

  if (slide.notes) {
    s.addNotes(slide.notes);
  }
}

mkdirSync(outDir, { recursive: true });
await pptx.writeFile({ fileName: outPath });

// Also copy a convenience path at repo root for the user
const desktopCopy = join(root, 'Workshop-1-Git-GitHub.pptx');
writeFileSync(desktopCopy, readFileSync(outPath));
console.log(`Wrote ${outPath}`);
console.log(`Wrote ${desktopCopy}`);
console.log(`Slides: ${slides.length}`);
