import { ArticleWithSlug } from '@/lib/models/article';
import Prose from '@/components/Prose';
import Container from '@/components/Container';
import Link from 'next/link';

export const a = Link;
export { Button } from '@/components/ui/Button';
export { Code as code, Pre as pre } from '@/components/Code';

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
          <h1 className="mt-6 font-mono text-4xl font-bold tracking-tight text-neutral-800 sm:text-3xl dark:text-neutral-100">
            {article.title}
          </h1>
        </header>
        <Prose className="mt-8" data-mdx-content>
          {children}
        </Prose>
      </article>
    </Container>
  );
}
