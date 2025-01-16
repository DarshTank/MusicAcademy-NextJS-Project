"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const MusicSchoolContent = [
  {
    title: "Discover Musical Instruments",
    description:
      "Dive into the world of music by exploring a wide range of instruments. From the soothing melodies of string instruments like the violin and cello to the rhythmic beats of percussion instruments such as drums and tambourines, discover your passion and unleash your musical potential. Each instrument has a story to tell and a unique sound that can resonate with your personality and style.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
        Discover Musical Instruments
      </div>
    ),
  },
  {
    title: "Learn to Play",
    description:
      "Master the art of playing your favorite instrument with guidance from expert instructors. Our lessons are tailored to suit all skill levels, from beginners exploring their first notes to advanced musicians refining their techniques. Learn at your own pace through one-on-one sessions or group workshops. Whether you dream of playing classical sonatas on the piano or strumming vibrant tunes on the guitar, we have a course for you.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Learn to Play
      </div>
    ),
  },
  {
    title: "Music Theory",
    description:
      "Understand the language of music and unlock the secrets behind every melody. Our comprehensive music theory courses cover everything from reading sheet music, scales, and chords to advanced composition techniques like harmony, counterpoint, and rhythm analysis. Whether you're an aspiring composer or a performer looking to deepen your knowledge, music theory is your key to becoming a well-rounded musician.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Music Theory
      </div>
    ),
  },
  {
    title: "Join a Band",
    description:
      "Experience the joy of playing with others by joining a band. Collaborate, create, and perform music together in a supportive and fun environment. Playing in a band not only enhances your musical abilities but also fosters teamwork, communication, and confidence. Perfect for students looking to sharpen their ensemble skills while forming lifelong friendships and unforgettable memories.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        Join a Band
      </div>
    ),
  },
  {
    title: "Music Appreciation",
    description:
      "Embark on a journey to understand and appreciate music from different genres, cultures, and eras. Learn how music has evolved over centuries and how it continues to shape the world. From classical symphonies to modern-day pop hits, this course helps you develop a deep connection with the art form while broadening your musical horizons.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] flex items-center justify-center text-white">
        Music Appreciation
      </div>
    ),
  },
  {
    title: "Music Technology",
    description:
      "Explore the intersection of music and technology. Learn how to use modern tools like digital audio workstations (DAWs), recording equipment, and synthesizers to create, record, and produce music. This course is perfect for aspiring producers and musicians looking to dive into the world of music production and sound design.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
        Music Technology
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full">
      <StickyScroll content={MusicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
