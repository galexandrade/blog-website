import Link from 'next/link';
import { Wordmark } from '@/app/components/brand/logo';
import { socialLinks } from '@/app/lib/site';

const siteLinks = [
    { label: 'Writing', href: '/blog' },
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/about' },
    { label: 'RSS', href: '/rss.xml' }
];

const elsewhere = [
    { label: 'LinkedIn', href: socialLinks.linkedin },
    { label: 'GitHub', href: socialLinks.github },
    { label: 'Resume', href: socialLinks.resume },
    { label: 'Sous Chef', href: socialLinks.sousChef }
];

export function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
                <div className="flex flex-col gap-3">
                    <Wordmark />
                    <p className="max-w-sm text-muted">
                        Design systems that humans and AI agents get right.
                    </p>
                </div>
                <FooterColumn title="site" links={siteLinks} />
                <FooterColumn title="elsewhere" links={elsewhere} external />
            </div>
            <div className="mx-auto w-full max-w-6xl px-4 pb-10 font-mono text-xs text-muted sm:px-6">
                © {new Date().getFullYear()} Alex Andrade · Saskatoon, Canada
            </div>
        </footer>
    );
}

function FooterColumn({
    title,
    links,
    external = false
}: {
    title: string;
    links: { label: string; href: string }[];
    external?: boolean;
}) {
    return (
        <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-signal-text">{`// ${title}`}</p>
            <ul className="flex flex-col gap-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-muted transition-colors hover:text-foreground"
                            {...(external && {
                                target: '_blank',
                                rel: 'noopener noreferrer'
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
