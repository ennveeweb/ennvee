/**
 * Expertise section (ennVee)
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * A two-part "what we do" section: a dark grid of platform/technology
 * cards on one side, a heading + certification line on the other, and an
 * overlapping highlight card carrying the descriptive paragraph -- styled
 * to match the rest of the ennVee design system (navy / teal / gold,
 * Space Grotesk + Inter).
 *
 * Server component -- no hooks, no 'use client' needed. Drop this file in
 * components/ExpertiseSection.tsx and render <ExpertiseSection /> anywhere
 * in app/page.tsx.
 */

const TECHNOLOGIES = [
  'Cloud ERP',
  'Enterprise suite',
  'Distribution platform',
  'Cloud CRM',
  'Cloud infrastructure',
  'Automation',
];

export default function ExpertiseSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left: dark platform grid */}
        <div className="relative rounded-sm bg-[#233E55] p-8 pb-16 sm:p-10 sm:pb-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech}
                className="flex min-h-[84px] items-center justify-center rounded-sm border border-white/20 p-4 text-center text-sm font-medium text-white transition-colors hover:border-[#17A9A0]/70 hover:bg-white/5"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right: eyebrow, heading, certification line */}
        <div className="pt-1">
          <span className="inline-flex items-center gap-2 rounded-sm bg-[#233E55] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17A9A0]" aria-hidden="true" />
            What we do
          </span>

          <h2 className="mt-5 font-[Space_Grotesk,ui-sans-serif] text-3xl font-medium leading-tight tracking-tight text-[#10203A] sm:text-4xl">
            Enterprise application expertise, built in
          </h2>

          <p className="mt-5 text-lg font-semibold leading-snug text-[#233E55]">
            ennVee is an ISO 9001:2015 and ISO/IEC 27001:2022 certified delivery partner.
          </p>
        </div>
      </div>

      {/* Overlapping highlight card -- pulled up over the panel's bottom edge on sm+ */}
      <div className="relative z-10 mt-6 rounded-sm border border-[#E8A33D]/25 bg-[#FBF1DF] p-8 shadow-[0_16px_32px_-16px_rgba(16,32,58,0.25)] sm:-mt-14 sm:ml-10 sm:mr-0 lg:mr-24">
        <p className="text-[15px] leading-relaxed text-[#233E55]">
          ennVee helps enterprise teams modernize the systems at the center of their operations.
          We pair platform expertise with a consultative delivery model, so every migration is
          scoped around how your teams actually work, not a generic template. The result: faster
          time to value, systems that scale with the business, and a partner who stays engaged long
          after go-live.
        </p>
      </div>
    </section>
  );
}