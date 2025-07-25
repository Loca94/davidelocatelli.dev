'use client';

import { useState, useEffect } from 'react';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function AnimatedBtnBorder({
  children,
  className,
  duration = 1,
  clockwise = true,
  onClick,
  ...props
}: React.PropsWithChildren<
  {
    className?: string;
    duration?: number;
    clockwise?: boolean;
    onClick?: () => void;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>('TOP');

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const handleClick = () => onClick && onClick();

  const movingMap: Record<Direction, string> = {
    TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    BOTTOM:
      'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    RIGHT:
      'radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
  };

  const highlight =
    'radial-gradient(75% 181.16% at 50% 50%, #00bc7d 0%, rgba(255, 255, 255, 0) 100%)';

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Button
      className="relative h-min w-fit cursor-pointer content-center overflow-visible bg-neutral-950/20 decoration-clone p-px transition duration-500 hover:bg-neutral-950/10 dark:bg-white/20"
      variant="ghost"
      onClick={handleClick}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] bg-neutral-950 px-4 py-2 text-white',
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          'absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]',
        )}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className="absolute inset-[2px] z-1 flex-none rounded-[100px] bg-neutral-950" />
    </Button>
  );
}

export function LetsTalkButton() {
  return (
    <AnimatedBtnBorder
      onClick={() => {
        window.open(
          "mailto:davidelocatelli.dev@gmail.com?subject=Reaching%20out%20from%20your%20portfolio%20–%20Let's%20talk!",
          '_blank',
        );
      }}
    >
      {"Let's talk 😎"}
    </AnimatedBtnBorder>
  );
}
