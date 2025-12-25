
import React from 'react';
import { Link } from 'react-router-dom';
import { FLEET_DATA, SERVICES, TESTIMONIALS } from '../constants';
import AIRecommendation from '../components/AIRecommendation';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Princess Trucking Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-white w-full text-left">
          <div className="max-w-3xl animate-fadeInLeft">
            <span className="bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              20+ Years of Operational Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              Powering Your Fleet.<br />
              <span className="text-primary italic">Moving Your Business.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Heavy-duty trucks and fleet solutions, backed by nationwide trucking and logistics support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="bg-primary hover:bg-red-700 text-white font-extrabold px-10 py-5 rounded-xl text-lg transition-all shadow-lg text-center">
                Request Quote
              </Link>
              <Link to="/fleet" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-extrabold px-10 py-5 rounded-xl text-lg transition-all text-center">
                Explore Fleet
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 right-0 left-0 bg-white/10 backdrop-blur-md border-t border-white/20 hidden lg:block">
           <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-4 gap-8 text-white">
              <div className="flex items-center space-x-4 border-r border-white/20">
                <span className="text-3xl font-black">150+</span>
                <span className="text-xs uppercase tracking-widest font-bold">Active<br/>Fleet</span>
              </div>
              <div className="flex items-center space-x-4 border-r border-white/20">
                <span className="text-3xl font-black">99.9%</span>
                <span className="text-xs uppercase tracking-widest font-bold">Success<br/>Rate</span>
              </div>
              <div className="flex items-center space-x-4 border-r border-white/20">
                <span className="text-3xl font-black">20M+</span>
                <span className="text-xs uppercase tracking-widest font-bold">Miles<br/>Covered</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-black">24/7</span>
                <span className="text-xs uppercase tracking-widest font-bold">Expert<br/>Support</span>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Core Capabilities</h4>
            <h2 className="text-4xl md:text-5xl font-black text-secondary">Logistics & Fleet Solutions</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-primary transition-colors">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link to={`/services#${service.id}`} className="text-primary font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                    Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendation Widget */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AIRecommendation />
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="mb-6 md:mb-0 text-left">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Powerhouse</h4>
              <h2 className="text-4xl md:text-5xl font-black text-secondary">Featured Fleet</h2>
            </div>
            <Link to="/fleet" className="text-secondary font-black border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              View Entire Fleet <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {FLEET_DATA.slice(0, 4).map((truck) => (
              <div key={truck.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative h-56 overflow-hidden">
                  <img src={truck.imageUrl} alt={truck.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase">
                    {truck.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-secondary mb-2">{truck.name}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <span className="flex items-center"><i className="fa-solid fa-weight-hanging mr-2 text-primary/50"></i> {truck.capacity}</span>
                    <span className="flex items-center"><i className="fa-solid fa-calendar mr-2 text-primary/50"></i> {truck.year}</span>
                  </div>
                  <ul className="space-y-1.5 mb-6">
                    {truck.specs.slice(0, 2).map((spec, i) => (
                      <li key={i} className="text-[11px] text-gray-600 flex items-center">
                        <i className="fa-solid fa-check text-green-500 mr-2"></i> {spec}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/fleet/${truck.id}`} className="block text-center border-2 border-secondary/10 text-secondary font-black py-3 rounded-xl hover:bg-secondary hover:text-white transition-all text-sm uppercase tracking-widest">
                    Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-gray-50 p-10 rounded-2xl text-left relative border border-gray-100">
                <div className="flex items-center space-x-1 text-primary mb-6">
                  {[...Array(t.rating)].map((_, i) => <i key={i} className="fa-solid fa-star text-sm"></i>)}
                </div>
                <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} className="w-14 h-14 rounded-full border-2 border-white shadow-md" alt={t.name} />
                  <div>
                    <h5 className="font-bold text-secondary">{t.name}</h5>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="bg-primary p-12 md:p-16 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Scale Your Operations?</h2>
              <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">Join thousands of partners that trust Princess for premium fleet assets and precision logistics services.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/quote" className="bg-white text-primary font-black px-10 py-4 rounded-xl text-lg hover:bg-secondary hover:text-white transition-all shadow-lg">
                  Request Quote
                </Link>
                <a href="tel:+63333331234" className="bg-secondary text-white font-black px-10 py-4 rounded-xl text-lg hover:bg-white hover:text-secondary transition-all shadow-lg">
                  Speak to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
