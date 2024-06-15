'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function CursorBlinker({
  size = 'default',
}: {
  size?: 'title' | 'chapter' | 'default';
}) {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={cn('inline-block w-[1px] translate-y-1 bg-slate-900', {
        'h-6': size === 'title',
        'h-5': size === 'chapter' || size === 'default',
      })}
    />
  );
}

function InfiniteAnimText({ delay }: { delay: number }) {
  const textIndex = useMotionValue(0);
  const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Nam ultricies, ligula in malesuada suscipit, nunc arcu tristique nisi',
    'vel feugiat lacus leo vel elit.',
    'Donec vehicula mi id semper consequat.',
    'Suspendisse potenti. Aliquam erat volutpat.',
    'Duis nec orci nec neque pharetra tincidunt. ',
    'Vivamus vestibulum velit a diam hendrerit, a elementum risus posuere.',
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 1.5,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.span className="inline text-xs text-neutral-600">
        {displayText}
      </motion.span>
      <CursorBlinker />
    </>
  );
}

function AnimText({
  delay,
  baseText,
  type,
}: {
  delay: number;
  baseText: string;
  type?: 'title' | 'chapter';
}) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-2">
      <motion.span
        className={cn({
          'text-xl font-bold tracking-tight': type === 'title',
          'text-sm font-semibold leading-3 text-slate-700': type === 'chapter',
        })}
      >
        {displayText}
      </motion.span>
      {!done && <CursorBlinker />}
      {done && <br />}
    </div>
  );
}

export default function TypewriterEffect({ delay }: { delay: number }) {
  const duration = 1;
  const titleText = 'Interesting article that I';
  const chapterText = 'Chapter 1';

  return (
    <span>
      <AnimText delay={delay} baseText={titleText} type="title" />
      {/* <AnimText
        delay={delay + duration * 2}
        baseText={chapterText}
        type="chapter"
      /> */}
      <InfiniteAnimText delay={delay + duration * 4} />
    </span>
  );
}
