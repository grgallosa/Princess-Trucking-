
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FLEET_DATA } from '../constants';
import { TruckType } from '../types';

const FleetPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const allCategories = ['All', ...Object.values(TruckType)];
  const topCategories = ['All', TruckType.WING_VAN, TruckType.DUMP_TRUCK, TruckType.TRACTOR_HEAD, TruckType.CONCRETE_MIXER];
  
  const displayedCategories = isExpanded ? allCategories : topCategories;

  const filteredFleet = useMemo(() => {
    return FLEET_DATA.filter(truck => {
      const matchesType = filterType === 'All' || truck.type === filterType;
      const matchesSearch = truck.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          truck.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesType && matchesSearch;
    });
  }, [filterType, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="gradient-bg py-20 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black mb-4">Inventory Fleet</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Premium logistics vehicles and industrial equipment for heavy-duty operations.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative group">
              <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"></i>
              <input 
                type="text" 
                placeholder="Search fleet (e.g. Wing Van, 12-Wheeler)..." 
                className="w-full pl-14 pr-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all text-lg font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="flex flex-wrap gap-3 items-center justify-center transition-all duration-300 max-w-5xl mx-auto">
              {displayedCategories.map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                    filterType === type 
                    ? 'bg-primary text-white shadow-md shadow-red-500/20' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  isExpanded 
                  ? 'bg-secondary text-white border-secondary shadow-md' 
                  : 'bg-white text-secondary border-gray-200 hover:border-secondary/30'
                }`}
              >
                <span>{isExpanded ? 'Less' : 'More'}</span>
                <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]`}></i>
              </button>
            </div>
            
            {!isExpanded && !topCategories.includes(filterType as any) && filterType !== 'All' && (
              <div className="flex items-center justify-center space-x-2 animate-fadeIn">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Category:</span>
                <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-lg text-xs font-bold border border-secondary/20 flex items-center">
                  {filterType}
                  <button onClick={() => setFilterType('All')} className="ml-3 hover:text-primary transition-colors">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {filteredFleet.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map(truck => (
              <div key={truck.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={truck.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={truck.name} />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-secondary/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-md">
                      {truck.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-xl font-black text-secondary mb-3 leading-tight">{truck.name}</h3>
                  
                  <div className="flex items-center space-x-6 mb-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <span className="flex items-center"><i className="fa-solid fa-weight-scale mr-2 text-primary/60 text-base"></i> {truck.capacity}</span>
                    <span className="flex items-center"><i className="fa-solid fa-truck mr-2 text-primary/60 text-base"></i> {truck.wheels} Wheels</span>
                  </div>

                  <div className="space-y-2 mb-8 border-t border-gray-50 pt-4">
                    {truck.specs.map((spec, i) => (
                      <div key={i} className="flex items-start text-[11px] text-gray-600 font-medium">
                        <i className="fa-solid fa-circle-check text-green-500 mr-2 mt-0.5"></i>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      to="/quote" 
                      className="bg-secondary text-white font-bold py-3.5 rounded-xl hover:bg-primary transition-all shadow-md active:scale-95 text-sm flex items-center justify-center"
                    >
                      Get Quote
                    </Link>
                    <Link 
                      to={`/fleet/${truck.id}`}
                      className="border border-gray-200 text-gray-400 font-bold py-3.5 rounded-xl hover:border-secondary hover:text-secondary transition-all text-sm flex items-center justify-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200 text-3xl">
              <i className="fa-solid fa-truck-monster"></i>
            </div>
            <h3 className="text-2xl font-black text-secondary mb-2">No units found</h3>
            <p className="text-gray-400 mb-8">Try clearing your filters or search terms.</p>
            <button 
              onClick={() => {setFilterType('All'); setSearchQuery('');}}
              className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FleetPage;
