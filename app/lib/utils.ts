import { format, parseISO } from 'date-fns';

export function formatDate(dateInput: string | Date): string {
    try {
        if (!dateInput) {
            return 'Unknown date';
        }

        if (dateInput instanceof Date) {
            return format(dateInput, 'MMMM d, yyyy');
        }

        // Format the calendar date as written, not the instant: frontmatter
        // dates are UTC midnight, which is the previous day west of UTC
        const normalizedDate = String(dateInput);
        const calendarDate = /^\d{4}-\d{2}-\d{2}/.test(normalizedDate)
            ? normalizedDate.slice(0, 10)
            : normalizedDate;
        const date = parseISO(calendarDate);
        return format(date, 'MMMM d, yyyy');
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
