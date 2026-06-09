export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center p-8 text-center text-slate-600">
      <div className="glass-surface pulse-soft rounded-3xl px-8 py-6">
        <div className="mx-auto h-10 w-10 rounded-full border-2 border-indigo-300/30 border-t-fuchsia-400" />
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-indigo-600">Loading</p>
      </div>
    </div>
  );
}
