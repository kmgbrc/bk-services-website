import { useTranslation } from 'react-i18next';
import { ProjectType } from '../../types/portfolio';

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer service-card"
    >
      <img
        src={project.image}
        alt={t(`portfolio.${project.translationKey}.title`)}
        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-[var(--accent)] text-sm uppercase">
            {t(`portfolio.categories.${project.category}`)}
          </span>
          <h3 className="text-white text-xl font-semibold mt-2">
            {t(`portfolio.${project.translationKey}.title`)}
          </h3>
          <p className="text-gray-400 mt-2">
            {t(`portfolio.${project.translationKey}.description`)}
          </p>
          <p className="text-gray-400 mt-2">{project.client}</p>
        </div>
      </div>
    </div>
  );
}