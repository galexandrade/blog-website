import { cn } from '@/app/lib/utils';

/** The mono "// comment" label that sits above titles */
export function Eyebrow({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={cn('font-mono text-[13px] text-signal-text', className)}>
            {'// '}
            {children}
        </p>
    );
}
