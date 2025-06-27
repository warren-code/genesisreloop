import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ValueChainLayout } from '@/layout/ValueChainLayout';
import { Feedstock } from '@/lib/types';
import { DetailSection } from '@/components/DetailSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, BarChart2, FileText, ChevronRight } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const mockFeedstock: Feedstock = {
  id: "plastic-pet",
  name: "PET Plastic Waste",
  description: "Polyethylene terephthalate (PET) is a commonly used plastic in beverage bottles, food containers, and packaging materials. When properly processed, it can be recycled into new products or transformed into valuable materials like polyester fiber.",
  category: "Plastic Waste",
  sources: ["Beverage Containers", "Food Packaging", "Household Items", "Industrial Packaging"],
  collectionMethods: [
    "Municipal Recycling Programs",
    "Redemption Centers",
    "Commercial Collection Services",
    "Public Collection Points"
  ],
  availabilityInfo: {
    regions: ["North America", "Europe", "Asia", "Global Urban Areas"],
    seasonality: "Year-round, with slight increases during summer months",
    estimatedVolume: "380 million tons globally per year"
  },
  images: ["/assets/value-chains/pet-plastic.jpg", "/assets/value-chains/pet-plastic-sorted.jpg"]
};

const FeedstockDetail: React.FC = () => {
  const { id, tab = 'overview' } = useParams<{ id: string; tab?: string }>();
  const [feedstock, setFeedstock] = useState<Feedstock | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, fetch data from an API
    // For now, using mock data
    setTimeout(() => {
      setFeedstock(mockFeedstock);
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!feedstock) {
    return <div>Feedstock not found</div>;
  }
  
  return (
    <ValueChainLayout
      title={feedstock.name}
      subtitle={feedstock.category}
      imageUrl={feedstock.images[0]}
      breadcrumbs={[
        { title: 'Home', href: '/' },
        { title: 'Feedstock', href: '/feedstock' },
        { title: feedstock.name, href: `/feedstock/${id}` }
      ]}
      activeTab={tab || 'overview'}
      valueChainId={id}
      type="feedstock"
    >
      {tab === 'overview' && (
        <div className="space-y-8">
          <DetailSection
            title="Feedstock Overview"
            icon={<FileText className="h-5 w-5" />}
          >
            <div className="prose max-w-none">
              <p>{feedstock.description}</p>
              
              <h3 className="font-semibold text-xl mt-6">Common Sources</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {feedstock.sources.map((source, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1">
                    {source}
                  </Badge>
                ))}
              </div>
            </div>
          </DetailSection>
          
          <DetailSection
            title="Related Value Chains"
            icon={<ChevronRight className="h-5 w-5" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold">PET Plastic to Textile</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Transform PET plastic waste into high-quality polyester textile fibers
                  </p>
                  <div className="mt-4">
                    <Button size="sm" variant="outline">View Process</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold">PET to Construction Materials</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Process PET waste into durable construction materials and boards
                  </p>
                  <div className="mt-4">
                    <Button size="sm" variant="outline">View Process</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold">PET to 3D Printing Filament</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Convert PET bottles into high-quality 3D printing filament
                  </p>
                  <div className="mt-4">
                    <Button size="sm" variant="outline">View Process</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DetailSection>
        </div>
      )}
      
      {tab === 'collection' && (
        <div className="space-y-8">
          <DetailSection
            title="Collection Methods"
            icon={<FileText className="h-5 w-5" />}
          >
            <div className="prose max-w-none">
              <p>
                PET plastic waste can be collected through various methods, each with different efficiency levels and requirements.
                Below are the recommended collection procedures for obtaining quality PET feedstock.
              </p>
              
              <div className="mt-6 space-y-6">
                {feedstock.collectionMethods.map((method, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg">{method}</h3>
                    <p className="text-slate-600 mt-2">
                      {index === 0 && "Collection through city-provided recycling bins and curbside pickup programs."}
                      {index === 1 && "Bottle deposit locations where consumers return containers for refunds."}
                      {index === 2 && "B2B collection services for retailers and businesses generating large volumes."}
                      {index === 3 && "Community collection points in public areas like parks and shopping centers."}
                    </p>
                  </div>
                ))}
              </div>
              
              <h3 className="font-semibold text-xl mt-8">Processing & Preparation</h3>
              <ol>
                <li>Remove caps and labels (if possible)</li>
                <li>Rinse containers to remove food/liquid residues</li>
                <li>Sort by color (clear, blue, green, mixed)</li>
                <li>Compress for efficient transportation</li>
                <li>Protect from contamination during storage</li>
              </ol>
              
              <h3 className="font-semibold text-xl mt-6">Storage Requirements</h3>
              <p>
                Proper storage is essential to maintain quality and prevent contamination:
              </p>
              <ul>
                <li>Store in dry, covered areas to prevent water accumulation</li>
                <li>Protect from UV exposure to prevent degradation</li>
                <li>Separate from other plastic types to maintain purity</li>
                <li>Optimal bale size: 1m³ weighing 200-250kg</li>
              </ul>
            </div>
          </DetailSection>
        </div>
      )}
      
      {tab === 'availability' && (
        <div className="space-y-8">
          <DetailSection
            title="Global Availability"
            icon={<MapPin className="h-5 w-5" />}
          >
            <div className="prose max-w-none">
              <p>
                PET plastic waste is one of the most widely available feedstocks globally, with particularly high concentrations
                in urban areas and developed regions.
              </p>
              
              <div className="mt-6">
                <h3 className="font-medium">Regional Availability</h3>
                <div className="mt-2 space-y-3">
                  {feedstock.availabilityInfo.regions?.map((region, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-32 font-medium">{region}</div>
                      <div className="flex-1">
                        <div className="h-4 rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: index === 0 ? '85%' : index === 1 ? '90%' : index === 2 ? '80%' : '60%' }}
                          />
                        </div>
                      </div>
                      <div className="w-16 text-right text-sm text-slate-600">
                        {index === 0 ? 'High' : index === 1 ? 'Very High' : index === 2 ? 'High' : 'Medium'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DetailSection>
          
          <DetailSection
            title="Seasonal Variations"
            icon={<Calendar className="h-5 w-5" />}
          >
            <div>
              <p className="mb-4">
                {feedstock.availabilityInfo.seasonality}
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium">Monthly Availability Index</h3>
                <div className="mt-4 grid grid-cols-12 gap-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                    <div key={month} className="flex flex-col items-center">
                      <div 
                        className="w-full bg-primary rounded-t-sm" 
                        style={{ 
                          height: `${60 + (i >= 5 && i <= 8 ? 30 : 0)}px`,
                          opacity: 0.7 + (i >= 5 && i <= 8 ? 0.3 : 0)
                        }}
                      />
                      <div className="text-xs mt-1">{month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DetailSection>
          
          <DetailSection
            title="Volume Estimation"
            icon={<BarChart2 className="h-5 w-5" />}
          >
            <div className="prose max-w-none">
              <p>Global production of PET plastic for packaging exceeds 380 million tons annually, with approximately 9% being recycled. This creates a massive potential feedstock source for circular economy initiatives.</p>
              
              <h3 className="font-semibold text-lg mt-6">Estimation Guidelines</h3>
              <ul>
                <li><strong>Per Capita Generation:</strong> 20-30 kg of PET waste per person per year in developed countries</li>
                <li><strong>Collection Rate:</strong> 10-70% depending on local infrastructure</li>
                <li><strong>Urban Density Correlation:</strong> Higher population density areas typically generate 25-40% more PET waste</li>
              </ul>
              
              <div className="bg-slate-50 p-4 rounded-lg mt-4">
                <h4 className="font-medium">Quick Calculation Formula</h4>
                <p className="font-mono text-sm bg-white p-2 rounded border mt-2">
                  Yearly Available PET (tons) = Population × 0.025 × Collection_Rate
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Example: A city of 500,000 with a 40% collection rate would yield approximately 5,000 tons of PET waste annually.
                </p>
              </div>
            </div>
          </DetailSection>
        </div>
      )}
      
      {tab === 'connected' && (
        <div className="space-y-8">
          <DetailSection
            title="Connected Processes"
            icon={<ChevronRight className="h-5 w-5" />}
          >
            <Tabs defaultValue="processes">
              <TabsList>
                <TabsTrigger value="processes">Processes</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
              </TabsList>
              <TabsContent value="processes" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">PET to Polyester Fiber</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Chemical process to convert PET flakes to polyester fiber
                      </p>
                      <div className="mt-4">
                        <Button size="sm">View Process</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">PET to rPET Pellets</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Mechanical recycling to create food-grade recycled PET
                      </p>
                      <div className="mt-4">
                        <Button size="sm">View Process</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">PET Depolymerization</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Chemical recycling to break down PET into base monomers
                      </p>
                      <div className="mt-4">
                        <Button size="sm">View Process</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="products" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">Recycled Polyester Fabric</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Sustainable textile made from recycled PET bottles
                      </p>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">View Product</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">rPET Packaging</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Food-grade recycled PET containers and packaging
                      </p>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">View Product</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">PET Construction Boards</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Durable construction materials made from recycled PET
                      </p>
                      <div className="mt-4">
                        <Button size="sm" variant="outline">View Product</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </DetailSection>
          
          <DetailSection
            title="Marketplace Listings"
            icon={<BarChart2 className="h-5 w-5" />}
          >
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <h3 className="font-medium text-lg mb-2">Find PET Plastic Waste on the Marketplace</h3>
              <p className="text-slate-600 mb-4">
                Connect with suppliers and buyers of PET plastic waste on the ReLoop marketplace.
              </p>
              <div className="flex justify-center gap-4">
                <Button>Find Suppliers</Button>
                <Button variant="outline">List Your PET Waste</Button>
              </div>
            </div>
          </DetailSection>
        </div>
      )}
    </ValueChainLayout>
  );
};

export default FeedstockDetail;