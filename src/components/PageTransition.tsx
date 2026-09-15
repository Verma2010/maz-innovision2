import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

interface PageTransitionProps {
  pageId: PageId;
  children: React.ReactNode;
  onNavigate: (pageId: PageId) => void;
}

const PAGE_FLOW: PageId[] = [
  'home',
  'campus',
  'showcase',
  'venue',
  'events',
  'visitor',
  'contacts',
  'admin',
];

const PAGE_NAMES: Record<PageId, string> = {
  home: 'Home',
  campus: 'Petaling Jaya Campus',
  showcase: 'Student Innovation Showcase',
  venue: 'Strand Mall Venue',
  events: 'Key Events & Timeline',
  visitor: 'Visitor Guide & Registration',
  contacts: 'Directory & Enquiries',
  admin: 'Administration & Mentorship',
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  pageId,
  children,
  onNavigate,
}) => {
  const currentIndex = PAGE_FLOW.indexOf(pageId);
  const prevPage = currentIndex > 0 ? PAGE_FLOW[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGE_FLOW.length - 1 ? PAGE_FLOW[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Transition Progress Bar */}
      <motion.div
        key={`progress-${pageId}`}
        initial={{ width: '0%' }}
        animate={{ width: `${((currentIndex + 1) / PAGE_FLOW.length) * 100}%` }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="h-1 bg-gradient-to-r from-[#d4af37] via-[#f5c842] to-[#186337] fixed top-0 left-0 z-50 shadow-sm"
      />

      {/* Main Page Animated Stage */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageId}
            initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb strip for subpages */}
            {pageId !== 'home' && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
                <nav className="flex items-center gap-2 text-xs text-slate-500 font-semibold" aria-label="Breadcrumb">
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-[#186337] transition-colors"
                  >
                    Home
                  </button>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[#052112] font-bold">{PAGE_NAMES[pageId]}</span>
                </nav>
              </div>
            )}

            {children}

            {/* Bottom Page-to-Page Transfer Stepper Bar */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 mt-6 border-t border-slate-200/80">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {prevPage ? (
                  <button
                    id="prev-page-btn"
                    onClick={() => onNavigate(prevPage)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0c3d21] hover:border-[#186337] text-xs font-bold transition-all shadow-xs group"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 group-hover:text-[#186337] transition-transform" />
                    <span>Previous: <strong>{PAGE_NAMES[prevPage]}</strong></span>
                  </button>
                ) : (
                  <div className="hidden sm:block" />
                )}

                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <span>Page {currentIndex + 1} of {PAGE_FLOW.length}</span>
                </div>

                {nextPage ? (
                  <button
                    id="next-page-btn"
                    onClick={() => onNavigate(nextPage)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0c3d21] text-[#f5c842] hover:bg-[#186337] text-xs font-bold transition-all shadow-sm group"
                  >
                    <span>Next: <strong>{PAGE_NAMES[nextPage]}</strong></span>
                    <ArrowRight className="w-4 h-4 text-[#f5c842] group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate('home')}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0c3d21] text-[#f5c842] text-xs font-bold transition-all"
                  >
                    <span>Back to Overview</span>
                    <ArrowRight className="w-4 h-4 text-[#f5c842]" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
