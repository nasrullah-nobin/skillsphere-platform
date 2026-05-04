import { getCourses } from "@/Components/dataFetch";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { BiCategory } from "react-icons/bi";
import CourseSearch from "@/Components/CourseSearch";


export const metadata = {
  title: "All Courses | SkillSphere 📚",
  description:
    "Explore all courses on SkillSphere. Learn web development, design, marketing, and data science from expert mentors and build real-world skills.",

  keywords: [
    "SkillSphere courses",
    "online courses",
    "web development",
    "react courses",
    "next.js courses",
    "UI UX design",
    "digital marketing",
    "data science",
    "learn coding online"
  ],

  openGraph: {
    title: "Browse All Courses | SkillSphere 📚",
    description:
      "Discover top courses across development, design, and marketing. Start learning today with SkillSphere.",
    url: "https://your-domain.vercel.app/courses",
    siteName: "SkillSphere",
    images: [
      {
        url: "https://raw.githubusercontent.com/nasrullah-nobin/skillsphere-platform/main/screencapture-localhost-3000-2026-05-04-08_58_36.png",
        width: 1200,
        height: 630,
        alt: "SkillSphere Courses Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "All Courses | SkillSphere",
    description:
      "Browse and enroll in top courses to upgrade your skills and boost your career.",
    images: [
      "https://raw.githubusercontent.com/nasrullah-nobin/skillsphere-platform/main/screencapture-localhost-3000-2026-05-04-08_58_36.png",
    ],
  },
};
const AllCourses = async ({searchParams}) => {
  
  const courses = await getCourses();
  
    const params = await searchParams;

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(
      params.search?.toLowerCase() || ""
    )
  );


  return (
    <div className="m-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
        <BiCategory /> All Courses
      </h2>

      <CourseSearch defaultValue={searchParams} />

      {filteredCourses.length === 0 ? (
        <p className="text-center mt-6">No courses found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="border rounded-xl p-4 shadow text-center md:text-left">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="rounded-lg mx-auto"
              />
              <h5 className="font-bold mt-3">{course.title}</h5>
              <p>{course.instructor}</p>
              <p className="text-yellow-500">⭐ {course.rating}</p>

              <Link href={`/courses/${course.id}`}>
                <Button className="mt-3 w-full">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;