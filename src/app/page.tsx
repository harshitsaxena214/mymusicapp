import { main } from "motion/react-client";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
       < HeroSection />
    </main>

  );
}
