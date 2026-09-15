import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data/expoData';
import { 
  Users, CheckCircle2, ChevronDown, 
  HelpCircle, ShieldCheck, Clock, ExternalLink, MapPin
} from 'lucide-react';

interface VisitorPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const VisitorPage: React.FC<VisitorPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg">
        <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842] mb-2">
          <Users className="w-3.5 h-3.5" />
          <span>Attendee Guidance &amp; Protocols</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Visitor Information &amp; Entry Guidelines
        </h1>
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1 max-w-2xl">
          Planning your visit to Strand Mall? Everything you need to know regarding event access, student project exhibits, venue accessibility, and attendance protocols.
        </p>
      </div>

      {/* EntryEnablers Credential & Registration Coordination Card */}
      <div className="bg-white rounded-2xl border border-[#d4af37]/60 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-[#0c3d21] text-[#f5c842] font-black text-xs flex items-center justify-center">
              EE
            </span>
            <span className="text-xs font-bold text-[#0c3d21] uppercase tracking-wider">
              Coordinated by EntryEnablers Student Team
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#052112]">
            Attendee Registration &amp; Visitor Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All visitor check-in procedures, credential arrangements, and welcome reception for MAZ InnoVision 2026 are coordinated by the student EntryEnablers Task Force. Admission is free and open to students, parents, alumni, and tech enthusiasts.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
            <MapPin className="w-4 h-4 text-[#186337] shrink-0" />
            <span>On-site concierge &amp; verification desk: Ground Floor Atrium, Strand Mall</span>
          </div>
        </div>

        {/* Registration Link Placeholder Box */}
        <div className="shrink-0 bg-[#f0f7f2] border border-[#186337]/20 rounded-xl p-5 text-center space-y-2 w-full md:w-auto md:min-w-[280px]">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#186337]/10 text-[#186337] mx-auto">
            <Clock className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Registration Portal
          </h3>
          <p className="text-[11px] text-slate-500 leading-tight max-w-[220px] mx-auto">
            The official EntryEnablers registration link will be published here prior to the expo.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-xs">
              <span>Link will be provided soon</span>
            </span>
          </div>
        </div>
      </div>

      {/* Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-[#e8f5ed] text-[#186337] flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-800">Interactive Booth Participation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Attendees are actively encouraged to interact with student builds! Test the AI syllabus revision models, trigger the motorized sorting bin, and review code repositories alongside our secondary student engineers.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-[#fef9e7] text-[#917319] flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-800">Safety &amp; Hardware Guidelines</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Please heed protective barrier markings around the live robotics ring and high-voltage IoT workbenches. Student safety marshals from the Central Task Force are stationed across all aisles.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-[#052112] flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#186337]" />
          Frequently Asked Questions
        </h3>

        <div className="space-y-2.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:px-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#186337]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#f0f7f2]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Assistance Banner */}
      <div className="bg-[#052112] text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          <strong className="text-[#f5c842] block text-sm font-bold">Have an enquiry about visitor logistics or school group visits?</strong>
          <span className="text-white/70">Reach out to Miss Anjali or our student secretarial desk directly.</span>
        </div>
        <button
          onClick={() => onNavigate('contacts')}
          className="px-4 py-2 bg-[#186337] hover:bg-[#0c3d21] text-white rounded-lg font-bold border border-[#d4af37]/40 transition-colors cursor-pointer shrink-0"
        >
          Contact Organisers →
        </button>
      </div>
    </div>
  );
};
