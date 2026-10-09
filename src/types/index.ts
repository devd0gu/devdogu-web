export interface Project {
  id: string;
  slug: string;
  title: string;
  titleTr?: string;
  tagline: string;
  taglineTr?: string;
  shortDescription: string;
  shortDescriptionTr?: string;
  fullDescription: string;
  fullDescriptionTr?: string;
  category: 'Android' | 'AI Agent' | 'Game' | 'Tool';
  tags: string[];
  status: 'Live' | 'In Development' | 'Alpha / Testing' | 'Early Access';
  statusTr?: string;
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
  featuresTr?: string[];
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
  titleTr?: string;
  slug: string;
  date: string;
  dateTr?: string;
  category: 'Launch' | 'Update' | 'Devlog' | 'AI & Research';
  categoryTr?: string;
  summary: string;
  summaryTr?: string;
  content: string[];
  contentTr?: string[];
  tags: string[];
  relatedProjectId?: string;
}

export interface PrivacyDocument {
  id: string;
  appName: string;
  packageId?: string;
  lastUpdated: string;
  lastUpdatedTr?: string;
  summary: string;
  summaryTr?: string;
  sections: {
    title: string;
    titleTr?: string;
    content: string;
    contentTr?: string;
    bullets?: string[];
    bulletsTr?: string[];
  }[];
}
