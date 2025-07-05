import { motion } from 'framer-motion';
import '../App.css';

export default function JourneySectionFallback() {
  return (
    <section id="journey-section" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-4">
              Our Creative Journey
            </h2>
            <h3 className="text-xl md:text-2xl font-matter text-muted-foreground mb-6">
              Specturn started with a simple idea
            </h3>
            <p className="text-lg font-matter text-muted-foreground leading-relaxed">
              We create visually stunning and highly functional websites that seamlessly blend creativity with usability. Our focus is on designing clean, engaging, and user-friendly websites that enhance the online experience. Every project is an opportunity to innovate, explore new ideas, and craft digital solutions tailored to its purpose. Whether for businesses, freelancers, or entrepreneurs, we ensure each website is optimized for performance, accessibility, and SEO. Driven by curiosity and a passion for simplicity, we transform ideas into dynamic, responsive, and conversion-focused web designs that leave a lasting impact.
            </p>
          </motion.div>

          {/* Simple Logo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl font-clash font-bold text-primary">S</span>
              </div>
              
              {/* Simple Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 