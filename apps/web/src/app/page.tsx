import { HeroSection } from '@/components/home/hero';
import { PropertyCategories } from '@/components/home/categories';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { SearchSection } from '@/components/home/search';
import { TestimonialSection } from '@/components/home/testimonials';
import { CTASection } from '@/components/home/cta';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchSection />
      <PropertyCategories />
      <FeaturedProperties />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
