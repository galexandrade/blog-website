import type { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import { ArrowRight, ArrowUpRight, Check, Download, X } from 'lucide-react';
import { Mark } from '@/app/components/brand/logo';
import { ButtonLink } from '@/app/components/brand/button-link';
import { Eyebrow } from '@/app/components/brand/eyebrow';
import { SectionHeading } from '@/app/components/brand/section-heading';
import { PostTags } from '@/app/components/blog/post-list';
import {
    colorTokens,
    colorValue,
    contrastRatio,
    fontTokens,
    typeStyles,
    type ThemeName
} from '@/app/lib/tokens';
import { cn } from '@/app/lib/utils';
import { TableOfContents } from '@/app/system/table-of-contents';

const description =
    'Spec, the design system behind alexandrade.dev: logo, color tokens, typography, crop marks and components.';

export const metadata: Metadata = pageMetadata({
    path: '/system',
    title: 'System',
    description
});

const sourceUrl =
    'https://github.com/galexandrade/blog-website/blob/main/app/lib/tokens.ts';

const sections = [
    { id: 'principles', title: 'Principles' },
    { id: 'logo', title: 'Logo' },
    { id: 'color', title: 'Color' },
    { id: 'typography', title: 'Typography' },
    { id: 'crop-marks', title: 'Crop marks' },
    { id: 'components', title: 'Components' },
    { id: 'voice', title: 'Voice' },
    { id: 'resources', title: 'Resources' }
];

const principles = [
    {
        title: 'Frame what matters',
        body: 'Crop marks frame the logo and one object per page, usually a portrait. If everything is framed, nothing is.'
    },
    {
        title: 'One signal',
        body: 'Orange is for crop marks, focus rings and link underlines. Labels, numbers and buttons stay paper and ink.'
    },
    {
        title: 'Tokens, not values',
        body: 'Components use semantic names and themes change the values. The same tokens are published as JSON for people and AI agents.'
    }
];

const logoRules = [
    {
        ok: true,
        text: 'The A takes the text color; the crop marks are always signal.'
    },
    {
        ok: true,
        text: 'Keep clear space of one crop-mark length on every side.'
    },
    {
        ok: true,
        text: 'At 24px and below, use the small drawing (the Mark component switches automatically).'
    },
    {
        ok: false,
        text: 'Never go below 16px, recolor the crop marks or rotate the mark.'
    }
];

const voiceRules = [
    { label: 'alex andrade', note: 'The wordmark is always lowercase.' },
    {
        label: 'no // labels',
        note: 'Mono is for metadata: dates, tags, counts. Not section kickers.'
    },
    {
        label: 'no 01 · 02 · 03',
        note: 'Number things only when order is real, like this spec.'
    },
    {
        label: 'I built, we learned',
        note: 'First person, plain words, no hype.'
    }
];

const resources = [
    {
        label: 'tokens.json',
        note: 'Design Tokens format, both themes',
        href: '/system/tokens.json'
    },
    {
        label: 'mark-light.svg',
        note: 'For light backgrounds',
        href: '/assets/brand/mark-light.svg'
    },
    {
        label: 'mark-dark.svg',
        note: 'For dark backgrounds',
        href: '/assets/brand/mark-dark.svg'
    },
    {
        label: 'app-icon.svg',
        note: 'Square icon, no transparency',
        href: '/assets/brand/app-icon.svg'
    }
];

export default function SystemPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pt-20">
            <header className="mb-16 flex max-w-3xl flex-col gap-5 md:mb-24">
                <Eyebrow>system · v1</Eyebrow>
                <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl">
                    Spec
                </h1>
                <p className="text-lg leading-relaxed text-muted md:text-xl">
                    The design system behind this site. One set of tokens drives
                    every page, the generated share images and a{' '}
                    <code className="font-mono text-base text-foreground">
                        tokens.json
                    </code>{' '}
                    that AI agents can read.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                    <ButtonLink href="/system/tokens.json">
                        <Download size={18} aria-hidden="true" />
                        tokens.json
                    </ButtonLink>
                    <ButtonLink href={sourceUrl} variant="secondary" external>
                        View the source
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </ButtonLink>
                </div>
            </header>

            <div className="lg:grid lg:grid-cols-[11rem_1fr] lg:gap-16">
                <TableOfContents sections={sections} />

                <div className="flex min-w-0 flex-col gap-24 md:gap-32">
                    <Section index={1}>
                        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
                            {principles.map((principle, index) => (
                                <div
                                    key={principle.title}
                                    className="flex flex-col gap-3 bg-background p-6"
                                >
                                    <span className="font-mono text-[13px] text-signal-text">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        {principle.title}
                                    </h3>
                                    <p className="leading-relaxed text-muted">
                                        {principle.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section index={2}>
                        <Lead>
                            An A inside crop marks: a component framed on a spec
                            sheet. Two drawings share one shape, a master for
                            32px and up and a heavier one for small sizes.
                        </Lead>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {(['light', 'dark'] as const).map((theme) => (
                                <ThemePreview
                                    key={theme}
                                    theme={theme}
                                    className="flex h-64 items-center justify-center"
                                >
                                    <Mark
                                        size={144}
                                        title={`Spec mark on ${theme}`}
                                    />
                                </ThemePreview>
                            ))}
                        </div>
                        <div className="mt-4 flex flex-wrap items-end gap-8 border border-line p-6">
                            {[96, 48, 32, 24, 16].map((size) => (
                                <div
                                    key={size}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <Mark size={size} />
                                    <span className="font-mono text-xs text-muted">
                                        {size}px{size <= 24 ? ' · small' : ''}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <RuleList rules={logoRules} />
                        <CodeBlock
                            code={`import { Mark, Wordmark } from '@/app/components/brand/logo';

<Mark size={26} />          // picks the small drawing at 24px and below
<Wordmark />                // mark + "alex andrade"`}
                        />
                    </Section>

                    <Section index={3}>
                        <Lead>
                            Paper and ink with one signal color. Every value is
                            a semantic token; light and dark change the value,
                            never the name. Contrast is checked against WCAG on
                            every build of this page.
                        </Lead>
                        <ColorTable />
                        <CodeBlock
                            code={`// Tailwind utilities map to the tokens
<p className="text-muted">…</p>
<div className="border-line bg-surface">…</div>

/* or the CSS variables directly */
outline: 2px solid var(--signal);`}
                        />
                    </Section>

                    <Section index={4}>
                        <div className="grid gap-4 md:grid-cols-2">
                            {fontTokens.map((font) => (
                                <div
                                    key={font.name}
                                    className="flex flex-col gap-4 border border-line p-6"
                                >
                                    <span
                                        className={cn(
                                            'text-7xl leading-none',
                                            font.name === 'font-mono'
                                                ? 'font-mono'
                                                : 'font-bold'
                                        )}
                                        aria-hidden="true"
                                    >
                                        Aa
                                    </span>
                                    <div>
                                        <p className="text-xl font-bold">
                                            {font.family}
                                        </p>
                                        <p className="text-muted">
                                            {font.usage}
                                        </p>
                                        <p className="mt-2 font-mono text-xs text-muted">
                                            {font.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ul className="mt-10 border-t border-line">
                            {typeStyles.map((style) => (
                                <li
                                    key={style.name}
                                    className="grid gap-3 border-b border-line py-6 md:grid-cols-[12rem_1fr] md:gap-8"
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold">
                                            {style.name}
                                        </span>
                                        <span className="font-mono text-xs text-muted">
                                            {style.spec}
                                        </span>
                                        <span className="text-sm text-muted">
                                            {style.usage}
                                        </span>
                                    </div>
                                    <p
                                        className={cn(
                                            style.className,
                                            'min-w-0'
                                        )}
                                    >
                                        Design systems that humans and AI agents
                                        get right.
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section index={5}>
                        <Lead>
                            The signature element. Crop marks frame the one
                            thing that matters in a view: the portrait, the
                            featured post, the share image title. Size them with
                            two variables.
                        </Lead>
                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                { label: 'small', len: 12, width: 2 },
                                { label: 'default', len: 14, width: 2 },
                                { label: 'large', len: 28, width: 3 }
                            ].map((variant) => (
                                <div
                                    key={variant.label}
                                    className="flex flex-col gap-3"
                                >
                                    <div
                                        className="crop-marks flex h-40 items-center justify-center p-4"
                                        style={
                                            {
                                                '--crop-len': `${variant.len}px`,
                                                '--crop-w': `${variant.width}px`
                                            } as React.CSSProperties
                                        }
                                    >
                                        <span className="font-mono text-sm text-muted">
                                            {variant.len} / {variant.width}
                                        </span>
                                    </div>
                                    <span className="font-mono text-xs text-muted">
                                        {variant.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <CodeBlock
                            code={`<div className="crop-marks p-4">…</div>

<div className="crop-marks p-4 [--crop-len:28px] [--crop-w:3px]">…</div>`}
                        />
                    </Section>

                    <Section index={6}>
                        <div className="flex flex-col gap-12">
                            <Specimen
                                name="ButtonLink"
                                description="Every call to action. Primary for the one main path in a view, secondary next to it, text for inline links."
                                code={`<ButtonLink href="/blog">Read the latest</ButtonLink>
<ButtonLink href="/work" variant="secondary">See the work</ButtonLink>
<ButtonLink href={url} variant="text" external>Explore Sous Chef</ButtonLink>`}
                            >
                                <div className="flex flex-wrap items-center gap-4">
                                    <ButtonLink href="/blog">
                                        Read the latest
                                        <ArrowRight
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </ButtonLink>
                                    <ButtonLink
                                        href="/work"
                                        variant="secondary"
                                    >
                                        See the work
                                    </ButtonLink>
                                    <ButtonLink href="/about" variant="text">
                                        More about me
                                        <ArrowRight
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </ButtonLink>
                                </div>
                            </Specimen>

                            <Specimen
                                name="Eyebrow"
                                description="A quiet mono label above a hero title. Muted, lowercase, at most one per page."
                                code={`<Eyebrow>design-systems · ai · frontend</Eyebrow>`}
                            >
                                <Eyebrow>
                                    design-systems · ai · frontend
                                </Eyebrow>
                            </Specimen>

                            <Specimen
                                name="SectionHeading"
                                description="Section title with a full-width rule. The optional index is for genuinely ordered content only."
                                code={`<SectionHeading title="Writing" />`}
                            >
                                <div className="w-full [&>div]:mb-0">
                                    <SectionHeading title="Writing" />
                                </div>
                            </Specimen>

                            <Specimen
                                name="PostTags"
                                description="Up to three tags, slugged and prefixed with #."
                                code={`<PostTags tags={['Design Systems', 'AI', 'MCP']} />`}
                            >
                                <PostTags
                                    tags={['Design Systems', 'AI', 'MCP']}
                                />
                            </Specimen>
                        </div>
                    </Section>

                    <Section index={7}>
                        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
                            {voiceRules.map((rule) => (
                                <li
                                    key={rule.label}
                                    className="flex flex-col gap-2 bg-background p-6"
                                >
                                    <span className="font-mono text-lg text-signal-text">
                                        {rule.label}
                                    </span>
                                    <span className="text-muted">
                                        {rule.note}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section index={8}>
                        <ul className="border-t border-line">
                            {resources.map((resource) => (
                                <li
                                    key={resource.href}
                                    className="border-b border-line"
                                >
                                    <a
                                        href={resource.href}
                                        className="group flex min-h-11 items-center justify-between gap-4 py-5"
                                    >
                                        <span className="flex flex-col gap-1">
                                            <span className="font-mono font-medium group-hover:text-signal-text">
                                                {resource.label}
                                            </span>
                                            <span className="text-sm text-muted">
                                                {resource.note}
                                            </span>
                                        </span>
                                        <Download
                                            size={20}
                                            aria-hidden="true"
                                            className="shrink-0 text-muted group-hover:text-signal-text"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
}

function Section({
    index,
    children
}: {
    /** 1-based position in `sections` */
    index: number;
    children: React.ReactNode;
}) {
    const section = sections[index - 1];

    return (
        <section aria-labelledby={section.id} className="scroll-mt-24">
            <SectionHeading
                id={section.id}
                index={String(index).padStart(2, '0')}
                title={section.title}
            />
            {children}
        </section>
    );
}

function Lead({ children }: { children: React.ReactNode }) {
    return (
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            {children}
        </p>
    );
}

function ThemePreview({
    theme,
    className,
    children
}: {
    theme: ThemeName;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                theme === 'light' ? 'theme-light' : 'theme-dark',
                'relative border border-line bg-background text-foreground',
                className
            )}
        >
            <span className="absolute left-3 top-3 font-mono text-xs text-muted">
                {theme}
            </span>
            {children}
        </div>
    );
}

function CodeBlock({ code }: { code: string }) {
    return (
        <pre className="mt-6 overflow-x-auto bg-[var(--code-bg)] px-5 py-4 font-mono text-[13px] leading-6 text-[#e8e8e3]">
            <code>{code}</code>
        </pre>
    );
}

function RuleList({ rules }: { rules: { ok: boolean; text: string }[] }) {
    return (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {rules.map((rule) => (
                <li key={rule.text} className="flex gap-3 leading-relaxed">
                    {rule.ok ? (
                        <Check
                            size={20}
                            className="mt-0.5 shrink-0 text-foreground"
                            aria-label="Do"
                        />
                    ) : (
                        <X
                            size={20}
                            className="mt-0.5 shrink-0 text-signal-text"
                            aria-label="Don't"
                        />
                    )}
                    <span className="text-muted">{rule.text}</span>
                </li>
            ))}
        </ul>
    );
}

function ColorTable() {
    return (
        <ul className="border-t border-line">
            {colorTokens.map((token) => (
                <li
                    key={token.name}
                    className="grid gap-4 border-b border-line py-5 md:grid-cols-[9rem_1fr_11rem] md:items-center md:gap-6"
                >
                    <div className="flex gap-2">
                        {(['light', 'dark'] as const).map((theme) => (
                            <div
                                key={theme}
                                className="h-14 w-16 border border-line"
                                style={{ background: token[theme] }}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                    <div className="flex min-w-0 flex-col gap-1">
                        <span className="font-mono font-medium">
                            --{token.name}
                        </span>
                        <span className="text-sm text-muted">
                            {token.usage}
                        </span>
                        <span className="font-mono text-xs text-muted">
                            {token.light} · {token.dark}
                        </span>
                    </div>
                    <ContrastCheck token={token} />
                </li>
            ))}
        </ul>
    );
}

function ContrastCheck({ token }: { token: (typeof colorTokens)[number] }) {
    if (!token.contrastWith || !token.minContrast) {
        return (
            <span className="font-mono text-xs text-muted">no text use</span>
        );
    }

    const against = token.contrastWith;
    const min = token.minContrast;

    return (
        <div className="flex flex-col gap-1 font-mono text-xs">
            {(['light', 'dark'] as const).map((theme) => {
                const ratio = contrastRatio(
                    token[theme],
                    colorValue(against, theme)
                );
                const passes = ratio >= min;
                return (
                    <span
                        key={theme}
                        className={passes ? 'text-muted' : 'text-signal-text'}
                    >
                        {theme} {ratio.toFixed(1)}:1{' '}
                        {passes ? `≥ ${min}` : `< ${min} fails`}
                    </span>
                );
            })}
            <span className="text-muted">on --{against}</span>
        </div>
    );
}

function Specimen({
    name,
    description,
    code,
    children
}: {
    name: string;
    description: string;
    code: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h3 className="font-mono text-lg font-medium">{`<${name}>`}</h3>
                <p className="max-w-2xl text-muted">{description}</p>
            </div>
            <div className="border border-line p-6 md:p-8">{children}</div>
            <CodeBlock code={code} />
        </div>
    );
}
