// Thank you: https://ui.aceternity.com/components/infinite-moving-cards

'use client';

import { cn } from '@/lib/utils/tw-utils';
import { useReducedMotion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  AddressBookTabsIcon,
  AirplaneIcon,
  AlarmIcon,
  AvocadoIcon,
  BarcodeIcon,
  BellIcon,
  BicycleIcon,
  BluetoothIcon,
  BoneIcon,
  BowlSteamIcon,
  BrainIcon,
  BroomIcon,
  BrowsersIcon,
  CameraIcon,
  CarrotIcon,
  ChartBarIcon,
  ChefHatIcon,
  CpuIcon,
  DropIcon,
  FeatherIcon,
  FloppyDiskIcon,
  GameControllerIcon,
  HamburgerIcon,
  HandPeaceIcon,
  IceCreamIcon,
  LegoIcon,
  LightningIcon,
  MapPinIcon,
  MeteorIcon,
  MountainIcon,
  MouseMiddleClickIcon,
  OnigiriIcon,
  PenNibIcon,
  RadioactiveIcon,
  ThumbsUpIcon,
  TruckTrailerIcon,
  VideoConferenceIcon,
  WavesIcon,
  WindmillIcon,
  YarnIcon,
} from '@/components/Icons';

type Speed = 'faster' | 'fast' | 'normal' | 'slow';
type Direction = 'left' | 'right';
type Item = { class: string; icon: any };

function InfiniteScroll({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
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
      let scrollerContent = Array.from(scrollerRef.current.children);

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
        containerRef.current.style.setProperty('--animation-duration', '35s');
      } else if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '45s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '55s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '65s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative z-20 flex overflow-hidden', className)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-3',
          start && 'animate-infinite-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <item.icon key={idx} className={item.class} />
        ))}
      </div>
    </div>
  );
}

function InfiniteScrollingIcons() {
  let svgClasses =
    'shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-emerald-500 sm:dark:text-neutral-400 sm:dark:group-hover:text-emerald-500';

  let firstIconRow = [
    { class: svgClasses, icon: AlarmIcon },
    { class: svgClasses, icon: RadioactiveIcon },
    { class: svgClasses, icon: MapPinIcon },
    { class: svgClasses, icon: LightningIcon },
    { class: svgClasses, icon: DropIcon },
    { class: svgClasses, icon: ThumbsUpIcon },
    { class: svgClasses, icon: ChartBarIcon },
    { class: svgClasses, icon: PenNibIcon },
    { class: svgClasses, icon: MountainIcon },
    { class: svgClasses, icon: WavesIcon },
  ];
  let secondIconRow = [
    { class: svgClasses, icon: AirplaneIcon },
    { class: svgClasses, icon: CameraIcon },
    { class: svgClasses, icon: BellIcon },
    { class: svgClasses, icon: FloppyDiskIcon },
    { class: svgClasses, icon: CarrotIcon },
    { class: svgClasses, icon: BluetoothIcon },
    { class: svgClasses, icon: HamburgerIcon },
    { class: svgClasses, icon: IceCreamIcon },
    { class: svgClasses, icon: OnigiriIcon },
    { class: svgClasses, icon: BowlSteamIcon },
  ];
  let thirdIconRow = [
    { class: svgClasses, icon: AddressBookTabsIcon },
    { class: svgClasses, icon: AvocadoIcon },
    { class: svgClasses, icon: ChefHatIcon },
    { class: svgClasses, icon: GameControllerIcon },
    { class: svgClasses, icon: HandPeaceIcon },
    { class: svgClasses, icon: MeteorIcon },
    { class: svgClasses, icon: MouseMiddleClickIcon },
    { class: svgClasses, icon: LegoIcon },
    { class: svgClasses, icon: YarnIcon },
    { class: svgClasses, icon: TruckTrailerIcon },
  ];
  let fourthIconRow = [
    { class: svgClasses, icon: VideoConferenceIcon },
    { class: svgClasses, icon: WindmillIcon },
    { class: svgClasses, icon: BarcodeIcon },
    { class: svgClasses, icon: BoneIcon },
    { class: svgClasses, icon: BicycleIcon },
    { class: svgClasses, icon: BrainIcon },
    { class: svgClasses, icon: BroomIcon },
    { class: svgClasses, icon: BrowsersIcon },
    { class: svgClasses, icon: CpuIcon },
    { class: svgClasses, icon: FeatherIcon },
  ];

  return (
    <>
      <InfiniteScroll
        direction="right"
        speed="slow"
        pauseOnHover={false}
        items={firstIconRow.concat(firstIconRow)}
      />
      <InfiniteScroll
        direction="right"
        speed="fast"
        pauseOnHover={false}
        items={secondIconRow.concat(secondIconRow)}
      />
      <InfiniteScroll
        direction="right"
        speed="normal"
        pauseOnHover={false}
        items={thirdIconRow.concat(thirdIconRow)}
      />
      <InfiniteScroll
        direction="right"
        speed="faster"
        pauseOnHover={false}
        items={fourthIconRow.concat(fourthIconRow)}
      />
    </>
  );
}

export default InfiniteScrollingIcons;
