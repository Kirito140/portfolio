import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { TimelineIcons, ToastType } from "./enums";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Projects = {
  id: number;
  title: string;
  description: React.ReactNode;
  images?: ProjectImage[];
  link?: string;
  date?: string;
};

export type Skill = {
  icon?: IconDefinition[]; // ✅ tableau d'icônes
  title: string;
  description: React.ReactNode;
  labels: string[];
};

export type ContactField = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
};

export type ApiResponse<T = unknown> = {
  status: number;
  data: T | null;
  message: {
    content: string;
    type: ToastType;
  };
};

export type TimelineItem = {
  id: number;
  title: React.ReactNode;
  location: {
    city: string;
    country: string;
  };
  description: React.ReactNode;
  date: {
    start: string;
    end: string;
  };
  icon: TimelineIcons;
};