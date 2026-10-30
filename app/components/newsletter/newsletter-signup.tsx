import { buttondownUsername } from '@/app/lib/site';
import { cn } from '@/app/lib/utils';

interface NewsletterSignupProps {
    /** Distinguishes the field id when the form appears twice on a page */
    id: string;
    title?: string;
    description?: string;
    className?: string;
}

/*
 * Buttondown signup. A plain form post, not fetch: Buttondown sometimes
 * answers with a CAPTCHA or validation page the subscriber has to complete.
 * Buttondown's redirect settings send them back to /newsletter/thanks and,
 * after confirming, /newsletter/welcome, so they end up on this site.
 */
export function NewsletterSignup({
    id,
    title = 'Get the next post by email',
    description = 'A monthly email on design systems, AI and frontend: new posts and what I am learning building Sous Chef. No spam, unsubscribe anytime.',
    className
}: NewsletterSignupProps) {
    if (!buttondownUsername) {
        return null;
    }

    const emailId = `${id}-email`;

    return (
        <section
            aria-labelledby={`${id}-title`}
            className={cn(
                '@container border border-line p-6 md:p-10',
                className
            )}
        >
            <div className="flex flex-col gap-6 @3xl:flex-row @3xl:items-end @3xl:justify-between @3xl:gap-12">
                <div className="flex max-w-xl flex-col gap-3">
                    <h2
                        id={`${id}-title`}
                        className="text-2xl font-bold leading-tight tracking-tight md:text-3xl"
                    >
                        {title}
                    </h2>
                    <p className="leading-relaxed text-muted">{description}</p>
                </div>
                <form
                    action={`https://buttondown.com/api/emails/embed-subscribe/${buttondownUsername}`}
                    method="post"
                    className="flex w-full flex-col gap-2 @3xl:max-w-sm"
                >
                    <label
                        htmlFor={emailId}
                        className="font-mono text-[13px] text-muted"
                    >
                        Email address
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                            id={emailId}
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="min-h-11 w-full min-w-0 border border-foreground bg-surface px-4 py-3 text-foreground placeholder:text-muted"
                        />
                        <button
                            type="submit"
                            className="min-h-11 shrink-0 bg-primary px-5 py-3 font-semibold text-on-primary transition-opacity hover:opacity-90"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="font-mono text-xs text-muted">
                        You&apos;ll get an email to confirm.
                    </p>
                </form>
            </div>
        </section>
    );
}
