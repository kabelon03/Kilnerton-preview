import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#1B3C73] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <img
              src="https://nellieswart.co.za/wp-content/uploads/2024/03/cropped-wapen-klein.png"
              alt="Kilnerton Primary School"
              className="h-16 w-16 mb-4 bg-white p-2 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-3">Kilnerton Primary School</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Providing quality education and nurturing young minds since our establishment.
              Excellence, integrity, and compassion guide our journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#FFC947] mt-1 flex-shrink-0" />
                <span className="text-blue-100 text-sm">123 School Street, Pretoria, South Africa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#FFC947] flex-shrink-0" />
                <a href="tel:+27123456789" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#FFC947] flex-shrink-0" />
                <a href="mailto:info@kilnertonprimary.co.za" className="text-blue-100 hover:text-[#FFC947] transition-colors text-sm">
                  info@kilnertonprimary.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">School Hours</h4>
            <p className="text-blue-100 text-sm mb-4">
              Monday - Friday: 7:30 AM - 2:00 PM
            </p>
            <h4 className="text-lg font-semibold mb-3 mt-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook-link"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFC947] hover:text-slate-900 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-twitter-link"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFC947] hover:text-slate-900 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFC947] hover:text-slate-900 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 mt-12 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Kilnerton Primary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;