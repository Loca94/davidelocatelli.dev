import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { StackingWebsites } from '@/components/animations/StackingWebsites';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';
import InfiniteScrollingIcons from '@/components/animations/InfiniteScrollingIcons';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'A collection of useful resources on programming, product design and more.',
};

export default function ResourcesPage() {
  return (
    <FadeInStagger>
      <Container className="mb-8">
        <div>
          <FadeIn>
            <PageTitle>Resources</PageTitle>
          </FadeIn>
          <FadeIn>
            <PageDescription>
              Explore a curated selection of invaluable tools, references and
              inspirations for your next web projects.
            </PageDescription>
          </FadeIn>
        </div>
      </Container>

      <Container>
        {/* Resources List */}
        <div className="grid gap-x-6 gap-y-8">
          <FadeIn>
            <Link href="/resources/icons" className="group">
              <div className="relative mb-3 flex h-40 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 transition duration-300 sm:h-48 sm:max-w-xl dark:border-neutral-700 dark:bg-neutral-900/30">
                <InfiniteScrollingIcons />
              </div>
              <div>
                <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                  Icons
                </h2>
                <p className="text-sm text-neutral-400">
                  Collection of free and amazing icons for your projects.
                </p>
              </div>
            </Link>
          </FadeIn>

          <FadeIn>
            <Link href="/resources/websites" className="group">
              <div className="relative mb-3 flex h-40 w-full max-w-[calc(100vw-3rem)] justify-center overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 px-4 py-8 sm:h-48 sm:max-w-xl dark:border-neutral-700 dark:bg-neutral-900/30">
                <StackingWebsites />
              </div>
              <div>
                <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                  Websites
                </h2>
                <p className="text-sm text-neutral-400">
                  Some of the best websites I found by surfing the web.
                </p>
              </div>
            </Link>
          </FadeIn>

          {/* <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 px-4 py-8 sm:max-w-xl dark:border-emerald-950"></div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                UI Kits
              </h2>
              <p className="text-sm text-neutral-400">Best UI kits.</p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] justify-center overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 sm:max-w-xl dark:border-emerald-950">
              <div className="h-full w-2/3 bg-white shadow-lg shadow-emerald-700/30">
                {/* this is the article body *}
              </div>
            </div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                Articles
              </h2>
              <p className="text-sm text-neutral-400">Helpful articles.</p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 sm:max-w-xl dark:border-emerald-950"></div>
            <Link href="/resources/learning">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                Learning
              </h2>
              <p className="text-sm text-neutral-400">Learning resources.</p>
            </Link>
          </FadeIn> */}
        </div>
      </Container>
    </FadeInStagger>
  );
}
