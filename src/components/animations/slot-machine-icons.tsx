'use client';

import { motion, useReducedMotion } from 'motion/react';
import { RandomIconComponents } from '@/lib/utils/icons-utils';

type ReelProps = {
  spinningIcons: string[];
  spinDuration: number;
  delay: number;
};

const Reel = ({ spinningIcons, spinDuration, delay }: ReelProps) => {
  let shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative m-1.5 h-32 w-16 overflow-hidden rounded-lg border-2 border-neutral-600/50 bg-neutral-950 md:m-3">
      <motion.div
        className="flex flex-col will-change-transform"
        initial={{ y: 0 }}
        animate={{
          y: shouldReduceMotion ? ['-87.5%', '-87.5%'] : ['0%', '-87.5%'],
        }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: (spinDuration + delay) / 1000,
                ease: 'easeInOut',
              }
        }
      >
        {spinningIcons.map((iconName, index) => {
          const Icon = RandomIconComponents[iconName];
          if (!Icon) {
            console.warn(`Icon "${iconName}" not found in IconComponents.`);
            return null;
          }

          return (
            <div key={index} className="flex h-16 items-center justify-center">
              <Icon className="size-8 text-neutral-300" />
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
  spinDuration = 3500,
}: {
  reels: string[][];
  spinDuration?: number;
}) => {
  return (
    <div className="flex h-full items-center justify-center">
      {reels.map((icons, index) => (
        <Reel
          key={index}
          spinningIcons={icons}
          spinDuration={spinDuration}
          delay={index * 350}
        />
      ))}
    </div>
  );
};

export default SlotMachineIcons;
