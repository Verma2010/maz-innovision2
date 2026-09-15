import React from 'react';
import { PageId } from '../types';
import { InnoVisionLogo } from './InnoVisionLogo';
import { MazSchoolLogo } from './MazSchoolLogo';
import { Sparkles, MapPin, GraduationCap, ArrowUpRight, Shield, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
  onOpenLogoModal: (type?: 'innovision' | 'school') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLogoModal,
}) => {
  return (
    <footer className="bg-gradient-to-b from-[#052112] via-[#03150b] to-[#010a05] text-white/80 border-t-4 border-[#d4af37] pt-14 pb-8 px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenLogoModal('school')}
                className="hover:scale-105 transition-transform cursor-pointer"
                title="View School Crest"
              >
                <MazSchoolLogo size={48} />
              </button>
              <button
                onClick={() => onOpenLogoModal('innovision')}
                className="hover:scale-105 transition-transform cursor-pointer"
                title="View InnoVision Logo"
              >
                <InnoVisionLogo size="sm" variant="emblem" />
              </button>
              <div>
                <h3 className="font-black text-white text-base leading-tight">
                  MAZ <span className="text-[#f5c842]">INNOVISION</span> 2026
                </h3>
                <p className="text-[11px] text-[#d4af37] font-semibold uppercase tracking-wider">
                  Petaling Jaya Campus · Official Expo Website
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-md">
              The official institutional website for MAZ InnoVision 2026, the premier secondary student-led technology, engineering, and creative computing exhibition organized by MAZ International School (PJ Campus) at Strand Mall, Kota Damansara.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <button
                onClick={() => onOpenLogoModal('innovision')}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-[#f5c842] rounded-lg font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Inspect High-Res Logo
              </button>
              <button
                onClick={() => {
                  onNavigate('visitor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1 bg-[#186337] hover:bg-[#0c3d21] text-white rounded-lg font-semibold transition-colors cursor-pointer flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Visitor Guidelines</span>
              </button>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="space-y-3 text-xs">
            <h4 className="font-black uppercase text-[#f5c842] tracking-wider text-xs">
              Website Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'campus', label: 'PJ Campus Info' },
                { id: 'showcase', label: 'Student Project Showcase' },
                { id: 'venue', label: 'Strand Mall Venue' },
                { id: 'events', label: 'Key Events & Schedule' },
                { id: 'visitor', label: 'Visitor Guidelines' },
                { id: 'contacts', label: 'Contacts & Enquiries' },
                { id: 'admin', label: 'Administration' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Venue Col */}
          <div className="space-y-3 text-xs">
            <h4 className="font-black uppercase text-[#f5c842] tracking-wider text-xs">
              Leadership &amp; Venue
            </h4>
            <div className="space-y-2 text-white/70">
              <p>
                <strong className="text-white block font-semibold">Faculty Mentor:</strong>
                Miss Anjali (Secondary CS)
              </p>
              <p>
                <strong className="text-white block font-semibold">Student Engineering:</strong>
                Central Task Force (PJ Campus)
              </p>
              <p>
                <strong className="text-white block font-semibold">Credential Desk:</strong>
                EntryEnablers Team
              </p>
              <p>
                <strong className="text-white block font-semibold">Exhibition Venue:</strong>
                Strand Mall, Kota Damansara, PJ
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-3">
          <p>© 2026 MAZ International School (Petaling Jaya Campus). All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Official Digital Expo Website · Petaling Jaya</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
