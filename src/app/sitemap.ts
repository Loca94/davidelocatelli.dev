import { getArticleSlugs } from '@/lib/utils/article-utils';
import path from 'path';

export default async function sitemap() {
  const articlesDirectory = path.join(process.cwd(), 'src', 'app', 'articles');
  const articleSlugs = await getArticleSlugs(articlesDirectory);

  const articles = articleSlugs.map((slug) => ({
    url: `https://davidelocatelli.dev/articles/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['', '/about', '/resources', '/projects', '/articles'].map(
    (route) => ({
      url: `https://davidelocatelli.dev${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...articles];
}
