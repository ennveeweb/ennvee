'use client';

/**
 * Success stories section -- a mosaic grid: two large case-study tiles on
 * the left (the first one also carries the section heading near its top),
 * three smaller resource tiles stacked on the right, then a row of three
 * wide content-type tiles beneath. Every tile is a photo background with
 * a dark scrim and a caption.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/SuccessStoriesSection.tsx. Requires images at
 * the paths referenced below (swap for your own). Content is original
 * placeholder copy for "ennVee" -- replace with your real case studies
 * and resource links.
 */

type Tile = {
  title: string;
  img: string;
  href: string;
};

const CASE_STUDIES: Tile[] = [
  { title: 'Configure-price-quote rollout', img: '/images/oracle-cpq-implementation.webp', href: '#' },
  { title: 'Warehouse system implementation', img: '/images/shop_floor2-1-1.webp', href: '#' },
];

const RESOURCE_TILES: Tile[] = [
  { title: 'AI maturity assessment framework', img: '/images/AI-Maturity_assessment_framework_bg.webp', href: '#' },
  { title: 'Migrating legacy reporting to a modern BI stack', img: '/images/low-cost.webp', href: '#' },
  { title: 'Procurement application', img: '/images/industrial-robots-in-production-line-manufacturer-factory.jpg', href: '#' },
];

const CONTENT_TYPES: Tile[] = [
  { title: 'Blogs', img: '/images/casestudies_.webp', href: '#' },
  { title: 'Whitepapers', img: '/images/whitepapers.webp', href: '#' },
  { title: 'Datasheets', img: '/images/datasheets.webp', href: '#' },
];

function TileBackground({ img }: { img: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10203A]/85 via-[#10203A]/20 to-[#10203A]/50" />
    </>
  );
}

// The lead tile: section eyebrow + heading pinned near the top, a
// case-study caption near the bottom.
function LeadTile({ tile, heading, className = '' }: { tile: Tile; heading: string; className?: string }) {
  return (
    <a href={tile.href} className={['group relative flex flex-col justify-between overflow-hidden bg-[#10203A]', className].join(' ')}>
      <TileBackground img={tile.img} />
      <div className="relative z-10 p-6">
        <span className="mb-2 inline-flex items-center gap-2 text-sm text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          ennVee&rsquo;s
        </span>
        <h2 className="font-[Space_Grotesk,ui-sans-serif] text-3xl font-normal text-white sm:text-4xl">{heading}</h2>
      </div>
      <p className="relative z-10 p-6 text-center font-[Space_Grotesk,ui-sans-serif] text-xl font-medium text-white sm:text-2xl">
        {tile.title}
      </p>
    </a>
  );
}

// A plain caption tile: photo with a single centered/bottom caption.
function CaptionTile({ tile, className = '', center = false }: { tile: Tile; className?: string; center?: boolean }) {
  return (
    <a
      href={tile.href}
      className={[
        'group relative flex overflow-hidden bg-[#10203A]',
        center ? 'items-center justify-center' : 'items-end',
        className,
      ].join(' ')}
    >
      <TileBackground img={tile.img} />
      <p className="relative z-10 px-6 py-6 text-center font-[Space_Grotesk,ui-sans-serif] text-lg font-medium text-white sm:text-xl">
        {tile.title}
      </p>
    </a>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-[1fr_1fr_360px]">
        <LeadTile tile={CASE_STUDIES[0]} heading="Customer success stories" className="min-h-[420px] sm:min-h-[480px]" />
        <CaptionTile tile={CASE_STUDIES[1]} className="min-h-[420px] sm:min-h-[480px]" center />

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-1">
          {RESOURCE_TILES.map((tile) => (
            <CaptionTile key={tile.title} tile={tile} className="min-h-[155px]" center />
          ))}
        </div>
      </div>

      {/* Bottom row: content types */}
      <div className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-3">
        {CONTENT_TYPES.map((tile) => (
          <CaptionTile key={tile.title} tile={tile} className="min-h-[170px]" center />
        ))}
      </div>
    </section>
  );
}
