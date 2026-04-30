"use client";
import Link from "next/link";
import Image from "next/image";
import hero from "@/assets/hero.jpg";
import { Avatar } from "@heroui/react";
import student from "@/assets/students.jpg";
import mentor from "@/assets/mentor.webp";

export default function Banner() {
  return (
    <section className="bg-linear-to-br from-[#D4EDED] to-[#DFDCFD] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-heading leading-tight">
            Upgrade Your Skills Today. <br />
            Build Your Future 🚀
          </h1>

          <p className="mt-4 text-body text-lg max-w-lg">
            Learn from industry experts and gain practical skills to grow your
            career faster.
          </p>

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

        <div className="flex justify-center relative">
             <div className="flex items-center gap-2.5 bg-white rounded-xl absolute right-0 -top-6 p-2">
            <Avatar>
              <Image
                src={mentor}
                alt="Mentor"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h6 className="text-xl font-bold">300+</h6>
              <p className="text-lg ">Experts Mentors</p>
            </div>
          </div>
          <Image
            src={hero}
            alt="learning"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="flex items-center gap-2.5 bg-white rounded-xl absolute left-0 -bottom-4 p-2">
            <Avatar>
              <Image
                src={student}
                alt="student"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h6 className="text-xl font-bold">50k+</h6>
              <p className="text-lg ">Total students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
