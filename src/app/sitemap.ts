import { promises as fs } from 'fs';
import path from 'path';

async function getArticleSlugs(directory: string) {
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

export default async function sitemap() {
  const articlesDirectory = await path.join(
    process.cwd(),
    'src',
    'app',
    'articles',
  );
  console.log('What is the articleDirectory?', articlesDirectory);
  const articleSlugs = await getArticleSlugs(articlesDirectory);

  const articles = articleSlugs.map((slug) => ({
    url: `https://davidelocatelli.dev/articles/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['', '/about', '/resources', '/projects'].map((route) => ({
    url: `https://davidelocatelli.dev${route}`,
    lastModified: new Date().toISOString(),
  }));

  console.log('This is the full sitemap:\n', [...routes, ...articles]);

  return [...routes, ...articles];
}
