import React, { useState } from 'react';
import { PageId } from '../types';
import { VENUE_ZONES, EXPO_FACTS } from '../data/expoData';
import { 
  MapPin, Navigation, Car, Train, Clock, 
  Layers, CheckCircle2, ArrowUpRight, Shield, Sparkles 
} from 'lucide-react';

interface VenuePageProps {
  onNavigate: (pageId: PageId) => void;
}

export const VenuePage: React.FC<VenuePageProps> = ({ onNavigate }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>(VENUE_ZONES[0].id);

  const activeZone = VENUE_ZONES.find((z) => z.id === selectedZoneId) || VENUE_ZONES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg">
        <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842] mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Exhibition Venue &amp; Floor Logistics</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Strand Mall, Kota Damansara
        </h1>
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1 max-w-2xl">
          The public setting for MAZ InnoVision 2026. A premier commercial destination offering multi-level indoor exhibition atriums, secure basement parking, and direct transit access.
        </p>
      </div>

      {/* Primary Venue Detail Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-[#186337] uppercase tracking-wider">Primary Location</span>
            <h2 className="text-xl font-black text-[#052112]">Encorp Strand Mall Atrium</h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#f0f7f2] border border-[#186337]/20 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#186337]">
            <Clock className="w-4 h-4" />
            <span>Exhibition Hours: Announced Soon</span>
          </div>
        </div>

        <div className="bg-[#f0f7f2] border border-[#186337]/15 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-700">
          <MapPin className="w-5 h-5 text-[#186337] shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 block font-bold mb-0.5">Official Address:</strong>
            <span className="font-mono text-slate-800">{EXPO_FACTS.address}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The student cohort selected Strand Mall for its modern spatial layout, allowing expansive exhibition booths, unobstructed sightlines for live drone testing, and safety protocols suitable for family and student attendees.
        </p>
      </div>

      {/* INTERACTIVE FLOORPLAN ZONES EXPLORER */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-[#052112] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#186337]" />
            Interactive Exhibition Zones
          </h3>
          <span className="text-xs text-slate-500">Click a zone to view details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Zone Selector Buttons */}
          <div className="space-y-2">
            {VENUE_ZONES.map((zone) => {
              const isSelected = zone.id === selectedZoneId;
              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0c3d21] text-white border-[#d4af37] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono font-bold block ${isSelected ? 'text-[#f5c842]' : 'text-slate-400'}`}>
                      {zone.code} · {zone.zoneType}
                    </span>
                    <strong className="text-xs sm:text-sm font-bold block leading-tight mt-0.5">
                      {zone.name}
                    </strong>
                  </div>
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#f5c842]' : 'text-slate-400'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Zone Detailed Stage View */}
          <div className="md:col-span-2 bg-white rounded-2xl border-2 border-[#d4af37]/50 p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#fef9e7] text-[#917319] border border-[#d4af37]/30 text-xs font-mono font-bold">
                    {activeZone.code}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {activeZone.zoneType}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Capacity: {activeZone.capacity}
                </span>
              </div>

              <h4 className="text-xl font-black text-[#052112]">
                {activeZone.name}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeZone.description}
              </p>

              <div className="bg-[#f0f7f2] rounded-xl p-4 border border-[#186337]/15">
                <h5 className="text-xs font-bold text-[#0c3d21] uppercase tracking-wider mb-2">
                  Zone Features &amp; Equipment
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeZone.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#186337] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">StrandNav AR Wayfinding points live to this location</span>
              <button
                onClick={() => onNavigate('showcase')}
                className="font-bold text-[#186337] hover:underline cursor-pointer"
              >
                View Booths in this Zone →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TRAVEL & PARKING INSTRUCTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#e8f5ed] text-[#186337] flex items-center justify-center font-bold">
            <Car className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Driving &amp; Parking Logistics</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Strand Mall offers extensive multi-level basement car parking (Basement 1 &amp; 2). Automated Touch 'n Go and cashless payment barriers operate at all entrances. Direct elevators from B1/B2 lead straight into the Ground Floor Central Atrium.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#fef9e7] text-[#917319] flex items-center justify-center font-bold">
            <Train className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Public Transit &amp; MRT Access</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Take the MRT Kajang Line and alight at <strong>Surian MRT Station (SBK07)</strong>. From Surian Station, Strand Mall is a comfortable 7-minute walk via the covered pedestrian boulevard or a 2-minute rapid e-hailing trip.
          </p>
        </div>
      </div>
    </div>
  );
};
