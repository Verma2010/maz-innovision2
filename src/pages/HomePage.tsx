import React, { useState } from 'react';
import { PageId, StudentProject } from '../types';
import { InnoVisionLogo } from '../components/InnoVisionLogo';
import { MazSchoolLogo } from '../components/MazSchoolLogo';
import { 
  Play, Pause, Volume2, VolumeX, Sparkles, MapPin, 
  Users, GraduationCap, ChevronRight, ArrowUpRight, 
  Layers, CheckCircle, ShieldCheck, Cpu, Trophy, Calendar
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
  onOpenLogoModal: (type?: 'innovision' | 'school') => void;
  projects: StudentProject[];
  onSelectProject: (project: StudentProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLogoModal,
  projects,
  onSelectProject,
}) => {
  const [isPlayingReel, setIsPlayingReel] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [reelProgress, setReelProgress] = useState(65);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-12 pb-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#021109] via-[#052112] to-[#0a351d] text-white pt-14 pb-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#d4af37]">
        {/* Ambient Geometric Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(245, 200, 66, 0.4) 0%, transparent 60%), linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 32px 32px, 32px 32px',
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-[#d4af37]/15 blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          
          {/* Institutional Presentation Pill */}
          <div className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#d4af37]/45 mb-6 shadow-lg shadow-black/40">
            <button
              onClick={() => onOpenLogoModal('school')}
              className="hover:scale-105 transition-transform cursor-pointer"
              title="Click to inspect MAZ Crest"
            >
              <MazSchoolLogo size={26} />
            </button>
            <span className="text-xs font-black tracking-widest text-white/90 uppercase">
              MAZ INTERNATIONAL SCHOOL
            </span>
            <span className="text-[#f5c842] text-xs font-bold uppercase tracking-wider">
              Presents
            </span>
          </div>

          {/* MAIN PROMINENT INNOVISION EMBLEM (CLEAR & INTERACTIVE) */}
          <div className="flex flex-col items-center my-3 group">
            <button
              id="hero-main-logo-btn"
              onClick={() => onOpenLogoModal('innovision')}
              className="relative p-2 rounded-2xl transition-all duration-300 transform group-hover:scale-105 cursor-pointer"
              title="Click to view crystal-clear 4K vector emblem & downloads"
            >
              <InnoVisionLogo size="hero" showSubtext={false} />
              
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-sm border border-[#f5c842]/40 rounded-full text-[11px] text-[#f5c842] font-semibold group-hover:bg-[#186337]/90 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Vector Emblem · Click to Inspect</span>
              </div>
            </button>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-4 drop-shadow-md">
            MAZ <span className="text-[#f5c842]">INNOVISION</span>
          </h1>

          <p className="text-base sm:text-xl font-semibold text-[#f5c842] mt-2 mb-6 tracking-wide drop-shadow-sm font-heading">
            “Where young minds spark innovation”
          </p>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
            The official student-led technology, engineering, and digital solutions expo organized by the secondary cohort of MAZ International School, Petaling Jaya Campus at Strand Mall.
          </p>

          {/* Hero CTAs - Clear Website Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              id="hero-explore-projects-btn"
              onClick={() => onNavigate('showcase')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f5c842] to-[#d4af37] text-[#052112] font-black text-sm shadow-xl shadow-[#d4af37]/30 hover:scale-[1.03] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Student Showcase</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              id="hero-visitor-guide-btn"
              onClick={() => onNavigate('visitor')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Visitor Guidelines</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              id="hero-venue-btn"
              onClick={() => onNavigate('venue')}
              className="px-5 py-3.5 rounded-xl bg-[#0c3d21] hover:bg-[#186337] text-[#f5c842] border border-[#d4af37]/50 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Strand Mall Venue</span>
            </button>
          </div>
        </div>
      </section>

      {/* KEY FACTS FLOATING STRIP */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          
          <div className="p-5 sm:p-6 flex items-center gap-4 bg-gradient-to-b from-white to-slate-50/50">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5ed] border border-[#186337]/20 flex items-center justify-center text-[#186337] shrink-0 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Exhibition Venue</span>
              <strong className="text-sm sm:text-base font-extrabold text-[#052112]">Strand Mall, Kota Damansara</strong>
              <p className="text-xs text-slate-500 mt-0.5">Petaling Jaya, Selangor</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 flex items-center gap-4 bg-gradient-to-b from-white to-slate-50/50">
            <div className="w-12 h-12 rounded-xl bg-[#fef9e7] border border-[#d4af37]/30 flex items-center justify-center text-[#917319] shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Faculty Mentorship</span>
              <strong className="text-sm sm:text-base font-extrabold text-[#052112]">Mentored by Miss Anjali</strong>
              <p className="text-xs text-slate-500 mt-0.5">Secondary Computer Science Teacher</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 flex items-center gap-4 bg-gradient-to-b from-white to-slate-50/50">
            <div className="w-12 h-12 rounded-xl bg-[#e8f5ed] border border-[#186337]/20 flex items-center justify-center text-[#186337] shrink-0 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Organized By</span>
              <strong className="text-sm sm:text-base font-extrabold text-[#052112]">PJ Campus Student Cohort</strong>
              <p className="text-xs text-slate-500 mt-0.5">Central Task Force &amp; EntryEnablers</p>
            </div>
          </div>

        </div>
      </div>

      {/* DEDICATED EXHIBITION PROGRESS REEL CARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border-2 border-[#d4af37] shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] text-white p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#d4af37]/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#f5c842] text-[#052112] flex items-center justify-center font-bold">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-white leading-tight">
                  Exhibition Progress Reel &amp; Student Build Showcase
                </h3>
                <p className="text-[11px] text-[#f5c842]/90">
                  Walkthrough of student engineering sprints, UI prototypes &amp; hardware assemblies
                </p>
              </div>
            </div>
            <span className="bg-[#f5c842] text-[#052112] text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              35s Teaser Video Reel
            </span>
          </div>

          {/* Interactive Progress Video Screen Simulation */}
          <div className="relative aspect-video sm:aspect-[21/9] bg-gradient-to-tr from-[#020d06] via-[#052112] to-[#0f3d22] flex flex-col justify-between p-6 sm:p-8 text-white overflow-hidden group">
            {/* Animated Grid scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

            {/* Video overlay graphic content */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-white/90">INNOVISION // LAB_FEED_01</span>
              </div>
              <div className="text-xs font-mono text-[#f5c842] bg-black/60 px-3 py-1 rounded-lg border border-[#d4af37]/30">
                1080p60 · HDR PRO RES
              </div>
            </div>

            {/* Center Reel Content Presentation */}
            <div className="relative z-10 text-center max-w-xl mx-auto my-auto space-y-3">
              <div className="inline-flex p-3 rounded-full bg-[#f5c842]/20 border border-[#f5c842]/40 text-[#f5c842] mb-1">
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-[#f5c842]" />
              </div>
              <h4 className="text-lg sm:text-2xl font-black text-white drop-shadow-md">
                PJ Campus Secondary Innovators in Action
              </h4>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2">
                Documenting live code deployments, robotic chassis calibrations, and booth construction for Strand Mall Kota Damansara.
              </p>
            </div>

            {/* Video Player Controls Bar */}
            <div className="relative z-10 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingReel(!isPlayingReel)}
                  className="p-2 rounded-lg bg-[#f5c842] text-[#052112] hover:bg-white transition-colors cursor-pointer"
                  aria-label={isPlayingReel ? 'Pause' : 'Play'}
                >
                  {isPlayingReel ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-xs font-mono text-white/80">00:23 / 00:35</span>
              </div>

              {/* Progress Bar */}
              <div 
                className="flex-1 max-w-md h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                  setReelProgress(pct);
                }}
              >
                <div 
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f5c842] transition-all duration-150" 
                  style={{ width: `${reelProgress}%` }}
                />
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => onNavigate('showcase')}
                  className="text-xs font-bold text-[#f5c842] hover:text-white transition-colors underline cursor-pointer"
                >
                  View Projects →
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 sm:px-6 bg-[#f0f7f2] border-t border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <strong>Exhibition Progress Walkthrough:</strong> Live preview of student project architectures, UI designs, and microcontroller circuitry.
            </div>
            <span className="text-[#186337] font-semibold text-[11px] shrink-0">
              Verified by Central Task Force
            </span>
          </div>
        </div>
      </section>

      {/* FACULTY MENTORSHIP TRIBUTE (MISS ANJALI) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#e8f5ed] via-[#f0f7f2] to-[#fef9e7] border-l-6 border-[#186337] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#0c3d21] text-[#f5c842] flex items-center justify-center shrink-0 shadow-md border border-[#d4af37]/50">
            <GraduationCap className="w-9 h-9" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#186337] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
                Faculty Leadership
              </span>
              <span className="text-xs text-slate-500 font-semibold">MAZ International School (PJ)</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#052112]">
              Guided and Mentored by Miss Anjali
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Secondary Computer Science Teacher &amp; Project Faculty Advisor. Under Miss Anjali's stewardship, the expo is executed as an autonomous student-led initiative by the Petaling Jaya cohort—empowering secondary learners to engineer real-world scalable solutions, construct physical IoT hardware, and engage with industry stakeholders.
            </p>
          </div>
          <button
            onClick={() => onNavigate('admin')}
            className="shrink-0 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0c3d21] border border-[#186337]/30 text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Read Faculty Message →
          </button>
        </div>
      </section>

      {/* FEATURED STUDENT PROJECTS SPOTLIGHT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#186337]">
              Student Innovation Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#052112] tracking-tight mt-0.5">
              Featured Student Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore hands-on software models, AI prototypes, and IoT systems engineered by the PJ student cohort.
            </p>
          </div>
          <button
            id="view-all-projects-btn"
            onClick={() => onNavigate('showcase')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0c3d21] hover:text-[#186337] group self-start sm:self-auto cursor-pointer"
          >
            <span>View All Projects in Showcase</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#d4af37] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#fef9e7] text-[#917319] border border-[#d4af37]/30">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-400">
                    {project.grade}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#052112] group-hover:text-[#186337] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] text-slate-400 px-1 py-0.5">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Lead: <strong>{project.leadStudent}</strong>
                </span>
                <span className="font-bold text-[#186337] flex items-center gap-1 group-hover:underline">
                  Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENUE & VISITOR BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#052112] via-[#09301a] to-[#0c3d21] text-white rounded-2xl p-6 sm:p-10 border-2 border-[#d4af37] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="bg-[#f5c842] text-[#052112] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                Strand Mall, PJ
              </span>
              <span className="text-xs text-white/70 font-mono">Encorp Strand Atrium</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Attend the Digital Expo at Strand Mall
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Open to public visitors, school parents, and technology enthusiasts. Parking is available at Basement levels B1 &amp; B2. Entrance verification coordinated on-site by EntryEnablers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('venue')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs font-bold transition-all cursor-pointer"
            >
              Floorplan &amp; Parking Guide
            </button>
            <button
              onClick={() => onNavigate('visitor')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#f5c842] to-[#d4af37] text-[#052112] text-xs font-black shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Visitor Guidelines →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
