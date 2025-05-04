import React, { useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import HeroSection from '../components/HeroSection';
import JourneySection from '../components/JourneySection';
import ServicesSection from '../components/ServicesSection';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Specturn - Web Design, Development & SEO Services';
  }, []);

  return (
    <div className="w-full">
      <HeroSection />
      <JourneySection />
      <ServicesSection />
    </div>
  );
};

// Dynamic import for the icon component
const LucideIcon = ({ iconName, size, className }: { iconName: string; size: number; className: string }) => {
  const Icon = React.lazy(() => import('../utils/icons').then(module => ({ 
    default: module.LucideIcon(iconName) 
  })));
  
  return (
    <React.Suspense fallback={<div className={`w-${size} h-${size}`}></div>}>
      <Icon size={size} className={className} />
    </React.Suspense>
  );
};

export default HomePage;