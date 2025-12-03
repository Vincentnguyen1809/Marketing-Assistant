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

export enum Section {
  HERO = 'hero',
  JOURNEY = 'journey',
  SERVICES = 'services',
  EVIDENCE = 'evidence',
  ASSISTANT = 'assistant',
  CONTACT = 'contact'
}