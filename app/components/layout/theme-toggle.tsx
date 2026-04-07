'use client';

import { useState } from 'react';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof document === 'undefined') {
            return 'dark';
        }

        return document.documentElement.classList.contains('dark')
            ? 'dark'
            : 'light';
    });

    const toggleTheme = () => {
        const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        const root = document.documentElement;
        const isDark = nextTheme === 'dark';

        root.classList.toggle('dark', isDark);
        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            suppressHydrationWarning
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-lg text-slate-700 transition-colors hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >
            {theme === 'dark' ? '☀' : '☾'}
        </button>
    );
}
