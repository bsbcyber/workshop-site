# MIS Club Workshop 1: Git and GitHub

This repository is the **self-contained workshop site**: student walkthrough, agenda, slides, portfolio design lab, and downloadable theme ZIPs. Students personalize a portfolio and publish it with GitHub Pages.

## Student materials

- **[Student walkthrough](https://skyeshanohan.github.io/workshopsite/student-guide/):** Canonical in-class path — tools → theme ZIP → `profile.js` (experience, projects, photo) → Git review → published site.
- **[STUDENT-START-HERE.md](./STUDENT-START-HERE.md):** Short offline/print companion only (not a second full guide).
- **[Portfolio lab](https://skyeshanohan.github.io/workshopsite/designs/):** Live previews of Editorial, Developer, and Professional — same layouts as the ZIPs.
- **Theme downloads:** [Editorial](https://skyeshanohan.github.io/workshopsite/downloads/portfolio-editorial.zip) · [Developer](https://skyeshanohan.github.io/workshopsite/downloads/portfolio-developer.zip) · [Professional](https://skyeshanohan.github.io/workshopsite/downloads/portfolio-professional.zip)
- **[Workshop agenda](https://skyeshanohan.github.io/workshopsite/workshop/)** · **[Quick reference](https://skyeshanohan.github.io/workshopsite/resources/)** · **[Slides](https://skyeshanohan.github.io/workshopsite/slides/)**

## Facilitator materials

- **[Presenter workspace](https://skyeshanohan.github.io/workshopsite/presenter/)**
- **[Facilitator guide](./FACILITATOR-GUIDE.md)**
- **Catch-up demo:** [skyeshanohan/workshop1-demo-portfolio](https://github.com/skyeshanohan/workshop1-demo-portfolio) · [live Pages](https://skyeshanohan.github.io/workshop1-demo-portfolio/)
- **Example resume (journey stages):** [tyler-beach/example-my-resume-site](https://github.com/tyler-beach/example-my-resume-site) · [live Pages](https://tyler-beach.github.io/example-my-resume-site/) — Student / Emerging / Professional toggle

## Portfolio starter (source of truth)

Editable starter lives in [`starters/portfolio/`](./starters/portfolio/). Theme ZIPs are packaged into `public/downloads/` on every `npm run build` / `npm run dev`.

Students:

1. Download a theme ZIP from the Portfolio lab.
2. Edit `src/data/profile.js` (theme, text, experience, projects, photo path).
3. Optionally add `public/photo.jpg`.
4. Push to their own GitHub repo and enable Pages → GitHub Actions.

The `portfolio-starter` branch mirrors `starters/portfolio/` for GitHub archive links.

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
