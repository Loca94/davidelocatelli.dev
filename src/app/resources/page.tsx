import Link from 'next/link';
import Container from '@/components/Container';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import InfiniteScroll from '@/components/animations/InfiniteScroll';
import {
  AirplaneIcon,
  AlarmIcon,
  BellIcon,
  BluetoothIcon,
  CameraIcon,
  CarrotIcon,
  ChartBarIcon,
  DropIcon,
  FloppyDiskIcon,
  HamburgerIcon,
  LightningIcon,
  MapPinIcon,
  MountainIcon,
  PenNibIcon,
  RadioactiveIcon,
  ThumbsUpIcon,
  WavesIcon,
} from '@/components/Icons';
import { StackingWebsites } from '@/components/animations/StackingWebsites';

export default function ResourcesPage() {
  return (
    <FadeInStagger>
      <Container className="mb-8">
        <div>
          <FadeIn>
            <h1 className="text-lg font-medium text-neutral-950">Resources</h1>
          </FadeIn>
          <FadeIn>
            <p className="font-medium text-neutral-400">
              Explore a curated selection of invaluable tools, references and
              inspirations to elevate/power your next web project.
            </p>
          </FadeIn>
        </div>
      </Container>

      <Container looser>
        {/* Resources List */}
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          <FadeIn>
            <div className="relative mb-3 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100">
              <InfiniteScroll
                direction="left"
                speed="normal"
                pauseOnHover={false}
              >
                <AlarmIcon className="size-4 text-emerald-600" />
                <RadioactiveIcon className="size-4 text-emerald-600" />
                <MapPinIcon className="size-4 text-emerald-600" />
                <LightningIcon className="size-4 text-emerald-600" />
                <DropIcon className="size-4 text-emerald-600" />
                <ThumbsUpIcon className="size-4 text-emerald-600" />
                <ChartBarIcon className="size-4 text-emerald-600" />
                <PenNibIcon className="size-4 text-emerald-600" />
                <MountainIcon className="size-4 text-emerald-600" />
                <WavesIcon className="size-4 text-emerald-600" />
              </InfiniteScroll>
              <InfiniteScroll
                direction="right"
                speed="fast"
                pauseOnHover={false}
              >
                <AirplaneIcon className="size-4 text-emerald-600" />
                <CameraIcon className="size-4 text-emerald-600" />
                <BellIcon className="size-4 text-emerald-600" />
                <FloppyDiskIcon className="size-4 text-emerald-600" />
                <CarrotIcon className="size-4 text-emerald-600" />
                <BluetoothIcon className="size-4 text-emerald-600" />
                <HamburgerIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
              </InfiniteScroll>
              <InfiniteScroll
                direction="left"
                speed="normal"
                pauseOnHover={false}
              >
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
              </InfiniteScroll>
              <InfiniteScroll
                direction="right"
                speed="slow"
                pauseOnHover={false}
              >
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
                <AlarmIcon className="size-4 text-emerald-600" />
              </InfiniteScroll>
            </div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900">Icons</h2>
              <p className="text-sm text-neutral-400">
                Collection of free and amazing icons for your projects.
              </p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] justify-center overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 px-4 py-8">
              <StackingWebsites />
            </div>
            <Link href="/resources/websites">
              <h2 className="font-medium text-neutral-900">Websites</h2>
              <p className="text-sm text-neutral-400">
                Some of the best websites I found by surfing the web.
              </p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100 px-4 py-8"></div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900">UI Kits</h2>
              <p className="text-sm text-neutral-400">Best UI kits.</p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] justify-center overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100">
              <div className="h-full w-2/3 bg-white shadow-lg shadow-emerald-700/30">
                {/* this is the article body */}
              </div>
            </div>
            <Link href="/resources/icons">
              <h2 className="font-medium text-neutral-900">Articles</h2>
              <p className="text-sm text-neutral-400">Helpful articles.</p>
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative mb-2 flex h-32 w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-lg border border-emerald-300/50 bg-emerald-100"></div>
            <Link href="/resources/learning">
              <h2 className="font-medium text-neutral-900">Learning</h2>
              <p className="text-sm text-neutral-400">Learning resources.</p>
            </Link>
          </FadeIn>
        </div>
      </Container>
    </FadeInStagger>
  );
}
