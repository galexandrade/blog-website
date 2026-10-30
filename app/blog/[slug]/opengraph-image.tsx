import { brandImage, ogSize } from '@/app/_og/brand-image';
import { getAllPosts, getPostBySlug } from '@/app/lib/blog';

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

// One image per post, so its alt text can be the post title. The "card" id
// is part of the image URL, see postOgImagePath
export function generateImageMetadata({
    params
}: {
    params: { slug: string };
}) {
    const post = getPostBySlug(params.slug);

    return [
        {
            id: 'card',
            alt: post?.frontmatter.title ?? 'Blog post by Alex Andrade',
            size: ogSize,
            contentType: 'image/png'
        }
    ];
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
