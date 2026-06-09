import Link from "next/link";
import { MotionCard } from "@/components/visuals/MotionCard";

type Props = {
  params: Promise<{ slug: string }>;
};

const descriptions: Record<string, string> = {
  "web-development": "Custom responsive web applications, progressive enhancement, and performance-first delivery.",
  "mobile-app-development": "Cross-platform and native mobile apps with delightful UX and robust offline behaviour.",
  "ui-ux-design": "User-centered product design, prototypes, and design systems to move quickly and ship confidently.",
  "seo-optimization": "Search-friendly architecture, keyword-focused content structure, and performance tuning that helps pages rank better.",
  "e-commerce-solutions": "Conversion-focused storefronts, smooth checkout flows, and scalable product catalog experiences.",
  consulting: "Architecture reviews, technical strategy, and staff augmentation to help your team scale.",
  "cloud-architecture": "Cloud-native infrastructure, CI/CD, and cost-optimized deployments.",
  "api-development": "Robust REST/GraphQL APIs, authentication, and developer-friendly docs."
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description = descriptions[slug] ?? "We provide bespoke services to fit your product needs.";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <Link href="/services" className="text-sm text-indigo-600 hover:underline">
          ← Back to services
        </Link>
      </div>

      <MotionCard className="glass-surface rounded-3xl p-8">
        <p className="text-lg text-slate-700">{description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-indigo-100 bg-white p-4">
            <h3 className="font-medium text-slate-900">What we deliver</h3>
            <ul className="mt-3 ml-4 list-disc text-sm text-slate-600">
              <li>Specification &amp; planning</li>
              <li>Implementation &amp; QA</li>
              <li>Deployment &amp; monitoring</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-white p-4">
            <h3 className="font-medium text-slate-900">Get started</h3>
            <p className="mt-2 text-sm text-slate-600">Share a brief and we’ll propose a scoped plan and estimate.</p>
            <Link href="/contact" className="mt-4 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white">
              Contact us
            </Link>
          </div>
        </div>
      </MotionCard>
    </div>
  );
}
