/**
 * The NSWPM Academy course catalogue — every individual course.
 *
 * Source: "NSWPM Courses Catalogue FINAL 12-2025" (Word document). The text is
 * transcribed as written; only bullets, spacing and trailing full stops were
 * tidied. Categories (NDI, HSE, …) live in ./courses.ts — this file holds the
 * courses inside them.
 *
 * TODO — replace with a fetch from the eSkilled LMS once API access is
 * confirmed, so the site and the catalogue cannot drift apart.
 */

import { courses as categories } from "./courses";

export type CategoryCode = "NDI" | "HSE" | "HCP" | "VOC" | "ISO" | "BHF";

export type LearningOutcome = {
  text: string;
  /** Sub-points, where the catalogue breaks an outcome down further. */
  points?: string[];
};

export type CatalogueCourse = {
  code: string;
  slug: string;
  category: CategoryCode;
  title: string;
  /** null where the catalogue says "To be determined". */
  instructor: string | null;
  delivery: string;
  overview: string;
  duration: string;
  audience: string[];
  prerequisites: string;
  outcomes: LearningOutcome[];
  topics: string[];
  materials: string[];
  assessment: string[];
};

export const catalogue: CatalogueCourse[] = [
  {
    code: "NDI101",
    slug: "ndi101-ndis-code-of-conduct-essentials",
    category: "NDI",
    title: "NDIS Code of Conduct Essentials",
    instructor: "Ms. Rana Awad",
    delivery: "Online / Self-Paced",
    overview: "This practical workshop provides workers and providers with a clear understanding of the NDIS Code of Conduct and how it applies in everyday practice. Participants will learn how to meet their obligations, promote safe and ethical behaviour, and support the rights of people with disability.",
    duration: "3 hours",
    audience: [
      "New or existing workers in the NDIS sector",
      "Service providers seeking to strengthen compliance",
      "Support coordinators and disability support staff",
    ],
    prerequisites: "None. Open to all NDIS workers and providers.",
    outcomes: [
      { text: "Explain the purpose and scope of the NDIS Code of Conduct" },
      { text: "Apply the Code to common workplace scenarios" },
      { text: "Recognise and respond to misconduct and complaints" },
      { text: "Promote safety, dignity, and respect in service delivery" },
    ],
    topics: [
      "Introduction to the NDIS and regulatory framework",
      "Principles of the NDIS Code of Conduct",
      "Ethical behaviour and professional boundaries",
      "Real-world case studies and scenarios",
      "Rights and responsibilities of workers and participants",
    ],
    materials: [
      "Course workbook (digital or printed)",
      "Case study exercises",
      "Certificate of Attendance",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "NDI102",
    slug: "ndi102-ndis-worker-orientation-awareness",
    category: "NDI",
    title: "NDIS Worker Orientation Awareness",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This workshop introduces workers to the NDIS Worker Orientation requirements and the responsibilities of providing support and services under the NDIS. It focuses on building worker awareness of safety, respect, and quality service standards.",
    duration: "2.5 hours (approx.)",
    audience: [
      "New entrants to the NDIS workforce",
      "Existing workers seeking a refresher",
      "Allied health professionals, disability support workers, and service staff",
    ],
    prerequisites: "None. Suitable for beginners in the sector.",
    outcomes: [
      { text: "Understand the role of the NDIS Quality and Safeguards Commission" },
      { text: "Describe worker responsibilities under the NDIS" },
      { text: "Apply safe and respectful practices in line with participant rights" },
      { text: "Recognise the importance of ongoing professional conduct" },
    ],
    topics: [
      "The NDIS framework and purpose of orientation training",
      "Worker roles and responsibilities",
      "Safeguarding participants and promoting rights",
      "Professional conduct and ethical service delivery",
      "Scenarios and examples from frontline practice",
    ],
    materials: [
      "Online learning materials",
      "Downloadable orientation handbook",
      "Certificate of Attendance",
    ],
    assessment: [
      "No formal assessment. Self-reflection activities included.",
      "Certificate of Attendance issued on completion",
    ],
  },
  {
    code: "HSE101",
    slug: "hse101-first-aid-and-cpr-awareness-non-accredited",
    category: "HSE",
    title: "First Aid & CPR Awareness (non-accredited)",
    instructor: null,
    delivery: "Online / Self-Paced (Theory Awareness Only)",
    overview: "This awareness course introduces the basic first aid and CPR principles without formal accreditation. Participants gain confidence in responding to common workplace incidents, managing emergencies, and supporting professional responders until help arrives.",
    duration: "3 hours",
    audience: [
      "Workplace staff requiring first aid awareness training",
      "Disability and aged care support workers",
      "Community workers and volunteers",
    ],
    prerequisites: "None. Open entry.",
    outcomes: [
      { text: "Identify common workplace first aid situations" },
      { text: "Apply basic CPR techniques in an emergency" },
      { text: "Recognise when to escalate and call emergency services" },
      { text: "Provide safe support until professional responders arrive" },
    ],
    topics: [
      "Introduction to first aid principles",
      "Basic CPR awareness",
      "Managing workplace incidents (bleeding, shock, burns, fractures)",
      "Emergency response protocols",
      "Safety and self-care during incidents",
    ],
    materials: [
      "First aid handbook (non-accredited)",
      "Practical demonstrations",
      "Certificate of Attendance",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "HSE102",
    slug: "hse102-manual-handling-awareness-for-disability-workers",
    category: "HSE",
    title: "Manual Handling Awareness for Disability Workers",
    instructor: null,
    delivery: "Online / Self-Paced (with Video Simulation)",
    overview: "This workshop raises awareness of safe manual handling techniques for disability support workers. Participants learn strategies to minimise the risk of injury, protect clients, and maintain safe working environments.",
    duration: "2.5 hours",
    audience: [
      "Disability and aged care support workers",
      "Community service staff",
      "Workplace health and safety officers",
    ],
    prerequisites: "None. Open to all NDIS workers and providers.",
    outcomes: [
      { text: "Recognise risks associated with manual handling" },
      { text: "Apply safe lifting and transfer techniques" },
      { text: "Use mechanical aids effectively" },
      { text: "Reduce workplace injuries and strain" },
    ],
    topics: [
      "Principles of ergonomics in disability support",
      "Common hazards and injury risks",
      "Safe posture, lifting, and transfer techniques",
      "Practical demonstrations of manual handling aids",
      "Workplace health & safety responsibilities",
    ],
    materials: [
      "Downloadable training manual (PDF) with safe lifting and handling procedures",
      "Demonstration videos of correct techniques",
      "Practical workplace checklists",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "HSE103",
    slug: "hse103-infection-prevention-and-control-essentials",
    category: "HSE",
    title: "Infection Prevention & Control Essentials",
    instructor: "Dr. Rami Sawafteh",
    delivery: "Online / Self-Paced",
    overview: "This essentials workshop builds understanding of infection prevention and control (IPC) practices in health, disability, and community care settings. It equips workers with practical skills to maintain hygiene and minimise risks of infection spread.",
    duration: "3 hours",
    audience: [
      "Healthcare, aged care, and disability workers",
      "Community workers and volunteers",
      "Workplace HSE staff",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Understand principles of infection control" },
      { text: "Apply hygiene and cleaning protocols correctly" },
      { text: "Use PPE (personal protective equipment) safely" },
      { text: "Implement procedures for outbreak management" },
    ],
    topics: [
      "Infection transmission pathways",
      "Standard precautions in healthcare and disability settings",
      "Correct use of PPE",
      "Cleaning and disinfection practices",
      "Responding to infection incidents",
    ],
    materials: [
      "Interactive eLearning modules with real-life case studies",
      "Printable posters/checklists for infection control practices",
      "Access to infection control policy templates",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "HSE104",
    slug: "hse104-iso-45001-2018-ohs-awareness-training",
    category: "HSE",
    title: "ISO 45001:2018 – OHS Awareness Training",
    instructor: "Ms. Rana Awad",
    delivery: "Online / Self-Paced",
    overview: "This awareness workshop introduces the ISO 45001:2018 Occupational Health & Safety Management System (OHSMS). It equips participants with an overview of OHS principles, the structure of the standard, and how it supports workplace compliance and safety.",
    duration: "1 day (6 hours)",
    audience: [
      "OHS managers and supervisors",
      "Internal auditors and compliance staff",
      "Workers seeking awareness of ISO 45001 requirements",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Understand the purpose and structure of ISO 45001:2018" },
      { text: "Recognise the role of OHSMS in workplace safety" },
      { text: "Identify key clauses and requirements of the standard" },
      { text: "Explain the benefits of OHS implementation for organisations" },
    ],
    topics: [
      "ISO 45001:2018 framework and principles",
      "Risk management and hazard identification",
      "Worker participation and leadership",
      "Continuous improvement in OHSMS",
      "Integration with other ISO standards",
    ],
    materials: [
      "Comprehensive participant guide with ISO 45001 framework explained",
      "Case studies of workplace OHS implementation",
      "Access to sample documentation templates",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "HSE105",
    slug: "hse105-iso-45001-2018-ohs-audit",
    category: "HSE",
    title: "ISO 45001:2018 – OHS Audit",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This workshop introduces participants to the fundamentals of auditing against ISO 45001:2018. It focuses on practical audit techniques, compliance checking, and reporting skills to strengthen occupational health and safety management systems.",
    duration: "2 days (12 hours total)",
    audience: [
      "Internal auditors and compliance officers",
      "OHS managers and supervisors",
      "Consultants supporting ISO 45001 implementation",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Understand audit principles under ISO 45001:2018" },
      { text: "Plan, conduct, and report on OHS audits" },
      { text: "Identify nonconformities and opportunities for improvement" },
      { text: "Apply risk-based thinking in OHS audits" },
    ],
    topics: [
      "ISO 45001:2018 clauses relevant to auditing",
      "Planning and preparing audit activities",
      "Audit checklists and evidence gathering",
      "Reporting nonconformities and corrective actions",
      "Practical case study exercises",
    ],
    materials: [
      "Auditor toolkit (sample checklists, templates, reporting guides)",
      "Case studies of internal audit practices",
      "Reference handouts of ISO terminology",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "HCP101",
    slug: "hcp101-nursing-interventions-in-aged-care",
    category: "HCP",
    title: "Nursing Interventions in Aged Care",
    instructor: "Dr. Rami Sawafteh",
    delivery: "Online / Self-Paced (with Video Simulation)",
    overview: "This workshop equips nurses and care staff with practical knowledge of nursing interventions in aged care settings. It emphasises evidence-based approaches, person-centred care, and strategies for managing common clinical challenges in older populations.",
    duration: "1 day (6 hours)",
    audience: [
      "Registered and enrolled nurses in aged care",
      "Personal care assistants seeking greater insight",
      "Healthcare professionals working with elderly clients",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Apply best-practice nursing interventions in aged care" },
      { text: "Recognise and manage common geriatric conditions" },
      { text: "Deliver person-centred care with dignity and respect" },
      { text: "Support multidisciplinary teamwork in aged care facilities" },
    ],
    topics: [
      "Fundamentals of aged care nursing",
      "Managing chronic disease and dementia",
      "Falls prevention and mobility support",
      "Nutrition and hydration in older adults",
      "Communication with residents and families",
    ],
    materials: [
      "Access to simulation/demo videos for aged care practices",
      "Case study workbook with common aged care scenarios",
      "Supplementary readings on aged care standards",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "HCP102",
    slug: "hcp102-introduction-to-human-assisted-reproductive-techniques-art",
    category: "HCP",
    title: "Introduction to Human Assisted Reproductive Techniques (ART)",
    instructor: null,
    delivery: "Online / Self-Paced (with Video Simulation)",
    overview: "This introductory course provides healthcare professionals with an understanding of assisted reproductive techniques (ART), including ethical, clinical, and laboratory perspectives. It does not provide laboratory practice but offers foundational knowledge for further study.",
    duration: "5 days - total of 15 hours (3 hours per day)",
    audience: [
      "Nurses and allied health professionals interested in reproductive health",
      "Counsellors and support staff working with fertility patients",
      "Healthcare students seeking awareness of ART practices",
    ],
    prerequisites: "Preferable a healthcare division student or profession. Suitable to healthcare workers in the field of medical laboratory analysis, nursing, and embryologists.",
    outcomes: [
      { text: "Understand the principles of ART and fertility care" },
      { text: "Recognise common ART procedures and terminology" },
      { text: "Identify ethical considerations in reproductive medicine" },
      { text: "Support patients undergoing ART treatments" },
    ],
    topics: [
      "Overview of female and male reproductive systems",
      "Gametes transfer, fertilisation and early stages of embryo development",
      "Overview of ART (IVF, ICSI, surrogacy, donor programs)",
      "Fertility assessment and patient journey",
      "Role of nurses and allied health staff in ART",
      "Ethical issues in assisted reproduction",
    ],
    materials: [
      "Step-by-step illustrated guides of ART processes",
      "Simulation/demo video content",
      "Glossary of ART terminology",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "HCP103",
    slug: "hcp103-emotional-intelligence-in-healthcare",
    category: "HCP",
    title: "Emotional Intelligence in Healthcare",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This workshop helps healthcare professionals develop emotional intelligence (EI) to improve communication, teamwork, and patient care outcomes. Participants will explore self-awareness, empathy, and resilience in high-pressure environments.",
    duration: "Half day (4 hours)",
    audience: [
      "Nurses, allied health professionals, and carers",
      "Healthcare team leaders and supervisors",
      "Students preparing for clinical practice",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Define emotional intelligence and its role in healthcare" },
      { text: "Strengthen self-awareness and self-regulation" },
      { text: "Enhance empathy and patient-centred communication" },
      { text: "Build resilience to workplace stress and conflict" },
    ],
    topics: [
      "Core components of emotional intelligence",
      "Empathy in patient and family interactions",
      "Stress management and self-care",
      "Leadership and teamwork in clinical environments",
    ],
    materials: [
      "Self-assessment tool for emotional intelligence",
      "Case study workbook for reflection activities",
      "Quick reference guide on EI strategies",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "HCP104",
    slug: "hcp104-ethics-in-healthcare-practice",
    category: "HCP",
    title: "Ethics in Healthcare Practice",
    instructor: "Dr. Khalid Alqaisi",
    delivery: "Online / Self-Paced",
    overview: "This course introduces healthcare workers to ethical principles and dilemmas commonly encountered in practice. It provides frameworks for decision-making that balance professional codes, patient rights, and organisational responsibilities.",
    duration: "1 day (6 hours)",
    audience: [
      "Healthcare professionals at all levels",
      "Clinical supervisors and managers",
      "Students seeking professional ethics awareness",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Understand key ethical principles in healthcare" },
      { text: "Apply ethical frameworks to workplace scenarios" },
      { text: "Recognise the role of professional codes of conduct" },
      { text: "Manage ethical dilemmas in patient care" },
    ],
    topics: [
      "Autonomy, beneficence, non-maleficence, and justice",
      "Confidentiality and informed consent",
      "Ethical issues in aged care and end-of-life decisions",
      "Case studies in professional practice",
    ],
    materials: [
      "Reading pack with ethical scenarios",
      "Case study workbook with dilemmas and decision frameworks",
      "Quick reference guide on healthcare codes of ethics",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "HCP105",
    slug: "hcp105-ai-in-healthcare-practice",
    category: "HCP",
    title: "AI in Healthcare Practice",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This forward-looking workshop explores the applications of artificial intelligence (AI) in healthcare practice. It introduces clinicians and staff to AI-driven tools, ethical considerations, and opportunities for enhancing patient care and efficiency.",
    duration: "3 hours",
    audience: [
      "Healthcare managers and clinicians",
      "Allied health professionals",
      "Students interested in health technology",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Define AI and its role in healthcare systems" },
      { text: "Identify key applications of AI in clinical and administrative settings" },
      { text: "Understand ethical and privacy challenges in AI use" },
      { text: "Explore future trends in digital health innovation" },
    ],
    topics: [
      "Overview of AI technologies in healthcare",
      "Clinical decision support and diagnostics",
      "AI in administration and patient engagement",
      "Risks, ethics, and data governance",
      "Future opportunities for workforce transformation",
    ],
    materials: [
      "Downloadable guide on AI applications in healthcare",
      "Case studies and scenarios",
      "Access to AI resource links and references",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "VOC101",
    slug: "voc101-foundation-skills-for-vocational-pathways",
    category: "VOC",
    title: "Foundation Skills for Vocational Pathways",
    instructor: "Ms. Manal Queeder",
    delivery: "Online / Self-Paced",
    overview: "This introductory course develops core foundation skills in literacy, numeracy, communication, and digital literacy, helping learners prepare for further study or entry-level employment.",
    duration: "4.5 hours (3 sessions)",
    audience: [
      "Individuals with limited English, literacy, or digital skills",
      "Jobseekers preparing for vocational training or employment",
      "School leavers needing extra support before further study, or employment",
    ],
    prerequisites: "No formal prerequisites. Suitable for learners with limited prior training or experience",
    outcomes: [
      {
        text: "Improve basic reading, writing, and numeracy",
        points: [
          "Read and interpret short texts, forms, and instructions relevant to everyday life and work",
          "Write simple notes, messages, or workplace documents",
          "Apply basic numeracy to everyday and vocational tasks (e.g., time, money, measurements)",
        ],
      },
      {
        text: "Build oral communication and workplace language skills",
        points: [
          "Use clear language to communicate needs and instructions in workplace or study settings",
          "Participate in role plays and workplace conversations with confidence",
          "Practice active listening in group and team situations",
        ],
      },
      {
        text: "Develop digital literacy for modern work environments",
        points: [
          "Use a computer or mobile device to type and send emails",
          "Access online forms and workplace systems",
          "Navigate an online learning platform (LMS) to complete training modules",
        ],
      },
      {
        text: "Strengthen confidence for learning and work pathways",
        points: [
          "Participate actively in group discussions and learning tasks",
          "Apply foundation skills to prepare for further study or employment",
          "Demonstrate readiness for vocational training through improved confidence and self-expression",
        ],
      },
    ],
    topics: [
      "Foundation literacy and numeracy skills",
      "Oral communication and teamwork",
      "Introduction to computers and online tools",
      "Employability and workplace readiness skills",
    ],
    materials: [
      "Online quizzes and practical exercises",
      "Self-reflection",
      "Certificate of Completion provided upon successful participation",
    ],
    assessment: [
      "Tutor support, language support, or peer forums",
    ],
  },
  {
    code: "VOC102",
    slug: "voc102-essentials-of-individual-support",
    category: "VOC",
    title: "Essentials of Individual Support",
    instructor: null,
    delivery: "Online / Self-Paced (with Video Simulation)",
    overview: "This workshop introduces learners to the fundamentals of individual support in aged care and disability contexts. It provides practical awareness of person-centred care, communication, and safe work practices.",
    duration: "1 day (6 hours)",
    audience: [
      "New entrants to aged care or disability support",
      "Jobseekers exploring care and community roles",
      "Volunteers or informal carers",
    ],
    prerequisites: "None.",
    outcomes: [
      { text: "Understand principles of individualised, person-centred care" },
      { text: "Support daily living needs with empathy and respect" },
      { text: "Apply safe workplace practices in a support role" },
      { text: "Communicate effectively with clients and colleagues" },
    ],
    topics: [
      "Principles of individual support",
      "Rights, dignity, and independence of clients",
      "Safe work practices in care settings",
      "Communication skills for carers and support staff",
    ],
    materials: [
      "Illustrated learner manual (core support principles)",
      "Demo videos for basic support tasks",
      "Quick reference guide for disability and aged care support roles",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "VOC103",
    slug: "voc103-manual-handling-awareness-for-disability-workers",
    category: "VOC",
    title: "Manual Handling Awareness for Disability Workers",
    instructor: null,
    delivery: "Online / Self-Paced (with Video Simulation)",
    overview: "This awareness course introduces disability support workers to safe manual handling techniques, helping reduce the risk of injury and ensuring safe client transfers.",
    duration: "2.5 hours",
    audience: [
      "Disability support workers",
      "Aged care workers and carers",
      "Vocational students preparing for community care roles",
    ],
    prerequisites: "None. Suitable to NDIS workers and providers.",
    outcomes: [
      { text: "Recognise hazards of manual handling tasks" },
      { text: "Demonstrate correct lifting, moving, and transfer techniques" },
      { text: "Use mechanical aids safely in care settings" },
      { text: "Prevent common workplace injuries" },
    ],
    topics: [
      "Ergonomics and body mechanics",
      "Client transfers and mobility support",
      "Correct use of manual handling aids",
      "Risk management and injury prevention",
    ],
    materials: [
      "Downloadable training manual (PDF) with safe lifting and handling procedures",
      "Demonstration videos of correct techniques",
      "Practical workplace checklists",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "VOC104",
    slug: "voc104-infection-prevention-and-control-essentials",
    category: "VOC",
    title: "Infection Prevention & Control Essentials",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "An essentials course in infection prevention and control (IPC) for learners preparing to enter care and service roles. Covers hygiene, PPE, and workplace protocols to keep clients and workers safe.",
    duration: "3 hours",
    audience: [
      "Vocational learners entering health, aged care, or disability work",
      "Jobseekers preparing for community service roles",
      "Carers and volunteers in support roles",
    ],
    prerequisites: "None. Suitable to all healthcare workers and providers.",
    outcomes: [
      { text: "Explain key principles of infection control" },
      { text: "Follow workplace hygiene and cleaning practices" },
      { text: "Apply correct use of PPE (gloves, masks, gowns)" },
      { text: "Respond to infection risks and incidents appropriately" },
    ],
    topics: [
      "Infection risks and modes of transmission",
      "Hand hygiene and cleaning routines",
      "PPE selection and correct use",
      "Basic outbreak response protocols",
    ],
    materials: [
      "Interactive eLearning modules with real-life case studies",
      "Printable posters/checklists for infection control practices",
      "Access to infection control policy templates",
    ],
    assessment: [
      "Case study scenarios and knowledge checks",
      "Video-based demonstrations (where included)",
      "Short reflective tasks",
    ],
  },
  {
    code: "ISO101",
    slug: "iso101-introduction-to-iso-9001-2015-quality-auditing",
    category: "ISO",
    title: "Introduction to ISO 9001:2015 Quality Auditing",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This course introduces the principles and practices of ISO 9001:2015 Quality Management Systems (QMS). Participants gain practical insights into quality auditing processes and learn how to support continuous improvement within their organisations.",
    duration: "6 hours",
    audience: [
      "Quality officers, compliance staff, internal auditors",
      "Managers new to ISO 9001",
    ],
    prerequisites: "None.",
    outcomes: [
      { text: "Understand ISO 9001:2015 key principles, structure, and requirements" },
      { text: "Recognise the role of internal audits in maintaining compliance and driving improvement" },
      { text: "Learn the basics of planning, conducting, and reporting an audit" },
      { text: "Apply auditing skills through case examples and practice scenarios" },
    ],
    topics: [
      "Overview of Quality Management Systems (QMS)",
      "The 7 quality management principles",
      "Clause-by-clause breakdown of ISO 9001:2015",
      "Types of audits (internal, external, supplier)",
      "Audit planning, execution, and reporting",
      "Common non-conformities and corrective actions",
    ],
    materials: [
      "Learner guide with standard overview",
      "Audit checklist templates",
      "Case study workbook",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "ISO102",
    slug: "iso102-iso-17021-conformity-assessment",
    category: "ISO",
    title: "ISO 17021 – Conformity Assessment",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This course provides an overview of ISO/IEC 17021, which specifies requirements for bodies providing audit and certification of management systems.",
    duration: "4 hours",
    audience: [
      "Certification body staff",
      "Auditors and compliance managers",
    ],
    prerequisites: "None.",
    outcomes: [
      { text: "Understand the ISO 17021 framework and principles" },
      { text: "Identify requirements for impartiality, competence, and audit process management" },
      { text: "Learn how certification bodies demonstrate compliance" },
      { text: "Recognise how 17021 interacts with other ISO standards" },
    ],
    topics: [
      "Purpose and scope of ISO/IEC 17021",
      "Competence of auditors and certification body staff",
      "Audit methodologies and impartiality safeguards",
      "Certification decision-making and reporting",
      "Maintaining the integrity and credibility of certification",
    ],
    materials: [
      "Participant guide with standard requirements",
      "Sample conformity documents",
      "Case study scenarios",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "ISO103",
    slug: "iso103-iso-17065-conformity-assessment-for-products",
    category: "ISO",
    title: "ISO 17065 – Conformity Assessment for Products",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This course introduces ISO/IEC 17065, the international standard for bodies certifying products, processes, and services.",
    duration: "4 hours",
    audience: [
      "Product certification staff",
      "Compliance officers and quality managers",
    ],
    prerequisites: "None.",
    outcomes: [
      { text: "Understand the principles and requirements of ISO 17065" },
      { text: "Explore the certification process for products and services" },
      { text: "Learn how conformity assessment ensures product quality and trust" },
      { text: "Identify common compliance challenges in product certification" },
    ],
    topics: [
      "Scope and structure of ISO/IEC 17065",
      "Roles and responsibilities of certification bodies",
      "Certification schemes and criteria",
      "Managing impartiality and conflicts of interest",
      "Complaints, appeals, and surveillance mechanisms",
    ],
    materials: [
      "Guide to product certification",
      "Sample conformity assessment forms",
      "Reference workbook",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "ISO105",
    slug: "iso105-quality-management-in-higher-education-institutions",
    category: "ISO",
    title: "Quality Management in Higher Education Institutions",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "A specialised course exploring how ISO quality management frameworks apply within universities and higher education providers.",
    duration: "1 day (6–7 hours)",
    audience: [
      "University quality managers",
      "Academic leaders, administrators, compliance staff",
    ],
    prerequisites: "None. Suitable to all QS workers or academic in higher education sector.",
    outcomes: [
      { text: "Understand the role of quality systems in higher education" },
      { text: "Explore how ISO 9001 and other standards align with academic quality frameworks" },
      { text: "Learn practical strategies for implementing quality improvement in institutions" },
      { text: "Analyse case studies from Australian and international universities" },
    ],
    topics: [
      "Quality assurance vs. quality enhancement in higher education.",
      "ISO 9001:2015 in academic settings",
      "Benchmarking and continuous improvement",
      "Accreditation and compliance challenges in higher education",
      "Tools for monitoring and evaluating quality performance",
    ],
    materials: [
      "Quality assurance handbook for higher education",
      "Case studies of HE institutions",
      "Reference guides and frameworks",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "BHF101",
    slug: "bhf101-business-health-check-strengthen-streamline-succeed",
    category: "BHF",
    title: "Business Health Check: Strengthen, Streamline, Succeed",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "A practical workshop designed to help small business owners and managers evaluate their overall business performance, identify risks, and streamline operations for growth.",
    duration: "4 hours",
    audience: [
      "Small-to-medium business owners, managers, consultants",
    ],
    prerequisites: "None. Suitable to all business owners or workers.",
    outcomes: [
      { text: "Assess current business health using structured frameworks" },
      { text: "Identify operational inefficiencies and opportunities" },
      { text: "Strengthen governance, compliance, and resilience" },
      { text: "Develop a tailored action plan for sustainable success" },
    ],
    topics: [
      "Business health check frameworks",
      "Financial and operational performance review",
      "Risk management and compliance",
      "Streamlining processes for efficiency",
      "Creating an action plan for growth",
    ],
    materials: [
      "Downloadable business diagnostic tools",
      "Case studies and scenarios",
      "Templates for financial and strategic planning",
      "Quick reference business checklists",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "BHF102",
    slug: "bhf102-the-business-tune-up-financial-wellness-for-growth",
    category: "BHF",
    title: "The Business Tune-Up: Financial Wellness for Growth",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This course focuses on improving financial literacy and wellness for businesses, providing tools to manage cash flow, budgeting, and financial decision-making.",
    duration: "6 hours (with case study exercises)",
    audience: [
      "Entrepreneurs, new business owners, managers",
    ],
    prerequisites: "None. Suitable to all business owners or workers.",
    outcomes: [
      { text: "Understand financial statements and key performance indicators" },
      { text: "Learn strategies for cash flow optimisation" },
      { text: "Apply budgeting tools for better financial planning" },
      { text: "Recognise early warning signs of financial stress" },
    ],
    topics: [
      "Basics of financial literacy for business owners",
      "Interpreting profit & loss, balance sheet, cash flow",
      "Building a sustainable budget",
      "Debt management and funding options",
      "Growth planning with financial resilience",
    ],
    materials: [
      "Downloadable business diagnostic tools",
      "Case studies and scenarios",
      "Templates for financial and strategic planning",
      "Quick reference business checklists",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "BHF103",
    slug: "bhf103-healthy-business-wealthy-future-a-strategic-financial-checkup",
    category: "BHF",
    title: "Healthy Business, Wealthy Future: A Strategic Financial Checkup",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "A strategic course designed to align financial health with long-term business goals. Participants learn to position their businesses for growth and sustainability.",
    duration: "1 day (6–7 hours)",
    audience: [
      "Business owners, directors, senior managers",
    ],
    prerequisites: "None. Suitable to all business owners or workers.",
    outcomes: [
      { text: "Conduct a financial health diagnostic" },
      { text: "Understand links between business strategy and financial outcomes" },
      { text: "Explore growth financing options" },
      { text: "Develop resilience strategies for long-term success" },
    ],
    topics: [
      "Business strategy vs. financial reality.",
      "Scenario planning and forecasting",
      "Sources of capital (loans, investors, grants)",
      "Risk assessment and contingency planning",
      "Long-term wealth creation strategies",
    ],
    materials: [
      "Downloadable business diagnostic tools",
      "Case studies and scenarios",
      "Templates for financial and strategic planning",
      "Quick reference business checklists",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "BHF104",
    slug: "bhf104-smart-business-check-diagnose-and-thrive",
    category: "BHF",
    title: "Smart Business Check: Diagnose and Thrive",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "A short, diagnostic-style program to help businesses evaluate strengths and weaknesses quickly, providing a practical roadmap for improvement.",
    duration: "3 hours",
    audience: [
      "Startups, small business operators, consultants",
    ],
    prerequisites: "None. Suitable to all business owners or workers.",
    outcomes: [
      { text: "Complete a structured diagnostic of business operations" },
      { text: "Identify gaps in financial management, marketing, and HR" },
      { text: "Learn quick wins for efficiency and profitability" },
      { text: "Create a practical “thrive plan” tailored to the business" },
    ],
    topics: [
      "SWOT and business diagnostics",
      "Quick financial ratio analysis",
      "Customer and market positioning check",
      "HR, compliance, and systems health",
      "Building a “next steps” improvement roadmap",
    ],
    materials: [
      "Downloadable business diagnostic tools",
      "Case studies and scenarios",
      "Templates for financial and strategic planning",
      "Quick reference business checklists",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
  {
    code: "BHF105",
    slug: "bhf105-business-health-check-essentials-financial-fitness-for-founders",
    category: "BHF",
    title: "Business Health Check Essentials: Financial Fitness for Founders",
    instructor: null,
    delivery: "Online / Self-Paced",
    overview: "This essentials course equips startup founders with core financial management and business health knowledge, helping them avoid common pitfalls.",
    duration: "4 hours",
    audience: [
      "Startup founders, entrepreneurs, sole traders",
    ],
    prerequisites: "None. Suitable to all business owners or workers.",
    outcomes: [
      { text: "Understand startup financial essentials" },
      { text: "Learn how to track key financial metrics" },
      { text: "Recognise compliance obligations in Australia" },
      { text: "Build financial resilience from day one" },
    ],
    topics: [
      "Introduction to financial literacy for founders",
      "Startup budgeting and cash flow",
      "ATO compliance and reporting basics",
      "Avoiding common startup financial mistakes",
      "Tools and resources for founders",
    ],
    materials: [
      "Downloadable business diagnostic tools",
      "Case studies and scenarios",
      "Templates for financial and strategic planning",
      "Quick reference business checklists",
    ],
    assessment: [
      "Online multiple-choice quiz",
      "Short reflective questions",
    ],
  },
];

/* ── lookups ── */

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByCode(code: string) {
  return categories.find((c) => c.code === code);
}

export function getCoursesInCategory(code: string) {
  return catalogue.filter((c) => c.category === code);
}

export function getCourse(slug: string) {
  return catalogue.find((c) => c.slug === slug);
}

/** `/courses/<category-slug>/<course-slug>` */
export function courseHref(course: CatalogueCourse) {
  const category = getCategoryByCode(course.category);
  return `/courses/${category?.slug ?? ""}/${course.slug}`;
}
