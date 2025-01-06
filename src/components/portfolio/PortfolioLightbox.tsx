import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectType } from '../../types/portfolio';

interface PortfolioLightboxProps {
  project: ProjectType;
  category: string;
  projects: ProjectType[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
}

export default function PortfolioLightbox({
  project,
  category,
  projects,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
}: PortfolioLightboxProps) {
  const { t } = useTranslation();

  const filteredProjects = projects.filter(p => p.category === category);
  const totalInCategory = filteredProjects.length;

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrevious();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-90"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl px-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white hover:text-[var(--accent)]"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative aspect-video">
          <img
            src={project.image}
            alt={t(`portfolio.${project.translationKey}.title`)}
            className="w-full h-full object-contain"
          />
          
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[var(--accent)]"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-[var(--accent)]"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="mt-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{t(`portfolio.${project.translationKey}.title`)}</h3>
          <p className="text-gray-400 mb-4">{t(`portfolio.${project.translationKey}.description`)}</p>
          <span className="text-sm">
            {currentIndex + 1} / {totalInCategory}
          </span>
        </div>
      </div>
    </div>
  );
}