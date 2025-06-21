'use client';

import { motion } from 'motion/react';
import { Metadata } from '@/lib/types';
import { Skeleton } from '@/components/ui/Skeleton';
import { useState, useEffect } from 'react';

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
      className="absolute left-full ml-6 w-64 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
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

export { MetadataCard };
