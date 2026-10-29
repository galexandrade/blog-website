export const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.alexandrade.dev'
).replace(/\/$/, '');

export const siteName = 'Alex Andrade';

export const siteDescription =
    'Personal blog and portfolio showcasing expertise in Design Systems, React, and TypeScript';

export function absoluteUrl(path: string = '/'): string {
    if (/^https?:\/\//.test(path)) {
        return path;
    }
    return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
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
