export const metadata = {
  title: "Projects"
};

import { MotionCard } from "@/components/visuals/MotionCard";

const projects = [
  { title: "Business Platform", category: "Web App" },
  { title: "Operations Dashboard", category: "Admin UI" },
  { title: "Lead Capture Site", category: "Marketing" }
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <p className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-1 text-sm text-indigo-700">Projects</p>
      <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">Featured work with motion, depth, and intent.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <MotionCard key={project.title} className="glass-surface card-glow rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-600">{project.category}</p>
            <h2 className="mt-3 text-xl font-medium text-slate-900">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sample project content will be powered by the API once the data layer is connected.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.9)]" />
              <span className="text-sm text-slate-600">Interactive gallery ready</span>
            </div>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
