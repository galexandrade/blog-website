interface SectionHeadingProps {
    /** Two-digit section number, e.g. "01" */
    index: string;
    title: string;
    id?: string;
}

/** Numbered section title with a full-width rule underneath */
export function SectionHeading({ index, title, id }: SectionHeadingProps) {
    return (
        <div className="mb-10 flex items-baseline gap-4 border-b border-foreground pb-4">
            <span className="font-mono text-sm text-signal-text">{index}</span>
            <h2
                id={id}
                className="text-4xl font-bold tracking-tight md:text-5xl"
            >
                {title}
            </h2>
        </div>
    );
}
