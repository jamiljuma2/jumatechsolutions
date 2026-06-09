import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { MotionCard } from "@/components/visuals/MotionCard";

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <MotionCard className="glass-surface rounded-[2rem] p-5 sm:p-6 lg:p-8">{children}</MotionCard>
    </div>
  );
}
