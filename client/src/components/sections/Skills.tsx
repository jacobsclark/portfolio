import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Languages": ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "SQL", "HTML5", "CSS3"],
  "Frontend": ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI"],
  "Backend": ["Laravel", "NestJS", "Node.js", "Django", "RESTful APIs", "Eloquent", "Horizon"],
  "DevOps": ["AWS (Lambda, S3, EC2, RDS)", "Docker", "Kubernetes", "CI/CD (GitHub Actions, Jenkins)"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  "Tools": ["Git", "Jira", "Jest", "Cypress", "Agile/Scrum"]
};

export default function Skills() {
  return (
    <section className="py-24 bg-card/30 relative" id="skills">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">03.</span>
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:bg-card/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary font-mono border-b border-primary/20 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors text-sm py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
