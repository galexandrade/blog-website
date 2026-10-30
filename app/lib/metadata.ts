import type { Metadata } from 'next';
import { siteName } from '@/app/lib/site';

interface PageMetadataOptions {
    path: string;
    title: string;
    description: string;
    ogType?: 'website' | 'profile';
}

// Next replaces nested metadata objects instead of merging them, so every
// page restates the shared Open Graph fields and the RSS alternate
export function pageMetadata({
    path,
    title,
    description,
    ogType = 'website'
}: PageMetadataOptions): Metadata {
    const fullTitle = `${title} | ${siteName}`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
            types: { 'application/rss+xml': '/rss.xml' }
        },
        openGraph: {
            siteName,
            locale: 'en_US',
            type: ogType,
            url: path,
            title: fullTitle,
            description
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description
        }
    };
}
