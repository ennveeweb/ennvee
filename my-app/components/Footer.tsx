'use client';

/**
 * Footer (redesigned) -- a brand column (logo, blurb, newsletter field)
 * alongside link columns with teal-underlined headers, a contact +
 * social column, and a bottom bar with a floating "back to top" button.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/Footer.tsx. Content is original placeholder
 * copy, links, and contact details for "ennVee" -- replace with your
 * real footer content. Social icons are simplified generic glyphs (not
 * reproductions of any platform's actual logo assets) linking out to
 * your real profiles.
 */

const LINK_COLUMNS = [
  {
    heading: 'Services',
    links: ['Digital transformation', 'Data & AI', 'Data intelligence'],
  },
  {
    heading: 'Technologies',
    links: [
      'Cloud ERP',
      'Enterprise suite',
      'Distribution platform',
      'Core platform',
      'Cloud infrastructure',
      'Automation (RPA)',
    ],
  },
  {
    heading: 'Support',
    links: ['Privacy policy', 'Legal notice', 'Site map'],
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.2V20Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H22l-7.2 8.2L23 21h-6.6l-5.2-6.4L5.3 21H2.2l7.7-8.8L1.5 3h6.8l4.7 5.9L18.9 3Zm-1.2 16h1.7L7.4 4.9H5.6L17.7 19Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9.5V7.7c0-.9.6-1.1 1-1.1h2.5V3l-3.4-.01C10.7 3 10 5.3 10 6.9v2.6H7.5V13H10v8h4v-8h2.7l.4-3.5H14Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
  { label: 'X', icon: <XIcon />, href: '#' },
  { label: 'Facebook', icon: <FacebookIcon />, href: '#' },
  { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 inline-block border-b-2 border-[#17A9A0] pb-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
      {children}
    </p>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#233E55]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr_1.3fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <p className="font-[Space_Grotesk,ui-sans-serif] text-xl font-medium text-white">ennVee</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Consulting and engineering for the enterprise systems that run your business.
            </p>

            
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.heading}>
              <ColumnHeading>{col.heading}</ColumnHeading>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-white/85 transition-colors hover:text-[#17A9A0]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + social */}
          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-2.5 text-[15px] text-white/85">
              <li>US: +1-555-010-0100</li>
              <li>India: +91-98765 43210</li>
              <li>
                <a href="mailto:hello@ennVee.example" className="transition-colors hover:text-[#17A9A0]">
                  hello@ennVee.example
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-[#17A9A0] hover:bg-[#17A9A0] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#1B3347]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} ennVee. All rights reserved.</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8A33D]/60 text-[#E8A33D] transition-colors hover:bg-[#E8A33D] hover:text-[#1B3347]"
            aria-label="Back to top"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
