import HeroSection from '@/components/sections/hero-section';
import AboutIntro from '@/components/sections/about-intro';
import CaseStudiesSection from '@/components/sections/case-studies';
import BlogSection from '@/components/sections/blog-section';
import TechStack from '@/components/sections/tech-stack';
import TeamSection from '@/components/sections/team-section';
import AwardsSection from '@/components/sections/awards-section';
import ContactCta from '@/components/sections/contact-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[--color-gradient-start] to-background">
      <HeroSection />  
      
      <AboutIntro />
            
      <CaseStudiesSection />
      
      <BlogSection />
      
      <TechStack />
      
      <TeamSection />
      
      <AwardsSection />
      
      <ContactCta />
      
      <Footer />
    </main>
  );
}