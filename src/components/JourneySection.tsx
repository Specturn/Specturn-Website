import React, { useState, useEffect } from 'react';
import logo1 from '../assets/logo.png';

const JourneySection: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
      };
      
      // Initial check
      checkMobile();
      
      // Add resize listener
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  useEffect(() => {
    // Only add mouse move listener if not on mobile
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const logo = document.getElementById('journey-logo');
      if (!logo) return;

      const rect = logo.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle between mouse and logo center, reduced by 75.5% (50% + 30% + 30%) and inverted
      let angleX = -Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI) * 0.245;
      let angleY = -Math.atan2(e.clientX - centerX, e.clientY - centerY) * (180 / Math.PI) * 0.245;

      // Restrict angles to prevent flipping
      angleX = Math.max(Math.min(angleX, 30), -30);
      angleY = Math.max(Math.min(angleY, 30), -30);

      setRotation({ x: angleY, y: angleX });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-[80px] leading-none font-clash text-black text-center mb-10 lg:mb-20">
          Our Creative Journey
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Logo Column */}
          <div className="flex justify-center">
            <img 
              id="journey-logo"
              src={logo1} 
              alt="Specturn Logo" 
              className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] transition-transform duration-200"
              style={{
                transform: isMobile ? 'none' : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            />
          </div>
          
          {/* Text Column */}
          <div className="max-w-xl lg:ml-auto">
            <p className="text-xl font-medium text-black mb-5 text-center lg:text-right">
              Specturn started with a simple idea
            </p>
            <p className="text-base leading-relaxed text-black/80 text-center lg:text-right">
              We create visually stunning and highly functional websites that seamlessly blend creativity with usability. Our focus is on designing clean, engaging, and user-friendly websites that enhance the online experience. Every project is an opportunity to innovate, explore new ideas, and craft digital solutions tailored to its purpose. Whether for businesses, freelancers, or entrepreneurs, we ensure each website is optimized for performance, accessibility, and SEO. Driven by curiosity and a passion for simplicity, we transform ideas into dynamic, responsive, and conversion-focused web designs that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection; 