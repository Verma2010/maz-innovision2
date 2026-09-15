import React, { useState } from 'react';
import { InnoVisionLogo } from './InnoVisionLogo';
import { MazSchoolLogo } from './MazSchoolLogo';
import { X, Download, Eye, Sparkles, Shield, Check, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'innovision' | 'school';
}

export const LogoModal: React.FC<LogoModalProps> = ({
  isOpen,
  onClose,
  initialType = 'innovision',
}) => {
  const [selectedType, setSelectedType] = useState<'innovision' | 'school'>(initialType);
  const [copied, setCopied] = useState(false);

  // Sync selectedType when initialType changes
  React.useEffect(() => {
    setSelectedType(initialType);
  }, [initialType]);

  const handleDownloadSVG = () => {
    const isInnovision = selectedType === 'innovision';
    const svgData = isInnovision ? getInnoVisionSVGString() : getSchoolSVGString();
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = isInnovision ? 'maz-innovision-logo-hd.svg' : 'maz-school-crest-hd.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyColor = (color: string) => {
    navigator.clipboard?.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#03140a]/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#072a18] via-[#052112] to-[#021109] border-2 border-[#d4af37] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-white overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#f5c842]/10 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              id="close-logo-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-[#f5c842] bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tabs for InnoVision vs School Crest */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                onClick={() => setSelectedType('innovision')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedType === 'innovision'
                    ? 'bg-[#d4af37] text-[#052112] shadow-md shadow-[#d4af37]/30'
                    : 'bg-white/10 text-white/80 hover:bg-white/15'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                InnoVision Logo (Ultra-HD Vector)
              </button>
              <button
                onClick={() => setSelectedType('school')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  selectedType === 'school'
                    ? 'bg-[#d4af37] text-[#052112] shadow-md shadow-[#d4af37]/30'
                    : 'bg-white/10 text-white/80 hover:bg-white/15'
                }`}
              >
                <Shield className="w-4 h-4" />
                MAZ School Crest
              </button>
            </div>

            {/* Main Stage Presentation */}
            <div className="flex flex-col items-center justify-center p-6 bg-black/40 rounded-xl border border-[#d4af37]/30 relative group">
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-semibold text-[#f5c842] bg-[#0c3d21]/90 px-2 py-0.5 rounded-full border border-[#d4af37]/40">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Lossless Vector (Infinite Crispness)</span>
              </div>

              {selectedType === 'innovision' ? (
                <div className="my-3 transition-transform duration-300 transform group-hover:scale-105">
                  <InnoVisionLogo size="hero" showSubtext={false} />
                </div>
              ) : (
                <div className="my-5 transition-transform duration-300 transform group-hover:scale-105">
                  <MazSchoolLogo size={150} />
                </div>
              )}

              <div className="text-center mt-3">
                <h3 className="text-xl font-extrabold text-[#f5c842]">
                  {selectedType === 'innovision' ? 'MAZ InnoVision Digital Expo' : 'MAZ International School Emblem'}
                </h3>
                <p className="text-xs text-white/80 mt-1 max-w-md mx-auto">
                  {selectedType === 'innovision'
                    ? 'Official insignia featuring the golden eagle wings of ambition, concentric digital orbit rings, and the optical vision spark of secondary youth innovation.'
                    : 'The heritage heraldic crest of MAZ International School (Petaling Jaya Campus), celebrating academic excellence and technology-forward learning.'}
                </p>
              </div>
            </div>

            {/* Emblem Symbolic Anatomy & Colors */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <h4 className="font-bold text-[#f5c842] uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-1.5">
                  <Eye className="w-3.5 h-3.5" /> Clarity &amp; Geometry Details
                </h4>
                <ul className="space-y-1 text-white/70">
                  <li>• Pure mathematical SVG vector curves</li>
                  <li>• Razor-sharp display on 4K, Retina &amp; print displays</li>
                  <li>• Anti-aliased dual-tone metallic gold gradients</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <h4 className="font-bold text-[#f5c842] uppercase tracking-wider text-[11px] mb-1.5">
                  Official Brand Palette (Click to Copy)
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  {[
                    { name: 'Gold Main', hex: '#D4AF37' },
                    { name: 'Gold Bright', hex: '#F5C842' },
                    { name: 'Forest Dark', hex: '#052112' },
                    { name: 'Forest Mid', hex: '#186337' },
                  ].map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => handleCopyColor(color.hex)}
                      className="group/chip flex-1 flex flex-col items-center p-1.5 rounded bg-black/40 hover:bg-black/60 border border-white/10 transition-colors"
                      title={`Copy ${color.hex}`}
                    >
                      <span className="w-4 h-4 rounded-full mb-1 border border-white/20" style={{ backgroundColor: color.hex }} />
                      <span className="text-[10px] text-white/60 group-hover/chip:text-white font-mono">{color.hex}</span>
                    </button>
                  ))}
                </div>
                {copied && (
                  <p className="text-[10px] text-[#f5c842] mt-1 text-center flex items-center justify-center gap-1">
                    <Check className="w-3 h-3" /> Hex code copied to clipboard!
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-[11px] text-white/50">
                Created for MAZ International School (PJ Campus)
              </span>
              <button
                id="download-logo-svg-btn"
                onClick={handleDownloadSVG}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#f5c842] to-[#d4af37] text-[#052112] font-bold text-xs rounded-lg shadow-lg hover:shadow-[#d4af37]/40 hover:scale-[1.02] transition-all"
              >
                <Download className="w-4 h-4" />
                Download Vector (.SVG)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Helper SVG export functions
function getInnoVisionSVGString() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2B2"/>
      <stop offset="35%" stop-color="#F5C842"/>
      <stop offset="70%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#967414"/>
    </linearGradient>
    <linearGradient id="emeraldShield" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E4E2A"/>
      <stop offset="40%" stop-color="#0A381E"/>
      <stop offset="100%" stop-color="#041A0D"/>
    </linearGradient>
  </defs>
  <polygon points="100,6 182,48 182,142 100,194 18,142 18,48" fill="url(#emeraldShield)" stroke="url(#goldLinear)" stroke-width="3.5" stroke-linejoin="round"/>
  <ellipse cx="100" cy="100" rx="64" ry="24" transform="rotate(-26 100 100)" stroke="url(#goldLinear)" stroke-width="1.8"/>
  <ellipse cx="100" cy="100" rx="64" ry="24" transform="rotate(26 100 100)" stroke="url(#goldLinear)" stroke-width="1.8"/>
  <circle cx="100" cy="100" r="16" fill="#041A0D" stroke="url(#goldLinear)" stroke-width="2.5"/>
  <path d="M100 88 L103 97 L112 100 L103 103 L100 112 L97 103 L88 100 L97 97 Z" fill="#F5C842"/>
</svg>`;
}

function getSchoolSVGString() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="600" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80" r="76" fill="#0A331C" stroke="#D4AF37" stroke-width="3"/>
  <path d="M48 42 L112 42 C112 42, 114 84, 80 116 C46 84, 48 42, 48 42 Z" fill="#082A16" stroke="#F5C842" stroke-width="2"/>
  <text x="80" y="136" fill="#D4AF37" font-size="8" font-weight="bold" text-anchor="middle">MAZ INTERNATIONAL</text>
</svg>`;
}
