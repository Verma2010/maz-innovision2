/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, StudentProject } from './types';
import { STUDENT_PROJECTS } from './data/projectsData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { LogoModal } from './components/LogoModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SubmitProjectModal } from './components/SubmitProjectModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ShowcasePage } from './pages/ShowcasePage';
import { CampusPage } from './pages/CampusPage';
import { VenuePage } from './pages/VenuePage';
import { EventsPage } from './pages/EventsPage';
import { VisitorPage } from './pages/VisitorPage';
import { ContactsPage } from './pages/ContactsPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [projects, setProjects] = useState<StudentProject[]>(() => {
    const saved = localStorage.getItem('maz_innovision_projects');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return STUDENT_PROJECTS;
      }
    }
    return STUDENT_PROJECTS;
  });

  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('maz_innovision_upvotes');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        return new Set();
      }
    }
    return new Set();
  });

  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);
  const [logoModalOpen, setLogoModalOpen] = useState(false);
  const [logoModalType, setLogoModalType] = useState<'innovision' | 'school'>('innovision');
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync projects to localStorage
  useEffect(() => {
    localStorage.setItem('maz_innovision_projects', JSON.stringify(projects));
  }, [projects]);

  // Sync upvoted IDs to localStorage
  useEffect(() => {
    localStorage.setItem('maz_innovision_upvotes', JSON.stringify(Array.from(upvotedIds)));
  }, [upvotedIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLogoModal = (type: 'innovision' | 'school' = 'innovision') => {
    setLogoModalType(type);
    setLogoModalOpen(true);
  };

  const handleUpvoteProject = (projectId: string) => {
    const nextUpvotes = new Set(upvotedIds);
    const hasVoted = nextUpvotes.has(projectId);

    if (hasVoted) {
      nextUpvotes.delete(projectId);
      showToast('Vote withdrawn.');
    } else {
      nextUpvotes.add(projectId);
      showToast("🏆 Your vote for the People's Choice Award was counted!");
    }
    setUpvotedIds(nextUpvotes);
  };

  const handleProjectSubmitSuccess = (projectTitle: string) => {
    showToast(`Project "${projectTitle}" submitted to Central Task Force!`);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-900 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#052112]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[150] bg-[#052112] text-[#f5c842] border border-[#d4af37] px-4 py-3 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenLogoModal={handleOpenLogoModal}
      />

      {/* Page Content with Smooth Transition */}
      <main className="flex-1">
        <PageTransition pageId={currentPage} onNavigate={handlePageChange}>
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handlePageChange}
              onOpenLogoModal={handleOpenLogoModal}
              projects={projects}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          )}

          {currentPage === 'showcase' && (
            <ShowcasePage
              projects={projects}
              onSelectProject={(p) => setSelectedProject(p)}
              onUpvoteProject={handleUpvoteProject}
              upvotedIds={upvotedIds}
              onOpenSubmitModal={() => setSubmitModalOpen(true)}
            />
          )}

          {currentPage === 'campus' && (
            <CampusPage
              onNavigate={handlePageChange}
              onOpenLogoModal={handleOpenLogoModal}
            />
          )}

          {currentPage === 'venue' && (
            <VenuePage
              onNavigate={handlePageChange}
            />
          )}

          {currentPage === 'events' && (
            <EventsPage
              onNavigate={handlePageChange}
            />
          )}

          {currentPage === 'visitor' && (
            <VisitorPage
              onNavigate={handlePageChange}
            />
          )}

          {currentPage === 'contacts' && (
            <ContactsPage onNavigate={handlePageChange} />
          )}

          {currentPage === 'admin' && (
            <AdminPage
              onNavigate={handlePageChange}
              onOpenLogoModal={() => handleOpenLogoModal('innovision')}
            />
          )}
        </PageTransition>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handlePageChange}
        onOpenLogoModal={handleOpenLogoModal}
      />

      {/* MODALS */}
      <LogoModal
        isOpen={logoModalOpen}
        onClose={() => setLogoModalOpen(false)}
        initialType={logoModalType}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onUpvote={handleUpvoteProject}
        hasUpvoted={selectedProject ? upvotedIds.has(selectedProject.id) : false}
      />

      <SubmitProjectModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        onSubmitSuccess={handleProjectSubmitSuccess}
      />
    </div>
  );
}
