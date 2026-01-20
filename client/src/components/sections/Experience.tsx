import { motion } from "framer-motion";

const experienceData = [
  {
    company: "GRUPO LEO S.A.",
    location: "Panama, Panama",
    role: "Senior AI Full Stack Engineer",
    period: "Oct 2022 - Present",
    site: "https://leo.com.pa",
    highlights: [
      "Designed relational and document schemas (PostgreSQL/MySQL, MongoDB); wrote migration plans and query optimizations to keep p95 latencies low.",
      "Developed AI-powered applications with Node.js, NestJS, React, TypeScript, PostgreSQL, MongoDB and LangChain, using Kafka for event streaming and improving data validation processing speed by 30%.",
      "Implemented REST services (Flask) for authentication, billing hooks, and streaming endpoints; added pagination, caching (Redis), and request throttling for scale.",
      "Productized LLM and CV workloads, fine-tuning for tool use, prompt/rubric design, safe-guardrails, packaged models for real-time inference.",
      "Forged an automated provisioning solution via Terraform, Docker, and GitOps, streamlining CI/CD pipelines and shrinking deployment times by 40%."
    ]
  },
  {
    company: "Evoload",
    location: "Bucharest, Romania",
    role: "Senior Full Stack Engineer",
    period: "Apr 2021 - Oct 2022",
    site: "https://evoload.co",
    highlights: [
      "Prepared secure web apps and admin consoles using React, TypeScript, and TailwindCSS with enhanced UI/UX for real-time AI controls, analytics and role-based access, showcasing front-end development skills.",
      "Orchestrated the launch and monitoring of machine learning models using Python, TensorFlow, and PyTorch, elevating model performance accuracy by 25% in production environments.",
      "Engineered scalable microservices using NestJS, React, and MongoDB on AWS, processing 20K+ REST APIs requests monthly and improving system reliability.",
      "Streamlined CI/CD pipelines with Terraform and GitHub Actions, cutting deployment time by 30%.",
      "Combined Elasticsearch for enhanced search capabilities, improving search query response time by 75%.",
      "Produced efficient SQL and NoSQL schemas for microservices, increasing data modeling and retrieval speed by 80%.",
      "Upgraded real-time communication features using WebSockets, reducing latency by 65% and improving user experience."
    ]
  },
  {
    company: "Computer Audio Inc",
    location: "NC, United States",
    role: "Full Stack Engineer",
    period: "Jan 2014 - Apr 2021",
    highlights: [
      "Launched full-stack web applications using React and Django REST Framework, improving scalability and response time by 35%.",
      "Constructed REST and GraphQL APIs with MongoDB and Redis for background jobs, reducing latency by 30% and improving caching strategies.",
      "Administered Kubernetes clusters through Rancher, maintaining 95% uptime across all environments, including Linux System Administration and Networking.",
      "Designed CI/CD pipelines with GitHub Actions and Docker, accelerating releases by 45%, leveraging GitHub for version control and collaboration, and utilizing Webpack for bundling.",
      "Improved UI/UX design of web applications, resulting in 80% higher user satisfaction and engagement."
    ]
  },
  {
    company: "Dowd Technology Group",
    location: "NC, United States",
    role: "Software Engineer",
    period: "Apr 2012 - Jan 2014",
    highlights: [
      "Deployed and optimized React-based frontend integrated with REST APIs, enhancing API performance and achieving 21% higher engagement.",
      "Developed and maintained a customer database using Microsoft SQL Server and PostgreSQL, improving data accessibility for sales teams by 75%.",
      "Improved API latency by 25% through caching, Redis optimization, and performance tuning.",
      "Architected and built multi-tenant distributed systems with strict data isolation, ensuring compliance with data privacy regulations, following Architectural principles.",
      "Standardized UI components with React libraries, implementing robust testing practices and reducing frontend development time by 20%.",
      "Collaborated cross-functionally to integrate and optimize APIs and SDKs, including Salesforce APIs and Nest.js microservices, boosting delivery speed by 30%."
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
