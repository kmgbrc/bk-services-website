import { useTranslation } from 'react-i18next';

interface Step {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: Step[];
}
export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8 service-card p-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}