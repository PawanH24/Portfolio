import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { FooterSection } from "../components/FooterSection";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* THeme (at the end)*/}
      <ThemeToggle />
      {/*background effect*/}
      <StarBackground />
      {/*navbar*/}
      <Navbar />
      {/*Main content*/}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      {/*footer*/}
      <FooterSection />
    </div>
  );
};
