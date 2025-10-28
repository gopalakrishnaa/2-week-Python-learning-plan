
import React, { useState } from 'react';
import type { Project } from './types';
import { studyPlan, dailyTips, portfolioGoals, jobPrep, resources } from './constants';
import DayCard from './components/DayCard';
import InfoSection from './components/InfoSection';
import ProjectModal from './components/ProjectModal';
import { PythonIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.isPortfolio) {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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

        <main>
          {studyPlan.map((week) => (
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
          ))}

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
