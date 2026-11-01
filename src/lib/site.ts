import type { Metadata } from 'next';

// Canonical origin: the apex domain currently redirects here.
export const SITE_URL = 'https://www.davidelocatelli.dev';
export const SITE_NAME = 'Davide Locatelli';

/**
 * Per-page metadata with a canonical URL and matching Open Graph fields.
 * Open Graph doesn't inherit the page title, so it's set explicitly here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      url: path,
      title: `${title} - ${SITE_NAME}`,
      description,
      // Pages defining `openGraph` don't inherit the root opengraph-image
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Senior Developer`,
        },
      ],
    },
  };
}
