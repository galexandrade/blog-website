import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import type { Element, Root } from 'hast';

function rehypeCodeLanguageBadge() {
    return (tree: Root) => {
        visit(tree, 'element', (node: Element) => {
            if (node.tagName !== 'pre') {
                return;
            }

            const codeNode = node.children?.find(
                (child): child is Element =>
                    child.type === 'element' && child.tagName === 'code'
            );

            if (!codeNode) {
                return;
            }

            const classNameProperty = codeNode.properties?.className;
            const classNames = Array.isArray(classNameProperty)
                ? classNameProperty.map(String)
                : typeof classNameProperty === 'string'
                  ? [classNameProperty]
                  : [];

            const languageClass = classNames.find((className) =>
                className.startsWith('language-')
            );

            if (!languageClass) {
                return;
            }

            const language = languageClass.replace('language-', '');
            node.properties = {
                ...(node.properties ?? {}),
                'data-language': language
            };
        });
    };
}

export async function markdownToHtml(markdown: string): Promise<string> {
    // Space Grotesk draws a straight " as a slanted closing quote, so an
    // opening quote looks backwards. Curl quotes in prose only. The plugin
    // skips fenced code, and masks inline code while pairing quotes around it.
    // Dashes, ellipses and backticks stay as written.
    const processedContent = await remark()
        .use(remarkGfm)
        .use(remarkSmartypants, {
            backticks: false,
            dashes: false,
            ellipses: false
        })
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeHighlight)
        .use(rehypeCodeLanguageBadge)
        .use(rehypeStringify)
        .process(markdown);

    return processedContent.toString();
}
