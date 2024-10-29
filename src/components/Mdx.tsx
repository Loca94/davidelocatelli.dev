import { ArticleWithSlug } from "@/lib/models/article";
import Prose from "@/components/Prose";
import { formatDate } from "@/lib/utils/date-utils";
import Container from "@/components/Container";
import Link from "next/link";

export const a = Link;
export { Button } from "@/components/ui/Button";
export { Code as code, Pre as pre } from "@/components/Code";

export function MdxLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  return (
    <Container looser>
      <article>
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
            {article.title}
          </h1>
          <time
            dateTime={article.publishDate}
            className="order-first flex items-center text-base text-neutral-400 dark:text-neutral-500"
          >
            <span className="h-4 w-0.5 rounded-full bg-neutral-200 dark:bg-neutral-500" />
            <span className="ml-3">{formatDate(article.publishDate)}</span>
          </time>
        </header>
        <Prose className="mt-8" data-mdx-content>
          {children}
        </Prose>
      </article>
    </Container>
  );
}
