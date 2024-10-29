export interface Article {
  title: string;
  description: string;
  author: string;
  publishDate: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
