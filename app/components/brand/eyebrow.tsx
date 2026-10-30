import { cn } from '@/app/lib/utils';

/** The quiet mono label above a hero title. Use at most one per page */
export function Eyebrow({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={cn('font-mono text-[13px] text-muted', className)}>
            {children}
        </p>
    );
}
