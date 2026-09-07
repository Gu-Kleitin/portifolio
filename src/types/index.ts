export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  linkLabel: string;
  linkUrl: string;
  hasTreeAccent?: boolean;
  accent?: string;
  media?: ProjectMedia;
}

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; title?: string };

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
}

export interface Certificate {
  title: string;
  url: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}