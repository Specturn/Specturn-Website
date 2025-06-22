import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import JourneySection from '../components/JourneySection';
import Footer from '../components/Footer';
import '../App.css';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
}

