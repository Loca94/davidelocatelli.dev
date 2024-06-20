// Thank you: https://ui.aceternity.com/components/infinite-moving-cards

'use client';

import { cn } from '@/lib/utils';
import { useReducedMotion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function InfiniteScroll({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  children,
}: {
  direction?: 'left' | 'right';
  speed?: 'faster' | 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(shouldReduceMotion ? false : true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'faster') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '35s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '50s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '70s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative z-20 overflow-hidden', className)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-3',
          start && 'animate-infinite-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default InfiniteScroll;
