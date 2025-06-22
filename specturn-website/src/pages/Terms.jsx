import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Terms() {
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
              <h1 className="text-4xl md:text-5xl font-clash font-bold mb-8">Terms & Conditions</h1>
              
              <div className="prose prose-lg max-w-none font-matter text-muted-foreground">
                <p className="text-lg mb-6">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Specturn's 
                  website for personal, non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
                <p>
                  The materials on Specturn's website are provided on an 'as is' basis. Specturn makes 
                  no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, fitness 
                  for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Limitations</h2>
                <p>
                  In no event shall Specturn or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising 
                  out of the use or inability to use the materials on Specturn's website.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at 
                  <a href="mailto:specturnmedia@gmail.com" className="text-primary hover:underline ml-1">
                    specturnmedia@gmail.com
                  </a>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

