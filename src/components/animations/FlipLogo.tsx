'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Logo } from '@/components/Logos';
import AboutPhoto from '@/images/about-photo.webp';

export function FlipLogo() {
  const isAboutPage = usePathname() === '/about';
  const shouldReduceMotion = useReducedMotion();

  // initial={false}: the logo is visible in the server HTML and only animates on route changes
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={isAboutPage ? 'photo-container' : 'svg-container'}
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : -30,
          x: shouldReduceMotion ? 0 : 20,
          filter: 'blur(8px)',
          scale: shouldReduceMotion ? 1 : 1.5,
          position: 'absolute',
          transition: {
            duration: 0.225,
            ease: 'easeInOut',
          },
        }}
      >
        {isAboutPage ? (
          <Image
            className="rounded-full transition-opacity duration-300 hover:opacity-80"
            src={AboutPhoto}
            alt="Davide Locatelli"
            width={48}
            height={48}
            priority
          />
        ) : (
          <Logo className="group h-12 w-12 transition-all duration-300 ease-in-out" />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
