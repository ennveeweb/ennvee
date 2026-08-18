'use client';

import { useRef } from 'react';

/**
 * Featured showcases (carousel)
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * A scroll-snap carousel: a large two-line heading on the left, and cards
 * on the right with circular prev/next buttons floating at the track's
 * edges. Structural layout only -- icon illustrations are original flat
 * SVGs built for Meridian, not reproductions of any source site's artwork.
 *
 * Drop in e.g. components/FeaturedShowcases.tsx. Use in place of the
 * plain "Featured products" grid in app/data-and-ai/page.tsx.
 */

type Product = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ArchiveIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20" aria-hidden="true">
      <rect x="28" y="52" width="64" height="40" rx="4" fill="#F6F8FB" stroke="#233E55" strokeWidth="2.5" />
      <rect x="28" y="52" width="64" height="14" rx="4" fill="#233E55" />
      <path
        d="M60 22c14 0 26 11 26 25 0 4-1 8-2 11h-48c-1-3-2-7-2-11 0-14 12-25 26-25Z"
        fill="#E8F5F4"
        stroke="#17A9A0"
        strokeWidth="2.5"
      />
      <path d="M52 78h16M52 84h10" stroke="#17A9A0" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20" aria-hidden="true">
      <rect x="34" y="26" width="52" height="68" rx="5" fill="#F6F8FB" stroke="#233E55" strokeWidth="2.5" />
      <path d="M44 44h32M44 56h32M44 68h20" stroke="#233E55" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="86" cy="82" r="18" fill="#FBF1DF" stroke="#E8A33D" strokeWidth="2.5" />
      <path d="M86 74v8l6 4" stroke="#E8A33D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpenseIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-20 w-20" aria-hidden="true">
      <rect x="30" y="24" width="46" height="72" rx="4" fill="#F6F8FB" stroke="#233E55" strokeWidth="2.5" />
      <path d="M40 40h26M40 50h26M40 60h18" stroke="#233E55" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="82" cy="78" r="20" fill="#E8F5F4" stroke="#17A9A0" strokeWidth="2.5" />
      <path d="M76 78h12M82 72v12" stroke="#17A9A0" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const PRODUCTS: Product[] = [
  {
    title: 'Archive & optimize',
    description:
      'An enterprise data lifecycle solution built to handle growing complexity across ERP ecosystems -- archive, purge, migrate, and govern data through a controlled, policy-driven framework.',
    icon: <ArchiveIcon />,
  },
  {
    title: 'Finance automation',
    description:
      'Automate order-to-cash and procure-to-pay work end to end, with policy checks and exception handling built into every step.',
    icon: <AutomationIcon />,
  },
  {
    title: 'Expense manager',
    description:
      'Capture, approve, and reconcile spend faster -- automated submissions, policy enforcement, and fewer manual errors across the whole process.',
    icon: <ExpenseIcon />,
  },
];

function NavButton({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      onClick={onClick}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#17A9A0] text-white shadow-[0_8px_16px_-8px_rgba(23,169,160,0.6)] transition-colors hover:bg-[#14938c]"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {direction === 'prev' ? (
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function FeaturedShowcases() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-6">
        {/* Heading */}
        <div>
          <h2 className="font-[Space_Grotesk,ui-sans-serif] text-4xl font-semibold leading-tight tracking-tight text-[#10203A]">
            Featured
            <br />
            <span className="text-[#17A9A0]">Showcases</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-3">
          <div className="hidden shrink-0 lg:block">
            <NavButton direction="prev" onClick={() => scrollByCard(-1)} />
          </div>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PRODUCTS.map((product) => (
              <div
                key={product.title}
                className="w-[85%] shrink-0 snap-center rounded-2xl bg-white p-8 text-center shadow-[0_20px_48px_-24px_rgba(16,32,58,0.25)] sm:w-[60%] lg:w-[calc(50%-10px)]"
              >
                <h3 className="font-[Space_Grotesk,ui-sans-serif] text-xl font-semibold text-[#10203A]">
                  {product.title}
                </h3>
                <div className="my-6 flex justify-center">{product.icon}</div>
                <p className="text-[15px] leading-relaxed text-[#64748B]">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="hidden shrink-0 lg:block">
            <NavButton direction="next" onClick={() => scrollByCard(1)} />
          </div>
        </div>

        {/* Mobile nav buttons, below the track */}
        <div className="flex justify-center gap-3 lg:hidden">
          <NavButton direction="prev" onClick={() => scrollByCard(-1)} />
          <NavButton direction="next" onClick={() => scrollByCard(1)} />
        </div>
      </div>
    </section>
  );
}
