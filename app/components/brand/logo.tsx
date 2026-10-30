import { cn } from '@/app/lib/utils';

// Two drawings of the same mark: the master holds up from 32px, the small one
// has heavier strokes and wider crop marks so it still reads at 16-24px.
export const markPaths = {
    master: {
        crop: 'M6 18 V6 H18 M46 6 H58 V18 M58 46 V58 H46 M18 58 H6 V46',
        cropWidth: 4,
        letter: 'M17 50 L29 14 L35 14 L47 50 L40.5 50 L37.83 42 L26.17 42 L23.5 50 Z M32 24.5 L36.17 37 L27.83 37 Z'
    },
    small: {
        crop: 'M3 17 V3 H17 M47 3 H61 V17 M61 47 V61 H47 M17 61 H3 V47',
        cropWidth: 6,
        letter: 'M16 50 L28.5 14 L35.5 14 L48 50 L39 50 L37.1 44.5 L26.9 44.5 L25 50 Z M32 29.8 L35.2 39 L28.8 39 Z'
    }
} as const;

interface MarkProps {
    size?: number;
    className?: string;
    title?: string;
}

/** The "Spec" mark: an A framed by crop marks. The A follows currentColor. */
export function Mark({ size = 32, className, title }: MarkProps) {
    const paths = size <= 24 ? markPaths.small : markPaths.master;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            className={className}
            role={title ? 'img' : undefined}
            aria-label={title}
            aria-hidden={title ? undefined : true}
        >
            <path
                d={paths.crop}
                fill="none"
                stroke="var(--signal)"
                strokeWidth={paths.cropWidth}
            />
            <path fillRule="evenodd" fill="currentColor" d={paths.letter} />
        </svg>
    );
}

interface WordmarkProps {
    className?: string;
    markSize?: number;
}

export function Wordmark({ className, markSize = 26 }: WordmarkProps) {
    return (
        <span className={cn('inline-flex items-center gap-2.5', className)}>
            <Mark size={markSize} />
            <span className="text-lg font-bold tracking-tight">
                alex andrade
            </span>
        </span>
    );
}
