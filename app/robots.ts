import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/app/lib/site';

const aiCrawlers = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            { userAgent: aiCrawlers, allow: '/' }
        ],
        sitemap: absoluteUrl('/sitemap.xml')
    };
}
