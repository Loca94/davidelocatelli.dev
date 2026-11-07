'use client';

import { useEffect, useRef, useState, type ComponentType } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from 'motion/react';
import { cn } from '@/lib/utils';

type WebsiteCard = {
  id: number;
  url: string;
  Page: ComponentType;
};

function SearchPage() {
  return (
    <div className="flex h-full flex-col items-center gap-2.5 bg-white pt-5 dark:bg-neutral-800">
      <div className="flex gap-0.5">
        <div className="h-3 w-3 rounded-full bg-blue-500" />
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-blue-500" />
        <div className="h-3 w-1.5 rounded-full bg-green-500" />
        <div className="h-3 w-3 rounded-full bg-red-500" />
      </div>
      <div className="h-5 w-3/5 rounded-full border border-neutral-200 dark:border-neutral-600" />
      <div className="flex gap-1.5">
        <div className="h-3 w-10 rounded-sm bg-neutral-100 dark:bg-neutral-700" />
        <div className="h-3 w-10 rounded-sm bg-neutral-100 dark:bg-neutral-700" />
      </div>
    </div>
  );
}

function ProductPage() {
  return (
    <div className="flex h-full flex-col items-center bg-neutral-900 pt-4">
      <div className="h-2.5 w-1/4 rounded-full bg-neutral-100" />
      <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-neutral-500" />
      <div className="mt-2 flex gap-1">
        <div className="h-2.5 w-7 rounded-full bg-sky-500" />
        <div className="h-2.5 w-7 rounded-full border border-sky-500" />
      </div>
      <div className="mt-3 h-full w-2/5 rounded-t-xl border-x border-t border-neutral-500 bg-gradient-to-b from-neutral-600 to-neutral-800" />
    </div>
  );
}

function PlatformPage() {
  return (
    <div
      className="flex h-full gap-4 bg-black px-4 pt-4"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgb(255 255 255 / 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.07) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <div className="flex flex-1 flex-col items-start">
        <div className="h-2.5 w-full rounded-sm bg-white" />
        <div className="mt-1.5 h-2.5 w-2/3 rounded-sm bg-white" />
        <div className="mt-3 flex gap-1">
          <div className="h-3 w-9 rounded-sm bg-white" />
          <div className="h-3 w-9 rounded-sm border border-neutral-600 bg-black" />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col gap-1.5 rounded-t-sm border-x border-t border-neutral-700 bg-neutral-950 p-2">
        <div className="h-1 w-3/4 rounded-full bg-emerald-400" />
        <div className="h-1 w-1/2 rounded-full bg-neutral-600" />
        <div className="h-1 w-2/3 rounded-full bg-neutral-600" />
        <div className="h-1 w-2/5 rounded-full bg-neutral-600" />
      </div>
    </div>
  );
}

const websites: WebsiteCard[] = [
  { id: 1, url: 'www.google.com', Page: SearchPage },
  { id: 2, url: 'www.apple.com', Page: ProductPage },
  { id: 3, url: 'www.vercel.com', Page: PlatformPage },
];

const DEAL_INTERVAL_MS = 5000;
// A dealt card falls, swaps depth while hidden, then rises behind the deck.
const DEAL_DURATION_S = 0.95;
const DEAL_SWAP_TIME = 0.42;
const DEAL_TRANSITION: Transition = {
  duration: DEAL_DURATION_S,
  times: [0, DEAL_SWAP_TIME, DEAL_SWAP_TIME + 0.01, 1],
  ease: ['easeIn', 'linear', [0.22, 1, 0.36, 1]],
};
// Far enough to clear the parent panel, which clips the card with overflow-hidden.
const DROP_DISTANCE = 200;
const STEP_DELAY_S = 0.1;

// `translate` is separate from the `transform` Motion writes, so the hover lift
// composes with the deal animation. Class names are listed in full for Tailwind.
const LIFT_CLASSES = [
  'motion-safe:group-hover:-translate-y-1.5 motion-safe:group-focus-visible:-translate-y-1.5',
  'motion-safe:group-hover:-translate-y-3 motion-safe:group-focus-visible:-translate-y-3',
  'motion-safe:group-hover:-translate-y-4.5 motion-safe:group-focus-visible:-translate-y-4.5',
];

