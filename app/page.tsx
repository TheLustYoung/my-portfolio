// app/page.tsx
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsPreviewSection } from "@/components/home/ProjectsPreviewSection";
import { FAQSection } from "@/components/home/FAQSection";
// ServicesSection убираем

export default function HomePage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <h1 className="text-lg md:text-xl font-semibold">Главная</h1>
      </div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsPreviewSection />
      {/* <ServicesSection />  // удалено */}
      <FAQSection />
    </>
  );
}
