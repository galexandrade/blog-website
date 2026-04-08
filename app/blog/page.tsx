import type { Metadata } from 'next';
import { BlogCard } from '@/app/components/blog/blog-card';
import { getAllPosts } from '@/app/lib/blog';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Latest insights on design systems, component architecture, and front-end development',
    openGraph: {
        title: 'Blog | Alex Andrade',
        description:
            'Latest insights on design systems, component architecture, and front-end development',
        type: 'website',
        url: '/blog'
    }
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
            <div className="mb-8 flex items-center gap-4">
                <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 md:text-6xl">
                    Featured Posts
                </h1>
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-indigo-600 px-3 text-xl font-semibold !text-white">
                    {posts.length}
                </span>
            </div>
            <p className="mb-10 text-xl text-slate-600 dark:text-slate-400 md:text-2xl">
                Latest insights on design systems, component architecture, and
                front-end development
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                    <BlogCard key={post.slug} post={post} index={index} />
                ))}
            </div>

            {posts.length === 0 && (
                <p className="py-12 text-center text-xl text-slate-600 dark:text-slate-400">
                    No blog posts found.
                </p>
            )}
        </div>
    );
}
