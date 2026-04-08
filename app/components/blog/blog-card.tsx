'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatDate } from '@/app/lib/utils';
import { BlogPost } from '@/app/types/blog';

interface BlogCardProps {
    post: BlogPost;
    index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
    const fallbackTags = ['Engineering', 'Frontend', 'Architecture'];
    const tags = post.frontmatter.tags?.length
        ? post.frontmatter.tags
        : fallbackTags;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-300/70 bg-slate-100/70 transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800"
            >
                {post.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                            src={post.coverImage}
                            alt={post.frontmatter.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </div>
                )}

                <div className="flex h-full flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <time dateTime={post.frontmatter.date}>
                            {formatDate(post.frontmatter.date)}
                        </time>
                        <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mb-4 line-clamp-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
                        {post.frontmatter.title}
                    </h3>
                    <p className="mb-6 line-clamp-4 flex-1 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                        {post.frontmatter.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">
                        {tags.slice(0, 3).map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
