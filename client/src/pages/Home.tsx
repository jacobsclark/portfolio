import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50">
              <img src="/photo.png" alt="Jacob Scott Clark" className="w-full h-full object-cover grayscale" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight hidden sm:inline">Jacob Clark</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, "home")}
              className={cn("hover:text-primary transition-colors", activeSection === "home" && "text-primary")}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, "about")}
              className={cn("hover:text-primary transition-colors", activeSection === "about" && "text-primary")}
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, "experience")}
              className={cn("hover:text-primary transition-colors", activeSection === "experience" && "text-primary")}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, "skills")}
              className={cn("hover:text-primary transition-colors", activeSection === "skills" && "text-primary")}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, "contact")}
              className={cn("hover:text-primary transition-colors", activeSection === "contact" && "text-primary")}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
