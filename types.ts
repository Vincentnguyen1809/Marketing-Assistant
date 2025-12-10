
export interface Milestone {
  year: string;
  title: string;
  description: string;
  iconType: 'start' | 'fail' | 'success' | 'scale';
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ChartDataPoint {
  year: string;
  revenue: number;
  leads: number;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  revenue: string;
  image: string;
  quote: string;
  story: string;
}

export interface VideoItem {
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
}

export interface LiveCampaign {
  name: string;
  platform: string;
  status: string;
  spend: string;
  leads: number;
  cpl: string;
  roas: string;
}

export interface AppConfig {
  companyInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    notificationEmail: string;
  };
  theme: {
    primaryColor: string; // Hex code
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    backgroundVideoThumbnail: string;
  };
  metrics: Metric[];
  milestones: Milestone[];
  services: Service[];
  productExpertise: string[];
  chartData: ChartDataPoint[];
  liveCampaigns: LiveCampaign[];
  testimonials: Testimonial[];
  videoPortfolio: VideoItem[];
}

export interface User {
  username: string;
  password?: string; // Only used for verification, typically hashed in real apps
  role: 'super_admin' | 'staff';
}

export enum Section {
  HERO = 'hero',
  JOURNEY = 'journey',
  SERVICES = 'services',
  EVIDENCE = 'evidence',
  ASSISTANT = 'assistant',
  CONTACT = 'contact'
}
