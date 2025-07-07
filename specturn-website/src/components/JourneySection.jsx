import { motion } from 'framer-motion';
import '../App.css';
// Try alternative image import
import blackLogo from '../assets/black.jpeg';

export default function JourneySection() {
  console.log('JourneySection component is rendering'); // Debug log

  return (
    <section id="journey-section" className="py-20 bg-muted/30 relative overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '72px' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeIn text-left flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-4">
              Our Creative Journey
            </h2>
            <h3 className="text-xl md:text-2xl font-matter text-muted-foreground mb-6">
              Specturn started with a simple idea
            </h3>
            <p className="text-lg font-matter text-muted-foreground leading-relaxed">
              We create visually stunning and highly functional websites that seamlessly blend creativity with usability. Our focus is on designing clean, engaging, and user-friendly websites that enhance the online experience. Every project is an opportunity to innovate, explore new ideas, and craft digital solutions tailored to its purpose. Whether for businesses, freelancers, or entrepreneurs, we ensure each website is optimized for performance, accessibility, and SEO. Driven by curiosity and a passion for simplicity, we transform ideas into dynamic, responsive, and conversion-focused web designs that leave a lasting impact.
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center h-full animate-fadeIn">
            <div className="relative flex items-center justify-center">
              <img
                src={blackLogo}
                alt="Specturn Logo"
                style={{ width: '360px', height: '360px', borderRadius: '50%', objectFit: 'cover' }}
              />
              {/* Simple Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

