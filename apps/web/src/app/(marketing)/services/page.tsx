export const metadata = {
  title: "Services"
};

import { MotionCard } from "@/components/visuals/MotionCard";
import Link from "next/link";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Optimization",
  "E-commerce Solutions",
  "Consulting",
  "Cloud Architecture",
  "API Development"
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <p className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-1 text-sm text-indigo-700">Services</p>
      <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">Interactive services with a polished product feel.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const slug = service
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <MotionCard key={service} className="glass-surface card-glow rounded-3xl p-6">
              <h2 className="text-xl font-medium text-slate-900">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Delivered with a product-led approach, clean code, and a focus on maintainability.
              </p>
              <Link
                href={`/services/${slug}`}
                className="mt-6 inline-flex rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-50"
              >
                Explore service
              </Link>
            </MotionCard>
          );
        })}
      </div>
    </div>
  );
}
