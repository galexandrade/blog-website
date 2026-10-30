import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/app/lib/blog';
import { absoluteUrl } from '@/app/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const latestPostDate = posts[0]?.frontmatter.date;

    const staticPages: MetadataRoute.Sitemap = [
        { url: absoluteUrl('/'), changeFrequency: 'monthly', priority: 1 },
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
        lastModified: post.frontmatter.date,
        changeFrequency: 'yearly',
        priority: 0.7
    }));

    return [...staticPages, ...postPages];
}
