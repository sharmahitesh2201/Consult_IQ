
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import FrameworksPage from './pages/FrameworksPage';
import PracticeArenaPage from './pages/PracticeArenaPage';
import ViewResourcePage from './pages/ViewResourcePage';
import ChatWindow from './components/ChatWindow';
import MyProgressPage from './pages/MyProgressPage';
import StrategyVideosPage from './pages/StrategyVideosPage';
import DailyFeedbackPage from './pages/DailyFeedbackPage';
import { ChatIcon } from './constants';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = (): string => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    if (path.startsWith('/case-studies')) return 'Case Studies';
    if (path.startsWith('/frameworks')) return 'Frameworks';
    if (path.startsWith('/practice-arena')) return 'Practice Arena';
    if (path.startsWith('/my-progress')) return 'My Progress';
    if (path.startsWith('/strategy-videos')) return 'Strategy Videos';
    if (path.startsWith('/daily-feedback')) return 'Daily Feedback';
    if (path.startsWith('/view/case/') || path.startsWith('/view/framework/') || path.startsWith('/view/practice/')) {
      return 'View Resource';
    }
    return 'ConsultIQ';
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getPageTitle()} />
        <main className="flex-1 p-6 overflow-y-auto bg-slate-100">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/frameworks" element={<FrameworksPage />} />
            <Route path="/practice-arena" element={<PracticeArenaPage />} />
            <Route path="/my-progress" element={<MyProgressPage />} />
            <Route path="/strategy-videos" element={<StrategyVideosPage />} />
            <Route path="/daily-feedback" element={<DailyFeedbackPage />} />
            <Route path="/view/:type/:id" element={<ViewResourcePage />} />
          </Routes>
        </main>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          aria-label="Toggle AI Chat"
        >
          <ChatIcon className="w-6 h-6" />
        </button>
      </div>
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default App;