"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
  blur: number;
};

const COUNT = 80;

function makeParticles(viewportWidth: number): Particle[] {
  return Array.from({ length: COUNT }, (_, i) => {
    const size = Math.random() * 3 + 0.6;
    return {
      id: i,
      left: Math.random() * 100,
      size,
      delay: Math.random() * 8,
      duration: 9 + Math.random() * 14,
      drift: (Math.random() - 0.5) * (viewportWidth < 640 ? 40 : 120),
      opacity: 0.25 + Math.random() * 0.65,
      blur: size < 1.2 ? 0 : Math.random() * 1.2,
    };
  });
}

export default function BlueDust() {
  const [mounted, setMounted] = useState(false);
  const [vw, setVw] = useState(1280);

  useEffect(() => {
    setMounted(true);
    setVw(window.innerWidth);
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const particles = useMemo(() => makeParticles(vw), [vw]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: "-10vh", x: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: p.drift,
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.08, 0.9, 1],
          }}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #a9c4ff 0%, #4a7eff 60%, rgba(74,126,255,0) 100%)",
            boxShadow: `0 0 ${p.size * 4}px rgba(74,126,255,0.7)`,
            filter: p.blur ? `blur(${p.blur}px)` : undefined,
          }}
        />
      ))}
    </div>
  );
}
