# Workshop 1 journey — follow along in VS Code

Use this file as a checklist beside your editor. For the full click-by-click walkthrough (screenshots, copy examples, error help), use the **online student guide** your facilitator shares.

**You do not need to know JavaScript, HTML, or CSS.** Almost all content edits are in one file: `src/data/profile.js`. Change the words between quotes, save, and check localhost.

### Checking off steps

Markdown Preview draws boxes but stock VS Code does **not** let you click them. To mark a step done, in the **editor** change `- [ ]` to `- [x]` (type an `x` between the brackets) and save.

**Where you work**

| Label | Meaning |
| --- | --- |
| **VS Code** | Clicks or typing inside Visual Studio Code |
| **Terminal** | The panel at the bottom of VS Code (or a second terminal tab) |
| **GitHub** | Your browser on github.com |
| **Browser** | Local preview (`localhost`) or your live site |

**Goal:** build out *your* resume in this starter → open a real pull request tied to an issue → get a partner +1 → publish on GitHub Pages.

### Git words (read once)

| Word | Standard explanation |
| --- | --- |
| **Repository (repo)** | The project folder plus its history |
| **Commit** | A named checkpoint saved on your laptop |
| **Push** | Upload your commits to GitHub |
| **Branch** | A named line of work (we keep feature work off `main` until reviewed) |
| **Stage (+)** | Choose which edited files go into the next commit |
| **Pull request (PR)** | A GitHub page to review a branch before merging into `main` |
| **Merge** | Accept the PR so those commits land on `main` |

**Rule when stuck:** in **Terminal**, run `git status` and read the first lines (which branch? what changed?). Then ask for help with that output.

---

## Before you start

