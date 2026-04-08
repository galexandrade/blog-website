import Link from 'next/link';
import Image from 'next/image';
import { BookA } from 'lucide-react';
import { BlogCard } from '@/app/components/blog/blog-card';
import { getLatestPosts } from '@/app/lib/blog';
import IconSevenShifts from './components/ui/IconSevenShifts';
import IconLinkedIn from './components/ui/IconLinkedIn';
import IconPDF from './components/ui/IconPDF';

export default function Home() {
    const latestPosts = getLatestPosts(3);
    const resources = [
        {
            title: 'Blog posts',
            description:
                'Articles on design systems, component architecture, and front-end development.',
            icon: <BookA size={22} />,
            link: '/blog'
        },
        {
            title: 'Resume',
            description: 'My professional experience and skills at a glance.',
            icon: <IconPDF size={22} />,
            link: 'https://drive.google.com/file/d/1Ccov2_3eJLFm6pTUVwJqr3USW5G7vl4e/view?usp=sharing'
        },
        {
            title: 'LinkedIn',
            description:
                'Connect with me on LinkedIn and see my professional background.',
            icon: <IconLinkedIn size={22} />,
            link: 'https://www.linkedin.com/in/palexandrade'
        },
        {
            title: 'Sous Chef',
            description:
                "I'm building Sous Chef, 7shifts design system. Check it out!",
            icon: <IconSevenShifts size={22} />,
            link: 'https://sous-chef.7shifts.software/'
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
                    Hey, I&apos;m a Senior Design Engineer
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
                        className="rounded-2xl border border-slate-300/70 bg-slate-100/70 px-6 py-7 transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800"
                    >
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-indigo-500 dark:bg-slate-700/60 dark:text-indigo-400">
                            {item.icon}
                        </div>
                        <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 dark:text-slate-100">
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
                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-indigo-600 px-3 text-xl font-semibold !text-white">
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
