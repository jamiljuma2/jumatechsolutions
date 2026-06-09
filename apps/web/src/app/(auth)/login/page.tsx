"use client";

import { useState } from "react";
import { MotionCard } from "@/components/visuals/MotionCard";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center px-4 py-16">
      <MotionCard className="glass-surface card-glow w-full rounded-[2rem] p-8">
        <p className="inline-flex rounded-full border border-indigo-200 bg-white px-4 py-1 text-xs uppercase tracking-[0.25em] text-indigo-700">
          Admin access
        </p>
        <h1 className="mt-5 text-3xl font-semibold text-slate-900">Login with a smooth, focused flow.</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Sign in to manage projects, messages, and site settings.</p>
        <div className="mt-8 grid gap-4">
          <input className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:shadow-[0_0_24px_rgba(79,70,229,0.12)]" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
          <input className="rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:shadow-[0_0_24px_rgba(79,70,229,0.12)]" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" type="password" />
          <button className="rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_0_28px_rgba(79,70,229,0.25)] hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.35)]">
            Login
          </button>
        </div>
      </MotionCard>
    </div>
  );
}
