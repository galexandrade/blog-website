interface SectionHeadingProps {
    title: string;
    /** Two-digit number, e.g. "01". Only for genuinely ordered content like the /system spec */
    index?: string;
    id?: string;
}

/** Section title with a full-width rule underneath */
export function SectionHeading({ title, index, id }: SectionHeadingProps) {
    return (
        <div className="mb-10 flex items-baseline gap-4 border-b border-foreground pb-4">
            {index && (
                <span className="font-mono text-sm text-muted">{index}</span>
            )}
            <h2
                id={id}
                className="text-4xl font-bold tracking-tight md:text-5xl"
            >
                {title}
            </h2>
        </div>
    );
}
