export interface Article {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  keywords: string[];
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

export interface TocHeading {
  level: number;
  text: string;
  slug: string;
}
