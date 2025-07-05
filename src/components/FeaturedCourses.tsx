
import courseData from "@/data/music_courses.json"
import {Button} from "./ui/moving-border"
import Link from "next/link"

import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean, 
}

function FeaturedCourses() {
    const featuredCourses=courseData.courses.filter((course:Course) => course.isFeatured)
  return (
  
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="
                md:text-2xl
                font-semiboldtext-center text-teal-900">Featured Couses</h2>
                <p className="mt-2 leading-8 font-extrabold text-white md:text-4xl">Learn With The Best</p>
            </div>
        </div>

        <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
                <div key={course.id} className="flex justify-center">
                  <BackgroundGradient className="flex flex-col max-w-sm rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full">
                    <div className="flex flex-col flex-grow items-center text-center p-4 sm:p-6">
                        <p className="text-lg  sm:text-xl text-black dark:text-neutral-200 mb-2 mt-4">{course.title}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                        <Link href={`/courses/${course.slug}`}>Learn More
                        </Link>
                    </div>
                  </BackgroundGradient>
                </div>))}
        </div>
    </div>

        <div className="pt-10 flex justify-center items-center 
        ">
            <Button>
                <Link href={"/courses"}>View All Courses</Link>
            </Button>
        </div>
    </div>
   
  )
}

export default FeaturedCourses