import React from 'react';
import { ArrowRight, ChevronDown, Play, Shield } from 'lucide-react';
import { Section } from '../types.js';
import { useConfig } from '../context/ConfigContext.js';

export const Hero = ({ scrollToSection }) => {
  const { config } = useConfig();
  const { hero, productExpertise, theme } = config;

  // Inline style for dynamic primary color
  const primaryStyle = { color: theme.primaryColor };
  const bgPrimaryStyle = { backgroundColor: theme.primaryColor };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden pt-28 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="animate-fade-in-up mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="font-bold tracking-widest text-xs md:text-sm uppercase flex items-center gap-2" style={primaryStyle}>
            <Shield className="w-4 h-4" /> {hero.badge}
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl">
          {hero.titleLine1} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            {hero.titleLine2}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {hero.description}
        </p>

        {/* Video Placeholder / Showreel */}
        <div className="w-full max-w-4xl mx-auto mb-12 relative group cursor-pointer transition-transform hover:scale-[1.01] duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center">
             {/* Thumbnail simulation */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${hero.backgroundVideoThumbnail}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Play Button */}
            <div 
              className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-[0_0_30px_rgba(245,158,11,0.5)]"
              style={{ backgroundColor: theme.primaryColor, opacity: 0.9 }}
            >
               <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
            
            <div className="absolute bottom-6 left-6 text-left">
              <div className="text-white font-bold text-lg">The Evolution</div>
              <div className="text-slate-300 text-sm">Watch our story & methodology</div>
            </div>
          </div>
        </div>

        {/* Product Ticker */}
        <div className="w-full max-w-5xl overflow-hidden mb-12 border-y border-slate-800/50 bg-slate-900/50 py-4">
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 opacity-70">
            {productExpertise.map((product, idx) => (
              <span key={idx} className="text-slate-400 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={bgPrimaryStyle}></span>
                {product}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
          <button 
            onClick={() => scrollToSection(Section.CONTACT)}
            className="w-full sm:w-auto px-8 py-4 text-slate-900 font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
            style={bgPrimaryStyle}
          >
            Consult Strategy <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scrollToSection(Section.EVIDENCE)}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            View Capability Profile
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-slate-600 cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection(Section.JOURNEY)}>
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};