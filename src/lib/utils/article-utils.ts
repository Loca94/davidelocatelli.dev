import path from 'path';
import glob from 'fast-glob';
import { promises as fs } from 'fs';
import { Article, TocHeading, ArticleWithSlug } from '@/lib/models/article';

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../../app/articles/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort(
    (a, z) => +new Date(z.publishDate) - +new Date(a.publishDate),
  );
}

export async function getArticleSlugs(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        directory,
        path.join(entry.parentPath, entry.name),
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

export async function extractHeadings(
  articleSlug: string,
): Promise<TocHeading[]> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'articles',
    articleSlug,
    'page.mdx',
  );

  const content = await fs.readFile(filePath, 'utf8');
  const regex = /^(#|##|###)\s+(.*)/gm;
  const headings: TocHeading[] = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = slugify(text);

    headings.push({ level, text, slug });
  }

  return headings;
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}
