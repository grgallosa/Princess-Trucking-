
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, LOGO_TEXT } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-secondary text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span><i className="fa-solid fa-phone mr-2 text-primary"></i> +63 (33) 333-1234</span>
            <span><i className="fa-solid fa-envelope mr-2 text-primary"></i> info@princesstrucking.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-primary transition-colors"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
        <nav className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={LOGO_URL} 
              alt={`${LOGO_TEXT} Logo`} 
              className="h-10 w-auto object-contain"
              style={{ filter: scrolled ? 'none' : 'none' }} // Add filter if logo needs color shift
            />
            <div className="hidden sm:block">
              <span className="text-xl font-extrabold text-secondary leading-none block">{LOGO_TEXT}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Trucking Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-semibold hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-md">
              Request Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-secondary text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl p-4 flex flex-col space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-lg font-medium text-gray-800 border-b pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="bg-primary text-white p-4 rounded-xl text-center font-bold">
              Request Quote
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt={`${LOGO_TEXT} White Logo`} 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
              <span className="text-2xl font-extrabold text-white">{LOGO_TEXT}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner in logistics since 2005. Serving Panay Island and the entire Philippines with excellence, safety, and modern trucking solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-l-4 border-primary pl-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/fleet" className="hover:text-primary transition-colors">Fleet Inventory</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Company</Link></li>
              <li><Link to="/quote" className="hover:text-primary transition-colors">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-l-4 border-primary pl-4 uppercase tracking-wider text-sm">Headquarters</h4>
            <p className="text-sm mb-4">
              Iloilo Business Park, Mandurriao<br />
              Iloilo City, 5000 Philippines
            </p>
            <div className="space-y-2 text-sm">
              <p><i className="fa-solid fa-phone text-primary mr-2"></i> +63 (33) 333-1234</p>
              <p><i className="fa-solid fa-mobile-screen text-primary mr-2"></i> +63 917 123 4567</p>
              <p><i className="fa-solid fa-envelope text-primary mr-2"></i> dispatch@princesstrucking.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-l-4 border-primary pl-4 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm mb-4">Get the latest logistics insights and fleet updates.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-700 border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none" 
              />
              <button className="w-full bg-primary text-white font-bold py-2.5 rounded-lg hover:bg-red-700 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 py-8 px-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Princess Trucking Services. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
