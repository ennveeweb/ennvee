'use client';

/**
 * Contact section (redesigned) -- two-column layout: heading, intro copy,
 * and quick contact details on the left; a HubSpot form embed on the
 * right.
 *
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Drop in e.g. components/ContactSection.tsx. Requires components/HubSpotForm.tsx
 * (wraps HubSpot's classic embed script for Next.js -- see that file for
 * how it works).
 */

import HubSpotForm from './HubSpotForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F5F9FD]">
      <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        {/* Left: heading + intro */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-sm bg-[#2C4A63] px-4 py-2 text-sm text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Get in touch
          </span>
          <h2 className="mt-6 font-[Space_Grotesk,ui-sans-serif] text-5xl font-normal leading-[1.05] text-[#1E293B] sm:text-6xl">
            Let&rsquo;s talk about what&rsquo;s next
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#64748B]">
            Tell us a bit about your business and technology needs, and one of our specialists will
            reach out to set up a conversation.
          </p>

          <div className="mt-10 space-y-2 border-t border-[#E2E8F0] pt-6 text-sm text-[#64748B]">
            <p>
              <span className="text-[#1E293B]">Email</span> &nbsp;hello@ennVee.example
            </p>
            <p>
              <span className="text-[#1E293B]">Phone</span> &nbsp;+1 (555) 010-0100
            </p>
          </div>
        </div>

        {/* Right: HubSpot form */}
        <HubSpotForm portalId="5314978" formId="e9c7fb00-49d4-4718-b424-10393e49d563" />
      </div>
      </div>
    </section>
  );
}