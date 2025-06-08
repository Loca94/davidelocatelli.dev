'use client';

import { ArrowUpRightMiniIcon } from '@/components/Icons';
import { Metadata, Resource } from '@/lib/types';
import { FadeIn } from './animations/FadeIn';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Skeleton } from './ui/Skeleton';

function MetadataCard({
  url,
  cardPosition,
}: {
  url: string;
  cardPosition: { top: number; visible: boolean };
}) {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMetadata = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/metadata?url=${encodeURIComponent(url)}`,
          { signal },
        );
        const data = await res.json();
        setMetadata(data);
      } catch (error) {
        if (error.name === 'AbortError') return; // request was cancelled
        console.error('Failed to load metadata', error);
        setMetadata(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();

    return () => {
      controller.abort();
      setMetadata(null);
    }; // Cancels fetch request on unmount
  }, [url]);

  function concat(url: string, path: string): string {
    if (path.startsWith('/')) {
      return url.endsWith('/') ? url + path.slice(1) : url + path;
    }
    return url.concat(path);
  }

  return (
    <motion.div
      initial={false}
      animate={{
        top: cardPosition.top,
        opacity: cardPosition.visible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="absolute left-full ml-6 hidden w-64 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg xl:block dark:border-neutral-700 dark:bg-neutral-900"
    >
      {loading || !metadata ? (
        <div className="space-y-3">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <Skeleton className="h-3 w-4/6" />
        </div>
      ) : (
        metadata && (
          <>
            {metadata.image && (
              <img
                src={
                  metadata.image.startsWith('/')
                    ? concat(url, metadata.image)
                    : metadata.image
                }
                alt={metadata.title}
                className="mb-3 h-32 w-full rounded-md object-cover"
              />
            )}
            <h4 className="line-clamp-2 text-lg font-semibold text-neutral-900 dark:text-white">
              {metadata.title}
            </h4>
            <p className="mt-1 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
              {metadata.description}
            </p>
          </>
        )
      )}
    </motion.div>
  );
}

function ResourceLinkList({ data }: { data: Resource[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, visible: false });
  const [hoveredItem, setHoveredItem] = useState<Resource | null>(null);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent, item: Resource) => {
      const itemTop = (e.target as HTMLElement).getBoundingClientRect().top;
      const containerTop =
        containerRef.current?.getBoundingClientRect().top ?? 0;
      setCardPosition({ top: itemTop - containerTop, visible: true });
      setHoveredItem(item);
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    // setCardPosition((pos) => ({ ...pos, visible: false }));
    // setHoveredItem(null);
  }, []);

  return (
    <div className="relative flex" ref={containerRef}>
      <div className="flex flex-col divide-y divide-neutral-800">
        {data.map((item, index) => (
          <FadeIn key={index}>
            <div
              className="py-6"
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.link}
                target="_blank"
                className="group flex flex-col transition-colors duration-300"
              >
                <div className="flex items-center font-medium text-neutral-700 transition duration-300 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100">
                  {item.title}
                  <ArrowUpRightMiniIcon className="ml-1 inline-block h-4 w-4 text-neutral-500 transition-all duration-300 dark:group-hover:ml-2 dark:group-hover:text-emerald-500" />
                </div>

                <p className="text-neutral-400 transition duration-300 dark:text-neutral-400 dark:group-hover:text-neutral-300">
                  {item.description}
                </p>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Floating Card */}
      {hoveredItem && (
        <MetadataCard url={hoveredItem.link} cardPosition={cardPosition} />
      )}
    </div>
  );
}

export { ResourceLinkList };
