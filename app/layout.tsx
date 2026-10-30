import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/app/components/layout/header';
import { Footer } from '@/app/components/layout/footer';
import { JsonLd } from '@/app/components/seo/json-ld';
import {
    person,
    siteDescription,
    siteTitle,
    siteUrl,
    website
} from '@/app/lib/site';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin']
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: '%s | Alex Andrade'
    },
    description: siteDescription,
    alternates: {
        types: { 'application/rss+xml': '/rss.xml' }
    },
    openGraph: {
        siteName: 'Alex Andrade',
        type: 'website',
        locale: 'en_US',
        title: siteTitle,
        description: siteDescription
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var stored=localStorage.getItem('theme');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var isDark=stored?stored==='dark':prefersDark;document.documentElement.classList.toggle('dark',isDark);}catch(e){}})();`
                    }}
                />
                <JsonLd
                    data={{
                        '@context': 'https://schema.org',
                        '@graph': [person, website]
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
