'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/app/components/layout/theme-toggle';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-300/70 bg-slate-100/95 backdrop-blur supports-[backdrop-filter]:bg-slate-100/75 dark:border-slate-800 dark:bg-slate-950/95 dark:supports-[backdrop-filter]:bg-slate-950/75">
            <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-400 text-base font-semibold text-white shadow-sm">
                        {'</>'}
                    </div>
                    <div className="leading-tight">
                        <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            Alex Andrade - Blog
                        </p>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            Design Systems & Front-end
                        </p>
                    </div>
                </Link>

                <ThemeToggle />
            </div>
        </header>
    );
}
