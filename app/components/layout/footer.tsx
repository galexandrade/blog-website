export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto w-full max-w-6xl px-4 py-8 text-center text-lg text-slate-600 dark:text-slate-400 sm:px-6">
                © {new Date().getFullYear()} Alex Andrade - Blog. Built with
                React & TypeScript.
            </div>
        </footer>
    );
}
