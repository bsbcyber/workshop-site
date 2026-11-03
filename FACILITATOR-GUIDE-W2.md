# Facilitator Guide — Workshop 2: Secure Development

## Outcomes

Students leave able to:

1. Clone the lab from the **Use this template** button on [bsbcyber/secure-dev-lab](https://github.com/bsbcyber/secure-dev-lab) (browser-only; no local scanner installs).
2. Read a GitHub Actions security run and separate a **finding** from a **tool/setup error**.
3. **Hunt and remediate a multi-finding baseline**: ~4 Semgrep, 2 SCA packages, 3 secrets, and several workflow issues — not one finding per tool.
4. Open a PR that re-runs checks.
5. Add a short case study on their Workshop 1 resume site linking the lab (do **not** deploy the lab).

Exit ticket: explain **two** findings + remediations out loud, and show a resume bullet or project card that links their lab repo.

## How the room works (partners + tiers)

**Individual labs + fixed discussion partners — not a shared repo.**

1. At minute ~5, students pick a **discussion partner for the whole 2 hours** (pairs; one trio only if odd).
2. Each person creates **their own** template copy and commits on **their own** repo (resume case study needs a personal lab link).
3. Partners sit together, compare tallies, and talk before each fix round — they do **not** push to each other’s repos.
4. You **gate the room** at hard checkpoints (see below) so fast students don’t race ahead of the teaching beats and slow students don’t quietly quit.
5. Completion is **tiered** (Must / Should / Stretch) so mixed skill stays engaged for two hours without a 20-minute exit or a halfway stop.

### Must / Should / Stretch

| Tier | Target time | Definition of done |
|---|---|---|
| **Must** | ~70–90 min | Scout tally with partner + **≥2** Semgrep fixes + **both** SCA packages green |
| **Should** | full 2h | All 4 SAST + all 3 secrets + workflow hardening |
| **Stretch** | when ahead | PR checks + resume case study naming **≥2** findings; peer-review partner’s LEARN blocks / PR |

Announce tiers on the projector early: “Must is the bar to leave. Should is the goal. Stretch if you finish early — help your partner, don’t leave.”

### Hard checkpoints (do not advance the deck until most pairs clear)

| Gate | When | Room must show |
|---|---|---|
| **G0** | After first run | Both partners can state finding vs tool failure + share a tally |
| **G1** | End of SAST block | Semgrep finding count **dropped** (at least 2 of 4 fixed on each laptop) |
| **G2** | End of SCA block | OSV green for **lodash and minimist** (or facilitator-issued lock snippet applied) |

Secrets + zizmor are **Should**, not gates — assign as homework if the room is slow after G2.

### Early finishers (anti–20-minute exit)

Do **not** dismiss. In order:

1. Finish remaining **Should** items on their own repo.
2. Start / deepen the resume case study (tools, before/after counts, lab URL).
3. Peer-review partner: walk their LEARN blocks or PR checks out loud.
4. Help a stuck neighboring pair (clone / Actions allow only — don’t paste fixes silently).

## Canonical URLs

| Material | URL |
|---|---|
| Student walkthrough | https://bsbcyber.github.io/workshop-site/student-guide-2/ |
| Agenda | https://bsbcyber.github.io/workshop-site/workshop-2/ |
| Facilitator deck | https://bsbcyber.github.io/workshop-site/slides-2/ |
| PowerPoint | https://bsbcyber.github.io/workshop-site/downloads/workshop-2-presentation.pptx |
| Lab template | https://github.com/bsbcyber/secure-dev-lab |
| Catch-up green branch | https://github.com/bsbcyber/secure-dev-lab/tree/validation/fixed-baseline |

## Two-hour agenda (multi-finding quest)

Projector = [slides-2](https://bsbcyber.github.io/workshop-site/slides-2/). Students keep the walkthrough + [docs/STUDENT-LAB.md](https://github.com/bsbcyber/secure-dev-lab/blob/main/docs/STUDENT-LAB.md) open. Work in the **GitHub web editor** so time goes to fixing, not tooling installs.

| Time | Round | Activity | Facilitation note |
|---|---|---|---|
| 0:00–0:10 | 0 | Outcome + safety + partners | Assign discussion partners. State Must/Should/Stretch. No deploy. Synthetic secrets only. |
| 0:10–0:25 | 0 | Template → first Security Lab run | Own repo each. Hands up when 5 jobs visible. Unit tests green; scanners red. |
| 0:25–0:35 | 0 | Scout tally → **Gate G0** | Partners compare counts. Cold-call finding vs tool failure. Do not start fixes until G0 clears. |
| 0:35–1:05 | 1 | SAST hunt & fix → **Gate G1** | Discuss which finding first. Prefer two commits. Gate: ≥2 Semgrep fixed each. Push for all 4 if time. |
| 1:05–1:25 | 2 | SCA hunt & fix → **Gate G2** | lodash **and** minimist. Unused-deps-still-matter + “4.17.23 wasn’t enough.” |
| 1:25–1:40 | 3 | Secrets (Should) | Clear **three** fixtures. Cold-call: revoke before delete if real. |
| 1:40–1:55 | 4 | Workflow (Should) | Pin both actions; drop `pull_request_target`; least privilege; `persist-credentials: false`; drop curl\|bash. |
| 1:55–2:00 | 5 | Stretch / exit | PR + case study kickoff; early finishers peer-review. Exit: two findings + lab link. |

**Timing fallback:** Stop after **G2** (Must) if behind. Secrets + zizmor + polished case study = homework. Show `validation/fixed-baseline` only as a labeled finished demo.

## Keep them interactive (not staring)

- Fixed partner for the whole session; talk before each hunt/fix.
- Cold-calls every ~15 minutes (see below).
- One **category per commit** so each Actions run teaches a story.
- Hands-up at G0 / G1 / G2 — don’t advance the room on a single fast pair.
- Early finishers: Should → Stretch → help partner (see above).

## Before class

1. As org admin, confirm [bsbcyber/secure-dev-lab](https://github.com/bsbcyber/secure-dev-lab) is **public** and **Template**.
2. **Use this template** into a throwaway account; allow Actions; run **Security Lab**.
3. Confirm baseline **counts**: Unit tests success; Semgrep ~4; OSV on lodash+minimist; Gitleaks ~3; zizmor themes present (not image-pull errors).
4. Record today’s OSV advisory IDs and fixed versions for **both** packages.
5. Confirm Gitleaks output is redacted.
6. Open slides-2, student-guide-2, and this guide.
7. Prepare catch-up: `validation/fixed-baseline` as a **labeled** finished example — never merge onto student `main` before class.
8. Plan seating / partner prompt so pairs form in the first 10 minutes.

## Cold-call prompts

- “Unit tests are green and Semgrep is red. Is the lab broken?”
- “How many Semgrep findings did you and your partner count?”
- “What is the difference between a finding and a tool that failed to start?”
- “minimist isn’t called in `src/`. Why does OSV still care?”
- “Why do we keep `lab-fixtures/insecure-workflow.yml` outside `.github/workflows/`?”
- “You deleted a secret from the latest file. Is the credential safe if it was real?”
- “Why isn’t ‘pick any version that looks newer’ good enough for SCA?”
- “You cleared one Gitleaks fixture. Why is the job still red?”
- “Have you hit Must yet — or are you on Should / Stretch?”

## Catch-up paths

| Situation | Path |
|---|---|
| Still cloning / Actions disabled | Discussion partner walks template → Actions allow → re-run |
| Behind after scout | Fix SAST-001/002 with the room to clear **G1**; remaining SAST + secrets/zizmor = Should/homework |
| Broken lockfile after SCA | Give today’s verified lodash **and** minimist versions; avoid blind lock edits |
| Need a green example | Show `validation/fixed-baseline` run; label it “already fixed” |
| Finished Must early | Should items → Stretch case study → peer-review partner |

## Troubleshooting

| Symptom | Check |
|---|---|
| No Actions tab / workflows blocked | Settings → Actions → allow; refresh |
| All scanners fail instantly | Image pull / Docker / network — not a finding |
| Semgrep green on first run | Confirm all four seeds still in `src/` + `settings.js` + `.semgrep.yml` |
| Semgrep still red after one fix | Other SAST rules remain — check LEARN keys / count |
| OSV still red after bump | Manifest/lock disagree, second package not updated, or version still in range |
| Gitleaks still red | Any of the three fixtures still matches; rules expect WORKSHOP_FAKE_TOKEN_ / AKIAWORKSHOP / ghp_workshop |
| zizmor still red | Still `@v4`, `pull_request_target`, missing persist-credentials, or write-all remains |
| Students sharing one repo | Stop; each needs their own template for the resume link |
| Student deploys lab | Stop; training only; resume site stays separate |

## What not to do

- Do not execute `lab-fixtures/insecure-workflow.yml` as a real workflow.
- Do not paste real credentials or replace synthetic values with live keys.
- Do not deploy the lab to Pages or any hosting.
- Do not treat a clean scan as “this software is secure.”
- Do not have students rewrite `security-lab.yml` scanner pins mid-class.
- Do not require a shared partner repo — discussion only.

## Cross-links to Workshop 1

Students already practiced issue → branch → commit → PR → reading Actions logs. Reuse that muscle; the new skill is **triaging multi-finding security tooling**, not learning Git from scratch.

## Day-of card in the lab

Keep [docs/INSTRUCTOR.md](https://github.com/bsbcyber/secure-dev-lab/blob/main/docs/INSTRUCTOR.md) as a short checklist. This file is the full playbook.
