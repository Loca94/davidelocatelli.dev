import * as shiki from 'shiki';
import { visit } from 'unist-util-visit';
import { mdxAnnotations } from 'mdx-annotations';

let highlighter;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await shiki.getHighlighter({
      theme: 'css-variables', // Custom theme with CSS variables
    });
  }
  return highlighter;
}

function rehypeParseCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, _nodeIndex, parentNode) => {
      if (node.tagName === 'code' && node.properties.className) {
        parentNode.properties.language = node.properties.className[0]?.replace(
          /^language-/,
          '',
        );
      }
    });
  };
}

function rehypeShiki() {
  return async (tree) => {
    const highlighter = await getHighlighter();

    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code') {
        const codeNode = node.children[0];
        const textNode = codeNode.children[0];

        node.properties.code = textNode.value;

        if (node.properties.language) {
          const tokens = highlighter.codeToThemedTokens(
            textNode.value,
            node.properties.language,
          );

          textNode.value = shiki.renderToHtml(tokens, {
            elements: {
              pre: ({ children }) => children,
              code: ({ children }) => children,
              line: ({ children }) => `<span>${children}</span>`,
            },
          });
        }
      }
    });
  };
}

export const rehypePlugins = [
  mdxAnnotations.rehype,
  rehypeParseCodeBlocks,
  rehypeShiki,
];
