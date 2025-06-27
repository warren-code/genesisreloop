import React, { useState } from 'react';
import { ValueChainCard } from './ValueChainCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { featuredValueChains } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

export const FeaturedValueChains: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Value Chains</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Explore our curated selection of innovative circular economy value chains ready for implementation
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {featuredValueChains.map((chain, index) => (
          <motion.div
            key={chain.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ValueChainCard 
              valueChain={chain} 
              isActive={hoveredIndex === index}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg" variant="outline" className="group">
          View 55+ More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

// Add mock data to be imported
if (typeof featuredValueChains === 'undefined') {
  const featuredValueChains = [
    {
      id: "1",
      name: "PET Plastic to Textile",
      category: "Plastic Recycling",
      image: "/assets/value-chains/pet-textile.jpg",
      profitabilityScore: 85,
      sustainabilityScore: 90,
      difficultyScore: 60,
      description: "Transform PET plastic waste into high-quality polyester textile fibers"
    },
    {
      id: "2",
      name: "Coffee Grounds to Mushrooms",
      category: "Food Waste",
      image: "/assets/value-chains/coffee-mushrooms.jpg",
      profitabilityScore: 70,
      sustainabilityScore: 95,
      difficultyScore: 40,
      description: "Use spent coffee grounds as substrate for gourmet mushroom cultivation"
    },
    {
      id: "3",
      name: "Sawdust to Biochar",
      category: "Wood Waste",
      image: "/assets/value-chains/sawdust-biochar.jpg",
      profitabilityScore: 65,
      sustainabilityScore: 90,
      difficultyScore: 55,
      description: "Convert sawdust waste into biochar for soil amendment and carbon sequestration"
    },
    {
      id: "4",
      name: "Food Waste to Compost",
      category: "Food Waste",
      image: "/assets/value-chains/food-compost.jpg",
      profitabilityScore: 60,
      sustainabilityScore: 85,
      difficultyScore: 30,
      description: "Process food waste into high-quality compost for agricultural applications"
    },
    {
      id: "5",
      name: "Used Cooking Oil to Biodiesel",
      category: "Food Waste",
      image: "/assets/value-chains/oil-biodiesel.jpg",
      profitabilityScore: 75,
      sustainabilityScore: 80,
      difficultyScore: 65,
      description: "Convert used cooking oil into biodiesel fuel for transportation"
    },
    {
      id: "6",
      name: "Glass Waste to Construction Materials",
      category: "Glass Recycling",
      image: "/assets/value-chains/glass-construction.jpg",
      profitabilityScore: 70,
      sustainabilityScore: 75,
      difficultyScore: 60,
      description: "Process waste glass into construction materials like countertops and tiles"
    },
    {
      id: "7",
      name: "Textile Waste to Insulation",
      category: "Textile Recycling",
      image: "/assets/value-chains/textile-insulation.jpg",
      profitabilityScore: 65,
      sustainabilityScore: 85,
      difficultyScore: 50,
      description: "Convert textile waste into thermal and acoustic insulation materials"
    },
    {
      id: "8",
      name: "Agricultural Waste to Packaging",
      category: "Agricultural Waste",
      image: "/assets/value-chains/agri-packaging.jpg",
      profitabilityScore: 60,
      sustainabilityScore: 90,
      difficultyScore: 70,
      description: "Transform agricultural waste like rice husks into biodegradable packaging"
    },
    {
      id: "9",
      name: "E-waste to Precious Metals",
      category: "Electronic Waste",
      image: "/assets/value-chains/ewaste-metals.jpg",
      profitabilityScore: 90,
      sustainabilityScore: 70,
      difficultyScore: 85,
      description: "Recover gold, silver, and other precious metals from electronic waste"
    },
    {
      id: "10",
      name: "Construction Debris to Aggregate",
      category: "Construction Waste",
      image: "/assets/value-chains/debris-aggregate.jpg",
      profitabilityScore: 65,
      sustainabilityScore: 75,
      difficultyScore: 45,
      description: "Process construction and demolition waste into recycled aggregate for new construction"
    }
  ];
}