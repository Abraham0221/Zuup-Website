"use client";

import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import AppHomePreview from "./AppHomePreview";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-center px-6 pt-32 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_1fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a7eff] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a7eff]" />
            </span>
            Free forever · Built for athletes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl"
          >
            <span className="italic text-gradient-blue">Zuup</span>
            <span className="block text-white">You Ready?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-white/70 md:text-xl"
          >
            The free app for athletes who live for their sport. Find local
            games, create your own events, and play with people nearby in
            seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#4a7eff] px-7 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(74,126,255,0.45)] transition hover:scale-[1.02] hover:bg-[#5a8dff]"
            >
              <Download className="h-5 w-5" />
              Download free
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              See how it works
            </a>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-white/50"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#4a7eff", "#7aa4ff", "#22c55e", "#f97316"].map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-black"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>Athletes playing this week</span>
            </div>
            <div className="hidden h-6 w-px bg-white/10 md:block" />
            <div className="hidden items-center gap-1 md:flex">
              <span className="text-yellow-400">★★★★★</span>
              <span>4.9 rating</span>
            </div>
          </motion.div> */}
        </div>

        {/* Right: phone */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="float-y">
            <PhoneMockup>
              <AppHomePreview activeIndex={2} />
            </PhoneMockup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
