import type { Metadata } from "next";
import BlueDust from "@/components/BlueDust";
import SoonHero from "@/components/SoonHero";

export const metadata: Metadata = {
  title: "Zuup — Almost game time",
  description: "Zuup is in final warmups. Launch is moments away.",
  robots: { index: false, follow: false },
};

export default function SoonPage() {
  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-black px-6">
      <BlueDust />
      <SoonHero />
    </main>
  );
}