function WebsiteHeader({
  url,
  isLoading,
}: {
  url: string;
  isLoading: boolean;
}) {
  return (
    <div className="relative flex items-center justify-between border-b border-neutral-100 px-2 pt-2 pb-1 transition-colors duration-300 dark:border-neutral-700">
      <div className="flex items-center space-x-1 transition-all duration-300 sm:grayscale sm:group-hover:grayscale-0">
        <div className="h-2 w-2 rounded-full bg-emerald-700"></div>
        <div className="h-2 w-2 rounded-full bg-emerald-200"></div>
        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
      </div>
      <div className="flex h-4 w-fit items-center rounded-sm bg-neutral-200 px-2 py-0.5 dark:bg-neutral-700">
        <span className="text-[10px] text-neutral-700 dark:text-neutral-300">
          {url}
        </span>
      </div>
      <div className="w-8"></div>

      {isLoading && (
        <motion.div
          className="absolute right-0 -bottom-px left-0 h-0.5 origin-left bg-emerald-500"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{
            delay: 0.3,
            duration: 1,
            times: [0, 0.8, 1],
            ease: 'easeOut',
          }}
        />
      )}
    </div>
  );
}

const StackingWebsites = ({
  offset = 16,
  scaleFactor = 0.08,
}: {
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<WebsiteCard[]>(websites);
  const [isDropping, setIsDropping] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const shouldReduceMotion = useReducedMotion();

  // Keyframes replay after hydration despite initial={false}, so everything that
  // belongs to a deal waits for the first one.
  const hasDealt = cards !== websites;
  const lastIndex = cards.length - 1;
  const backY = lastIndex * -offset;
  const backScale = 1 - lastIndex * scaleFactor;
  const backVeil = lastIndex * 0.3;
  const isPaused = shouldReduceMotion || isHovered || !isInView;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (document.hidden) return;
      setCards(([front, ...rest]) => [...rest, front]);
      setIsDropping(true);
    }, DEAL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  // zIndex lives in React state because Motion applies it at the start of an
  // animation. The dealt card must stay on top until it has left the panel.
  useEffect(() => {
    if (!isDropping) return;

    const timeout = setTimeout(
      () => setIsDropping(false),
      DEAL_DURATION_S * DEAL_SWAP_TIME * 1000,
    );
    return () => clearTimeout(timeout);
  }, [isDropping]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative mt-6 h-40 w-full max-w-80 sm:mt-10 sm:max-w-lg"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {cards.map((card, index) => {
        const isDealt = hasDealt && index === lastIndex;

        return (
          <motion.div
            key={card.id}
            initial={false}
            className={cn(
              'absolute flex h-40 w-full max-w-80 origin-top flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-lg shadow-emerald-950/10 transition-[translate,background-color,border-color] duration-300 sm:max-w-lg dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-black/40',
              LIFT_CLASSES[index],
            )}
            style={{
              zIndex:
                isDealt && isDropping ? cards.length + 1 : cards.length - index,
            }}
            animate={
              isDealt
                ? {
                    y: [0, DROP_DISTANCE, backY + offset, backY],
                    scale: [1, 1, backScale, backScale],
                    opacity: [1, 1, 0, 1],
                  }
                : {
                    y: index * -offset,
                    scale: 1 - index * scaleFactor,
                    opacity: 1,
                  }
            }
            transition={
              isDealt
                ? DEAL_TRANSITION
                : {
                    type: 'spring',
                    visualDuration: 0.5,
                    bounce: 0.15,
                    delay: STEP_DELAY_S * (index + 1),
                    opacity: { duration: 0 },
                  }
            }
          >
            <WebsiteHeader url={card.url} isLoading={hasDealt && index === 0} />
            <div className="min-h-0 flex-1">
              <card.Page />
            </div>

            {/* Veil in the panel's color, so cards recede with depth */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-emerald-100 dark:bg-neutral-950"
              initial={false}
              animate={{
                opacity: isDealt ? [0, 0, backVeil, backVeil] : index * 0.3,
              }}
              transition={
                isDealt
                  ? DEAL_TRANSITION
                  : { duration: 0.5, delay: STEP_DELAY_S * (index + 1) }
              }
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default StackingWebsites;
