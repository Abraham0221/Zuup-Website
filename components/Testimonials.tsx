"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QUOTES = [
  {
    quote:
      "I went from missing games every weekend to playing 4 times a week. Zuup made it embarrassingly easy.",
    name: "Marcus T.",
    sport: "Basketball · Intermediate",
    avatar: "#f97316",
  },
  {
    quote:
      "Created a Tuesday night volleyball league in the app. Ten weeks in, we have a full confirmed roster every time.",
    name: "Priya S.",
    sport: "Volleyball · Organizer",
    avatar: "#22c55e",
  },
  {
    quote:
      "Moved to a new city and found my tennis crew in under 48 hours. The confirmed player count is the killer feature.",
    name: "Jordan L.",
    sport: "Tennis · Competitive",
    avatar: "#4a7eff",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7eff]">
            The squad
          </div>
          <h2 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Athletes who got <span className="text-gradient-blue italic">off the bench.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <Quote className="h-8 w-8 text-[#4a7eff]/60" />
              <blockquote className="mt-4 text-base leading-relaxed text-white/85">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ background: q.avatar }}
                />
                <div>
                  <div className="text-sm font-semibold">{q.name}</div>
                  <div className="text-xs text-white/50">{q.sport}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
