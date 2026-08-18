'use client';

/**
 * Innovations section (redesigned) -- two-column comparison of proprietary
 * accelerators vs. products, reimagined as indexed, hoverable item cards
 * instead of a plain underlined list.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/InnovationsSection.tsx. Content below is
 * original placeholder copy and tool/product names for "ennVee" --
 * replace with your real accelerators and products.
 */

type Item = {
  name: string;
  tagline: string;
  // tag: string;
};

const ACCELERATORS: Item[] = [
  { name: 'AutoPatch', tagline: 'Cloud ERP upgrade automation tool'},
  { name: 'WatchPoint', tagline: 'Proactive system monitoring tool' },
  { name: 'MigrateIQ', tagline: 'Legacy reporting migration tool' },
];

const PRODUCTS: Item[] = [
  { name: 'Pulse', tagline: 'Sales force automation solution'  },
  { name: 'Source', tagline: 'Procurement solution'  },
  { name: 'Storefront', tagline: 'E-commerce solution' },
];

function ItemCard({ item, index }: { item: Item; index: number }) {
  return (
    <a
      href="#"
      className="group flex items-start gap-4 rounded-sm border-l-2 border-transparent px-3 py-5 transition-colors hover:border-[#17A9A0] hover:bg-[#F6F8FB]"
    >
      <span className="mt-1 font-[Space_Grotesk,ui-sans-serif] text-sm text-[#94A3B8] transition-colors group-hover:text-[#17A9A0]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2.5">
          <h4 className="font-[Space_Grotesk,ui-sans-serif] text-lg font-medium text-[#1E293B]">{item.name}</h4>
          <span className="rounded-full border border-[#E2E8F0] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[#64748B]">
            {item.tag}
          </span>
        </div>
        <p className="mt-1 text-sm text-[#64748B]">{item.tagline}</p>
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="mt-2 shrink-0 text-[#94A3B8] transition-all group-hover:translate-x-1 group-hover:text-[#17A9A0]"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function Column({
  eyebrow,
  heading,
  description,
  items,
}: {
  eyebrow?: string;
  heading: string;
  description: string;
  items: Item[];
}) {
  return (
    <div>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-sm bg-[#2C4A63] px-4 py-2 text-sm text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          {eyebrow}
        </span>
      )}
      <h3 className="mt-5 font-[Space_Grotesk,ui-sans-serif] text-3xl font-normal text-[#1E293B]">{heading}</h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#64748B]">{description}</p>

      <div className="mt-6 divide-y divide-[#E2E8F0]">
        {items.map((item, i) => (
          <ItemCard key={item.name} item={item} index={i} />
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2C4A63] px-6 py-2.5 text-sm font-medium text-[#2C4A63] transition-colors hover:bg-[#2C4A63] hover:text-white"
      >
        Explore more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

export default function InnovationsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <span className="inline-flex items-center gap-2 rounded-sm bg-[#2C4A63] px-4 py-2 text-sm text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        Development
      </span>
      <h2 className="mt-5 font-[Space_Grotesk,ui-sans-serif] text-4xl font-normal text-[#1E293B]">
        Innovations at ennVee
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-[#E2E8F0]">
        <div className="lg:pr-16">
          <Column
            heading="Proprietary accelerators"
            description="ennVee-built tools that help consulting teams move faster, with fewer errors and less disruption to the systems they touch."
            items={ACCELERATORS}
          />
        </div>
        <div className="lg:pl-16">
          <Column
            heading="Products"
            description="Built from a deep understanding of industry challenges, ennVee's products are designed to deliver value in a changing business landscape."
            items={PRODUCTS}
          />
        </div>
      </div>
    </section>
  );
}
