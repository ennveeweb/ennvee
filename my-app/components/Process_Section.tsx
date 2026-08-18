'use client';

/**
 * Process / methodology section -- eyebrow tag, heading, subtext, then a
 * 2x3 grid of icon-headed cards with an alternating checkerboard
 * background (cream / transparent) across the two rows.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/ProcessSection.tsx. Content below is original
 * placeholder copy for "ennVee" -- replace with your real methodology
 * steps and descriptions. Icons are plain inline SVG so there's no new
 * dependency; swap for your preferred icon set if you have one.
 */

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ReleasesIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 3v9M12 12l8-4.5M12 12l-8-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function GovernanceIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4l8 3.6v5.2c0 4-3.2 6.8-8 7.2-4.8-.4-8-3.2-8-7.2V7.6L12 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 8v9M8 10.5l4-2.5 4 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChangeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 6l1.6 1.6L17 9.2M18.6 7.6H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3c-1.5 2-4 2.6-6 2.4 0 6 2.2 10 6 12.6 3.8-2.6 6-6.6 6-12.6-2 .2-4.5-.4-6-2.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 19c.5-3.2 3-5 6-5s5.5 1.8 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="18" cy="18.5" r="0.6" fill="currentColor" />
      <circle cx="20.5" cy="16" r="0.6" fill="currentColor" />
    </svg>
  );
}

const STEPS: Step[] = [
  {
    title: 'Metrics-driven implementations & releases',
    description:
      'A technology-aligned agile methodology for platform rollouts, paired with a tested pipeline and automated release practices.',
    icon: <ReleasesIcon />,
  },
  {
    title: 'Three-tiered governance approach',
    description:
      'An operational, tactical, and strategic model for effective governance, built on a close partnership between client teams and ours.',
    icon: <GovernanceIcon />,
  },
  {
    title: 'Agile development of custom software',
    description: 'Tailor-made solutions built around collaboration, iteration, and value-based delivery.',
    icon: <CodeIcon />,
  },
  {
    title: 'Change management',
    description:
      'A structured plan to support the move to new technology, focused on alignment, addressing friction, and building adaptability.',
    icon: <ChangeIcon />,
  },
  {
    title: 'Quality management system',
    description:
      'A defined framework covering all operations, with regular audits to keep every project aligned with quality and security standards.',
    icon: <QualityIcon />,
  },
  {
    title: 'Mature support process',
    description:
      'A three-stage approach -- stabilization, then optimization, then transformation -- through continuous improvement.',
    icon: <SupportIcon />,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F5F9FD] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 rounded-sm bg-[#2C4A63] px-4 py-2 text-sm text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Methodology
        </span>

        <h2 className="mt-5 font-[Space_Grotesk,ui-sans-serif] text-4xl font-normal text-[#1E293B]">
          ennVee Process
        </h2>

        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#64748B]">
          ennVee is dedicated to delivering accelerated technology solutions and services that
          give our clients greater agility to transform their business.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            // Checkerboard: alternates by column parity per row, and the two
            // rows are offset from each other -- matches the shaded/plain
            // pattern in the reference layout.
            const col = i % 3;
            const row = Math.floor(i / 3);
            const isShaded = (col + row) % 2 === 0;
            return (
              <div key={step.title} className={['p-8', isShaded ? 'bg-[#e3eef9]' : 'bg-transparent'].join(' ')}>
                <span className="text-[#2C4A63]">{step.icon}</span>
                <h3 className="mt-4 font-[Space_Grotesk,ui-sans-serif] text-xl font-medium leading-snug text-[#1E293B]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
