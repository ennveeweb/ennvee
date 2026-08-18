'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Data_AI_Hero from '@/components/data-and-ai/Data_AI_Hero'; 
import Featured_Showcases from '@/components/data-and-ai/Featured_Showcases'; 
import Consulting_Services from '@/components/data-and-ai/Consulting_Services'; 
import Technology_Services from '@/components/data-and-ai/Technology_Services';
import Contact_Section from '@/components/Contact_Section';
import Footer from '@/components/Footer';

/**
 * Data & AI service page (Meridian)
 * Next.js (App Router) + Tailwind CSS + TypeScript
 *
 * Save as app/data-and-ai/page.tsx. Requires components/DataAiHero.tsx,
 * components/Navbar.tsx, components/Contact_Section.tsx, and
 * components/Footer.tsx to already exist in your project.
 *
 * Note: 'use client' is here because of the capability tabs below. If you
 * don't need App Router metadata from this file, move the tab toggle into
 * its own small client component and keep this file a server component so
 * `metadata` export works normally.
 */

const FEATURED_PRODUCTS = [
  {
    title: 'Archive & optimize',
    blurb: 'Move cold records out of your live ERP cleanly, on a policy-driven schedule.',
    href: '#',
  },
  {
    title: 'Finance automation',
    blurb: 'Automate order-to-cash and procure-to-pay work end to end.',
    href: '#',
  },
  {
    title: 'Expense manager',
    blurb: 'Capture, approve, and reconcile spend faster, with policy checks built in.',
    href: '#',
  },
];

const CONSULTING_SERVICES = [
  {
    title: 'Architecture & advisory',
    tagline: 'Aligning technology with the business',
    description:
      'We shape a technical architecture around your actual objectives -- integration, scalability, and security included from the start, not bolted on later.',
  },
  {
    title: 'Technology option analysis',
    tagline: 'Evaluating what actually fits',
    description:
      'A structured read on your current systems, where the gaps are, and how the realistic options compare.',
  },
  {
    title: 'Strategic roadmap & investment prioritization',
    tagline: 'Turning strategy into a sequence of decisions',
    description:
      'We translate business goals into a prioritized roadmap -- the initiatives, the order, and the case for each investment.',
  },
  {
    title: 'Data monetization',
    tagline: 'Making data pay for itself',
    description:
      'Building the analytics and strategy that turn what you already collect into new insight, and where it fits, new revenue.',
  },
  {
    title: 'AI transformation & Center of Excellence',
    tagline: 'The foundation for AI at scale',
    description:
      'Setting up the advisory, assessment, and governance a Center of Excellence needs in order to actually stick.',
  },
  {
    title: 'AI governance & responsible AI',
    tagline: 'Adoption you can defend',
    description:
      'Governance that manages risk and builds trust, so AI scales across the business without cutting corners.',
  },
];

const CAPABILITY_TABS = [
  {
    label: 'AI & intelligent automation',
    items: [
      {
        title: 'Predictive AI',
        description: 'Machine learning and deep learning for forecasting and pattern recognition.',
      },
      {
        title: 'Generative AI',
        description: 'Custom LLM applications, chat interfaces, and content-generation systems.',
      },
      {
        title: 'Agentic AI',
        description: 'Autonomous agents that plan and execute multi-step tasks with oversight.',
      },
      {
        title: 'Process automation',
        description: 'Scripted and low-code automation for complex data and business workflows.',
      },
    ],
  },
  {
    label: 'Data estate modernization & analytics',
    items: [
      {
        title: 'Cloud data engineering',
        description: 'Scalable data pipelines, ETL/ELT processes, and cloud data infrastructure.',
      },
      {
        title: 'Data management & governance',
        description: 'Governance frameworks, data security, quality, and master data management.',
      },
      {
        title: 'Data modernization',
        description: 'Warehouse modernization, data lake implementation, and cloud migration.',
      },
      {
        title: 'Business intelligence & analytics',
        description: 'Unified reporting, dashboards, and self-service analytics across the business.',
      },
    ],
  },
];

export default function DataAndAiPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white font-[Inter,ui-sans-serif,system-ui] text-[#10203A]">
      <Navbar />

      <Data_AI_Hero />

      {/* Intro */}
      <section className="bg-[#F5F9FD]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-[15px] leading-relaxed text-[#475569] sm:text-base">
          We harness the power of AI to unlock insights, deliver actionable intelligence, drive innovation and create business value, through human-centered design, cutting-edge technologies and responsible AI practices. We aim to empower informed decision-making, drive business growth, and enhance customer experiences by solving complex problems and providing high-quality actionable insights.
        </p>
        </div>
      </section>

      <Featured_Showcases /> 
      <Consulting_Services />
      <Technology_Services />
           

      <Contact_Section />
      <Footer />

    </div>
  );
}