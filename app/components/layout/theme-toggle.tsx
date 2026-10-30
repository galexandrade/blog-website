'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

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

    // Reserve the slot until the theme is resolved to avoid icon flicker and
    // a layout shift in the header.
    if (!theme) return <span className="ml-1 inline-block h-11 w-11" />;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="ml-1 inline-flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-foreground"
        >
            {theme === 'dark' ? (
                <Sun size={18} aria-hidden="true" />
            ) : (
                <Moon size={18} aria-hidden="true" />
            )}
        </button>
    );
}
