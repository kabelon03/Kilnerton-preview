import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/programs', label: 'Programs' },
    { path: '/news-events', label: 'News & Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/staff', label: 'Staff' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <img
              src="https://nellieswart.co.za/wp-content/uploads/2024/03/cropped-wapen-klein.png"
              alt="Kilnerton Primary School"
              className="h-12 w-12 md:h-14 md:w-14"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1B3C73] leading-tight">
                Kilnerton Primary
              </h1>
              <p className="text-xs text-slate-600 hidden md:block">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#1B3C73] text-white'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-[#1B3C73]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-testid="nav-contact-cta"
              className="ml-4 px-6 py-2 bg-[#FFC947] text-slate-900 rounded-full font-semibold hover:bg-[#ffb01f] transition-all hover:scale-105 shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1B3C73] hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            data-testid="mobile-menu"
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#1B3C73] text-white'
                      : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;