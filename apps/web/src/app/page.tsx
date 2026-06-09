import Link from "next/link";
import { MotionCard } from "@/components/visuals/MotionCard";

const highlights = [
  "Responsive web platforms",
  "Secure admin workflows",
  "SEO and performance focused",
  "Shared API-driven content"
];

const services = ["Web Development", "UI/UX Design", "SEO Optimization", "E-commerce Solutions", "API Development", "Cloud Delivery"];
const metrics = [
  { value: "12+", label: "launch-ready systems" },
  { value: "99.9%", label: "production uptime" },
  { value: "48h", label: "rapid prototypes" }
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm text-indigo-700 shadow-[0_0_24px_rgba(79,70,229,0.12)]">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />
            Software company website + admin dashboard
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            We build modern digital products that feel alive, load fast, and scale cleanly.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            JumaTech Solutions delivers marketing sites, dashboards, and backend systems with a production-minded stack and motion-rich interface.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.28)] transition duration-300 hover:-translate-y-1 hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.35)]">
              Start a project
            </Link>
            <Link href="/projects" className="rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-[0_0_28px_rgba(79,70,229,0.12)]">
              View projects
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <MotionCard
                key={metric.label}
                className="glass-surface rounded-3xl p-5 text-center"
              >
                <p className="text-3xl font-semibold text-indigo-700">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
              </MotionCard>
            ))}
          </div>
        </div>
        <MotionCard className="glass-surface card-glow rounded-[2rem] p-6 shadow-[0_0_60px_rgba(16,185,129,0.10)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-indigo-100 bg-white/95 p-4 text-sm text-slate-700 transition duration-300 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-[0_0_24px_rgba(79,70,229,0.12)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 p-5 shadow-[0_0_32px_rgba(79,70,229,0.12)]">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Core stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service, index) => (
                <span
                  key={service}
                  className="tech-stack-float rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                  style={{
                    animationDelay: `${index * 180}ms`,
                    animationDuration: `${5.8 + index * 0.35}s`
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </MotionCard>
      </section>
    </div>
  );
}
