'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
    // Initialise to undefined so the button is hidden until we know the real
    // theme — prevents a flash of the wrong icon on first paint.
    const [theme, setTheme] = useState<Theme | undefined>(undefined);

    useEffect(() => {
        // Read the theme that was already applied by the inline script in
        // layout.tsx (localStorage → system preference).
        const applyTheme = (isDark: boolean) => {
            document.documentElement.classList.toggle('dark', isDark);
            setTheme(isDark ? 'dark' : 'light');
        };

        const stored = localStorage.getItem('theme') as Theme | null;
        if (stored) {
            applyTheme(stored === 'dark');
            return;
        }

        // No stored preference: follow the system and keep listening for changes.
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        applyTheme(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            // Only follow the system when the user has not overridden the theme.
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
    };

    // Render nothing until the theme is resolved to avoid icon flicker.
    if (!theme) return null;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-lg text-slate-700 transition-colors hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >
            {theme === 'dark' ? '☀' : '☾'}
        </button>
    );
}
