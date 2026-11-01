import { Fragment } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import { JsonLd } from '@/components/JsonLd';
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';
import { SITE_URL } from '@/lib/site';

type Crumb = { label: string; href: string };

/**
 * Breadcrumb for nested pages, rendered on the server together with its
 * BreadcrumbList structured data. "Home" is always prepended.
 */
export function PageBreadcrumb({ items }: { items: Crumb[] }) {
  const crumbs = [{ label: 'Home', href: '/' }, ...items];

  return (
    <Container className="-mt-4 mb-8" data-breadcrumb>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.label,
            item: `${SITE_URL}${crumb.href === '/' ? '' : crumb.href}`,
          })),
        }}
      />
      <FadeInStagger faster>
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;

              return (
                <Fragment key={crumb.href}>
                  {index > 0 && (
                    <FadeIn>
                      <BreadcrumbSeparator>
                        <span className="text-neutral-950/25 dark:text-neutral-50/25">
                          /
                        </span>
                      </BreadcrumbSeparator>
                    </FadeIn>
                  )}
                  <FadeIn>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild isLast={isLast}>
                        {isLast ? (
                          <span aria-current="page">{crumb.label}</span>
                        ) : (
                          <Link href={crumb.href}>{crumb.label}</Link>
                        )}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </FadeIn>
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </FadeInStagger>
    </Container>
  );
}
