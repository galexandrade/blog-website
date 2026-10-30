import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/app/components/brand/button-link';
import {
    PhoneFrame,
    ProjectIcon,
    StatusValue
} from '@/app/components/projects/project-parts';
import type { Project } from '@/app/lib/projects';
import { cn } from '@/app/lib/utils';

/** One product on /work: details and hero, then its screens */
export function ProjectSection({ project }: { project: Project }) {
    const phoneScreens = project.screens.every(
        (screen) => screen.kind === 'phone'
    );

    return (
        <article
            id={project.slug}
            aria-labelledby={`${project.slug}-title`}
            className="flex scroll-mt-24 flex-col gap-14 border-t border-line pt-14"
        >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-14">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <ProjectIcon project={project} />
                        <div className="flex flex-col gap-1">
                            <h3
                                id={`${project.slug}-title`}
                                className="text-3xl font-bold tracking-tight md:text-4xl"
                            >
                                {project.name}
                            </h3>
                            <p className="font-mono text-xs text-muted">
                                {project.meta}
                            </p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed">{project.pitch}</p>

                    <div className="flex flex-col gap-2.5 border border-line bg-surface px-5 py-4">
                        <p className="font-mono text-xs text-foreground">
                            With your AI assistant
                        </p>
                        {project.ai.map((line) => (
                            <p
                                key={line}
                                className="text-[15px] leading-relaxed text-muted"
                            >
                                {line}
                            </p>
                        ))}
                    </div>

                    <dl className="grid grid-cols-2 border-t border-foreground sm:grid-cols-3">
                        {project.status.map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col gap-0.5 border-b border-line py-2.5 pr-3"
                            >
                                <dt className="font-mono text-[11px] text-muted">
                                    {item.label}
                                </dt>
                                <dd>
                                    <StatusValue
                                        value={item.value}
                                        tone={item.tone}
                                    />
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <ul
                        className="flex flex-wrap gap-2"
                        aria-label="Built with"
                    >
                        {project.stack.map((tech) => (
                            <li
                                key={tech}
                                className="border border-line px-2 py-1 font-mono text-xs text-muted"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                        {project.links.map((link) => (
                            <ButtonLink
                                key={link.href}
                                href={link.href}
                                variant="text"
                                external
                            >
                                {link.label}
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </ButtonLink>
                        ))}
                    </div>
                </div>

                <Image
                    src={project.hero.src}
                    alt={project.hero.alt}
                    width={1120}
                    height={1072}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="h-auto w-full self-start"
                />
            </div>

            {project.stats && (
                <ul className="grid gap-px border border-line bg-line sm:grid-cols-3">
                    {project.stats.map((stat) => (
                        <li
                            key={stat.label}
                            className="flex flex-col gap-1 bg-background px-6 py-5"
                        >
                            <span className="text-4xl font-bold tracking-tight">
                                {stat.value}
                            </span>
                            <span className="font-mono text-xs text-muted">
                                {stat.label}
                            </span>
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex flex-col gap-5">
                <ul
                    className={cn(
                        'grid gap-10',
                        phoneScreens
                            ? 'sm:grid-cols-2 lg:grid-cols-3'
                            : 'md:grid-cols-[1.9fr_1fr] md:items-start'
                    )}
                >
                    {project.screens.map((screen, index) => (
                        <li key={screen.src}>
                            <figure
                                className={cn(
                                    'flex flex-col gap-5',
                                    phoneScreens && 'items-center'
                                )}
                            >
                                {screen.kind === 'phone' ? (
                                    <PhoneFrame
                                        src={screen.src}
                                        alt={screen.alt}
                                        width={screen.width}
                                        height={screen.height}
                                        className="w-[220px]"
                                    />
                                ) : (
                                    <Image
                                        src={screen.src}
                                        alt={screen.alt}
                                        width={screen.width}
                                        height={screen.height}
                                        sizes="(min-width: 768px) 700px, 100vw"
                                        className="h-auto w-full border border-foreground"
                                    />
                                )}
                                <figcaption
                                    className={cn(
                                        'flex flex-col gap-1.5',
                                        phoneScreens && 'w-full max-w-[16rem]'
                                    )}
                                >
                                    <span className="font-mono text-xs text-muted">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-lg font-bold">
                                        {screen.title}
                                    </span>
                                    <span className="text-sm leading-relaxed text-muted">
                                        {screen.caption}
                                    </span>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
                {project.screensNote && (
                    <p className="font-mono text-xs text-muted">
                        {project.screensNote}
                    </p>
                )}
            </div>
        </article>
    );
}
