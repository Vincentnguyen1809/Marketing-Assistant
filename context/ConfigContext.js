import React, { createContext, useContext, useState, useEffect } from 'react';
import { html } from '../utils/html.js';
import { 
  METRICS, 
  MILESTONES, 
  SERVICES, 
  PRODUCTS_EXPERTISE, 
  CHART_DATA, 
  LIVE_CAMPAIGNS, 
  TESTIMONIALS, 
  VIDEO_PORTFOLIO 
} from '../constants.js';

const DEFAULT_CONFIG = {
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

const DEFAULT_USERS = [
  { username: 'admin', role: 'super_admin' }
];

const ConfigContext = createContext(undefined);

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [users, setUsers] = useState(DEFAULT_USERS);
  const [currentUser, setCurrentUser] = useState(null);

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

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    localStorage.setItem('site_config', JSON.stringify(newConfig));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    localStorage.setItem('site_config', JSON.stringify(DEFAULT_CONFIG));
  };

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('site_users', JSON.stringify(updatedUsers));
  };

  const removeUser = (username) => {
    const updatedUsers = users.filter(u => u.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem('site_users', JSON.stringify(updatedUsers));
  };

  const login = (username) => {
    const user = users.find(u => u.username === username);
    if (user) setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return html`
    <${ConfigContext.Provider} value=${{ 
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
      ${children}
    </${ConfigContext.Provider}>
  `;
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
