---
pillar: ai-ready
title: I redesigned my site with AI, and then removed the AI look
description: AI did most of the work on my site redesign. The part that made it look like me was the last 20%, auditing the result for AI tells.
date: 2026-11-03
image: /assets/redesigning-alexandrade-dev/cover.jpg
tags:
  - Design Systems
  - AI
  - Design Tokens
  - Claude
---

You have probably noticed it. Sites built with AI start to look the same: numbered sections, `//` labels, an accent colour on everything, cards for everything.

I just redesigned [alexandrade.dev](https://www.alexandrade.dev) with AI, and my first draft had all of it. Here is what I learned: AI can do most of the work on a redesign, but only if you follow the real design process one step at a time. The last 20%, auditing the result for AI tells, is what makes it look like you.

![A craftsman paints the final touch on a poster while a friendly robot assistant watches](/assets/redesigning-alexandrade-dev/cover.jpg)

## My site looked like a template

I wanted my personal site to feel more alive. Before, it felt like a template. It also had no space for my talks.

The hero headline was a job title: "Hey! I'm Alex, a Senior Frontend Engineer". The header said "Alex Andrade - Blog", next to a generic `</>` logo in an indigo gradient. Stock Tailwind slate and indigo, Geist everywhere, and "Featured Posts" was as loud as the H1. Two posts from 2021 were featured on the homepage, so the site looked dormant.

That's a problem for anyone. For a design systems person, it's a bigger one, because the site is the portfolio. How it's built (tokens, a documented system, accessibility checks) is part of the content.

## Vibe coding vs what I did

I used AI for almost every step. But I did each step myself, in order, and reviewed every output before moving on. The AI did a lot of the work, and I made the decisions. AI was my coworker on this one.

| Vibe coding                                     | What I did                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Describe the end result, accept what comes back | Break the work into the steps a designer and engineer would follow                                |
| One big prompt                                  | One step at a time: audit → identity → design system → page design → code → design audit → polish |
| Judge by "does it run?"                         | Judge by the brief: positioning, contrast ratios, consistency, "does this look like me?"          |
| AI output is the result                         | AI output is a first draft I iterate on, frame by frame                                           |

I didn't hand AI the wheel. I gave it a seat on the team.

## Plan before you prompt

Before touching the design, I wrote down what the site has to do:

1. **Who I am and what I'm working on now.** Not just "Senior Frontend Engineer".
2. **My talks and writing.** They are the proof, so they need first-class places: `/speaking`, and writing grouped by pillar.
3. **Value people can use.** You should leave with something you can apply, including how this site was built.

Then I asked Claude for a brand audit of the site against what the design systems field is talking about in 2026. The key result was a positioning line:

> I build design systems that both humans and AI agents get right.

It also gave me three content pillars: AI-ready design systems, design system architecture, and DS quality and DX.

I turned the audit's roadmap into two GitHub issues, so the work had a definition of done. Issue #5 was the quick wins (positioning, RSS, OG images, bug fixes, newsletter). Issue #6 was the brand identity and redesign. The plan went in before any code.

## Finding a logo, one round at a time

I asked Claude Design for a few logo directions. It gave me three: Living Skies, Token Grid and Workshop.

![Three logo directions from Claude Design: Living Skies, an A under an aurora arc on navy; Token Grid, an A built from small squares with one orange square; and Workshop, an A made of two joined parts in cream and tan](/assets/redesigning-alexandrade-dev/initial-logo-proposals.png)

I went with Token Grid, but I wanted to change it a bit. So I asked for three more variations in that style: Counter A, Cursor and Spec.

![Second round of Token Grid marks: Counter A, a bold A with one orange square as its counter; Cursor, the initials "aa" with a block cursor; and Spec, an A inside orange crop marks](/assets/redesigning-alexandrade-dev/logo-second-round.png)

I picked Spec: an A inside crop marks, like a component on a design spec.

![The Spec mark refined: a black A inside orange crop marks on paper and on ink, at sizes from 96 down to 16 pixels, as a browser tab and app icon, and in lockups with the lowercase "alex andrade" wordmark](/assets/redesigning-alexandrade-dev/spec-logo-style.png)

Same tool, two rounds, and each round I chose. That's the pattern for the rest of the project.

## Colour and type: AI suggests, I decide

The plan changed during design. The audit suggested a "land of living skies" prairie-sky palette and a display serif paired with Geist. Working through it in Claude Design, I went somewhere else.

- **Before:** prairie-sky colours, a serif for display, Geist for the rest.
- **After:** paper and ink, plus one orange signal colour. Light theme is `#f4f4f0` / `#111111` / `#f04e17`, dark theme `#111111` / `#f4f4f0` / `#ff6a33`. Space Grotesk for headings and body, JetBrains Mono for dates, tags, counts and code.

Why orange? It brings the contrast and boldness I wanted to pass to my readers.

## The site runs on its own design system

I'm a design systems engineer, so a style guide picture wasn't enough. The identity became a real design system in the repo, called Spec.

`app/lib/tokens.ts` is the single source of truth. From it, the site generates:

- the CSS variables,
- the OG image colours,
- the [/system](https://www.alexandrade.dev/system) docs page,
- and [`/system/tokens.json`](https://www.alexandrade.dev/system/tokens.json), in Design Tokens Community Group format, with both themes, readable by people and AI agents.

Components use semantic tokens like `background`, `foreground`, `signal` and `on-primary`. Light and dark only swap values, so there are no `dark:` variants.

The system also has three principles:

1. _Frame what matters._ Crop marks frame the logo and one object per page. If everything is framed, nothing is.
2. _One signal._ Orange is for crop marks, focus rings and link underlines. Everything else is paper and ink.
3. _Tokens, not values._ Components use semantic names, and themes change the values.

And then the system caught its own bug. `/system` computes the WCAG contrast of every token at build time. It flagged my original light signal, `#ff5a1f`, at **2.83:1**. That's below the 3:1 minimum for focus rings. It became `#f04e17`, at **3.28:1**.

I would have shipped that. The design system checked the design 👌

## From design to code in about two days

I asked Claude Design for a first draft of the redesigned site, using the new identity and the structure from the audit. Then I went through it frame by frame, changing layout, copy and hierarchy until it looked the way I wanted.

One thing kept showing up. Claude Design used brackets `[]` and orange in lots of places: headers, the main article and more. That's not what those elements are for. I limited them to the image and the key elements that need attention.

Then the design moved to code with Claude Code, as a sequence of small PRs. I reviewed and merged each one. Each PR has a before/after, a test plan (`lint`, `tsc`, `build`, light and dark at 1440px and 390px), and a "Not in this PR" list. Yes, even for a personal site.

The audit, the redesign, the design system and all the new pages landed in about two days, October 29 and 30.

## "It reads as AI-generated"

After the redesign was live, I asked Claude to run a design audit of my own site. The verdict: **it read as AI-generated.**

Ouch. But it was right.

Orange was doing six jobs at once: nav numbers, `//` labels, section numbers, crop marks on everything, filled buttons and hover states. When an accent colour means everything, it stops meaning anything.

Here is what changed on the homepage:

| Before                                    | After                         |
| ----------------------------------------- | ----------------------------- |
| 22 orange text elements                   | 2                             |
| 7 crop-mark frames (16 site-wide)         | 1                             |
| `01–04` section numbers                   | removed                       |
| `//` eyebrow labels                       | removed                       |
| Three-card grids                          | ruled rows                    |
| A stats strip                             | one mono line                 |
| Hover states turn orange                  | fade or underline             |

The copy got the same treatment. I rewrote About in plainer first person: same facts, less LinkedIn-speak. And the tagline stopped repeating across the footer, About, bios, talks and pillars.

Look at that list again. Numbered sections, `//` labels, an accent colour everywhere, cards for everything. Those are the tics you see on so many AI-built sites, and my first draft had every one. Taste and review removed them.

The last step was to write the new rules back into [/system](https://www.alexandrade.dev/system). No `//` labels. No `01 · 02 · 03` unless order is real. One signal. That way the system remembers the lesson.

That last 20% is the difference between vibe coding and engineering with AI.

## Before and after

Here is the homepage before:

![The old homepage: a "Hey! I'm Alex, a Senior Frontend Engineer" headline, a generic code-bracket logo with an indigo gradient, and stock Tailwind slate and indigo styling](/assets/redesigning-alexandrade-dev/home-before.png)

And after:

![The new homepage in paper and ink, with the headline "Design systems that humans and AI agents get right.", the Spec logo in orange crop marks, and a portrait in a matching crop-mark frame](/assets/redesigning-alexandrade-dev/home-after.png)

The blog, before and after:

![The old blog listing in stock Tailwind slate and indigo with Geist type, headed "Featured Posts" with an indigo count of 7 and a three-column card grid](/assets/redesigning-alexandrade-dev/blog-before.png)

![The new blog listing titled "Writing" in Space Grotesk on paper and ink, with a "// writing · 07 posts" label and ruled rows of posts, dates and tags in JetBrains Mono](/assets/redesigning-alexandrade-dev/blog-after.png)

## What you can take into your own work

- **Plan before you prompt.** Write the audit, the positioning and the definition of done first. AI works better when the goal is concrete.
- **Follow the real process.** Identity, system, design, code, audit. Don't skip to "build me a site".
- **Treat AI output as a first draft.** Pick, refine, reject.
- **Make the system enforce your rules.** Tokens as the source of truth, plus automated contrast checks.
- **Audit for AI tells.** Overused accent colours, numbered sections, `//` labels, cards everywhere, repeated taglines. Take them out on purpose.
- **Ship in small PRs**, with before/after screenshots and test plans.
- **Write it down as you go.** The before screenshots, the audit and the PR descriptions made this post possible.

## Let's wrap it up

AI built most of my new site. Claude did the audit, Claude Design drew the logo and the first draft, and Claude Code wrote most of the PRs.

But it only worked because I took it one step at a time, and made the call at every step. And the version that looks like me came from the end, when I asked "does this read as AI?" and the answer was yes.

So next time you build something with AI, save time for that last 20%. Go check [/system](https://www.alexandrade.dev/system) and see how the rules ended up. And if you spot an AI tell I missed, let me know 😅
