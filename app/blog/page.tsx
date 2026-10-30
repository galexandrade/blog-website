import type { Metadata } from 'next';
import { PostList } from '@/app/components/blog/post-list';
import { getAllPosts, toPostSummary } from '@/app/lib/blog';

const description =
    'Writing on design systems, AI and MCP for design systems, and frontend architecture.';

export const metadata: Metadata = {
    title: 'Writing',
    description,
    openGraph: {
        title: 'Writing | Alex Andrade',
        description,
        type: 'website',
        url: '/blog'
    }
};

export default function BlogPage() {
    const posts = getAllPosts().map(toPostSummary);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <header className="mb-12 flex flex-col gap-4">
                <p className="font-mono text-[13px] text-signal-text">
                    {'// writing'}
                    <span className="text-muted">
                        {' '}
                        · {String(posts.length).padStart(2, '0')} posts
                    </span>
                </p>
                <h1 className="text-5xl font-bold tracking-[-0.035em] md:text-7xl">
                    Writing
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                    Design systems, AI and MCP, and frontend architecture: what
                    I learn building Sous Chef at 7shifts.
                </p>
            </header>

            {posts.length > 0 ? (
                <PostList posts={posts} />
            ) : (
                <p className="py-12 text-center text-xl text-muted">
                    No posts yet.
                </p>
            )}
        </div>
    );
}
