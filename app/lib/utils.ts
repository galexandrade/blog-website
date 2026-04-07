import { format, parseISO } from 'date-fns';

export function formatDate(dateInput: string | Date): string {
    try {
        if (!dateInput) {
            return 'Unknown date';
        }

        if (dateInput instanceof Date) {
            return format(dateInput, 'MMMM dd, yyyy');
        }

        const normalizedDate = String(dateInput);
        const date = parseISO(normalizedDate);
        return format(date, 'MMMM dd, yyyy');
    } catch {
        return 'Unknown date';
    }
}

export function cn(
    ...classes: (string | undefined | null | false | Record<string, boolean>)[]
): string {
    return classes
        .map((cls) => {
            if (typeof cls === 'object' && cls !== null) {
                return Object.keys(cls)
                    .filter((key) => cls[key])
                    .join(' ');
            }
            return cls;
        })
        .filter(Boolean)
        .join(' ');
}
