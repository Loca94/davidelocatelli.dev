'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Icons';
import { SlashIcon } from '@radix-ui/react-icons';
import Container from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/animations/FadeIn';
import AboutPhoto from '@/images/about-photo.webp';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

function FlipLogo({ pathname }: { pathname: string }) {
  const isAboutPage = pathname === '/about';
  let shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isAboutPage ? 'photo-container' : 'svg-container'}
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        exit={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : -30,
          x: shouldReduceMotion ? 0 : 20,
          filter: 'blur(8px)',
          scale: shouldReduceMotion ? 1 : 1.5,
          position: 'absolute',
          transition: {
            duration: 0.225,
            ease: 'easeInOut',
          },
        }}
      >
        {isAboutPage ? (
          <Image
            className="rounded-full transition-opacity duration-300 hover:opacity-80"
            src={AboutPhoto}
            alt="My profile picture"
            width={48}
            height={40}
          />
        ) : (
          <Logo className="group h-12 w-12 transition-all duration-300 ease-in-out" />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

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
          <Link href="/" className="block h-12 w-12">
            <div className="sr-only">Go to homepage</div>
            <FlipLogo pathname={paths} />
            {/* <Logo className="group h-12 w-12 transition-all duration-300 ease-in-out" /> */}
            {/* <Image
              className="rounded-full transition-opacity duration-300 hover:opacity-80"
              src={AboutPhoto}
              alt="My profile picture"
              width={48}
              height={40}
            /> */}
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
