import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { Metadata, Resource } from '@/lib/types';
import websites from '@/data/resources/websites.json';
import uiKits from '@/data/resources/ui-kits.json';
import learning from '@/data/resources/learning.json';

const FETCH_TIMEOUT_MS = 4000;
const MAX_HTML_BYTES = 1_000_000;
const ONE_DAY_SECONDS = 60 * 60 * 24;

// Only URLs listed in the resources data can be previewed, so this route
// can't be used as an open proxy.
const allowedUrls = new Set(
  [websites, uiKits, learning].flatMap((list: Resource[]) =>
    list.map((resource) => resource.link),
  ),
);

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }
  if (!allowedUrls.has(url)) {
    return NextResponse.json({ error: 'URL not allowed' }, { status: 403 });
  }

  const metadata = await getMetadata(url);
  if (!metadata) {
    return NextResponse.json(null, {
      headers: { 'Cache-Control': 'public, s-maxage=300' },
    });
  }

  return NextResponse.json(metadata, {
    headers: {
      'Cache-Control': `public, s-maxage=${ONE_DAY_SECONDS}, stale-while-revalidate=${ONE_DAY_SECONDS * 7}`,
    },
  });
}

async function getMetadata(url: string): Promise<Metadata | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'MetadataBot/1.0' },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      next: { revalidate: ONE_DAY_SECONDS },
    });
    if (!res.ok || !res.headers.get('content-type')?.includes('text/html')) {
      return null;
    }

    const html = (await res.text()).slice(0, MAX_HTML_BYTES);
    const $ = cheerio.load(html);
    const image =
      $('meta[property="og:image"]').attr('content') ||
      $('meta[name="twitter:image"]').attr('content') ||
      '';

    return {
      title: $('title').text(),
      description:
        $('meta[name="description"]').attr('content') ||
        $('meta[name="twitter:description"]').attr('content') ||
        '',
      image: image ? new URL(image, res.url).toString() : '',
      link: url,
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
    return null;
  }
}
