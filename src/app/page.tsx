import { main } from "motion/react-client";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo";
import MusicTestimonials from "@/components/Testimonials";
import MusicInstructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
         
      < HeroSection />
      <FeaturedCourses />
      <StickyScrollRevealDemo />
      <MusicTestimonials />
      <MusicInstructors />
      <Footer></Footer>
    </main>

  );
}
