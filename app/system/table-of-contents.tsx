'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/app/lib/utils';

// A section counts as current once its heading passes this line, just under
// the sticky site header
const activationOffset = 140;

interface TableOfContentsProps {
    sections: { id: string; title: string }[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState(sections[0]?.id);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            // The last sections can be too short to ever reach the line
            if (atBottom) {
                setActiveId(sections[sections.length - 1]?.id);
                return;
            }

            let current = sections[0]?.id;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (
                    element &&
                    element.getBoundingClientRect().top <= activationOffset
                ) {
                    current = section.id;
                }
            }
            setActiveId(current);
        };

        const onScroll = () => {
            if (!frame) {
                frame = requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [sections]);

    return (
        <nav aria-label="On this page" className="hidden lg:block">
            <ol className="sticky top-28 flex flex-col gap-1 font-mono text-[13px]">
                {sections.map((section, index) => {
                    const isActive = section.id === activeId;
                    return (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                aria-current={isActive ? 'location' : undefined}
                                className={cn(
                                    'inline-block px-2 py-1 transition-colors hover:text-foreground',
                                    isActive
                                        ? 'crop-marks text-foreground [--crop-len:6px] [--crop-w:1.5px]'
                                        : 'text-muted'
                                )}
                            >
                                <span className="text-signal-text">
                                    {String(index + 1).padStart(2, '0')}
                                </span>{' '}
                                {section.title}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
