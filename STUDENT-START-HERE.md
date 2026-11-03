# Student start here (offline companion)

**Canonical in-class path:** [Open the student walkthrough](https://skyeshanohan.github.io/workshopsite/student-guide/)

This file (`STUDENT-START-HERE.md`) is a short offline companion for printing or email. It is **not** a second full guide. Use the online walkthrough for screenshots, copyable commands, the starter download, and recovery options.

There is no separate `STUDENT/README` — start with the online guide, or this companion if you are offline.

## Mission

Build out your resume website from one starter ZIP (your real details, optional photo), practice a pull request with Git/GitHub, and publish it on GitHub Pages. You do not need prior coding experience.

## Bring

- A laptop and internet access
- A GitHub account you can sign into
- Visual Studio Code and Git
- Node.js 22 preferred (18+ usually works locally)
- Access to GitHub Copilot if available (there is a non-AI path)

## The route

1. **Tools:** confirm GitHub, Git, VS Code, and Node.js work.
2. **Claim:** download the starter ZIP from the [Portfolio lab](https://skyeshanohan.github.io/workshopsite/designs/), create an empty <strong>public</strong> GitHub repo.
3. **Explore:** run `npm install` and `npm run dev`, then push the project to GitHub.
4. **Shape:** edit `src/data/profile.js` (fill what you have — coursework, activities, experience, projects). Leave unused lists as `[]`. Optionally add `public/photo.jpg`. **Do not commit on `main` yet.**
5. **Review:** issue on GitHub → new branch in VS Code Status Bar → Source Control commit + publish → pull request → partner beside you leaves a +1 → merge.
6. **Launch:** open the bundled `.github/workflows/deploy.yml` (it came in the ZIP), enable Pages (GitHub Actions), re-run if needed, open the live URL.

Optional in-project checklist: open `WORKSHOP.md` in VS Code after you unzip the starter. Check steps off by editing `[ ]` → `[x]` (Markdown Preview shows boxes but does not let you click them).

## Starter download

- [portfolio-starter.zip](https://skyeshanohan.github.io/workshopsite/downloads/portfolio-starter.zip)

## If you are behind

Open the online guide and choose a recovery option:

- **Starting fresh:** return to Mission 1 and download the starter ZIP.
- **Local site works:** skip setup and continue to personalization / Git.
- **Need a finished example:** [workshop1-demo-portfolio](https://github.com/skyeshanohan/workshop1-demo-portfolio) · [live site](https://skyeshanohan.github.io/workshop1-demo-portfolio/)
- **Example resume:** [tyler-beach.github.io/example-my-resume-site](https://tyler-beach.github.io/example-my-resume-site/)
- **Push failed:** run `git status` and `git remote -v`; check auth (browser login or personal access token). Do not force-push.
- **Deploy failed:** enable Pages → GitHub Actions, then re-run the failed workflow.

## Safety

Do not paste passwords, API tokens, private keys, or confidential information into prompts or source files. Only publish personal details you are comfortable making public.

## Completion evidence

- [ ] The project runs locally.
- [ ] `profile.js` has your details (and optional photo).
- [ ] A focused change is visible in the diff and recorded in a descriptive commit.
- [ ] The issue/branch/pull-request path was completed or demonstrated.
- [ ] The latest deployment succeeded and the real public URL opens.
