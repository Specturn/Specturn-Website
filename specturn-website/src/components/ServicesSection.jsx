import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Palette, Code, Search } from 'lucide-react';
import '../App.css';

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Design",
      subtitle: "Be Creative They Said",
      description: "We specialize in professional design solutions, from logo creation to full-scale website development. Our team blends creativity with precision to craft visually compelling and user-friendly designs that enhance brand identity. Whether you're a business, freelancer, or entrepreneur, we create digital experiences that stand out and drive engagement in today's competitive online landscape."
    },
    {
      icon: Code,
      title: "Development",
      subtitle: "Be Special They Said",
      description: "Our web development solutions focus on speed, responsiveness, and seamless navigation to ensure a smooth user experience. We build high-performance websites optimized for mobile and desktop, enhancing engagement and boosting search engine rankings. Whether you need a business website, e-commerce platform, or portfolio, we create scalable and secure solutions tailored to your goals."
    },
    {
      icon: Search,
      title: "SEO",
      subtitle: "Stand-Out They Said",
      description: "Maximize your online visibility with our expert SEO strategies. We implement proven best practices to boost your website's search engine rankings, drive organic traffic, and enhance overall site performance. From keyword optimization to technical SEO, we ensure your site is fully optimized for long-term digital success."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Particle Background */}
      <div className="particles"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-clash font-bold mb-6">
            Services
          </h2>
          <p className="text-lg font-matter text-muted-foreground max-w-3xl mx-auto">
            We design custom websites for businesses, freelancers, and entrepreneurs, focusing on user-friendly, visually appealing, and SEO-optimized solutions. Our goal is to enhance your online presence, improve engagement, and help you stand out in the competitive digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full glass hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-clash">{service.title}</CardTitle>
                  <CardDescription className="font-matter italic">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-matter text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

