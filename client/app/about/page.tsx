import type { Metadata } from "next";
import AboutStory from "./AboutStory";

export const metadata: Metadata = {
  title: "About The Academy",
  description:
    "NSWPM Academy delivers accessible, practical, high-quality education and Continuing Professional Development for the NDIS, disability, aged care and community services workforce across Australia.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutStory />;
}
