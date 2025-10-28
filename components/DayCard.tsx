
import React, { useState } from 'react';
import type { Day, Project } from '../types';
import { ClockIcon, CodeBracketIcon, BeakerIcon, SparklesIcon } from './icons';

interface DayCardProps {
  day: Day;
  onProjectClick: (project: Project) => void;
}

const DayCard: React.FC<DayCardProps> = ({ day, onProjectClick }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={`relative flex flex-col bg-slate-800 rounded-xl shadow-lg transition-all duration-300 ${isCompleted ? 'bg-emerald-900/50' : ''}`}>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-semibold text-sky-400">{day.day}</p>
            <h3 className="text-xl font-bold text-white">{day.title}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
              className="h-5 w-5 rounded bg-slate-700 border-slate-600 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {day.schedule.length > 0 && (
          <div className="space-y-3 mb-6 border-l-2 border-slate-700 pl-4">
            {day.schedule.map((item) => (
              <div key={item.time} className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-slate-500 mt-0.5" />
                <div>
                  <p className="font-mono text-sm text-slate-400">{item.time}</p>
                  <p className="text-slate-200">{item.topic}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
                {day.project.isPortfolio ? <BeakerIcon className="w-6 h-6 text-fuchsia-400 mt-0.5 flex-shrink-0" /> : <CodeBracketIcon className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" />}
                <div>
                    <h4 className="font-semibold text-white">{day.project.title}</h4>
                    <p className="text-slate-300 text-sm">{day.project.description}</p>
                </div>
            </div>
        </div>
      </div>
      
      {day.project.isPortfolio && (
        <div className="p-4 bg-slate-900/50 rounded-b-xl mt-auto">
            <button
            onClick={() => onProjectClick(day.project)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-sky-500 transition-colors"
            >
            <SparklesIcon className="w-5 h-5"/>
            Get Project Inspiration
            </button>
        </div>
      )}
    </div>
  );
};

export default DayCard;
