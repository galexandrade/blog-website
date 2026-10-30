export const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.alexandrade.dev'
).replace(/\/$/, '');

export const siteName = 'Alex Andrade';

export const siteTitle =
    'Alex Andrade · Design systems that humans and AI agents get right';

export const siteDescription =
    'Alex Andrade leads the design system team at 7shifts and created Sous Chef. Writing on design systems, AI and MCP, and frontend architecture.';

export const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/palexandrade',
    github: 'https://github.com/galexandrade',
    resume: 'https://app.rezme.io/alex-andrade',
    sousChef: 'https://sous-chef.7shifts.software/'
};

// Buttondown username. The signup form renders nowhere until this is set.
export const buttondownUsername = 'alexandrade';

export function absoluteUrl(path: string = '/'): string {
    if (/^https?:\/\//.test(path)) {
        return path;
    }
    return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function postPath(slug: string): string {
    return `/blog/${slug}`;
}

// Raw markdown of a post, for AI tools; rewritten to a route in next.config
export function postMarkdownPath(slug: string): string {
    return `${postPath(slug)}.md`;
}

// The generated Open Graph card, also the fallback image for structured data
export function postOgImagePath(slug: string): string {
    return `${postPath(slug)}/opengraph-image/card`;
}

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

export const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Alex Andrade',
    alternateName: 'Alex Pedrero Andrade',
    url: `${siteUrl}/`,
    image: absoluteUrl('/assets/profile.png'),
    jobTitle: 'Senior Frontend Engineer',
    worksFor: {
        '@type': 'Organization',
        name: '7shifts',
        url: 'https://www.7shifts.com/'
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Saskatoon',
        addressRegion: 'Saskatchewan',
        addressCountry: 'CA'
    },
    knowsAbout: [
        'Design systems',
        'React',
        'TypeScript',
        'Frontend architecture',
        'Storybook',
        'Visual regression testing',
        'Design tokens',
        'AI/MCP for design systems',
        'Developer experience'
    ],
    sameAs: [
        'https://www.linkedin.com/in/palexandrade',
        'https://github.com/galexandrade',
        'https://medium.com/@g.alex.andrade',
        'https://app.rezme.io/alex-andrade'
    ]
};

export const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${siteUrl}/`,
    name: siteName,
    description: siteDescription,
    inLanguage: 'en-US',
    author: { '@id': personId },
    publisher: { '@id': personId }
};
