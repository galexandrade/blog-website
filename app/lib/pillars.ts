// The three content pillars the writing is organized around

export type PillarSlug = 'ai-ready' | 'architecture' | 'quality';

export interface Pillar {
    slug: PillarSlug;
    title: string;
    description: string;
}

export const pillars: Pillar[] = [
    {
        slug: 'ai-ready',
        title: 'AI-ready design systems',
        description:
            'MCP, agent context and docs for LLMs, so AI builds with the system instead of around it.'
    },
    {
        slug: 'architecture',
        title: 'Design system architecture',
        description:
            'Tokens, theming, dark mode and the CSS that holds a component library together.'
    },
    {
        slug: 'quality',
        title: 'Quality and developer experience',
        description:
            'Visual testing, the Testing Trophy and building a pit of success for every team.'
    }
];
