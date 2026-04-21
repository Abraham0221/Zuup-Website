"use client";

import { motion } from "framer-motion";

export default function SoonHero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
      {/* Concentric rings backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4 - i * 0.06, 0.18, 0.4 - i * 0.06],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#4a7eff]/25"
            style={{
              width: 200 + i * 130,
              height: 200 + i * 130,
              marginLeft: -(100 + i * 65),
              marginTop: -(100 + i * 65),
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a7eff] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a7eff]" />
        </span>
        Final warmups in progress
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-7 text-7xl font-black leading-[0.95] tracking-tight md:text-9xl"
      >
        <span className="italic text-gradient-blue">Zuup</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl"
      >
        Almost game time.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-4 max-w-lg text-base text-white/60 md:text-lg"
      >
        We're putting on the finishing touches. The starting whistle is just
        around the corner — get ready to play.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#7aa4ff]"
      >
        <span className="h-px w-10 bg-[#4a7eff]/50" />
        Launching soon
        <span className="h-px w-10 bg-[#4a7eff]/50" />
      </motion.div>
    </section>
  );
}
