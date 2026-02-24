'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const buttonTypes = [
  {
    label: 'btn-sm',
    paddingX: 8, // px-2
    paddingY: 4, // py-1
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  {
    label: 'btn-md',
    paddingX: 12, // px-3
    paddingY: 8, // py-2
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  {
    label: 'btn-lg',
    paddingX: 18, // px-4.5
    paddingY: 12, // py-3
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
];

export default function MorphingButton() {
  const [index, setIndex] = useState(0);
  const active = buttonTypes[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % buttonTypes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full items-center justify-around px-6">
      <motion.button
        className="text-primary mr-12 text-base font-semibold"
        animate={{
          paddingLeft: active.paddingX,
          paddingRight: active.paddingX,
          paddingTop: active.paddingY,
          paddingBottom: active.paddingY,
          borderRadius: active.borderRadius,
          backgroundColor: active.backgroundColor,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      >
        Submit
      </motion.button>

      <div className="flex flex-col gap-4">
        {buttonTypes.map((btn, i) => (
          <div
            key={btn.label}
            className={`text-lg font-medium text-white transition-all ${
              i === index ? 'scale-105 text-white opacity-100' : 'opacity-50'
            }`}
          >
            {btn.label}
          </div>
        ))}
      </div>
    </div>
  );
}
