# Personal branding redesign: blog post material

Raw material for a future post about rebranding/redesigning alexandrade.dev.
The audit and plan live in [`plans/personal-brand-audit.md`](../../plans/personal-brand-audit.md).

## `before/`: the site before the redesign

Captured 2026-10-29 from the live site (https://www.alexandrade.dev, commit `2dcba47`),
using headless Chrome via Puppeteer.

Naming: `<page>-<viewport>-<theme>.png`

- Pages: `home`, `about`, `blog`, `post-teaching-ai`
- Viewports: `desktop` (1440×900), `mobile` (390×844 @2x)
- Themes: `light`, `dark` (via `prefers-color-scheme`)
- Full-page shots, plus `home-*-fold.png` above-the-fold shots of the hero

## Things spotted in the screenshots (useful "before" details for the post)

- Hero headline is a job title: "Hey! I'm Alex, a Senior Frontend Engineer".
- Missing space in the hero copy: "Design Systems**and** Front-end Development".
- Header brand reads "Alex Andrade - Blog" with a generic `</>` logo.
- Default Tailwind slate + indigo palette; Geist everywhere, with little type hierarchy.
- Half the hero cards point off-site (Resume, LinkedIn).
- "Featured Posts" shows two posts from 2021 next to the 2026 one.
- Post dates render one day early (e.g. "October 01, 2026" for a post dated 2026-10-02), likely a UTC/time zone parsing issue.
- No newsletter, RSS, or contact on the homepage.

## Post outline ideas

1. Why: frontend engineer → recognizable voice in design systems + AI
2. The audit: positioning, identity, structure, content (with before screenshots)
3. Defining the brand: positioning line, pillars, tokens, palette, type
4. Building it: the site runs on its own design system (`/system` page)
5. Before/after comparisons (same pages, viewports, themes)
6. Results after N months: subscribers, traffic, talks, inbound
