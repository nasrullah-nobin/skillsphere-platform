import { getCourses } from "@/Components/dataFetch";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { BiCategory } from "react-icons/bi";
import CourseSearch from "@/Components/CourseSearch";

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
            <div key={course.id} className="border rounded-xl p-4 shadow">
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="rounded-lg"
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