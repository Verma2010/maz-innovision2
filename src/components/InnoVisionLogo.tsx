import React from 'react';

interface InnoVisionLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'full' | 'emblem' | 'horizontal';
  showSubtext?: boolean;
}

export const InnoVisionLogo: React.FC<InnoVisionLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtext = true,
}) => {
  // Dimension mapping
  const sizeConfig = {
    sm: { emblemSize: 38, textSize: 'text-xs', subSize: 'text-[9px]' },
    md: { emblemSize: 56, textSize: 'text-base', subSize: 'text-[11px]' },
    lg: { emblemSize: 84, textSize: 'text-xl', subSize: 'text-xs' },
    xl: { emblemSize: 120, textSize: 'text-2xl', subSize: 'text-sm' },
    hero: { emblemSize: 170, textSize: 'text-3xl sm:text-4xl', subSize: 'text-xs sm:text-sm' },
  }[size];

  const emblem = (
    <svg
      width={sizeConfig.emblemSize}
      height={sizeConfig.emblemSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-[0_8px_20px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:scale-105"
    >
      <defs>
        {/* Luminous Gold Gradients */}
        <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="35%" stopColor="#F5C842" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#967414" />
        </linearGradient>

        <linearGradient id="goldRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9E0" />
          <stop offset="40%" stopColor="#F5C842" />
          <stop offset="85%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7E600F" />
        </linearGradient>

        {/* Deep Emerald Shield Gradient */}
        <linearGradient id="emeraldShield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E4E2A" />
          <stop offset="40%" stopColor="#0A381E" />
          <stop offset="100%" stopColor="#041A0D" />
        </linearGradient>

        <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5C842" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
        </linearGradient>

        {/* Outer Glow Filter */}
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Hexagonal Shield with Gold Border */}
      <polygon
        points="100,6 182,48 182,142 100,194 18,142 18,48"
        fill="url(#emeraldShield)"
        stroke="url(#goldLinear)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Concentric Accent Ring */}
      <polygon
        points="100,18 170,54 170,136 100,180 30,136 30,54"
        fill="none"
        stroke="url(#goldLinear)"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        opacity="0.6"
      />

      {/* Digital Ray Grid Lines */}
      <path d="M100 20 L100 50 M100 150 L100 180" stroke="url(#circuitGlow)" strokeWidth="1.5" />
      <path d="M35 55 L65 72 M135 128 L165 145" stroke="url(#circuitGlow)" strokeWidth="1.5" />
      <path d="M165 55 L135 72 M65 128 L35 145" stroke="url(#circuitGlow)" strokeWidth="1.5" />

      {/* Orbit Rings representing InnoVision / Digital Space */}
      <ellipse
        cx="100"
        cy="100"
        rx="64"
        ry="24"
        transform="rotate(-26 100 100)"
        stroke="url(#goldLinear)"
        strokeWidth="1.8"
        opacity="0.85"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="64"
        ry="24"
        transform="rotate(26 100 100)"
        stroke="url(#goldLinear)"
        strokeWidth="1.8"
        opacity="0.85"
      />

      {/* Orbit Tech Satellites / Nodes */}
      <circle cx="150" cy="76" r="3.5" fill="#FFF8D6" filter="url(#goldGlow)" />
      <circle cx="50" cy="124" r="3.5" fill="#FFF8D6" filter="url(#goldGlow)" />
      <circle cx="50" cy="76" r="3" fill="#F5C842" />
      <circle cx="150" cy="124" r="3" fill="#F5C842" />

      {/* Soaring Golden Eagle / Phoenix Falcon Wings (The Spirit of Innovation) */}
      <path
        d="M100 66 
           C112 52, 138 48, 162 58
           C148 70, 134 76, 120 78
           C142 84, 156 94, 160 106
           C140 106, 124 98, 114 92
           C126 106, 130 120, 126 132
           C116 118, 108 106, 100 96
           C92 106, 84 118, 74 132
           C70 120, 74 106, 86 92
           C76 98, 60 106, 40 106
           C44 94, 58 84, 80 78
           C66 76, 52 70, 38 58
           C62 48, 88 52, 100 66 Z"
        fill="url(#goldLinear)"
        stroke="#FFF9E0"
        strokeWidth="0.8"
        filter="drop-shadow(0 2px 5px rgba(0,0,0,0.4))"
      />

      {/* Central "Vision" Core - Optical Aperture / Golden Spark */}
      <circle cx="100" cy="100" r="16" fill="#041A0D" stroke="url(#goldLinear)" strokeWidth="2.5" />
      
      {/* 4-Point Innovation Star in Center */}
      <path
        d="M100 88 L103 97 L112 100 L103 103 L100 112 L97 103 L88 100 L97 97 Z"
        fill="url(#goldRadial)"
      />
      <circle cx="100" cy="100" r="2.5" fill="#FFFFFF" />

      {/* Bottom Year & Campus Ribbon Banner */}
      <path
        d="M56 160 Q100 172 144 160 L140 174 Q100 186 60 174 Z"
        fill="url(#goldLinear)"
      />
      <text
        x="100"
        y="171"
        fill="#052112"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="sans-serif"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        EXPO 2026
      </text>
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{emblem}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        {emblem}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-wider text-white text-xs uppercase bg-[#186337] px-1.5 py-0.5 rounded border border-[#d4af37]/40">
              MAZ
            </span>
            <span className={`font-black tracking-tight text-white ${sizeConfig.textSize}`}>
              INNO<span className="text-[#f5c842]">VISION</span>
            </span>
          </div>
          {showSubtext && (
            <p className={`font-medium tracking-wider text-[#d4af37] uppercase ${sizeConfig.subSize}`}>
              PJ Campus Digital Expo
            </p>
          )}
        </div>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {emblem}
      <div className="mt-3">
        <div className="flex items-center justify-center gap-2">
          <span className="bg-[#0c3d21] text-[#f5c842] border border-[#d4af37]/60 text-[10px] sm:text-xs font-black tracking-widest px-2 py-0.5 rounded-full uppercase shadow-sm">
            MAZ INTERNATIONAL
          </span>
        </div>
        <h2 className={`font-black tracking-tight text-white mt-1 drop-shadow-md ${sizeConfig.textSize}`}>
          INNO<span className="text-[#f5c842]">VISION</span>
        </h2>
        {showSubtext && (
          <p className={`font-semibold tracking-wider text-[#f5c842]/90 uppercase mt-0.5 ${sizeConfig.subSize}`}>
            Petaling Jaya Campus Digital Expo
          </p>
        )}
      </div>
    </div>
  );
};
