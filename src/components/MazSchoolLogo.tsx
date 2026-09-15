import React from 'react';

interface MazSchoolLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const MazSchoolLogo: React.FC<MazSchoolLogoProps> = ({
  className = '',
  size = 52,
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="mazGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="50%" stopColor="#F5C842" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <linearGradient id="mazGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F4727" />
            <stop offset="60%" stopColor="#082A16" />
            <stop offset="100%" stopColor="#03150B" />
          </linearGradient>

          <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C842" />
            <stop offset="100%" stopColor="#8C6F16" />
          </linearGradient>
        </defs>

        {/* Circular Outer Seal with Laurels */}
        <circle cx="80" cy="80" r="76" fill="url(#mazGreen)" stroke="url(#shieldRim)" strokeWidth="3" />
        <circle cx="80" cy="80" r="70" fill="none" stroke="url(#mazGold)" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

        {/* Laurel Wreath */}
        <path
          d="M32 96 C28 72, 36 48, 54 36 C50 48, 48 64, 52 80 M128 96 C132 72, 124 48, 106 36 C110 48, 112 64, 108 80"
          stroke="url(#mazGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner Heraldic Shield */}
        <path
          d="M48 42 L112 42 C112 42, 114 84, 80 116 C46 84, 48 42, 48 42 Z"
          fill="#0A331C"
          stroke="url(#mazGold)"
          strokeWidth="2.2"
        />

        {/* Shield Quartering Lines */}
        <line x1="80" y1="42" x2="80" y2="114" stroke="url(#mazGold)" strokeWidth="1.2" opacity="0.7" />
        <line x1="48" y1="72" x2="112" y2="72" stroke="url(#mazGold)" strokeWidth="1.2" opacity="0.7" />

        {/* Top Left: Open Book of Knowledge */}
        <path
          d="M58 54 C62 52, 68 53, 72 56 L72 66 C68 64, 62 63, 58 64 Z"
          fill="url(#mazGold)"
        />
        <path
          d="M74 56 C78 53, 84 52, 88 54 L88 64 C84 63, 78 64, 74 66 Z"
          fill="url(#mazGold)"
        />

        {/* Top Right: Torch of Wisdom */}
        <path d="M96 64 L98 52 L102 52 L100 64 Z" fill="url(#mazGold)" />
        <path d="M99 47 C96 45, 96 42, 99 40 C102 42, 102 45, 99 47 Z" fill="#F5C842" />

        {/* Bottom Motif: Global Atom / Compass of Science */}
        <ellipse cx="80" cy="94" rx="14" ry="5" stroke="url(#mazGold)" strokeWidth="1.2" />
        <ellipse cx="80" cy="94" rx="14" ry="5" transform="rotate(60 80 94)" stroke="url(#mazGold)" strokeWidth="1.2" />
        <ellipse cx="80" cy="94" rx="14" ry="5" transform="rotate(-60 80 94)" stroke="url(#mazGold)" strokeWidth="1.2" />
        <circle cx="80" cy="94" r="2.5" fill="#FFF2B2" />

        {/* Top Arc Text: MAZ INTERNATIONAL */}
        <path id="textArcTop" d="M 30,80 A 50,50 0 0,1 130,80" fill="none" />
        
        {/* Banner Ribbon at Bottom */}
        <path
          d="M32 124 Q80 138 128 124 L124 138 Q80 152 36 138 Z"
          fill="url(#mazGold)"
          stroke="#7E600F"
          strokeWidth="1"
        />
        <text
          x="80"
          y="136"
          fill="#052112"
          fontSize="7"
          fontWeight="800"
          fontFamily="sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          MAZ INTERNATIONAL
        </text>

        {/* Sub-label PJ CAMPUS */}
        <text
          x="80"
          y="148"
          fill="#F5C842"
          fontSize="5.5"
          fontWeight="700"
          fontFamily="sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          PETALING JAYA
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xs font-black tracking-wider text-white uppercase">
            MAZ International School
          </span>
          <span className="text-[10px] font-semibold text-[#f5c842] uppercase tracking-wider">
            Petaling Jaya Campus
          </span>
        </div>
      )}
    </div>
  );
};
