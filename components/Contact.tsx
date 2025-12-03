import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Info Side */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate?</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Stop wasting budget on generalist agencies. Leverage 10 years of Life Insurance expertise. Let's build your legacy.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:border-amber-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Email Us</h4>
                  <p className="text-slate-400">contact@lifeinsuremaster.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:border-amber-500 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Direct Line</h4>
                  <p className="text-slate-400">+1 (555) 019-2834</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:border-amber-500 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Headquarters</h4>
                  <p className="text-slate-400">Financial District, New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Request Strategy Session</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Agency / Company</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium" placeholder="Doe Insurance Services" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Focus Area</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium text-slate-600">
                  <option>Indexed Universal Life (IUL)</option>
                  <option>Term Life Leads</option>
                  <option>Recruiting Agents</option>
                  <option>Full Branding Overhaul</option>
                </select>
              </div>
              <button className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30">
                Submit Request <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};