import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Privacy() {
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
              <h1 className="text-4xl md:text-5xl font-clash font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none font-matter text-muted-foreground">
                <p className="text-lg mb-6">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, and any 
                  other information you choose to provide.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h2 className="text-2xl font-clash font-bold text-foreground mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at 
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

