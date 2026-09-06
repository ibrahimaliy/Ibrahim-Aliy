export type ProjectKind = "personal" | "professional";
export type ProjectLevel = "flagship" | "featured" | "standard" | "compact";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ArchitectureItem {
  title: string;
  subtitle: string;
  description: string;
}

export interface StageItem {
  number: string;
  title: string;
  description: string;
}

export interface PortalRoute {
  label: string;
  path: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  kind: ProjectKind;
  level: ProjectLevel;
  organization?: string;
  role: string;
  summary: string;
  description?: string;
  tech: string[];
  contributionLabel?: string;
  contributions: string[];
  features?: FeatureItem[];
  highlights?: string[];
  customerExperience?: FeatureItem[];
  adminExperience?: FeatureItem[];
  systemDesign?: ArchitectureItem[];
  stages?: StageItem[];
  learnings?: string[];
  github?: string;
  live?: string;
  liveNote?: string;
  portalRoutes?: PortalRoute[];
  images?: ProjectImage[];
  accent: "green" | "blue" | "violet" | "orange" | "cyan";
  featured?: boolean;
}
