import type { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import { PostList } from '@/app/components/blog/post-list';
import { Eyebrow } from '@/app/components/brand/eyebrow';
import { getAllPosts, toPostSummary } from '@/app/lib/blog';

const description =
    'Writing on design systems, AI and MCP for design systems, and frontend architecture.';

export const metadata: Metadata = pageMetadata({
    path: '/blog',
    title: 'Writing',
    description
});

export default function BlogPage() {
    const posts = getAllPosts().map(toPostSummary);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <header className="mb-12 flex flex-col gap-4">
                <Eyebrow>{posts.length} posts</Eyebrow>
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
