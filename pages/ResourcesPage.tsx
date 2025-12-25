
import React from 'react';
import { IMAGES } from '../constants';

const ResourcesPage: React.FC = () => {
  const articles = [
    { title: 'The Future of Cold Chain in Panay', category: 'Insights', date: 'Oct 12, 2023', img: IMAGES.RESOURCES_ARTICLES[0] },
    { title: 'Optimizing Fleet Fuel Efficiency', category: 'Guides', date: 'Sept 28, 2023', img: IMAGES.RESOURCES_ARTICLES[1] },
    { title: 'Choosing the Right Heavy Equipment', category: 'Sales', date: 'Aug 15, 2023', img: IMAGES.RESOURCES_ARTICLES[2] },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="gradient-bg py-24 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Resources & Insights</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Industry news, technical guides, and logistics expertise from the front lines.
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
              <div className="h-48 overflow-hidden">
                <img src={a.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={a.title} />
              </div>
              <div className="p-8 text-left">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{a.category} • {a.date}</span>
                <h3 className="text-xl font-bold text-secondary mt-3 mb-6 line-clamp-2">{a.title}</h3>
                <button className="text-secondary font-black text-sm uppercase tracking-widest flex items-center group-hover:text-primary transition-colors">
                  Read Article <i className="fa-solid fa-arrow-right-long ml-3"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
