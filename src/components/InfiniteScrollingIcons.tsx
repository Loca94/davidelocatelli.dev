import InfiniteScroll from '@/components/animations/InfiniteScroll';
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

export default function InfiniteScrollingIcons() {
  let svgClasses =
    'shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-emerald-500 sm:dark:text-neutral-400 sm:dark:group-hover:text-emerald-500';

  return (
    <>
      <InfiniteScroll direction="left" speed="normal" pauseOnHover={false}>
        <AlarmIcon className={svgClasses} />
        <RadioactiveIcon className={svgClasses} />
        <MapPinIcon className={svgClasses} />
        <LightningIcon className={svgClasses} />
        <DropIcon className={svgClasses} />
        <ThumbsUpIcon className={svgClasses} />
        <ChartBarIcon className={svgClasses} />
        <PenNibIcon className={svgClasses} />
        <MountainIcon className={svgClasses} />
        <WavesIcon className={svgClasses} />
      </InfiniteScroll>
      <InfiniteScroll direction="right" speed="fast" pauseOnHover={false}>
        <AirplaneIcon className={svgClasses} />
        <CameraIcon className={svgClasses} />
        <BellIcon className={svgClasses} />
        <FloppyDiskIcon className={svgClasses} />
        <CarrotIcon className={svgClasses} />
        <BluetoothIcon className={svgClasses} />
        <HamburgerIcon className={svgClasses} />
        <IceCreamIcon className={svgClasses} />
        <OnigiriIcon className={svgClasses} />
        <BowlSteamIcon className={svgClasses} />
      </InfiniteScroll>
      <InfiniteScroll direction="left" speed="normal" pauseOnHover={false}>
        <AddressBookTabsIcon className={svgClasses} />
        <AvocadoIcon className={svgClasses} />
        <ChefHatIcon className={svgClasses} />
        <GameControllerIcon className={svgClasses} />
        <HandPeaceIcon className={svgClasses} />
        <MeteorIcon className={svgClasses} />
        <MouseMiddleClickIcon className={svgClasses} />
        <LegoIcon className={svgClasses} />
        <YarnIcon className={svgClasses} />
        <TruckTrailerIcon className={svgClasses} />
      </InfiniteScroll>
      <InfiniteScroll direction="right" speed="slow" pauseOnHover={false}>
        <VideoConferenceIcon className={svgClasses} />
        <WindmillIcon className={svgClasses} />
        <BarcodeIcon className={svgClasses} />
        <BoneIcon className={svgClasses} />
        <BicycleIcon className={svgClasses} />
        <BrainIcon className={svgClasses} />
        <BroomIcon className={svgClasses} />
        <BrowsersIcon className={svgClasses} />
        <CpuIcon className={svgClasses} />
        <FeatherIcon className={svgClasses} />
      </InfiniteScroll>
    </>
  );
}
