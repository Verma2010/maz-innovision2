import React from 'react';
import { PageId } from '../types';
import { MazSchoolLogo } from '../components/MazSchoolLogo';
import { 
  Building2, GraduationCap, Cpu, Users, ShieldCheck, 
  Award, Globe, BookOpen, ChevronRight, CheckCircle2 
} from 'lucide-react';

interface CampusPageProps {
  onNavigate: (pageId: PageId) => void;
  onOpenLogoModal: (type?: 'innovision' | 'school') => void;
}

export const CampusPage: React.FC<CampusPageProps> = ({ onNavigate, onOpenLogoModal }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Academic Foundations</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            About MAZ International School
          </h1>
          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
            Petaling Jaya Campus — fostering academic rigor, autonomous leadership, and technical competence through British curriculum standards and practical computer science.
          </p>
        </div>

        <button
          onClick={() => onOpenLogoModal('school')}
          className="p-3 bg-white/10 hover:bg-white/20 border border-[#d4af37]/40 rounded-2xl transition-all flex flex-col items-center group cursor-pointer"
          title="Click to view full school crest"
        >
          <MazSchoolLogo size={70} />
          <span className="text-[10px] text-[#f5c842] font-bold mt-1 group-hover:underline">
            Inspect Crest
          </span>
        </button>
      </div>

      {/* Main Philosophy Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-[#052112]">
          Petaling Jaya Campus: A Culture of Independent Student Ingenuity
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Petaling Jaya (PJ) Campus of MAZ International School has built an enduring legacy of academic distinction, creative expression, and applied computing. Unlike traditional classroom demonstrations, the MAZ InnoVision Digital Expo was established to provide secondary students with an unfiltered, real-world development environment.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          From formulating hardware schematics to designing user-friendly frontend portals, secondary pupils work under the dedicated mentorship of faculty advisor Miss Anjali to bridge secondary education with collegiate-level technology research.
        </p>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-[#f0f7f2] border border-[#186337]/15 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#186337] text-white flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#052112]">Academic Rigour</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cambridge IGCSE standards tightly woven with advanced practical computational problem-solving and algorithms.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#fef9e7] border border-[#d4af37]/30 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#d4af37] text-[#052112] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#052112]">Student Autonomy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Student committees govern all facets: systems engineering, stage design, marketing, and on-site logistics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f0f7f2] border border-[#186337]/15 space-y-2">
            <div className="w-9 h-9 rounded-lg bg-[#186337] text-white flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#052112]">Modern Computing Labs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated robotics arenas, high-performance programming suites, and IoT testing workbenches on the PJ grounds.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Facilities & Laboratories */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-[#052112]">
          Campus Technological Infrastructure
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#e8f5ed] text-[#186337] flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Advanced Secondary CS Suite</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Equipped with dual-boot Linux development environments, Python numerical libraries, and containerized sandboxes for safe web testing.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#fef9e7] text-[#917319] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Robotics &amp; Micro-Electronics Bay</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Features Arduino and ESP32 microcontroller prototyping racks, oscilloscopes, and automated 3D printing equipment.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#e8f5ed] text-[#186337] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Digital Media &amp; Design Studio</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Dedicated multimedia workstations supporting Blender 3D rendering, vector graphics assembly, and high-fidelity video production.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#fef9e7] text-[#917319] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Task Force Command Hub</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                A collaborative meeting room where student leads coordinate live deployment pipelines and maintain GitHub repositories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#0c3d21] to-[#186337] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">Experience our student projects in person</h4>
          <p className="text-xs text-white/80">Visit the exhibition booths at Strand Mall, Kota Damansara.</p>
        </div>
        <button
          onClick={() => onNavigate('showcase')}
          className="px-5 py-2.5 bg-[#f5c842] text-[#052112] text-xs font-black rounded-xl hover:bg-white transition-colors"
        >
          View Student Showcase →
        </button>
      </div>
    </div>
  );
};
