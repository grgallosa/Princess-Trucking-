
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IMAGES } from '../constants';

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
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={IMAGES.LOGISTICS_SERVICE} 
              className="rounded-3xl shadow-2xl"
              alt="Logistics"
            />
          </div>
        </section>

        {/* Fleet Section */}
        <section id="fleet" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={IMAGES.FLEET_SERVICE} 
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
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={IMAGES.MAINTENANCE_SERVICE} 
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
