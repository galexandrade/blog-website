import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { ButtonLink } from '@/app/components/brand/button-link';
import { CopyButton } from '@/app/components/brand/copy-button';
import { SectionHeading } from '@/app/components/brand/section-heading';
import {
    talks,
    youtubeEmbedUrl,
    youtubeWatchUrl,
    type Talk
} from '@/app/lib/talks';
import { socialLinks } from '@/app/lib/site';
import { bioText, headshot, speakerBios, wordCount } from '@/app/lib/speaker';

const description =
    'Talks by Alex Andrade on design systems, AI and frontend architecture, from Saskatoon Dev Talks to Tech Tank Toronto. Recordings, topics and how to invite me.';

export const metadata: Metadata = {
    title: 'Speaking',
    description,
    openGraph: {
        title: 'Speaking | Alex Andrade',
        description,
        url: '/speaking'
    }
};

const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
});

export default function SpeakingPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <header className="mb-20 flex max-w-4xl flex-col gap-5 md:mb-28">
                <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl">
                    Talks on design systems, AI and frontend.
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
                    I speak at meetups and conferences about building design
                    systems, and about teaching AI agents to use them. Here are
                    the recordings.
                </p>
            </header>

            <section aria-labelledby="talks" className="mb-24 md:mb-32">
                <SectionHeading id="talks" title="Talks" />
                <ol className="flex flex-col gap-20">
                    {talks.map((talk, index) => (
                        <li key={talk.slug}>
                            <TalkEntry talk={talk} eager={index === 0} />
                        </li>
                    ))}
                </ol>
            </section>

            <section aria-labelledby="topics" className="mb-24 md:mb-32">
                <SectionHeading id="topics" title="Topics" />
                <p className="max-w-3xl text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed">
                    <span className="text-foreground">
                        AI-ready design systems
                    </span>
                    : docs written for agents, MCP servers, and keeping
                    AI-generated UI on-system.{' '}
                    <span className="text-foreground">
                        Design system architecture
                    </span>
                    : tokens, theming, dark mode, and growing from a handful of
                    components to 100+.{' '}
                    <span className="text-foreground">
                        Quality and developer experience
                    </span>
                    : visual testing with Chromatic, testing strategy, and
                    making the right way the easy way.
                </p>
            </section>

            <section
                id="speaker-kit"
                aria-labelledby="speaker-kit-title"
                className="mb-24 scroll-mt-24 md:mb-32"
            >
                <SectionHeading id="speaker-kit-title" title="Speaker kit" />
                <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
                    <div className="flex flex-col gap-5 md:sticky md:top-24 md:self-start">
                        <div>
                            <div className="relative aspect-[1230/1278] w-full overflow-hidden border border-line bg-surface">
                                <Image
                                    src={headshot.src}
                                    alt="Headshot of Alex Andrade"
                                    fill
                                    sizes="(min-width: 768px) 320px, 90vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <ButtonLink
                            href={headshot.src}
                            variant="secondary"
                            className="gap-2 self-start"
                            download
                        >
                            <Download size={18} aria-hidden="true" />
                            Download headshot
                        </ButtonLink>
                        <p className="font-mono text-xs text-muted">
                            JPG · {headshot.width}×{headshot.height}
                        </p>
                    </div>

                    <ul className="flex flex-col border-t border-line">
                        {speakerBios.map((bio) => {
                            const text = bioText(bio);

                            return (
                                <li
                                    key={bio.length}
                                    className="flex flex-col gap-4 border-b border-line py-8 first:pt-6"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="font-mono text-sm text-foreground">
                                            {bio.length} bio
                                            <span className="text-muted">
                                                {' '}
                                                · {wordCount(text)} words
                                            </span>
                                        </h3>
                                        <CopyButton
                                            text={text}
                                            label={`Copy ${bio.length} bio`}
                                        />
                                    </div>
                                    {bio.paragraphs.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-lg leading-relaxed text-muted"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            <section className="border border-foreground p-8 md:p-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-2xl flex-col gap-3">
                        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                            Running a meetup, conference or podcast?
                        </h2>
                        <p className="text-lg text-muted">
                            I&apos;m happy to talk about design systems, AI and
                            MCP, in person or remote. Send me a message.
                        </p>
                    </div>
                    <ButtonLink href={socialLinks.linkedin} external>
                        Message me on LinkedIn
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </ButtonLink>
                </div>
            </section>
        </div>
    );
}

function TalkEntry({ talk, eager }: { talk: Talk; eager: boolean }) {
    return (
        <article className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-14">
            <div className="flex flex-col gap-4">
                <p className="font-mono text-[13px] text-muted">
                    <time dateTime={talk.date}>
                        {dateFormat.format(new Date(talk.date))}
                    </time>
                    {' · '}
                    {talk.event}
                    {talk.venue && ` at ${talk.venue}`}
                    {' · '}
                    {talk.city}
                </p>
                <h3 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {talk.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted">
                    {talk.summary}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1">
                    {talk.post && (
                        <ButtonLink href={talk.post} variant="text">
                            Read the post
                            <ArrowRight size={18} aria-hidden="true" />
                        </ButtonLink>
                    )}
                    <ButtonLink
                        href={youtubeWatchUrl(talk)}
                        variant="text"
                        external
                    >
                        Watch on YouTube
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </ButtonLink>
                </div>
            </div>
            <div>
                <div className="relative aspect-video w-full overflow-hidden border border-line bg-surface">
                    <iframe
                        src={youtubeEmbedUrl(talk)}
                        title={`${talk.title}, recorded at ${talk.event}`}
                        loading={eager ? 'eager' : 'lazy'}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                    />
                </div>
            </div>
        </article>
    );
}
