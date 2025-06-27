import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Circular icons floating in the background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm border border-white/20"
            style={{ 
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">
            ReLoop: Transform Waste into Value
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10">
            Join the circular economy revolution with our marketplace of 100+ value chains
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/value-chains">
              <Button size="lg" className="bg-gradient-to-r from-teal-700 to-blue-700 text-white px-6 hover:from-teal-600 hover:to-blue-600">
                Explore Value Chains
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline" className="px-6 border-slate-300">
                Join the Community
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
              <img 
                src="/assets/images/hero-illustration.png" 
                alt="ReLoop Platform Interface"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,42.7C672,43,768,53,864,53.3C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;