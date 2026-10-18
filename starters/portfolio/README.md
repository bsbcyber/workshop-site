# Your portfolio starter

Build a personal resume site with Astro, then publish it with GitHub Pages.

No prior web experience required. Follow the workshop student guide, or use this README.

## 1. Choose your theme

Open `src/data/profile.js` and set `theme` to one of:

| Value | Layout |
| --- | --- |
| `editorial` | Warm, story-led page with a large photo and experience timeline |
| `developer` | Dark, projects-first layout with a terminal-style intro |
| `professional` | Two-column resume layout recruiters can scan quickly |

You can also download a ZIP that already has your theme selected from the workshop **Portfolio lab** page.

## 2. Add your details

Still in `src/data/profile.js`, replace the sample text:

- `name`, `role`, `location`, `tagline`, `about`
- `email`, `github`, `linkedin`
- `skills` (a list of short strings)
- `education` (school, degree, detail)
- `experience` (add or remove objects in the list)
- `projects` (add or remove objects in the list)

### Add a role (experience)

Copy one object inside the `experience: [ ... ]` list and edit it:

```js
{
  title: 'Cashier',
  organization: 'Campus Store',
  date: '2024–2025',
  summary: 'Helped customers, handled a register, and trained two new teammates.',
}
```

### Add a project

Copy one object inside the `projects: [ ... ]` list and edit it:

```js
{
  kind: 'CLASS PROJECT',
  title: 'Inventory spreadsheet',
  summary: 'Built a tracker that reduced stock-check time for a student org.',
  skills: ['Excel', 'Documentation'],
  link: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
}
```

## 3. Add a photo (optional)

1. Save a clear headshot as `photo.jpg`.
2. Put it in the `public/` folder.
3. In `src/data/profile.js`, set:

```js
photo: '/photo.jpg',
```

To use initials instead of a photo:

```js
photo: '',
```

## 4. Preview on your computer

Requirements: Node.js 22, Git, and VS Code.

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:4321`).

## 5. Put the project on GitHub

Create an **empty** public repository on GitHub (no README). Then run these in the VS Code terminal from this folder. Replace the placeholders.

```bash
git init
git add .
git commit -m "Create my portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If Git asks you to sign in, use your GitHub account in the browser prompt, or create a Personal Access Token (classic) with the `repo` scope and paste it when asked for a password.

If Git says your identity is unknown:

```bash
git config --global user.name "Your Name"
git config --global user.email "YOUR-GITHUB-NOREPLY-EMAIL"
```

## 6. Publish with GitHub Pages

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. If the first run failed because Pages was not enabled yet, open that run and choose **Re-run all jobs**.
4. When **Build and deploy portfolio** is green, open the published URL from the Pages settings page.
5. Check the homepage, your photo, one project link, and a narrow/mobile window.

Your live URL usually looks like:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

## Before you share

- Only publish details you are comfortable making public.
- Do not commit passwords, API tokens, or private keys.
- Describe team work honestly.
- Review AI-generated edits before you commit them.
