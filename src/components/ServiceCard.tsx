import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../data/services';
import { LucideIcon } from '../utils/icons';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = LucideIcon(service.icon);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="p-6">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="text-blue-600" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <Link 
          to={`/services#${service.id}`} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;