# How I redesigned alexandrade.dev: process and intent

Raw material for the redesign post. This file records **why** I did it and **how**, step by step, so the post can show the method and not just the result.
Visual material is in [`before/`](./before) and [`after/`](./after). The audit is in [`plans/personal-brand-audit.md`](../../plans/personal-brand-audit.md).

> Items marked **TODO (Alex)** are things only I know, mostly what happened inside Claude Design. Nothing in the repo records them.

---

## 1. The angle of the post: AI as a coworker, not a vending machine

The post is not "I asked an AI for a website and got one." I used AI for almost every step, but I did each step myself, in order, and reviewed and polished every output before moving on. The AI did a lot of the work, and I made the decisions.

| Vibe coding                                     | What I did                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Describe the end result, accept what comes back | Break the work into the steps a designer and engineer would follow                                |
| One big prompt                                  | One step at a time: audit → identity → design system → page design → code → design audit → polish |
| Judge by "does it run?"                         | Judge by the brief: positioning, contrast ratios, consistency, "does this look like me?"          |
| AI output is the result                         | AI output is a first draft I iterate on, frame by frame                                           |

- **"AI-assisted engineering" / "human-in-the-loop"**: plainer and more widely understood.

A possible framing line: _"I didn't hand AI the wheel. I gave it a seat on the team."_

---

## 2. Intent: what the site has to do

I wrote these goals before touching the design:

1. **Who I am and what I'm working on now.** Someone landing on the page should see right away that I build design systems that both humans and AI agents get right, not just "Senior Frontend Engineer."
2. **My talks and writing.** Talks and posts are the proof, so they need first-class places (`/speaking`, writing grouped by pillar).
3. **Value people can use.** Readers should leave with something they can apply in their own work, including how this site was built.

The design is part of the message. For a design systems person **the site is the portfolio**, so how it's built (tokens, a documented system, accessibility checks) is part of the content.

---

## 3. Starting point (2026-10-29)

Before changing anything, I captured the live site at commit `2dcba47` with Puppeteer: 4 pages × 2 viewports × 2 themes, in [`before/`](./before).

What was wrong, from the audit and the screenshots:

- The hero headline was a job title: "Hey! I'm Alex, a Senior Frontend Engineer".
- The header said "Alex Andrade - Blog", next to a generic `</>` logo in an indigo gradient.
- Stock Tailwind slate and indigo, Geist everywhere, little type hierarchy ("Featured Posts" was as loud as the H1).
- Half the hero cards sent people off-site (Resume, LinkedIn).
- Two posts from 2021 were featured on the homepage, so the site looked dormant.
- No newsletter, no RSS (`/rss.xml` returned 404), no contact.
- Bugs: a missing space ("Design Systems**and**"), and post dates shown a day early (UTC parsing).
- The OG image was a square photo declared as 1200×630, so LinkedIn and X cropped it.

---

## 4. The process, step by step

### Step 0: Audit and plan (AI as researcher and strategist)

