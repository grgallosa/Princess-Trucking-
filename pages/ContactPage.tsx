
import React, { useState } from 'react';
import { ContactForm } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl text-center animate-fadeIn">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <h2 className="text-2xl font-black text-secondary mb-3">Message Sent!</h2>
          <p className="text-gray-600 mb-8 text-sm">Thank you for reaching out. our team will review your inquiry and get back to you within 2 business hours.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="gradient-bg py-20 text-white text-center px-4">
        <h1 className="text-5xl font-black mb-4">Contact Our Experts</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Available 24/7 for fleet acquisition, rentals, and nationwide logistics support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-6 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-black text-secondary mb-6 border-l-4 border-primary pl-4 uppercase tracking-tight">Direct Support</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-50 text-primary rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-sm mb-1">Inquiry Hotlines</h5>
                    <p className="text-gray-600 text-xs leading-relaxed">+63 (33) 333-1234</p>
                    <p className="text-gray-600 text-xs leading-relaxed">+63 917 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 text-secondary rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-sm mb-1">Email Departments</h5>
                    <p className="text-gray-600 text-xs leading-relaxed">sales@princesstrucking.com</p>
                    <p className="text-gray-600 text-xs leading-relaxed">logistics@princesstrucking.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary text-sm mb-1">Regional Office</h5>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Units 14-16, Iloilo Business Park,<br />
                      Mandurriao, Iloilo City, 5000 PH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-2xl text-white shadow-xl">
              <h4 className="text-lg font-bold mb-3">Immediate Assistance?</h4>
              <p className="text-blue-100 text-xs mb-6 leading-relaxed">Call our 24/7 hotline for live availability and project consulting.</p>
              <a href="tel:+639171234567" className="inline-flex items-center space-x-2 bg-primary px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all text-sm">
                <i className="fa-solid fa-headset"></i>
                <span>+63 917 123 4567</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 text-left">
              <h2 className="text-2xl font-black text-secondary mb-8">Tell Us About Your Requirement</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Full Name</label>
                    <input 
                      type="text" required 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 focus:border-primary focus:bg-white outline-none transition-all text-sm"
                      placeholder="Juan Dela Cruz"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Email</label>
                    <input 
                      type="email" required 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 focus:border-primary focus:bg-white outline-none transition-all text-sm"
                      placeholder="juan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Phone</label>
                    <input 
                      type="tel" required 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 focus:border-primary focus:bg-white outline-none transition-all text-sm"
                      placeholder="+63 9XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Primary Interest</label>
                    <select 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 focus:border-primary focus:bg-white outline-none appearance-none text-sm"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>Fleet Purchase</option>
                      <option>Heavy Equipment Rental</option>
                      <option>Logistics & Distribution</option>
                      <option>Maintenance Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Message</label>
                  <textarea 
                    required 
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 focus:border-primary focus:bg-white outline-none resize-none text-sm"
                    placeholder="Tell us about your project, shipment, or equipment needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto bg-primary text-white font-black px-10 py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg text-sm uppercase tracking-widest"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="h-[450px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm text-center">
            <i className="fa-solid fa-location-dot text-3xl text-primary mb-2"></i>
            <h4 className="font-black text-secondary text-sm">Princess Headquarters</h4>
            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Iloilo Business Park</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale opacity-30" alt="Map View" />
      </section>
    </div>
  );
};

export default ContactPage;
