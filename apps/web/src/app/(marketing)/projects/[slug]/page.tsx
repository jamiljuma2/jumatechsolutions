type ProjectPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = params;
  return { title: slug.replace(/-/g, " ") };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Project detail</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">{slug.replace(/-/g, " ")}</h1>
      <p className="mt-6 text-slate-300">
        This detail page is ready for API-backed project content, gallery data, and related work.
      </p>
    </div>
  );
}
