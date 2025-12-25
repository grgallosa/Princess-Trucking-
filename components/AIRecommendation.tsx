
import React, { useState } from 'react';
import { getFleetRecommendation } from '../services/geminiService';

const AIRecommendation: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ recommendation: string; reasoning: string; suitableTruckType: string } | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    setLoading(true);
    const recommendation = await getFleetRecommendation(description);
    setResult(recommendation);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-left">
        <div className="md:w-1/2">
          <div className="inline-block bg-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">AI Smart Advisor</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Identify Your Ideal Fleet Asset</h2>
          <p className="text-blue-100 mb-6 text-lg">Describe your project, cargo, or operational needs. Our AI assistant will recommend the most suitable heavy equipment or transport solution.</p>
          
          <form onSubmit={handleRecommend} className="space-y-4">
            <textarea
              className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Example: I need to clear 5 hectares of land for a new subdivision, or I need to move 20 tons of cold storage..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button 
              disabled={loading}
              className="w-full md:w-auto bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center space-x-3 shadow-lg"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  <span>Analyzing Requirements...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-robot"></i>
                  <span>Get Recommendation</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="md:w-1/2 flex items-center justify-center w-full">
          {result ? (
            <div className="bg-white text-secondary p-8 rounded-2xl shadow-xl w-full animate-fadeInUp">
              <div className="flex items-center space-x-3 mb-4">
                <i className="fa-solid fa-circle-check text-green-500 text-2xl"></i>
                <h3 className="text-xl font-bold">Recommended Asset</h3>
              </div>
              <p className="text-2xl font-black text-primary mb-3">{result.suitableTruckType}</p>
              <p className="text-gray-700 mb-6 italic">"{result.recommendation}"</p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-secondary text-sm">
                <p className="font-bold text-secondary mb-1">Expert Analysis:</p>
                <p className="text-gray-600 leading-relaxed">{result.reasoning}</p>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-col items-center opacity-40">
              <i className="fa-solid fa-gears text-9xl mb-4"></i>
              <p className="text-sm uppercase font-bold tracking-widest">Ready for Analysis</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIRecommendation;
