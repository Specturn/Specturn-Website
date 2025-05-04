export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    shortDescription: 'Creative and user-friendly interfaces that represent your brand.',
    longDescription: 'Our web design services focus on creating visually stunning, user-friendly websites that perfectly represent your brand. We combine aesthetics with functionality to deliver engaging digital experiences that convert visitors into customers.',
    features: [
      'Custom website design',
      'User experience (UX) optimization',
      'Mobile-responsive layouts',
      'Brand identity integration',
      'Wireframing and prototyping'
    ],
    icon: 'palette'
  },
  {
    id: 'development',
    title: 'Development',
    shortDescription: 'Robust and scalable solutions tailored to your specific needs.',
    longDescription: 'Our development team builds robust, scalable websites and applications using the latest technologies. Whether you need a simple informational site or a complex web application, we deliver clean, efficient code that performs flawlessly.',
    features: [
      'Front-end development',
      'Back-end programming',
      'E-commerce solutions',
      'CMS implementation',
      'API integration'
    ],
    icon: 'code'
  },
  {
    id: 'seo',
    title: 'SEO',
    shortDescription: 'Strategies to improve your visibility and drive organic traffic.',
    longDescription: 'Our comprehensive SEO services help your business gain visibility in search engines and drive organic traffic to your website. We implement proven strategies to improve your rankings and connect you with your target audience.',
    features: [
      'Keyword research and analysis',
      'On-page optimization',
      'Content strategy',
      'Technical SEO audits',
      'Local SEO'
    ],
    icon: 'search'
  }
];