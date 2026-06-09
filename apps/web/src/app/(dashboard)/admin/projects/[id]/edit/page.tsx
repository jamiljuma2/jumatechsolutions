type EditProjectPageProps = {
  params: { id: string };
};

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { id } = params;
  return <div className="text-slate-900">Edit project {id}</div>;
}
