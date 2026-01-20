import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <img 
          src="/abstract_dark_technology_background_with_grid_and_nodes.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-20" />
      </div>

      <div className="container relative z-30 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-mono tracking-wider">
              AVAILABLE FOR HIRE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Jacob Scott Clark
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono">
              Senior Software Engineer
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Specializing in high-performance full-stack development. 
            Migrating legacy systems to modern architectures. 
            10+ years of delivering scalable enterprise solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="/Jacob_Scott_Clark-Senior_Software_Engineer.pdf" download="Jacob_Scott_Clark_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12 flex justify-center gap-6 text-muted-foreground"
          >
            <a href="https://linkedin.com/in/jacob-clark-294a37272" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/jacobsclark" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <div className="h-6 w-px bg-border" />
            <span className="font-mono text-sm flex items-center">
              Wilmington, NC, United States
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
