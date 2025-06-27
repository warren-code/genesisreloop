import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Leaf, 
  TrendingUp, 
  BarChart2
} from 'lucide-react';
import { getFeaturedValueChains } from '@/lib/supabase';
import { ValueChain } from '@/types';

const ValueChainCard = ({ valueChain }: { valueChain: ValueChain }) => {
  return (
    <Card className="group overflow-hidden border border-slate-200 bg-white/60 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={valueChain.image} 
          alt={valueChain.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge 
          className="absolute top-2 right-2 bg-white/90 text-slate-800 backdrop-blur-sm"
        >
          {valueChain.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{valueChain.name}</h3>
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">{valueChain.description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center p-2 rounded-md bg-slate-50">
            <TrendingUp className="h-4 w-4 text-amber-500 mb-1" />
            <span className="text-xs text-slate-600">Profit</span>
            <div className="mt-1 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full" 
                style={{ width: `${valueChain.profitability * 10}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center p-2 rounded-md bg-slate-50">
            <Leaf className="h-4 w-4 text-green-500 mb-1" />
            <span className="text-xs text-slate-600">Sustain</span>
            <div className="mt-1 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full" 
                style={{ width: `${valueChain.sustainability * 10}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center p-2 rounded-md bg-slate-50">
            <BarChart2 className="h-4 w-4 text-blue-500 mb-1" />
            <span className="text-xs text-slate-600">Difficulty</span>
            <div className="mt-1 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full" 
                style={{ width: `${valueChain.difficulty * 10}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <Link to={`/value-chain/${valueChain.id}`}>
          <Button variant="outline" className="w-full justify-between">
            Explore Chain
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

// Sample featured value chains data for initial rendering
const sampleValueChains: ValueChain[] = [
  {
    id: "1",
    name: "PET Plastic to Polyester Fiber",
    category: "Plastics",
    description: "Transform discarded PET bottles into high-quality polyester fibers for textile applications.",
    image: "/assets/images/value-chains/pet-to-polyester.jpg",
    profitability: 8,
    sustainability: 9,
    difficulty: 6,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Coffee Grounds to Mushrooms",
    category: "Organics",
    description: "Use spent coffee grounds as a substrate for growing gourmet mushrooms.",
    image: "/assets/images/value-chains/coffee-to-mushrooms.jpg",
    profitability: 7,
    sustainability: 10,
    difficulty: 4,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Glass to Construction Aggregates",
    category: "Glass",
    description: "Process waste glass into construction aggregates for building applications.",
    image: "/assets/images/value-chains/glass-to-aggregates.jpg",
    profitability: 6,
    sustainability: 8,
    difficulty: 5,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Food Waste to Biogas",
    category: "Organics",
    description: "Convert food waste into biogas through anaerobic digestion for energy generation.",
    image: "/assets/images/value-chains/food-to-biogas.jpg",
    profitability: 7,
    sustainability: 9,
    difficulty: 7,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Textile Waste to Acoustic Panels",
    category: "Textiles",
    description: "Transform discarded fabrics into high-performance acoustic insulation panels.",
    image: "/assets/images/value-chains/textile-to-panels.jpg",
    profitability: 8,
    sustainability: 7,
    difficulty: 5,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "Cooking Oil to Biodiesel",
    category: "Organics",
    description: "Convert used cooking oil into biodiesel fuel through transesterification.",
    image: "/assets/images/value-chains/oil-to-biodiesel.jpg",
    profitability: 7,
    sustainability: 8,
    difficulty: 6,
    featured: true,
    created_at: new Date().toISOString()
  }
];

const FeaturedValueChains = () => {
  const [valueChains, setValueChains] = useState<ValueChain[]>(sampleValueChains);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchValueChains = async () => {
      try {
        const { data, error } = await getFeaturedValueChains();
        if (error) throw error;
        
        if (data && data.length > 0) {
          setValueChains(data);
        }
      } catch (error) {
        console.error("Error fetching value chains:", error);
        // Keep sample data if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchValueChains();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Value Chains</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover profitable ways to transform waste into valuable products through our curated collection of circular economy value chains.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-slate-100 rounded-lg h-72"></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueChains.map((chain) => (
                <ValueChainCard key={chain.id} valueChain={chain} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/value-chains">
                <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                  View All Value Chains
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedValueChains;