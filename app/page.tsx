import AboutSection from "@/components/sections/AboutSection";
import AdditionalInfo from "@/components/sections/AdditionalInfo";
import CitiesSection from "@/components/sections/CitiesSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <CitiesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <AdditionalInfo />
    </main>
  );
}
