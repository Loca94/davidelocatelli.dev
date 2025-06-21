'use client';

import { ArrowUpRightMiniIcon } from '@/components/Icons';
import { Metadata, Resource } from '@/lib/types';
import { FadeIn } from '@/components/animations/FadeIn';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

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
      } catch (error: any) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') return; // request was cancelled
          console.error('Failed to load metadata', error);
        } else {
          console.error('Unknown error', error);
        }
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
      className="hidden lg:absolute lg:left-full lg:ml-6 lg:block"
    >
      <Card className="w-72 dark:bg-neutral-900/70">
        {loading || !metadata ? (
          <>
            <CardContent className="p-4 pb-0">
              <Skeleton className="h-32 w-full" />
            </CardContent>
            <CardHeader className="p-4">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/6" />
            </CardHeader>
          </>
        ) : (
          metadata && (
            <>
              {metadata.image && (
                <CardContent className="p-4 pb-0">
                  <img
                    src={
                      metadata.image.startsWith('/')
                        ? concat(url, metadata.image)
                        : metadata.image
                    }
                    alt={metadata.title}
                    className="mb-3 h-32 w-full rounded-md object-cover"
                  />
                </CardContent>
              )}
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{metadata.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {metadata.description}
                </CardDescription>
              </CardHeader>
            </>
          )
        )}
      </Card>
    </motion.div>
  );
}

function ResourceLinkList({ data }: { data: Resource[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, visible: false });
  const [hoveredItem, setHoveredItem] = useState<Resource | null>(null);

  const cardElevationPx = 54;

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent, item: Resource) => {
      const itemTop = (e.target as HTMLElement).getBoundingClientRect().top;
      const containerTop =
        containerRef.current?.getBoundingClientRect().top ?? 0;
      setCardPosition({
        top: itemTop - containerTop - cardElevationPx,
        visible: true,
      });
      setHoveredItem(item);
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setCardPosition((pos) => ({ ...pos, visible: false }));
    setHoveredItem(null);
  }, []);

  return (
    <div className="relative flex lg:-mx-4" ref={containerRef}>
      <div className="flex flex-col divide-y divide-neutral-800">
        {data.map((item, index) => (
          <FadeIn key={index}>
            <div
              className="py-6 lg:px-4 lg:transition-colors dark:lg:hover:bg-neutral-900/70"
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
