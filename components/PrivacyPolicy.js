import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { html } from '../utils/html.js';

export const PrivacyPolicy = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return html`
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <div className="bg-slate-950 py-6 border-b border-slate-900 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <${Shield} className="w-8 h-8 text-amber-500" />
            <span>Marketing<span className="text-amber-500">Master</span></span>
          </div>
          <button 
            onClick=${onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
          >
            <${ArrowLeft} className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: October 26, 2024</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              MarketingMaster ("we," "our," or "us"), operating as a service of 7XCRM, respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website or use our services, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our Website, including information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identifiable Information (PII):</strong> Name, email address, phone number, company name, and specific business inquiries provided via our contact forms.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
              <li>To send you marketing communications, including SMS and emails, regarding our services (subject to your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (such as email providers or CRM systems), so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p className="leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="leading-relaxed">
              You may send us an email at <strong>Assistant@7xcrm.com</strong> to request access to, correct, or delete any personal information that you have provided to us. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children Under the Age of 13</h2>
            <p className="leading-relaxed">
              Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
            <p className="mb-4">To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="font-bold">MarketingMaster / 7XCRM</p>
              <p>1424 N Brown Rd #450</p>
              <p>Lawrenceville, GA 30043</p>
              <p>Email: Assistant@7xcrm.com</p>
              <p>Phone: 678 722 3447</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
};
