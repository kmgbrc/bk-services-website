interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="service-card p-6 rounded-lg group"
            >
              <summary className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-[var(--accent)] transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}