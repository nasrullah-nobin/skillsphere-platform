"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";


export default function Banner() {
  const slides = [
    {
      title: "Upgrade Your Skills Today 🚀",
      desc: "Learn modern skills from industry experts and build real-world projects.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      topBadge: {
        image: "https://i.pravatar.cc/40?img=12",
        title: "Expert Mentors",
        count: "300+",
      },

      bottomBadge: {
        image: "https://i.pravatar.cc/40?img=1",
        title: "Total Students",
        count: "50k+",
      },
    },

    {
      title: "Learn From Expert Mentors 🎓",
      desc: "Get guidance from professionals with real experience.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

      topBadge: {
        image: "https://i.pravatar.cc/40?img=5",
        title: "Active Mentors",
        count: "120+",
      },

      bottomBadge: {
        image: "https://i.pravatar.cc/40?img=2",
        title: "Active Learners",
        count: "70k+",
      },
    },

    {
      title: "Build Your Career Faster 💼",
      desc: "Gain job-ready skills and start freelancing or land your dream job.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",

      topBadge: {
        image: "https://i.pravatar.cc/40?img=8",
        title: "Career Coaches",
        count: "500+",
      },

      bottomBadge: {
        image: "https://i.pravatar.cc/40?img=9",
        title: "Success Stories",
        count: "100k+",
      },
    },
  ];
  return (
    <section className="bg-linear-to-br from-[#D4EDED] to-[#DFDCFD] py-16 lg:py-24">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg max-w-lg">{slide.desc}</p>

                <div className="mt-6 flex gap-4">
                  <Link
                    href="/courses"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Browse Courses
                  </Link>

                  <Link
                    href="/about"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-125 h-100">
                
                  <Image
                    src={slide.image}
                    alt="hero"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                  />

                  
                  <div className="absolute top-0 -right-8 bg-white shadow-md rounded-xl px-3 py-2 flex items-center gap-2 z-10">
                    <Image
                      src={slide.topBadge.image}
                      alt="mentor"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div>
                      <h6 className="text-lg font-bold">
                        {slide.topBadge.count}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {slide.topBadge.title}
                      </p>
                    </div>
                  </div>

                
                  <div className="absolute bottom-0 -left-8 bg-white shadow-md rounded-xl px-3 py-2 flex items-center gap-2 z-10">
                    <Image
                      src={slide.bottomBadge.image}
                      alt="student"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div>
                      <h6 className="text-lg font-bold">
                        {slide.bottomBadge.count}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {slide.bottomBadge.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
