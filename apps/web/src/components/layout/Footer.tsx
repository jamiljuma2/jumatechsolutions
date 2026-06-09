"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white/85 text-slate-700 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">JumaTech Solutions</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Modern software delivery, product design, and reliable engineering for growing businesses.
          </p>
        </div>
        <div className="grid gap-3 text-sm">
          {[
            { href: "/services", label: "Services" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" }
          ].map((item) => (
            <motion.div key={item.href} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Link href={item.href} className="inline-flex w-fit rounded-full px-3 py-1 transition hover:bg-indigo-50 hover:text-indigo-700">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
            <div className="text-sm text-slate-600">
          <p>Secure dashboard, SEO-ready marketing pages, and API-driven content.</p>
              <p className="mt-4 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-4 text-indigo-950 shadow-[0_0_24px_rgba(79,70,229,0.12)]">
                Built for crisp interactions, vibrant glow, and a software-company palette.
          </p>
        </div>
      </div>
    </footer>
  );
}
