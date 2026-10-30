import type { Metadata } from 'next';
import { Eyebrow } from '@/app/components/brand/eyebrow';
import { PostList } from '@/app/components/blog/post-list';
import { getHomepagePosts, toPostSummary } from '@/app/lib/blog';

// Buttondown redirects here once a subscriber confirms ("After confirming")
export const metadata: Metadata = {
    title: "You're subscribed",
    robots: { index: false }
};

export default function NewsletterWelcomePage() {
    const posts = getHomepagePosts(3).map(toPostSummary);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-20 sm:px-6 md:pt-28">
            <header className="crop-marks mb-16 flex max-w-3xl flex-col gap-6 p-6 [--crop-len:24px] [--crop-w:3px] md:p-10">
                <Eyebrow>newsletter</Eyebrow>
                <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl">
                    You&apos;re in. Thanks for subscribing.
                </h1>
                <p className="text-lg leading-relaxed text-muted md:text-xl">
                    About once a month you&apos;ll get new posts on design
                    systems, AI and frontend, and what I&apos;m learning
                    building Sous Chef. While you wait for the first one,
                    here&apos;s where to start.
                </p>
            </header>
            <PostList posts={posts} />
        </div>
    );
}
