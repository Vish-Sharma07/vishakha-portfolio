export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  type: 'resume-analyzer' | 'job-tracker' | 'operational-dashboard';
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  status: string;
  type?: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  major: string;
  year: string;
  focus: string[];
}

export interface ExploringItem {
  topic: string;
  tag: string;
  description: string;
  status: string;
}
