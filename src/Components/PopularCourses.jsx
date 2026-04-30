import { Button } from "@heroui/react";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";
import { getCourses } from "./dataFetch";

export const PopularCourses = async () => {
  const courses = await getCourses();
  const filtered = courses?.filter(c => c.rating > 4.5) || [];

  return (
    <div className="m-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
        <BiCategory /> Popular Courses
      </h2>

      {filtered.length === 0 ? (
        <p className="text-center mt-6">No courses found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filtered.slice(0,3).map((course) => (
            <div key={course.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
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
              <Button className="mt-3 w-full">View Details</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};