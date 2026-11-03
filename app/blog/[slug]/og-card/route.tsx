import { brandImage } from '@/app/_og/brand-image';
import { getAllPosts, getPostBySlug } from '@/app/lib/blog';

// The generated share card, used when a post has no featured image. A plain
// route rather than opengraph-image.tsx, because that file convention would
// override the post's own image in the metadata. See postShareImage

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

    const tags = post.frontmatter.tags?.slice(0, 3) ?? [];

    return brandImage({
        eyebrow: tags.length
            ? tags
                  .map((tag) => tag.toLowerCase().replace(/\s+/g, '-'))
                  .join(' · ')
            : 'writing',
        title: post.frontmatter.title
    });
}
