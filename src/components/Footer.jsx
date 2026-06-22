import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

import { ShinyText } from './ShinyText';

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
            <Link href="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-slate-100">Building</span>
              <span className="text-amber-500"> Tomorrow</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              A legacy of excellence spanning multiple industries including hospitality, logistics, and construction sectors.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/shivam-chauhan-880a98198?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/shivaaaamchauhan?igsh=MTBubnE1NnYyaHJ0Zg==" className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/shivam-chauhan-880a98198?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="p-2 rounded-full bg-slate-800 hover:bg-amber-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <ShinyText className="font-semibold text-lg">Quick Links</ShinyText>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-amber-500 transition-colors duration-300">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/philanthropy" className="hover:text-amber-500 transition-colors duration-300">
                  Philanthropy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Businesses */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <ShinyText className="font-semibold text-lg">Our Businesses</ShinyText>
            </h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="hover:text-amber-500 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              <ShinyText className="font-semibold text-lg">Contact Us</ShinyText>
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
