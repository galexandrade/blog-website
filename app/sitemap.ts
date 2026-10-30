import type { MetadataRoute } from 'next';
import { getAllPosts, getPostModifiedDate } from '@/app/lib/blog';
import { absoluteUrl } from '@/app/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    // Most recent change to any post, for the pages that list them
    const latestPostDate = posts
        .map(getPostModifiedDate)
        .sort()
        .at(-1);

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: absoluteUrl('/'),
            lastModified: latestPostDate,
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: absoluteUrl('/about'),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: absoluteUrl('/work'),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: absoluteUrl('/speaking'),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: absoluteUrl('/system'),
            changeFrequency: 'monthly',
            priority: 0.6
        },
        {
            url: absoluteUrl('/blog'),
            lastModified: latestPostDate,
            changeFrequency: 'weekly',
            priority: 0.9
        }
    ];

    const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: absoluteUrl(`/blog/${post.slug}`),
        lastModified: getPostModifiedDate(post),
        changeFrequency: 'yearly',
        priority: 0.7
    }));

    return [...staticPages, ...postPages];
}
