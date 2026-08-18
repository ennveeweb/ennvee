/**
 * "Why us" section (redesign) -- split layout: an image with an offset
 * stat callout card on one side, heading + proof points + CTA on the
 * other. Stats render as an inline strip (node-line dividers, matching
 * the hero's stat strip) and differentiators as a chip row, instead of
 * the previous version's blocky 2x4 dark tile grid inside an overlay
 * card on a full-bleed photo.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Server component -- no hooks, no 'use client' needed. Drop in e.g.
 * components/WhyUsSection.tsx. Requires an image at public/images/why-us.jpg
 * (swap the path for your own). Content is original placeholder copy for
 * "ennVee" -- replace with your real numbers, labels, and paragraph.
 */

const STATS = [
  { value: '600+', label: 'Consultants' },
  { value: '500+', label: 'Customers' },
  { value: '25+', label: 'Countries' },
  { value: '4', label: 'Offices' },
];

const DIFFERENTIATORS = [
  'Industry-specific solutioning',
  'Expertise portfolio',
  'Proven success',
  'Accelerating toolsets',
];

// Shared signature motif: a small connector-node divider, matching the
// one used in the hero's stat strip and elsewhere across the site.
function NodeDivider({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 8 24" fill="none" aria-hidden="true">
      <line x1="4" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="4" r="2.5" fill="currentColor" />
      <circle cx="4" cy="20" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: image with an offset stat callout */}
                <div className="pt-8 sm:pt-0 lg:pt-10">
          <span className="inline-flex items-center gap-2 rounded-sm bg-[#233E55] px-4 py-2 text-sm text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17A9A0]" aria-hidden="true" />
            Why ennVee
          </span>

          <h2 className="mt-6 font-[Space_Grotesk,ui-sans-serif] text-3xl font-medium leading-tight tracking-tight text-[#10203A] sm:text-4xl">
            Two decades of building lasting relationships with our clients
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-[#64748B]">
            As an enterprise technology partner, we focus on measurable outcomes for the teams we
            work with. Our platform expertise and delivery model are built to modernize IT
            landscapes and applications for businesses across industries and regions.
          </p>

          {/* Stat strip */}
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-6 border-y border-[#E2E8F0] py-6">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i !== 0 && <NodeDivider className="hidden h-6 w-2 text-[#CBD5E1] sm:block" />}
                <div>
                  <p className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium text-[#10203A]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-sm text-[#64748B]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Differentiator chips */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {DIFFERENTIATORS.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#E2E8F0] bg-[#F6F8FB] px-4 py-2 text-sm text-[#334155]"
              >
                {label}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full bg-[#E8A33D] px-6 py-3 text-sm font-medium text-[#10203A] transition-colors hover:bg-[#dd9527]"
          >
            Know more
          </a>
        </div>
        

        {/* Right: heading, proof points, CTA */}
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[6/5] lg:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about_bg.webp"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-6 right-6 rounded-sm bg-[#233E55] p-6 shadow-[0_20px_40px_-20px_rgba(16,32,58,0.4)] sm:left-8 sm:right-auto sm:w-64">
            <p className="font-[Space_Grotesk,ui-sans-serif] text-3xl font-medium text-white">20+ years</p>
            <p className="mt-1 text-sm text-[#CBD5E1]">Building lasting client relationships</p>
          </div>
        </div>

      </div>
    </section>
  );
}