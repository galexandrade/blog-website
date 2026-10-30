import type { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/app/components/brand/button-link';
import { SectionHeading } from '@/app/components/brand/section-heading';
import { ProjectSection } from '@/app/components/projects/project-section';
import { projects } from '@/app/lib/projects';
import { socialLinks } from '@/app/lib/site';

const description =
    'Sous Chef, the 7shifts design system, and the products I build and ship: Kilter Money, Rezme and My Beauty Time, each usable from inside AI assistants.';

export const metadata: Metadata = pageMetadata({
    path: '/work',
    title: 'Work',
    description
});

export default function WorkPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <header className="mb-20 flex max-w-4xl flex-col gap-5 md:mb-28">
                <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl">
                    Design systems at 7shifts. Agent-ready products of my own.
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
                    At 7shifts I lead Sous Chef, the design system. Outside of
                    it I build and ship products end to end, and connect them to
                    the AI assistants people already use.
                </p>
            </header>

            <section aria-labelledby="at-7shifts" className="mb-24 md:mb-32">
                <SectionHeading id="at-7shifts" title="At 7shifts" />
                <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
                    <div className="flex flex-col gap-4">
                        <p className="font-mono text-[13px] text-muted">
                            Design system lead · 2022 → now
                        </p>
                        <h3 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            Sous Chef, the 7shifts design system
                        </h3>
                        <p className="text-lg leading-relaxed text-muted">
                            Built from the ground up on React, TypeScript and
                            Storybook: 100+ components, semantic tokens, dark
                            mode, Chromatic visual tests in CI, and an MCP
                            server that teaches AI agents to build with the
                            system.
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1">
                            <ButtonLink
                                href="/blog/teaching-ai-to-use-your-design-system"
                                variant="text"
                            >
                                How we taught AI to use it
                                <ArrowRight size={18} aria-hidden="true" />
                            </ButtonLink>
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
                    <div>
                        <Image
                            src="/assets/sous-chef-2.png"
                            alt="The Sous Chef documentation homepage"
                            width={1038}
                            height={798}
                            sizes="(min-width: 768px) 560px, 100vw"
                            className="h-auto w-full border border-line"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section aria-labelledby="products">
                <SectionHeading id="products" title="Products" />
                <p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted">
                    Three products I&apos;ve built and shipped. Each one has its
                    own MCP server with OAuth, so people can use it from inside
                    their AI assistant, not just from the app.
                </p>
                <div className="flex flex-col gap-16">
                    {projects.map((project) => (
                        <ProjectSection key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
