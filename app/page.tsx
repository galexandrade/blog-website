import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, FileText } from 'lucide-react';

function LinkedInIcon({ size = 22 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function SevenIcon({ size = 22 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="square"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M3.8 6.5H20.2" />
            <path d="M20.2 6.5L10.6 19" />
        </svg>
    );
}
import { BlogCard } from '@/app/components/blog/blog-card';
import { getLatestPosts } from '@/app/lib/blog';

export default function Home() {
    const latestPosts = getLatestPosts(3);
    const resources = [
        {
            title: 'Blog posts',
            description:
                'Articles on design systems, component architecture, and front-end development.',
            icon: <BookOpen size={22} />,
            link: '/blog'
        },
        {
            title: 'Resume',
            description: 'My professional experience and skills at a glance.',
            icon: <FileText size={22} />
        },
        {
            title: 'LinkedIn',
            description:
                'Connect with me on LinkedIn and see my professional background.',
            icon: <LinkedInIcon size={22} />,
            link: 'https://www.linkedin.com/in/palexandrade'
        },
        {
            title: 'Sous Chef',
            description:
                "I'm building Sous Chef, 7shifts design system. Check it out!",
            icon: <SevenIcon size={22} />
        }
    ];

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6">
            <section className="mx-auto mb-16 max-w-4xl text-center">
                <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                        src="/assets/profile.png"
                        alt="Alex Andrade"
                        width={128}
                        height={128}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
                    Hey, I&apos;m a Senior Software Engineer
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
                    I specialize in{' '}
                    <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                        Design Systems
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-indigo-500 dark:text-indigo-400">
                        Front-end Development
                    </span>
                    , building scalable component libraries and beautiful user
                    experiences.
                </p>
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
                    This is where I share my learnings, insights, and
                    explorations in modern web development, component
                    architecture, and everything that makes great user
                    interfaces.
                </p>
            </section>

            <section className="mb-24 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {resources.map((item) => (
                    <Link
                        key={item.title}
                        href={item.link ?? '#'}
                        {...(item.link?.startsWith('https') && {
                            target: '_blank',
                            rel: 'noopener noreferrer'
                        })}
                        className="rounded-2xl border border-slate-300/70 bg-slate-100/70 px-6 py-7 transition-colors hover:bg-white dark:border-slate-700/60 dark:bg-slate-800/70 dark:hover:bg-slate-800"
                    >
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-indigo-500 dark:bg-slate-700/60 dark:text-indigo-400">
                            {item.icon}
                        </div>
                        <h2 className="mb-3 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100">
                            {item.title}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            {item.description}
                        </p>
                    </Link>
                ))}
            </section>

            <section>
                <div className="mb-4 flex items-center gap-4">
                    <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100 md:text-6xl">
                        Featured Posts
                    </h2>
                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-indigo-500 px-3 text-xl font-semibold text-slate-950">
                        {latestPosts.length}
                    </span>
                </div>
                <p className="mb-10 text-xl text-slate-600 dark:text-slate-400 md:text-2xl">
                    Latest insights on design systems, component architecture,
                    and front-end development
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {latestPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}
