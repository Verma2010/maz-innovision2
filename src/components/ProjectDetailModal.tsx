import React, { useState } from 'react';
import { StudentProject } from '../types';
import { 
  X, ThumbsUp, MapPin, Award, UserCheck, 
  Cpu, Layers, CheckCircle2, MessageSquare, Send, Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDetailModalProps {
  project: StudentProject | null;
  onClose: () => void;
  onUpvote: (projectId: string) => void;
  hasUpvoted: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onUpvote,
  hasUpvoted,
}) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [comments, setComments] = useState<Array<{ name: string; text: string; time: string }>>([
    {
      name: 'Dr. Raymond (Visiting Judge)',
      text: 'Remarkable algorithmic clarity for secondary students. The hardware telemetry integration is particularly crisp.',
      time: '1 hour ago',
    },
    {
      name: 'MAZ Alumni Council',
      text: 'Proud to see the PJ campus cohort pushing real-world sustainable solutions!',
      time: '3 hours ago',
    },
  ]);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  if (!project) return null;

  const handleAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setComments([
      {
        name: 'Expo Attendee',
        text: feedbackText.trim(),
        time: 'Just now',
      },
      ...comments,
    ]);
    setFeedbackText('');
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-[#03140a]/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#d4af37]/40 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#052112] via-[#0c3d21] to-[#186337] text-white p-6 sm:p-7 relative border-b-2 border-[#d4af37]">
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="bg-[#d4af37] text-[#052112] text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="bg-white/15 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {project.grade}
              </span>
              <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {project.status}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[#f5c842] font-medium mt-1">
              "{project.tagline}"
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span className="font-semibold text-white">{project.boothLocation}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Mentor: <strong className="text-white">{project.mentor}</strong></span>
              </div>
            </div>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-slate-800">
            {/* Awards & Recognition if any */}
            {project.awards && project.awards.length > 0 && (
              <div className="bg-[#fef9e7] border border-[#d4af37]/40 rounded-xl p-3.5 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#917319] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#917319] uppercase tracking-wide">
                    Exhibition Commendations
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.awards.map((award, i) => (
                      <span key={i} className="text-xs font-semibold text-slate-800 bg-white/80 px-2 py-0.5 rounded border border-[#d4af37]/30">
                        🏆 {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Description & Innovation Overview */}
            <div>
              <h3 className="text-base font-bold text-[#052112] mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#186337]" />
                Project Engineering Abstract
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Innovations Checklist */}
            <div className="bg-[#f0f7f2] border border-[#186337]/20 rounded-xl p-4">
              <h4 className="text-xs font-bold text-[#0c3d21] uppercase tracking-wider mb-2.5">
                Key Technical Capabilities &amp; Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#186337] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#186337]" />
                Architecture &amp; Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Student Engineering Team (PJ Campus)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#186337] text-white flex items-center justify-center font-bold text-xs">
                      {member[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-none">{member}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {idx === 0 ? 'Lead Developer' : 'Technical Contributor'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendee Feedback & Encouragement Box */}
            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#186337]" />
                  Attendee Remarks &amp; Feedback ({comments.length})
                </h4>
              </div>

              <form onSubmit={handleAddFeedback} className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Leave encouraging feedback for this student team..."
                  className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#186337]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#0c3d21] hover:bg-[#186337] text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3 h-3" /> Post
                </button>
              </form>

              {submittedFeedback && (
                <p className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded mb-3 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  Thank you! Your feedback was posted to the student project log.
                </p>
              )}

              <div className="space-y-2 max-h-40 overflow-y-auto pr-1 text-xs">
                {comments.map((c, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center text-[11px] mb-1">
                      <strong className="text-slate-800">{c.name}</strong>
                      <span className="text-slate-400">{c.time}</span>
                    </div>
                    <p className="text-slate-600 leading-snug">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-7 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Cast your vote for the <strong>People's Choice Award</strong>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="upvote-project-btn"
                onClick={() => onUpvote(project.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  hasUpvoted
                    ? 'bg-[#186337] text-white shadow-emerald-900/20'
                    : 'bg-white border-2 border-[#d4af37] text-[#052112] hover:bg-[#fef9e7]'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${hasUpvoted ? 'fill-current' : ''}`} />
                <span>{hasUpvoted ? 'Voted!' : 'Upvote Project'}</span>
                <span className="ml-1 px-1.5 py-0.5 rounded bg-black/10 text-[11px]">
                  {project.upvotes + (hasUpvoted ? 1 : 0)}
                </span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
