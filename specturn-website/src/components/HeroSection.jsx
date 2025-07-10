import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SimpleBackground from './SimpleBackground';
import '../App.css';
import blackImg from '../assets/black.jpeg';
import whiteImg from '../assets/white.jpeg';

export default function HeroSection() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      key={isDark ? 'dark' : 'light'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Simple Background */}
        <SimpleBackground />
        
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-background to-gray-200/80"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold mb-6 text-black dark:text-white transition-all duration-300"
          >
            Designed to Stand Out
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-matter mb-8 text-black/90 dark:text-white/90 max-w-2xl mx-auto transition-all duration-300"
          >
            Creative, clean, and captivating websites built with purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-300"
          >
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-6 bg-black text-white border-white border transition-all duration-300
                hover:bg-white/80 hover:text-black hover:border-black
                dark:bg-white dark:text-black dark:border-black
                dark:hover:bg-black/20 dark:hover:text-white dark:hover:border-white"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/about')}
              className="text-lg px-8 py-6 bg-black text-white border-white border transition-all duration-300
                hover:bg-white/80 hover:text-black hover:border-black
                dark:bg-white dark:text-black dark:border-black
                dark:hover:bg-black/20 dark:hover:text-white dark:hover:border-white"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

