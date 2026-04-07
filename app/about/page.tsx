import { getAboutContent } from '@/app/lib/blog';
import { markdownToHtml } from '@/app/lib/markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About - Alex Andrade',
    description:
        'Learn more about Alex Andrade, Senior Software Engineer specializing in Design Systems'
};

export default async function AboutPage() {
    const aboutData = getAboutContent();

    if (!aboutData) {
        notFound();
    }

    const contentHtml = await markdownToHtml(aboutData.content);

    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
                <header className="mb-12">
                    <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
                        {aboutData.frontmatter.title}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 md:text-2xl">
                        {aboutData.frontmatter.description}
                    </p>
                </header>

                <div className="mx-auto max-w-3xl">
                    <div
                        className="markdown-content prose prose-slate dark:prose-invert max-w-none text-[1.06rem] leading-8
                            prose-h1:mt-16 prose-h1:mb-7 prose-h1:text-4xl prose-h1:font-bold prose-h2:mt-14 prose-h2:mb-6 prose-h2:text-3xl prose-h2:font-bold prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-2xl prose-h3:font-semibold
                            prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-slate-100
                            prose-p:my-6 prose-p:text-slate-700 dark:prose-p:text-slate-200 prose-li:my-2 prose-a:text-indigo-600 dark:prose-a:text-indigo-300 prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
                            prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-indigo-700 dark:prose-code:bg-slate-700/60 dark:prose-code:text-indigo-200 prose-code:before:content-none prose-code:after:content-none
                            prose-pre:my-8 prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-300 prose-pre:bg-slate-950 prose-pre:px-5 prose-pre:py-4 prose-pre:text-slate-100 dark:prose-pre:border-slate-700
                            prose-img:my-8 prose-img:rounded-lg [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit [&_pre[data-language]]:pt-10 [&_pre[data-language]::before]:content-[attr(data-language)] [&_pre[data-language]::before]:absolute [&_pre[data-language]::before]:right-3 [&_pre[data-language]::before]:top-2 [&_pre[data-language]::before]:rounded-md [&_pre[data-language]::before]:bg-slate-800/75 [&_pre[data-language]::before]:px-2 [&_pre[data-language]::before]:py-1 [&_pre[data-language]::before]:text-[10px] [&_pre[data-language]::before]:font-semibold [&_pre[data-language]::before]:uppercase [&_pre[data-language]::before]:tracking-wider [&_pre[data-language]::before]:text-slate-300"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </div>
        </div>
    );
}
