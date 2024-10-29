import { ArticleWithSlug } from "@/lib/models/article";
import { getAllArticles } from "@/lib/utils/article-utils";
import Container from "@/components/Container";
import { Metadata } from "next";
import Link from "next/link";

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Link href={`/articles/${article.slug}`} key={article.slug}>
      <article>
        <h2 className="mb-2 font-semibold text-neutral-200">{article.title}</h2>
        <p className="text-sm italic">{article.publishDate}</p>
      </article>
    </Link>
  );
}

export const metadata: Metadata = {
  title: "Articles",
  description: "Add a meta-description fot the article page.",
};

export default async function ArticlesIndex() {
  let articles: ArticleWithSlug[] = await getAllArticles();

  return (
    <Container>
      <h1 className="text-lg font-medium text-neutral-950 dark:text-neutral-50">
        Articles
      </h1>
      <div className="my-8 flex gap-4">
        {articles.map((article: ArticleWithSlug) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
