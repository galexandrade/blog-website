import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/app/components/brand/button-link';
import { Eyebrow } from '@/app/components/brand/eyebrow';
import { SectionHeading } from '@/app/components/brand/section-heading';
import {
    talks,
    youtubeEmbedUrl,
    youtubeWatchUrl,
    type Talk
} from '@/app/lib/talks';
import { socialLinks } from '@/app/lib/site';

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

const topics = [
    {
        title: 'AI-ready design systems',
        body: 'Docs written for agents, MCP servers, and keeping AI-generated UI on-system.'
    },
    {
        title: 'Design system architecture',
        body: 'Tokens, theming, dark mode, and growing a system from a handful of components to 100+.'
    },
    {
        title: 'DS quality and developer experience',
        body: 'Visual testing with Chromatic, testing strategy, and making the right way the easy way.'
    }
];

const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
});

export default function SpeakingPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <header className="mb-20 flex max-w-4xl flex-col gap-5 md:mb-28">
                <Eyebrow>speaking</Eyebrow>
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
                <SectionHeading id="talks" index="01" title="Talks" />
                <ol className="flex flex-col gap-20">
                    {talks.map((talk) => (
                        <li key={talk.slug}>
                            <TalkEntry talk={talk} />
                        </li>
                    ))}
                </ol>
            </section>

            <section aria-labelledby="topics" className="mb-24 md:mb-32">
                <SectionHeading id="topics" index="02" title="Topics" />
                <ul className="grid gap-px border border-line bg-line md:grid-cols-3">
                    {topics.map((topic) => (
                        <li
                            key={topic.title}
                            className="flex flex-col gap-2 bg-background p-6"
                        >
                            <h3 className="text-xl font-bold tracking-tight">
                                {topic.title}
                            </h3>
                            <p className="text-muted">{topic.body}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="border border-foreground p-8 md:p-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-2xl flex-col gap-3">
                        <Eyebrow>invite me</Eyebrow>
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

function TalkEntry({ talk }: { talk: Talk }) {
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
            <div className="crop-marks p-4 [--crop-len:24px] [--crop-w:3px]">
                <div className="relative aspect-video w-full overflow-hidden border border-line bg-surface">
                    <iframe
                        src={youtubeEmbedUrl(talk)}
                        title={`${talk.title}, recorded at ${talk.event}`}
                        loading="lazy"
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
