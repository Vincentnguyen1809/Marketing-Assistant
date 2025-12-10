import React, { useState, useEffect } from 'react';
import { ConfigProvider, useConfig } from './context/ConfigContext.js';
import { Hero } from './components/Hero.js';
import { Journey } from './components/Journey.js';
import { Services } from './components/Services.js';
import { Evidence } from './components/Evidence.js';
import { Assistant } from './components/Assistant.js';
import { Contact } from './components/Contact.js';
import { PrivacyPolicy } from './components/PrivacyPolicy.js';
import { TermsOfService } from './components/TermsOfService.js';
import { AdminLogin } from './components/Admin/AdminLogin.js';
import { AdminDashboard } from './components/Admin/AdminDashboard.js';
import { Section } from './types.js';
import { Menu, X, Shield } from 'lucide-react';

// The Main Portfolio App Content
const PortfolioContent = () => {
  const { config } = useConfig();
  const [activeSection, setActiveSection] = useState(Section.HERO);
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setCurrentView('home');
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { id: Section.HERO, label: 'Home' },
    { id: Section.JOURNEY, label: 'Our Story' },
    { id: Section.SERVICES, label: 'Expertise' },
    { id: Section.EVIDENCE, label: 'Results' },
    { id: Section.ASSISTANT, label: 'AI Strategist' },
    { id: Section.CONTACT, label: 'Contact' },
  ];

  if (currentView === 'privacy') return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
  if (currentView === 'terms') return <TermsOfService onBack={() => setCurrentView('home')} />;

  const primaryStyle = { color: config.theme.primaryColor };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer" onClick={() => scrollToSection(Section.HERO)}>
            <Shield className="w-8 h-8" style={primaryStyle} />
            <span>Marketing<span style={primaryStyle}>Master</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors uppercase tracking-wide hover:text-white ${activeSection === link.id ? '' : 'text-slate-300'}`}
                style={activeSection === link.id ? primaryStyle : {}}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection(Section.CONTACT)}
              className="px-6 py-2 text-slate-900 font-bold rounded-md transition-colors text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:brightness-110"
              style={{ backgroundColor: config.theme.primaryColor }}
            >
              Book Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl h-screen">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-slate-300 hover:text-white py-3 text-lg font-medium border-b border-slate-800"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        <div id={Section.HERO}><Hero scrollToSection={scrollToSection} /></div>
        <div id={Section.JOURNEY}><Journey /></div>
        <div id={Section.SERVICES}><Services /></div>
        <div id={Section.EVIDENCE}><Evidence /></div>
        <div id={Section.ASSISTANT}><Assistant /></div>
        <div id={Section.CONTACT}><Contact /></div>
      </main>

      <footer className="bg-black py-12 text-slate-500 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <Shield className="w-6 h-6" style={primaryStyle} />
            <span>MarketingMaster</span>
          </div>
          <p className="text-sm">© 2024. {config.companyInfo.name}. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Application Shell handles Routing
const AppShell = () => {
  const { currentUser } = useConfig();
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/admin')) {
      setIsAdminRoute(true);
    }
  }, []);

  if (isAdminRoute) {
    if (currentUser) {
      return <AdminDashboard />;
    }
    return <AdminLogin />;
  }

  return <PortfolioContent />;
};

const App = () => {
  return (
    <ConfigProvider>
      <AppShell />
    </ConfigProvider>
  );
};

export default App;