- [ ] **GitHub** — signed in at [github.com](https://github.com)
- [ ] **VS Code** — installed and open
- [ ] **Terminal** (in VS Code) — these print version numbers:

```bash
git --version
node --version
npm --version
```

Prefer Node.js **22**. Node 18+ usually works locally.

**VS Code map:** Activity Bar (far left icons) · Side Bar · Editor (center) · Status Bar (very bottom — shows branch name).

---

## Step 1 — Open this folder · VS Code

You should already have unzipped the starter into `my-resume-site`.

- [ ] **VS Code** · **File → Open Folder…** → select `my-resume-site` (you should see `package.json`, `src`, `public`, `WORKSHOP.md`)
- [ ] **VS Code** · Trust the authors if asked
- [ ] **VS Code** · **Terminal → New Terminal**

---

## Step 2 — Create an empty repository · GitHub

- [ ] **GitHub** · open [github.com/new](https://github.com/new)
- [ ] **GitHub** · name it something like `my-resume-site`
- [ ] **GitHub** · choose **Public** (needed for free GitHub Pages on a normal project repo)
- [ ] **GitHub** · leave **Add a README**, license, and .gitignore **unchecked**
- [ ] **GitHub** · click **Create repository**
- [ ] **GitHub** · copy the HTTPS URL into a note  
  (`https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git`)

Do not push yet.

---

## Step 3 — Run locally, then first push · VS Code + Terminal + GitHub

### 3a · Preview · Terminal

```bash
npm install
npm run dev
```

- [ ] **Terminal** · wait until `npm install` finishes (can take 1–2 minutes)
- [ ] **Browser** · open the `localhost` link from the terminal (usually `http://localhost:4321`)
- [ ] **Browser** · you see the sample resume

Keep that terminal running. In **VS Code**, click **+** in the terminal panel title bar to open a **second** terminal for Git.

### 3b · First push · Terminal (one command at a time)

Click inside the **second** terminal. You should see `my-resume-site` in the path. Run **one line, then Enter**, and only continue if it succeeds.

**1 — Start Git history**

```bash
git init
```

**2 — Stage all project files**

```bash
git add .
```

**3 — Check what is staged**

```bash
git status
```

You should see many files “to be committed,” including `src/data/profile.js` and `.github/workflows/deploy.yml`.

**4 — Save the first checkpoint**

```bash
git commit -m "Create my portfolio"
```

If Git says **Author identity unknown**, run these first (use your name + [GitHub noreply email](https://github.com/settings/emails)), then retry the commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "YOUR-GITHUB-NOREPLY-EMAIL"
```

**5 — Name the main branch**

```bash
git branch -M main
```

**6 — Connect this folder to your GitHub repo**  
Replace the URL with the one you copied in Step 2:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

If it says `remote origin already exists`, run `git remote -v` and ask a facilitator before changing it.

**7 — Upload to GitHub**

```bash
git push -u origin main
```

- [ ] **GitHub** · refresh your repo — your files are there
- [ ] **GitHub** · **Actions** may show a **red X** on deploy. That is normal. Do **not** rewrite files to “fix” it yet — Pages is Step 6.

**If push asks for a password:** GitHub will **not** accept your normal account password. Prefer the browser sign-in window if it opens. Or create a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `repo` scope and paste that as the password (username = your GitHub username). Do not force-push.

---

## Step 4 — Build out your resume · VS Code (+ Browser for preview)

Stay on `main`. **Do not Commit / Sync in Source Control yet.**

### Reading `profile.js` (no coding class required)

| Symbol | Standard explanation |
| --- | --- |
| `'text'` | Your words go **between** the quotes. Leave the quotes in place. |
| `name:` | A **label**. Do not rename labels like `skills:` or `education:`. Change only the value after the colon. |
| `,` | Separates items in a list. Missing commas are the #1 cause of red errors. |
| `[ ... ]` | A **list** that can hold one item or many. |
| `{ ... }` | One **card/entry** (one school, one job, one project). |
| `[]` | Empty list = that section stays **hidden** on the site. |

Anything written as `something: [ ... ]` supports **multiple entries**. One item inside the brackets = one row/card on the site. Add more items inside the **same** list (do not create a second `education:` label).

**Seeing your edits:** keep `npm run dev` running. **Save** the file (`Cmd`/`Ctrl`+`S`). Localhost usually updates on its own; if not, refresh the browser tab. You do **not** need to commit or push to preview locally.

### 4a · Open the file and edit the top fields

- [ ] **VS Code** · Explorer → `src` → `data` → `profile.js`
- [ ] **VS Code** · change the text between quotes for `name`, `role`, `location`, `tagline`, `about`, `email`, `github`, `linkedin` (no `example.com` leftovers)
- [ ] **VS Code** · save — white dot on the tab means unsaved

### 4b · Skills (several tags)

- [ ] **VS Code** · search (`Cmd`/`Ctrl`+`F`) for `skills:`
- [ ] **VS Code** · each quoted string (`'Python',`) is one skill chip — replace samples with yours
- [ ] **VS Code** · add more skills by adding more quoted lines inside `[ ... ]`; delete a line to remove a skill
- [ ] **Browser** · Skills section on localhost matches you

### 4c · Education (one or more schools)

- [ ] **VS Code** · search for `education:`
- [ ] **VS Code** · edit `school`, `degree`, and `detail` on the first school object
- [ ] **VS Code** · for a second school (transfer, associate’s, master’s): paste another `{ ... },` object **inside** the same `[ ... ]` after the previous `},`
- [ ] **Browser** · every school you want appears under Education

### 4d · Coursework & activities

- [ ] **VS Code** · search `coursework:` / `activities:` — edit existing objects or paste more `{ ... },` objects inside those lists
- [ ] **VS Code** · or set a list to `[]` if you do not want that section shown

### 4e · Experience (optional)

- [ ] **VS Code** · search `experience:` — `[]` means none yet (fine)
- [ ] **VS Code** · for a job/internship: put one or more `{ title, organization, date, summary, highlights }` objects inside `experience: [ ... ]`

### 4f · Projects

The `projects: [ ... ]` list drives the **Projects** section. Each `{ ... }` object = one project card. A `slug` also builds `/projects/your-slug/`.

- [ ] **VS Code** · search for `projects:`
- [ ] **VS Code** · **prefer editing a sample** first (`title`, `slug`, `summary`, `skills`, `link`) — keep commas and quotes
- [ ] **VS Code** · `slug` = URL piece only (lowercase + hyphens), e.g. `inventory-tracker`
- [ ] **VS Code** · `screenshots: []` is fine if you have no images yet
- [ ] **VS Code** · to add another project: paste a new object **inside** `[ ... ]` after an existing `},` (never at the top of the file)
- [ ] **Browser** · check Projects on the home page and open a project detail page if you set a `slug`

### 4g · Photo (optional) + check

- [ ] **VS Code** · optional: put `photo.jpg` in `public/` and set `photo: '/photo.jpg'`
- [ ] **Browser** · desktop + narrow width; links go to *your* pages, not placeholders
- [ ] **VS Code** · Source Control may show a number badge — still **do not** Commit yet

---

## Step 5 — Issue → branch → commit → pull request → partner +1

Yes: you create a real GitHub **issue**, then a real **pull request**, get a **partner +1** from the person beside you, and **link** the PR so merging closes the issue.

### 5a · Create the issue · GitHub

- [ ] **GitHub** · your repo → **Issues** → **New issue**
- [ ] **GitHub** · if you see **Featured project**, choose it (comes from the starter). Otherwise paste the template below.
- [ ] **GitHub** · click **Create**
- [ ] **GitHub** · note the issue number (e.g. `#1`)

#### Issue body — copy this

**Title:** `Add a featured project card`

```markdown
## What I’m adding or updating

Featured project card for: [your project name]

## Done when

- [ ] Project title and summary are honest (my real work)
- [ ] Link works (repo, demo, or doc) — not an example.com placeholder
- [ ] Looks readable on a phone-width browser window
- [ ] No secrets, passwords, or private personal details in the change

## Notes

[optional]
```

(Same text ships in `.github/ISSUE_TEMPLATE/featured-project.md`.)

### 5b · Create the branch · VS Code

Your uncommitted Step 4 edits will move onto the new branch — that is what we want.

- [ ] **VS Code** · Status Bar (bottom left) should say `main` → click it
- [ ] **VS Code** · **Create new branch…** → type exactly `add-featured-project` → Enter
- [ ] **VS Code** · Status Bar now shows `add-featured-project`

### 5c · Match the issue · VS Code + Browser

- [ ] **VS Code** · finish the featured project (and any other resume edits) in `profile.js`
- [ ] **VS Code** · save
- [ ] **Browser** · refresh localhost and check it

### 5d · Commit and publish the branch · VS Code

- [ ] **VS Code** · Activity Bar → **Source Control**
- [ ] **VS Code** · under **Changes**, click `profile.js` — read the green/red diff
- [ ] **VS Code** · click **+** to **Stage** → file moves under **Staged Changes**
- [ ] **VS Code** · message e.g. `Add featured project card` → **Commit**
- [ ] **VS Code** · **Publish Branch** (or **Sync Changes** / cloud icon)

### 5e · Open the pull request and attach it to the issue · GitHub

An **issue** is the task. A **pull request** is the proposed fix. You must **link (attach)** them. Two ways:

| Method | Where | What it does |
| --- | --- | --- |
| **A · Keywords (do this)** | PR description body | `Closes #1` on its own line attaches the PR **and** closes the issue when you merge |
| **B · Link an issue (UI)** | PR page → right sidebar → **Development** → **Link an issue** | Attaches them in the GitHub UI (pick your issue from the list) |

Do **A**. Also do **B** if you want to see the link clearly in the sidebar. If you only do B without `Closes #…`, the issue may stay open after merge.

- [ ] **GitHub** · yellow banner **Compare & pull request** (or **Pull requests → New**)
- [ ] **GitHub** · **base:** `main` · **compare:** `add-featured-project`
- [ ] **GitHub** · PR description includes `Closes #1` on its **own line** (your real issue number — e.g. `Closes #2`)
- [ ] **GitHub** · **Create pull request**
- [ ] **GitHub** · on the PR → right sidebar **Development** → **Link an issue** (or gear / **+**) → select your issue
- [ ] **GitHub** · open the **issue** page → under **Development**, confirm this PR is listed
- [ ] **GitHub** · open **Files changed** — matches the issue?
- [ ] **Do not merge yet** — copy your PR URL for a partner review

### 5f · Partner +1 review · GitHub

- [ ] Pick a partner next to you and swap PR links
- [ ] On **their** PR → **Files changed** → skim the diff
- [ ] **Review changes** → **Approve** (or **Comment** with `+1`) → **Submit review**
- [ ] Wait for a +1 on **your** PR
- [ ] **Merge pull request** → **Confirm merge** → delete branch if offered
- [ ] Issue shows **Closed** (because of `Closes #…`)

Odd number in the room? Trio reviews, or ask the facilitator for a +1.

#### Optional · same Step 5d in Terminal

```bash
git status
git add src/data/profile.js
git commit -m "Add featured project card"
git push -u origin add-featured-project
```

Then continue with **5e** on **GitHub**.

---

## Step 6 — Actions and Pages · VS Code (look) + GitHub (click)

Your ZIP already includes `.github/workflows/deploy.yml`. You do not write YAML today.

### What the workflow does

1. **When:** push / merge to `main`
2. **Build:** `npm install` → `npm run build`
3. **Deploy:** publish to GitHub Pages  
   Feature branches do **not** publish.

### Turn Pages on

- [ ] **VS Code** · open `.github/workflows/deploy.yml` once so you recognize it
- [ ] **GitHub** · **Settings → Pages**
- [ ] **GitHub** · **Build and deployment → Source** = **GitHub Actions**
- [ ] **GitHub** · **Actions** → open **Build and deploy portfolio**
- [ ] **GitHub** · if it failed earlier: **Re-run all jobs**
- [ ] **GitHub** · wait for green
- [ ] **GitHub** · **Settings → Pages** → open the site URL  
  (`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`)
- [ ] **Browser** · homepage, photo (if any), a project link, narrow window

---

## If something breaks

| Symptom | Where | Try this |
| --- | --- | --- |
| Not sure what Git is doing | Terminal | `git status` — read branch name + changed files |
| Author identity unknown | Terminal | Set `user.name` / `user.email` (Step 3b), retry commit |
| Push asks for a password | Terminal / GitHub | Browser login or PAT with `repo` — not your account password |
| `remote origin already exists` | Terminal | `git remote -v` — ask before changing |
| Accidental commit on `main` | VS Code / facilitator | Stop; tell a helper your Status Bar branch name |
| Publish Branch missing | VS Code | Look for **Sync Changes** / cloud icon, or use the optional terminal push in 5d |
| Actions deploy failed | GitHub | Pages Source = GitHub Actions, then Re-run all jobs |
| 404 on the live site | Browser / GitHub | Full project URL? Latest run green? Hard refresh |
| Change missing on live site | GitHub / Browser | Merged to `main`? Wait for Actions · hard refresh |
| Issue didn’t close | GitHub | PR description must include `Closes #N` with the right number |
| `profile.js` SyntaxError | VS Code | Missing/extra comma — Undo, save, retry |
| Localhost didn’t update | Browser / Terminal | File saved? `npm run dev` still running? Refresh the tab |

When stuck: show a helper your **VS Code** Status Bar branch name, **Terminal** `git status` output, and the first clear error line.

---

## Done when

- [ ] **Browser** · live URL opens and looks like *you* (not the sample person)
- [ ] **GitHub** · you can point to the **issue**, the **PR** (with `Closes #…` + partner +1), and a **green Actions** run
- [ ] You did **not** paste secrets into Copilot or the repo

Optional (**VS Code** + Copilot): ask it to **explain** `profile.js` first, then request **one** focused edit — you review every line.
