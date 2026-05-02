import Banner from "@/Components/Banner";
import Instructors from "@/Components/Instructors ";
import LearningTips from "@/Components/LearningTips";
import { PopularCourses } from "@/Components/PopularCourses";
import WhyChoose from "@/Components/WhyChoose";


export default function Home() {
  return (
  <>
  <Banner></Banner>
  <PopularCourses></PopularCourses>
  <LearningTips></LearningTips>
  <Instructors></Instructors>
  <WhyChoose></WhyChoose>
  </>
  );
}
