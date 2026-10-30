import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn, formatDate } from '@/app/lib/utils';
import type { Pillar } from '@/app/lib/pillars';
import type { BlogPostSummary } from '@/app/types/blog';

interface PillarGridProps {
    groups: { pillar: Pillar; posts: BlogPostSummary[] }[];
}

/** The three content pillars, each opening with its "Start here" read */
export function PillarGrid({ groups }: PillarGridProps) {
    // Columns share subgrid rows so headers, cards and lists line up
    const hasMore = groups.some(({ posts }) => posts.length > 1);

    return (
        <ul className="grid gap-px border border-line bg-line md:grid-cols-3">
            {groups.map(({ pillar, posts }, index) => {
                const [first, ...rest] = posts;

                return (
                    <li
                        key={pillar.slug}
                        className={cn(
                            'flex flex-col gap-6 bg-background p-6 md:grid md:grid-rows-subgrid md:p-8',
                            hasMore ? 'md:row-span-3' : 'md:row-span-2'
                        )}
                    >
                        <div className="flex flex-col gap-3">
                            <p className="font-mono text-xs text-muted">
                                pillar {String(index + 1).padStart(2, '0')}
                            </p>
                            <h3 className="text-2xl font-bold leading-tight tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="leading-relaxed text-muted">
                                {pillar.description}
                            </p>
                        </div>

                        {first ? (
                            <Link
                                href={`/blog/${first.slug}`}
                                className="crop-marks group flex flex-col gap-2 p-4 [--crop-len:12px]"
                            >
                                <span className="font-mono text-xs text-signal-text">
                                    {first.frontmatter.startHere
                                        ? 'start here'
                                        : 'latest'}{' '}
                                    · {first.readingTime}
                                </span>
                                <span className="text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-signal-text">
                                    {first.frontmatter.title}
                                </span>
                            </Link>
                        ) : (
                            <Link
                                href="#newsletter"
                                className="group flex flex-col gap-2 border border-dashed border-line p-4"
                            >
                                <span className="font-mono text-xs text-muted">
                                    in progress
                                </span>
                                <span className="inline-flex items-center gap-2 font-bold transition-colors group-hover:text-signal-text">
                                    Get the first post by email
                                    <ArrowRight size={16} aria-hidden="true" />
                                </span>
                            </Link>
                        )}

                        {rest.length > 0 && (
                            <ul className="flex flex-col border-t border-line">
                                {rest.map((post) => (
                                    <li
                                        key={post.slug}
                                        className="border-b border-line"
                                    >
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="group flex flex-col gap-1 py-3"
                                        >
                                            <time
                                                dateTime={post.frontmatter.date}
                                                className="font-mono text-xs text-muted"
                                            >
                                                {formatDate(
                                                    post.frontmatter.date
                                                )}
                                            </time>
                                            <span className="font-bold transition-colors group-hover:text-signal-text">
                                                {post.frontmatter.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
