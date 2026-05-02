import { FaUserTie, FaClock, FaBriefcase, FaLightbulb } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="mt-16 py-16 bg-linear-to-br from-[#DFDCFD] to-[#D4EDED] px-4">
      

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold">
          Why Choose SkillSphere? 🚀
        </h2>
        <p className="text-gray-600 mt-2">
          We don’t just teach — we help you build real skills for real-world success.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <FaLightbulb className="text-blue-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Real-World Learning</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Learn with practical projects and industry-based examples.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <FaUserTie className="text-green-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Expert Mentors</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Get guidance from professionals with real experience.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <FaClock className="text-purple-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Flexible Learning</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Learn anytime, anywhere at your own pace.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <FaBriefcase className="text-orange-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg">Career Focused</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Build skills that help you get jobs and freelance work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;