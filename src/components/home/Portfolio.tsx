import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import { projects as portfolioProjects } from '../../data/portfolioData'; 
import { ProjectType } from '../../types/portfolio'; 

const projects = portfolioProjects.slice(-3);

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('portfolio.latestWork')}
          subtitle={t('portfolio.latestWorkSubtitle')}
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: ProjectType, index: number) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={project.image}
                alt={t(`portfolio.${project.translationKey}.title`)}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[var(--accent)] text-sm">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2">{t(`portfolio.${project.translationKey}.title`)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
