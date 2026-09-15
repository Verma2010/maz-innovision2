import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle, Code2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCategory } from '../types';

interface SubmitProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (projectTitle: string) => void;
}

export const SubmitProjectModal: React.FC<SubmitProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [category, setCategory] = useState<Exclude<ProjectCategory, 'All'>>('AI & Computational');
  const [leadStudent, setLeadStudent] = useState('');
  const [grade, setGrade] = useState('Year 11');
  const [techStack, setTechStack] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSubmitSuccess(title);
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#03140a]/85 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#d4af37] overflow-hidden z-10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#052112] to-[#0c3d21] p-5 text-white flex items-center justify-between border-b-2 border-[#d4af37]">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#d4af37] text-[#052112] font-black text-xs flex items-center justify-center">
                +
              </span>
              <div>
                <h3 className="font-bold text-sm text-[#f5c842] leading-none">Register Student Project</h3>
                <p className="text-[10px] text-white/70 mt-0.5">MAZ InnoVision Central Task Force Intake</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-slate-800">Project Proposal Received!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Miss Anjali and the Central Task Force committee will review your technical abstract and assign a demonstration booth.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                    Project Title *
                  </label>
                  <input
                    required
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. AeroSens: Ambient Drone Air Quality Map"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                    >
                      <option>AI &amp; Computational</option>
                      <option>Interactive Web</option>
                      <option>Eco-Tech &amp; IoT</option>
                      <option>Cybersecurity</option>
                      <option>Creative Media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                      Student Grade
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                    >
                      <option>Year 9</option>
                      <option>Year 10</option>
                      <option>Year 11 (IGCSE CS)</option>
                      <option>Junior Technology Guild</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px] flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" /> Lead Student *
                    </label>
                    <input
                      required
                      type="text"
                      value={leadStudent}
                      onChange={(e) => setLeadStudent(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px] flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-slate-400" /> Tech Stack
                    </label>
                    <input
                      type="text"
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      placeholder="e.g. Python, ESP32, React"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                    One-Sentence Pitch / Tagline
                  </label>
                  <input
                    required
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="Briefly state the goal or unique edge of the build"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1 text-[11px]">
                    Technical Abstract / Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Explain what hardware or software your team constructed, the problems it addresses, and how it will be demonstrated..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#186337]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#0c3d21] hover:bg-[#186337] text-[#f5c842] font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <Sparkles className="w-4 h-4" /> Submit Proposal to Task Force
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
