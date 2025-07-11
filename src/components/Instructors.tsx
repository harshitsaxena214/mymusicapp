import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const instructors = [
    {
    id: 1,
    name: "Oliver Bennett",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Amelia Clarke",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Harry Thompson",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Chloe Davies",
    designation: "Violin Instructor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "James Whitaker",
    designation: "Music Production Mentor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  }
];
function MusicInstructors() {
  return (
     <div className="relative h-[42rem] md:h-[47rem] overflow-hidden flex flex-col items-center justify-center gap-5">
         <WavyBackground className="max-w-4xl mx-auto pb-40" colors={["#7c3aed",  "#8b5cf6", "#e879f9", "#f472b6","#fb7185"]}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center mt-10 mb-8">Meet Our Instructors</h2>
            <p className="text-lg md:text-xl  text-white text-center pb-5 mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
            </WavyBackground>
    </div>
  )
}

export default MusicInstructors