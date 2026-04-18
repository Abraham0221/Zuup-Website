import BlueDust from "@/components/BlueDust";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SportsShowcase from "@/components/SportsShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex-1 bg-black">
      <BlueDust />
      <Navbar />
      <Hero />
      <SportsShowcase />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
