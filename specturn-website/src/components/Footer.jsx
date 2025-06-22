import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import '../App.css';

export default function Footer() {
  const socialLinks = [
    { name: 'Stalk Us', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61564018114081', platform: 'Facebook' },
    { name: 'DM Us', icon: Instagram, href: 'https://www.instagram.com/specturnmedia', platform: 'Instagram' },
    { name: 'Tweet Us', icon: Twitter, href: 'https://x.com/SpecturnMedia?t=-0Fpu1sAHHLsjlLglYeiUw&s=09', platform: 'Twitter' },
    { name: 'Mail Us', icon: Mail, href: 'mailto:specturnmedia@gmail.com', platform: 'Email' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Accessibility Statement', path: '/accessibility' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/src/assets/white.jpeg" 
                alt="Specturn Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl font-clash font-bold">Specturn</span>
            </div>
            <p className="font-matter text-primary-foreground/80">
              Creating exceptional digital experiences that help businesses stand out and succeed online.
            </p>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-clash font-bold">Get in Touch</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                  target={link.platform !== 'Email' ? '_blank' : undefined}
                  rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-matter">{link.name} ({link.platform})</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-clash font-bold">Legal</h3>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-matter"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-matter text-primary-foreground/60">
            © {new Date().getFullYear()} Specturn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

