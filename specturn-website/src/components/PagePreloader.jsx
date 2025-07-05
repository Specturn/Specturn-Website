import { useEffect } from 'react';

export default function PagePreloader() {
  useEffect(() => {
    // Preload critical pages
    const preloadPage = (path) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = path;
      document.head.appendChild(link);
    };

    // Preload the most commonly visited pages
    preloadPage('/about');
    preloadPage('/services');
    preloadPage('/contact');
    preloadPage('/journey');

    return () => {
      // Cleanup preload links
      const preloadLinks = document.querySelectorAll('link[rel="prefetch"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, []);

  return null; // This component doesn't render anything
} 