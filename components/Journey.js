import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2, Award, Flag } from 'lucide-react';
import { useConfig } from '../context/ConfigContext.js';

export const Journey = () => {
  const { config } = useConfig();
  const { milestones, theme } = config;

  const getIcon = (type) => {
    switch (type) {
      case 'start': return <Flag className="w-6 h-6 text-blue-500" />;
      case 'fail': return <AlertTriangle className="w-6 h-6 text-red-500" />;
      case 'success': return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'scale': return <Award className="w-6 h-6" style={{color: theme.primaryColor}} />;
      default: return <TrendingUp className="w-6 h-6 text-slate-500" />;
    }
  };

  const getPlaceholderImage = (index) => {
    const images = [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
    ];
    return images[index % images.length];
  };

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="font-bold tracking-widest uppercase text-sm mb-2 block" style={{ color: theme.primaryColor }}>Our History</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">A Decade of Evolution</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Success isn't accidental. It's the result of 10 years of relentless testing, failing, learning, and refining.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-24 md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 shadow-lg transform transition-transform hover:scale-110">
                {getIcon(milestone.iconType)}
              </div>

              <div className={`ml-24 md:ml-0 md:w-[42%] bg-white p-0 rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={getPlaceholderImage(index)} alt={milestone.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute bottom-4 ${index % 2 === 0 ? 'left-4' : 'md:right-4 left-4'} z-20`}>
                    <span className="px-4 py-1 text-white font-bold text-sm rounded shadow-lg" style={{ backgroundColor: theme.primaryColor }}>
                      {milestone.year}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-[42%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};