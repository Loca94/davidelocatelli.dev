import { createHighlighter } from 'shiki';
import { visit } from 'unist-util-visit';
import { fromHtml } from 'hast-util-from-html';

function rehypeShiki() {
  return async (tree) => {
    const highlighter = await createHighlighter({
      themes: ['poimandres', 'github-light'],
      langs: ['javascript', 'typescript', 'tsx', 'css', 'html', 'json'],
    });

    visit(tree, 'element', (node, index, parent) => {
      if (!parent) return;

      if (node.tagName === 'pre' && node.children?.[0]?.tagName === 'code') {
        const codeNode = node.children[0];
        const textNode = codeNode.children?.[0];
        if (!textNode?.value) return;

        const className = codeNode.properties?.className?.[0] ?? '';
        const lang = className.replace('language-', '') || 'text';

        const html = highlighter.codeToHtml(textNode.value, {
          lang,
          themes: {
            light: 'github-light',
            dark: 'poimandres',
          },
          defaultColor: false,
        });

        const hast = fromHtml(html, { fragment: true });

        parent.children[index] = hast.children[0];
      }
    });
  };
}

export const rehypePlugins = [rehypeShiki];
