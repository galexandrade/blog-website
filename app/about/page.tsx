import { getAboutContent } from '@/app/lib/blog';
import { markdownToHtml } from '@/app/lib/markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/seo/json-ld';
import { absoluteUrl, personId, websiteId } from '@/app/lib/site';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn more about Alex Andrade, Senior Frontend Engineer specializing in Design Systems',
    openGraph: {
        title: 'About | Alex Andrade',
        description:
            'Learn more about Alex Andrade, Senior Frontend Engineer specializing in Design Systems',
        type: 'profile',
        url: '/about'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About | Alex Andrade',
        description:
            'Learn more about Alex Andrade, Senior Frontend Engineer specializing in Design Systems'
    }
};

export default async function AboutPage() {
    const aboutData = getAboutContent();

    if (!aboutData) {
        notFound();
    }

    const contentHtml = await markdownToHtml(aboutData.content);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'ProfilePage',
                    '@id': `${absoluteUrl('/about')}#profilepage`,
                    url: absoluteUrl('/about'),
                    name: 'About | Alex Andrade',
                    description:
                        'Learn more about Alex Andrade, Senior Frontend Engineer specializing in Design Systems',
                    isPartOf: { '@id': websiteId },
                    mainEntity: { '@id': personId }
                }}
            />
            <div className="mx-auto max-w-3xl">
                <header className="mb-12 flex flex-col gap-5 border-b border-foreground pb-10">
                    <p className="font-mono text-[13px] text-signal-text">
                        {'// about'}
                    </p>
                    <h1 className="text-5xl font-bold tracking-[-0.035em] md:text-7xl">
                        {aboutData.frontmatter.title}
                    </h1>
                    <p className="text-lg leading-relaxed text-muted md:text-xl">
                        {aboutData.frontmatter.description}
                    </p>
                </header>

                <div
                    className="markdown-content prose prose-brand max-w-none text-[1.075rem] leading-8 prose-headings:font-bold prose-h2:mb-5 prose-h2:mt-14 prose-h2:text-3xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-2xl prose-p:my-6 prose-li:my-2 prose-img:my-8"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
        </div>
    );
}
