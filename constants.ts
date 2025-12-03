
import { Milestone, Service, Metric } from './types';
import { 
  Target, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Zap,
  PieChart,
  Briefcase
} from 'lucide-react';

export const APP_NAME = "LifeInsure Marketing Master";

export const METRICS: Metric[] = [
  { label: "Years of Experience", value: "10", suffix: "+" },
  { label: "Annual Revenue Generated", value: "7", suffix: "M+" },
  { label: "Successful Campaigns", value: "850", suffix: "+" },
  { label: "Avg. Closing Rate", value: "35", suffix: "%" },
];

export const MILESTONES: Milestone[] = [
  {
    year: "2014",
    title: "The Genesis",
    description: "Started with zero capital but a massive vision. Pure passion for Digital Marketing meeting the complex world of Life Insurance.",
    iconType: 'start'
  },
  {
    year: "2016",
    title: "The Crucible",
    description: "faced significant challenges. Burnt through ad budgets with zero ROI. This period of 'failure' was our greatest teacher, forcing us to master consumer psychology.",
    iconType: 'fail'
  },
  {
    year: "2019",
    title: "The Breakthrough",
    description: "Unlocked the 'Golden Formula' for IUL and Term Life leads. Shifted from generic targeting to behavior-based financial profiling.",
    iconType: 'success'
  },
  {
    year: "2021",
    title: "The Scaling",
    description: "Integrated Automation & AI. Expanded the team to specialized departments. Revenue generated for clients surpassed the $2 Million mark.",
    iconType: 'scale'
  },
  {
    year: "2024",
    title: "Market Dominance",
    description: "10 Years of mastery. We are now the go-to agency for Max Funded IUL & High-Ticket Life Insurance marketing. Generating $6M+ annually for our partners.",
    iconType: 'success'
  }
];

export const SERVICES: Service[] = [
  {
    title: "High-Intent Lead Gen",
    description: "We don't sell data; we deliver prospects. Exclusive generation for Term Life, Whole Life, and IUL interested clients.",
    features: ["Financial Behavior Targeting", "3-Step Pre-qualification", "Zero Junk Data Guarantee"],
    iconName: "Target"
  },
  {
    title: "Authority Branding",
    description: "Positioning you not just as an agent, but as a Trusted Wealth Advisor. We craft the narrative that high-net-worth clients trust.",
    features: ["Storytelling Content", "Premium Visual Identity", "Viral Video Scripts"],
    iconName: "ShieldCheck"
  },
  {
    title: "Ecosystem Automation",
    description: "A complete nurturing system that turns 'leads' into 'appointments' while you sleep. From first click to signed policy.",
    features: ["Automated SMS/Email Flows", "CRM Integration", "Appointment Setting AI"],
    iconName: "Zap"
  }
];

export const PRODUCTS_EXPERTISE = [
  "Term Life Insurance",
  "Indexed Universal Life (IUL)",
  "Max Funded IUL Strategy",
  "Children's Whole Life (Kid IUL)",
  "Final Expense",
  "Annuities"
];

export const CHART_DATA = [
  { year: '2014', revenue: 0, leads: 0 },
  { year: '2015', revenue: 120, leads: 200 },
  { year: '2016', revenue: 250, leads: 350 },
  { year: '2017', revenue: 580, leads: 800 },
  { year: '2018', revenue: 1100, leads: 1500 },
  { year: '2019', revenue: 1850, leads: 2500 },
  { year: '2020', revenue: 2900, leads: 4000 },
  { year: '2021', revenue: 3800, leads: 6000 },
  { year: '2022', revenue: 4500, leads: 8000 },
  { year: '2023', revenue: 6100, leads: 10000 },
  { year: '2024', revenue: 7200, leads: 12500 },
];

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  revenue: string;
  image: string;
  quote: string;
  story: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael T.",
    role: "Agency Owner",
    location: "California",
    revenue: "$150,000 / mo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
    quote: "From skepticism to my biggest year ever.",
    story: "Month 1 was rough. I saw the ad spend going out and no immediate policies signed. I was ready to quit and call it a scam. The team sat me down, explained the 'nurture cycle' for IULs. By Month 4, the pipeline exploded. I closed $150k in premium just last month."
  },
  {
    name: "Sarah L.",
    role: "Independent Broker",
    location: "Texas",
    revenue: "$92,000 / mo",
    image: "https://images.unsplash.com/photo-1573496359-136d475583dc?q=80&w=2669&auto=format&fit=crop",
    quote: "Consistency is key. They never miss.",
    story: "I've been with them for 3 years. Most agencies give you junk leads after 6 months. These guys keep optimizing. My 'Kid IUL' campaign alone brings in $30k/month. They are truly marketing partners, not just vendors."
  },
  {
    name: "James D.",
    role: "Senior Agent",
    location: "Florida",
    revenue: "$78,000 / mo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote: "They understand the Life Insurance language.",
    story: "I tried 5 other agencies. None of them understood how to sell Max Funded IULs. This team built a funnel that educates the client before I even speak to them. The leads I get are actually asking ME questions about cash value."
  }
];

export const VIDEO_PORTFOLIO = [
  {
    title: "The 'Tax-Free Retirement' Angle",
    category: "IUL Educational",
    thumbnail: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop",
    duration: "2:45"
  },
  {
    title: "Protecting Their Future (Emotional Hook)",
    category: "Term Life Storytelling",
    thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
    duration: "1:30"
  },
  {
    title: "Agent Authority Branding Reel",
    category: "Personal Brand",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
    duration: "0:58"
  },
  {
    title: "Million Dollar Baby (Kid IUL)",
    category: "Niche Product",
    thumbnail: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=1887&auto=format&fit=crop",
    duration: "3:12"
  }
];

export const LIVE_CAMPAIGNS = [
  {
    name: "MAX_FUNDED_IUL_TEXAS_Q1",
    platform: "Facebook Ads",
    status: "Active",
    spend: "$4,250.00",
    leads: 132,
    cpl: "$32.19",
    roas: "4.8x"
  },
  {
    name: "TERM_LIFE_VOLUME_NAT_BROAD",
    platform: "Google Ads",
    status: "Active",
    spend: "$8,120.50",
    leads: 268,
    cpl: "$30.30",
    roas: "3.5x"
  },
  {
    name: "HIGH_NET_WORTH_ANNUITY",
    platform: "Facebook Ads",
    status: "Active",
    spend: "$2,890.00",
    leads: 64,
    cpl: "$45.15",
    roas: "6.2x"
  },
  {
    name: "KID_IUL_RETARGETING",
    platform: "Instagram",
    status: "Active",
    spend: "$1,540.20",
    leads: 42,
    cpl: "$36.67",
    roas: "5.1x"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the "Virtual Strategist" for a high-end Digital Marketing Agency specializing EXCLUSIVELY in Life Insurance.
Your Persona:
- 10 Years of Experience.
- Expert in: Term Life, IUL (Indexed Universal Life), Max Funded IUL, Kid IUL.
- Tone: Professional, Confident, Data-Driven, English-speaking.
- Key Achievement: Helping clients generate over $7M/year in revenue.

Your Goal:
- Consult with potential clients (Insurance Agents/Agencies) about marketing strategies.
- Explain why generic leads fail and how our "Niche Targeting" works for complex products like IUL.
- Prove capability through knowledge: Explain the difference between marketing a cheap Term policy vs. a Max Funded IUL (high trust needed).
- If asked about pricing or starting, direct them to the Contact section.

Key Selling Points:
- We don't just run ads; we build "Trust Systems".
- We understand the compliance and nuances of the Life Insurance industry.
- Real results, no fluff.
`;
