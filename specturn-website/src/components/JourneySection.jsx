import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

export default function JourneySection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x: x * 0.1, y: y * 0.1 });
    };

    const section = document.getElementById('journey-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

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

          {/* 3D Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img
                src="/src/assets/black.jpeg"
                alt="Specturn 3D Logo"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 logo-3d animate-float"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

