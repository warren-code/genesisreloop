import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Globe, Leaf, Briefcase } from 'lucide-react';

export const PlatformStats: React.FC = () => {
  const stats = [
    {
      icon: <Activity className="h-6 w-6" />,
      label: "Value Chains",
      value: "100+",
      description: "Transformation processes"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      label: "Active Nodes",
      value: "240",
      description: "Across 36 countries"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      label: "Job Opportunities",
      value: "1,200+",
      description: "Circular economy careers"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      label: "Waste Streams",
      value: "120",
      description: "Materials being recycled"
    }
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Statistics</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ReLoop is growing rapidly as the leading circular economy platform
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                {stat.icon}
              </div>
              
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.6 + index * 0.1
                }}
                className="text-center"
              >
                <span className="block text-3xl font-bold text-slate-900 mb-1">{stat.value}</span>
                <span className="block text-sm text-slate-500 font-medium">{stat.label}</span>
                <span className="block text-xs text-slate-400 mt-1">{stat.description}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};