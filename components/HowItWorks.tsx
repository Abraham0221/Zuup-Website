"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Pick your sport",
    text: "Spin through basketball, tennis, volleyball, and more. Pick the one you're feeling today.",
  },
  {
    num: "02",
    title: "Find or create a game",
    text: "Browse events near you — or launch your own in under 30 seconds. Set the time, place, and player count.",
  },
  {
    num: "03",
    title: "Show up. Play.",
    text: "Confirmed roster, real location, real players. You bring the energy, we handle the logistics.",
  },
];

function CreateEventMini() {
  return (
    <div className="relative h-full w-full bg-black px-4 pt-3 text-white">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <ChevronRight className="h-4 w-4 rotate-180" /> Back
      </div>
      <div className="mt-6">
        <div className="text-3xl font-black tracking-tight">Create Event</div>
        <div className="mt-1 text-sm text-white/50">Start your own game</div>
      </div>
      <div className="mt-6 text-xs text-white/50">Sport</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {[
          ["Basketball", true],
          ["Soccer", false],
          ["Tennis", false],
          ["Volleyball", false],
          ["Running", false],
          ["Cycling", false],
        ].map(([name, active]) => (
          <div
            key={name as string}
            className={`rounded-full px-4 py-1.5 text-xs ${
              active
                ? "bg-[#4a7eff] text-white shadow-[0_0_20px_rgba(74,126,255,0.6)]"
                : "border border-white/10 text-white/70"
            }`}
          >
            {name as string}
          </div>
        ))}
      </div>
      <div className="mt-5 text-xs text-white/50">Event Title</div>
      <div className="mt-2 rounded-xl border border-white/10 bg-[#0d1220] p-3 text-sm text-white/40">
        e.g., 3v3 Street Basketball
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <div className="mb-1.5 flex items-center gap-1 text-xs text-white/50">
            <Calendar className="h-3 w-3" /> Date
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0d1220] p-2.5 text-xs text-white/40">
            mm/dd/yyyy
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex items-center gap-1 text-xs text-white/50">
            <Clock className="h-3 w-3" /> Time
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0d1220] p-2.5 text-xs text-white/40">
            --:--
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs text-white/50">
        <MapPin className="h-3 w-3" /> Location
      </div>
      <div className="mt-2 rounded-xl border border-white/10 bg-[#0d1220] p-2.5 text-xs text-white/40">
        e.g., Downtown Courts
      </div>
    </div>
  );
}

function EventDetailMini() {
  return (
    <div className="relative h-full w-full bg-black text-white">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(135deg, #f97316 0%, #7c2d12 60%, #0a0f1f 100%)",
        }}
      />
      <div className="px-4 pt-3">
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full border border-cyan-400/50 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
            VOLLEYBALL
          </span>
          <span className="rounded-full border border-emerald-400/50 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            RECREATIONAL
          </span>
          <span className="rounded-full border border-emerald-400/50 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            CONFIRMED
          </span>
        </div>
        <div className="mt-3 text-2xl font-bold leading-tight">
          Friday Sand
          <br />
          Volleyball Mix
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
          <Calendar className="h-4 w-4 text-white/50" />
          Sun, Apr 19 · 2:36 AM
        </div>
        <div className="mt-2 flex items-start gap-2 text-sm text-white/80">
          <MapPin className="mt-0.5 h-4 w-4 text-white/50" />
          Lakeview Sand Courts,
          <br />
          88 Shoreline Ave
        </div>
        <div className="mt-4 text-sm font-semibold">Event info</div>
        <div className="mt-1 text-xs text-white/60">
          4v4 co-ed games with music and rotating teams.
        </div>
        <div className="mt-4 h-px bg-white/10" />
        <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
          <span className="text-white/50">$</span>
          $5.00 / player
        </div>
        <div className="mt-1.5 flex items-center gap-2 text-xs text-emerald-400">
          <Users className="h-3 w-3" />
          Confirmed — 10/16 players
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-[#6281f6] py-3 text-center text-sm font-bold text-white">
        Buy Ticket — $5.00
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7eff]">
            How it works
          </div>
          <h2 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
            From zero to
            <span className="text-gradient-blue italic"> on the court</span>
            <br />
            in under a minute.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr]">
          {/* Steps left */}
          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#4a7eff]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-black text-gradient-blue italic">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xl font-bold">{step.title}</div>
                    <div className="text-sm text-white/60">{step.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <CreateEventMini />
            </PhoneMockup>
          </motion.div>

          {/* Phone right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden justify-center md:flex"
          >
            <PhoneMockup>
              <EventDetailMini />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
