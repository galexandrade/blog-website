// Talks shown on /speaking, newest first

export interface Talk {
    slug: string;
    title: string;
    summary: string;
    event: string;
    venue?: string;
    city: string;
    /** ISO date, YYYY-MM-DD */
    date: string;
    youtubeId: string;
    /** Seconds into the recording where the talk starts */
    start?: number;
    /** Written version of the talk, if there is one */
    post?: string;
}

export const talks: Talk[] = [
    {
        slug: 'teaching-ai-to-use-your-design-system',
        title: 'Teaching AI to use your design system',
        summary:
            'AI can generate interfaces in seconds, and without awareness of your design system it generates inconsistency just as fast. A talk and live demo on how 7shifts taught AI agents to use Sous Chef instead of improvising around it.',
        event: 'Tech Tank',
        city: 'Toronto',
        date: '2026-07-06',
        youtubeId: 'Ta-DNbrSH38',
        start: 648,
        post: '/blog/teaching-ai-to-use-your-design-system'
    },
    {
        slug: 'building-a-design-system-in-the-prairies',
        title: 'Building a design system in the prairies',
        summary:
            'The story of Sous Chef, the 7shifts design system, and what it takes to build one from the ground up.',
        event: 'Saskatoon Dev Talks',
        venue: '7shifts HQ',
        city: 'Saskatoon',
        date: '2023-01-26',
        youtubeId: 'xMdkcGECk74'
    },
    {
        slug: 'legacy-code',
        title: 'Legacy code',
        summary:
            'My first talk. What legacy code really is, how it differs from bad code, and how to leave behind a good code legacy.',
        event: 'Saskatoon Dev Talks',
        city: 'Saskatoon',
        date: '2020-03-17',
        youtubeId: 'naZp50j6U74',
        post: '/blog/you-are-writing-legacy-code'
    }
];

export function youtubeWatchUrl(talk: Talk): string {
    const start = talk.start ? `&t=${talk.start}s` : '';
    return `https://www.youtube.com/watch?v=${talk.youtubeId}${start}`;
}

export function youtubeEmbedUrl(talk: Talk): string {
    const start = talk.start ? `?start=${talk.start}` : '';
    return `https://www.youtube-nocookie.com/embed/${talk.youtubeId}${start}`;
}
