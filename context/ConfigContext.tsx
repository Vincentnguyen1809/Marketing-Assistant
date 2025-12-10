
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppConfig, User } from '../types';
import { 
  METRICS, 
  MILESTONES, 
  SERVICES, 
  PRODUCTS_EXPERTISE, 
  CHART_DATA, 
  LIVE_CAMPAIGNS, 
  TESTIMONIALS, 
  VIDEO_PORTFOLIO 
} from '../constants';

// Default Config based on constants.ts
const DEFAULT_CONFIG: AppConfig = {
  companyInfo: {
    name: "LifeInsure Marketing Master",
    email: "Assistant@7xcrm.com",
    phone: "678 722 3447",
    address: "1424 N Brown Rd #450, Lawrenceville, GA 30043",
    notificationEmail: "xuanthuongqtkd@gmail.com"
  },
  theme: {
    primaryColor: "#f59e0b" // amber-500
  },
  hero: {
    badge: "10 Years of Mastery in Life Insurance",
    titleLine1: "Dominating the",
    titleLine2: "Life Insurance",
    description: "From zero to $5 Million+ annual revenue. We don't guess; we engineer growth for Term, IUL, and Wealth Management products using battle-tested strategies.",
    backgroundVideoThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  metrics: METRICS,
  milestones: MILESTONES,
  services: SERVICES,
  productExpertise: PRODUCTS_EXPERTISE,
  chartData: CHART_DATA,
  liveCampaigns: LIVE_CAMPAIGNS,
  testimonials: TESTIMONIALS,
  videoPortfolio: VIDEO_PORTFOLIO
};

// Default Users
const DEFAULT_USERS: User[] = [
  { username: 'admin', role: 'super_admin' } // Password logic handled in component for simplicity
];

interface ConfigContextType {
  config: AppConfig;
  updateConfig: (newConfig: AppConfig) => void;
  resetConfig: () => void;
  users: User[];
  addUser: (user: User) => void;
  removeUser: (username: string) => void;
  currentUser: User | null;
  login: (username: string) => void;
  logout: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [users, setUsers] = useState<User[]>(DEFAULT_USERS);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedConfig = localStorage.getItem('site_config');
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.error("Failed to parse config", e);
      }
    }

    const savedUsers = localStorage.getItem('site_users');
    if (savedUsers) {
      try {
        setUsers(JSON.parse(savedUsers));
      } catch (e) {
        console.error("Failed to parse users", e);
      }
    }
  }, []);

  const updateConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    localStorage.setItem('site_config', JSON.stringify(newConfig));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    localStorage.setItem('site_config', JSON.stringify(DEFAULT_CONFIG));
  };

  const addUser = (newUser: User) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('site_users', JSON.stringify(updatedUsers));
  };

  const removeUser = (username: string) => {
    const updatedUsers = users.filter(u => u.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem('site_users', JSON.stringify(updatedUsers));
  };

  const login = (username: string) => {
    const user = users.find(u => u.username === username);
    if (user) setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <ConfigContext.Provider value={{ 
      config, 
      updateConfig, 
      resetConfig, 
      users, 
      addUser, 
      removeUser,
      currentUser,
      login,
      logout
    }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
