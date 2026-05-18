import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const location = useLocation();

  const topLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Services', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

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
  }, [location.pathname]);

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
              to="/"
              className="whitespace-nowrap text-[1.35rem] font-bold leading-none tracking-tight sm:text-2xl md:text-3xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
              data-testid="navbar-logo"
            >
              <span className="text-white">JAGMAL</span>
              <span className="text-amber-500"> GROUP</span>
            </Link>

            <div className="hidden items-center space-x-8 md:flex">
              {topLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-300 hover:text-amber-500 ${
                    location.pathname === link.path ? 'text-amber-500' : 'text-slate-200'
                  }`}
                >
                    {link.name}
                </Link>
              ))}

              <div className="group relative">
                <button className="flex items-center gap-1 text-base font-medium text-slate-200 transition-colors duration-300 hover:text-amber-500">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-lg border border-slate-800 bg-slate-900 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {businessLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-800 hover:text-amber-500 ${
                        location.pathname === link.path ? 'text-amber-500' : 'text-slate-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {topLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-300 hover:text-amber-500 ${
                    location.pathname === link.path ? 'text-amber-500' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-slate-100 hover:text-amber-500 p-2 transition-colors"
                data-testid="mobile-menu-trigger"
              >
                {mobileOpen ? (
                  <X className="h-7 w-7" strokeWidth={2.5} />
                ) : (
                  <Menu className="h-7 w-7" strokeWidth={2.5} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-slate-800 bg-slate-900 shadow-lg sm:top-20 md:hidden">
          <div className="mx-auto w-full max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex flex-col space-y-2">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                Home
              </Link>
              
              {/* About */}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                  About
              </Link>

              {/* Hotels */}
              <Link
                to="/hotels"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                Hotels
              </Link>

              {/* Services */}
              <Link
                to="/projects"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                Services
              </Link>
              
              {/* Our Businesses - Dropdown */}
              <div className="py-2">
                <button
                  onClick={() => setBusinessesOpen(!businessesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-slate-300 hover:text-amber-500 transition-colors duration-300"
                >
                  <span>Our Businesses</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${businessesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {businessesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-slate-700 pl-4">
                    {businessLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => {
                          setMobileOpen(false);
                          setBusinessesOpen(false);
                        }}
                        className="block text-base font-medium transition-colors duration-300 py-2 text-slate-400 hover:text-amber-500"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Leadership */}
              <Link
                to="/leadership"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                Leadership
              </Link>
              
              {/* Philanthropy */}
              <Link
                to="/philanthropy"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                Philanthropy
              </Link>
              
              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium transition-colors duration-300 py-2 text-slate-300 hover:text-amber-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


