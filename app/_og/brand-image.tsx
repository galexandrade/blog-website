import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { markPaths } from '@/app/components/brand/logo';
import { colorValue } from '@/app/lib/tokens';

export const ogSize = { width: 1200, height: 630 };

// Share images always use the dark theme
const colors = {
    ground: colorValue('background', 'dark'),
    ink: colorValue('foreground', 'dark'),
    muted: colorValue('muted', 'dark'),
    signal: colorValue('signal', 'dark')
};

const fontsDir = join(process.cwd(), 'app/_og/fonts');

async function loadFonts() {
    const [bold, medium, mono] = await Promise.all([
        readFile(join(fontsDir, 'space-grotesk-latin-700-normal.woff')),
        readFile(join(fontsDir, 'space-grotesk-latin-500-normal.woff')),
        readFile(join(fontsDir, 'jetbrains-mono-latin-400-normal.woff'))
    ]);

    return [
        { name: 'Space Grotesk', data: bold, weight: 700 as const },
        { name: 'Space Grotesk', data: medium, weight: 500 as const },
        { name: 'JetBrains Mono', data: mono, weight: 400 as const }
    ];
}

const cornerLength = 36;
const cornerWidth = 5;

// Satori has no pseudo-elements and misplaces absolute children here, so the
// crop marks are laid out in flow: a row of corners above and below the content
function Corner({
    side,
    edge
}: {
    side: 'top' | 'bottom';
    edge: 'left' | 'right';
}) {
    const borderStyle = {
        [side === 'top' ? 'borderTop' : 'borderBottom']:
            `${cornerWidth}px solid ${colors.signal}`,
        [edge === 'left' ? 'borderLeft' : 'borderRight']:
            `${cornerWidth}px solid ${colors.signal}`
    };

    return (
        <div
            style={{
                width: cornerLength,
                height: cornerLength,
                ...borderStyle
            }}
        />
    );
}

function CornerRow({ side }: { side: 'top' | 'bottom' }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Corner side={side} edge="left" />
            <Corner side={side} edge="right" />
        </div>
    );
}

interface BrandImageOptions {
    eyebrow: string;
    title: string;
    footer?: string;
}

export async function brandImage({
    eyebrow,
    title,
    footer = 'alexandrade.dev'
}: BrandImageOptions) {
    const titleSize = title.length > 60 ? 60 : title.length > 36 ? 72 : 84;

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '64px 80px',
                background: colors.ground,
                fontFamily: 'Space Grotesk'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <svg width="48" height="48" viewBox="0 0 64 64">
                    <path
                        d={markPaths.master.crop}
                        fill="none"
                        stroke={colors.signal}
                        strokeWidth={markPaths.master.cropWidth}
                    />
                    <path
                        fillRule="evenodd"
                        fill={colors.ink}
                        d={markPaths.master.letter}
                    />
                </svg>
                <span
                    style={{
                        fontSize: 30,
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: colors.ink
                    }}
                >
                    alex andrade
                </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CornerRow side="top" />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0 40px',
                        margin: '-8px 0'
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'JetBrains Mono',
                            fontSize: 24,
                            color: colors.muted,
                            marginBottom: 20
                        }}
                    >
                        {eyebrow}
                    </span>
                    <span
                        style={{
                            fontSize: titleSize,
                            fontWeight: 700,
                            lineHeight: 1.04,
                            letterSpacing: '-0.035em',
                            color: colors.ink
                        }}
                    >
                        {title}
                    </span>
                </div>
                <CornerRow side="bottom" />
            </div>

            <span
                style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 22,
                    color: colors.muted
                }}
            >
                {footer}
            </span>
        </div>,
        { ...ogSize, fonts: await loadFonts() }
    );
}
