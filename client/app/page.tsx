import {
  ActTitle,
  ActReveal,
  ActPromise,
} from "./components/home/HomeOpening";
import {
  StorySteps,
  CourseGallery,
  OrganisationsBand,
  HomeCTA,
} from "./components/home/HomeSections";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <ActTitle />
      <ActReveal />
      <ActPromise />
      <StorySteps />
      <CourseGallery />
      <OrganisationsBand />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
}
