'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type WebsiteCard = {
  id: number;
  url: string;
  backgroundColor: string;
};

let interval: any;

const websites: WebsiteCard[] = [
  {
    id: 1,
    url: 'www.google.com',
    backgroundColor: 'bg-blue-500/70',
  },
  {
    id: 2,
    url: 'www.apple.com',
    backgroundColor: 'bg-neutral-100',
  },
  {
    id: 3,
    url: 'www.vercel.com',
    backgroundColor: 'bg-black/80',
  },
];

function WebsiteHeader({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 px-2 pb-1 pt-2">
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-full bg-red-500"></div>
        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
      <div className="flex h-4 w-fit items-center rounded bg-neutral-200 px-2 py-0.5">
        <span className="text-[10px] text-neutral-700">{url}</span>
      </div>
      <div className="w-8"></div>
    </div>
  );
}

export const StackingWebsites = ({
  offset,
  scaleFactor,
}: {
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 15;
  const SCALE_FACTOR = scaleFactor || 0.08;
  const [cards, setCards] = useState<WebsiteCard[]>(websites);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: any[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mt-4 h-40 w-80 sm:w-64">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-40 w-80 flex-col justify-between rounded border border-neutral-200 bg-white shadow-xl shadow-emerald-700/10 dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] sm:w-64"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <WebsiteHeader url={card.url} />
            <div className={cn('h-full w-full', card.backgroundColor)}></div>
          </motion.div>
        );
      })}
    </div>
  );
};
