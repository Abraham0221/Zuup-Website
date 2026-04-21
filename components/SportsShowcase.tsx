"use client";

import { motion } from "framer-motion";

const SPORTS = [
  { name: "Basketball", emoji: "🏀", color: "from-orange-500 to-red-700" },
  { name: "Soccer", emoji: "⚽", color: "from-green-500 to-emerald-800" },
  { name: "Tennis", emoji: "🎾", color: "from-amber-400 to-orange-700" },
  { name: "Volleyball", emoji: "🏐", color: "from-yellow-400 to-orange-600" },
  { name: "Baseball", emoji: "⚾", color: "from-slate-300 to-slate-600" },
  { name: "Football", emoji: "🏈", color: "from-amber-700 to-stone-800" },
  { name: "Running", emoji: "🏃", color: "from-fuchsia-500 to-pink-700" },
  { name: "Cycling", emoji: "🚴", color: "from-cyan-400 to-blue-700" },
  { name: "Swimming", emoji: "🏊", color: "from-sky-400 to-blue-800" },
  { name: "Badminton", emoji: "🏸", color: "from-teal-400 to-indigo-700" },
  { name: "Your sport", emoji: "✨", color: "from-[#4a7eff] to-[#1e3a8a]" },
];

export default function SportsShowcase() {
  return (
    <section id="sports" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7eff]">
            Every game. One app.
          </div>
          <h2 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Pick your <span className="text-gradient-blue italic">sport.</span>
            <br />
            We'll find the court.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
            Basketball to badminton. Casual pickup to competitive brackets.
            Whatever you play, there's a game starting near you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SPORTS.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-3xl border border-white/10"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${sport.color} opacity-70 transition group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <div className="text-5xl transition group-hover:scale-110">
                  {sport.emoji}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  {sport.name}
                </div>
              </div>
              <div
                aria-hidden
                className="absolute -inset-1 rounded-3xl opacity-0 transition group-hover:opacity-100"
                style={{
                  boxShadow: "0 0 30px rgba(74,126,255,0.6)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
