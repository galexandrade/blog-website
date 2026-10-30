'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface CopyButtonProps {
    text: string;
    /** Visible label, e.g. "Copy short bio" */
    label: string;
    className?: string;
}

/** Copies text to the clipboard and confirms for a couple of seconds */
export function CopyButton({ text, label, className }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard blocked (insecure origin or denied); the text stays selectable
        }
    }

    return (
        <button
            type="button"
            onClick={copy}
            className={cn(
                'inline-flex min-h-11 items-center gap-2 border border-line px-4 font-mono text-sm transition-colors hover:border-foreground',
                copied && 'text-signal-text',
                className
            )}
        >
            {copied ? (
                <Check size={16} aria-hidden="true" />
            ) : (
                <Copy size={16} aria-hidden="true" />
            )}
            {copied ? 'Copied' : label}
            <span className="sr-only" aria-live="polite">
                {copied ? 'Copied to clipboard' : ''}
            </span>
        </button>
    );
}
