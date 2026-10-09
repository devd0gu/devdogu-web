export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Android' | 'AI Agent' | 'Game' | 'Tool';
  tags: string[];
  status: 'Live' | 'In Development' | 'Alpha / Testing' | 'Early Access';
  version: string;
  updatedAt: string;
  packageId?: string;
  accentColor?: string;
  iconName: string;
  previewImage?: string;
  isFlagship?: boolean;
  isClaudePowered?: boolean;
  links: {
    playStore?: string;
    gitHub?: string;
    liveDemo?: string;
    privacy: string;
  };
  features: string[];
  specs?: {
    permissionCount?: number;
    hasAds?: boolean;
    hasAnalytics?: boolean;
    isOffline?: boolean;
    aiModel?: string;
  };
}

export interface Announcement {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: 'Launch' | 'Update' | 'Devlog' | 'AI & Research';
  summary: string;
  content: string[];
  tags: string[];
  relatedProjectId?: string;
}

export interface PrivacyDocument {
  id: string;
  appName: string;
  packageId?: string;
  lastUpdated: string;
  summary: string;
  sections: {
    title: string;
    content: string;
    bullets?: string[];
  }[];
}
