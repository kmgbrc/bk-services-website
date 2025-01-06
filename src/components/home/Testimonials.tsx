import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = Array.from({ length: 18 }, (_, i) => ({
    content: t(`testimonials.${i + 1}.content`),
    author: t(`testimonials.${i + 1}.author`),
    service: t(`testimonials.${i + 1}.service`),
    image: t(`testimonials.${i + 1}.image`)
  }));

  return (
    <section className="py-20 bg-[var(--bgColorBlack)] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">
            {t('testimonials.title')}
          </h2>
          <div className="flex gap-2">
            <button className="testimonial-nav-prev w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="testimonial-nav-next w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="testimonials-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.testimonial-nav-prev',
              nextEl: '.testimonial-nav-next',
            }}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}