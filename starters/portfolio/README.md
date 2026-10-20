# Portfolio starter

Astro resume site for Workshop 1. Edit one file, preview locally, publish with GitHub Pages.

No prior web experience required. Follow the workshop student guide, or use this README.

## 1. Choose your stage

All three stages use the **same Start Bootstrap–style resume layout** (WSU black + Shocker Yellow sidebar). Same sections for everyone — empty ones stay hidden.

Open `src/data/profile.js` and set `theme` to one of:

| Value | Sample content focus |
| --- | --- |
| `student` | Education, coursework, activities, projects |
| `emerging` | Internship + projects |
| `professional` | Fuller experience and credentials |

You can also download a ZIP that already has your stage and sample content from the workshop **Portfolio lab** page.

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

Use **Print / ATS PDF** to open the browser print dialog. The sidebar hides and you get a clean single-column PDF.

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

