
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="gradient-bg py-24 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Our Legacy of Excellence</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Built on trust, powered by performance. Princess Trucking has been a pillar of Philippine logistics since 2005.
        </p>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-secondary mb-6">A Foundation of Reliability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in the heart of Iloilo City, Princess Trucking began with a single mission: to bridge the gap between industries and their transport needs with unmatched precision. Today, we operate one of the most diverse fleets in the Western Visayas, serving nationwide requirements from multi-million peso construction projects to critical food supply chains.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our growth is driven by a commitment to modernizing the trucking industry. By integrating advanced tracking systems and maintaining a "Young Fleet" policy, we ensure that our partners always have access to the safest and most efficient equipment available.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-2xl font-black text-secondary">2005</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Year Established</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-2xl font-black text-secondary">150+</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Units</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 rounded-2xl shadow-2xl"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-secondary mb-16">The Princess Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Safety First', icon: 'fa-shield-halved', text: 'Rigorous maintenance schedules and expert driver training ensure every haul is a safe one.' },
              { title: 'Operational Speed', icon: 'fa-bolt', text: '24/7 dispatch and real-time tracking minimize downtime and maximize productivity.' },
              { title: 'Partner Success', icon: 'fa-handshake', text: 'We view ourselves as an extension of your business, succeeding only when you do.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <i className={`fa-solid ${v.icon} text-4xl text-primary mb-6`}></i>
                <h3 className="text-xl font-bold text-secondary mb-4">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
