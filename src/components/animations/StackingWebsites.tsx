'use client';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils/tw-utils';

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
    backgroundColor: 'bg-blue-500/70 dark:bg-neutral-950',
  },
  {
    id: 2,
    url: 'www.apple.com',
    backgroundColor: 'bg-neutral-800/90',
  },
  {
    id: 3,
    url: 'www.vercel.com',
    backgroundColor: 'bg-black/80 dark:bg-neutral-900',
  },
];

function WebsiteHeader({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 px-2 pb-1 pt-2 transition-colors duration-300 dark:border-neutral-700">
      <div className="flex items-center space-x-1 transition-all duration-300 sm:grayscale sm:group-hover:grayscale-0">
        <div className="h-2 w-2 rounded-full bg-emerald-700"></div>
        <div className="h-2 w-2 rounded-full bg-emerald-200"></div>
        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
      </div>
      <div className="flex h-4 w-fit items-center rounded bg-neutral-200 px-2 py-0.5 dark:bg-neutral-700">
        <span className="text-[10px] text-neutral-700 dark:text-neutral-300">
          {url}
        </span>
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
  const CARD_OFFSET = offset || 18;
  const SCALE_FACTOR = scaleFactor || 0.15;
  const [cards, setCards] = useState<WebsiteCard[]>(websites);
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldReduceMotion) {
      startFlipping();
      return () => clearInterval(interval);
    }
  }, [shouldReduceMotion]);

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
    <div className="relative mt-6 h-40 w-full max-w-80 sm:mt-10 sm:max-w-lg">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-40 w-full max-w-80 flex-col justify-between rounded border border-neutral-200 bg-white transition-colors duration-300 sm:max-w-lg dark:border-neutral-700 dark:bg-neutral-900"
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
