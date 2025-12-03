import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Services } from './components/Services';
import { Evidence } from './components/Evidence';
import { Assistant } from './components/Assistant';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Section } from './types';
import { Menu, X, Shield } from 'lucide-react';

type View = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: Section) => {
    setCurrentView('home'); // Ensure we are on home view
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    
    // Slight delay to allow view render if switching from legal pages
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

  // Render specific view based on state
  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'terms') {
    return <TermsOfService onBack={() => setCurrentView('home')} />;
  }

  // Default Home View
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer" onClick={() => scrollToSection(Section.HERO)}>
            <Shield className="w-8 h-8 text-amber-500" />
            <span>Marketing<span className="text-amber-500">Master</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-amber-500 uppercase tracking-wide ${activeSection === link.id ? 'text-amber-500' : 'text-slate-300'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection(Section.CONTACT)}
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-md transition-colors text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl h-screen">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-slate-300 hover:text-amber-500 py-3 text-lg font-medium border-b border-slate-800"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Sections */}
      <main>
        <div id={Section.HERO}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        <div id={Section.JOURNEY}>
          <Journey />
        </div>
        <div id={Section.SERVICES}>
          <Services />
        </div>
        <div id={Section.EVIDENCE}>
          <Evidence />
        </div>
        <div id={Section.ASSISTANT}>
          <Assistant />
        </div>
        <div id={Section.CONTACT}>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 text-slate-500 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <Shield className="w-6 h-6 text-amber-500" />
            <span>MarketingMaster</span>
          </div>
          <p className="text-sm">© 2024. Specialized Digital Marketing for Life Insurance.</p>
          <div className="flex gap-6 text-sm font-medium">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-amber-500 transition-colors">Privacy Policy</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-amber-500 transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;