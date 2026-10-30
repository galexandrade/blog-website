import Link from 'next/link';
import {
    ProjectIcon,
    StatusValue
} from '@/app/components/projects/project-parts';
import type { Project } from '@/app/lib/projects';

/** Compact homepage card; links to the product's section on /work */
export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/work#${project.slug}`}
            className="group flex h-full flex-col gap-4 border border-line bg-surface p-6 transition-colors hover:border-foreground"
        >
            <div className="flex items-center justify-between gap-4">
                <ProjectIcon project={project} size={48} />
                <span className="text-right font-mono text-xs text-muted">
                    {project.platforms}
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-signal-text">
                    {project.name}
                </h3>
                <p className="leading-relaxed text-muted">{project.summary}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="AI">
                {project.aiChips.map((chip) => (
                    <li
                        key={chip.label}
                        className="border border-line px-2 py-1"
                    >
                        <StatusValue
                            value={chip.label}
                            tone={chip.tone}
                            className="text-xs"
                        />
                    </li>
                ))}
            </ul>
        </Link>
    );
}
