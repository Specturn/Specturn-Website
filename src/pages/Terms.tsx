import React, { useEffect } from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms and Conditions - Specturn';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Home Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300"
        >
          <Home size={20} />
          <span className="text-sm font-matter">Home</span>
        </Link>
      </div>

      {/* Main title section */}
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-[90px] md:text-[120px] leading-[0.95] font-clash">
          TERMS & CONDITIONS
        </h1>
      </div>

      {/* Content sections */}
      <div className="container mx-auto px-4 mt-16 space-y-16">
        <div className="max-w-3xl">
          <p className="text-lg font-matter text-white/90 mb-8">
            <span className="text-white/60">Effective Date: 3rd March 2025</span>
            <br /><br />
            Welcome to Specturn! These Terms and Conditions ("Terms") govern your use of our website, <a href="https://www.specturn.in" className="underline hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">www.specturn.in</a>, and the services we offer. By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
          </p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">1. Ownership and Intellectual Property</h2>
          <p className="text-lg font-matter text-white/90">All content on this website, including text, graphics, logos, images, and any other material, is the property of Specturn unless otherwise stated. You may not reproduce, distribute, modify, or republish any content from this website without prior written consent from us.</p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">2. Acceptable Use</h2>
          <ul className="text-lg font-matter space-y-2 list-disc list-inside text-white/90">
            <li>Use the website in any way that could harm or impair its availability or accessibility</li>
            <li>Engage in any activity that is illegal, fraudulent, or harmful</li>
            <li>Copy, duplicate, or exploit material from the website for commercial purposes without permission</li>
          </ul>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">3. Services and Payments</h2>
          <p className="text-lg font-matter text-white/90">Specturn offers creative services such as website design and digital solutions. All service-related details, including timelines and deliverables, will be agreed upon before the start of a project.<br />Once the agreed work is completed and payment is received, no refunds will be issued. Please ensure that all project requirements and expectations are clearly communicated before confirming your order.</p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">4. No User Accounts or Data Collection</h2>
          <p className="text-lg font-matter text-white/90">Specturn does not require or allow users to create accounts. We do not actively collect any personal data through this website. If you contact us via email, any information you share is used solely for communication purposes.</p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">5. External Links</h2>
          <p className="text-lg font-matter text-white/90">Our website may include links to third-party websites for reference or inspiration. These sites are not under our control, and we are not responsible for the content, accuracy, or policies of any third-party websites.</p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">6. Limitation of Liability</h2>
          <p className="text-lg font-matter text-white/90">Specturn is provided on an "as is" basis. We make no warranties or guarantees regarding the performance, accuracy, or availability of the website. We shall not be held liable for any direct or indirect damages resulting from your use of this website or our services.</p>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">7. Changes to These Terms</h2>
          <p className="text-lg font-matter text-white/90">We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the website after changes are made constitutes your acceptance of the new Terms.</p>
        </div>

        <div className="max-w-3xl pb-32">
          <h2 className="text-[48px] md:text-[64px] leading-none font-clash mb-6">8. Contact Us</h2>
          <div className="text-lg font-matter flex items-start gap-2">
            <p>
              For any questions regarding these Terms and Conditions, you can reach us at:{' '}
              <a 
                href="mailto:specturnmedia@gmail.com"
                className="inline-flex items-center underline hover:opacity-80 transition-opacity"
              >
                specturnmedia@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 