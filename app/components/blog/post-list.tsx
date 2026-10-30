import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/app/lib/utils';
import { BlogPostSummary } from '@/app/types/blog';

export function PostList({ posts }: { posts: BlogPostSummary[] }) {
    return (
        <ul className="border-t border-line">
            {posts.map((post) => (
                <li key={post.slug} className="border-b border-line">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group grid gap-3 py-7 md:grid-cols-[10rem_1fr_auto] md:gap-8"
                    >
                        <time
                            dateTime={post.frontmatter.date}
                            className="pt-1.5 font-mono text-[13px] text-muted"
                        >
                            {formatDate(post.frontmatter.date)}
                        </time>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-signal-text md:text-[1.75rem]">
                                {post.frontmatter.title}
                            </h3>
                            <p className="max-w-2xl leading-relaxed text-muted">
                                {post.frontmatter.description}
                            </p>
                            <PostTags tags={post.frontmatter.tags} />
                        </div>
                        <ArrowRight
                            size={22}
                            aria-hidden="true"
                            className="hidden self-center text-muted transition-transform group-hover:translate-x-1 group-hover:text-signal-text md:block"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export function FeaturedPost({ post }: { post: BlogPostSummary }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="crop-marks group grid gap-8 p-5 [--crop-len:22px] md:grid-cols-[1.1fr_1fr] md:items-center md:p-8"
        >
            {post.coverImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface">
                    <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 560px, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                </div>
            )}
            <div className="flex flex-col gap-4">
                <p className="font-mono text-[13px] text-muted">
                    <span className="text-signal-text">Latest</span> ·{' '}
                    <time dateTime={post.frontmatter.date}>
                        {formatDate(post.frontmatter.date)}
                    </time>{' '}
                    · {post.readingTime}
                </p>
                <h3 className="text-3xl font-bold leading-[1.05] tracking-tight transition-colors group-hover:text-signal-text md:text-[2.75rem]">
                    {post.frontmatter.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted">
                    {post.frontmatter.description}
                </p>
                <PostTags tags={post.frontmatter.tags} />
            </div>
        </Link>
    );
}

export function PostTags({ tags }: { tags?: string[] }) {
    if (!tags?.length) {
        return null;
    }

    return (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
            {tags.slice(0, 3).map((tag) => (
                <li key={tag}>#{tag.toLowerCase().replace(/\s+/g, '-')}</li>
            ))}
        </ul>
    );
}
