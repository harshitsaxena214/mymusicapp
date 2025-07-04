import { main } from "motion/react-client";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
         <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      />
       < HeroSection />
      <FeaturedCourses></FeaturedCourses>
    </main>

  );
}
