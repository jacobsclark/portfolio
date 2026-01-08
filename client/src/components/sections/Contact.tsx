import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowRight, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-24 bg-background relative" id="contact">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently available for new opportunities. Whether you have a question about my experience
            or want to discuss architecture for your next big project, my inbox is open.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:jacobtech88@gmail.com" className="block">
              <div className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group h-full">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">jacobtech88@gmail.com</p>
              </div>
            </a>
            
            <a href="https://wa.me/17627024600" className="block" target="_blank" rel="noopener noreferrer">
              <div className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group h-full">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">+1 (762) 702-4600</p>
              </div>
            </a>

            <a href="https://github.com/jacobsclark" className="block" target="_blank" rel="noopener noreferrer">
              <div className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group h-full">
                <Github className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">GitHub</h3>
                <p className="text-muted-foreground">github.com/jacobsclark</p>
              </div>
            </a>
          </div>

          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-6 text-lg" asChild>
            <a href="https://wa.me/17627024600?text=Hello" target="_blank" rel="noopener noreferrer">
              Say Hello <ArrowRight className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>

      <footer className="mt-24 py-8 border-t border-white/5 text-center text-muted-foreground text-sm font-mono">
        <p>© {new Date().getFullYear()} Jacob Scott Clark.</p>
      </footer>
    </section>
  );
}
