/**
 * Data & AI hero (layered cards)
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Recreates the composition of a dark hero with a grid background, an
 * italic accent headline, and three overlapping offset cards connected by
 * dashed lines and pinned labels -- using original gradient/icon artwork
 * (not photos or graphics from any source site).
 *
 * Server component -- no hooks needed (the pulsing dot uses pure CSS
 * animation). Drop in e.g. components/DataAiHero.tsx and use in place of
 * the plain hero in app/data-and-ai/page.tsx.
 */

// Reused signature motif from the rest of the site.
function NodeLines({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 260" fill="none" aria-hidden="true">
      <path d="M20 220 L80 160 L120 190 L170 90" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M80 160 L110 70 L170 90" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {[
        [20, 220],
        [80, 160],
        [120, 190],
        [170, 90],
        [110, 70],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="currentColor" opacity="0.7" />
      ))}
    </svg>
  );
}

function ConsultingIcon() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="h-16 w-16" aria-hidden="true">
      <circle cx="40" cy="42" r="14" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="80" cy="42" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 92c2-14 12-22 22-22s20 8 22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M58 92c2-14 12-22 22-22s20 8 22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function AppsGridIcon() {
  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid grid-cols-3 gap-2.5" aria-hidden="true">
      {cells.map((i) => (
        <div key={i} className="h-6 w-6 rounded-[4px] bg-white/25" style={{ opacity: 0.4 + (i % 3) * 0.2 }} />
      ))}
    </div>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-3 w-3" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#17A9A0] opacity-60" />
      <span className="relative inline-flex h-3 w-3 rounded-full border border-[#17A9A0]" />
    </span>
  );
}

// Small dark chip pinned onto a card's corner, matching the source
// composition's label tags.
function CardLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={[
        'absolute z-20 rounded-sm bg-[#10203A] px-3.5 py-2 text-sm font-semibold text-white shadow-[0_8px_16px_-8px_rgba(0,0,0,0.5)]',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}

export default function DataAiHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B1B33] py-24"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      {/* Pulsing indicator, top-left */}
      <div className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#17A9A0]/40">
        <PulseDot />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left: headline */}
        <div>
          <h1 className="font-[Space_Grotesk,ui-sans-serif] text-4xl font-medium leading-[1.15] text-white sm:text-5xl">
            Harness the power of
            <br />
            <span className="bg-gradient-to-r from-[#17A9A0] to-[#7DD3C7] bg-clip-text italic text-transparent">
              Data and AI
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#CBD5E1]">
            And empower your business with high-quality actionable insights
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center rounded-sm bg-[#17A9A0] px-6 py-3 text-sm font-semibold text-[#0B1B33] transition-colors hover:bg-[#14938c]"
          >
            Connect with us
          </a>
        </div>

        {/* Right: layered cards */}
        <div className="relative h-[420px] sm:h-[480px]">
          {/* Dashed connector frame behind the tech + applications stack */}
          <div className="absolute right-2 top-0 h-full w-[62%] rounded-[24px] border border-dashed border-white/25 sm:right-6" />

          {/* Consulting card -- back-left */}
          <div className="absolute bottom-0 left-0 h-[70%] w-[52%] overflow-hidden rounded-sm shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#233E55] to-[#0B1B33] text-white/70">
              <ConsultingIcon />
            </div>
            <CardLabel className="bottom-4 left-4">Consulting</CardLabel>
          </div>

          {/* Technology card -- middle, tallest */}
          <div className="absolute right-[30%] top-4 h-[85%] w-[46%] overflow-hidden rounded-sm shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] sm:right-[32%]">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#3B2E6B] via-[#233E55] to-[#0B1B33] text-[#17A9A0]">
              <NodeLines className="h-full w-full p-4" />
            </div>
            <CardLabel className="left-3 top-4">Technology</CardLabel>
          </div>

          {/* Applications card -- front-right, slightly clipped */}
          <div className="absolute bottom-4 right-0 h-[62%] w-[48%] overflow-hidden rounded-sm shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#7A3B2E] via-[#233E55] to-[#0B1B33] p-6">
              <AppsGridIcon />
            </div>
            <CardLabel className="bottom-4 right-4">Applications</CardLabel>
          </div>
        </div>
      </div>
    </section>
  );
}
