'use client';

import { useEffect, useState } from 'react';

/**
 * Consulting services (auto-scrolling list)
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Left column: a large two-tone heading (sticky on desktop) with an
 * "Explore more" pill button. Right column: a vertical marquee -- the row
 * list scrolls upward continuously and loops seamlessly, fading out at
 * the top/bottom edges via a CSS mask. Pauses on hover so it's readable,
 * and falls back to a plain manually-scrollable list (no animation) for
 * prefers-reduced-motion, since an unstoppable auto-scroll is exactly the
 * kind of motion that setting is meant to opt out of.
 *
 * Drop in e.g. components/ConsultingServicesList.tsx. Use in place of the
 * plain "Consulting services" grid in app/data-and-ai/page.tsx.
 */

const CONSULTING_SERVICES = [
  {
    title: 'Architecture & advisory',
    tagline: 'Aligning technology with the business',
    description:
      'We shape a technical architecture around your actual objectives -- integration, scalability, and security included from the start, not bolted on later.',
  },
  {
    title: 'Technology option analysis',
    tagline: 'Evaluating what actually fits',
    description:
      'A structured read on your current systems, where the gaps are, and how the realistic options compare.',
  },
  {
    title: 'Strategic roadmap & investment prioritization',
    tagline: 'Turning strategy into a sequence of decisions',
    description:
      'We translate business goals into a prioritized roadmap -- the initiatives, the order, and the case for each investment.',
  },
  {
    title: 'Data monetization',
    tagline: 'Turning data into value',
    description:
      'Unlocking business value by developing analytics-driven strategies that convert organizational data into insights and new revenue opportunities.',
  },
  {
    title: 'AI transformation & Center of Excellence',
    tagline: 'Building the foundation for enterprise-scale AI',
    description:
      'Establishing AI Centers of Excellence by leveraging strategic advisory, technology assessment, and roadmap planning to drive innovation and governance.',
  },
  {
    title: 'AI governance & responsible AI',
    tagline: 'Ensuring ethical and compliant AI adoption',
    description:
      'Implementing governance frameworks that mitigate risk, build trust, and ensure responsible, scalable, and compliant AI use across the enterprise.',
  },
];

const fadeMask = 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)';
const SCROLL_SECONDS = 32; // lower = faster loop

function ServiceRow({ service, isFirst }: { service: (typeof CONSULTING_SERVICES)[number]; isFirst: boolean }) {
  return (
    <div
      className={[
        'grid grid-cols-1 gap-2 py-8 sm:grid-cols-[260px_1fr] sm:gap-10',
        isFirst ? '' : 'border-t border-[#E2E8F0]',
      ].join(' ')}
    >
      <h3 className="font-[Space_Grotesk,ui-sans-serif] text-xl font-semibold leading-snug text-[#10203A]">
        {service.title}
      </h3>
      <div>
        <p className="text-lg italic text-[#334155]">{service.tagline}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-[#64748B]">{service.description}</p>
      </div>
    </div>
  );
}

export default function ConsultingServicesList() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <style>{`
        @keyframes consulting-marquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
        {/* Left: sticky heading + CTA */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-[Space_Grotesk,ui-sans-serif] text-4xl font-semibold leading-tight tracking-tight text-[#10203A]">
            Consulting
            <br />
            <span className="text-[#17A9A0]">Services</span>
          </h2>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full bg-[#5FB8C9] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4CA5B6]"
          >
            Explore more
          </a>
        </div>

        {/* Right: auto-scrolling, edge-faded list */}
        {reducedMotion ? (
          // Reduced-motion fallback: plain manually-scrollable list, no animation.
          <div
            className="max-h-[560px] overflow-y-auto py-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
          >
            {CONSULTING_SERVICES.map((service, i) => (
              <ServiceRow key={service.title} service={service} isFirst={i === 0} />
            ))}
          </div>
        ) : (
          <div
            className="h-[560px] overflow-hidden"
            style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
          >
            <div
              className="hover:[animation-play-state:paused] motion-reduce:animate-none"
              style={{ animation: `consulting-marquee ${SCROLL_SECONDS}s linear infinite` }}
            >
              {/* Content rendered twice back-to-back for a seamless loop:
                  translating the track up by exactly 50% of its height
                  (== the height of one full copy) snaps invisibly back to
                  the start. */}
              {CONSULTING_SERVICES.map((service, i) => (
                <ServiceRow key={`a-${service.title}`} service={service} isFirst={i === 0} />
              ))}
              {CONSULTING_SERVICES.map((service, i) => (
                <ServiceRow key={`b-${service.title}`} service={service} isFirst={i === 0} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}