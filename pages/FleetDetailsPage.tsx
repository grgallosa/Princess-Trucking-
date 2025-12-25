
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FLEET_DATA } from '../constants';

const FleetDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const truck = FLEET_DATA.find((t) => t.id === id);

  if (!truck) {
    return <Navigate to="/fleet" replace />;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <i className="fa-solid fa-chevron-right text-[8px]"></i>
          <Link to="/fleet" className="hover:text-primary transition-colors">Fleet Inventory</Link>
          <i className="fa-solid fa-chevron-right text-[8px]"></i>
          <span className="text-secondary">{truck.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src={truck.imageUrl} 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl" 
                alt={truck.name} 
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                  <img src={truck.imageUrl} className="w-full h-24 object-cover rounded-xl" alt="Gallery" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="text-left space-y-8">
            <div>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-4 inline-block">
                {truck.type}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight">{truck.name}</h1>
              <p className="text-gray-500 mt-4 text-lg font-medium">Model Year: {truck.year}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center text-xl">
                  <i className="fa-solid fa-weight-scale"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Load Capacity</p>
                  <p className="text-lg font-black text-secondary">{truck.capacity}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-50 text-primary rounded-xl flex items-center justify-center text-xl">
                  <i className="fa-solid fa-truck"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Configuration</p>
                  <p className="text-lg font-black text-secondary">{truck.wheels} Wheeler</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-black text-secondary mb-6 flex items-center">
                <i className="fa-solid fa-list-check mr-3 text-primary"></i>
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {truck.specs.map((spec, i) => (
                  <div key={i} className="flex items-center space-x-3 py-2 border-b border-gray-50 last:border-0">
                    <i className="fa-solid fa-circle-check text-green-500 text-sm"></i>
                    <span className="text-sm font-bold text-gray-600">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/quote" 
                className="flex-1 bg-primary text-white font-black py-5 rounded-2xl text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-500/20 text-center flex items-center justify-center space-x-3"
              >
                <i className="fa-solid fa-file-invoice-dollar"></i>
                <span>Get Instant Quote</span>
              </Link>
              <Link 
                to="/contact" 
                className="flex-1 border-2 border-secondary text-secondary font-black py-5 rounded-2xl text-lg hover:bg-secondary hover:text-white transition-all text-center flex items-center justify-center space-x-3"
              >
                <i className="fa-solid fa-headset"></i>
                <span>Inquire Availability</span>
              </Link>
            </div>

            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black text-center sm:text-left">
              <i className="fa-solid fa-shield-halved text-green-500 mr-2"></i> Verified Industrial Asset
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-black text-secondary">Similar Equipment</h2>
          <Link to="/fleet" className="text-primary font-bold text-sm uppercase tracking-widest hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {FLEET_DATA.filter(t => t.id !== truck.id).slice(0, 3).map(t => (
            <Link key={t.id} to={`/fleet/${t.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img src={t.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={t.name} />
              </div>
              <div className="p-6">
                <h4 className="font-black text-secondary group-hover:text-primary transition-colors">{t.name}</h4>
                <p className="text-xs text-gray-400 font-bold uppercase mt-2">{t.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetDetailsPage;
