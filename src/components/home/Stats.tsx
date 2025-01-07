import { useTranslation } from 'react-i18next';
import { Trophy, Users, Coffee, Heart } from 'lucide-react';

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    { 
      icon: Trophy, 
      value: '203+', 
      label: t('stats.projectsCompleted') 
    },
    { 
      icon: Users, 
      value: '112+', 
      label: t('stats.happyClients') 
    },
    { 
      icon: Coffee, 
      value: '732', 
      label: t('stats.cupsOfCoffee') 
    },
    { 
      icon: Heart, 
      value: '327+', 
      label: t('stats.recommendations') 
    }
  ];

  return (
    <section className="py-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 text-[var(--accent)] mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}