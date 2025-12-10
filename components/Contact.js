import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, X, Loader2 } from 'lucide-react';
import { useConfig } from '../context/ConfigContext.js';

export const Contact = () => {
  const { config } = useConfig();
  const { companyInfo, theme } = config;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    focusArea: 'Indexed Universal Life (IUL)'
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${companyInfo.notificationEmail}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚀 New Lead: ${formData.name} - Strategy Request`,
          _template: 'table',
          _captcha: 'false',
          ...formData,
          system_note: "Please contact this lead within 24 hours."
        })
      });

      if (response.ok) {
        setShowPopup(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      focusArea: 'Indexed Universal Life (IUL)'
    });
  };

  const primaryStyle = { color: theme.primaryColor };

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-slate-900 relative">
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
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 transition-colors" style={primaryStyle}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Email Us</h4>
                  <p className="text-slate-400">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 transition-colors" style={primaryStyle}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Direct Line</h4>
                  <p className="text-slate-400">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 transition-colors" style={primaryStyle}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Headquarters</h4>
                  <p className="text-slate-400">{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Request Strategy Session</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium" 
                  placeholder="John Doe" 
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium" 
                    placeholder="john@agency.com" 
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium" 
                    placeholder="(555) 123-4567" 
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Agency / Company</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium" 
                  placeholder="Doe Insurance Services" 
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Focus Area</label>
                <select 
                  value={formData.focusArea}
                  onChange={(e) => setFormData({...formData, focusArea: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all font-medium text-slate-600"
                  disabled={isSubmitting}
                >
                  <option>Indexed Universal Life (IUL)</option>
                  <option>Term Life Leads</option>
                  <option>Recruiting Agents</option>
                  <option>Full Branding Overhaul</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:brightness-110"
                style={{ backgroundColor: theme.primaryColor }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Submit Request <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={closePopup}></div>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative shadow-2xl transform transition-all scale-100 animate-fade-in-up">
            <button onClick={closePopup} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-6 h-6" />
            </button>

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You, {formData.name}!</h3>
            <p className="text-slate-500 font-medium mb-6">{formData.email}</p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
              <p className="text-amber-900 text-sm leading-relaxed font-medium">
                Our Marketing Assistant will support <strong>{formData.name}</strong> within the next 24 hours.
              </p>
            </div>

            <button onClick={closePopup} className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg">
              Close Notification
            </button>
          </div>
        </div>
      )}
    </section>
  );
};