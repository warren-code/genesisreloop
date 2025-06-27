import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Check, ChevronDown, Filter, MapPin, Search, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeedstockPlaceholder from '@/components/placeholders/FeedstockPlaceholder';
import ProductPlaceholder from '@/components/placeholders/ProductPlaceholder';

// Type definitions
interface Product {
  id: string;
  name: string;
  description: string;
  type: 'feedstock' | 'loopcrafted';
  category: string;
  price: number;
  unit: string;
  location: string;
  image: string;
  rating: number;
  seller: {
    name: string;
    verified: boolean;
    rating: number;
  };
  available: number;
  sustainability: number; // 0-100
  tags: string[];
}

const Marketplace: React.FC = () => {
  // State for filtering and search
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [sustainabilityFilter, setSustainabilityFilter] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('recommended');
  const [quoteDialogOpen, setQuoteDialogOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Sample data for marketplace products
  const [products, setProducts] = useState<Product[]>([
    // Feedstock products
    {
      id: 'fs-001',
      name: 'Mixed Plastic Waste',
      description: 'Clean post-consumer plastic waste, primarily PET and HDPE. Sorted and washed.',
      type: 'feedstock',
      category: 'Plastics',
      price: 120,
      unit: 'per tonne',
      location: 'Portland, OR',
      image: '/assets/marketplace/mixed-plastic-waste.jpg',
      rating: 4.2,
      seller: {
        name: 'EcoReclaim Solutions',
        verified: true,
        rating: 4.8
      },
      available: 25000,
      sustainability: 85,
      tags: ['PET', 'HDPE', 'Post-consumer']
    },
    {
      id: 'fs-002',
      name: 'Textile Waste Fibers',
      description: 'Post-industrial textile waste, primarily cotton and polyester blends.',
      type: 'feedstock',
      category: 'Textiles',
      price: 200,
      unit: 'per tonne',
      location: 'Charlotte, NC',
      image: '/assets/marketplace/textile-waste.jpg',
      rating: 4.0,
      seller: {
        name: 'FiberCycle Industries',
        verified: true,
        rating: 4.5
      },
      available: 12000,
      sustainability: 90,
      tags: ['Cotton', 'Polyester', 'Post-industrial']
    },
    {
      id: 'fs-003',
      name: 'Wood Waste Sawdust',
      description: 'Fine sawdust from hardwood processing, ideal for biocomposite materials.',
      type: 'feedstock',
      category: 'Wood',
      price: 75,
      unit: 'per tonne',
      location: 'Seattle, WA',
      image: '/assets/marketplace/wood-sawdust.jpg',
      rating: 4.5,
      seller: {
        name: 'Northwest Timber Recycling',
        verified: true,
        rating: 4.7
      },
      available: 40000,
      sustainability: 95,
      tags: ['Hardwood', 'Fine grade', 'Kiln-dried']
    },
    {
      id: 'fs-004',
      name: 'Agricultural Waste Husks',
      description: 'Rice and corn husks from industrial processing, cleaned and dried.',
      type: 'feedstock',
      category: 'Agricultural',
      price: 60,
      unit: 'per tonne',
      location: 'Sacramento, CA',
      image: '/assets/marketplace/agricultural-waste.jpg',
      rating: 3.9,
      seller: {
        name: 'ValleyBio Materials',
        verified: false,
        rating: 3.5
      },
      available: 30000,
      sustainability: 90,
      tags: ['Rice', 'Corn', 'Organic']
    },
    // LoopCrafted products
    {
      id: 'lc-001',
      name: 'Recycled Plastic Lumber',
      description: 'Durable outdoor construction material made from 100% recycled plastic waste.',
      type: 'loopcrafted',
      category: 'Building Materials',
      price: 320,
      unit: 'per cubic meter',
      location: 'Chicago, IL',
      image: '/assets/marketplace/recycled-plastic-lumber.jpg',
      rating: 4.8,
      seller: {
        name: 'GreenBuild Materials',
        verified: true,
        rating: 4.9
      },
      available: 5000,
      sustainability: 95,
      tags: ['Construction', 'Weather-resistant', 'Maintenance-free']
    },
    {
      id: 'lc-002',
      name: 'Upcycled Textile Insulation',
      description: 'High-performance building insulation made from recycled denim and cotton fibers.',
      type: 'loopcrafted',
      category: 'Building Materials',
      price: 180,
      unit: 'per panel',
      location: 'Austin, TX',
      image: '/assets/marketplace/textile-insulation.jpg',
      rating: 4.6,
      seller: {
        name: 'WarmCycle Insulation',
        verified: true,
        rating: 4.7
      },
      available: 8000,
      sustainability: 98,
      tags: ['Non-toxic', 'High R-value', 'Sound dampening']
    },
    {
      id: 'lc-003',
      name: 'Biocomposite Packaging',
      description: 'Biodegradable packaging materials made from agricultural waste fibers.',
      type: 'loopcrafted',
      category: 'Packaging',
      price: 450,
      unit: 'per 1000 units',
      location: 'Minneapolis, MN',
      image: '/assets/marketplace/biocomposite-packaging.jpg',
      rating: 4.4,
      seller: {
        name: 'EcoPack Solutions',
        verified: true,
        rating: 4.6
      },
      available: 50000,
      sustainability: 100,
      tags: ['Biodegradable', 'Food-safe', 'Custom sizes']
    },
    {
      id: 'lc-004',
      name: 'Recycled Glass Countertops',
      description: 'Beautiful countertop surfaces made from 100% recycled glass embedded in eco-friendly resin.',
      type: 'loopcrafted',
      category: 'Construction',
      price: 900,
      unit: 'per sqm',
      location: 'Denver, CO',
      image: '/assets/marketplace/recycled-glass-countertops.jpg',
      rating: 4.9,
      seller: {
        name: 'GlassWorks Surfaces',
        verified: true,
        rating: 4.8
      },
      available: 2000,
      sustainability: 90,
      tags: ['Heat-resistant', 'Stain-resistant', 'Custom colors']
    }
  ]);

  // Filter products based on active tab, search query and filters
  const filteredProducts = products.filter(product => {
    // Filter by tab
    if (activeTab !== 'all' && product.type !== activeTab) {
      return false;
    }

    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Filter by categories
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Filter by location
    if (selectedLocation && product.location !== selectedLocation) {
      return false;
    }

    // Filter by sustainability score
    if (product.sustainability < sustainabilityFilter) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'sustainability':
        return b.sustainability - a.sustainability;
      case 'rating':
        return b.rating - a.rating;
      case 'recommended':
      default:
        return (b.rating * b.sustainability) - (a.rating * a.sustainability);
    }
  });

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];
  
  // Get unique locations
  const locations = [...new Set(products.map(product => product.location))];

  // Handle requesting a quote
  const handleRequestQuote = (product: Product) => {
    setSelectedProduct(product);
    setQuoteDialogOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero section */}
      <div className="relative mt-16 pt-12 pb-8 bg-gradient-to-r from-teal-700 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Circular Economy Marketplace</h1>
            <p className="text-xl opacity-90 mb-8">Buy and sell sustainable materials and products directly from our global network of verified partners.</p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text"
                placeholder="Search for materials, products, or categories..."
                className="w-full pl-10 pr-4 h-12 rounded-full bg-white/90 backdrop-blur-md border-none text-gray-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-white"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-wrap gap-6">
          {/* Filters sidebar */}
          <div className="w-full md:w-64">
            <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button variant="ghost" size="sm" className="text-xs" onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 1000]);
                  setSelectedLocation('');
                  setSustainabilityFilter(0);
                }}>
                  Reset
                </Button>
              </div>
              
              {/* Categories filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-2 text-gray-600">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${category}`} 
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        checked={selectedCategories.includes(category)}
                        onChange={() => {
                          if (selectedCategories.includes(category)) {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          } else {
                            setSelectedCategories([...selectedCategories, category]);
                          }
                        }}
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price range filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-2 text-gray-600">Price Range</h4>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">${priceRange[0]}</span>
                    <span className="text-sm text-gray-700">${priceRange[1]}+</span>
                  </div>
                </div>
              </div>
              
              {/* Location filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-2 text-gray-600">Location</h4>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any location</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Sustainability filter */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-2 text-gray-600">Sustainability Score</h4>
                <Select 
                  value={sustainabilityFilter.toString()} 
                  onValueChange={(value) => setSustainabilityFilter(parseInt(value))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Minimum score" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any score</SelectItem>
                    <SelectItem value="70">Good (70+)</SelectItem>
                    <SelectItem value="80">Very Good (80+)</SelectItem>
                    <SelectItem value="90">Excellent (90+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Product listings */}
          <div className="flex-grow">
            {/* Tab navigation */}
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <TabsList className="bg-white/70 backdrop-blur-md">
                  <TabsTrigger value="all">All Products</TabsTrigger>
                  <TabsTrigger value="feedstock">Feedstock</TabsTrigger>
                  <TabsTrigger value="loopcrafted">LoopCrafted</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] bg-white/70 backdrop-blur-md">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="sustainability">Sustainability</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Mobile filters button */}
              <Button variant="outline" className="md:hidden w-full mb-4 bg-white/70 backdrop-blur-md">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              {/* Results info */}
              <p className="text-sm text-gray-600 mb-4">
                Showing {sortedProducts.length} results
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategories.length > 0 && ` in ${selectedCategories.join(', ')}`}
              </p>
              
              {/* Product grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden bg-white/70 backdrop-blur-md border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      {/* Product image with fallback to placeholder components */}
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // When image fails to load, replace with placeholder component
                            const target = e.currentTarget;
                            const parent = target.parentElement;
                            if (parent) {
                              // Remove the image element
                              parent.removeChild(target);
                              
                              // Create a placeholder element
                              const placeholderElement = document.createElement('div');
                              placeholderElement.className = 'w-full h-full';
                              
                              // Set background style instead of trying to load another image
                              placeholderElement.style.background = product.type === 'feedstock'
                                ? 'linear-gradient(135deg, #14b8a6, #16a34a)' // Teal to green
                                : 'linear-gradient(135deg, #3b82f6, #4f46e5)'; // Blue to indigo
                              
                              // Add product type text
                              placeholderElement.innerHTML = `<div class="h-full w-full flex items-center justify-center text-white font-medium">${
                                product.type === 'feedstock' ? 'Feedstock Material' : 'LoopCrafted Product'
                              }</div>`;
                              
                              parent.appendChild(placeholderElement);
                            }
                          }}
                        />
                      ) : product.type === 'feedstock' ? (
                        <FeedstockPlaceholder width="100%" height="100%" />
                      ) : (
                        <ProductPlaceholder width="100%" height="100%" />
                      )}
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant={product.type === 'feedstock' ? 'outline' : 'default'} className={product.type === 'feedstock' ? 'border-teal-500 text-teal-600' : 'bg-blue-600'}>
                          {product.type === 'feedstock' ? 'Feedstock' : 'LoopCrafted'}
                        </Badge>
                        <div className="flex items-center">
                          <span className="text-xs font-medium text-amber-600 mr-1">★</span>
                          <span className="text-xs font-medium">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="mt-2 text-lg">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                        {product.location}
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mr-2">
                            <div 
                              className={`h-full rounded-full ${
                                product.sustainability >= 90 ? 'bg-green-500' : 
                                product.sustainability >= 80 ? 'bg-lime-500' : 
                                product.sustainability >= 70 ? 'bg-amber-500' : 'bg-orange-500'
                              }`} 
                              style={{ width: `${product.sustainability}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium">{product.sustainability}%</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {product.available.toLocaleString()} units
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex flex-col">
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="flex items-center">
                          <div className="flex h-6 w-6 rounded-full bg-teal-100 items-center justify-center mr-2">
                            {product.seller.verified && <Check className="h-3 w-3 text-teal-600" />}
                          </div>
                          <span className="text-sm font-medium">{product.seller.name}</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          ${product.price}
                          <span className="text-sm font-normal text-gray-600"> {product.unit}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 w-full">
                        <Button 
                          variant="default" 
                          className="flex-1 bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600"
                          onClick={() => window.alert(`Buy ${product.name} - This would proceed to checkout in the full implementation`)}
                        >
                          Buy Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleRequestQuote(product)}
                        >
                          Request Quote
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {/* Empty state */}
              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We couldn't find any products matching your search criteria. Try adjusting your filters or search term.
                  </p>
                </div>
              )}
            </Tabs>
          </div>
        </div>
      </div>

      {/* Quote Request Dialog */}
      <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Custom Quote</DialogTitle>
            <DialogDescription>
              {selectedProduct && `Get a personalized quote for ${selectedProduct.name} based on your specific requirements.`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                placeholder="Enter desired quantity"
                className="col-span-3"
                defaultValue="1000"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="specifications" className="text-right">
                Specifications
              </Label>
              <Input
                id="specifications"
                placeholder="Enter any special requirements"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="timeline" className="text-right">
                Timeline
              </Label>
              <Select defaultValue="2-weeks">
                <SelectTrigger id="timeline" className="col-span-3">
                  <SelectValue placeholder="Select delivery timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (1 week)</SelectItem>
                  <SelectItem value="2-weeks">Standard (2 weeks)</SelectItem>
                  <SelectItem value="month">Extended (1 month)</SelectItem>
                  <SelectItem value="custom">Custom Timeline</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="notes" className="text-right">
                Additional Notes
              </Label>
              <textarea
                id="notes"
                placeholder="Any other information that might be relevant"
                className="col-span-3 min-h-[80px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
          </div>
          
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setQuoteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => {
                alert('Quote request submitted! A seller representative will contact you shortly.');
                setQuoteDialogOpen(false);
              }}
              className="bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600"
            >
              Submit Quote Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Marketplace;