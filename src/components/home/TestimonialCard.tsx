import { TestimonialType } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[var(--background)] p-8 rounded-lg h-full flex flex-col">
      <p className="text-gray-400 mb-8 flex-grow">{testimonial.content}</p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[var(--accent)]">{testimonial.author}</h4>
          <p className="text-sm text-gray-400">{testimonial.service}</p>
        </div>
      </div>
    </div>
  );
}