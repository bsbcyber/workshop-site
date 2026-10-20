# Portfolio starter

Astro resume site for Workshop 1. Edit one file, preview locally, publish with GitHub Pages.

No prior web experience required. Follow the workshop student guide, or use this README.

## 1. Choose your theme

Open `src/data/profile.js` and set `theme` to one of:

| Value | Best when you have… |
| --- | --- |
| `student` | Classes, clubs, and class projects — no internship yet |
| `emerging` | An internship / early role plus a few projects |
| `professional` | A denser experience list and a traditional resume layout |

You can also download a ZIP that already has your theme and sample content selected from the workshop **Portfolio lab** page.

## 2. Personalize

Edit `src/data/profile.js`:

- Name, role, about, skills, links
- Education, coursework, activities (especially useful on **student**)
- Experience (especially useful on **emerging** and **professional**)
- Projects

Optional photo: add `public/photo.jpg`, then set `photo: '/photo.jpg'`.

## 3. Preview locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:4321`).

## 4. Print / ATS PDF

Each theme includes **Print / save ATS PDF**. That opens the browser print dialog with a clean single-column layout (no sidebar colors, chips, or photo). Choose **Save as PDF** for applications that want a plain resume file.

## 5. Publish

Push to a public GitHub repository and enable **Settings → Pages → Source: GitHub Actions**.

## Example project entry

```js
{
  title: 'Inventory helper',
  summary: 'Built a tracker that reduced stock-check time for a student org.',
  skills: ['Python', 'Spreadsheets'],
  link: 'https://github.com/your-user/your-repo',
}
```
