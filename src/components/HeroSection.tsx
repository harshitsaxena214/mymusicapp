import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import { BackgroundLines } from './ui/background-lines'
import { Spotlight } from './ui/Spotlight'

function HeroSection() {
  return (
    
    <div className='h-[47rem] md:h-[46rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-48 md:py-0'>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      /> 
      <div className="p-4 relative z-10 w-full text-center flex flex-col gap-4.5">
      <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:pb-2'>Master The Music, Own The Stage</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Discover original beats, soulful melodies, and the rhythm that moves you.
        Whether you're here to vibe, collab, or explore – this is your sound sanctuary.</p>
       
        <div className="mt-4"><Link href={"/courses"}><Button className='hover:cursor-pointer'>Explore Courses</Button></Link></div>
         
         </div>
         </BackgroundLines>
      </div>
  )
}

export default HeroSection