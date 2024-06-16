import Link from 'next/link';
import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
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
import { StackingWebsites } from '@/components/animations/StackingWebsites';
import { PageDescription, PageTitle } from '@/components/ui/PageLayout';

export default function ResourcesPage() {
  return (
    <FadeInStagger>
      <Container className="mb-8">
        <div>
          <FadeIn>
            <PageTitle>Resources</PageTitle>
          </FadeIn>
          <FadeIn>
            <PageDescription>
              Explore a curated selection of invaluable tools, references and
              inspirations to elevate/power your next web project.
            </PageDescription>
          </FadeIn>
        </div>
      </Container>

      <Container>
        {/* Resources List */}
        <div className="grid gap-x-6 gap-y-8">
          <FadeIn>
            <Link href="/resources/icons" className="group">
              <div className="relative mb-3 flex h-40 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 transition duration-300 sm:h-48 sm:max-w-xl dark:border-neutral-700 dark:bg-neutral-900/30">
                <InfiniteScroll
                  direction="left"
                  speed="normal"
                  pauseOnHover={false}
                >
                  <AlarmIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <RadioactiveIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <MapPinIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <LightningIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <DropIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <ThumbsUpIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <ChartBarIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <PenNibIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <MountainIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <WavesIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                </InfiniteScroll>
                <InfiniteScroll
                  direction="right"
                  speed="fast"
                  pauseOnHover={false}
                >
                  <AirplaneIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <CameraIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BellIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <FloppyDiskIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <CarrotIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BluetoothIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <HamburgerIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <IceCreamIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <OnigiriIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BowlSteamIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                </InfiniteScroll>
                <InfiniteScroll
                  direction="left"
                  speed="normal"
                  pauseOnHover={false}
                >
                  <AddressBookTabsIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <AvocadoIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <ChefHatIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <GameControllerIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <HandPeaceIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <MeteorIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <MouseMiddleClickIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <LegoIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <YarnIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <TruckTrailerIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                </InfiniteScroll>
                <InfiniteScroll
                  direction="right"
                  speed="slow"
                  pauseOnHover={false}
                >
                  <VideoConferenceIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <WindmillIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BarcodeIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BoneIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BicycleIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BrainIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BroomIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <BrowsersIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <CpuIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                  <FeatherIcon className="shadow-svg size-5 text-emerald-600 transition-colors duration-300 sm:size-6 dark:text-neutral-400 dark:group-hover:text-emerald-500" />
                </InfiniteScroll>
              </div>
              <div>
                <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                  Icons
                </h2>
                <p className="text-sm text-neutral-400">
                  Collection of free and amazing icons for your projects.
                </p>
              </div>
            </Link>
          </FadeIn>

          <FadeIn>
            <Link href="/resources/websites" className="group">
              <div className="relative mb-2 flex h-40 w-full max-w-[calc(100vw-3rem)] justify-center overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 px-4 py-8 sm:h-48 sm:max-w-xl dark:border-neutral-700 dark:bg-neutral-900/30">
                <StackingWebsites />
              </div>
              <div>
                <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                  Websites
                </h2>
                <p className="text-sm text-neutral-400">
                  Some of the best websites I found by surfing the web.
                </p>
              </div>
            </Link>
          </FadeIn>

          {/* <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 px-4 py-8 sm:max-w-xl dark:border-emerald-950"></div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                UI Kits
              </h2>
              <p className="text-sm text-neutral-400">Best UI kits.</p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] justify-center overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 sm:max-w-xl dark:border-emerald-950">
              <div className="h-full w-2/3 bg-white shadow-lg shadow-emerald-700/30">
                {/* this is the article body *}
              </div>
            </div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                Articles
              </h2>
              <p className="text-sm text-neutral-400">Helpful articles.</p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 sm:max-w-xl dark:border-emerald-950"></div>
            <Link href="/resources/learning">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-200">
                Learning
              </h2>
              <p className="text-sm text-neutral-400">Learning resources.</p>
            </Link>
          </FadeIn> */}
        </div>
      </Container>
    </FadeInStagger>
  );
}
