import Image from "next/image";
import Hero from "./components/heroSection";
import AboutSection from "./components/AboutSection";
import CTABanner from "./components/CTAbanner";
import CoursesSection from "./components/CoursesSection";
export default function Home() {
  return (
    <div>
    
      <Hero />
      <AboutSection />
      <CTABanner />
      <CoursesSection />
    </div>
  );
}
