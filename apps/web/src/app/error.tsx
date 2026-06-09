"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center text-slate-900">
      <div className="glass-surface rounded-[2rem] px-8 py-10 shadow-[0_0_40px_rgba(239,68,68,0.08)]">
        <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs uppercase tracking-[0.25em] text-indigo-600">
          Unexpected error
        </p>
        <h1 className="mt-5 text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-4 text-slate-600">{error.message}</p>
        <button className="mt-8 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-indigo-500 hover:to-fuchsia-500 hover:shadow-[0_0_24px_rgba(79,70,229,0.18)]">
          Retry
        </button>
      </div>
    </div>
  );
}
