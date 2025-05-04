import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Specturn';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
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
      <div className="container mx-auto px-4 pt-32 pb-24">
        <h1 className="text-[120px] leading-[0.95] text-center font-clash">
          Privacy
          <br />
          Policy
        </h1>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 pb-32">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-clash mb-6">
            Your Privacy Matters
          </h2>
          <p className="text-lg font-matter">
            Don't worry this website is purely informational and does not collect, store, or process any personal data from visitors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 