# MIS Club Workshop 1: Git and GitHub

This repository is the **self-contained workshop site**: student walkthrough, agenda, slides, portfolio lab, and one downloadable resume starter ZIP. Students personalize a resume site and publish it with GitHub Pages.

## Student materials

- **[Student walkthrough](https://skyeshanohan.github.io/workshopsite/student-guide/):** Canonical in-class path — tools → starter ZIP → `profile.js` → Git review → published site.
- **[STUDENT-START-HERE.md](./STUDENT-START-HERE.md):** Short offline/print companion only (not a second full guide).
- **[Portfolio lab](https://skyeshanohan.github.io/workshopsite/designs/):** Live preview of the single resume starter — same layout as the ZIP.
- **Starter download:** [portfolio-starter.zip](https://skyeshanohan.github.io/workshopsite/downloads/portfolio-starter.zip)
- **[Workshop agenda](https://skyeshanohan.github.io/workshopsite/workshop/)** · **[Quick reference](https://skyeshanohan.github.io/workshopsite/resources/)** · **[Slides](https://skyeshanohan.github.io/workshopsite/slides/)**

## Facilitator materials

- **[Presenter workspace](https://skyeshanohan.github.io/workshopsite/presenter/)**
- **[Facilitator guide](./FACILITATOR-GUIDE.md)**
- **Catch-up demo:** [skyeshanohan/workshop1-demo-portfolio](https://github.com/skyeshanohan/workshop1-demo-portfolio) · [live Pages](https://skyeshanohan.github.io/workshop1-demo-portfolio/)
- **Example resume:** [tyler-beach/example-my-resume-site](https://github.com/tyler-beach/example-my-resume-site) · [live Pages](https://tyler-beach.github.io/example-my-resume-site/)

## Portfolio starter (source of truth)

Editable starter lives in [`starters/portfolio/`](./starters/portfolio/). The ZIP is packaged into `public/downloads/` on every `npm run build` / `npm run dev`.

Students:

1. Download the starter ZIP from the Portfolio lab.
2. Edit `src/data/profile.js` (text, experience, projects, photo path). Leave unused lists as `[]`.
3. Optionally add `public/photo.jpg`.
4. Push to their own GitHub repo and enable Pages → GitHub Actions.

## Run the workshop site locally

Requirements: Node.js 22 preferred (18+ usually works locally) and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Production build:

```bash
npm run build
```

## Deployment

The `main` branch publishes this workshop site with GitHub Pages via GitHub Actions.
