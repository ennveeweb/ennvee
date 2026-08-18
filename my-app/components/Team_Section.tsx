'use client';

/**
 * Team section (redesigned) -- full-bleed photo with a navy gradient
 * scrim, all copy set directly over the image in white, inline stat
 * numbers instead of stacked boxes, and a floating row of glass-effect
 * capability tiles overlapping the bottom edge of the photo.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/TeamSection.tsx. Requires a background image at
 * public/images/team-photo.jpg (swap the path for your own). Content
 * below is original placeholder copy for "ennVee" -- replace with your
 * real numbers and description.
 */

const STATS = [
  { value: '12+', label: 'Years avg. ERP experience' },
  { value: '10+', label: 'Years avg. cloud experience' },
  { value: '25+', label: 'Years avg. legacy ERP experience' },
];

const CAPABILITIES = [
  { bold: 'Oracle', rest: 'certified across 10+ capability groups' },
  { bold: 'Certified', rest: 'project managers, security advisors, scrum masters' },
  { bold: '10+ / 40+', rest: 'domains and sub-domains of expertise' },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden pb-16">
      <div className="relative min-h-[640px] w-full sm:min-h-[560px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/team_bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10203A] via-[#10203A]/75 to-[#10203A]/20" />

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 py-16 sm:min-h-[560px]">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#17A9A0]" />
              People
            </span>

            <h2 className="mt-6 font-[Space_Grotesk,ui-sans-serif] text-4xl font-normal text-white sm:text-5xl">
              The ennVee team
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-white/80">
              ennVee&rsquo;s strength is in our people. Our consultants bring deep expertise in
              translating business requirements into working solutions, and in deploying and
              optimizing them once they&rsquo;re live -- pairing technical depth with clear
              communication so every engagement stays collaborative and transparent from kickoff
              through go-live.
            </p>

            <div className="mt-9 flex flex-wrap gap-8">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="relative pl-6 first:pl-0">
                  {i !== 0 && <span className="absolute left-0 top-1 h-8 w-px bg-white/20" />}
                  <p className="font-[Space_Grotesk,ui-sans-serif] text-3xl font-medium text-[#17A9A0]">
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[9rem] text-xs leading-snug text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating glass tiles, overlapping the bottom edge of the photo */}
      <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <div
              key={item.rest}
              className="rounded-sm border border-[#E2E8F0] bg-white/90 p-5 shadow-[0_16px_32px_-16px_rgba(16,32,58,0.25)] backdrop-blur-sm"
            >
              <p className="text-sm leading-relaxed text-[#334155]">
                <span className="font-semibold text-[#10203A]">{item.bold}</span> {item.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}