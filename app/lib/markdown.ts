import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
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
    const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeCodeLanguageBadge)
        .use(rehypeStringify)
        .process(markdown);

    return processedContent.toString();
}
