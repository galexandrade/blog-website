import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/app/components/brand/button-link';
import { Eyebrow } from '@/app/components/brand/eyebrow';

// Buttondown redirects here after the signup form ("After subscribing")
export const metadata: Metadata = {
    title: 'Check your inbox',
    robots: { index: false }
};

export default function NewsletterThanksPage() {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 pb-24 pt-20 sm:px-6 md:pt-28">
            <Eyebrow>newsletter</Eyebrow>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl">
                Almost there. Check your inbox.
            </h1>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
                I just sent you an email to confirm your subscription. Click the
                link inside and you&apos;re in. If it doesn&apos;t show up in a
                minute or two, check your spam or promotions folder.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/blog">
                    Keep reading
                    <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/" variant="secondary">
                    Back to home
                </ButtonLink>
            </div>
        </div>
    );
}
