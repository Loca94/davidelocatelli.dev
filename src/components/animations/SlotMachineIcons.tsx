'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  useVelocity,
} from 'motion/react';
import { cn } from '@/lib/utils';
import { IconName, RandomIconComponents } from '@/lib/generateRandomIcons';

const ROW_HEIGHT = 64;
const WIND_UP_ROWS = 0.25;
const OVERSHOOT_ROWS = 0.12;
const MIN_TRAVEL_ROWS = 16;
const REEL_STAGGER_MS = 300;
// Speed in rows per second where the blur starts and where it peaks.
const BLUR_START_SPEED = 6;
const BLUR_PEAK_SPEED = 30;
const BLUR_PEAK_PX = 2.5;

type ReelProps = {
  spinningIcons: IconName[];
  spinDuration: number;
  delay: number;
  spin: number;
  onLand: () => void;
};

const Reel = ({
  spinningIcons,
  spinDuration,
  delay,
  spin,
  onLand,
}: ReelProps) => {
  const rowCount = spinningIcons.length;
  // Total rows travelled. It only grows, and is wrapped onto the strip for display.
  const distance = useMotionValue(0);
  const [landedSpin, setLandedSpin] = useState(0);
  const [landedRow, setLandedRow] = useState(0);

  const y = useTransform(distance, (rows) => {
    const row = ((rows % rowCount) + rowCount) % rowCount;
    return -(row + 1) * ROW_HEIGHT;
  });
  const velocity = useVelocity(distance);
  const filter = useTransform(velocity, (speed) => {
    const amount =
      (Math.abs(speed) - BLUR_START_SPEED) /
      (BLUR_PEAK_SPEED - BLUR_START_SPEED);
    if (amount <= 0) return 'none';
    return `blur(${Math.min(amount, 1) * BLUR_PEAK_PX}px)`;
  });

  useEffect(() => {
    if (spin === 0) return;

    const start = distance.get();
    const target = Math.round(
      start + MIN_TRAVEL_ROWS + delay / 50 + Math.random() * rowCount,
    );

    const controls = animate(
      distance,
      [start, start - WIND_UP_ROWS, target + OVERSHOOT_ROWS, target],
      {
        duration: (spinDuration + delay) / 1000,
        times: [0, 0.08, 0.92, 1],
        ease: ['easeOut', [0.4, 0, 0.1, 1], 'easeInOut'],
        onComplete: () => {
          setLandedRow(target % rowCount);
          setLandedSpin(spin);
          onLand();
        },
      },
    );
    return () => controls.stop();
  }, [spin, distance, delay, rowCount, spinDuration, onLand]);

  const isLit = spin > 0 && landedSpin === spin;
  // One row is repeated above and two below, so the window never shows a gap.
  const strip = [
    spinningIcons[rowCount - 1],
    ...spinningIcons,
    spinningIcons[0],
    spinningIcons[1],
  ];

  return (
    <div className="relative m-1.5 h-32 w-16 overflow-hidden rounded-lg border-2 border-neutral-600/50 bg-neutral-950 md:m-3">
      <motion.div
        className="absolute inset-x-0 top-1/2 -mt-8 flex flex-col will-change-transform"
        style={{ y, filter }}
      >
        {strip.map((iconName, index) => {
          const Icon = RandomIconComponents[iconName];

          return (
            <div key={index} className="flex h-16 items-center justify-center">
              <Icon
                className={cn(
                  'size-8 text-neutral-300 transition-[color,scale] duration-300',
                  isLit &&
                    index === landedRow + 1 &&
                    'scale-110 text-emerald-400',
                  // Reduced motion never spins, so the first row is the result.
                  index === 1 &&
                    'motion-reduce:scale-110 motion-reduce:text-emerald-400',
                )}
              />
            </div>
          );
        })}
      </motion.div>

      {/* Top and Bottom gradient overlay */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-8 bg-linear-to-b from-white to-transparent dark:from-neutral-950" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-8 bg-linear-to-t from-white to-transparent dark:from-neutral-950" />
    </div>
  );
};

const SlotMachineIcons = ({
  reels,
  spinDuration = 1800,
}: {
  reels: IconName[][];
  spinDuration?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const landedReels = useRef(0);
  const [respins, setRespins] = useState(0);
  const isInView = useInView(containerRef, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const reelCount = reels.length;

  // The first spin plays once the reels are in view. 0 means not spinning yet.
  const spin = isInView && !shouldReduceMotion ? respins + 1 : 0;

  const handleLand = useCallback(() => {
    landedReels.current += 1;
  }, []);

  // Hovering or focusing the surrounding link pulls the lever.
  useEffect(() => {
    const link = containerRef.current?.closest('a');
    if (!link || shouldReduceMotion) return;

    const respin = () => {
      if (landedReels.current < reelCount) return;
      landedReels.current = 0;
      setRespins((count) => count + 1);
    };
    const handlePointerEnter = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') respin();
    };
    const handleFocusIn = (event: FocusEvent) => {
      if ((event.target as Element).matches(':focus-visible')) respin();
    };

    link.addEventListener('pointerenter', handlePointerEnter);
    link.addEventListener('focusin', handleFocusIn);
    return () => {
      link.removeEventListener('pointerenter', handlePointerEnter);
      link.removeEventListener('focusin', handleFocusIn);
    };
  }, [reelCount, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="flex h-full items-center justify-center"
    >
      {reels.map((icons, index) => (
        <Reel
          key={index}
          spinningIcons={icons}
          spinDuration={spinDuration}
          delay={index * REEL_STAGGER_MS}
          spin={spin}
          onLand={handleLand}
        />
      ))}
    </div>
  );
};

export default SlotMachineIcons;
