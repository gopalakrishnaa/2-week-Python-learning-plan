
import React, { useState, useMemo } from 'react';
import type { Project } from './types';
import { studyPlan, dailyTips, portfolioGoals, jobPrep, resources } from './constants';
import DayCard from './components/DayCard';
import InfoSection from './components/InfoSection';
import ProjectModal from './components/ProjectModal';
import { PythonIcon, SearchIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProjectClick = (project: Project) => {
    if (project.isPortfolio) {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredStudyPlan = useMemo(() => {
    if (!searchQuery) {
      return studyPlan;
    }

    const lowercasedQuery = searchQuery.toLowerCase();

    return studyPlan
      .map(week => {
        const filteredDays = week.days.filter(day => {
          const titleMatch = day.title.toLowerCase().includes(lowercasedQuery);
          const scheduleMatch = day.schedule.some(item =>
            item.topic.toLowerCase().includes(lowercasedQuery)
          );
          const projectMatch =
            day.project.title.toLowerCase().includes(lowercasedQuery) ||
            day.project.description.toLowerCase().includes(lowercasedQuery);

          return titleMatch || scheduleMatch || projectMatch;
        });

        return { ...week, days: filteredDays };
      })
      .filter(week => week.days.length > 0);
  }, [searchQuery]);


  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-4">
            <PythonIcon className="w-12 h-12 text-sky-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              2-Week Python Bootcamp
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Your accelerated study plan to master Python and build a job-ready portfolio.
          </p>
        </header>

        <div className="relative mb-12 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search by title, topic, or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-colors"
            aria-label="Search study plan"
          />
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 pointer-events-none" />
        </div>

        <main>
          {filteredStudyPlan.length > 0 ? (
            filteredStudyPlan.map((week) => (
              <div key={week.week} className="mb-12">
                <div className="mb-8 pl-2">
                  <h2 className="text-3xl font-bold text-white">{week.title}</h2>
                  <p className="text-sky-400">{week.focus}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {week.days.map((day) => (
                    <DayCard key={day.day} day={day} onProjectClick={handleProjectClick} />
                  ))}
                </div>
              </div>
            ))
          ) : (
             <div className="text-center py-16 bg-slate-800/50 rounded-lg">
                <h3 className="text-2xl font-bold text-white">No Results Found</h3>
                <p className="text-slate-400 mt-2">
                    No days match your search for "{searchQuery}".
                </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <InfoSection data={dailyTips} />
            <InfoSection data={portfolioGoals} />
            <InfoSection data={jobPrep} />
            <InfoSection data={resources} />
          </div>
        </main>

        <footer className="text-center mt-16 text-slate-500">
            <p>Built with React, Tailwind CSS, and Gemini AI.</p>
        </footer>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
