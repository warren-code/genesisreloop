import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Tag } from 'lucide-react';
import { Product } from '@/types';

// Sample data for initial rendering
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "EcoFiber Polyester Yarn",
    description: "High-quality recycled polyester yarn made from post-consumer PET bottles. Suitable for textile applications.",
    image: "/assets/images/products/polyester-yarn.jpg",
    applications: ["Clothing manufacturing", "Home textiles", "Industrial fabrics"],
    market_value: {
      min: 2.50,
      max: 4.00
    },
    certifications: ["GRS Certified", "OEKO-TEX Standard 100"],
    physical_properties: {
      "Tensile Strength": "High",
      "Elasticity": "Medium",
      "Moisture Absorption": "Low"
    },
    chemical_properties: {
      "Melting Point": "260°C",
      "Resistance to Acids": "Good",
      "Resistance to Alkalis": "Excellent"
    },
    process_ids: ["1"]
  },
  {
    id: "2",
    name: "Gourmet Oyster Mushrooms",
    description: "Fresh, organically grown oyster mushrooms cultivated on recycled coffee grounds.",
    image: "/assets/images/products/oyster-mushrooms.jpg",
    applications: ["Culinary use", "Restaurant supply", "Farmers markets"],
    market_value: {
      min: 12.00,
      max: 18.00
    },
    certifications: ["Organic", "Local Food"],
    physical_properties: {
      "Shelf Life": "7-10 days refrigerated",
      "Color": "Grey to light brown",
      "Texture": "Firm, velvet-like"
    },
    chemical_properties: {
      "Protein Content": "High",
      "Vitamin D": "Present",
      "Antioxidants": "High"
    },
    process_ids: ["2"]
  },
  {
    id: "3",
    name: "GlassSand Construction Aggregate",
    description: "Premium recycled glass aggregate for construction applications, providing excellent drainage and visual appeal.",
    image: "/assets/images/products/glass-aggregate.jpg",
    applications: ["Concrete production", "Landscaping", "Drainage systems", "Decorative applications"],
    market_value: {
      min: 45.00,
      max: 65.00
    },
    certifications: ["LEED Compliant", "Recycled Content Certified"],
    physical_properties: {
      "Particle Size": "1-5mm",
      "Density": "1.7-1.9 g/cm³",
      "Hardness": "High"
    },
    chemical_properties: {
      "Composition": "Soda-lime glass",
      "pH": "Neutral",
      "Chemical Stability": "High"
    },
    process_ids: ["3"]
  },
  {
    id: "4",
    name: "BioPower Biogas",
    description: "Renewable biogas produced from food waste through anaerobic digestion, suitable for energy generation.",
    image: "/assets/images/products/biogas.jpg",
    applications: ["Electricity generation", "Heating", "Vehicle fuel", "Industrial processes"],
    market_value: {
      min: 0.05,
      max: 0.10
    },
    certifications: ["Renewable Energy Certified", "Carbon Reduction Verified"],
    physical_properties: {
      "Energy Content": "21-23 MJ/m³",
      "Methane Content": "55-70%",
      "CO2 Content": "30-45%"
    },
    chemical_properties: {
      "Hydrogen Sulfide": "<100ppm",
      "Moisture": "Low",
      "Siloxanes": "Removed"
    },
    process_ids: ["4"]
  },
  {
    id: "5",
    name: "EcoPanel Acoustic Insulation",
    description: "High-performance acoustic insulation panels made from recycled textile waste, ideal for sound management.",
    image: "/assets/images/products/acoustic-panels.jpg",
    applications: ["Commercial interiors", "Home studios", "Performance venues", "Office spaces"],
    market_value: {
      min: 35.00,
      max: 60.00
    },
    certifications: ["Low VOC Certified", "Recycled Content Verified"],
    physical_properties: {
      "NRC Rating": "0.85-0.95",
      "Thickness": "30-50mm",
      "Density": "80-120 kg/m³"
    },
    chemical_properties: {
      "Fire Resistance": "Class B",
      "VOC Emissions": "Very Low",
      "Mold Resistance": "High"
    },
    process_ids: ["5"]
  },
  {
    id: "6",
    name: "EcoFuel Biodiesel",
    description: "Clean-burning biodiesel fuel produced from recycled cooking oils, suitable for diesel engines.",
    image: "/assets/images/products/biodiesel.jpg",
    applications: ["Transportation", "Agricultural equipment", "Industrial machinery", "Generators"],
    market_value: {
      min: 3.50,
      max: 5.00
    },
    certifications: ["ASTM D6751 Compliant", "Carbon Reduction Verified"],
    physical_properties: {
      "Cetane Number": "50-60",
      "Viscosity": "4-5 mm²/s",
      "Flash Point": ">130°C"
    },
    chemical_properties: {
      "Sulfur Content": "<10 ppm",
      "Oxygen Content": "10-12%",
      "Biodegradability": ">98% in 21 days"
    },
    process_ids: ["6"]
  }
];

const categories = [
  "All Products",
  "Textiles",
  "Food",
  "Construction",
  "Energy",
  "Materials",
  "Chemicals"
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {product.certifications.slice(0, 1).map((cert, i) => (
            <Badge key={i} className="bg-green-500">
              {cert}
            </Badge>
          ))}
          {product.certifications.length > 1 && (
            <Badge className="bg-green-500">
              +{product.certifications.length - 1}
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Tag className="h-4 w-4 text-slate-500 mr-2" />
            <span className="text-sm text-slate-700">Applications</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.applications.slice(0, 2).map((app, i) => (
              <Badge key={i} variant="secondary" className="bg-slate-100">
                {app}
              </Badge>
            ))}
            {product.applications.length > 2 && (
              <Badge variant="secondary" className="bg-slate-100">
                +{product.applications.length - 2} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-slate-500">Market Value</div>
            <div className="font-semibold">
              ${product.market_value.min.toFixed(2)} - ${product.market_value.max.toFixed(2)}
              <span className="text-xs text-slate-500 ml-1">
                {product.id === "4" ? "/m³" : "/kg"}
              </span>
            </div>
          </div>
          <Button>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const LoopCraftedPage = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Products');
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    // This is a placeholder filter since our sample data doesn't have explicit categories
    // In a real implementation, this would filter by product category
    const matchesCategory = activeCategory === 'All Products' ||
      (activeCategory === 'Textiles' && product.id === "1") ||
      (activeCategory === 'Food' && product.id === "2") ||
      (activeCategory === 'Construction' && product.id === "3") ||
      (activeCategory === 'Energy' && (product.id === "4" || product.id === "6")) ||
      (activeCategory === 'Materials' && product.id === "5");
      
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-100 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">LoopCrafted Products</h1>
            <p className="text-lg text-slate-600">
              Discover high-quality products made from transformed waste materials through our circular economy value chains.
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Search products..."
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

          <Tabs defaultValue="All Products" className="mb-8">
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
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-slate-500">No products match your search.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoopCraftedPage;