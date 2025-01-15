"use client";
import { div, p } from "framer-motion/client";
import CourseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  //   image: "/courses/guitar.jpg";
}

function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold trackig-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With The Best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {CourseData.courses.map((course: Course) => (
            <div key={course.id} className="flex justify-center transform">
              <BackgroundGradient className="flex flex-col rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <p className="mt-4 text-lg font-bold text-teal-500">
                    ${course.price}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-6 inline-block px-6 py-2 text-white bg-teal-600 rounded-full hover:bg-teal-500 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-6 py-3 rounded-full text-white bg-gray-800 hover:bg-gray-700 shadow-md hover:shadow-lg transition duration-300 font-semibold tracking-wide"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
