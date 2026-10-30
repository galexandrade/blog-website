import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/app/lib/blog';
import { formatDate } from '@/app/lib/utils';
import { markdownToHtml } from '@/app/lib/markdown';
import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/seo/json-ld';
import { absoluteUrl, personId, websiteId } from '@/app/lib/site';
import { PostTags } from '@/app/components/blog/post-list';
import { NewsletterSignup } from '@/app/components/newsletter/newsletter-signup';

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
            publishedTime: post.frontmatter.date,
            authors: [post.frontmatter.author ?? 'Alex Andrade'],
            tags: post.frontmatter.tags
        },
        twitter: {
            card: 'summary_large_image',
            title: post.frontmatter.title,
            description: post.frontmatter.description
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
    const authorName = post.frontmatter.author ?? 'Alex Andrade';
    const authorRole =
        post.frontmatter.authorRole ??
        'Leads the design system team at 7shifts and created Sous Chef.';
    const postUrl = absoluteUrl(`/blog/${post.slug}`);

    return (
        <article className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6">
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    '@id': `${postUrl}#blogposting`,
                    mainEntityOfPage: postUrl,
                    url: postUrl,
                    headline: post.frontmatter.title,
                    description: post.frontmatter.description,
                    datePublished: post.frontmatter.date,
                    image: absoluteUrl(
                        post.frontmatter.image ?? '/assets/profile.png'
                    ),
                    keywords: post.frontmatter.tags?.join(', '),
                    inLanguage: 'en-US',
                    author: { '@id': personId },
                    publisher: { '@id': personId },
                    isPartOf: { '@id': websiteId }
                }}
            />
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex min-h-11 items-center gap-2 font-mono text-[13px] text-muted transition-colors hover:text-foreground"
                >
                    <ArrowLeft size={16} aria-hidden="true" />
                    All writing
                </Link>

                <header className="mb-12 mt-8 flex flex-col gap-5 border-b border-foreground pb-10">
                    <p className="flex flex-wrap gap-x-3 font-mono text-[13px] text-muted">
                        <time dateTime={post.frontmatter.date}>
                            {formatDate(post.frontmatter.date)}
                        </time>
                        <span aria-hidden="true">·</span>
                        <span>{post.readingTime}</span>
                        <span aria-hidden="true">·</span>
                        <Link
                            href="/about"
                            className="underline-offset-4 hover:text-foreground hover:underline"
                        >
                            {authorName}
                        </Link>
                    </p>
                    <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] md:text-6xl">
                        {post.frontmatter.title}
                    </h1>
                    <p className="text-lg leading-relaxed text-muted md:text-xl">
                        {post.frontmatter.description}
                    </p>
                    <PostTags tags={post.frontmatter.tags} />
                </header>

                <div
                    className="markdown-content prose prose-brand max-w-none text-[1.075rem] leading-8 prose-headings:font-bold prose-h2:mb-5 prose-h2:mt-14 prose-h2:text-3xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-2xl prose-p:my-6 prose-li:my-2 prose-pre:my-8 prose-pre:px-5 prose-pre:py-4 prose-img:my-8"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

                <NewsletterSignup
                    id="post-newsletter"
                    title="Enjoyed this? Get the next one by email"
                    className="mt-16"
                />

                <aside className="mt-16 flex flex-col gap-5 border-t border-foreground pt-8 sm:flex-row sm:items-center">
                    <div className="shrink-0">
                        <Image
                            src="/assets/profile-2.png"
                            alt=""
                            width={72}
                            height={72}
                            className="h-[72px] w-[72px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-mono text-xs text-muted">
                            Written by
                        </p>
                        <p className="text-xl font-bold">{authorName}</p>
                        <p className="text-muted">{authorRole}</p>
                        <Link
                            href="/about"
                            className="mt-1 inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:decoration-foreground sm:min-h-0"
                        >
                            More about me
                            <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                    </div>
                </aside>
            </div>
        </article>
    );
}
