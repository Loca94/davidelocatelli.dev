'use client';

import * as React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Icons';
import { SlashIcon } from '@radix-ui/react-icons';
import Container from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <header>
      <Container
        className={cn(
          'space-y-4 pb-8 transition-all duration-500',
          pathNames.length >= 2 ? 'pt-16' : 'pt-24',
        )}
      >
        <FadeIn>
          <Link href="/" className="block">
            <div className="sr-only">Go to homepage</div>
            <Logo className="group h-12 w-12 transition-all duration-300 ease-in-out" />

            {/* TODO: Qui voglio inserire dei breadcrumbs, vorrei capire quanto è facile/difficile.
             Come animazione di apparizione sarebbe figo poter mettere l'effetto di apparizione lettera per lettera con il blur */}
          </Link>
        </FadeIn>

        {pathNames.length >= 2 && (
          <FadeInStagger faster>
            <Breadcrumb>
              <BreadcrumbList>
                <FadeIn>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </FadeIn>

                {pathNames.map((pathSegment, index) => {
                  const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                  const breadcrumbLabel =
                    pathSegment[0].toUpperCase() +
                    pathSegment.slice(1, pathSegment.length);

                  return (
                    <React.Fragment key={index}>
                      <FadeIn>
                        <BreadcrumbSeparator>
                          <SlashIcon />
                        </BreadcrumbSeparator>
                      </FadeIn>

                      <FadeIn>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link href={href}>{breadcrumbLabel}</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      </FadeIn>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </FadeInStagger>
        )}
      </Container>
    </header>
  );
}
