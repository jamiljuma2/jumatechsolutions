"use client";

import { motion } from "framer-motion";

const floatVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export function AnimatedBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl"
        variants={floatVariants}
        initial="initial"
        animate={{ opacity: 1, scale: 1, y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-6rem] top-32 h-72 w-72 rounded-full bg-fuchsia-300/25 blur-3xl"
        variants={floatVariants}
        initial="initial"
        animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
    </div>
  );
}