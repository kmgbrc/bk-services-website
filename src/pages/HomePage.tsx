import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedServices from '../components/home/FeaturedServices';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedServices />
      <Portfolio />
      <Testimonials />
      <Stats />
    </div>
  );
}