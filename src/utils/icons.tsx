import React from 'react';
import { 
  Palette, Code, Search, 
  ExternalLink, Users, LineChart, 
  Laptop, Smartphone, Mail, 
  Lock, Award, Clock
} from 'lucide-react';

export const LucideIcon = (iconName: string): React.FC<{ size?: number; className?: string }> => {
  const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
    'palette': Palette,
    'code': Code,
    'search': Search,
    'external-link': ExternalLink,
    'users': Users,
    'line-chart': LineChart,
    'laptop': Laptop,
    'smartphone': Smartphone,
    'mail': Mail,
    'lock': Lock,
    'award': Award,
    'clock': Clock
  };

  return iconMap[iconName] || Palette; // Default to Palette if icon not found
};