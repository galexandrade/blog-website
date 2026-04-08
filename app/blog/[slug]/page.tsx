import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getPostBySlug } from '@/app/lib/blog';
import { formatDate } from '@/app/lib/utils';
import { markdownToHtml } from '@/app/lib/markdown';
import type { Metadata } from 'next';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug
    }));
}

export async function generateMetadata({
    params
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: 'article',
            publishedTime: post.frontmatter.date
        }
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const contentHtml = await markdownToHtml(post.content);
    const tags = post.frontmatter.tags?.length
        ? post.frontmatter.tags
        : ['Web Development', 'Engineering', 'Frontend'];
    const authorName = post.frontmatter.author ?? 'Alex Andrade';
    const authorRole =
        post.frontmatter.authorRole ?? 'Design Systems & Front-end';

    return (
        <article className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/blog"
                    className="mb-8 inline-flex text-xl font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
                >
                    ← Back to all posts
                </Link>

                <header className="mb-8 mt-6">
                    <div className="mb-5 flex flex-wrap items-center gap-6 text-base text-slate-600 dark:text-slate-400">
                        <time dateTime={post.frontmatter.date}>
                            {formatDate(post.frontmatter.date)}
                        </time>
                        <span>{post.readingTime}</span>
                        <Link
                            href="/about"
                            className="underline-offset-4 transition-colors hover:text-indigo-600 hover:underline dark:hover:text-indigo-400"
                        >
                            {authorName}
                        </Link>
                    </div>
                    <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
                        {post.frontmatter.title}
                    </h1>
                    <p className="mb-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
                        {post.frontmatter.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10 dark:border-slate-700/70 dark:bg-slate-800/65">
                    <div className="mx-auto max-w-3xl">
                        <div
                            className="markdown-content prose prose-slate dark:prose-invert max-w-none text-[1.06rem] leading-8 prose-h1:mt-16 prose-h1:mb-7 prose-h1:text-4xl prose-h1:font-bold prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-3xl prose-h2:font-bold prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-2xl prose-h3:font-semibold prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:my-6 prose-p:text-slate-700 dark:prose-p:text-slate-200 prose-li:my-2 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-a:text-indigo-600 prose-a:no-underline prose-a:hover:underline prose-a:hover:text-indigo-500 dark:prose-a:text-indigo-300 dark:prose-a:hover:text-indigo-200 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-indigo-700 dark:prose-code:bg-slate-700/60 dark:prose-code:text-indigo-200 prose-code:before:content-none prose-code:after:content-none prose-pre:my-8 prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-300 prose-pre:bg-slate-950 prose-pre:px-5 prose-pre:py-4 prose-pre:text-slate-100 dark:prose-pre:border-slate-700 prose-img:rounded-xl prose-blockquote:border-indigo-500 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit [&_pre[data-language]]:pt-10 [&_pre[data-language]::before]:content-[attr(data-language)] [&_pre[data-language]::before]:absolute [&_pre[data-language]::before]:right-3 [&_pre[data-language]::before]:top-2 [&_pre[data-language]::before]:rounded-md [&_pre[data-language]::before]:bg-slate-800/75 [&_pre[data-language]::before]:px-2 [&_pre[data-language]::before]:py-1 [&_pre[data-language]::before]:text-[10px] [&_pre[data-language]::before]:font-semibold [&_pre[data-language]::before]:uppercase [&_pre[data-language]::before]:tracking-wider [&_pre[data-language]::before]:text-slate-300"
                            dangerouslySetInnerHTML={{ __html: contentHtml }}
                        />

                        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700/80">
                            <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-slate-100">
                                About the Author
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 overflow-hidden rounded-full">
                                    <Image
                                        src="/assets/profile.png"
                                        alt={authorName}
                                        width={56}
                                        height={56}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                                        {authorName}
                                    </p>
                                    <p className="text-xl text-slate-600 dark:text-slate-400">
                                        {authorRole}
                                    </p>
                                    <Link
                                        href="/about"
                                        className="mt-2 inline-flex text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    >
                                        Read more about me →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
