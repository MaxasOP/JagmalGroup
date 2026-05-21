import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const businessLinks = [
    { name: 'Hotels', path: '/hotels' },
    { name: 'Logistics & Industrial Parks', path: '/logistics' },
    { name: 'Hospitality', path: '/hospitality' },
    { name: 'Precast & 3D Printing', path: '/precast' },
  ];

  return (
    <footer className="relative z-30 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                className="h-8 w-auto inline-block"
                preserveAspectRatio="xMinYMid meet"
                aria-label="Jagmal Group"
              >
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b48c36" />
                    <stop offset="30%" stopColor="#e6c875" />
                    <stop offset="70%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#996515" />
                  </linearGradient>
                </defs>

                <rect width="100%" height="100%" fill="#ffffff" />

                <g fontFamily="Georgia, 'Times New Roman', serif">
                  <text x="140" y="210" fontSize="45" fontWeight="normal" fill="#1a1a1a">The</text>
                  <text x="60" y="280" fontSize="120" fontWeight="normal" fill="#1a1a1a" letterSpacing={-2}>Jagmal</text>
                  <text x="240" y="340" fontSize="75" fontWeight="normal" fill="url(#goldGradient)">Group</text>
                </g>
              </svg>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              A legacy of excellence spanning multiple industries including hospitality, logistics, and construction sectors.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-amber-500 transition-colors duration-300">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Businesses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Businesses
            </h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-amber-500 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>36 Altamount Road, Mumbai 400026</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
<span>+91 9839921921</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-500 flex-shrink-0" />
                <span>info@jagmalgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm">
          <p className="text-slate-400">&copy; {currentYear} Jagmal Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

