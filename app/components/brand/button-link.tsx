import Link from 'next/link';
import { cn } from '@/app/lib/utils';

const variants = {
    primary:
        'min-h-11 gap-2 bg-primary px-5 py-3 font-semibold text-on-primary transition-opacity hover:opacity-90',
    secondary:
        'min-h-11 border border-foreground px-5 py-3 font-semibold transition-colors hover:bg-foreground hover:text-background',
    text: 'min-h-11 gap-1.5 font-semibold underline decoration-signal decoration-2 underline-offset-4 hover:text-signal-text'
};

export type ButtonLinkVariant = keyof typeof variants;

interface ButtonLinkProps {
    href: string;
    variant?: ButtonLinkVariant;
    /** Opens in a new tab; use for links that leave the site */
    external?: boolean;
    /** Downloads the file instead of navigating to it */
    download?: boolean;
    className?: string;
    children: React.ReactNode;
}

/** Every call to action on the site: a link styled as a button or a text link */
export function ButtonLink({
    href,
    variant = 'primary',
    external = false,
    download = false,
    className,
    children
}: ButtonLinkProps) {
    const classes = cn(
        'inline-flex items-center',
        variants[variant],
        className
    );

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                {children}
            </a>
        );
    }

    if (download) {
        return (
            <a href={href} download className={classes}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
