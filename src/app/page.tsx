import Navbar from "@/src/components/sections/Navbar"; // Deberás crear este basado en el HTML
import Hero from "@/src/components/sections/Hero";
import AtriaProject from "@/src/components/sections/AtriaProject";
import ExperienceGrid from "@/src/components/sections/ExperienceGrid";
import Strategist from "@/src/components/sections/Strategist";
import Footer from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background-dark min-h-screen text-slate-100 selection:bg-primary/30">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
        <Hero />
        <AtriaProject />
        <ExperienceGrid />
        <Strategist />
      </div>
      <Footer />
    </main>
  );
}