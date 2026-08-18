'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '@/public/images/ennVee-Logo.svg';

/**
 * Enterprise mega menu
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Modeled on dense B2B "solutions" mega menus (e.g. enterprise IT/consulting
 * sites): one nav item opens a panel with several sub-groups side by side --
 * a plain link list, a grid of card-style items, another list -- another
 * item opens a single grid of product cards with a one-line description
 * each, and a couple of items are plain simple dropdowns.
 *
 * Drop this file in e.g. components/EnterpriseMegaMenu.tsx and render
 * <EnterpriseMegaMenu /> inside your root layout, above {children}.
 *
 * Responsive behavior:
 * - lg and up: horizontal nav bar. Mega items open a full-width panel on
 *   hover/click; plain dropdown items open a compact list anchored under
 *   just that item.
 * - below lg: hamburger button opens a slide-down drawer; mega and dropdown
 *   items become accordions (tap to expand groups).
 *
 * Fonts: add Space Grotesk (display) + Inter (body) via next/font in your
 * layout, or a Google Fonts <link>. Fallbacks are set so the component still
 * looks right without them.
 */

type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

type Group = {
  heading?: string;
  layout: 'list' | 'grid';
  items: LinkItem[];
};

type MegaNavItem = {
  label: string;
  groups: Group[];
  tabbed?: boolean;
  items?: never;
  href?: never;
};

type DropdownNavItem = {
  label: string;
  items: LinkItem[];
  groups?: never;
  href?: never;
};

type SimpleNavItem = {
  label: string;
  href: string;
  cta?: boolean;
  groups?: never;
  items?: never;
};

type NavItem = MegaNavItem | DropdownNavItem | SimpleNavItem;

