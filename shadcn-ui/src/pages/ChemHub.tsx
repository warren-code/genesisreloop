import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, TrendingUp, Leaf, BarChart2 } from 'lucide-react';
import { ProcessType } from '@/types';

// Sample data for initial rendering
const sampleProcesses: ProcessType[] = [
  {
    id: "1",
    name: "PET to Polyester Fiber Conversion",
    description: "Process for converting PET plastic waste into polyester fibers for textile applications through washing, shredding, melting, and extrusion.",
    scientific_basis: "PET (polyethylene terephthalate) polymers are thermoplastics that can be melted and reformed without significant degradation. The process preserves the polymer chain structure while reforming it into filaments.",
    equipment_requirements: ["Plastic washing system", "Shredder/grinder", "Extruder", "Spinning machine", "Draw texturing machine"],
    safety_considerations: ["Ventilation for fumes", "Temperature monitoring systems", "Personal protective equipment", "Fire suppression systems"],
    startup_cost: 85000,
    operational_cost: 5000,
    estimated_revenue: 12000,
    required_skills: ["Polymer processing", "Machine operation", "Quality control", "Textile knowledge"],
    feedstock_ids: ["1"],
    product_ids: ["1"]
  },
  {
    id: "2",
    name: "Coffee Grounds Mushroom Cultivation",
    description: "Process for using spent coffee grounds as a substrate for growing gourmet mushrooms through pasteurization, inoculation, and controlled cultivation.",
    scientific_basis: "Coffee grounds contain cellulose, lignin, and other nutrients that mushroom mycelium can digest. The pasteurization process eliminates competing microorganisms while preserving the nutrients.",
    equipment_requirements: ["Pasteurization equipment", "Clean room/flow hood", "Temperature and humidity controllers", "Growing containers", "Mushroom spawn"],
    safety_considerations: ["Mold contamination prevention", "Proper ventilation", "Sterile procedures", "Food safety protocols"],
    startup_cost: 15000,
    operational_cost: 1200,
    estimated_revenue: 3500,
    required_skills: ["Mushroom cultivation", "Sterile procedures", "Environmental monitoring", "Biological knowledge"],
    feedstock_ids: ["2"],
    product_ids: ["2"]
  },
  {
    id: "3",
    name: "Glass to Construction Aggregates",
    description: "Process for crushing and processing waste glass into high-quality construction aggregates for concrete, asphalt, and landscaping applications.",
    scientific_basis: "Glass can be mechanically crushed and sized to create inert aggregates with excellent drainage properties and durability. The angular nature of crushed glass creates strong mechanical bonds in concrete.",
    equipment_requirements: ["Glass crusher/pulverizer", "Screening system", "Washing equipment", "Contaminant removal system", "Storage silos"],
    safety_considerations: ["Dust control measures", "Cut protection", "Hearing protection", "Machine guarding"],
    startup_cost: 120000,
    operational_cost: 7500,
    estimated_revenue: 15000,
    required_skills: ["Heavy equipment operation", "Material processing", "Quality testing", "Construction materials knowledge"],
    feedstock_ids: ["3"],
    product_ids: ["3"]
  },
  {
    id: "4",
    name: "Food Waste to Biogas",
    description: "Process for converting food waste into biogas through anaerobic digestion, capturing methane for energy generation.",
    scientific_basis: "Anaerobic microorganisms break down organic matter in oxygen-free environments, producing biogas (methane and CO2) as a byproduct. The process occurs in four stages: hydrolysis, acidogenesis, acetogenesis, and methanogenesis.",
    equipment_requirements: ["Waste preprocessing system", "Anaerobic digester", "Biogas storage", "Biogas conditioning system", "Generator set"],
    safety_considerations: ["Gas leak detection", "Explosion prevention", "Pathogen control", "Confined space protocols"],
    startup_cost: 250000,
    operational_cost: 12000,
    estimated_revenue: 30000,
    required_skills: ["Anaerobic digestion management", "Biogas systems", "Environmental monitoring", "Energy systems"],
    feedstock_ids: ["4"],
    product_ids: ["4"]
  }
];

const categories = [
  "All Processes",
  "Chemical",
  "Biological",
  "Mechanical",
  "Thermal",
  "Hybrid"
];

const ProcessCard = ({ process }: { process: ProcessType }) => {
  const difficultyColor = process.required_skills.length <= 2 ? "bg-green-500" : 
                          process.required_skills.length <= 4 ? "bg-amber-500" : "bg-red-500";
  
  const profitabilityRatio = process.estimated_revenue / process.operational_cost;
  const profitabilityPercentage = Math.min(100, (profitabilityRatio - 1) * 50);
  
  return (
    <Card className="overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{process.name}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{process.description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center p-2 rounded-md bg-slate-50">
            <TrendingUp className="h-4 w-4 text-amber-500 mb-1" />
            <span className="text-xs text-slate-600">ROI</span>
            <div className="mt-1 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full" 
                style={{ width: `${profitabilityPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center p-2 rounded-md bg-slate-50">
            <Leaf className="h-4 w-4 text-green-500 mb-1" />
            <span className="text-xs text-slate-600">Impact</span>
            <div className="mt-1 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full" 
                style={{ width: `${Math.random() * 30 + 70}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center p-2 rounded-md bg-slate-50">
            <BarChart2 className="h-4 w-4 text-blue-500 mb-1" />
            <span className="text-xs text-slate-600">Difficulty</span>
            <div className="mt-1 w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full ${difficultyColor} rounded-full`} 
                style={{ width: `${process.required_skills.length * 12.5 + 25}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm font-medium text-slate-700 mb-1">Equipment Needed:</div>
          <div className="flex flex-wrap gap-2">
            {process.equipment_requirements.slice(0, 2).map((item, i) => (
              <Badge key={i} variant="outline" className="bg-slate-50">
                {item}
              </Badge>
            ))}
            {process.equipment_requirements.length > 2 && (
              <Badge variant="outline" className="bg-slate-50">
                +{process.equipment_requirements.length - 2} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-slate-500">Startup Cost</div>
            <div className="font-semibold">${process.startup_cost.toLocaleString()}</div>
          </div>
          <Button>
            View Process
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ChemHubPage = () => {
  const [processes, setProcesses] = useState<ProcessType[]>(sampleProcesses);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Processes');
  
  const filteredProcesses = processes.filter(process => {
    const matchesSearch = searchTerm === '' || 
      process.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      process.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    // This is a placeholder filter since our sample data doesn't have categories
    // In a real implementation, this would filter by the process category
    const matchesCategory = activeCategory === 'All Processes'; 
      
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ChemHub Process Library</h1>
            <p className="text-lg text-slate-600">
              Discover scientifically-backed processes for transforming waste materials into valuable products
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search processes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>

          <Tabs defaultValue="All Processes" className="mb-8">
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
                <div key={index} className="bg-slate-100 rounded-lg h-80"></div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProcesses.map((process) => (
                  <ProcessCard key={process.id} process={process} />
                ))}
              </div>
              
              {filteredProcesses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-slate-500">No processes match your search.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ChemHubPage;