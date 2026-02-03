import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { Metadata } from '@/lib/models/resource';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }

  const metadata = await getMetadata(url);
  return NextResponse.json(metadata);
}

async function getMetadata(url: string): Promise<Metadata | null> {
  if (!url || !url.startsWith('http')) {
    return null;
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'MetadataBot/1.0' },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    return {
      title: $('title').text(),
      description:
        $('meta[name="description"]').attr('content') ||
        $('meta[name="twitter:description"]').attr('content') ||
        '',
      image:
        $('meta[property="og:image"]').attr('content') ||
        $('meta[name="twitter:image"]').attr('content') ||
        '',
      link: url,
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
    return null;
  }
}
