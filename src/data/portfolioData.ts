import { Project, SkillCategory, ExperienceItem, EducationItem, ExploringItem } from '../types';

export const personalInfo = {
  name: "Vishakha Sharma",
  role: "Frontend Developer",
  status: "Open to Entry-Level Tech Opportunities",
  tagline: "I build practical web applications with React and JavaScript, while exploring Python, SQL, AI and automation.",
  githubUrl: "https://github.com/Vish-Sharma07",
  linkedinUrl: "https://www.linkedin.com/in/vishakha-sharma25/",
  email: "sharmavish25@gmail.com",
  resumeUrl: "/resume.pdf",
  githubBio: "Frontend Developer | React • JavaScript • Python • SQL | Building practical web apps & exploring AI + automation",
  location: "Open to Remote & On-Site",
  codeSnippet: `const developer = {
  name: "Vishakha",
  role: "Frontend Developer",
  currentRole: "QC Analyst – Content Variation at HighSpring India",
  stack: ["React", "JavaScript", "Python", "SQL"],
  status: "Open to entry-level opportunities",
  focus: "Building practical web applications",
  exploring: ["AI & Automation", "Modern UI Architecture"]
};`
};

export const projectsData: Project[] = [
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    tagline: "ATS Compatibility & Skills Alignment",
    description: "Resume analysis tool for ATS compatibility, skills coverage, and job-description alignment.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "PDF.js"],
    githubUrl: "https://github.com/Vish-Sharma07/Resume-Analyzer",
    liveUrl: "https://vish-sharma07.github.io/Resume-Analyzer/",
    featured: true,
    type: "resume-analyzer",
    highlights: [
      "Evaluates ATS compatibility and layout readiness for uploaded resumes",
      "Identifies missing technical keywords from target job descriptions",
      "Parses PDF document structure using client-side PDF.js",
      "Presents actionable recommendations for resume optimization"
    ]
  },
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    tagline: "Application Pipeline & Stage Management",
    description: "A job application tracking dashboard built to help users organize, monitor, and manage job applications.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/Vish-Sharma07/Job-Tracker",
    liveUrl: "https://vish-sharma07.github.io/Job-Tracker/",
    featured: false,
    type: "job-tracker",
    highlights: [
      "Visual pipeline to monitor application statuses (Applied, Interviewing, Offer, Rejected)",
      "Tracks target roles, company names, interview dates, and custom notes",
      "Persistent client-side data state for seamless day-to-day access",
      "Responsive cards with quick status updates and filter controls"
    ]
  },
  {
    id: "operational-dashboard",
    title: "Operational Data Dashboard",
    tagline: "Operational Task Data Analytics & CSV Processing",
    description: "An interactive React dashboard for visualizing and managing operational task data with CSV upload, search, filters, and sortable tables.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/Vish-Sharma07/operational-dashboard",
    liveUrl: "https://vish-sharma07.github.io/operational-dashboard/",
    featured: false,
    type: "operational-dashboard",
    highlights: [
      "Instant CSV upload and client-side dataset parsing",
      "Dynamic data visualizations and KPI status metric cards",
      "Multi-column searchable and sortable operational data table",
      "Active filter system for task statuses, departments, and priority levels"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Core technologies used to build responsive, component-driven user interfaces",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Vite" }
    ]
  },
  {
    title: "Programming",
    description: "Languages for algorithmic problem solving, scripting, and backend logic",
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
      { name: "C++" }
    ]
  },
  {
    title: "Database",
    description: "Data modeling, schema structure, and relational queries",
    skills: [
      { name: "SQL" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Version control and collaborative developer tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" }
    ]
  }
];

export const experiencesData: ExperienceItem[] = [
  {
    role: "Quality Control (QC) Analyst – Content Variation",
    company: "HighSpring India",
    period: "July 2026 – Present",
    status: "Current",
    type: "Full-Time",
    responsibilities: [
      "Perform quality control checks and reviews on content-variation datasets and workflow outputs.",
      "Evaluate condition-based scenarios against defined quality benchmarks.",
      "Identify discrepancies and process gaps, and recommend or track corrective actions.",
      "Collaborate cross-functionally on data quality standards supporting AI model training workflows.",
      "Maintain quality reports, trackers, and dashboards to monitor quality and workflow performance.",
      "Communicate findings, quality status, and process observations clearly to relevant stakeholders."
    ]
  },
  {
    role: "Associate Analyst – Operations",
    company: "HighSpring India",
    period: "2025 – June 2026",
    status: "Previous Role",
    type: "Full-Time",
    responsibilities: [
      "Analyzed operational and project data to identify trends and support business decisions.",
      "Reviewed, cleaned, and validated datasets using Microsoft Excel.",
      "Performed condition-based scenarios and structured outcome evaluation.",
      "Supported data preparation and quality checks for AI model training workflows.",
      "Maintained reports, trackers, and dashboards.",
      "Identified data inconsistencies and process gaps and supported corrective measures.",
      "Worked cross-functionally and communicated operational updates clearly."
    ]
  }
];

export const experienceData: ExperienceItem = experiencesData[0];

export const educationData: EducationItem = {
  degree: "B.Tech in Computer Science Engineering",
  major: "Computer Science Engineering",
  year: "Graduating 2025",
  focus: [
    "Data Structures & Algorithms",
    "Database Management Systems (SQL)",
    "Object-Oriented Programming (C++, Python)",
    "Software Engineering Principles"
  ]
};

export const exploringData: ExploringItem[] = [
  {
    topic: "AI & Automation",
    tag: "Applied AI",
    description: "Exploring LLM APIs, prompt engineering, and building automated scripts that streamline repetitive developer and business tasks.",
    status: "Active Exploration"
  },
  {
    topic: "Python",
    tag: "Scripting & Data",
    description: "Expanding capabilities in Python for data processing, automation scripts, and backend API integration.",
    status: "Active Practice"
  },
  {
    topic: "SQL",
    tag: "Data Architecture",
    description: "Deepening relational query optimization, indexing concepts, and structured database manipulation.",
    status: "Continuous Learning"
  },
  {
    topic: "Frontend Development",
    tag: "Modern Web",
    description: "Mastering advanced React patterns, state management, web performance optimization, and accessible UI engineering.",
    status: "Primary Focus"
  },
  {
    topic: "Practical Developer Projects",
    tag: "Shipping Apps",
    description: "Translating concepts into deployed, accessible web apps that solve real user friction points.",
    status: "Project Building"
  }
];
