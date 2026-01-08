import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    company: "Nicely Done Enterprises, LLC",
    location: "FL, United States",
    role: "Senior Software Engineer",
    period: "Oct 2022 - Present",
    highlights: [
      "Architected a high-concurrency enterprise platform using Laravel 10 and React, driving a 30% increase in team productivity.",
      "Raised average code coverage from 65% to 90% and decreased production bugs by 35% through rigorous code reviews.",
      "Implemented Laravel Horizon with Redis for background job management, improving job processing times by 30%.",
      "Led design of a reusable React component library, reducing frontend development time by 30%.",
      "Optimized database queries achieving a 40% reduction in response times for large-scale datasets."
    ]
  },
  {
    company: "Amazon",
    location: "NC, United States",
    role: "Senior Software Engineer",
    period: "Apr 2022 - Oct 2022",
    highlights: [
      "Guarded globally accessible consumer domains by maintaining mission-critical backend services with zero downtime.",
      "Developed critical components for a high-throughput distributed system using Java and AWS.",
      "Improved system uptime to 99.99% supporting millions of concurrent requests.",
      "Enhanced monitoring/alerting ensuring reliable service delivery for global consumer domains."
    ]
  },
  {
    company: "Computer Audio Inc",
    location: "NC, United States",
    role: "Full Stack Engineer",
    period: "Jan 2014 - Mar 2022",
    highlights: [
      "Spearheaded development of real-time audio processing pipelines using Python, optimizing API response times by 60%.",
      "Owned end-to-end feature development from requirements to production support.",
      "Mentored 8+ developers on TDD, clean architecture, and performance optimization.",
      "Instituted documentation/code review policies resulting in a 15% bug reduction."
    ]
  },
  {
    company: "Dowd Technology Group",
    location: "Wilmington, NC",
    role: "Software Engineer",
    period: "Apr 2012 - Dec 2013",
    highlights: [
      "Delivered custom enterprise software solutions across healthcare and logistics sectors.",
      "Reduced application latency by 25% and improved code test coverage to 85%.",
      "Managed full SDLC for 10+ major projects including client support.",
      "Decreased production support tickets by 25% by identifying root causes of crashes."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="experience">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">02.</span>
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-12 relative border-l-2 border-primary/10 ml-4 md:ml-6 pl-8 md:pl-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[59px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-foreground">{job.company}</h3>
                <span className="font-mono text-sm text-primary/80 bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {job.period}
                </span>
              </div>
              
              <div className="text-lg text-muted-foreground mb-4 font-medium flex items-center gap-2">
                {job.role}
                <span className="text-sm font-normal text-muted-foreground/60">• {job.location}</span>
              </div>

              <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
                <ul className="space-y-3">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="mr-3 text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
