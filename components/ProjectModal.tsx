
import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import { getProjectInspiration } from '../services/geminiService';
import { SparklesIcon, XMarkIcon } from './icons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [inspiration, setInspiration] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && project) {
      const fetchInspiration = async () => {
        setIsLoading(true);
        setError(null);
        setInspiration('');
        try {
          const response = await getProjectInspiration(project.title, project.description);
          setInspiration(response);
        } catch (err) {
          setError('Failed to fetch project inspiration. Please try again.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchInspiration();
    }
  }, [isOpen, project]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <SparklesIcon className="w-6 h-6 text-sky-400" />
            <h2 className="text-xl font-bold text-white">{project?.title} - AI Ideas</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto">
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-slate-300 h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400"></div>
                <p className="font-semibold">Generating fresh ideas...</p>
                <p className="text-sm text-slate-400">Gemini is thinking. This might take a moment.</p>
            </div>
          )}
          {error && (
            <div className="text-center p-4 bg-red-900/50 text-red-300 rounded-lg">
              <p className="font-semibold">Oops! Something went wrong.</p>
              <p>{error}</p>
            </div>
          )}
          {inspiration && (
            <div className="prose prose-invert prose-sm md:prose-base prose-p:text-slate-300 prose-h3:text-sky-400 prose-strong:text-white prose-li:text-slate-300 whitespace-pre-wrap font-sans">
              {inspiration}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProjectModal;
