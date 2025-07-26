import ThemeToogle from "~/Components/ThemeToggle";
import type { Route } from "./+types/home";
import StarBackground from "~/Components/StarBackground";
import Navbar from "~/Components/Navbar";
import HeroSection from "~/Components/HeroSection";
import AboutSection from "~/Components/AboutSection";
import SkillsSection from "~/Components/SkillsSection";
import ProjectSection from "~/Components/ProjectSection";
import ContactSection from "~/Components/ContactSection";
import Footer from "~/Components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome | Portofolio" },
    { name: "description", content: "Portofolio Vasilis Kalemtzis" },
  ];
}

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle (dark/light) */}
      <ThemeToogle />
      
      {/* Background Effects */}
      <StarBackground />
      
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;
