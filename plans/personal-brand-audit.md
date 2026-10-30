# Brand audit: alexandrade.dev

_Audit date: 2026-10-29_

**Verdict:** you have a stronger story than most people trying to build an audience in design systems. You founded and lead a production design system (Sous Chef), you have 15 years of experience, you started a meetup, and you've shipped real AI + MCP work. The website hides all of that. Right now it reads like _a well-built Tailwind blog by a senior frontend engineer_. It should read like _the person to follow on AI-ready design systems_.

## 1. Positioning (the biggest problem)

**What it says now:** "Hey! I'm Alex, a Senior Frontend Engineer". That's a job title, not a brand. Thousands of people could write the same line, and it doesn't give anyone a reason to follow you.

**The opportunity:** "design systems that AI agents can use" is the hottest topic in your field right now:

- Into Design Systems ran a whole AI Design Systems Conference in March 2026. Talks included Indeed on machine-readable design systems for MCP, Miro on making their system AI-ready with MCP and Claude Code skills, and GitHub on building design systems with agents.
- Hatch 2026 held a roundtable on giving AI the right context: tokens, docs and MCPs.

Your post "Teaching AI to use your design system" is exactly that kind of talk, except it's buried on a blog with four-year-old posts next to it.

**Recommendation:** pick one sharp idea and repeat it everywhere (site, LinkedIn headline, GitHub bio, talk abstracts):

> **"I build design systems that both humans and AI agents get right."**
> Design System Lead at 7shifts · creator of Sous Chef · founder of Saskatoon React Meetup

Content pillars, about 80% of what you publish:

1. **AI-ready design systems** (MCP, agent context, docs for LLMs). This is the spearhead.
2. **Design system architecture** (tokens, theming, dark mode, governance).
3. **DS quality and developer experience** (visual testing, the Testing Trophy, the "pit of success" idea).

Drop or archive anything off-pillar from the main feed: GraphQL, "2020 10x growth", hooks in 2020.

## 2. Visual identity: it looks like a template

For a design systems person, **the site itself is your portfolio**. Visitors will judge your taste and rigor by it.

| Element | Now                                    | Issue                                                                                                   |
| ------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Logo    | `</>` in an indigo gradient square     | Generic dev clip-art; nothing about it is yours                                                         |
| Name    | "Alex Andrade - Blog"                  | Frames you as a blog, not a person or authority                                                         |
| Color   | Default Tailwind slate and indigo      | Instantly recognizable as stock Tailwind                                                                |
| Type    | Geist only, very large everywhere      | No hierarchy: "Featured Posts" (text-6xl) shouts as loud as your H1; card titles are text-4xl           |
| Imagery | Old blog screenshots as covers         | Inconsistent; no visual system                                                                          |

**Redesign direction:**

- **A wordmark or monogram** with a design-systems idea built in, such as an "A" made from a token grid or component blocks. Use it on the site, social banners, slides and OG images.
- **Your own token set**, published openly: primitive → semantic tokens, light and dark. Add a small `/system` page that shows the site's own design system ("this site is built on its own tokens"). That's on-brand proof few people bother to show.
- **One signature color that isn't indigo.** Saskatchewan's "land of living skies" gives you a real, ownable story: a prairie-sky gradient or aurora palette instead of Tailwind indigo. It also links the Brazil → Canada journey.
- **A display serif or grotesk paired with Geist** for body text, so headings have character.
- **Generated OG images per post** (title + brand frame via `next/og`). Right now every post shares one square photo (`profile.png`, 1266×1266) declared as 1200×630, so it gets cropped on LinkedIn and X.

## 3. Homepage structure

**Current flow:** hero → four equal cards (Blog, **Resume**, **LinkedIn**, Sous Chef) → 3 posts, two of them from 2021.

Problems:

- **Half the primary actions send visitors away** (LinkedIn, Rezme). A resume link up front reads as "looking for a job", not "authority in the field".
- **Sous Chef, your best proof, is one of four small cards.**
- **The homepage shows 2021 posts**, which makes the site look dormant.
- **No way to follow you:** no newsletter, no RSS (`/rss.xml` returns a 404), no GitHub link in the UI, no contact.

**Proposed homepage:**

1. **Hero:** positioning line + photo + two CTAs: _Subscribe_ (primary) and _Read the AI × design systems series_ (secondary).
2. **Proof strip:** "15 yrs · Sous Chef, 100+ components · Founder, Saskatoon React Meetup · speaker at X". Add numbers and logos (7shifts, TOTVS).
3. **Featured case study:** Sous Chef with a hero visual, the problem, your role, outcomes and the MCP story. This is your portfolio centrepiece.
4. **Writing:** newest first, grouped by pillar, plus a "Start here" list of your 3 best evergreen pieces.
5. **Speaking and community:** meetup photos (you already have `community-event-*.png`), talks, slides.
6. **Newsletter block** again before the footer.

