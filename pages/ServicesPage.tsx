
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="bg-white">
      <section className="gradient-bg py-24 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Comprehensive Solutions</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          From nationwide logistics to high-performance fleet acquisition, we provide the tools to scale your business.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {/* Logistics Section */}
        <section id="logistics" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl mb-8">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h2 className="text-4xl font-black text-secondary mb-6">Logistics & Distribution</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our logistics division handles the movement of goods across the entire archipelago. Whether it's high-volume dry goods or heavy industrial machinery, we have the fleet to handle it.
            </p>
            <ul className="space-y-4 mb-8">
              {['Nationwide Full Truckload (FTL)', 'Specialized Heavy Haulage', 'Last-mile Distribution', 'Cross-docking Services'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <i className="fa-solid fa-circle-check text-primary"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl"
              alt="Logistics"
            />
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl"
              alt="Fleet Dealership"
            />
          </div>
          <div>
            <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center text-3xl mb-8">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h2 className="text-4xl font-black text-secondary mb-6">Fleet Dealership & Rentals</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We empower businesses by providing access to world-class heavy equipment. Choose from outright purchase options, flexible rentals, or long-term leasing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-secondary mb-1 italic">Sales</h4>
                <p className="text-xs text-gray-500">Authorized dealer for leading brands.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-secondary mb-1 italic">Rentals</h4>
                <p className="text-xs text-gray-500">Hourly, daily, and monthly schemes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section id="maintenance" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-8">
              <i className="fa-solid fa-wrench"></i>
            </div>
            <h2 className="text-4xl font-black text-secondary mb-6">Fleet Maintenance</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Keep your assets running at peak performance. Our service centers are equipped with the latest diagnostic tools and staffed by certified heavy equipment technicians.
            </p>
            <p className="text-gray-600 italic border-l-4 border-primary pl-4 py-2">
              "We maintain what we sell, ensuring a lifetime of productivity for your investments."
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1530124560671-6789e9232ed6?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl"
              alt="Maintenance"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
