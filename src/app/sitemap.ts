import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// `lastModified` is omitted on purpose: a build timestamp would mark every
// page as changed on each deploy, which is a misleading signal for crawlers.
const routes = [
  '',
  '/about',
  '/projects',
  '/resources',
  '/resources/icons',
  '/resources/websites',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
