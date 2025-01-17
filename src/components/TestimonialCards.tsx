"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This academy transformed my understanding of music. The instructors are incredibly talented and supportive!",
    name: "Emily Carter",
    title: "Piano Student",
  },
  {
    quote:
      "Learning here has been a dream come true. The vocal training classes have boosted my confidence immensely.",
    name: "Ryan Lopez",
    title: "Vocal Student",
  },
  {
    quote:
      "The guitar program is outstanding. I’ve gone from being a beginner to performing on stage in just a year!",
    name: "Sophia Martinez",
    title: "Guitar Student",
  },
  {
    quote:
      "Their approach to teaching music theory is exceptional. It's the perfect blend of fun and challenge.",
    name: "Oliver Smith",
    title: "Music Theory Student",
  },
  {
    quote:
      "I love the personalized attention the academy offers. The drum lessons have been absolutely thrilling!",
    name: "Liam Johnson",
    title: "Drum Student",
  },
  {
    quote:
      "The environment is so inspiring. From the teachers to the facilities, everything is top-notch.",
    name: "Isabella Brown",
    title: "Violin Student",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
