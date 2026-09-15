import React, { useState } from 'react';
import { PageId, ExpoEvent } from '../types';
import { EXPO_SCHEDULE } from '../data/expoData';
import { 
  Calendar, Clock, MapPin, User, CheckCircle2, 
  Sparkles, BookmarkPlus, ArrowUpRight
} from 'lucide-react';

interface EventsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [savedEventIds, setSavedEventIds] = useState<Set<string>>(new Set());

  const categories = ['All', 'Keynote', 'Live Demo', 'Tech Panel', 'Workshop', 'Awards'];

  const filteredEvents = selectedCategory === 'All'
    ? EXPO_SCHEDULE
    : EXPO_SCHEDULE.filter((e) => e.category === selectedCategory);

  const toggleSaveEvent = (id: string) => {
    const next = new Set(savedEventIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSavedEventIds(next);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] rounded-2xl p-6 sm:p-9 text-white border-l-6 border-[#d4af37] shadow-lg">
        <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#f5c842] mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Official Expo Itinerary</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Key Events &amp; Showcase Timeline
        </h1>
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1 max-w-2xl">
          The curated programme of keynote speeches, software walk-throughs, youth engineering panels, and student recognition ceremonies at Strand Mall.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-2">
          Track:
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#0c3d21] text-[#f5c842] shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#186337]/30 space-y-8 ml-2 sm:ml-4">
        {filteredEvents.map((evt) => {
          const isSaved = savedEventIds.has(evt.id);

          return (
            <div key={evt.id} className="relative group">
              {/* Timeline Pin Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#f5c842] border-3 border-white shadow-md shadow-[#d4af37]/50 group-hover:scale-125 transition-transform" />

              {/* Event Card */}
              <div className="bg-white rounded-2xl border border-slate-200 hover:border-[#d4af37] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#186337]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#fef9e7] text-[#917319] border border-[#d4af37]/40">
                      {evt.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {evt.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#052112]">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {evt.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#186337]" />
                    <span>Presenter: <strong>{evt.speaker}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#186337]" />
                    <span>Stage: <strong className="text-slate-800">{evt.stage}</strong></span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => toggleSaveEvent(evt.id)}
                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      isSaved
                        ? 'bg-[#186337] text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>{isSaved ? 'Bookmarked' : 'Add to My Schedule'}</span>
                  </button>

                  <button
                    onClick={() => onNavigate('visitor')}
                    className="text-xs font-bold text-[#0c3d21] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Visitor Guidelines</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
