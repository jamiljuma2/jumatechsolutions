import { MotionCard } from "@/components/visuals/MotionCard";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  const values = ["Product thinking", "Clean delivery", "Security first", "Long-term support"];
  const timeline = [
    { year: "2019", text: "Started building reliable digital products for local businesses." },
    { year: "2022", text: "Expanded into full-stack platforms, dashboards, and internal tools." },
    { year: "2026", text: "Focused on premium motion design and scalable production systems." }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <p className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-1 text-sm text-indigo-700 shadow-[0_0_18px_rgba(79,70,229,0.08)]">
        About JumaTech Solutions
      </p>
      <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">We design software with premium polish and practical momentum.</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        We partner with founders and growing teams to design software that feels premium and performs reliably.
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <MotionCard className="glass-surface card-glow rounded-3xl p-6 lg:col-span-2">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Timeline</p>
          <div className="mt-6 grid gap-4">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4 rounded-2xl border border-indigo-100 bg-white p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-semibold text-indigo-700">
                  {item.year}
                </div>
                <p className="pt-1 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </MotionCard>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {values.map((value) => (
            <MotionCard key={value} className="glass-surface rounded-2xl p-5 text-slate-900">
              {value}
            </MotionCard>
          ))}
        </div>
      </div>
    </div>
  );
}
