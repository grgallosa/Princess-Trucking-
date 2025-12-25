
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const FleetPage = lazy(() => import('./pages/FleetPage'));
const FleetDetailsPage = lazy(() => import('./pages/FleetDetailsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));

const FAQPage = () => (
  <div className="py-24 text-center">
    <h1 className="text-4xl font-bold text-secondary text-left max-w-7xl mx-auto px-4">Frequently Asked Questions</h1>
    <div className="mt-12 max-w-3xl mx-auto space-y-6 px-4">
      {[
        { q: 'What is the minimum rental period?', a: 'We offer flexible rentals ranging from 24-hour daily rates to long-term annual contracts.' },
        { q: 'Do you offer nationwide delivery?', a: 'Yes, our logistics division covers Luzon, Visayas, and Mindanao with inter-island barge support.' },
        { q: 'Are your drivers certified?', a: 'Every Princess driver undergoes NCII certification and regular safety refresher courses.' }
      ].map((faq, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl text-left shadow-sm border border-gray-100">
          <h4 className="font-black text-secondary mb-2">Q: {faq.q}</h4>
          <p className="text-gray-600 text-sm">A: {faq.a}</p>
        </div>
      ))}
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/fleet/:id" element={<FleetDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
