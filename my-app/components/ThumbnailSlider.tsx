'use client';

import { Righteous } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import BackgroundImage from '@/components/BackgroundImage';
import Slides from '@/components/Slides';
import SlideInfo from '@/components/SlideInfo';
import Controls from '@/components/Controls';

const inter = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export default function Home() {
  // Single source of truth: every other piece (background, text, thumbnail
  // strip, controls) derives from this instead of keeping its own copy of
  // "which slide is active" -- that's what caused the thumbnails and the
  // slider to fall out of sync before.
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToSlide = (nextIndex: number) => {
    const total = sliderData.length;
    setCurrentIndex(((nextIndex % total) + total) % total);
  };

  const activeSlide = sliderData[currentIndex];

  return (
    <main
      className={`${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage activeSlide={activeSlide} />

        <div className="absolute z-20 h-full w-full ">
          <div className="flex h-full w-full flex-col md:grid md:grid-cols-10 px-10">
            <div className="col-span-5 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo activeSlide={activeSlide} />
            </div>
            <div className="col-span-5 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides sliderData={sliderData} currentIndex={currentIndex} onSelect={goToSlide} />
              <Controls sliderData={sliderData} currentIndex={currentIndex} onSelect={goToSlide} />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData: Data[] = [
  {
    img: '/images/Reinvention.mp4',
    location: '',
    description:
      'Enabling competitive advantage and growth with cloud infrastructure, cloud applications, industry-specific solutions, advanced technologies and beyond.',
    title: 'Digital Transformation',
  },
  {
    img: '/images/chatbot.mp4',
    title: 'Digital Core Capabilities with Data & AI',
    description: "Delivering tangible outcomes by augmenting current processes and capabilities with deeper digital solutions.",
    location: ' ',
  },
  {
    img: '/images/Application_Banner.mp4',
    title: 'Applications Modernization',
    description: 'Strategically streamlining technology platforms through the adoption of next-gen applications for enhanced business performance.',
    location: ' ',
  },
  {
    img: '/images/Logistics_SCM.mp4',
    title: 'IT Infrastructure Resiliency',
    description: 'Enhancing agility and user experience, while mitigating disruptions through comprehensive solutions, ensuring high-level protection for critical systems and data.',
    location: ' ',
  },
  {
    img: '/images/Medicine_hud.mp4',
    title: 'Business Applications Management',
    description: 'Supporting through a proactive stance by staying on top of threats and problems through problem identification, root-cause analysis and resolution.',
    location: ' ',
  },
];