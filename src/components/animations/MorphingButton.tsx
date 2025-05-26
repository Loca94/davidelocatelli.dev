'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const getRandom = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export default function MorphingButton() {
  const [styles, setStyles] = useState({
    paddingX: 16,
    paddingY: 8,
    borderRadius: 8,
    backgroundColor: '#1f2937', // neutral-800
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStyles({
        paddingX: getRandom([16, 24, 32]), // px-4/6/8
        paddingY: getRandom([8, 12, 16]), // py-2/3/4
        borderRadius: getRandom([0, 4, 8, 24]), // none, sm, md, 2xl
        backgroundColor: getRandom([
          '#1f2937', // neutral-800
          '#1e40af', // blue-800
          '#065f46', // emerald-800
          '#9f0712', // red-800
        ]),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <motion.button
        className="text-base font-semibold text-white"
        animate={{
          paddingLeft: styles.paddingX,
          paddingRight: styles.paddingX,
          paddingTop: styles.paddingY,
          paddingBottom: styles.paddingY,
          borderRadius: styles.borderRadius,
          backgroundColor: styles.backgroundColor,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      >
        Click me!
      </motion.button>
    </div>
  );
}
