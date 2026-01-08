import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "High-Concurrency Enterprise Platform",
    description: "Architected a scalable enterprise platform driving a 30% increase in productivity. Implemented Laravel Horizon with Redis for efficient background job management and optimized database queries for large-scale datasets.",
    tech: ["Laravel 10", "React", "Redis", "MySQL", "Docker"],
    icon: <FolderGit2 className="h-10 w-10 text-primary mb-4" />
  },
  {
    title: "Distributed Backend System",
    description: "Developed mission-critical components for a high-throughput distributed system at Amazon. Ensured 99.99% system uptime while supporting millions of concurrent requests through rigorous optimization.",
    tech: ["Java", "AWS", "Distributed Systems", "Microservices"],
    icon: <FolderGit2 className="h-10 w-10 text-primary mb-4" />
  },
  {
    title: "Real-time Audio Processing Pipeline",
    description: "Spearheaded the development of real-time audio processing pipelines, optimizing API response times by 60%. Managed end-to-end feature development from architecture to production support.",
    tech: ["Python", "API Design", "Real-time Processing", "TDD"],
    icon: <FolderGit2 className="h-10 w-10 text-primary mb-4" />
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-background relative" id="projects">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                {project.icon}
                <div className="flex gap-2">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
