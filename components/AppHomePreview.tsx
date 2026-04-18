"use client";

import { motion } from "framer-motion";
import { Calendar, Home, Plus, User, MapPin, ChevronDown } from "lucide-react";

type Sport = {
  name: string;
  emoji: string;
  gradient: string;
};

const SPORTS: Sport[] = [
  { name: "Basketball", emoji: "🏀", gradient: "from-orange-500 to-red-600" },
  { name: "Soccer", emoji: "⚽", gradient: "from-green-500 to-emerald-700" },
  { name: "Tennis", emoji: "🎾", gradient: "from-orange-400 to-amber-700" },
  { name: "Volleyball", emoji: "🏐", gradient: "from-amber-400 to-orange-600" },
  { name: "Badminton", emoji: "🏸", gradient: "from-teal-400 to-blue-700" },
];

export default function AppHomePreview({
  activeIndex = 2,
}: {
  activeIndex?: number;
}) {
  const active = SPORTS[activeIndex];

  return (
    <div className="relative h-full w-full bg-black text-white">
      {/* Header */}
      <div className="px-5 pt-3">
        <div
          className="text-4xl font-bold italic leading-none"
          style={{ color: "#5a8dff" }}
        >
          Zuup
        </div>
        <div className="mt-1 text-xl font-semibold text-white/95">
          You Ready?
        </div>
      </div>

      {/* Concentric rings + sport picker */}
      <div className="relative mx-auto mt-4 flex h-[280px] w-full items-center justify-center">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 - i * 0.12 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="absolute rounded-full"
            style={{
              width: 110 + i * 60,
              height: 110 + i * 60,
              background:
                i === 0
                  ? "rgba(36, 56, 140, 0.45)"
                  : `rgba(36, 56, 140, ${0.32 - i * 0.07})`,
              boxShadow:
                i === 0 ? "0 0 40px rgba(74,126,255,0.35)" : undefined,
            }}
          />
        ))}

        {/* Side sports */}
        <motion.div
          initial={{ x: -140, opacity: 0 }}
          animate={{ x: -120, opacity: 0.5 }}
          transition={{ delay: 0.2 }}
          className="absolute h-24 w-24 overflow-hidden rounded-full"
          style={{
            background: `linear-gradient(135deg, ${
              SPORTS[(activeIndex - 1 + SPORTS.length) % SPORTS.length]
                .gradient === "from-green-500 to-emerald-700"
                ? "#22c55e, #065f46"
                : "#f97316, #7c2d12"
            })`,
          }}
        >
          <div className="flex h-full w-full items-center justify-center text-4xl">
            {SPORTS[(activeIndex - 1 + SPORTS.length) % SPORTS.length].emoji}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 140, opacity: 0 }}
          animate={{ x: 120, opacity: 0.5 }}
          transition={{ delay: 0.2 }}
          className={`absolute h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br ${
            SPORTS[(activeIndex + 1) % SPORTS.length].gradient
          }`}
        >
          <div className="flex h-full w-full items-center justify-center text-4xl">
            {SPORTS[(activeIndex + 1) % SPORTS.length].emoji}
          </div>
        </motion.div>

        {/* Active sport */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.35, type: "spring" }}
          className={`relative z-10 flex h-[130px] w-[130px] flex-col items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${active.gradient} shadow-[0_0_40px_rgba(74,126,255,0.5)]`}
        >
          <div className="text-6xl">{active.emoji}</div>
        </motion.div>
        <div className="absolute bottom-4 text-base font-semibold text-white">
          {active.name}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {SPORTS.map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all"
            style={{
              width: i === activeIndex ? 14 : 5,
              background: i === activeIndex ? "#4a7eff" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* Events */}
      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">Events near you</div>
            <div className="mt-0.5 text-[11px] text-white/50">
              2 {active.name.toLowerCase()} events available
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-[#4a7eff]/40 px-3 py-1.5 text-xs text-[#4a7eff]">
            25 miles <ChevronDown className="h-3 w-3" />
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 rounded-xl border-l-2 border-[#4a7eff] bg-[#0d1220] p-3"
        >
          <div className="flex items-start justify-between">
            <div className="text-sm font-semibold">Weekend Singles Ladder</div>
            <div className="text-xs font-medium text-red-400">0.6 mi</div>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-white/60">
            <Calendar className="h-3 w-3" />
            Apr 18, 2026 · 4:21 PM
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/60">
            <MapPin className="h-3 w-3" />
            Barton Tennis Center · 5/8 joined
          </div>
        </motion.div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/80 backdrop-blur">
        <div className="flex items-center justify-around py-2.5 text-[10px]">
          <div className="flex flex-col items-center gap-0.5 text-[#4a7eff]">
            <Home className="h-5 w-5" />
            Home
          </div>
          <div className="flex flex-col items-center gap-0.5 text-white/40">
            <Plus className="h-5 w-5" />
            Create
          </div>
          <div className="flex flex-col items-center gap-0.5 text-white/40">
            <Calendar className="h-5 w-5" />
            My Events
          </div>
          <div className="flex flex-col items-center gap-0.5 text-white/40">
            <User className="h-5 w-5" />
            Profile
          </div>
        </div>
      </div>
    </div>
  );
}
