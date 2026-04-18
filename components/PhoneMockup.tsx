"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function PhoneMockup({ children, className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ width: 300, height: 620 }}
    >
      {/* Glow behind */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[60px] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(74,126,255,0.55), transparent 65%)",
        }}
      />
      {/* Frame */}
      <div
        className="relative h-full w-full rounded-[44px] p-[3px]"
        style={{
          background:
            "linear-gradient(145deg, #3a5bc7 0%, #1a1f3a 40%, #0a0f1f 100%)",
          boxShadow:
            "0 40px 80px -20px rgba(74,126,255,0.35), 0 0 0 1px rgba(74,126,255,0.15) inset",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[42px] bg-black"
          style={{
            boxShadow: "inset 0 0 0 2px #000",
          }}
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          {/* Status bar spacer */}
          <div className="h-9" />
          <div className="relative h-[calc(100%-36px)] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
