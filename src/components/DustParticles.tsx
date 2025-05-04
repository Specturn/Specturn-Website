import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const DustParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      willReadFrequently: false
    });
    if (!ctx) return;

    // Create offscreen canvas for better performance
    const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
    const offscreenCtx = offscreen.getContext('2d', {
      alpha: true,
      willReadFrequently: false
    });
    if (!offscreenCtx) return;

    // Set canvas size with device pixel ratio
    const setCanvasSize = () => {
      const dpr = 1; // Force DPR to 1 for better performance
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Recreate particles when canvas is resized
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      particlesRef.current = Array.from({ length: 8 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 0.5 + 0.5, // Even smaller size range
        speedX: (Math.random() - 0.5) * 0.15, // Even slower speed
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.15 + 0.05 // Lower opacity
      }));
    };

    setCanvasSize();
    
    const debouncedResize = debounce(setCanvasSize, 500);
    window.addEventListener('resize', debouncedResize);

    let lastTime = 0;
    const fps = 20; // Further reduced FPS
    const frameInterval = 1000 / fps;

    // Pre-calculate values
    const twoPi = Math.PI * 2;

    // Optimized animation function
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime > frameInterval) {
        offscreenCtx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Batch draw particles
        offscreenCtx.beginPath();
        
        // Update and draw particles
        for (let i = 0; i < particlesRef.current.length; i++) {
          const particle = particlesRef.current[i];
          
          // Move particle
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Efficient boundary checking
          if (particle.x < 0) particle.x = canvas.width;
          else if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          else if (particle.y > canvas.height) particle.y = 0;

          // Draw particle
          offscreenCtx.moveTo(particle.x + particle.size, particle.y);
          offscreenCtx.arc(particle.x, particle.y, particle.size, 0, twoPi);
        }

        // Batch fill all particles
        offscreenCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        offscreenCtx.fill();

        // Copy offscreen canvas to main canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(offscreen, 0, 0);

        lastTime = currentTime - (deltaTime % frameInterval);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none blur-[1px]"
    />
  );
};

// Debounce helper function
function debounce(func: Function, wait: number) {
  let timeout: number;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default DustParticles; 