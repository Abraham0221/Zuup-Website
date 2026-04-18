"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-3 glass">
        <Link href="#top" className="flex items-center gap-2">
          <span
            className="text-2xl font-bold italic tracking-tight text-gradient-blue"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Zuup
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#sports" className="transition hover:text-white">
            Sports
          </a>
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#how" className="transition hover:text-white">
            How it works
          </a>
          <a href="#events" className="transition hover:text-white">
            Events
          </a>
        </nav>
        <a
          href="#download"
          className="group relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#4a7eff] hover:text-white"
        >
          <span>Get the app</span>
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </motion.header>
  );
}
