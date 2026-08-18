'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Data } from '@/app/page';

type Props = {
  activeSlide: Data;
};

const textVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.08, ease: 'easeOut' },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } },
};

export default function SlideInfo({ activeSlide }: Props) {
  return (
    <AnimatePresence mode="wait">
      <div key={activeSlide.title} className="max-w-md">
        {activeSlide.location && (
          <motion.p
            custom={0}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-2 text-sm uppercase tracking-[0.2em] text-white/70"
          >
            {activeSlide.location}
          </motion.p>
        )}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-4xl font-normal leading-[1.05] sm:text-5xl md:text-6xl"
        >
          {activeSlide.title}
        </motion.h1>
        <motion.p
          custom={2}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {activeSlide.description}
        </motion.p>
      </div>
    </AnimatePresence>
  );
}