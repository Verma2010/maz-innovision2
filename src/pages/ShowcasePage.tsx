import React, { useState, useMemo } from 'react';
import { StudentProject, ProjectCategory } from '../types';
import { 
  Search, Filter, ThumbsUp, MapPin, Award, 
  Sparkles, PlusCircle, ArrowUpRight, CheckCircle2,
  Cpu, Users, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShowcasePageProps {
  projects: StudentProject[];
  onSelectProject: (project: StudentProject) => void;
  onUpvoteProject: (projectId: string) => void;
  upvotedIds: Set<string>;
  onOpenSubmitModal: () => void;
}

export const ShowcasePage: React.FC<ShowcasePageProps> = ({
  projects,
  onSelectProject,
  onUpvoteProject,
  upvotedIds,
  onOpenSubmitModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedGrade, setSelectedGrade] = useState<string>('All Grades');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'AI & Computational',
    'Interactive Web',
    'Eco-Tech & IoT',
    'Cybersecurity',
    'Creative Media',
  ];

  const grades = ['All Grades', 'Year 9', 'Year 10', 'Year 11 (IGCSE CS Cohort)'];

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchGrade = selectedGrade === 'All Grades' || p.grade.includes(selectedGrade.replace(' (IGCSE CS Cohort)', ''));
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.leadStudent.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);

      return matchCategory && matchGrade && matchSearch;
    });
  }, [projects, selectedCategory, selectedGrade, searchQuery]);

  // Aggregate metrics
  const totalVotes = useMemo(() => {
    return projects.reduce((sum, p) => sum + p.upvotes + (upvotedIds.has(p.id) ? 1 : 0), 0);
  }, [projects, upvotedIds]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(245,200,66,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Petaling Jaya Campus Innovation Showcase</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Student Project Showcase
            </h1>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
              Explore 8+ high-performance applications, hardware rigs, and computational models designed and deployed by the secondary students of MAZ International School.
            </p>
          </div>

          {/* Quick Metrics & Submission CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="bg-black/40 border border-[#d4af37]/40 rounded-xl p-3 text-center">
              <span className="text-[10px] font-bold text-white/70 uppercase block">People's Choice Votes</span>
              <strong className="text-lg font-mono font-black text-[#f5c842]">{totalVotes}</strong>
            </div>
            <button
              id="open-submit-project-modal-btn"
              onClick={onOpenSubmitModal}
              className="px-4 py-3 bg-gradient-to-r from-[#f5c842] to-[#d4af37] text-[#052112] hover:scale-105 font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Submit Project Proposal</span>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTERING CONTROLS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            id="showcase-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, student name, or tech (e.g. ESP32, Python, WebXR, AI)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#186337] text-slate-800 placeholder-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
            Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0c3d21] text-[#f5c842] shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grade Filter Pill bar & Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Grade:</span>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-2.5 py-1 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white"
            >
              {grades.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div className="text-slate-500 font-medium">
            Showing <strong>{filteredProjects.length}</strong> of {projects.length} innovation projects
          </div>
        </div>
      </div>

      {/* PROJECT CARDS GRID */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isUpvoted = upvotedIds.has(project.id);
              const voteCount = project.upvotes + (isUpvoted ? 1 : 0);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#d4af37] p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Category Accent top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#186337] via-[#d4af37] to-[#186337]" />

                  <div>
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-[#fef9e7] text-[#917319] border border-[#d4af37]/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {project.grade}
                        </span>
                      </div>

                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-black text-[#052112] group-hover:text-[#186337] cursor-pointer transition-colors leading-snug"
                    >
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-[#917319] font-medium mt-0.5 mb-2.5">
                      "{project.tagline}"
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Team info */}
                    <div className="bg-[#f0f7f2]/60 rounded-xl p-3 border border-[#186337]/15 space-y-1.5 text-xs text-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-semibold">Lead Developer:</span>
                        <strong className="text-[#052112]">{project.leadStudent}</strong>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#186337]" />
                          Booth:
                        </span>
                        <span className="font-semibold text-slate-700 truncate max-w-[200px]">
                          {project.boothLocation}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Interactive Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      id={`upvote-btn-${project.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpvoteProject(project.id);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isUpvoted
                          ? 'bg-[#186337] text-white'
                          : 'bg-white border border-[#d4af37] text-[#052112] hover:bg-[#fef9e7]'
                      }`}
                      title="Vote for People's Choice Award"
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isUpvoted ? 'fill-current' : ''}`} />
                      <span>{isUpvoted ? 'Voted' : 'Vote'}</span>
                      <span className="ml-1 text-[10px] bg-black/10 px-1 py-0.2 rounded font-mono">
                        {voteCount}
                      </span>
                    </button>

                    <button
                      id={`inspect-project-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1 text-xs font-bold text-[#0c3d21] hover:text-[#186337] transition-colors group/btn"
                    >
                      <span>Full Technical Blueprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No Projects Matched Your Filter</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or reset category selection to view all student innovation builds.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedGrade('All Grades');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#0c3d21] text-[#f5c842] text-xs font-bold rounded-lg shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Secondary Information Strip */}
      <div className="bg-[#fef9e7] border border-[#d4af37]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#052112] flex items-center justify-center font-black shrink-0">
            ★
          </div>
          <div>
            <h4 className="text-xs font-extrabold text-[#917319] uppercase tracking-wider">
              People's Choice Award Voting Open
            </h4>
            <p className="text-xs text-slate-700 mt-0.5">
              Every attendee can vote for their top student project. The winning team will receive the 2026 Innovation Trophy at the closing ceremony!
            </p>
          </div>
        </div>
        <button
          onClick={onOpenSubmitModal}
          className="shrink-0 px-4 py-2 bg-white text-[#052112] border border-[#d4af37] text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors"
        >
          Submit New Project Entry
        </button>
      </div>
    </div>
  );
};
