import { FaBookOpen, FaClock } from "react-icons/fa";

const LearningTips = () => {
  return (
    <section className=" mt-16 px-4 bg-linear-to-br from-[#E6F7F7] to-[#F0EEFF] py-16 lg:py-24">
      
      
    <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
        <h2 className="text-3xl font-bold">
          Study Smarter, Not Harder 📚
        </h2>
        <p className="text-gray-500 mt-2">
          Simple tips to improve your learning efficiency and productivity.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition ">
          <div className="text-blue-600 text-3xl mb-3">
            <FaBookOpen />
          </div>
          <h3 className="text-xl font-semibold">
            Study Techniques
          </h3>
          <p className="text-gray-600 mt-2">
            Learn actively, not passively. Practice regularly, take notes, and revise often to improve understanding and memory.
          </p>
        </div>

        
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
          <div className="text-green-600 text-3xl mb-3">
            <FaClock />
          </div>
          <h3 className="text-xl font-semibold">
            Time Management Tips
          </h3>
          <p className="text-gray-600 mt-2">
            Plan your day, set clear goals, and avoid distractions. Focus on one task at a time to stay productive and consistent.
          </p>
        </div>

      </div>
    </div>
    </section>
  );
};

export default LearningTips;