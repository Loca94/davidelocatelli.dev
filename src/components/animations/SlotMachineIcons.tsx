'use client';

import React, { JSX, SVGProps, useEffect, useState } from 'react';
import { motion } from 'motion/react';
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

type IconComponent = (
  props: Omit<SVGProps<SVGSVGElement>, 'ref'>,
) => JSX.Element;

const icons = [
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
];

const getRandomIcon = () => icons[Math.floor(Math.random() * icons.length)];

const Reel = ({
  spinDuration,
  delay,
}: {
  spinDuration: number;
  delay: number;
}) => {
  const [spinningIcons, setSpinningIcons] = useState<IconComponent[]>([]);

  useEffect(() => {
    const fixedIcons = Array.from({ length: 20 }, () => getRandomIcon());
    setSpinningIcons(fixedIcons);
  }, []);

  return (
    <div className="relative m-1.5 h-32 w-16 overflow-hidden rounded-lg border-2 border-neutral-600/50 md:m-3">
      <motion.div
        className="flex flex-col will-change-transform"
        initial={{ y: 0 }}
        animate={{ y: ['0%', '-87.5%'] }}
        transition={{
          duration: (spinDuration + delay) / 1000,
          ease: 'easeInOut',
        }}
      >
        {spinningIcons.map((Icon, index) => (
          <div key={index} className="flex h-16 items-center justify-center">
            <Icon className="size-8 text-neutral-300" />
          </div>
        ))}
      </motion.div>

      {/* Top and Bottom gradient overlay */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-8 bg-gradient-to-b from-white to-transparent dark:from-neutral-950" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-8 bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />
    </div>
  );
};

const SlotMachineIcons = () => {
  const numReels = 3;
  const spinDuration = 3500;

  return (
    <div className="flex h-full items-center justify-center">
      {Array.from({ length: numReels }).map((_, index) => (
        <Reel key={index} spinDuration={spinDuration} delay={index * 350} />
      ))}
    </div>
  );
};

export default SlotMachineIcons;
