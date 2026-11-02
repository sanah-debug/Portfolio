export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  category: 'frontend' | 'fullstack' | 'automation';
  status: string;
  isConceptPlaceholder: boolean;
  year: string;
  summary: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  canvasTag: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  architecture: string;
  lessons: string;
  extendedDetails: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'code' | 'web' | 'creative' | 'next';
  tag: string;
  description: string;
  keywords: string[];
  progress?: number;
  icon?: string;
}

export interface Milestone {
  stage: string;
  period: string;
  title: string;
  status: string;
  statusType: 'mastered' | 'active' | 'upcoming';
  description: string;
  codeSnippet?: {
    filename: string;
    archivedDate: string;
    code: string;
  };
  cards?: {
    title: string;
    subtitle: string;
    description: string;
    meta: string;
    icon: string;
  }[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  projects?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  expectedGraduation: string;
  gpaSummary?: string;
  semesterGpas: { semester: string; gpa: string }[];
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  details?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    titleTag: string;
    headline: string;
    subheadline: string;
    location: string;
    coordinatesPlaceholder: string;
    academicBase: string;
    readingCadence: string;
    inbox: string;
    phone: string;
    pgpKey: string;
    currentFocus: string;
    social: {
      github: string;
      email: string;
      phone: string;
      linkedin?: string;
    };
    resume: {
      isAvailable: boolean;
      fileName: string;
      fileSize: string;
      downloadUrl: string;
      note: string;
    };
  };
  principles: {
    num: string;
    title: string;
    concept: string;
    description: string;
    icon: string;
  }[];
  skills: SkillItem[];
  projects: Project[];
  journey: Milestone[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

