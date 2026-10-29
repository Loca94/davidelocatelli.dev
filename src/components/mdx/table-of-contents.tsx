'use client';

import { TocHeading } from '@/lib/models/article';
import { cn } from '@/lib/utils/tailwind-utils';
import { useEffect, useState } from 'react';
import { BookOpenTextIcon } from '../icons/book-open-text-icon';

export default function TableOfContents({
  headings,
}: {
  headings: TocHeading[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          } else {
            // TODO: fix a problem, on page refresh I enter in this else clause, the else clause should not exist. Debug to find where the code breaks and does not color the ToC correctly on reload.
            console.log(
              'the following entry is not intersecting',
              entry.target.id,
            );
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="fixed top-36 left-8 hidden max-h-[calc(100vh-6rem)] w-64 2xl:block">
      <div className="mb-6 flex items-center gap-2 text-gray-900 dark:text-neutral-50">
        <BookOpenTextIcon className="size-4" />
        <h3 className="text-sm font-medium">On this page</h3>
      </div>

      <div className="flex flex-col gap-2">
        {headings.map((heading, index) => (
          <div key={heading.slug} className="contents">
            {index !== 0 && (
              <>
                <span className="h-px w-3 bg-neutral-400 dark:bg-neutral-700"></span>
                <span className="h-px w-3 bg-neutral-400 dark:bg-neutral-700"></span>
              </>
            )}

            <a
              href={`#${heading.slug}`}
              className={cn(
                "group relative flex h-px items-center gap-2.5 text-sm/4 before:absolute before:inset-x-0 before:-inset-y-3.5 before:content-['']",
                activeId === heading.slug
                  ? 'font-medium text-black dark:text-neutral-50'
                  : 'text-neutral-500 hover:text-black dark:hover:text-neutral-50',
              )}
            >
              <span
                className={cn(
                  'h-px w-5',
                  activeId === heading.slug
                    ? 'bg-black dark:bg-neutral-50'
                    : 'bg-neutral-400 dark:bg-neutral-700',
                )}
              ></span>
              <span className="truncate select-none group-hover:text-white">
                {heading.text}
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
