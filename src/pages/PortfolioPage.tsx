import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { categories, projects } from '../data/portfolioData';
import ProjectCard from '../components/portfolio/ProjectCard';
import PortfolioLightbox from '../components/portfolio/PortfolioLightbox';
import type { ProjectType, CategoryType } from '../types/portfolio';
import Header from '../components/layout/Header';

export default function PortfolioPage() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: ProjectType) => {
    const categoryProjects = projects.filter(p => p.category === project.category);
    const index = categoryProjects.findIndex(p => p.id === project.id);
    setCurrentIndex(index);
    setSelectedProject(project);
  };

  const handlePrevious = useCallback(() => {
    if (!selectedProject) return;

    const categoryProjects = projects.filter(p => p.category === selectedProject.category);
    const newIndex = (currentIndex - 1 + categoryProjects.length) % categoryProjects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(categoryProjects[newIndex]);
  }, [selectedProject, currentIndex]);

  const handleNext = useCallback(() => {
    if (!selectedProject) return;

    const categoryProjects = projects.filter(p => p.category === selectedProject.category);
    const newIndex = (currentIndex + 1) % categoryProjects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(categoryProjects[newIndex]);
  }, [selectedProject, currentIndex]);

  return (
    <div className="pt-20">
      <Header
        bgImg="public\\images\\bannerPortfolio.webp"
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category: CategoryType) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 border ${
                activeCategory === category.id
                  ? 'border-[var(--accent)] text-[var(--accent)]'
                  : 'border-gray-700 text-gray-400 hover:border-[var(--accent)] hover:text-[var(--accent)]'
              } transition-colors rounded-full`}
            >
              {t(category.label)} 
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <PortfolioLightbox
          project={selectedProject}
          category={selectedProject.category}
          projects={projects}
          onClose={() => setSelectedProject(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
}
