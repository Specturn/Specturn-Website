import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DustParticles from './DustParticles';

interface Service {
  title: string;
  subtitle: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Design',
    subtitle: 'Be Creative They Said',
    description: 'We specialize in professional design solutions, from logo creation to full-scale website development. Our team blends creativity with precision to craft visually compelling and user-friendly designs that enhance brand identity. Whether you\'re a business, freelancer, or entrepreneur, we create digital experiences that stand out and drive engagement in today\'s competitive online landscape.',
  },
  {
    title: 'Development',
    subtitle: 'Be Special They Said',
    description: 'Our web development solutions focus on speed, responsiveness, and seamless navigation to ensure a smooth user experience. We build high-performance websites optimized for mobile and desktop, enhancing engagement and boosting search engine rankings. Whether you need a business website, e-commerce platform, or portfolio, we create scalable and secure solutions tailored to your goals.',
  },
  {
    title: 'SEO',
    subtitle: 'Stand-Out They Said',
    description: 'Maximize your online visibility with our expert SEO strategies. We implement proven best practices to boost your website\'s search engine rankings, drive organic traffic, and enhance overall site performance. From keyword optimization to technical SEO, we ensure your site is fully optimized for long-term digital success.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-pattern min-h-screen py-32 relative overflow-hidden">
      <DustParticles />
      <div className="container mx-auto px-4">
        {/* Main Title and Description */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[120px] leading-none font-clash text-white/100 mb-8"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/100 text-xl leading-relaxed font-matter"
          >
            We design custom websites for businesses, freelancers, and entrepreneurs, focusing on user-friendly, visually appealing, and SEO-optimized solutions. Our goal is to enhance your online presence, improve engagement, and help you stand out in the competitive digital landscape.
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-white/20 p-12 backdrop-blur-sm hover:border-white/40 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * -5}s` }}
            >
              <h3 className="text-[40px] font-clash text-white text-center mb-4">{service.title}</h3>
              <h4 className="text-xl font-matter text-white/80 text-center mb-6">{service.subtitle}</h4>
              <p className="text-white/70 text-center leading-relaxed font-matter">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 