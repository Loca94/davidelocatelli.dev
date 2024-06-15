'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TriangleIcon } from '../Icons';

const navLinks = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'qualcosa di veramente lungo', href: '#services' },
  { id: 4, label: 'Contact', href: '#contact' },
];

const AnimatedLinks = () => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const [coords, setCoords] = React.useState({ top: 0, height: 0, elWidth: 0 });

  const handleMouseEnter = (event, id) => {
    const rect = event.target.getBoundingClientRect();
    const startingPoint = document
      .getElementById('navigation')
      ?.getBoundingClientRect().top;
    setCoords({
      top: rect.top - startingPoint!,
      height: rect.height,
      elWidth: rect.width,
    });
    setHovered(id);
  };

  return (
    <nav id="navigation" className="relative bg-white">
      <ul className="m-0 list-none p-0">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onMouseEnter={(e) => (
              setHovered(true), handleMouseEnter(e, link.id)
            )}
            onMouseLeave={() => setHovered(true)}
            className="relative z-10 my-4 w-fit"
          >
            <a href={link.href} className="relative block w-fit text-gray-800">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {hovered !== null && (
        <motion.span
          className="absolute -left-3 z-0 rounded-full border-2 border-emerald-200 bg-emerald-200/20"
          initial={{
            opacity: 0,
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: 1,
            top: coords.top - 3,
            height: coords.height + 6,
            width: coords.elWidth + 24,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            filter: 'blur(8px)',
          }}
          transition={{ duration: 0.3 }}
        />

        // <motion.div
        //   className="absolute -left-4 z-0"
        //   initial={false}
        //   animate={{
        //     top: coords.top + 5,
        //     height: coords.height,
        //     width: coords.elWidth,
        //   }}
        //   transition={{ duration: 0.3 }}
        // >
        //   <TriangleIcon className="h-3 w-3 rotate-90 text-emerald-400" />
        // </motion.div>
      )}
    </nav>
  );
};

export default AnimatedLinks;
