import { getAboutContent } from '@/app/lib/blog';
import { markdownToHtml } from '@/app/lib/markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/seo/json-ld';
import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/app/components/brand/button-link';
import { Eyebrow } from '@/app/components/brand/eyebrow';
import { absoluteUrl, personId, socialLinks, websiteId } from '@/app/lib/site';

const description =
    'Alex Andrade leads the design system team at 7shifts and created Sous Chef. How a frontend engineer from Brazil ended up building design systems that humans and AI agents get right.';

export const metadata: Metadata = {
    title: 'About',
    description,
    openGraph: {
        title: 'About | Alex Andrade',
        description,
        type: 'profile',
        url: '/about'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About | Alex Andrade',
        description
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
                    description,
                    isPartOf: { '@id': websiteId },
                    mainEntity: { '@id': personId }
                }}
            />
            <div className="mx-auto max-w-3xl">
                <header className="mb-12 flex flex-col gap-5 border-b border-foreground pb-10">
                    <Eyebrow>about</Eyebrow>
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

                <section className="mt-20 border border-foreground p-8 md:p-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <Eyebrow>let&apos;s talk</Eyebrow>
                            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                                Building a design system, or getting one ready
                                for AI?
                            </h2>
                            <p className="text-lg text-muted">
                                I&apos;d love to hear about it, whether
                                it&apos;s design tokens, testing strategy, or
                                the best camping spots in Saskatchewan.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <ButtonLink href={socialLinks.linkedin} external>
                                Message me on LinkedIn
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </ButtonLink>
                            <ButtonLink href="/speaking" variant="secondary">
                                Invite me to speak
                            </ButtonLink>
                            <ButtonLink
                                href={socialLinks.github}
                                variant="text"
                                external
                                className="sm:ml-3"
                            >
                                GitHub
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </ButtonLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
