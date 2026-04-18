"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Zap,
  Users,
  Trophy,
  Calendar,
  Shield,
} from "lucide-react";

const FEATURES = [
  {
    icon: MapPin,
    title: "Games near you",
    text: "See every pickup, league, and tournament within your radius. Sorted by distance, sport, and skill level.",
  },
  {
    icon: Zap,
    title: "Join in one tap",
    text: "No DMs. No group chats. Tap join, and you're on the roster. Organizers keep their squad confirmed.",
  },
  {
    icon: Users,
    title: "Meet your people",
    text: "Find athletes who match your intensity — recreational to competitive. Build your regular crew.",
  },
  {
    icon: Trophy,
    title: "Run your own events",
    text: "Create a ladder, a bracket, or a casual mix. Set the court, the price, the player count. We handle the rest.",
  },
  {
    icon: Calendar,
    title: "Never miss a game",
    text: "Smart reminders, weather warnings, and last-minute spot alerts when someone drops out.",
  },
  {
    icon: Shield,
    title: "Confirmed rosters",
    text: "Player counts are real. Green means the game is on — no showing up to an empty court.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7eff]">
            Why Zuup
          </div>
          <h2 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Built for the way
            <br />
            <span className="text-gradient-blue italic">athletes actually play.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 transition hover:border-[#4a7eff]/50"
              >
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(74,126,255,0.5), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4a7eff]/30 bg-[#4a7eff]/10">
                    <Icon className="h-6 w-6 text-[#7aa4ff]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
