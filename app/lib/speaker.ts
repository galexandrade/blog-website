// Speaker kit on /speaking: bios organizers can paste, and the headshot

export interface SpeakerBio {
    length: 'short' | 'medium' | 'long';
    /** Paragraphs, joined with a blank line when copied */
    paragraphs: string[];
}

export const headshot = {
    src: '/assets/alex-andrade-headshot.jpg',
    width: 1230,
    height: 1278
};

export const speakerBios: SpeakerBio[] = [
    {
        length: 'short',
        paragraphs: [
            'Alex Andrade leads the design system team at 7shifts and created Sous Chef, the company’s design system of 100+ components. Alex writes and speaks about design systems that humans and AI agents get right, and founded the Saskatoon React Meetup.'
        ]
    },
    {
        length: 'medium',
        paragraphs: [
            'Alex Andrade is a frontend engineer with more than 15 years of experience who leads the design system team at 7shifts in Saskatoon, Canada. Alex created Sous Chef, the 7shifts design system: a React, TypeScript and Storybook foundation that grew into a themeable system of 100+ components, with Chromatic visual tests in CI.',
            'Alex’s current work focuses on semantic tokens, dark mode, and teaching AI agents to use a design system through agent-ready docs and MCP. Alex founded the Saskatoon React Meetup, the first React meetup in the prairies, and writes at alexandrade.dev.'
        ]
    },
    {
        length: 'long',
        paragraphs: [
            'Alex Andrade is a frontend engineer originally from Brazil. Alex spent four years at TOTVS, the largest tech company in Latin America, before moving to Saskatoon, Canada in 2019 to join 7shifts, which builds team management software for restaurants. Over more than 15 years, Alex has gone from enterprise ERP software to leading migrations from legacy PHP to modern React apps.',
            'In 2022 Alex joined the 7shifts Developer Experience team and led Sous Chef, the company’s design system, from the ground up: a React, TypeScript and Storybook foundation that turned a fragmented set of components into a themeable system of 100+ components, with Chromatic visual tests running in CI. That work led to a dedicated design system team, which Alex now leads, focused on semantic tokens, dark mode, and teaching AI agents to use the system through agent-ready docs and MCP.',
            'Alex founded the Saskatoon React Meetup, the first React meetup in the prairies, leads frontend guilds on React, TypeScript and accessibility, and has spoken at Tech Tank Toronto and Saskatoon Dev Talks. Outside of work, Alex is a father of four who spends weekends camping across the prairies and woodworking.'
        ]
    }
];

export function bioText(bio: SpeakerBio): string {
    return bio.paragraphs.join('\n\n');
}

export function wordCount(text: string): number {
    return text.split(/\s+/).filter(Boolean).length;
}
