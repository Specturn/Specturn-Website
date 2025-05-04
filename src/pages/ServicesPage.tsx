import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../components/Button';
import { services, Service } from '../data/services';
import { LucideIcon } from '../utils/icons';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState<string | null>(null);
  
  useEffect(() => {
    document.title = 'Services - Specturn';
    
    const hash = location.hash.substring(1);
    if (hash && services.some(service => service.id === hash)) {
      setActiveService(hash);
      
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive web solutions to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center">
            {services.map(service => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`py-4 px-6 font-medium text-center transition-colors ${
                  activeService === service.id 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveService(service.id);
                  const element = document.getElementById(service.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      {services.map(service => (
        <ServiceSection 
          key={service.id} 
          service={service} 
          isActive={activeService === service.id} 
        />
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of complementary services to support your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Website Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Regular updates, security patches, and content management to keep your website running smoothly.
              </p>
              <Link to="/contact" className="text-black font-medium hover:text-gray-700 transition-colors inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Content Creation</h3>
              <p className="text-gray-600 mb-4">
                Compelling copywriting and visual content that engages your audience and supports your marketing goals.
              </p>
              <Link to="/contact" className="text-black font-medium hover:text-gray-700 transition-colors inline-flex items-center">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Bring Your Vision to Life</h2>
            <p className="text-xl mb-8">
              Ready to start your project? Contact us today for a free consultation.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ServiceSectionProps {
  service: Service;
  isActive: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, isActive }) => {
  const Icon = LucideIcon(service.icon);
  
  return (
    <section 
      id={service.id} 
      className={`py-20 ${service.id === 'development' ? 'bg-gray-50' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:${service.id === 'development' ? 'order-1' : 'order-2'}`}>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Icon className="text-black" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {service.longDescription}
            </p>
            
            <h3 className="text-xl font-bold mb-4">What We Offer:</h3>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-black mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="primary">
              <Link to="/contact" className="flex items-center">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className={`order-1 lg:${service.id === 'development' ? 'order-2' : 'order-1'}`}>
            <img 
              src={getServiceImage(service.id)} 
              alt={service.title} 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get service images
const getServiceImage = (serviceId: string): string => {
  const images: Record<string, string> = {
    'web-design': 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'development': 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'seo': 'https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  };
  
  return images[serviceId] || '';
};

export default ServicesPage;