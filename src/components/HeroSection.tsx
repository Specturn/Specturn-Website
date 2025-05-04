import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/videos/custom-websites.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl lg:text-[96px] font-clash tracking-wide text-white mb-8 leading-none font-medium" style={{ fontWeight: 550 }}>
          Designed to Stand Out
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-matter">
          Creative, clean, and captivating websites built with purpose.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 