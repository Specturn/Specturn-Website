import React from 'react';
import { motion } from 'framer-motion';

const AsteroidParticles: React.FC = () => {
  // Create an array of 30 asteroid particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // Random size between 2-6px
    duration: Math.random() * 0.8 + 0.4, // Slightly longer duration for full page travel
    delay: Math.random() * 0.5, // Random delay between 0-0.5s
    x: Math.random() * 100, // Random starting x position
    y: Math.random() * 100, // Random starting y position
    trailLength: Math.random() * 20 + 10, // Random trail length between 10-30px
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        >
          {/* Main particle */}
          <motion.div
            className="absolute bg-white rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: ['-100vw', '200vw'],
              y: ['-100vh', '200vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
          {/* Particle trail */}
          <motion.div
            className="absolute bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            style={{
              width: particle.trailLength,
              height: particle.size / 2,
              transform: 'rotate(45deg)',
              transformOrigin: 'left center',
            }}
            animate={{
              x: ['-100vw', '200vw'],
              y: ['-100vh', '200vh'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AsteroidParticles; 