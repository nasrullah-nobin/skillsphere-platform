import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import john from "@/assets/john.jpg";
import Emily from "@/assets/Emily.jpg";
import Michael from "@/assets/Michael.jpg";
import Sarah from "@/assets/sarah.jpg";

const Instructors = () => {
  return (
    <div className="my-20 px-4 max-w-7xl mx-auto space-y-6">

      
      <div className="flex justify-center">
        <Chip color="success">🎓 Expert Mentor</Chip>
      </div>

      
      <h2 className="text-4xl font-bold text-center">
        Our Professional{" "}
        <span className="text-[#5342B9]">Mentors</span>
      </h2>

     
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
        Our mentors are experienced professionals from the industry who guide
        you with practical knowledge, real-world insights, and step-by-step
        learning support to help you grow faster and smarter.
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        
        <div className="rounded-2xl bg-linear-to-r from-[#DDE2F6] to-[#DFDCFE] p-5 text-center shadow hover:shadow-xl transition duration-300">
          <Image
            src={john}
            alt="John"
            width={120}
            height={120}
            className="rounded-full mx-auto object-cover border-4 border-white"
          />
          <h4 className="font-bold text-xl mt-4">John Doe</h4>
          <p className="text-sm text-gray-700">App Development Expert</p>
        </div>

        
        <div className="rounded-2xl bg-linear-to-r from-[#DDE2F6] to-[#DFDCFE] p-5 text-center shadow hover:shadow-xl transition duration-300">
          <Image
            src={Emily}
            alt="Emily"
            width={120}
            height={120}
            className="rounded-full mx-auto object-cover border-4 border-white"
          />
          <h4 className="font-bold text-xl mt-4">Emily Johnson</h4>
          <p className="text-sm text-gray-700">UI/UX Design Expert</p>
        </div>

        
        <div className="rounded-2xl bg-linear-to-r from-[#DDE2F6] to-[#DFDCFE] p-5 text-center shadow hover:shadow-xl transition duration-300">
          <Image
            src={Michael}
            alt="Michael"
            width={120}
            height={120}
            className="rounded-full mx-auto object-cover border-4 border-white"
          />
          <h4 className="font-bold text-xl mt-4">Michael Smith</h4>
          <p className="text-sm text-gray-700">Data Science Expert</p>
        </div>

     
        <div className="rounded-2xl bg-linear-to-r from-[#DDE2F6] to-[#DFDCFE] p-5 text-center shadow hover:shadow-xl transition duration-300">
          <Image
            src={Sarah}
            alt="Sarah"
            width={120}
            height={120}
            className="rounded-full mx-auto object-cover border-4 border-white"
          />
          <h4 className="font-bold text-xl mt-4">Sarah Ahmed</h4>
          <p className="text-sm text-gray-700">Marketing Expert</p>
        </div>

      </div>
    </div>
  );
};

export default Instructors;