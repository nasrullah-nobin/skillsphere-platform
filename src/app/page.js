import Banner from "@/Components/Banner";
import Instructors from "@/Components/Instructors ";
import LearningTips from "@/Components/LearningTips";
import { PopularCourses } from "@/Components/PopularCourses";


export default function Home() {
  return (
  <>
  <Banner></Banner>
  <PopularCourses></PopularCourses>
  <LearningTips></LearningTips>
  <Instructors></Instructors>
  </>
  );
}
