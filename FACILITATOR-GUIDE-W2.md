# Facilitator Guide — Workshop 2: Secure Development

## Audience

Students typically have **~one development class** and an **intro Python** course. **No security experience** is assumed.

This workshop is a **first introduction** to:

1. What a GitHub **workflow / Action / run** is (five-word vocabulary + UI walkthrough)  
2. Opening a red GitHub Actions check  
3. Reading scanner output + LEARN blocks  
4. Clicking one research link (CWE / advisory) and restating the risk in plain English  
5. Applying a **guided** fix in the GitHub web editor  

It is **not** a prioritization / threat-modeling exercise. Do **not** ask “which would you fix first in a real app?” — they do not have the background yet.

## Outcomes

Students leave able to:

1. Clone the lab from [bsbcyber/secure-dev-lab](https://github.com/bsbcyber/secure-dev-lab) (browser-only).
2. Separate a **finding** from a **tool/setup error**.
3. Follow guided remediations on a **Python** multi-finding baseline (Semgrep, OSV, Gitleaks, zizmor).
4. Open a PR that re-runs checks.
5. Add a short case study on their Workshop 1 resume site (do **not** deploy the lab).

Exit ticket: explain **two** findings using the READ prompts (tool, file/line, one-sentence risk, what you changed) + show a resume link to **their** lab.

## How the room works (partners + tiers)

**Individual labs + fixed discussion partners — not a shared repo.**

1. Minute ~5: pick a **discussion partner** for the whole 2 hours.
2. Each person uses **their own** template copy.
3. Partners use **READ prompts** before each fix (see below).
4. You **gate** the room at G0 / G1 / G2.
5. **Must / Should / Stretch** so mixed skill lasts ~2 hours.

### Partner READ prompts (project these)

1. What **tool** and **rule id** is this?  
2. What **file** and **line** does LEARN / the log name?  
3. Open the file — does that line match?  
4. Open one **READ MORE** link. In one plain sentence, what risk does it describe?  
5. What does **THIS IS HOW TO FIX THIS** show (file + REPLACE WITH block)?  

### Must / Should / Stretch

| Tier | Target | Done when |
|---|---|---|
| **Must** | ~70–90 min | Scout + Semgrep **Commit A** (`eval` + `exec`) + OSV green for **PyYAML + Flask** |
| **Should** | full 2h | All 4 Semgrep + 3 secrets + workflow |
| **Stretch** | when ahead | PR + resume case study (≥2 findings) + peer-review partner |

### Hard gates

| Gate | Room must show |
|---|---|
| **G0** | Partners complete READ prompts 1–3 on one failed job |
| **G1** | Commit A landed (Semgrep count dropped; eval+exec gone) |
| **G2** | OSV green for both Python packages |

### Early finishers

Should → Stretch → help partner with READ prompts. Do not dismiss at minute 20.

## Canonical URLs

| Material | URL |
|---|---|
| Student walkthrough | https://bsbcyber.github.io/workshop-site/student-guide-2/ |
| Agenda | https://bsbcyber.github.io/workshop-site/workshop-2/ |
| Facilitator deck | https://bsbcyber.github.io/workshop-site/slides-2/ |
| PowerPoint | https://bsbcyber.github.io/workshop-site/downloads/workshop-2-presentation.pptx |
| Lab template | https://github.com/bsbcyber/secure-dev-lab |
| Catch-up green branch | https://github.com/bsbcyber/secure-dev-lab/tree/validation/fixed-baseline |

## Two-hour agenda

| Time | Round | Activity | Facilitation note |
|---|---|---|---|
| 0:00–0:10 | 0 | Outcome + safety + partners | Audience framing. READ prompts. Must/Should/Stretch. Python sample app. |
| 0:10–0:20 | 0 | Template → first run | Own repo. 5 jobs. Tests green; scanners red. |
| 0:20–0:28 | 0 | **What is GitHub Actions?** | Leave **Actions vocab + walkthrough** slides up. Script below. |
| 0:28–0:38 | 0 | Scout + **G0** | Partners compare tallies; READ prompts on one job. |
| 0:38–1:05 | 1 | Semgrep Commit A → **G1** | Leave **Commit A snippet** slide up. Students type into *their* repo. Same allowlist for `preview_formula` (no `exec`). |
| 1:05–1:25 | 2 | OSV → **G2** | Read advisory links live; update `requirements.txt` pins. |
| 1:25–1:40 | 3 | Secrets (Should) | Clear three fixtures; revoke-first if real. |
| 1:40–1:55 | 4 | Workflow (Should) | Copy SHAs from security-lab.yml; drop dangerous trigger. |
| 1:55–2:00 | 5 | Stretch / exit | PR + case study kickoff; peer-review. |

### Facilitator script — What is GitHub Actions? (~8 min)

Keep it interactive on **their** repo. Do **not** teach YAML authoring.

1. **Five words (project slide):** workflow = recipe file; job = named box; step = one line; Action = reusable `uses:` package; run = one execution in the Actions tab.
2. **Cold-call:** “Point at a *job* on your Security Lab run. Now point at the *workflow file* that defined it.”
3. **Walk:** Actions → Security Lab **run** → Code → `.github/workflows/security-lab.yml` → find `on:` and `jobs:` → back to run → open one red job → expand one step + LEARN → find a `uses:` line in the YAML.
4. **Why it matters (one sentence):** “GitHub can re-run these checks on every push so you don’t install scanners locally — today that automation is how Semgrep / OSV / Gitleaks / zizmor show up.”
5. Then advance to Gate G0.

**Fallback:** Stop after **G2**. Secrets/zizmor/case study = homework.

## Cold-call prompts (beginner-safe)

- “Unit tests are green and Semgrep is red. Is the lab broken?”
- “In one sentence: what is a workflow vs a run?”
- “Show me a `uses:` line — what is that called?”
- “What file and line did LEARN name for this finding?”
- “In one sentence, what did the CWE / advisory page say?”
- “What did THIS IS HOW TO FIX THIS ask you to paste?”
- “Finding vs tool failure — which one did you just see?”
- “Why might OSV care about a package you never import?”
- “Have you hit Must yet — or are you on Should / Stretch?”

Avoid: “Which vulnerability is highest severity?” / “What would you fix first in production?”

## Before class

1. Confirm template is public + Template-enabled.
2. Dry-run Actions: tests green; Semgrep 4; OSV on PyYAML+Flask; Gitleaks 3; zizmor themes; LEARN prints.
3. Record today’s fixed versions for both packages.
4. Know the **Commit A snippet** slide (allowlist replacing `eval` / `exec`) — leave it on the projector while they type.
5. LEARN blocks now include **THIS IS HOW TO FIX THIS** with copy-paste code. Encourage Copilot Chat: “Apply this LEARN fix exactly; do not invent extra changes.”
6. Catch-up: labeled [`validation/fixed-baseline`](https://github.com/bsbcyber/secure-dev-lab/tree/validation/fixed-baseline) only (Python remediations; all scanners green as of refresh).

### Commit A projector snippet (copy if slides are down)

```python
_ALLOWED = {"2 + 3": 5, "1 + 1": 2, "2 * 4": 8}

def preview_expression(expression: str):
    key = expression.strip()
    if key not in _ALLOWED:
        raise ValueError("not allowed")
    return _ALLOWED[key]

# Same allowlist idea for preview_formula — do not call exec().
```

## Catch-up / troubleshooting

| Situation | Path |
|---|---|
| Actions blocked | Partner walks enable → re-run |
| Behind after scout | Facilitator-led Commit A to clear G1 |
| Stuck on Python edit | Project the allowlist snippet; they still type it into **their** repo |
| Lock/requirements confusion | Give today’s verified pins |
| Sharing one repo | Stop; each needs their own for the resume link |

## What not to do

- Do not execute the inert workflow fixture.
- Do not paste real secrets.
- Do not deploy the lab.
- Do not treat a clean scan as “secure forever.”
- Do not turn partner time into expert severity ranking.