**New pages:** `/speaking` (talks, topics you speak on, a "book me" form), `/work` or `/sous-chef` (case study), `/now`, `/uses`, `/newsletter`. Rename the header to just "Alex Andrade".

## 4. Content and cadence (where influence actually comes from)

The design matters less than this. You have 8 posts, with a gap from 2021 to 2026.

- **Cadence:** one solid post per month, plus 2–3 LinkedIn posts a week that each pull one insight out of it. LinkedIn is where design systems leads and hiring managers are.
- **Own a series:** "AI-ready design systems", in 5–6 parts. Ideas: writing docs for agents; tokens as LLM context; MCP server patterns; measuring agent adoption of the design system; evals for UI generation; governance when agents ship UI. A series builds more authority than one-off posts.
- **Open-source an artifact** from the Sous Chef MCP work, such as a template MCP server for design systems or a Storybook → LLM docs exporter. Something people can star and cite becomes your calling card.
- **Talks pipeline:** turn the AI post into a talk, give it at your meetup first, then submit it to Into Design Systems (they actively look for MCP and agent case studies), Clarity, React Summit and Config community events. Each talk recording goes on `/speaking`.
- **Newsletter:** monthly, something like "Systems & Agents" (name TBD). Even a small list is an audience you own.
- **Collaborate and show up in others' spaces:** guest posts and podcasts (Design Systems Podcast, Into Design Systems blog), and replies to Brad Frost, Romina Kavcic and similar people on LinkedIn.

## 5. What strong examples do well

- **[Brad Frost](https://bradfrost.com/):** a warm first-person voice and a clear body of work (Atomic Design → courses → "AI & Design Systems"). His nav exposes Courses, Newsletter and Speaking as first-class sections.
- **[Josh Comeau](https://www.joshwcomeau.com/):** an unmistakable visual personality, a "Popular content" top-10 for evergreen posts, and a newsletter ask placed right after you've seen the value.
- **What to take from both:** one recognizable voice, evergreen "start here" content, and clear next steps (subscribe, follow, hire, invite to speak).

## 6. About page

The content is good: your journey, Sous Chef, community, family and woodworking all make you likeable. Changes:

- **Open with the positioning line and one strong achievement**, not "Hi 👋".
- **Make headings plain text.** The emoji in every heading makes the page feel less senior.
- **Add a short "Speaker bio" block in 3 lengths** with a downloadable headshot, so organizers can copy-paste it.
- **End with a clear CTA.**

## Prioritized roadmap

### Week 1–2: quick wins (no redesign)

- [ ] New H1 and meta description using the positioning line; rename "Alex Andrade - Blog" to "Alex Andrade".
- [ ] Featured section: show the AI post first and hide off-pillar 2020 posts.
- [ ] Add an RSS feed, GitHub and contact links, and a newsletter signup (Buttondown or Kit).
- [ ] Generate proper per-post OG images.
- [ ] Remove the Resume card from the hero (keep it on About).

### Month 1–2: brand redesign

- [ ] Wordmark, palette, type pairing, tokens, and a `/system` page.
- [ ] New homepage structure, a Sous Chef case study, and `/speaking`.

### Ongoing

- [ ] Monthly post plus newsletter.
- [ ] LinkedIn 2–3×/week.
- [ ] The AI × DS series.
- [ ] One open-source tool.
- [ ] 2–3 talk submissions per quarter.

## Sources

- [Into Design Systems 2026 agenda](https://www.intodesignsystems.com/agenda)
- [AI Design Systems Conference 2026 recordings](https://www.intodesignsystems.com/blog/ai-design-systems-conference-2026-recordings)
- [Miro on MCP + Claude Code skills](https://intodesignsystems.medium.com/how-miro-onboarded-ai-into-their-design-system-with-mcp-and-claude-code-skills-1dc2975eb098)
- [Hatch 2026: AI and Design Systems](https://www.hatchconference.com/agenda/ai-and-design-systems)
- [Into Design Systems speakers](https://www.intodesignsystems.com/speakers)
- [bradfrost.com](https://bradfrost.com/)
- [joshwcomeau.com](https://www.joshwcomeau.com/)
- [Personal branding guide 2026 (bookingagency.io)](https://bookingagency.io/blog/the-complete-guide-to-personal-branding-in-2026-tech-development)
- [Developer personal brand (calmops)](https://calmops.com/career/developer-personal-brand/)
- [Building a personal brand (inkeybit)](https://www.inkeybit.com/blog/building-a-personal-brand)
- [Developer personal branding guide (techbuzzonline)](https://techbuzzonline.com/developer-personal-branding-beginners-guide)
