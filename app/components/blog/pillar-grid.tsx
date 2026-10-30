import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/app/lib/utils';
import type { Pillar } from '@/app/lib/pillars';
import type { BlogPostSummary } from '@/app/types/blog';

interface PillarGridProps {
    groups: { pillar: Pillar; posts: BlogPostSummary[] }[];
}

/** The three content pillars as ruled rows, each opening with its "Start here" read */
export function PillarGrid({ groups }: PillarGridProps) {
    return (
        <ul className="border-t border-line">
            {groups.map(({ pillar, posts }) => {
                const [first, ...rest] = posts;

                return (
                    <li
                        key={pillar.slug}
                        className="grid gap-6 border-b border-line py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12"
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold leading-tight tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="max-w-md leading-relaxed text-muted">
                                {pillar.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {first ? (
                                <Link
                                    href={`/blog/${first.slug}`}
                                    className="group flex flex-col gap-1"
                                >
                                    <span className="font-mono text-xs text-muted">
                                        {first.frontmatter.startHere
                                            ? 'start here'
                                            : 'latest'}{' '}
                                        · {first.readingTime}
                                    </span>
                                    <span className="text-lg font-bold leading-snug tracking-tight decoration-signal decoration-2 underline-offset-4 group-hover:underline">
                                        {first.frontmatter.title}
                                    </span>
                                </Link>
                            ) : (
                                <Link
                                    href="#newsletter"
                                    className="group flex flex-col gap-1"
                                >
                                    <span className="font-mono text-xs text-muted">
                                        in progress
                                    </span>
                                    <span className="inline-flex items-center gap-2 font-bold decoration-signal decoration-2 underline-offset-4 group-hover:underline">
                                        Get the first post by email
                                        <ArrowRight
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Link>
                            )}

                            {rest.length > 0 && (
                                <ul className="flex flex-col gap-3 border-l border-line pl-4">
                                    {rest.map((post) => (
                                        <li key={post.slug}>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="group flex flex-col gap-0.5"
                                            >
                                                <time
                                                    dateTime={
                                                        post.frontmatter.date
                                                    }
                                                    className="font-mono text-xs text-muted"
                                                >
                                                    {formatDate(
                                                        post.frontmatter.date
                                                    )}
                                                </time>
                                                <span className="font-semibold decoration-signal decoration-2 underline-offset-4 group-hover:underline">
                                                    {post.frontmatter.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
