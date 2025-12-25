
import React, { useState } from 'react';
import { TruckType } from '../types';

enum QuoteService {
  LOGISTICS = 'Logistics / Shipping',
  FLEET = 'Fleet Purchase / Rental'
}

enum CargoCategory {
  GENERAL = 'General Goods',
  PERISHABLES = 'Perishables (Cold Chain)',
  MACHINERY = 'Machinery / Equipment'
}

const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState<QuoteService>(QuoteService.LOGISTICS);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // Logistics Fields
    cargoCategory: CargoCategory.GENERAL,
    cargoDescription: '',
    weightVolume: '',
    origin: '',
    destination: '',
    date: '',
    isSelfOwned: 'No',
    specialHandling: false,
    // Cold Chain Specific
    tempReq: 'Chilled (0°C to 4°C)',
    // Fleet Specific
    equipmentType: 'Any',
    quantity: '1',
    acquisitionMode: 'Buy',
    condition: 'New'
  });

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.phone;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const renderStepper = () => (
    <div className="flex items-center justify-between mb-12 max-w-xl mx-auto px-4">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center relative">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg transition-all duration-500 border-4 ${
              currentStep >= step 
              ? 'bg-primary border-primary text-white shadow-lg shadow-red-500/30' 
              : 'bg-white border-gray-200 text-gray-300'
            }`}>
              {currentStep > step ? <i className="fa-solid fa-check"></i> : step}
            </div>
            <span className={`absolute -bottom-7 text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors ${
              currentStep === step ? 'text-secondary' : 'text-gray-400'
            }`}>
              {step === 1 ? 'Identity' : step === 2 ? 'Service' : 'Requirements'}
            </span>
          </div>
          {step < 3 && (
            <div className="flex-grow h-1 mx-4 bg-gray-200 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-primary transition-all duration-700"
                style={{ width: currentStep > step ? '100%' : '0%' }}
              ></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-xl w-full bg-white p-10 rounded-3xl shadow-2xl text-center border border-gray-100 animate-fadeInUp">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            <i className="fa-solid fa-check"></i>
          </div>
          <h2 className="text-3xl font-black text-secondary mb-4">Request Transmitted</h2>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed text-left bg-gray-50 p-6 rounded-2xl border border-gray-100">
            Thank you, <span className="font-bold text-secondary">{formData.name}</span>. Your request for <span className="text-primary font-bold">{serviceType}</span> has been received. Our specialists will review your specifications and contact you at <span className="font-bold">{formData.phone}</span> within the next 2 hours.
          </p>
          <button 
            onClick={() => window.location.hash = '#/'}
            className="w-full bg-secondary text-white font-black px-10 py-4 rounded-xl hover:bg-primary transition-all text-sm shadow-lg active:scale-95"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="gradient-bg py-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Precision Quote</h1>
        <p className="text-blue-100 font-medium max-w-2xl mx-auto">Complete the 3-step form below to receive a customized proposal for your fleet or logistics operations.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16">
        <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 relative">
          
          {renderStepper()}

          <form onSubmit={handleSubmit} className="mt-16 space-y-8 min-h-[400px]">
            
            {/* Step 1: Identity */}
            {currentStep === 1 && (
              <div className="animate-fadeIn space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-blue-50 text-secondary rounded-xl"><i className="fa-solid fa-user-gear text-xl"></i></div>
                  <h2 className="text-2xl font-black text-secondary">Who are we contacting?</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" name="name" required
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                      placeholder="Juan Dela Cruz"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                      <input 
                        type="email" name="email" required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                        placeholder="juan@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Number</label>
                      <input 
                        type="tel" name="phone" required
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                        placeholder="+63 9XX"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {currentStep === 2 && (
              <div className="animate-fadeIn space-y-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-red-50 text-primary rounded-xl"><i className="fa-solid fa-briefcase text-xl"></i></div>
                  <h2 className="text-2xl font-black text-secondary">Choose Service Division</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.values(QuoteService).map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setServiceType(service)}
                      className={`relative p-8 rounded-3xl border-2 text-left transition-all group ${
                        serviceType === service 
                        ? 'bg-secondary border-secondary text-white shadow-xl translate-y-[-4px]' 
                        : 'bg-white border-gray-100 text-gray-500 hover:border-secondary/20 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-2xl transition-colors ${
                        serviceType === service ? 'bg-white/20 text-white' : 'bg-gray-100 text-secondary group-hover:bg-secondary group-hover:text-white'
                      }`}>
                        <i className={service === QuoteService.LOGISTICS ? 'fa-solid fa-truck-ramp-box' : 'fa-solid fa-handshake-simple'}></i>
                      </div>
                      <h3 className="text-xl font-black mb-2">{service}</h3>
                      <p className={`text-xs leading-relaxed ${serviceType === service ? 'text-blue-100' : 'text-gray-400'}`}>
                        {service === QuoteService.LOGISTICS 
                          ? 'Moving cargo across regions with dry, bulk, or cold chain options.' 
                          : 'Investing in or renting heavy-duty assets for your project fleet.'}
                      </p>
                      {serviceType === service && (
                        <div className="absolute top-4 right-4 bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
                          <i className="fa-solid fa-check text-[10px]"></i>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Requirements */}
            {currentStep === 3 && (
              <div className="animate-fadeIn space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl"><i className="fa-solid fa-clipboard-list text-xl"></i></div>
                  <h2 className="text-2xl font-black text-secondary">Define Specifications</h2>
                </div>

                {serviceType === QuoteService.LOGISTICS ? (
                  <div className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Cargo Category</label>
                        <select 
                          name="cargoCategory"
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary appearance-none"
                          value={formData.cargoCategory}
                          onChange={handleInputChange}
                        >
                          {Object.values(CargoCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Est. Weight/Volume</label>
                        <input 
                          type="text" name="weightVolume" required placeholder="e.g. 15 Tons"
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                          value={formData.weightVolume}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {formData.cargoCategory === CargoCategory.PERISHABLES && (
                      <div className="bg-blue-50/50 p-6 rounded-3xl border-2 border-blue-100 animate-fadeInDown">
                        <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center mb-3">
                          <i className="fa-solid fa-snowflake mr-2"></i> Cold Chain Requirements
                        </label>
                        <select 
                          name="tempReq"
                          className="w-full bg-white border-2 border-blue-100 rounded-2xl px-6 py-4 outline-none transition-all text-sm font-black text-secondary"
                          value={formData.tempReq}
                          onChange={handleInputChange}
                        >
                          <option>Frozen (-18°C or below)</option>
                          <option>Chilled (0°C to 4°C)</option>
                          <option>Custom Pharmaceutical</option>
                        </select>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Origin (Pickup)</label>
                        <input 
                          type="text" name="origin" required
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                          value={formData.origin}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Destination</label>
                        <input 
                          type="text" name="destination" required
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                          value={formData.destination}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Equipment Type</label>
                        <select 
                          name="equipmentType"
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary appearance-none"
                          value={formData.equipmentType}
                          onChange={handleInputChange}
                        >
                          <option value="Any">General Commercial Fleet</option>
                          {Object.values(TruckType).map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Unit Quantity</label>
                        <input 
                          type="number" name="quantity" min="1" required
                          className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                          value={formData.quantity}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Acquisition</label>
                        <div className="flex bg-gray-50 p-1.5 rounded-2xl border-2 border-gray-100">
                          {['Buy', 'Rent', 'Lease'].map(mode => (
                            <button
                              key={mode} type="button"
                              onClick={() => setFormData(prev => ({ ...prev, acquisitionMode: mode }))}
                              className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                formData.acquisitionMode === mode ? 'bg-white text-secondary shadow-sm' : 'text-gray-400 hover:text-gray-600'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Preferred Condition</label>
                        <div className="flex bg-gray-50 p-1.5 rounded-2xl border-2 border-gray-100">
                          {['New', 'Used'].map(cond => (
                            <button
                              key={cond} type="button"
                              onClick={() => setFormData(prev => ({ ...prev, condition: cond }))}
                              className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                formData.condition === cond ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'
                              }`}
                            >
                              {cond}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Target Date</label>
                    <input 
                      type="date" name="date" required
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Special Requirements?</label>
                    <input 
                      type="text" name="cargoDescription" placeholder="e.g. Rush delivery, Insurance..."
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-sm font-bold text-secondary"
                      value={formData.cargoDescription}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-10 flex flex-col-reverse sm:flex-row gap-4 border-t border-gray-50">
              {currentStep > 1 && (
                <button 
                  type="button" onClick={prevStep}
                  className="flex-1 sm:flex-none px-12 py-5 rounded-2xl font-black text-gray-400 uppercase tracking-widest hover:text-secondary transition-all"
                >
                  <i className="fa-solid fa-arrow-left-long mr-3"></i> Back
                </button>
              )}
              
              <div className="flex-grow"></div>
              
              {currentStep < 3 ? (
                <button 
                  type="button" onClick={nextStep}
                  disabled={!validateCurrentStep()}
                  className="w-full sm:w-auto px-16 py-5 rounded-2xl bg-secondary text-white font-black uppercase tracking-widest hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center"
                >
                  Continue <i className="fa-solid fa-arrow-right-long ml-4"></i>
                </button>
              ) : (
                <button 
                  type="submit" disabled={loading}
                  className="w-full sm:w-auto px-16 py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-widest hover:bg-red-700 disabled:opacity-50 transition-all shadow-xl shadow-red-500/20 active:scale-95 flex items-center justify-center"
                >
                  {loading ? (
                    <><i className="fa-solid fa-spinner fa-spin mr-3"></i> Transmitting...</>
                  ) : (
                    <>Submit Quote <i className="fa-solid fa-paper-plane ml-4"></i></>
                  )}
                </button>
              )}
            </div>
          </form>

          <div className="mt-12 flex items-center justify-center space-x-6 text-gray-300">
            <div className="flex items-center space-x-2"><i className="fa-solid fa-shield-halved text-xs"></i> <span className="text-[9px] font-black uppercase tracking-widest">SSL Encrypted</span></div>
            <div className="flex items-center space-x-2"><i className="fa-solid fa-clock text-xs"></i> <span className="text-[9px] font-black uppercase tracking-widest">2-Hour Response</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
