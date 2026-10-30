// Products shown on /work and in the homepage "Projects" section

export type StatusTone = 'done' | 'pending' | 'none';

export interface ProjectStatus {
    label: string;
    value: string;
    tone: StatusTone;
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectScreen {
    src: string;
    alt: string;
    title: string;
    caption: string;
    width: number;
    height: number;
    /** Phone screens get a device frame; web crops get a plain border */
    kind: 'phone' | 'web';
}

export interface Project {
    slug: string;
    name: string;
    /** null: the icon is drawn inline (see ProjectIcon) */
    icon: string | null;
    meta: string;
    /** One-liner for the homepage card */
    summary: string;
    pitch: string;
    ai: string[];
    /** Short labels for the homepage card chips */
    aiChips: { label: string; tone: StatusTone }[];
    platforms: string;
    stats?: { value: string; label: string }[];
    status: ProjectStatus[];
    stack: string[];
    links: ProjectLink[];
    hero: { src: string; alt: string };
    screens: ProjectScreen[];
    screensNote?: string;
}

const phone = (
    src: string,
    alt: string,
    title: string,
    caption: string
): ProjectScreen => ({
    src,
    alt,
    title,
    caption,
    width: 600,
    height: 1304,
    kind: 'phone'
});

export const projects: Project[] = [
    {
        slug: 'kilter-money',
        name: 'Kilter Money',
        icon: '/assets/projects/kilter-money-icon.png',
        meta: 'since 2026 · personal finance',
        summary:
            'Personal finance, on your own or shared. See where the money went and whether the month is on track.',
        pitch: 'Personal finance that answers four questions at a glance: where the money went, how much is already committed to fixed bills, whether the month is on track, and how it compares to last month. Use it on your own or share it with your household.',
        ai: [
            'Ask Claude or ChatGPT “how are we doing this month?” or log an expense from chat: 15 tools over MCP, read-only and write tools clearly separated.',
            'Photograph a receipt in the app and Claude splits it across your categories.'
        ],
        aiChips: [
            { label: 'Claude', tone: 'done' },
            { label: 'ChatGPT', tone: 'done' }
        ],
        platforms: 'web · android · ios soon',
        status: [
            { label: 'web', value: 'Live', tone: 'done' },
            { label: 'android', value: 'Live', tone: 'done' },
            { label: 'ios', value: 'In review', tone: 'pending' },
            { label: 'mcp server', value: 'OAuth 2.1', tone: 'done' },
            { label: 'claude', value: 'Approved', tone: 'done' },
            { label: 'chatgpt', value: 'Approved', tone: 'done' }
        ],
        stack: [
            'Next.js 16',
            'React 19',
            'Expo',
            'Firebase',
            'Stripe + RevenueCat'
        ],
        links: [
            {
                label: 'app.kiltermoney.com',
                href: 'https://app.kiltermoney.com'
            },
            {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.kiltermoney.app'
            }
        ],
        hero: {
            src: '/assets/projects/kilter-money-hero.png',
            alt: 'Kilter Money on the web, showing the month’s remaining budget and spending by category, with the phone app’s activity timeline in front'
        },
        screens: [
            phone(
                '/assets/projects/kilter-money-connect-ai.jpg',
                'Connect AI agent screen with a sample chat and Connect buttons for Claude and ChatGPT',
                'Connect your AI agent',
                'Link Claude or ChatGPT in a tap, then ask about your money, log expenses and check budgets by chat.'
            ),
            phone(
                '/assets/projects/kilter-money-add.jpg',
                'Add sheet with Add expense, Scan and Speak options',
                'Add in seconds',
                'Type an expense, scan a receipt or just say it out loud.'
            ),
            phone(
                '/assets/projects/kilter-money-budget.jpg',
                'Budget view showing an over-budget category and on-track categories',
                'Budgets that flag themselves',
                'See which budgets need attention and which are on track, before the month ends.'
            )
        ],
        screensNote: 'Screens show demo data.'
    },
    {
        slug: 'rezme',
        name: 'Rezme',
        icon: null,
        meta: 'since 2026 · careers',
        summary:
            'Resume builder with designer templates. Build and edit your resume by chatting with your AI assistant.',
        pitch: 'A resume builder with designer templates and color themes, in-place editing and ATS-friendly PDF export. Free forever, with one-time passes instead of subscriptions.',
        ai: [
            'Build and edit your resume by chatting with your AI assistant: the MCP server can create, update and publish resumes from Claude, Cursor or any MCP client.',
            'Tailor a resume to a job posting with AI: it rewrites your summary, skills and highlights, never your titles or dates.'
        ],
        aiChips: [{ label: 'MCP server', tone: 'done' }],
        platforms: 'web',
        status: [
            { label: 'web', value: 'Live', tone: 'done' },
            { label: 'mobile', value: '— Web only', tone: 'none' },
            { label: 'mcp server', value: 'OAuth 2.1', tone: 'done' },
            { label: 'works with', value: 'Any MCP client', tone: 'done' },
            { label: 'templates', value: 'With color themes', tone: 'done' },
            { label: 'pricing', value: 'Free + passes', tone: 'none' }
        ],
        stack: ['Next.js 16', 'React 19', 'Firebase', 'Stripe'],
        links: [{ label: 'rezme.io', href: 'https://rezme.io' }],
        hero: {
            src: '/assets/projects/rezme-hero.png',
            alt: 'The same resume in two Rezme templates, Soft Card and Classic Split, shown in two browser windows'
        },
        screens: [
            {
                src: '/assets/projects/rezme-build-with-claude.jpg',
                alt: 'Rezme resumes home with a Build it with Claude banner and a Connect your agent button',
                title: 'Build it with Claude',
                caption:
                    'Connect Claude or another MCP client and let it write and update your resumes, free on every plan.',
                width: 1400,
                height: 686,
                kind: 'web'
            },
            {
                src: '/assets/projects/rezme-tailor.jpg',
                alt: 'Tailor to a job dialog with a job posting link field',
                title: 'Tailor to a job',
                caption:
                    'Paste a job link and get a match score and a resume rewritten for it.',
                width: 900,
                height: 999,
                kind: 'web'
            }
        ]
    },
    {
        slug: 'my-beauty-time',
        name: 'My Beauty Time',
        icon: '/assets/projects/my-beauty-time-icon.png',
        meta: 'since 2023 · salons in Brazil',
        summary:
            'Scheduling and management for salons and barbershops in Brazil. 4,800+ appointments completed.',
        pitch: 'Scheduling and business management for salons and barbershops in Brazil: the team agenda, clients, finances and a public booking page.',
        ai: [
            'Owners book, reschedule and check the agenda or revenue by asking Claude, in Portuguese.'
        ],
        aiChips: [
            { label: 'Claude', tone: 'done' },
            { label: 'ChatGPT in review', tone: 'pending' }
        ],
        platforms: 'web · ios · android',
        stats: [
            { value: '4,800+', label: 'appointments completed' },
            { value: 'R$ 700k+', label: 'revenue recorded by salons' },
            { value: '44', label: 'active businesses' }
        ],
        status: [
            { label: 'web', value: 'Live', tone: 'done' },
            { label: 'ios', value: 'Live', tone: 'done' },
            { label: 'android', value: 'Live', tone: 'done' },
            { label: 'mcp server', value: 'OAuth 2.1', tone: 'done' },
            { label: 'claude', value: 'Approved', tone: 'done' },
            { label: 'chatgpt', value: 'In review', tone: 'pending' }
        ],
        stack: ['React + Vite', 'Next.js 16', 'Expo', 'Firebase'],
        links: [
            { label: 'mybeautytime.app', href: 'https://mybeautytime.app' },
            {
                label: 'App Store',
                href: 'https://apps.apple.com/app/btime-agendamento-e-gest%C3%A3o/id6761089494'
            },
            {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=app.mybeautytime.btime'
            }
        ],
        hero: {
            src: '/assets/projects/my-beauty-time-hero.png',
            alt: 'My Beauty Time on the web, showing the day’s revenue and appointments, with the phone app’s agenda in front'
        },
        screens: [
            phone(
                '/assets/projects/my-beauty-time-client.jpg',
                'Client profile screen with total spent, visits and upcoming appointments',
                'Client profile',
                'Every client’s visits, spend and next appointments, one tap from WhatsApp.'
            ),
            phone(
                '/assets/projects/my-beauty-time-finances.jpg',
                'Finances screen with the month’s result and revenue',
                'Monthly finances',
                'Revenue from appointments, packages and sales, set against expenses.'
            ),
            phone(
                '/assets/projects/my-beauty-time-booking-link.jpg',
                'Booking link screen with copy and share options',
                'Booking link',
                'A public page where clients book themselves; new bookings land in the agenda.'
            )
        ],
        screensNote:
            'The app is in Portuguese, as used by salons in Brazil. Screens show demo data.'
    }
];
