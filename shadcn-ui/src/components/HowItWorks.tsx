import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, BarChart2, ArrowRightLeft } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discover Value Chains",
      description: "Explore our comprehensive library of circular economy processes tailored to various waste streams."
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Analyze & Select",
      description: "Review profitability, sustainability metrics, and requirements to find the perfect match for your resources."
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8" />,
      title: "Connect & Trade",
      description: "Connect with waste providers, buyers, and other node operators through our integrated marketplace."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Build Your Node",
      description: "Implement processes, join the community network, and become part of the circular economy revolution."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          ReLoop provides everything you need to transform waste into valuable products and build a sustainable circular economy business
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-full p-6 mb-4 shadow-sm border border-slate-200">
              <div className="text-primary">{step.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-slate-600">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute transform translate-x-32 translate-y-12">
                <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M0 10 H90 M80 2 L98 10 L80 18" 
                    stroke="currentColor" 
                    className="text-slate-300"
                    strokeWidth="2" 
                    fill="none" 
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};