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
