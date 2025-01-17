"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Getting Started with AWS for Music Educators",
      description:
        "Learn how AWS can simplify course management, virtual lessons, and student data storage for music academies.",
      slug: "getting-started-with-aws",
      isFeatured: true,
    },
    {
      title: "Enhancing Virtual Music Lessons with AWS AI",
      description:
        "Discover how AWS AI tools like Amazon Transcribe and Amazon Polly can enhance the quality of online music education.",
      slug: "enhancing-virtual-music-lessons",
      isFeatured: true,
    },
    {
      title: "Scalable Solutions for Music Events with AWS",
      description:
        "Find out how AWS enables music academies to host virtual concerts and live-streamed events with ease.",
      slug: "scalable-solutions-for-music-events",
      isFeatured: true,
    },
    {
      title: "AWS Tools for Recording Studios in Music Academies",
      description:
        "Explore AWS tools like Amazon S3 and AWS Lambda for secure storage and seamless automation in recording studios.",
      slug: "aws-tools-for-recording-studios",
      isFeatured: true,
    },
    {
      title: "Building a Cloud-Based Learning Platform with AWS",
      description:
        "Learn how to create scalable and secure platforms for music theory and practice lessons using AWS services.",
      slug: "building-cloud-based-learning-platform",
      isFeatured: true,
    },
    {
      title: "Optimizing Practice Sessions with AWS Data Analytics",
      description:
        "Discover how AWS analytics tools can help students and educators track progress and optimize practice routines.",
      slug: "optimizing-practice-sessions",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold trackig-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            className="px-6 py-3 rounded-full text-white bg-gray-800 hover:bg-gray-700 shadow-md hover:shadow-lg transition duration-300 font-semibold tracking-wide"
            href={"/"}
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
