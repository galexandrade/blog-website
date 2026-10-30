'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/app/components/layout/theme-toggle';
import { Mark } from '@/app/components/brand/logo';
import { cn } from '@/app/lib/utils';

const navItems = [
    { label: 'Writing', href: '/blog' },
    { label: 'Work', href: '/work' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'About', href: '/about' }
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-line bg-background/90 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2.5"
                    aria-label="Alex Andrade, home"
                >
                    <Mark size={26} />
                    <span className="hidden text-lg font-bold tracking-tight sm:inline">
                        alex andrade
                    </span>
                </Link>

                <nav className="flex items-center gap-1 sm:gap-2">
                    {navItems.map((item, index) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn(
                                    'px-2 py-2 font-mono text-[13px] transition-colors hover:text-foreground',
                                    isActive ? 'text-foreground' : 'text-muted'
                                )}
                            >
                                <span className="hidden text-signal-text sm:inline">
                                    0{index + 1}{' '}
                                </span>
                                {item.label}
                            </Link>
                        );
                    })}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
