import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-card/30 relative" id="about">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10">
                  <img 
                    src="/myphoto.png" 
                    alt="Jacob Scott Clark" 
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono">
                <span className="text-primary mr-2">01.</span>
                About Me
              </h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Senior Software Engineer with over 10 years of experience in the U.S. tech market, 
                specializing in high-performance full-stack development. My passion lies in building scalable, 
                distributed systems and migrating legacy architectures to modern stacks.
              </p>
              <p>
                Throughout my career, I've managed the full software development lifecycle (SDLC) for 
                numerous major implementations, consistently delivering solutions that improve productivity 
                and system reliability. I thrive in challenging environments where I can leverage my 
                expertise in Laravel, React, and Cloud Infrastructure to solve complex engineering problems.
              </p>
              <p>
                Beyond coding, I am a mentor who believes in elevating team standards through rigorous code 
                reviews, TDD, and architectural best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors">
              <Server className="h-10 w-10 text-primary" />
              <span className="font-mono font-bold">Backend Architecture</span>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors">
              <Code className="h-10 w-10 text-primary" />
              <span className="font-mono font-bold">Full Stack Dev</span>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors">
              <Database className="h-10 w-10 text-primary" />
              <span className="font-mono font-bold">Database Optimization</span>
            </div>
            <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors">
              <Globe className="h-10 w-10 text-primary" />
              <span className="font-mono font-bold">Distributed Systems</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
