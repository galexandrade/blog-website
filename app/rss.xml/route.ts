import { getAllPosts } from '@/app/lib/blog';
import { absoluteUrl, siteDescription, siteName } from '@/app/lib/site';

export const dynamic = 'force-static';

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export function GET() {
    const posts = getAllPosts();

    const items = posts
        .map((post) => {
            const url = absoluteUrl(`/blog/${post.slug}`);
            const categories = (post.frontmatter.tags ?? [])
                .map((tag) => `<category>${escapeXml(tag)}</category>`)
                .join('');

            return `<item><title>${escapeXml(post.frontmatter.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate><description>${escapeXml(post.frontmatter.description)}</description>${categories}</item>`;
        })
        .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${escapeXml(siteName)}</title><link>${absoluteUrl('/')}</link><description>${escapeXml(siteDescription)}</description><language>en-us</language><atom:link href="${absoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
    });
}
