'use client';

import { motion } from 'motion/react';

const letters = ['H', 'E', 'L', 'L', 'O'];

const pumpDuration = 0.9;
const stagger = 0.22;
const meltDuration = 0.8;
const settlePause = 0.6;

function HelloPump() {
  const totalPumpTime = letters.length * stagger + pumpDuration;

  const loopDuration = meltDuration + totalPumpTime + settlePause + 0.8; // bold return duration

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <motion.h1
        className="flex text-7xl tracking-tight"
        initial={{ fontVariationSettings: '"wght" 800' }}
        animate={{
          fontVariationSettings: [
            '"wght" 800', // start bold
            '"wght" 200', // melt to thin
            '"wght" 200', // hold thin during pumps
            '"wght" 800', // return bold
          ],
        }}
        transition={{
          duration: loopDuration,
          times: [
            0,
            meltDuration / loopDuration,
            (meltDuration + totalPumpTime + settlePause) / loopDuration,
            1,
          ],
          ease: [0.65, 0, 0.35, 1],
          repeat: Infinity,
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              fontVariationSettings: ['"wght" 200', '"wght" 800', '"wght" 400'],
            }}
            transition={{
              duration: pumpDuration,
              delay: meltDuration + index * stagger,
              ease: [0.6, 0, 0.4, 1],
              repeat: Infinity,
              repeatDelay:
                loopDuration - pumpDuration - (meltDuration + index * stagger),
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default function TextPage() {
  return (
    <div className="flex min-h-screen items-center justify-center text-red-600">
      <HelloPump />
    </div>
  );
}
