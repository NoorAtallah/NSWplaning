import { HeroStatement } from "./components/home/HeroStatement";
import {
  ActSubjects,
  ActCourseList,
  ActPath,
  ActScale,
  ActClosing,
} from "./components/home/HomeActs";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroStatement />
      <ActSubjects />
      <ActCourseList />
      <ActPath />
      <ActScale />
      <TestimonialsSection />
      <ActClosing />
    </>
  );
}
