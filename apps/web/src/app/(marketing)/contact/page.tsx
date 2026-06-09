export const metadata = {
  title: "Contact"
};

import { MotionCard } from "@/components/visuals/MotionCard";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <p className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-1 text-sm text-indigo-700">Contact</p>
      <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">Send a brief and we’ll shape the interface around it.</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionCard className="glass-surface card-glow rounded-3xl p-6">
          <form className="grid gap-4">
            <input className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-indigo-50 focus:shadow-[0_0_24px_rgba(79,70,229,0.12)]" placeholder="Name" />
            <input className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-indigo-50 focus:shadow-[0_0_24px_rgba(79,70,229,0.12)]" placeholder="Email" />
            <textarea className="min-h-40 rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-indigo-50 focus:shadow-[0_0_24px_rgba(79,70,229,0.12)]" placeholder="Message" />
            <button className="rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_0_28px_rgba(79,70,229,0.22)] hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)]">
              Send message
            </button>
          </form>
        </MotionCard>
        <MotionCard className="glass-surface rounded-3xl p-6">
          <h2 className="text-xl font-semibold text-slate-900">What happens next</h2>
          <div className="mt-6 grid gap-4">
            {[
              "We review your project brief.",
              "We align on scope, timeline, and budget.",
              "We design the first interactive direction quickly."
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-indigo-100 bg-white p-4 text-sm text-slate-600">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs text-indigo-700">0{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </MotionCard>
      </div>
    </div>
  );
}
