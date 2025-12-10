import React from 'react';
import { Target, ShieldCheck, Zap, Check, Play } from 'lucide-react';
import { useConfig } from '../context/ConfigContext.js';

const getIcon = (name, color) => {
  const style = { color: color };
  switch (name) {
    case 'Target': return <Target className="w-10 h-10" style={style} />;
    case 'ShieldCheck': return <ShieldCheck className="w-10 h-10" style={style} />;
    case 'Zap': return <Zap className="w-10 h-10" style={style} />;
    default: return <Target className="w-10 h-10" style={style} />;
  }
};

export const Services = () => {
  const { config } = useConfig();
  const { services, productExpertise, videoPortfolio, theme } = config;

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 mb-24">
          
          {/* Header & Product List */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Specialized <br />
              <span style={{ color: theme.primaryColor }}>Insurance Solutions</span>
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              We are not a generalist agency. Our entire infrastructure is built to navigate the complexities of Life Insurance marketing.
            </p>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Product Expertise</h4>
              <ul className="space-y-4">
                {productExpertise.map((product, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Grid */}
          <div className="md:w-2/3">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-100 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-amber-50 transition-colors">
                      {getIcon(service.iconName, theme.primaryColor)}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Portfolio Section */}
        <div className="border-t border-slate-200 pt-20">
          <div className="text-center mb-16">
            <span className="font-bold tracking-widest uppercase text-xs mb-2 block" style={{ color: theme.primaryColor }}>Creative Studio</span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">High-Performance Ad Creatives</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              See the actual video assets we produce for our clients. These aren't just templates; they are psychologically scripted to convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoPortfolio.map((video, idx) => (
              <div key={idx} className="group relative cursor-pointer">
                <div className="relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-200">
                  <img src={video.thumbnail || "https://via.placeholder.com/300x500?text=No+Thumbnail"} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1 fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white font-mono">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: theme.primaryColor }}>{video.category}</span>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};