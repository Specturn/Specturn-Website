import { motion } from 'framer-motion';
import Header from '../components/Header';
import JourneySection from '../components/JourneySection';
import Footer from '../components/Footer';
import '../App.css';

export default function Journey() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted">
          <div className="aurora"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mb-6"
            >
              Our Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-matter text-muted-foreground max-w-3xl mx-auto"
            >
              Discover how we transform ideas into exceptional digital experiences.
            </motion.p>
          </div>
        </section>

        {/* Journey Section */}
        <JourneySection />
      </main>

      <Footer />
    </div>
  );
}

