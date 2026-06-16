'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setBusinessesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Philanthropy', path: '/philanthropy' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
  ];

  const businessLinks = [
    { name: 'Hotels', path: '/hotels' },
    { name: 'Logistics & Industrial Parks', path: '/logistics' },
    { name: 'Hospitality', path: '/hospitality' },
    { name: 'Precast & 3D Printing', path: '/precast' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-slate-900/80 shadow-lg border-b border-slate-800'
            : 'bg-transparent'
        }`}
        data-testid="main-navbar"
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link
              href="/"
              className="whitespace-nowrap text-[1.35rem] font-bold leading-none tracking-tight pl-3 md:pl-0 sm:text-2xl md:text-3xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="navbar-logo"
            >
              <span className="text-white">JAGMAL</span>
              <span className="text-amber-500"> GROUP</span>
            </Link>

            <div className="hidden items-center space-x-8 md:flex">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-medium transition-colors duration-300 hover:text-amber-500 ${
                    pathname === link.path ? 'text-amber-500' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="group relative">
                <button className="flex items-center gap-1 text-base font-medium text-slate-200 transition-colors duration-300 hover:text-amber-500">
                  <span>Our Businesses</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-lg border border-slate-800 bg-slate-900 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {businessLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-800 hover:text-amber-500 ${
                        pathname === link.path ? 'text-amber-500' : 'text-slate-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-medium transition-colors duration-300 hover:text-amber-500 ${
                    pathname === link.path ? 'text-amber-500' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative h-12 w-12 flex flex-col items-center justify-center text-slate-100 hover:text-amber-500 transition-all duration-300 group focus:outline-none z-50"
                aria-label="Toggle Menu"
                data-testid="mobile-menu-trigger"
              >
                <div className="flex flex-col gap-1.5 w-6 items-end justify-center">
                  <span className={`h-0.5 bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[4px] w-6' : 'w-6 group-hover:w-4'
                  }`} />
                  <span className={`h-0.5 bg-current transition-all duration-300 origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[4px] w-6' : 'w-4 group-hover:w-6'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu (x.ai inspired) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-2xl transition-all duration-500 ease-out md:hidden flex flex-col overflow-y-auto ${
          mobileOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {/* Style block for animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-menu-item {
            animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }
        `}} />

        <div className="flex-1 w-full max-w-lg mx-auto px-6 pt-24 pb-8 flex flex-col justify-center">
          <div className="space-y-6 w-full">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
            ].map((link, idx) => (
              <div 
                key={link.path}
                className="animate-menu-item"
                style={{ animationDelay: `${idx * 70}ms`, animationPlayState: mobileOpen ? 'running' : 'paused' }}
              >
                <Link
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline py-1.5"
                >
                  <span className="text-3xl font-light text-slate-100 tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber-500">
                    {link.name}
                  </span>
                </Link>
                <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent mt-2" />
              </div>
            ))}

            {/* Collapsible Businesses */}
            <div 
              className="animate-menu-item"
              style={{ animationDelay: '140ms', animationPlayState: mobileOpen ? 'running' : 'paused' }}
            >
              <button
                onClick={() => setBusinessesOpen(!businessesOpen)}
                className="group flex items-baseline justify-between w-full py-1.5 text-left focus:outline-none"
              >
                <span className="text-3xl font-light text-slate-100 tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber-500">
                  Our Businesses
                </span>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${businessesOpen ? 'rotate-180 text-amber-500' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${businessesOpen ? 'max-h-64 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 border-l border-slate-800 pl-4 space-y-3">
                  {businessLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => {
                        setMobileOpen(false);
                        setBusinessesOpen(false);
                      }}
                      className="block text-lg font-light text-slate-400 transition-colors duration-300 hover:text-amber-500"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent mt-2" />
            </div>

            {[
              { name: 'Leadership', path: '/leadership' },
              { name: 'Philanthropy', path: '/philanthropy' },
              { name: 'Contact', path: '/contact' },
            ].map((link, idx) => (
              <div 
                key={link.path}
                className="animate-menu-item"
                style={{ animationDelay: `${(idx + 3) * 70}ms`, animationPlayState: mobileOpen ? 'running' : 'paused' }}
              >
                <Link
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline py-1.5"
                >
                  <span className="text-3xl font-light text-slate-100 tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber-500">
                    {link.name}
                  </span>
                </Link>
                <div className="h-[1px] bg-gradient-to-r from-slate-800 to-transparent mt-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer section of overlay menu */}
        <div 
          className="border-t border-slate-900 bg-slate-950/60 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left mt-auto animate-menu-item"
          style={{ animationDelay: '420ms', animationPlayState: mobileOpen ? 'running' : 'paused' }}
        >
          <div>
            <div className="text-[1.1rem] font-bold tracking-tight mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white">JAGMAL</span>
              <span className="text-amber-500"> GROUP</span>
            </div>
            <p className="text-xs text-slate-500">Excellence across industries.</p>
          </div>
          <div className="flex gap-4 text-xs text-slate-400">
            <a href="mailto:info@jagmalgroup.com" className="hover:text-amber-500 transition-colors">info@jagmalgroup.com</a>
            <span>•</span>
            <span className="text-slate-500">Est. 1972</span>
          </div>
        </div>
      </div>
    </>
  );
};
