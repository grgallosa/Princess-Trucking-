
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
      <div className="bg-secondary text-white text-xs py-2 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><i className="fa-solid fa-phone mr-2 text-primary"></i> +63 (33) 333-1234</span>
            <span className="flex items-center"><i className="fa-solid fa-envelope mr-2 text-primary"></i> info@princesstrucking.com</span>
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
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={LOGO_URL} 
              alt={LOGO_TEXT || "Princess Trucking"} 
              className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'} w-auto object-contain`}
            />
            {LOGO_TEXT && (
              <div className="hidden sm:block">
                <span className="text-xl font-extrabold text-secondary leading-none block group-hover:text-primary transition-colors uppercase tracking-tight">
                  {LOGO_TEXT}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xs uppercase tracking-widest font-black transition-all hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="bg-primary text-white px-7 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-md active:scale-95">
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-secondary text-2xl p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-2xl p-6 flex flex-col space-y-4 animate-fadeInDown">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-black uppercase tracking-widest border-b border-gray-50 pb-3 ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="bg-primary text-white p-4 rounded-xl text-center font-black uppercase tracking-widest text-sm">
              Request Quote
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src={LOGO_URL} 
                alt={LOGO_TEXT || "Princess Trucking"} 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
              {LOGO_TEXT && <span className="text-2xl font-black text-white uppercase tracking-tight">{LOGO_TEXT}</span>}
            </div>
            <p className="text-sm leading-relaxed mb-8 font-medium">
              Your trusted partner in logistics since 2005. Serving Panay Island and the entire Philippines with excellence, safety, and modern trucking solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-[0.2em] text-[10px]">Operations</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/fleet" className="hover:text-primary transition-colors">Fleet Inventory</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Logistics Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Company Profile</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-[0.2em] text-[10px]">Iloilo Hub</h4>
            <p className="text-sm mb-6 leading-relaxed">
              Units 14-16, Iloilo Business Park<br />
              Mandurriao, Iloilo City<br />
              5000 Philippines
            </p>
            <div className="space-y-3 text-xs font-bold">
              <p className="flex items-center"><i className="fa-solid fa-phone text-primary mr-3 text-sm"></i> +63 (33) 333-1234</p>
              <p className="flex items-center"><i className="fa-solid fa-mobile-screen text-primary mr-3 text-sm"></i> +63 917 123 4567</p>
              <p className="flex items-center"><i className="fa-solid fa-envelope text-primary mr-3 text-sm"></i> dispatch@princesstrucking.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-[0.2em] text-[10px]">Newsletter</h4>
            <p className="text-sm mb-6 font-medium leading-relaxed">Get the latest fleet updates and logistics insights delivered monthly.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-xs font-bold text-white focus:ring-1 focus:ring-primary outline-none transition-all" 
              />
              <button className="w-full bg-primary text-white font-black py-4 rounded-xl hover:bg-red-700 transition-all text-[10px] uppercase tracking-widest">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/5 py-10 px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            © {new Date().getFullYear()} Princess Trucking Services. Excellence in Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
