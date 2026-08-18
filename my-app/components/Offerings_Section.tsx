'use client';

/**
 * Offerings section -- a dark sidebar intro panel next to a 2x3 grid of
 * icon-headed offering cards (each with a bold sub-heading and a short
 * description line).
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/OfferingsSection.tsx. Content below is original
 * placeholder copy for "ennVee" -- replace with your real offerings,
 * numbers, and descriptions. Icons are plain inline SVG so there's no
 * external icon-pack dependency; swap for your preferred icon set if you
 * have one (e.g. lucide-react) by replacing the <svg> in each OFFERINGS
 * entry.
 */

type Offering = {
  title: string;
  subheading: string;
  description: string;
  icon: React.ReactNode;
};

function CloudIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 18h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6-1.5A4 4 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9.5 13.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 8.2V12M12 12L6 15.8M12 12l6 3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function AppsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="15" r="2.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M17 12.4V11M17 19v-1.4M14.4 15H13M21 15h-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ManagedIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c-1.5 2-4 2.6-6 2.4 0 6 2.2 10 6 12.6 3.8-2.6 6-6.6 6-12.6-2 .2-4.5-.4-6-2.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9.5 12l1.8 1.8 3.2-3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OptimizationIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20l6-6M14 10l6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 20l8-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7" cy="17" r="1.4" fill="currentColor" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 6V4.6M9 13.4V12M6 9H4.6M13.4 9H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16 13.6V13M16 19v-.6M13.6 16H13M19 16h-.6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

const OFFERINGS: Offering[] = [
  {
    title: 'Cloud enablement',
    subheading: 'Legacy-to-cloud migration and support',
    description: 'Delivering a competitive advantage through modern cloud infrastructure.',
    icon: <CloudIcon />,
  },
  {
    title: 'Technology infrastructure',
    subheading: 'Reliability and observability services',
    description: 'Delivering transformation outcomes through optimization, governance, and best practices.',
    icon: <InfraIcon />,
  },
  {
    title: 'Applications & modernization',
    subheading: 'Implementation, consolidation, integration',
    description: 'Setting a modern technology foundation for what comes next.',
    icon: <AppsIcon />,
  },
  {
    title: 'Managed services',
    subheading: 'Functional, technical & infrastructure support',
    description: 'Ensuring business continuity and sustained outcomes.',
    icon: <ManagedIcon />,
  },
  {
    title: 'Business optimization solutions',
    subheading: 'Process-improvement and platform solutions',
    description: 'Data-driven optimization and problem-solving solutions.',
    icon: <OptimizationIcon />,
  },
  {
    title: 'Automation',
    subheading: 'AI, RPA and analytics-based solutions',
    description: 'Leveraging advanced technologies for improved digital outcomes.',
    icon: <AutomationIcon />,
  },
];

export default function OfferingsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr]">
        {/* Left: dark intro panel */}
        <div className="bg-[#2C4A63] p-8">
          <span className="inline-flex items-center gap-2 text-sm text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            ennVee&rsquo;s
          </span>
          <h2 className="mt-3 font-[Space_Grotesk,ui-sans-serif] text-4xl font-normal text-white">Offerings</h2>

          <p className="mt-6 text-sm leading-relaxed text-white/85">
            As a certified enterprise technology partner with two decades of experience, ennVee
            has driven measurable outcomes for our clients day in and day out.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            We support a high-value IT estate for our clients and play a central role in their
            technology decisions -- through consulting, application delivery and modernization,
            optimization solutions, infrastructure management, and ongoing support.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full border border-white/60 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#2C4A63]"
          >
            Know more
          </a>
        </div>

        {/* Right: offerings grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((offering) => (
            <div key={offering.title}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-[#2C4A63]">{offering.icon}</span>
                <h3 className="font-[Space_Grotesk,ui-sans-serif] text-xl font-medium leading-snug text-[#1E293B]">
                  {offering.title}
                </h3>
              </div>
              <div className="mt-3 border-t border-[#E2E8F0] pt-3">
                <p className="text-[15px] font-semibold leading-snug text-[#1E293B]">{offering.subheading}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-[#64748B]">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
