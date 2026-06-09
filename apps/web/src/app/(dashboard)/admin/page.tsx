export default function AdminDashboardPage() {
  const stats = ["Total projects", "Unread messages", "Testimonials", "Page views"];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-1 text-xs uppercase tracking-[0.25em] text-indigo-700">
            Admin dashboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Command center</h1>
        </div>
        <button className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800">
          Quick action
        </button>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat} className="rounded-2xl border border-indigo-100 bg-white p-5 text-slate-700 shadow-[0_0_24px_rgba(79,70,229,0.08)] transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-[0_0_32px_rgba(79,70,229,0.12)]">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{stat}</p>
            <p className="mt-4 text-3xl font-semibold text-indigo-700">24</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-indigo-100 bg-white p-6 text-slate-600">
          <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
          <div className="mt-4 space-y-3">
            {[
              "Published a new portfolio project.",
              "Marked 12 messages as read.",
              "Updated homepage hero copy."
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 transition duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-[0_0_24px_rgba(79,70,229,0.08)]">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 p-6 text-slate-700 shadow-[0_0_32px_rgba(79,70,229,0.08)]">
          <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-4 grid gap-3">
            {[
              "Add a project",
              "Review testimonials",
              "Check contact messages"
            ].map((item) => (
              <button key={item} className="rounded-2xl border border-indigo-200 bg-white px-4 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
