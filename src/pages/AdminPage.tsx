import React from 'react';
import { PageId } from '../types';
import { 
  ShieldCheck, GraduationCap, Users, Code, 
  Sparkles, CheckCircle2, GitBranch, Server 
} from 'lucide-react';

interface AdminPageProps {
  onNavigate: (pageId: PageId) => void;
  onOpenLogoModal: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate, onOpenLogoModal }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg">
        <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842] mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Governance &amp; Engineering Cell</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Administration &amp; Organising Team
        </h1>
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1 max-w-2xl">
          The academic leadership and student-led technical task force governing the MAZ InnoVision Digital Expo initiative.
        </p>
      </div>

      {/* Faculty Mentorship Spotlight */}
      <div className="bg-white rounded-2xl border-2 border-[#186337] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#0c3d21] text-[#f5c842] flex items-center justify-center font-bold">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#186337] block">
              Faculty Leadership &amp; Project Advisory
            </span>
            <h2 className="text-xl font-extrabold text-[#052112]">
              Miss Anjali — Secondary Computer Science Teacher
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The MAZ InnoVision expo was conceptualized under the guidance of Miss Anjali to foster student self-efficacy. Miss Anjali provides structural pedagogical direction, code reviews, and ethics counsel, while purposefully allowing the secondary student body to assume end-to-end executive control of event engineering and public presentations.
        </p>

        <div className="bg-[#f0f7f2] rounded-xl p-4 border border-[#186337]/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
          <div>
            <strong className="block text-[#0c3d21]">Curricular Grounding</strong>
            <span>Cambridge IGCSE Computer Science standards</span>
          </div>
          <div>
            <strong className="block text-[#0c3d21]">Pedagogical Philosophy</strong>
            <span>Active inquiry &amp; autonomous engineering</span>
          </div>
          <div>
            <strong className="block text-[#0c3d21]">Campus Base</strong>
            <span>Petaling Jaya Campus CS Faculty</span>
          </div>
        </div>
      </div>

      {/* Student Cells / Task Force Units */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-[#052112] flex items-center gap-2">
          <Users className="w-5 h-5 text-[#186337]" />
          Student Executive Committees (PJ Campus Cohort)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#e8f5ed] text-[#186337] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h4 className="text-sm font-bold text-slate-800">Central Task Force (Dev Cell)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Engineered the web portal, responsive interactive elements, vector insignia systems, and student database catalogs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#fef9e7] text-[#917319] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h4 className="text-sm font-bold text-slate-800">EntryEnablers Team</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Supervises attendee registration, QR code badge issuance, fast-pass verification, and guest concierge at Strand Mall.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#e8f5ed] text-[#186337] flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h4 className="text-sm font-bold text-slate-800">Hardware &amp; Logistics Cell</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Coordinates physical booth allocations, power grid distribution, network telemetry routers, and test arenas at the mall.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Architecture Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#186337]">
          <Code className="w-4 h-4" />
          <span>System Architecture &amp; Deployment</span>
        </div>
        <h4 className="text-base font-bold text-slate-900">
          Institutional Web Architecture
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Cleanly engineered by the student Central Task Force on modern web standards (React 19, TypeScript, Tailwind CSS, Motion) without third-party trackers or heavy commercial bloatware. Vector graphics utilize lossless mathematical paths to guarantee pristine visual fidelity across any client resolution.
        </p>
      </div>
    </div>
  );
};
