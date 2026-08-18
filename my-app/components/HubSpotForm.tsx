'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * HubSpot form embed
 * Next.js (App Router) + TypeScript
 *
 * Wraps HubSpot's classic embed script (js.hsforms.net/forms/embed/v2.js +
 * hbspt.forms.create(...)) as a proper React component, since pasting the
 * raw <script> tags into JSX doesn't work in Next.js.
 *
 * Usage:
 *   <HubSpotForm portalId="12345678" formId="abcd1234-5678-90ef-..." />
 *
 * Drop this file in components/HubSpotForm.tsx.
 */

type HubSpotFormProps = {
  portalId: string;
  formId: string;
  region?: string;
  /** CSS id for the container HubSpot renders the form into (no leading #). */
  targetId?: string;
  className?: string;
};

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: { portalId: string; formId: string; region?: string; target?: string }) => void;
      };
    };
  }
}

export default function HubSpotForm({
  portalId,
  formId,
  region = 'na1',
  targetId = 'hubspot-form-target',
  className = '',
}: HubSpotFormProps) {
  // Covers the case where this component mounts *after* the HubSpot script
  // has already loaded elsewhere on the page (e.g. client-side navigation
  // back to this page) -- next/script's onLoad only fires on first load,
  // so without this the form would never render on a remount.
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({ portalId, formId, region, target: `#${targetId}` });
    }
  }, [portalId, formId, region, targetId]);

  return (
    <div className={className}>
      <div id={targetId} />
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.hbspt?.forms.create({ portalId, formId, region, target: `#${targetId}` });
        }}
      />
    </div>
  );
}