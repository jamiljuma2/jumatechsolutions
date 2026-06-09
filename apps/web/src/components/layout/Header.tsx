"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Admin" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            alt="JumaTech Solutions"
            className="h-10 w-auto rounded-md border border-indigo-100 bg-white object-contain shadow-[0_6px_20px_rgba(79,70,229,0.12)] transition duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-tight text-slate-900 transition duration-300 group-hover:text-indigo-600">
            JumaTech Solutions
          </span>
        </Link>
        <nav className="hidden items-center gap-2 text-sm text-slate-700 md:flex">
          {links.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 transition duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
