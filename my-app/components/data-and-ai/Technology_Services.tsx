'use client';

import { useState } from 'react';

/**
 * Technology services (tabbed capability grid)
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Two-tone heading, intro paragraph, a two-tab switcher (active tab solid
 * navy, inactive tab a light tint with an underline), a 4-column card grid
 * per tab, and a centered "Explore more" pill button.
 *
 * Drop in e.g. components/TechnologyServices.tsx. Use in place of the
 * plain "Technology services" section in app/data-and-ai/page.tsx --
 * reuses the same CAPABILITY_TABS content already defined there.
 */

const CAPABILITY_TABS = [
  {
    label: 'Artificial Intelligence & Intelligent Automation',
    items: [
      {
        title: 'Predictive AI',
        description: 'Using Machine Learning & Deep Learning for prediction, forecasting and pattern recognition.',
      },
      {
        title: 'Generative AI',
        description: 'Development of AI powered digital systems, custom LLMs, chatbots, content generation systems.',
      },
      {
        title: 'Agentic AI',
        description: 'Designing and developing autonomous AI agents for planning and executing multi-step tasks.',
      },
      {
        title: 'Process Automation',
        description:
          'AI and scripting (Python) for automating complex data and business workflows, & low code workflow automation.',
      },
    ],
  },
  {
    label: 'Data Estate Modernization & Analytics',
    items: [
      {
        title: 'Cloud Data Engineering',
        description: 'Design and build scalable data pipelines, ETL/ELT processes, and data infrastructure on cloud platforms.',
      },
      {
        title: 'Data Management & Governance',
        description:
          'Data governance framework design, data security & privacy implementation, data quality assessment and improvement.',
      },
      {
        title: 'Data Modernization',
        description: 'Data warehouse modernization, data lake implementation, cloud migration strategies.',
      },
      {
        title: 'Business Intelligence & Analytics',
        description:
          'Advanced data visualization and dashboards, unified enterprise reporting, self-service analytics capabilities.',
      },
    ],
  },
];

export default function TechnologyServices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-[Space_Grotesk,ui-sans-serif] text-4xl font-semibold tracking-tight text-[#10203A]">
        Technology <span className="text-[#17A9A0]">Services</span>
      </h2>

      <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[#475569]">
        We provide the right solution for clients&rsquo; needs, whether through off-the-shelf SaaS
        AI, custom-built models, or a hybrid of both -- ensuring optimal performance and
        leveraging the full spectrum of platforms, from major clouds to open-source technologies.
      </p>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap gap-3">
        {CAPABILITY_TABS.map((tab, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(i)}
              aria-current={isActive}
              className={[
                'rounded-sm px-6 py-4 text-left text-base font-semibold transition-colors',
                isActive
                  ? 'bg-[#10203A] text-white'
                  : 'border-b-2 border-[#17A9A0] bg-[#E8F5F4] text-[#10203A] hover:bg-[#DCEFEE]',
              ].join(' ')}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITY_TABS[activeTab].items.map((item) => (
          <div key={item.title} className="rounded-sm border border-[#E2E8F0] p-6">
            <h3 className="font-[Space_Grotesk,ui-sans-serif] text-lg font-semibold text-[#10203A]">
              {item.title}
            </h3>
            <div className="mt-3 mb-4 h-px bg-[#E2E8F0]" />
            <p className="text-[15px] leading-relaxed text-[#334155]">{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center rounded-full bg-[#5FB8C9] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#4CA5B6]"
        >
          Explore more
        </a>
      </div>
    </section>
  );
}
