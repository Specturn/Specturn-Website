import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Accessibility() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-clash font-bold mb-8">Accessibility Statement</h1>
              
              <div className="prose prose-lg max-w-none font-matter text-muted-foreground">
                <p className="text-lg mb-6">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Our Commitment</h2>
                <p>
                  Specturn is committed to ensuring digital accessibility for people with disabilities. 
                  We are continually improving the user experience for everyone and applying the relevant 
                  accessibility standards.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Measures to Support Accessibility</h2>
                <p>
                  Specturn takes the following measures to ensure accessibility of our website:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Include accessibility as part of our mission statement</li>
                  <li>Integrate accessibility into our procurement practices</li>
                  <li>Provide continual accessibility training for our staff</li>
                  <li>Assign clear accessibility goals and responsibilities</li>
                  <li>Employ formal accessibility quality assurance methods</li>
                </ul>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Conformance Status</h2>
                <p>
                  The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and 
                  developers to improve accessibility for people with disabilities. It defines three levels 
                  of conformance: Level A, Level AA, and Level AAA. This website is partially conformant 
                  with WCAG 2.1 level AA.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Feedback</h2>
                <p>
                  We welcome your feedback on the accessibility of our website. Please let us know if you 
                  encounter accessibility barriers by contacting us at 
                  <a href="mailto:specturnmedia@gmail.com" className="text-primary hover:underline ml-1">
                    specturnmedia@gmail.com
                  </a>.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Technical Specifications</h2>
                <p>
                  Accessibility of this website relies on the following technologies to work with the 
                  particular combination of web browser and any assistive technologies or plugins installed 
                  on your computer:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>HTML</li>
                  <li>WAI-ARIA</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

