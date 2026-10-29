import { ArticleWithSlug } from '@/lib/models/article';
import Prose from '@/components/mdx/prose';
import Container from '@/components/container';
import Link from 'next/link';
import TableOfContents from '@/components/mdx/table-of-contents';
import { extractHeadings } from '@/lib/utils/article-utils';

export const a = Link;
export { Button } from '@/components/ui/button';

export async function MdxLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  const headings = await extractHeadings(article.slug);

  return (
    <>
      <TableOfContents headings={headings} />
      <Container looser>
        <article>
          <Prose className="mt-8" data-mdx-content>
            {children}
          </Prose>
        </article>
      </Container>
    </>
  );
}