const NAV: NavItem[] = [
  {
    label: 'Services & technologies',
    tabbed: true,    
    groups: [
      {
        heading: 'Services',
        layout: 'list',
        items: [
          { label: 'Data & AI', href: '/data-and-ai' },
          { label: 'Digital transformation', href: '#' },
          { label: 'Data intelligence', href: '#' },
        ],
      },
      {
        heading: 'Technologies',
        layout: 'grid',
        items: [
          { label: 'Cloud ERP', href: '#' },
          { label: 'Enterprise suite', href: '#' },
          { label: 'Distribution platform', href: '#' },
          { label: 'Cloud CRM', href: '#' },
          { label: 'Cloud infrastructure', href: '#' },
          { label: 'Dynamics services', href: '#' },
          { label: 'Sales cloud services', href: '#' },
          { label: 'App integration', href: '#' },
          { label: 'Core platform', href: '#' },
        ],
      },
      {
        heading: 'Accelerators',
        layout: 'list',
        items: [
          { label: 'Upgrade automation', href: '#' },
          { label: 'Access review tool', href: '#' },
          { label: 'System monitoring', href: '#' },
          { label: 'EDI automation', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Products & solutions',
    groups: [
      {
        layout: 'grid',
        items: [
          { label: 'Warehouse manager', href: '#', description: 'Plan, pick, and track inventory from one console.' },
          { label: 'Archive & optimize', href: '#', description: 'Move cold records out of your live ERP cleanly.' },
          { label: 'Finance automation', href: '#', description: 'Automate order-to-cash and procure-to-pay work.' },
          { label: 'Delivery platform', href: '#', description: 'Run and track project delivery in one place.' },
          { label: 'Expense manager', href: '#', description: 'Capture, approve, and reconcile spend faster.' },
          { label: 'Support assistant', href: '#', description: 'A conversational front door for common requests.' },
          { label: 'Field sales', href: '#', description: 'Mobile-first tools for reps working outside the office.' },
          { label: 'Ticketing copilot', href: '#', description: 'Triage and route IT tickets with less manual work.' },
          { label: 'Resume screening', href: '#', description: 'Rank candidates against a role profile in minutes.' },
        ],
      },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'Blog', href: '#' },
      { label: 'Datasheets', href: '#' },
      { label: 'Case studies', href: '#' },
      { label: 'Whitepapers', href: '#' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News & events', href: '#' },
    ],
  },
  { label: 'Contact us', href: '#', cta: true },
];

function isMegaItem(item: NavItem): item is MegaNavItem {
  return Array.isArray((item as MegaNavItem).groups);
}

function isDropdownItem(item: NavItem): item is DropdownNavItem {
  return !isMegaItem(item) && Array.isArray((item as DropdownNavItem).items);
}

function isSimpleItem(item: NavItem): item is SimpleNavItem {
  return !isMegaItem(item) && !isDropdownItem(item);
}

// Signature motif: a faint node-and-line diagram, echoing systems /
// integration work. Used as a corner watermark on mega panels.
function NodeLines({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 160" fill="none" aria-hidden="true">
      <path d="M10 130 L70 90 L130 110 L200 50" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path d="M70 90 L110 30 L200 50" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <circle cx="10" cy="130" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="70" cy="90" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="130" cy="110" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="110" cy="30" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="200" cy="50" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Renders a single group's links -- either a plain list or a card grid.
// Shared by the multi-column layout, the tabbed layout, and (in list form)
// the mobile accordion.
function GroupContent({ group }: { group: Group }) {
  if (group.layout === 'list') {
    return (
      <ul className="space-y-2.5">
        {group.items.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-[15px] text-[#334155] transition-colors hover:text-[#17A9A0]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {group.items.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="rounded-sm border border-[#E2E8F0] bg-[#F6F8FB] p-3 transition-colors hover:border-[#17A9A0]/40 hover:bg-white"
        >
          <p className="text-sm font-medium text-[#10203A]">{link.label}</p>
          {link.description && <p className="mt-1 text-xs leading-relaxed text-[#64748B]">{link.description}</p>}
        </a>
      ))}
    </div>
  );
}

export default function EnterpriseMegaMenu() {
  // Desktop hover/click state
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const openNow = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex((prev) => {
      if (prev !== i) setActiveTab(0);
      return i;
    });
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(null);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeNow();
        closeMobile();
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeNow();
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const active = openIndex !== null ? NAV[openIndex] : null;
  const activeMega = active && isMegaItem(active) ? active : null;

  return (
    <div ref={navRef} className="relative w-full font-[Inter,ui-sans-serif,system-ui]" onMouseLeave={closeSoon}>
      {/* Top bar */}
      <div className="relative z-50 border-b border-[#E2E8F0] bg-blue">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" aria-label="Home">
            <Image src={logo} alt="Logo" priority className="h-8 w-auto" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item, i) => {
              const isDropdown = isDropdownItem(item);
              const hasMenu = isMegaItem(item) || isDropdown;
              const isOpen = openIndex === i;

              if (isSimpleItem(item)) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={
                        item.cta
                          ? 'ml-2 inline-flex items-center rounded-sm bg-[#E8A33D] px-4 py-2 text-sm font-medium text-[#10203A] transition-colors hover:bg-[#dd9527]'
                          : 'px-4 py-2 text-sm tracking-wide text-[#334155] transition-colors hover:text-[#10203A]'
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label} className="relative" onMouseEnter={() => openNow(i)}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => (isOpen ? closeNow() : openNow(i))}
                    className={[
                      'relative flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors',
                      isOpen ? 'text-[#17a9a0]' : 'text-[#ffffff] hover:text-[#17a9a0]',
                    ].join(' ')}
                  >
                    {item.label}
                    <ChevronDown className={['transition-transform', isOpen ? 'rotate-180' : ''].join(' ')} />
                    <svg
                      viewBox="0 0 56 4"
                      className={[
                        'pointer-events-none absolute -bottom-0.5 left-1/2 h-1 w-10 -translate-x-1/2 text-[#17A9A0] transition-opacity duration-150',
                        isOpen ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      <line x1="0" y1="2" x2="56" y2="2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="0" cy="2" r="2" fill="currentColor" />
                      <circle cx="28" cy="2" r="2" fill="currentColor" />
                      <circle cx="56" cy="2" r="2" fill="currentColor" />
                    </svg>
                  </button>

                  {/* Compact dropdown, anchored under just this item */}
                  {isDropdown && (
                    <div
                      className={[
                        'absolute left-0 top-full z-40 w-56 origin-top rounded-sm border border-[#E2E8F0] bg-white py-2 shadow-[0_12px_24px_-12px_rgba(16,32,58,0.25)] transition-all duration-150',
                        isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
                      ].join(' ')}
                    >
                      <ul>
                        {item.items.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              className="block px-4 py-2 text-sm text-[#334155] transition-colors hover:text-[#17A9A0]"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger / close */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => {
              if (mobileOpen) {
                closeMobile();
              } else {
                setMobileOpen(true);
                closeNow();
              }
            }}
            className="p-1 text-[#334155] hover:text-[#10203A] lg:hidden"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop mega panel */}
      <div
        className={[
          'absolute left-0 right-0 top-full z-40 hidden origin-top border-b border-[#E2E8F0] bg-white shadow-[0_16px_32px_-16px_rgba(16,32,58,0.25)] transition-all duration-150 lg:block',
          activeMega ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        ].join(' ')}
        onMouseEnter={() => openIndex !== null && openNow(openIndex)}
      >
        {activeMega && (
          <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-10">
            <NodeLines className="pointer-events-none absolute -right-6 -top-6 h-40 w-56 text-[#17A9A0]" />

            {activeMega.tabbed ? (
              <div className="relative grid grid-cols-[220px_1fr] gap-10">
                {/* Left: vertical tabs */}
                <ul className="space-y-1 border-r border-[#E2E8F0] pr-6">
                  {activeMega.groups.map((group, gi) => (
                    <li key={group.heading ?? gi}>
                      <button
                        type="button"
                        onClick={() => setActiveTab(gi)}
                        aria-current={activeTab === gi ? 'true' : undefined}
                        className={[
                          'flex w-full items-center justify-between rounded-sm border-l-2 px-3 py-2.5 text-left text-sm transition-colors',
                          activeTab === gi
                            ? 'border-[#17A9A0] bg-[#F6F8FB] font-medium text-[#10203A]'
                            : 'border-transparent text-[#334155] hover:bg-[#F6F8FB] hover:text-[#10203A]',
                        ].join(' ')}
                      >
                        {group.heading}
                        <ChevronDown className="-rotate-90 text-[#94A3B8]" />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Right: selected tab's links */}
                <div className="relative">
                  <GroupContent group={activeMega.groups[activeTab]} />
                </div>
              </div>
            ) : (
              <div
                className="relative grid gap-10"
                style={{
                  gridTemplateColumns: activeMega.groups.map((g) => (g.layout === 'grid' ? '2fr' : '1fr')).join(' '),
                }}
              >
                {activeMega.groups.map((group, gi) => (
                  <div key={group.heading ?? gi}>
                    {group.heading && (
                      <p className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[#94A3B8]">
                        {group.heading}
                      </p>
                    )}
                    <GroupContent group={group} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile backdrop */}
      <div
        onClick={closeMobile}
        aria-hidden="true"
        className={[
          'fixed inset-0 z-30 bg-[#10203A]/40 transition-opacity duration-150 lg:hidden',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0',
        ].join(' ')}
      />

      {/* Mobile drawer */}
      <div
        className={[
          'fixed inset-x-0 top-[64px] z-40 max-h-[calc(100vh-64px)] overflow-y-auto bg-white shadow-[0_16px_32px_-16px_rgba(16,32,58,0.25)] transition-all duration-200 lg:hidden',
          mobileOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        ].join(' ')}
      >
        <ul className="divide-y divide-[#E2E8F0] px-4">
          {NAV.map((item) => {
            if (isSimpleItem(item)) {
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMobile}
                    className={
                      item.cta
                        ? 'my-3 block rounded-sm bg-[#E8A33D] px-4 py-2.5 text-center text-[15px] font-medium text-[#10203A]'
                        : 'block py-4 text-[15px] tracking-wide text-[#10203A]'
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            }

            const isExpanded = mobileExpanded === item.label;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                  className="flex w-full items-center justify-between py-4 text-left text-[15px] tracking-wide text-[#10203A]"
                >
                  {item.label}
                  <ChevronDown className={['transition-transform', isExpanded ? 'rotate-180' : ''].join(' ')} />
                </button>
                <div className={isExpanded ? 'block pb-4' : 'hidden'}>
                  {isMegaItem(item) ? (
                    item.groups.map((group, gi) => (
                      <div key={group.heading ?? gi} className="mb-4 last:mb-0">
                        {group.heading && (
                          <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[#94A3B8]">
                            {group.heading}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {group.items.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                onClick={closeMobile}
                                className="block text-sm text-[#334155] hover:text-[#17A9A0]"
                              >
                                {link.label}
                                {link.description && (
                                  <span className="mt-0.5 block text-xs text-[#94A3B8]">{link.description}</span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="space-y-2">
                      {item.items.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            onClick={closeMobile}
                            className="block text-sm text-[#334155] hover:text-[#17A9A0]"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
