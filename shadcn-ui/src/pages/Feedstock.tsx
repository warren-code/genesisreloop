import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter } from 'lucide-react';
import { FeedstockType } from '@/types';

// Sample data for initial rendering
const sampleFeedstocks: FeedstockType[] = [
  {
    id: "1",
    name: "PET Plastic Bottles",
    description: "Post-consumer polyethylene terephthalate bottles, typically used for beverages.",
    image: "/assets/images/feedstock/pet-bottles.jpg",
    source_types: ["Post-consumer waste", "Municipal recycling"],
    collection_methods: ["Curbside recycling", "Deposit return systems", "Waste sorting"],
    storage_requirements: "Dry, clean, preferably compressed",
    value_chain_ids: ["1", "8", "12"]
  },
  {
    id: "2",
    name: "Spent Coffee Grounds",
    description: "Used coffee grounds from cafes, restaurants, and home brewing.",
    image: "/assets/images/feedstock/coffee-grounds.jpg",
    source_types: ["Food service waste", "Household waste"],
    collection_methods: ["Direct café partnerships", "Community collection points"],
    storage_requirements: "Well-drained, in breathable containers; use within 24 hours or refrigerate/freeze",
    value_chain_ids: ["2", "15", "23"]
  },
  {
    id: "3",
    name: "Glass Cullet",
    description: "Crushed or broken waste glass, sorted by color.",
    image: "/assets/images/feedstock/glass-cullet.jpg",
    source_types: ["Municipal recycling", "Post-industrial waste"],
    collection_methods: ["Glass recycling bins", "Material recovery facilities"],
    storage_requirements: "Dry, sorted by color when possible",
    value_chain_ids: ["3", "19", "34"]
  },
  {
    id: "4",
    name: "Food Waste",
    description: "Organic waste from food processing, preparation, and post-consumer sources.",
    image: "/assets/images/feedstock/food-waste.jpg",
    source_types: ["Restaurant waste", "Household waste", "Food processing waste", "Agricultural waste"],
    collection_methods: ["Separate organics collection", "On-site composting systems"],
    storage_requirements: "Sealed containers, temperature-controlled to minimize odors",
    value_chain_ids: ["4", "16", "27"]
  },
  {
    id: "5",
    name: "Used Cooking Oil",
    description: "Vegetable oils and animal fats used for food preparation.",
    image: "/assets/images/feedstock/cooking-oil.jpg",
    source_types: ["Restaurant waste", "Food processing waste", "Household waste"],
    collection_methods: ["Dedicated collection barrels", "Grease collection services"],
    storage_requirements: "Sealed containers at room temperature, away from direct sunlight",
    value_chain_ids: ["6", "21", "29"]
  },
  {
    id: "6",
    name: "Textile Scraps",
    description: "Pre-consumer and post-consumer fabric waste.",
    image: "/assets/images/feedstock/textile-scraps.jpg",
    source_types: ["Garment manufacturing waste", "Post-consumer clothing", "Industrial textiles"],
    collection_methods: ["Clothing collection bins", "Factory partnerships", "Thrift store rejects"],
    storage_requirements: "Dry, sorted by material type when possible",
    value_chain_ids: ["5", "14", "31"]
  }
];

const categories = [
  "All Categories",
  "Plastics",
  "Organics",
  "Textiles",
  "Glass",
  "Metals",
  "Paper",
  "Electronics"
];

const FeedstockCard = ({ feedstock }: { feedstock: FeedstockType }) => {
  return (
    <Card className="overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={feedstock.image} 
          alt={feedstock.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{feedstock.name}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{feedstock.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {feedstock.source_types.slice(0, 2).map((source, i) => (
            <Badge key={i} variant="secondary" className="bg-slate-100">
              {source}
            </Badge>
          ))}
          {feedstock.source_types.length > 2 && (
            <Badge variant="secondary" className="bg-slate-100">
              +{feedstock.source_types.length - 2} more
            </Badge>
          )}
        </div>
        
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

const FeedstockPage = () => {
  const [feedstocks, setFeedstocks] = useState<FeedstockType[]>(sampleFeedstocks);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Categories');
  
  // Filter feedstocks based on search term and category
  const filteredFeedstocks = feedstocks.filter(feedstock => {
    const matchesSearch = searchTerm === '' || 
      feedstock.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      feedstock.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === 'All Categories' || 
      feedstock.source_types.some(type => type.includes(activeCategory));
      
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Feedstock Library</h1>
            <p className="text-lg text-slate-600">
              Explore waste materials that can be transformed into valuable products through our circular economy value chains.
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search feedstock materials..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <Tabs defaultValue="All Categories" className="mb-8">
            <TabsList className="mb-4 flex flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="mb-2"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-slate-100 rounded-lg h-72"></div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFeedstocks.map((feedstock) => (
                  <FeedstockCard key={feedstock.id} feedstock={feedstock} />
                ))}
              </div>
              
              {filteredFeedstocks.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-slate-500">No feedstock materials match your search.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FeedstockPage;