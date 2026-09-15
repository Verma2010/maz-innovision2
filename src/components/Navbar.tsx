import React, { useState } from 'react';
import { PageId } from '../types';
import { MazSchoolLogo } from './MazSchoolLogo';
import { InnoVisionLogo } from './InnoVisionLogo';
import { Menu, X, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  onPageChange: (pageId: PageId) => void;
  onOpenLogoModal: (type?: 'innovision' | 'school') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onPageChange,
  onOpenLogoModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'campus', label: 'PJ Campus' },
    { id: 'showcase', label: 'Student Projects', badge: 'Showcase' },
    { id: 'venue', label: 'Venue' },
    { id: 'events', label: 'Key Events' },
    { id: 'visitor', label: 'Visitor Guide' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'admin', label: 'Administration' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#052112] via-[#09301a] to-[#0c3d21] text-white/90 text-xs px-4 sm:px-8 py-2 flex items-center justify-between border-b border-[#d4af37]/35 relative z-30">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[#f5c842] flex items-center gap-1.5 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#f5c842]" />
            MAZ International School
          </span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span className="text-white/80 hidden sm:inline">Official Digital Expo Website · Petaling Jaya Campus</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenLogoModal('innovision')}
            className="text-[11px] text-[#f5c842] hover:text-white font-bold underline decoration-[#f5c842]/50 hover:decoration-white transition-colors cursor-pointer"
          >
            Inspect InnoVision Emblem
          </button>
          <span className="text-white/30">·</span>
          <span className="font-bold text-[#f5c842] text-[11px] bg-black/30 px-2 py-0.5 rounded border border-[#d4af37]/30">
            PJ Campus
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 gap-4">
          
          {/* Brand & Logos */}
          <div className="flex items-center gap-3.5">
            {/* School Crest Logo Button */}
            <button
              onClick={() => onOpenLogoModal('school')}
              className="relative p-1 rounded-xl hover:bg-slate-100 transition-colors group cursor-pointer"
              title="Click to view high-resolution School Crest"
              aria-label="View MAZ School Crest"
            >
              <MazSchoolLogo size={46} />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#f5c842] border-2 border-white rounded-full group-hover:scale-125 transition-transform" />
            </button>

            {/* InnoVision Mini Logo */}
            <button
              onClick={() => onOpenLogoModal('innovision')}
              className="relative p-1 rounded-xl hover:bg-slate-100 transition-colors hidden sm:block group cursor-pointer"
              title="Click to view crystal-clear InnoVision Logo"
              aria-label="View InnoVision Logo"
            >
              <InnoVisionLogo size="sm" variant="emblem" />
            </button>

            {/* Title Group */}
            <div className="flex flex-col cursor-pointer" onClick={() => onPageChange('home')}>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg text-[#052112] tracking-tight leading-tight">
                  MAZ <span className="text-[#186337]">INNOVISION</span>
                </span>
                <span className="text-[10px] font-extrabold bg-[#fef9e7] text-[#917319] border border-[#d4af37]/40 px-1.5 py-0.2 rounded font-mono">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase leading-none mt-0.5">
                Petaling Jaya Campus · Official Expo Website
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-[#052112]'
                      : 'text-slate-600 hover:text-[#0c3d21] hover:bg-[#e8f5ed]/60'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-[#f5c842] text-[#052112] shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-[#e8f5ed] border-b-2 border-[#d4af37] rounded-lg -z-10 shadow-xs"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Visitor Guide CTA & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="nav-visitor-guide-btn"
              onClick={() => onPageChange('visitor')}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0c3d21] hover:bg-[#186337] text-[#f5c842] font-bold text-xs rounded-xl shadow-xs border border-[#d4af37]/50 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#f5c842]" />
              <span className="hidden sm:inline">Visitor Guide</span>
              <span className="sm:hidden">Guide</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg space-y-1"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#e8f5ed] text-[#052112] border-l-4 border-[#d4af37]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#f5c842] text-[#052112]">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-2 text-slate-500">
              <button
                onClick={() => {
                  onOpenLogoModal('innovision');
                  setMobileMenuOpen(false);
                }}
                className="text-[#186337] font-bold underline cursor-pointer"
              >
                Inspect High-Res Logo
              </button>
              <span>Strand Mall, PJ</span>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
