'use client';

import type { Data } from '@/app/page';

type Props = {
  sliderData: Data[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Controls({ sliderData, currentIndex, onSelect }: Props) {
  return (
    <div className="mt-6 flex items-center gap-4">
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => onSelect(currentIndex - 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="flex items-center gap-1.5">
        {sliderData.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to ${slide.title}`}
            aria-current={i === currentIndex}
            onClick={() => onSelect(i)}
            className={[
              'h-1.5 rounded-full transition-all',
              i === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70',
            ].join(' ')}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => onSelect(currentIndex + 1)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}