import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import { categories, projects } from '../../data/portfolioData';

export default function PortfolioGrid() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 border ${
              activeCategory === category.id
                ? 'border-[var(--accent)] text-[var(--accent)]'
                : 'border-gray-700 text-gray-400 hover:border-[var(--accent)] hover:text-[var(--accent)]'
            } transition-colors rounded-full`}
          >
            {t(`portfolio.categories.${category.label}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => {/* Gérer le clic */}}
          />
        ))}
      </div>
    </div>
  );
}