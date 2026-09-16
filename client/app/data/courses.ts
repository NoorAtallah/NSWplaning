import type { LucideIcon } from "lucide-react";
import {
  HeartHandshake,
  GraduationCap,
  ShieldAlert,
  Stethoscope,
  ClipboardCheck,
  Wallet,
} from "lucide-react";

/**
 * Single source of truth for course content.
 *
 * TODO — this is placeholder catalogue data. Once eSkilled confirms API access,
 * this file should be replaced by a fetch from the LMS so the site and the
 * catalogue can never drift apart. Durations, module counts and CPD hours all
 * need confirming with the client.
 */

export type CourseStatus = "Available" | "Coming Soon";

export type Course = {
  code: string;
  slug: string;
  title: string;
  desc: string;
  image: string;
  status: CourseStatus;
  category: string;
  icon: LucideIcon;
  duration: string;
  modules: number;
  cpdHours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
};

export const categories = [
  { label: "All Courses", value: "All" },
  { label: "NDIS & Disability", value: "NDIS" },
  { label: "Aged & Health Care", value: "Health" },
  { label: "Compliance & Safety", value: "Compliance" },
  { label: "Business & Foundations", value: "Business" },
] as const;

export const courses: Course[] = [
  {
    code: "NDI",
    slug: "ndis-disability-sector-training",
    title: "NDIS & Disability",
    desc: "Build knowledge and skills to support safe, respectful and person-centred disability services.",
    image:
      "https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=800&q=80",
    status: "Available",
    category: "NDIS",
    icon: HeartHandshake,
    duration: "6 weeks",
    modules: 8,
    cpdHours: 12,
    level: "Beginner",
  },
  {
    code: "HSE",
    slug: "health-safety-compliance",
    title: "Health & Safety",
    desc: "Explore practical approaches to safer workplaces, risk awareness and everyday wellbeing.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80",
    status: "Available",
    category: "Compliance",
    icon: ShieldAlert,
    duration: "4 weeks",
    modules: 6,
    cpdHours: 8,
    level: "Intermediate",
  },
  {
    code: "HCP",
    slug: "healthcare-professional-development",
    title: "Healthcare",
    desc: "Expand your healthcare knowledge to support professional growth and better care.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    status: "Coming Soon",
    category: "Health",
    icon: Stethoscope,
    duration: "12 weeks",
    modules: 14,
    cpdHours: 24,
    level: "Advanced",
  },
  {
    code: "VOC",
    slug: "vocational-skills-foundation-training",
    title: "Vocational Development",
    desc: "Strengthen foundation skills and build confidence for work and further learning.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    status: "Available",
    category: "Business",
    icon: GraduationCap,
    duration: "8 weeks",
    modules: 10,
    cpdHours: 16,
    level: "Beginner",
  },
  {
    code: "ISO",
    slug: "quality-standards-compliance",
    title: "Quality & ISO Standards",
    desc: "Develop your understanding of quality systems, ISO standards and continuous improvement.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    status: "Coming Soon",
    category: "Compliance",
    icon: ClipboardCheck,
    duration: "10 weeks",
    modules: 12,
    cpdHours: 20,
    level: "Advanced",
  },
  {
    code: "BHF",
    slug: "business-health-financial-management",
    title: "Business & Financial Management",
    desc: "Build practical knowledge to improve business operations, financial understanding and decision-making.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    status: "Coming Soon",
    category: "Business",
    icon: Wallet,
    duration: "8 weeks",
    modules: 9,
    cpdHours: 16,
    level: "Intermediate",
  },
];
