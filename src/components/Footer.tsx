import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Top Border */}
      <div className="w-full h-px bg-white"></div>
      
      <div className="container mx-auto px-4 py-32">
        {/* Logo */}
        <div className="mb-16">
          <img 
            src={logo2} 
            alt="Specturn Logo" 
            className="w-12 h-12"
          />
        </div>

        {/* Get in Touch Section */}
        {/* Get in Touch Section */}
        <div className="mb-32">
          <h2 className="text-[64px] leading-none font-clash mb-16"> 
            Get in Touch
          </h2>
          <ul className="space-y-8">
            <li>
              <a 
                href="https://www.facebook.com/profile.php?id=61564018114081"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-8 hover:opacity-80 transition-opacity"
              >
                <Facebook size={24} strokeWidth={1} />
                <span className="uppercase text-lg tracking-wide font-matter">Stalk Us</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/specturnmedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-8 hover:opacity-80 transition-opacity"
              >
                <Instagram size={24} strokeWidth={1} />
                <span className="uppercase text-lg tracking-wide font-matter">DM Us</span>
              </a>
            </li>
            <li>
              <a 
                href="https://x.com/SpecturnMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-8 hover:opacity-80 transition-opacity"
              >
                <Twitter size={24} strokeWidth={1} />
                <span className="uppercase text-lg tracking-wide font-matter">Tweet Us</span>
              </a>
            </li>
            <li>
              <a 
                href="mailto:specturnmedia@gmail.com"
                className="flex items-center space-x-8 hover:opacity-80 transition-opacity"
              >
                <Mail size={24} strokeWidth={1} />
                <span className="uppercase text-lg tracking-wide font-matter">Mail Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Links */}
        <div className="flex space-x-8">
          <Link to="/privacy" className="text-white hover:opacity-80 transition-opacity font-matter">
            Privacy Policy
          </Link>
          <Link to="/accessibility" className="text-white hover:opacity-80 transition-opacity font-matter">
            Accessibility Statement
          </Link>
          <Link to="/terms" className="text-white hover:opacity-80 transition-opacity font-matter">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;