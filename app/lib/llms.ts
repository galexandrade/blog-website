import { getAllPosts, getPostModifiedDate } from '@/app/lib/blog';
import {
    absoluteUrl,
    postMarkdownPath,
    postPath,
    siteName,
    socialLinks
} from '@/app/lib/site';
import { talks } from '@/app/lib/talks';
import type { BlogPost } from '@/app/types/blog';

// Plain-text versions of the site for AI tools: /llms.txt is the index,
// /llms-full.txt carries every post, and /blog/<slug>.md a single post

const summary = `> Alex Andrade (Alex Pedrero Andrade) is a Senior Frontend Engineer at 7shifts, based in Saskatoon, Saskatchewan, Canada. Alex leads the Design System team and is the founding architect of Sous Chef, the 7shifts design system. This site is Alex's personal blog and portfolio.

With 15+ years of software experience, from enterprise ERP at TOTVS in Brazil to Canadian startups, Alex works where UI/UX meets scalable frontend architecture: building component libraries, tooling and workflows that make shipping quality UI the easy path.

Focus areas:

- Design systems and design tokens (semantic color tokens, theming, dark mode)
- React, TypeScript and frontend architecture
- Storybook and visual regression testing (Chromatic)
- AI and MCP for design systems: teaching AI agents to use a design system
- Developer experience (DX) and testing strategy`;

function year(date: string): number {
    return new Date(date).getUTCFullYear();
}

function talkList(): string {
    return talks
        .map(
            (talk) =>
                `"${talk.title}" (${talk.event}, ${talk.city}, ${year(talk.date)})`
        )
        .join(', ');
}

// Root-relative links and images only resolve on the site itself
function absolutizeLinks(markdown: string): string {
    return markdown
        .replace(/\]\(\//g, `](${absoluteUrl('/')}`)
        .replace(/src="\//g, `src="${absoluteUrl('/')}`);
}

export function postMarkdown(post: BlogPost): string {
    const { title, description, date, tags } = post.frontmatter;
    const meta = [
        `URL: ${absoluteUrl(postPath(post.slug))}`,
        `Author: ${siteName}`,
        `Published: ${date.slice(0, 10)}`,
        `Updated: ${getPostModifiedDate(post).slice(0, 10)}`,
        tags?.length ? `Tags: ${tags.join(', ')}` : null
    ].filter(Boolean);

    return `# ${title}

> ${description}

${meta.join('\n')}

${absolutizeLinks(post.content.trim())}
`;
}

export function llmsTxt(): string {
    const posts = getAllPosts()
        .map(
            (post) =>
                `- [${post.frontmatter.title}](${absoluteUrl(postMarkdownPath(post.slug))}): ${post.frontmatter.description} (${year(post.frontmatter.date)})`
        )
        .join('\n');

    return `# ${siteName}

${summary}

Every post is also available as Markdown at its URL plus \`.md\`, and all of them in one file at [llms-full.txt](${absoluteUrl('/llms-full.txt')}).

## Key pages

- [Home](${absoluteUrl('/')}): Overview and latest posts
- [About](${absoluteUrl('/about')}): Background, career and current work
- [Work](${absoluteUrl('/work')}): Sous Chef at 7shifts, plus the products Alex builds and ships, each with its own MCP server: Kilter Money (personal finance; Claude and ChatGPT approved), Rezme (resume builder; works with any MCP client) and My Beauty Time (salon scheduling in Brazil; Claude approved, ChatGPT in review)
- [Speaking](${absoluteUrl('/speaking')}): Talk recordings: ${talkList()}
- [Blog](${absoluteUrl('/blog')}): All posts
- [System](${absoluteUrl('/system')}): Spec, the design system behind this site (logo, color tokens, typography, components)
- [tokens.json](${absoluteUrl('/system/tokens.json')}): The site's design tokens in Design Tokens Community Group format, light and dark

## Posts

${posts}

## Profiles

- [LinkedIn](${socialLinks.linkedin})
- [GitHub](${socialLinks.github})
- [Medium](https://medium.com/@g.alex.andrade)
- [Resume (Rezme)](${socialLinks.resume})
`;
}

export function llmsFullTxt(): string {
    const posts = getAllPosts().map(postMarkdown).join('\n---\n\n');

    return `# ${siteName}

${summary}

---

${posts}`;
}
