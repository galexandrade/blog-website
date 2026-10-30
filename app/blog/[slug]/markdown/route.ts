import { getAllPosts, getPostBySlug } from '@/app/lib/blog';
import { postMarkdown } from '@/app/lib/llms';
import { absoluteUrl, postPath } from '@/app/lib/site';

// Served at /blog/<slug>.md through a rewrite in next.config

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return new Response('Not found', { status: 404 });
    }

    return new Response(postMarkdown(post), {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            // Point search engines at the HTML page, not this copy
            Link: `<${absoluteUrl(postPath(slug))}>; rel="canonical"`
        }
    });
}
