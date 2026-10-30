import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FeaturedPost, PostList } from '@/app/components/blog/post-list';
import { ButtonLink } from '@/app/components/brand/button-link';
import { Eyebrow } from '@/app/components/brand/eyebrow';
import { SectionHeading } from '@/app/components/brand/section-heading';
import { NewsletterSignup } from '@/app/components/newsletter/newsletter-signup';
import { ProjectCard } from '@/app/components/projects/project-card';
import { getHomepagePosts, toPostSummary } from '@/app/lib/blog';
import { projects } from '@/app/lib/projects';
import { socialLinks } from '@/app/lib/site';

const proofPoints = [
    { value: '15+', label: 'years building software' },
    { value: '100+', label: 'components in Sous Chef' },
    { value: '1st', label: 'React meetup in the prairies' },
    { value: 'BR → CA', label: 'from Brazil to Saskatoon, 2019' }
];

export default function Home() {
    const [latestPost, ...recentPosts] = getHomepagePosts(5).map(toPostSummary);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <section className="grid items-center gap-12 pb-16 pt-14 md:grid-cols-[1.4fr_1fr] md:pb-24 md:pt-24">
                <div className="flex flex-col gap-6">
                    <Eyebrow>design-systems · ai · frontend</Eyebrow>
                    <h1 className="text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                        Design systems that humans and AI agents get right.
                    </h1>
                    <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
                        I&apos;m Alex Andrade. I lead the design system team at
                        7shifts, created Sous Chef, and founded the Saskatoon
                        React Meetup.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {latestPost && (
                            <ButtonLink href={`/blog/${latestPost.slug}`}>
                                Read the latest
                                <ArrowRight size={18} aria-hidden="true" />
                            </ButtonLink>
                        )}
                        <ButtonLink href="/work" variant="secondary">
                            See the work
                        </ButtonLink>
                    </div>
                </div>

                <div className="crop-marks mx-auto w-full max-w-sm p-4 [--crop-len:28px] [--crop-w:3px] md:p-5">
                    <div className="relative aspect-square w-full overflow-hidden bg-surface">
                        <Image
                            src="/assets/profile-2.png"
                            alt="Alex Andrade"
                            fill
                            sizes="(min-width: 768px) 384px, 90vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section
                aria-label="At a glance"
                className="grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-4"
            >
                {proofPoints.map((point) => (
                    <div
                        key={point.label}
                        className="flex flex-col gap-1 bg-background px-4 py-6 md:px-6"
                    >
                        <span className="text-3xl font-bold tracking-tight md:text-4xl">
                            {point.value}
                        </span>
                        <span className="font-mono text-xs text-muted">
                            {point.label}
                        </span>
                    </div>
                ))}
            </section>

            {latestPost && (
                <section className="py-20 md:py-28">
                    <SectionHeading index="01" title="Writing" />
                    <FeaturedPost post={latestPost} />
                    <div className="mt-12">
                        <PostList posts={recentPosts} />
                    </div>
                    <Link
                        href="/blog"
                        className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-sm text-signal-text hover:text-foreground"
                    >
                        All writing
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </section>
            )}

            <section id="work" className="scroll-mt-24 pb-20 md:pb-28">
                <SectionHeading index="02" title="Work" />
                <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
                    <div className="flex flex-col gap-5">
                        <p className="font-mono text-[13px] text-muted">
                            7shifts · 2022 → now
                        </p>
                        <h3 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            Sous Chef, the 7shifts design system
                        </h3>
                        <p className="text-lg leading-relaxed text-muted">
                            I led Sous Chef from the ground up: a React,
                            TypeScript and Storybook foundation that turned a
                            fragmented set of components into a themeable system
                            of 100+ components. Chromatic visual tests run in
                            CI, so every UI change is intentional.
                        </p>
                        <p className="text-lg leading-relaxed text-muted">
                            Today I lead the design system team, working on
                            semantic tokens, dark mode, and teaching AI agents
                            to build with the system instead of around it.
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                            <ButtonLink
                                href={socialLinks.sousChef}
                                variant="text"
                                external
                            >
                                Explore Sous Chef
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </ButtonLink>
                        </div>
                    </div>
                    <a
                        href={socialLinks.sousChef}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="crop-marks block p-4 [--crop-len:24px] [--crop-w:3px]"
                    >
                        <Image
                            src="/assets/sous-chef-2.png"
                            alt="The Sous Chef documentation homepage"
                            width={1038}
                            height={798}
                            sizes="(min-width: 768px) 560px, 100vw"
                            className="w-full border border-line"
                        />
                    </a>
                </div>
            </section>

            <section aria-labelledby="projects" className="pb-20 md:pb-28">
                <SectionHeading id="projects" index="03" title="Projects" />
                <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">
                    Products I&apos;ve built and shipped. Each one works from
                    inside your AI assistant, not just from the app.
                </p>
                <ul className="grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <li key={project.slug}>
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
                <Link
                    href="/work"
                    className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-sm text-signal-text hover:text-foreground"
                >
                    All work
                    <ArrowRight size={16} aria-hidden="true" />
                </Link>
            </section>

            <section className="pb-20 md:pb-28">
                <SectionHeading index="04" title="Community" />
                <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                        <Image
                            src="/assets/saskatoon-react-meetup.jpg"
                            alt="A full room at the Saskatoon React Meetup, hosted at the 7shifts office"
                            fill
                            sizes="(min-width: 768px) 560px, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-mono text-[13px] text-muted">
                            Saskatoon, Canada
                        </p>
                        <h3 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            Saskatoon React Meetup
                        </h3>
                        <p className="text-lg leading-relaxed text-muted">
                            I founded the first React meetup in the prairies to
                            give local frontend developers a place to share what
                            they are building and learn together. At 7shifts I
                            also lead frontend guilds on React, TypeScript and
                            accessibility.
                        </p>
                    </div>
                </div>
            </section>

            <NewsletterSignup
                id="newsletter"
                className="mb-20 scroll-mt-24 md:mb-28"
            />

            <section className="mb-20 border border-foreground p-8 md:mb-28 md:p-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-2xl flex-col gap-3">
                        <Eyebrow>let&apos;s talk</Eyebrow>
                        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            Building a design system, or getting one ready for
                            AI?
                        </h2>
                        <p className="text-lg text-muted">
                            I&apos;m always up for talking tokens, testing
                            strategy and MCP. Follow along or say hi.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <ButtonLink href={socialLinks.linkedin} external>
                            Connect on LinkedIn
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </ButtonLink>
                        <ButtonLink href="/rss.xml" variant="secondary">
                            RSS feed
                        </ButtonLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
