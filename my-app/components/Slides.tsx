'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { Data } from '@/app/page';

type Props = {
  sliderData: Data[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export default function Slides({ sliderData, currentIndex, onSelect }: Props) {
  // Show every slide except the active one, keeping each item's *original*
  // index so clicking it calls onSelect with the right slide.
  const thumbnails = sliderData
    .map((slide, index) => ({ slide, index }))
    .filter(({ index }) => index !== currentIndex);

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4">
      {/*
        mode="popLayout" removes an exiting item from the flex flow
        immediately so the remaining thumbnails can animate into their new
        positions right away, instead of waiting on it and then jumping.
        `layout` on each button is what makes that reflow animate (FLIP)
        rather than snap. initial={false} skips replaying the entrance
        animation for items that are already there on first render.
      */}
      <AnimatePresence mode="popLayout" initial={false}>
        {thumbnails.map(({ slide, index }) => (
          <motion.button
            key={slide.title}
            layout
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to ${slide.title}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative h-20 w-28 shrink-0 overflow-hidden rounded-sm text-left transition-opacity hover:opacity-80 sm:h-24 sm:w-36"
          >
            {isVideo(slide.img) ? (
              <video key={slide.img} muted playsInline preload="metadata" className="h-full w-full object-cover">
                <source src={slide.img} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={slide.img} alt={slide.title} className="h-full w-full object-cover" />
            )}
            <div className="absolute inset-0 bg-black/30" />
            <p className="absolute bottom-1.5 left-2 right-2 truncate text-xs font-medium text-white sm:text-sm">
              {slide.title}
            </p>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}