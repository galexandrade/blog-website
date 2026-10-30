/*
 * "Spec" design tokens: the single source of truth for the brand.
 * The site's CSS variables, the /system docs page, the generated OG images
 * and /system/tokens.json are all built from this file.
 */

export type ThemeName = 'light' | 'dark';

export interface ColorToken {
    name: string;
    light: string;
    dark: string;
    usage: string;
    /** The token this one is read against, for contrast checks */
    contrastWith?: string;
    /** Minimum ratio: 4.5 for text, 3 for marks and large fills */
    minContrast?: number;
}

export const colorTokens: ColorToken[] = [
    {
        name: 'background',
        light: '#f4f4f0',
        dark: '#111111',
        usage: 'Page ground'
    },
    {
        name: 'surface',
        light: '#ffffff',
        dark: '#1c1c1a',
        usage: 'Raised areas: inline code, image wells'
    },
    {
        name: 'foreground',
        light: '#111111',
        dark: '#f4f4f0',
        usage: 'Primary text, rules and outlines',
        contrastWith: 'background',
        minContrast: 4.5
    },
    {
        name: 'muted',
        light: '#555550',
        dark: '#a1a19a',
        usage: 'Secondary text and metadata',
        contrastWith: 'background',
        minContrast: 4.5
    },
    {
        name: 'line',
        light: '#d9d9d2',
        dark: '#2e2e2b',
        usage: 'Hairlines and dividers'
    },
    {
        name: 'signal',
        light: '#f04e17',
        dark: '#ff6a33',
        usage: 'The logo, one framed object per page, focus rings and link underlines. Never small text.',
        contrastWith: 'background',
        minContrast: 3
    },
    {
        name: 'signal-text',
        light: '#c2410c',
        dark: '#ff6a33',
        usage: 'Rare accent text: in-article links and pending status',
        contrastWith: 'background',
        minContrast: 4.5
    },
    {
        name: 'primary',
        light: '#111111',
        dark: '#f4f4f0',
        usage: 'Primary button fill'
    },
    {
        name: 'on-primary',
        light: '#f4f4f0',
        dark: '#111111',
        usage: 'Text on primary',
        contrastWith: 'primary',
        minContrast: 4.5
    },
    {
        name: 'code-bg',
        light: '#111111',
        dark: '#0a0a0a',
        usage: 'Code blocks'
    }
];

export function colorValue(name: string, theme: ThemeName): string {
    const token = colorTokens.find((candidate) => candidate.name === name);
    if (!token) {
        throw new Error(`Unknown color token: ${name}`);
    }
    return token[theme];
}

export const fontTokens = [
    {
        name: 'font-sans',
        family: 'Space Grotesk',
        usage: 'Headings and body copy'
    },
    {
        name: 'font-mono',
        family: 'JetBrains Mono',
        usage: 'Labels, metadata, tags and code'
    }
];

// Type styles as the site applies them (Tailwind classes) plus their spec
export const typeStyles = [
    {
        name: 'Display',
        className:
            'text-5xl font-bold leading-[1.02] tracking-[-0.035em] md:text-7xl',
        spec: '72px · 1.02 · -0.035em · bold',
        usage: 'Hero and page titles'
    },
    {
        name: 'Heading',
        className: 'text-4xl font-bold tracking-tight md:text-5xl',
        spec: '48px · 1 · -0.025em · bold',
        usage: 'Section headings'
    },
    {
        name: 'Title',
        className:
            'text-3xl font-bold leading-tight tracking-tight md:text-4xl',
        spec: '36px · 1.25 · -0.025em · bold',
        usage: 'Features, cards and article titles in lists'
    },
    {
        name: 'Lead',
        className: 'text-lg leading-relaxed text-muted md:text-xl',
        spec: '20px · 1.625 · regular · muted',
        usage: 'Intros under a title'
    },
    {
        name: 'Body',
        className: 'text-[1.075rem] leading-8',
        spec: '17px · 32px · regular',
        usage: 'Long-form reading'
    },
    {
        name: 'Label',
        className: 'font-mono text-[13px]',
        spec: 'Mono · 13px · regular',
        usage: 'Eyebrows, dates and navigation'
    },
    {
        name: 'Tag',
        className: 'font-mono text-xs text-muted',
        spec: 'Mono · 12px · regular · muted',
        usage: 'Tags, captions and fine print'
    }
];

function declarations(theme: ThemeName): string {
    return colorTokens
        .map((token) => `--${token.name}:${token[theme]};`)
        .join('');
}

/*
 * CSS custom properties for both themes. `.theme-light` / `.theme-dark` let
 * any subtree render in a fixed theme (the /system page previews use them).
 */
export function tokensCss(): string {
    return [
        `:root,.theme-light{color-scheme:light;${declarations('light')}}`,
        `html.dark,.theme-dark{color-scheme:dark;${declarations('dark')}}`
    ].join('');
}

/** Design Tokens Community Group format, one group per theme */
export function tokensJson() {
    const colorGroup = (theme: ThemeName) =>
        Object.fromEntries(
            colorTokens.map((token) => [
                token.name,
                {
                    $type: 'color',
                    $value: token[theme],
                    $description: token.usage
                }
            ])
        );

    return {
        $description:
            'Spec, the design system behind alexandrade.dev. Use the semantic names; values change per theme.',
        color: {
            light: colorGroup('light'),
            dark: colorGroup('dark')
        },
        font: Object.fromEntries(
            fontTokens.map((font) => [
                font.name.replace('font-', ''),
                {
                    $type: 'fontFamily',
                    $value: font.family,
                    $description: font.usage
                }
            ])
        )
    };
}

function luminance(hex: string): number {
    const channels = [1, 3, 5].map((start) => {
        const value = parseInt(hex.slice(start, start + 2), 16) / 255;
        return value <= 0.03928
            ? value / 12.92
            : Math.pow((value + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/** WCAG 2 contrast ratio between two hex colors */
export function contrastRatio(a: string, b: string): number {
    const [lighter, darker] = [luminance(a), luminance(b)].sort(
        (x, y) => y - x
    );
    return (lighter + 0.05) / (darker + 0.05);
}
