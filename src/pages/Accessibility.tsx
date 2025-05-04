import React, { useEffect } from 'react';
import { Mail, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accessibility = () => {
  useEffect(() => {
    document.title = 'Accessibility Statement - Specturn';
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
        <h1 className="text-[120px] leading-[0.95] font-clash">
          ACCESSIBILITY
          <br />
          STATEMENT
        </h1>
      </div>

      {/* Content sections */}
      <div className="container mx-auto px-4 mt-16 space-y-16">
        {/* Introduction */}
        <div className="max-w-3xl">
          <p className="text-lg font-matter">
            At Specturn, we are committed to making our website accessible and usable for everyone, including people with disabilities. We believe in equal access to digital content and strive to ensure that our website meets the accessibility standards set by the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
          </p>
        </div>

        {/* What We're Doing */}
        <div className="max-w-3xl">
          <h2 className="text-[64px] leading-none font-clash mb-6">
            What We're Doing
          </h2>
          <p className="text-lg font-matter">
            We are actively working to improve the accessibility of our website through regular reviews, design updates, and implementation of best practices. Our goal is to ensure that all visitors can easily navigate and interact with our site, regardless of ability.
          </p>
        </div>

        {/* Accessibility Features */}
        <div className="max-w-3xl">
          <h2 className="text-[64px] leading-none font-clash mb-6">
            Accessibility Features
          </h2>
          <ul className="text-lg font-matter space-y-2 list-disc list-inside">
            <li>Responsive and mobile-friendly design across devices</li>
            <li>Alternative text for meaningful images</li>
            <li>Keyboard navigability for core features</li>
            <li>Color contrast and text legibility considerations</li>
          </ul>
        </div>

        {/* Ongoing Improvements */}
        <div className="max-w-3xl">
          <h2 className="text-[64px] leading-none font-clash mb-6">
            Ongoing Improvements
          </h2>
          <p className="text-lg font-matter">
            Accessibility is an ongoing effort, and we recognize that some areas of the website may still need improvement. We are committed to addressing any issues as we continue to enhance the experience for all users.
          </p>
        </div>

        {/* Need Help Section */}
        <div className="max-w-3xl pb-32">
          <h2 className="text-[64px] leading-none font-clash mb-6">
            Need Help or Found an Issue?
          </h2>
          <div className="text-lg font-matter flex items-start gap-2">
            <p>
              If you encounter any difficulty accessing our website or have suggestions for improvement, please contact us at:{' '}
              <a 
                href="mailto:specturnmedia@gmail.com"
                className="inline-flex items-center hover:opacity-80 transition-opacity"
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

export default Accessibility; 