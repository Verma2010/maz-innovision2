import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Mail, MapPin, Phone, Send, CheckCircle2, 
  MessageSquare, Users, Building, ShieldCheck 
} from 'lucide-react';

interface ContactsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Expo Enquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg">
        <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842] mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Liaison &amp; Enquiries</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Contact Information &amp; Official Enquiries
        </h1>
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1 max-w-2xl">
          Connect with the faculty advisors, student task force leaders, and registration cells coordinating MAZ InnoVision 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Directory */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#186337]">
              <Building className="w-4 h-4" />
              <span>School Administration</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              MAZ International School (Petaling Jaya Campus)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Secondary Computer Science Department<br />
              No. 2, Jalan PJS 11/15, Bandar Sunway / Petaling Jaya, Selangor, Malaysia
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1">
              <p><strong>Faculty Advisor:</strong> Miss Anjali</p>
              <p><strong>Institutional Email:</strong> info@mazinternational.edu.my</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#917319]">
              <Users className="w-4 h-4" />
              <span>Student Operations &amp; Task Force</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Central Task Force &amp; EntryEnablers Team
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated student engineering desk for exhibition booth allocations, press queries, and on-site credential handling at Strand Mall.
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1">
              <p><strong>Desk Location:</strong> Entrance Concierge, Strand Mall Ground Floor</p>
              <p><strong>Operations Lead:</strong> Student Leadership Council (PJ Cohort)</p>
            </div>
          </div>
        </div>

        {/* Interactive Enquiry Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Send an Enquiry to the Committee
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Our student secretariat and faculty mentors review incoming messages daily.
          </p>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-sm font-bold text-emerald-900">Enquiry Received!</h4>
              <p className="text-xs text-emerald-700">
                Thank you for your interest. A representative from the Central Task Force or Miss Anjali will reach out to your provided email address shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs font-bold text-emerald-800 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Kenneth Wong"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#186337]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. name@example.com"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#186337]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                  Subject Category
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#186337]"
                >
                  <option>General Expo Enquiry</option>
                  <option>School Group Visit Reservation</option>
                  <option>Student Project Showcase Question</option>
                  <option>Industry Judging / Mentorship</option>
                  <option>Press &amp; Media Pass Request</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state how we can assist your visit or inquiry..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#186337]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#0c3d21] hover:bg-[#186337] text-[#f5c842] font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" /> Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
