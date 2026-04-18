"use client";

import { motion } from "framer-motion";
import { Apple, Download } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[#4a7eff]/30 p-10 text-center md:p-20"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(74,126,255,0.25) 0%, rgba(10,15,31,0.6) 60%, #000 100%)",
          }}
        >
          {/* Concentric rings decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4 - i * 0.06, 0.2, 0.4 - i * 0.06] }}
                transition={{
                  duration: 4,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 rounded-full border border-[#4a7eff]/20"
                style={{
                  width: 160 + i * 120,
                  height: 160 + i * 120,
                  marginLeft: -(80 + i * 60),
                  marginTop: -(80 + i * 60),
                }}
              />
            ))}
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
            <Download className="h-3 w-3" />
            Free · No subscription · No ads
          </div>
          <h2 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Your next game is
            <br />
            <span className="text-gradient-blue italic">one tap away.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Download Zuup. Pick your sport. Play tonight. It's that simple —
            and it's completely free.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-black transition hover:scale-[1.03]"
            >
              <Apple className="h-8 w-8" />
              <div className="text-left">
                <div className="text-[10px] opacity-70">Download on the</div>
                <div className="text-lg font-bold leading-tight">
                  App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 backdrop-blur transition hover:scale-[1.03] hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
                <path d="M3.6 2.4l10.8 9.6L3.6 21.6c-.3-.2-.5-.5-.5-.9V3.3c0-.4.2-.7.5-.9zm12.3 10.7l2.9 2.6-12.1 7c-.2.1-.5.1-.7 0l9.9-9.6zM20.9 11l2 1.2c.7.4.7 1.4 0 1.8l-2.2 1.3-3.3-2.9L20.9 11zM5.7 2.3c.2-.1.5-.1.7 0l12.1 7-2.9 2.6L5.7 2.3z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-70">Get it on</div>
                <div className="text-lg font-bold leading-tight">
                  Google Play
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/40">
            Works on iOS 15+ and Android 10+
          </div>
        </motion.div>
      </div>
    </section>
  );
}
