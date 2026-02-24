import { AddressBookTabsIcon } from '@/components/icons/address-book-tabs-icon';
import { AirplaneIcon } from '@/components/icons/airplane-icon';
import { AlarmIcon } from '@/components/icons/alarm-icon';
import { AvocadoIcon } from '@/components/icons/avocado-icon';
import { BarcodeIcon } from '@/components/icons/barcode-icon';
import { BellIcon } from '@/components/icons/bell-icon';
import { BicycleIcon } from '@/components/icons/bicycle-icon';
import { BluetoothIcon } from '@/components/icons/bluetooth-icon';
import { BoneIcon } from '@/components/icons/bone-icon';
import { BowlSteamIcon } from '@/components/icons/bow-steam-icon';
import { BrainIcon } from '@/components/icons/brain-icon';
import { BroomIcon } from '@/components/icons/broom-icon';
import { BrowsersIcon } from '@/components/icons/browser-icon';
import { CameraIcon } from '@/components/icons/camera-icon';
import { CarrotIcon } from '@/components/icons/carrot-icon';
import { ChartBarIcon } from '@/components/icons/chart-bar-icon';
import { ChefHatIcon } from '@/components/icons/chef-hat-icon';
import { CpuIcon } from '@/components/icons/cpu-icon';
import { DropIcon } from '@/components/icons/drop-icon';
import { FeatherIcon } from '@/components/icons/feather-icon';
import { FloppyDiskIcon } from '@/components/icons/floppy-disk-icon';
import { GameControllerIcon } from '@/components/icons/game-controller-icon';
import { HamburgerIcon } from '@/components/icons/hamburger-icon';
import { HandPeaceIcon } from '@/components/icons/hand-piece-icon';
import { IceCreamIcon } from '@/components/icons/ice-cream-icon';
import { LegoIcon } from '@/components/icons/lego-icon';
import { LightningIcon } from '@/components/icons/lightning-icon';
import { MapPinIcon } from '@/components/icons/map-pin-icon';
import { MeteorIcon } from '@/components/icons/meteor-icon';
import { MountainIcon } from '@/components/icons/mountain-icon';
import { MouseMiddleClickIcon } from '@/components/icons/mouse-middle-click-icon';
import { OnigiriIcon } from '@/components/icons/onigiri-icon';
import { PenNibIcon } from '@/components/icons/pen-nib-icon';
import { RadioactiveIcon } from '@/components/icons/radioactive-icon';
import { ThumbsUpIcon } from '@/components/icons/thumbs-up-icon';
import { TruckTrailerIcon } from '@/components/icons/truck-trailer-icon';
import { VideoConferenceIcon } from '@/components/icons/video-conference-icon';
import { WavesIcon } from '@/components/icons/waves-icon';
import { WindmillIcon } from '@/components/icons/windmill-icon';
import { YarnIcon } from '@/components/icons/yarn-icon';

const iconList = [
  { name: 'AddressBookTabsIcon', component: AddressBookTabsIcon },
  { name: 'AirplaneIcon', component: AirplaneIcon },
  { name: 'AlarmIcon', component: AlarmIcon },
  { name: 'AvocadoIcon', component: AvocadoIcon },
  { name: 'BarcodeIcon', component: BarcodeIcon },
  { name: 'BellIcon', component: BellIcon },
  { name: 'BicycleIcon', component: BicycleIcon },
  { name: 'BluetoothIcon', component: BluetoothIcon },
  { name: 'BoneIcon', component: BoneIcon },
  { name: 'BowlSteamIcon', component: BowlSteamIcon },
  { name: 'BrainIcon', component: BrainIcon },
  { name: 'BroomIcon', component: BroomIcon },
  { name: 'BrowsersIcon', component: BrowsersIcon },
  { name: 'CameraIcon', component: CameraIcon },
  { name: 'CarrotIcon', component: CarrotIcon },
  { name: 'ChartBarIcon', component: ChartBarIcon },
  { name: 'ChefHatIcon', component: ChefHatIcon },
  { name: 'CpuIcon', component: CpuIcon },
  { name: 'DropIcon', component: DropIcon },
  { name: 'FeatherIcon', component: FeatherIcon },
  { name: 'FloppyDiskIcon', component: FloppyDiskIcon },
  { name: 'GameControllerIcon', component: GameControllerIcon },
  { name: 'HamburgerIcon', component: HamburgerIcon },
  { name: 'HandPeaceIcon', component: HandPeaceIcon },
  { name: 'IceCreamIcon', component: IceCreamIcon },
  { name: 'LegoIcon', component: LegoIcon },
  { name: 'LightningIcon', component: LightningIcon },
  { name: 'MapPinIcon', component: MapPinIcon },
  { name: 'MeteorIcon', component: MeteorIcon },
  { name: 'MountainIcon', component: MountainIcon },
  { name: 'MouseMiddleClickIcon', component: MouseMiddleClickIcon },
  { name: 'OnigiriIcon', component: OnigiriIcon },
  { name: 'PenNibIcon', component: PenNibIcon },
  { name: 'RadioactiveIcon', component: RadioactiveIcon },
  { name: 'ThumbsUpIcon', component: ThumbsUpIcon },
  { name: 'TruckTrailerIcon', component: TruckTrailerIcon },
  { name: 'VideoConferenceIcon', component: VideoConferenceIcon },
  { name: 'WavesIcon', component: WavesIcon },
  { name: 'WindmillIcon', component: WindmillIcon },
  { name: 'YarnIcon', component: YarnIcon },
] as const;

export const RandomIconComponents = Object.fromEntries(
  iconList.map(({ name, component }) => [name, component]),
);

export function generateRandomIcons(count: number): string[] {
  return Array.from(
    { length: count },
    () => iconList[Math.floor(Math.random() * iconList.length)].name,
  );
}
