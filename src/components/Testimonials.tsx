import { div } from "motion/react-client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import React from "react";

const musicTestimonials = [
  {
    quote:
      "Enrolling here completely reshaped how I experience music. The lessons are immersive, and the mentors genuinely care about your growth.",
    name: 'Rohan Mehta',
    title: 'Guitar Student',
  },
  {
    quote:
      "This school gave me the confidence and platform to evolve as a pianist and performer. The support system is truly inspiring.",
    name: 'Ananya Verma',
    title: 'Piano Student',
  },
  {
    quote:
      "With tailored vocal training and incredible feedback, I found my unique voice. The experience has been truly empowering.",
    name: 'Zayan Sheikh',
    title: 'Vocal Student',
  },
  {
    quote:
      "I finally found a violin instructor who understands my artistic vision. The guidance I’ve received has been invaluable.",
    name: 'Meera Nambiar',
    title: 'Violin Student',
  },
  {
    quote:
      "The hands-on production classes gave me real-world insights and boosted my creativity. A must for anyone passionate about producing music.",
    name: 'Kabir Rathore',
    title: 'Music Production Student',
  },
];

function MusicTestimonials() {
  return (
     <div className="h-[47rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
         <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
        <h2 className="text-5xl font-bold text-center mb-12 z-10">The Sound of Success: Voices from Our Music Family</h2>
         <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicTestimonials}
                direction="right"
                speed="normal"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicTestimonials