import Image from 'next/image';
import type { Project, StatusTone } from '@/app/lib/projects';
import { cn } from '@/app/lib/utils';

const toneSymbol: Record<StatusTone, string> = {
    done: '✓',
    pending: '◐',
    none: ''
};

const toneClass: Record<StatusTone, string> = {
    done: 'text-foreground',
    pending: 'text-signal-text',
    none: 'text-muted'
};

/** "✓ Live", "◐ In review": the symbol is decoration, the word carries it */
export function StatusValue({
    value,
    tone,
    className
}: {
    value: string;
    tone: StatusTone;
    className?: string;
}) {
    return (
        <span
            className={cn('font-mono text-[13px]', toneClass[tone], className)}
        >
            {toneSymbol[tone] && (
                <span aria-hidden="true">{toneSymbol[tone]} </span>
            )}
            {value}
        </span>
    );
}

export function ProjectIcon({
    project,
    size = 56
}: {
    project: Project;
    size?: number;
}) {
    if (project.icon) {
        return (
            <Image
                src={project.icon}
                alt=""
                width={size}
                height={size}
                className="block rounded-[22%]"
            />
        );
    }

    // Rezme's mark, drawn like its own favicon: four rounded squares
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="block"
        >
            <rect width="32" height="32" rx="7" fill="#0b0b10" />
            <rect x="5" y="5" width="10" height="10" rx="2.5" fill="#7c7ff5" />
            <rect
                x="17"
                y="5"
                width="10"
                height="10"
                rx="2.5"
                fill="#7c7ff5"
                opacity="0.55"
            />
            <rect
                x="5"
                y="17"
                width="10"
                height="10"
                rx="2.5"
                fill="#7c7ff5"
                opacity="0.55"
            />
            <rect
                x="17"
                y="17"
                width="10"
                height="10"
                rx="2.5"
                fill="#7c7ff5"
            />
        </svg>
    );
}

/** A plain device shell for phone screenshots */
export function PhoneFrame({
    src,
    alt,
    width,
    height,
    className
}: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'rounded-[2.6rem] bg-[#111111] p-2 outline outline-1 outline-line',
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="220px"
                className="block h-auto w-full rounded-[2.1rem]"
            />
        </div>
    );
}
