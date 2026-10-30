import { brandImage, ogSize } from '@/app/_og/brand-image';
import { getAllPosts, getPostBySlug } from '@/app/lib/blog';

export const alt = 'Blog post by Alex Andrade';
export const size = ogSize;
export const contentType = 'image/png';

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    const tags = post?.frontmatter.tags?.slice(0, 3) ?? [];

    return brandImage({
        eyebrow: tags.length
            ? tags
                  .map((tag) => tag.toLowerCase().replace(/\s+/g, '-'))
                  .join(' · ')
            : 'writing',
        title: post?.frontmatter.title ?? 'Alex Andrade'
    });
}
