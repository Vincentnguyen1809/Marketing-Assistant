
import React, { useEffect, useState, useRef } from 'react';
import { METRICS, CHART_DATA, TESTIMONIALS, LIVE_CAMPAIGNS } from '../constants';
import { BarChart3, TrendingUp, Users, DollarSign, Star, Quote, MapPin, Facebook, Globe, Activity } from 'lucide-react';

export const Evidence: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  
  const maxRevenue = Math.max(...CHART_DATA.map(d => d.revenue));
  const maxYearIndex = CHART_DATA.length - 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate SVG Path for the line chart
  const getPath = () => {
    if (CHART_DATA.length === 0) return "";
    
    // SVG coordinate space: 0,0 is top-left.
    // We want the chart to be e.g. 1000 units wide and 400 units high internally
    const width = 1000;
    const height = 400;
    const padding = 20;

    const points = CHART_DATA.map((d, index) => {
      const x = (index / maxYearIndex) * (width - padding * 2) + padding;
      const y = height - ((d.revenue / maxRevenue) * (height - padding * 2)) - padding;
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
  };

  const getPointCoordinates = (index: number) => {
    const width = 1000;
    const height = 400;
    const padding = 20;
    const x = (index / maxYearIndex) * (width - padding * 2) + padding;
    const y = height - ((CHART_DATA[index].revenue / maxRevenue) * (height - padding * 2)) - padding;
    return { x, y };
  };

  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/50 skew-x-12 transform origin-top pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-500 mb-4 font-bold tracking-widest uppercase text-xs md:text-sm">
            <BarChart3 className="w-4 h-4" /> Proven Track Record
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Numbers Don't Lie
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-normal">
            In an industry full of promises, we deliver verifiable results. Over $6 Million generated annually through precision Digital Marketing.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {METRICS.map((metric, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all group backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                {metric.value}<span className="text-2xl text-slate-500 group-hover:text-amber-500/70">{metric.suffix}</span>
              </div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* LINE CHART SECTION */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl mb-24" ref={chartRef}>
           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Annual Revenue Growth</h3>
                <p className="text-slate-500 text-sm">Client aggregate data (2014-2024)</p>
              </div>
              <div className="p-2 bg-green-500/10 text-green-500 rounded-lg flex items-center gap-2 text-sm font-bold border border-green-500/20">
                <TrendingUp className="w-4 h-4" /> +140% Growth Trend
              </div>
            </div>

            {/* SVG Chart Container */}
            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] select-none">
              <svg 
                viewBox="0 0 1000 400" 
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                {/* Grid Lines (Optional) */}
                <line x1="0" y1="380" x2="1000" y2="380" stroke="#334155" strokeWidth="1" strokeDasharray="5 5" />
                <line x1="0" y1="200" x2="1000" y2="200" stroke="#334155" strokeWidth="1" strokeDasharray="5 5" />
                
                {/* The Path */}
                <path
                  d={getPath()}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    strokeDasharray: 3000,
                    strokeDashoffset: isVisible ? 0 : 3000
                  }}
                />

                {/* Gradient Area under the line */}
                <path
                  d={`${getPath()} L 1000 400 L 20 400 Z`}
                  fill="url(#gradient)"
                  className={`transition-opacity duration-[2000ms] delay-500 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>

                {/* Dots and Labels */}
                {CHART_DATA.map((d, i) => {
                  const { x, y } = getPointCoordinates(i);
                  const shouldShowLabel = i === 0 || i === CHART_DATA.length - 1 || i % 2 === 0;

                  return (
                    <g key={i} className={`transition-opacity duration-500 delay-[${1000 + i * 100}ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                      {/* Dot */}
                      <circle cx={x} cy={y} r="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="3" className="hover:r-8 transition-all cursor-pointer" />
                      
                      {/* Year Label */}
                      <text x={x} y={395} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold" dy="15">
                        {d.year}
                      </text>

                      {/* Revenue Label */}
                      <text 
                        x={x} 
                        y={y - 15} 
                        textAnchor="middle" 
                        fill="white" 
                        fontSize="12" 
                        fontWeight="bold"
                        className="opacity-0 md:opacity-100"
                      >
                        ${d.revenue < 1000 ? d.revenue + 'K' : (d.revenue / 1000).toFixed(1) + 'M'}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
        </div>

        {/* LIVE CAMPAIGN DASHBOARD */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-6 h-6 text-green-500 animate-pulse" />
            <h3 className="text-2xl font-bold text-white">Live Campaign Snapshots</h3>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-slate-800/50 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <div className="col-span-5 md:col-span-4">Campaign Name</div>
              <div className="col-span-3 md:col-span-2 hidden md:block">Status</div>
              <div className="col-span-3 md:col-span-2 text-right">Amount Spent</div>
              <div className="col-span-2 md:col-span-2 text-right">Results (Leads)</div>
              <div className="col-span-2 md:col-span-2 text-right">Cost Per Result</div>
            </div>

            {/* Rows */}
            {LIVE_CAMPAIGNS.map((camp, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 p-5 items-center border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                {/* Name */}
                <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                   {camp.platform.includes('Google') ? (
                     <div className="w-8 h-8 rounded bg-white flex items-center justify-center flex-shrink-0"><Globe className="w-5 h-5 text-blue-600" /></div>
                   ) : (
                     <div className="w-8 h-8 rounded bg-[#1877F2] flex items-center justify-center flex-shrink-0"><Facebook className="w-5 h-5 text-white" /></div>
                   )}
                   <div className="overflow-hidden">
                     <div className="font-bold text-white text-sm truncate">{camp.name}</div>
                     <div className="text-xs text-slate-500">{camp.platform}</div>
                   </div>
                </div>

                {/* Status */}
                <div className="col-span-3 md:col-span-2 hidden md:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded uppercase">{camp.status}</span>
                </div>

                {/* Spend */}
                <div className="col-span-3 md:col-span-2 text-right font-mono text-slate-300 text-sm">
                  {camp.spend}
                </div>

                {/* Leads */}
                <div className="col-span-2 md:col-span-2 text-right">
                   <div className="font-bold text-white">{camp.leads}</div>
                   <div className="text-[10px] text-slate-500">Form submissions</div>
                </div>

                {/* CPL */}
                <div className="col-span-2 md:col-span-2 text-right">
                  <div className="font-bold text-amber-500">{camp.cpl}</div>
                  <div className="text-[10px] text-green-400">ROAS: {camp.roas}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-xs mt-4">
            *Real client data snapshots from current quarter. Sensitive info redacted.
          </p>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Partner Success Stories</h3>
            <p className="text-slate-400">Real agents, real struggles, real millions in premium.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative flex flex-col hover:border-amber-500/30 transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-slate-800 w-12 h-12" />
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-amber-500" />
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Revenue Badge */}
                <div className="mb-6 inline-flex self-start px-3 py-1 bg-green-900/30 text-green-400 text-xs font-bold rounded-full border border-green-800">
                  Revenue: {testimonial.revenue}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h5 className="text-amber-500 font-bold mb-3 text-lg">"{testimonial.quote}"</h5>
                  <p className="text-slate-300 text-sm leading-relaxed italic opacity-90">
                    {testimonial.story}
                  </p>
                </div>

                {/* Stars */}
                <div className="mt-6 flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
