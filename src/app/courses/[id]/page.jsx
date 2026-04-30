import { getCourses } from "@/Components/dataFetch";
import Image from "next/image";

const CourseDetails = async ({ params }) => {
  const courses = await getCourses();
  const {id} = await params;

  const course = courses.find(item=> item.id == id);
 
 
  if (!course) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Course Not Found</h2>
      </div>
    );
  }

  return (
 <div className="max-w-6xl mx-auto p-6 mt-10">


  <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">


    <div className="p-4">
      <Image
        src={course.image}
        alt={course.title}
        width={1000}
        height={600}
        className="rounded-xl object-cover w-full h-full"
      />
    </div>


    <div className="p-6 space-y-4">


      <h1 className="text-3xl font-bold">
        {course.title}
      </h1>

   
      <p className="text-gray-600">
        👨‍🏫 Instructor: <span className="font-medium">{course.instructor}</span>
      </p>


      <div className="flex flex-wrap gap-2 text-sm">
        <span className="px-3 py-1 bg-gray-100 rounded-full">⏱ {course.duration}</span>
        <span className="px-3 py-1 bg-yellow-100 rounded-full">⭐ {course.rating}</span>
        <span className="px-3 py-1 bg-blue-100 rounded-full">📊 {course.level}</span>
        <span className="px-3 py-1 bg-green-100 rounded-full">📚 {course.category}</span>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {course.description}
      </p>

     
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Enroll Now
      </button>

    </div>

  </div>
</div>
  );
};

export default CourseDetails;