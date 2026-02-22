import { ArticleWithSlug } from '@/lib/models/article';
import Link from 'next/link';

export default function Article({
  article,
}: {
  article: {
    title: string;
    description: string;
    slug: string;
  };
}) {
  return function Article({ article }: { article: ArticleWithSlug }) {
    return (
      <Link href={`/articles/${article.slug}`} key={article.slug}>
        <article>
          <h2 className="mb-2 font-semibold text-neutral-200">
            {article.title}
          </h2>
          <p className="text-sm italic">{article.publishDate}</p>
        </article>
      </Link>
    );
  };
}