- I asked AI for a **brand audit** of the site against what the design systems field is talking about in 2026 (Into Design Systems' AI conference, Hatch 2026, Brad Frost, Josh Comeau). Output: [`plans/personal-brand-audit.md`](../../plans/personal-brand-audit.md).
- Key result: a **positioning line**, "I build design systems that both humans and AI agents get right", and **three content pillars**: AI-ready design systems, design system architecture, and DS quality and DX.
- I turned the audit's roadmap into two GitHub issues so the work had a definition of done:
    - **#5 Phase 1: quick wins** (positioning, RSS, OG images, bug fixes, newsletter)
    - **#6 Phase 2: brand identity and redesign** (logo, palette, type, tokens, `/system`, new structure)
- Commit `908cca9` "rebrand plan" adds the audit and the before screenshots. **The plan went in before any code.**

### Step 1: Identity, starting with the logo (Claude Design)

- I asked Claude Design for **a few logo directions**, picked one, and kept refining it.
- It game 3 options (contentIdeas/personalBranding/otherAssets/initial-logo-proposals.png)
- I went with "Token Grid" but I wanted to change the logo a bit
- Then I asked Claude Design for more 3 variations of the logo on that style (contentIdeas/personalBranding/otherAssets/logo-second-round.png)
- I went with `Spec` (contentIdeas/personalBranding/otherAssets/spec-logo-style.png)

### Step 2: Color and typography

- **The plan changed during design.** The audit suggested a "land of living skies" prairie-sky or aurora palette and a display serif paired with Geist. Working through it in Claude Design, I went somewhere else:
    - **Color:** paper and ink plus **one orange signal color**. Light background `#f4f4f0`, ink `#111111`, signal `#f04e17` (dark theme: `#111111` / `#f4f4f0` / `#ff6a33`).
    - **Type:** **Space Grotesk** for headings and body, **JetBrains Mono** for metadata (dates, tags, counts) and code.
- Why the prairie-sky idea was dropped, and what made paper, ink and orange feel more like me. This is a good "AI suggests, I decide" moment.
    - The orange brings the contrast and boldness I was willing to pass to my readers.

### Step 3: The design system ("Spec")

The identity became a real design system in this repo, not just a style guide picture:

- **`app/lib/tokens.ts` is the single source of truth.** It generates the CSS variables, the OG image colors, the `/system` docs page and [`/system/tokens.json`](https://www.alexandrade.dev/system/tokens.json) (Design Tokens Community Group format, both themes, readable by people and AI agents).
- **Semantic tokens:** `background`, `surface`, `foreground`, `muted`, `line`, `signal`, `signal-text`, `primary`, `on-primary`… Light and dark only swap values, so components need no `dark:` variants.
- **Three principles** (from `/system`):
    1. _Frame what matters._ Crop marks frame the logo and one object per page. If everything is framed, nothing is.
    2. _One signal._ Orange is for crop marks, focus rings and link underlines. Everything else is paper and ink.
    3. _Tokens, not values._ Components use semantic names, and themes change the values.
- **Voice rules:** lowercase wordmark; no `//` labels; no `01 · 02 · 03` unless order is real; "First person, plain words, no hype."
- **The system caught its own bug.** `/system` computes the WCAG contrast of every token at build time. It flagged the original light signal `#ff5a1f` at **2.83:1**, below the 3:1 minimum for focus rings. It became `#f04e17` (3.28:1). Good anecdote: the design system checks the design.
- Shared components pulled out so the docs show what the site actually runs: `ButtonLink`, `Eyebrow`, `SectionHeading`, `Mark` / `Wordmark`, `.crop-marks`.

### Step 4: Page redesign (Claude Design first draft → polished frame by frame)

- I asked Claude Design for a **first draft** of the redesigned site, using the identity and the structure from the audit.
- Then I **went through it frame by frame**, changing layout, copy and hierarchy until it looked the way I wanted.
- which frames changed most, and anything you threw away. Before and after frames from Claude Design would show the polishing.
    - I noticed it started using brackets `[]` in a lot of places (headers, main articl, some headers), the same for the orange color, which was not the purpose of that visual element. I then changes it to only show on the image and key elements to draw attention when needed.
- The target homepage structure (from the audit and issue #6): hero with positioning and CTAs → proof strip → Sous Chef → writing by pillar with a "Start here" read → speaking and community → newsletter.

### Step 5: Implementation in code (Claude Code, one PR per scope)

The design moved to code as a sequence of small, reviewable PRs, most written with Claude Code (each PR ends with "Generated with Claude Code"). I reviewed and merged each one. In order:

| Date     | PR       | What                                                                                                     |
| -------- | -------- | -------------------------------------------------------------------------------------------------------- |
| 10-29    | #3, #4   | Groundwork: JSON-LD, robots, sitemap, `llms.txt`; stop embedding full post bodies in listings            |
| 10-29    | **#8**   | **The redesign**: tokens, logo, new homepage, restyled pages, per-post OG images, RSS, date fix          |
| 10-29    | **#9**   | **`/system`**: tokens as the source of truth, docs page, `tokens.json`, contrast fix                     |
| 10-29    | #10      | Share images for Writing, About and System                                                               |
| 10-29    | #11      | Hide off-pillar 2020 posts from the homepage (`hideFromHome` flag)                                       |
| 10-29/30 | #12, #13 | Buttondown newsletter, with thanks and welcome pages so subscribers stay on the site                     |
| 10-30    | #14, #15 | `/work`: Sous Chef plus three agent-ready products (Kilter Money, Rezme, My Beauty Time)                 |
| 10-30    | #16, #18 | `/speaking`: three talk recordings and a speaker kit (three bio lengths, headshot download)              |
| 10-30    | #17      | Homepage writing grouped by pillar with a "Start here" read                                              |
| 10-30    | #19      | About refresh, and removal of unused stock-Tailwind UI scaffolding                                       |
| 10-30    | **#20**  | **Design audit follow-up** (see step 6)                                                                  |
| 10-30    | #21      | SEO and AI search: canonicals, heading anchors, markdown copy of each post, `llms-full.txt`, VideoObject |

Each PR has a before/after, a test plan (`lint`, `tsc`, `build`, light and dark at 1440px and 390px), and a "Not in this PR" list. The process was disciplined even when it moved fast.

**Speed:** the audit, redesign, design system and all the new pages landed in about **two days** (2026-10-29 → 10-30).

### Step 6: Audit the result and polish (the most honest part)

After the redesign was live, I ran a **design audit of my own site**. The verdict: **it read as AI-generated.**

From PR #20: orange was doing six jobs at once (nav numbers, `//` labels, section numbers, crop marks on everything, filled buttons, hover states), so it stopped meaning anything.

Fixes:

- **Orange got one job.** On the homepage, orange text went from **22 elements to 2**, and crop-mark frames from **7 to 1** (16 uses site-wide before).
- Removed the templated chrome: `01–04` section numbers, `//` eyebrows, three-card grids (now ruled rows), and a stats strip (now one mono line).
- Hover states fade or underline instead of turning orange (#20 and the follow-up commits `b947ae3`, `045f497`).
- **Copy:** About rewritten in plainer first person ("same facts, less LinkedIn-speak"). The tagline stopped repeating across the footer, About, bios, talks and pillars.
- The new rules went back into `/system`, so the system remembers the lesson.

**This is probably the strongest section of the post.** The AI's first draft had every AI-design tic: numbered sections, `//` labels, accent color everywhere, cards for everything. Taste and review removed them. The difference between vibe coding and engineering with AI is that last 20%.

---

## 5. Takeaways readers can apply

1. **Plan before you prompt.** Write the audit, positioning and definition of done first (issues #5 and #6). The AI works better when the goal is concrete.
2. **Follow the real process, step by step.** Identity → system → design → code → audit. Don't skip to "build me a site."
3. **Treat AI output as a first draft.** Pick, refine, reject. Keep a record of what you changed and why.
4. **Make the system enforce your rules.** Tokens as the single source of truth, plus automated contrast checks, caught a bug I would have shipped.
5. **Audit for AI tells.** Overused accent colors, numbered sections, `//` labels, cards everywhere, repeated taglines. Take them out on purpose.
6. **Ship in small PRs** with before and after screenshots and test plans, even for a personal site.
7. **Write it down as you go.** The before screenshots, the audit and the PR descriptions made this post possible.

---

## 6. Assets available for the post

- `before/` and `after/`: same pages (home, about, blog, a post), same viewports (1440 desktop, 390 mobile), both themes, plus home fold shots.
- `after/og-home.png`, `after/og-post.png`: the generated share images.
- The live [`/system`](https://www.alexandrade.dev/system) page and `/system/tokens.json`.
- Brand SVGs in `public/assets/brand/` (`mark-light.svg`, `mark-dark.svg`, `app-icon.svg`).
- PR #8 description (before/after table) and PR #20 description (the "reads as AI-generated" audit, with numbers).

---

## 7. Draft outline

1. **Hook:** my site said "Senior Frontend Engineer". For a design systems person, the site _is_ the portfolio.
2. **Not vibe coding:** AI as a coworker, and the name for that.
3. **The intent:** three goals for the site.
4. **The audit:** before screenshots and the positioning line.
5. **Identity:** logo exploration in Claude Design → the Spec mark.
6. **Color and type:** where the plan changed.
7. **The design system:** tokens as the source of truth, `/system`, the contrast bug it caught.
8. **Design → code:** Claude Design first draft, frame-by-frame polish, small PRs with Claude Code.
9. **"It looks AI-generated":** the self-audit and the 22 → 2 orange story.
10. **Before and after.**
11. **What you can take into your own work.**
