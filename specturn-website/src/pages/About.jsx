import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Target, Lightbulb, Users, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SimpleBackground from '../components/SimpleBackground';
import '../App.css';

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from design and development to client communication and support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and innovation, continuously exploring new technologies and approaches to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to understand their needs and deliver tailored solutions."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategy that aligns with your vision."
    },
    {
      number: "02",
      title: "Planning",
      description: "We create detailed wireframes and prototypes to visualize the project and refine the user experience before development."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Our designers and developers work collaboratively to bring the project to life with attention to detail and quality."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "We thoroughly test the website to ensure it works flawlessly across all devices before launching it to the world."
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your website continues to perform at its best."
    }
  ];

  const storyContent = [
    "Founded in 2020, Specturn was born from a passion for creating beautiful, functional websites that help businesses succeed online. What started as a small team of freelancers has grown into a full-service web design and development agency serving clients across various industries.",
    "Our journey has been defined by a commitment to excellence, innovation, and client satisfaction. We believe that great design is about more than aesthetics—it's about creating meaningful experiences that connect businesses with their audiences.",
    "Today, we continue to push the boundaries of web design and development, staying at the forefront of industry trends and technologies to deliver cutting-edge solutions for our clients."
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <SimpleBackground />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mb-6"
            >
              About Specturn
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-matter text-muted-foreground max-w-3xl mx-auto"
            >
              We're a team of passionate designers and developers creating exceptional digital experiences.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-clash font-bold mb-8">Our Story</h2>
                <div className="space-y-6">
                  {storyContent.map((paragraph, index) => (
                    <p key={index} className="text-lg font-matter text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="glass p-8">
                  <CardContent className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-clash font-bold">5+ Years</h3>
                    <p className="text-lg font-matter text-muted-foreground">
                      Creating digital experiences that inspire
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">Our Mission & Values</h2>
              <p className="text-lg font-matter text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define who we are.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full glass text-center">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="font-clash">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-matter text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">Our Process</h2>
              <p className="text-lg font-matter text-muted-foreground max-w-2xl mx-auto">
                How we turn your vision into reality.
              </p>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <Card className="glass">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary" className="text-lg px-3 py-1 font-clash">
                            {step.number}
                          </Badge>
                          <CardTitle className="font-clash">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="font-matter text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg font-matter mb-8 opacity-90 max-w-2xl mx-auto">
                Let's turn your vision into reality. Contact us today to discuss your project.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate('/contact')}
                className="text-lg px-8 py-6"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

