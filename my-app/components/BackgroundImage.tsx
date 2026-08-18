'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Data } from '@/app/page';

type Props = {
  activeSlide: Data;
};

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export default function BackgroundImage({ activeSlide }: Props) {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeSlide.img}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full"
        >
          {isVideo(activeSlide.img) ? (
            <video
              key={activeSlide.img}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src={activeSlide.img} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={activeSlide.img} alt={activeSlide.title} className="h-full w-full object-cover" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Readability scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
    </div>
  );
}