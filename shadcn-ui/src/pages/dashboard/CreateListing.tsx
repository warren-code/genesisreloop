import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { HelpCircle, AlertCircle, ChevronDown, Trash2, Edit, Plus, CheckCircle2, MoreVertical, MapPin, Tag } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getCurrentUser } from '@/lib/supabase';

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
  createdAt: Date;
  status: 'active' | 'pending' | 'sold';
}

const CreateListing: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email?: string; user_metadata?: Record<string, string | number | boolean> } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{type: 'success' | 'error' | 'none', text: string}>({ type: 'none', text: '' });
  const [activeTab, setActiveTab] = useState<string>('feedstock');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<string>('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    unit: '',
    location: '',
    image: '',
    available: '',
    sustainability: '85',
    tags: '',
  });

  // Categories
  const feedstockCategories = ['Plastics', 'Textiles', 'Wood', 'Agricultural', 'Glass', 'Metals', 'E-waste', 'Organic'];
  const loopCraftedCategories = ['Building Materials', 'Packaging', 'Construction', 'Consumer Goods', 'Textiles', 'Furniture', 'Accessories'];
  
  // Units of measurement
  const units = [
    'per tonne', 
    'per kg', 
    'per cubic meter', 
    'per sqm', 
    'per 1000 units', 
    'per unit', 
    'per barrel', 
    'per panel'
  ];

  // Mock user data for listings
  const [myListings, setMyListings] = useState<Product[]>([
    {
      id: 'fs-101',
      name: 'PET Bottle Flakes',
      description: 'Clean PET bottle flakes, sorted and washed. Suitable for recycling into textiles or new packaging.',
      type: 'feedstock',
      category: 'Plastics',
      price: 230,
      unit: 'per tonne',
      location: 'Boston, MA',
      image: '/assets/marketplace/pet-flakes.jpg',
      rating: 4.3,
      seller: {
        name: 'EcoReclaim Solutions',
        verified: true,
        rating: 4.8
      },
      available: 15000,
      sustainability: 85,
      tags: ['PET', 'Flakes', 'Food-grade'],
      createdAt: new Date('2023-10-15'),
      status: 'active'
    },
    {
      id: 'lc-105',
      name: 'Recycled Textile Tote Bags',
      description: 'Durable tote bags made from 100% recycled textile waste. Multiple colors available.',
      type: 'loopcrafted',
      category: 'Accessories',
      price: 350,
      unit: 'per 100 units',
      location: 'Boston, MA',
      image: '/assets/marketplace/textile-totes.jpg',
      rating: 4.7,
      seller: {
        name: 'EcoReclaim Solutions',
        verified: true,
        rating: 4.8
      },
      available: 2000,
      sustainability: 90,
      tags: ['Cotton', 'Canvas', 'Custom colors'],
      createdAt: new Date('2023-11-02'),
      status: 'active'
    },
  ]);

  // Load user data
  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        navigate('/login', { state: { from: '/dashboard/create-listing' } });
      } else {
        setUser(currentUser);
      }
    };
    
    checkUser();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate a unique id
    const id = editingProduct 
      ? editingProduct.id 
      : `${activeTab === 'feedstock' ? 'fs' : 'lc'}-${Math.floor(Math.random() * 10000)}`;
    
    // Create new product object
    const newProduct: Product = {
      id,
      name: formData.name,
      description: formData.description,
      type: activeTab as 'feedstock' | 'loopcrafted',
      category: formData.category,
      price: parseFloat(formData.price),
      unit: formData.unit,
      location: formData.location,
      image: formData.image || `/assets/marketplace/${activeTab === 'feedstock' ? 'feedstock' : 'product'}-placeholder.jpg`,
      rating: editingProduct?.rating || 0,
      seller: {
        name: user?.user_metadata?.name || user?.email?.split('@')[0] || 'Anonymous Seller',
        verified: true,
        rating: editingProduct?.seller?.rating || 5.0
      },
      available: parseFloat(formData.available),
      sustainability: parseFloat(formData.sustainability),
      tags: formData.tags.split(',').map(tag => tag.trim()),
      createdAt: editingProduct?.createdAt || new Date(),
      status: 'active'
    };

    // In a real app, we would send this to an API
    setTimeout(() => {
      if (editingProduct) {
        // Update existing listing
        setMyListings(myListings.map(listing => 
          listing.id === editingProduct.id ? newProduct : listing
        ));
        setMessage({
          type: 'success',
          text: `Successfully updated "${newProduct.name}" listing`
        });
        setEditingProduct(null);
      } else {
        // Add new listing
        setMyListings([newProduct, ...myListings]);
        setMessage({
          type: 'success',
          text: `Successfully created new ${activeTab} listing: "${newProduct.name}"`
        });
      }
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        category: '',
        price: '',
        unit: '',
        location: '',
        image: '',
        available: '',
        sustainability: '85',
        tags: '',
      });
      
      setIsLoading(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage({ type: 'none', text: '' });
      }, 5000);
    }, 1000);
  };

  const handleEdit = (product: Product) => {
    setActiveTab(product.type);
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price.toString(),
      unit: product.unit,
      location: product.location,
      image: product.image,
      available: product.available.toString(),
      sustainability: product.sustainability.toString(),
      tags: product.tags.join(', '),
    });
    
    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDelete = (id: string) => {
    setProductToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setMyListings(myListings.filter(product => product.id !== productToDelete));
    setShowDeleteConfirm(false);
    setMessage({
      type: 'success',
      text: 'Listing successfully deleted'
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setMessage({ type: 'none', text: '' });
    }, 5000);
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      category: '',
      price: '',
      unit: '',
      location: '',
      image: '',
      available: '',
      sustainability: '85',
      tags: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - In a real app, this would be a shared dashboard layout */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Dashboard</h3>
              <ul className="space-y-1">
                <li>
                  <Button variant="ghost" className="w-full justify-start">Overview</Button>
                </li>
                <li>
                  <Button variant="secondary" className="w-full justify-start bg-blue-50">Marketplace Listings</Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">Messages</Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">Orders</Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">Analytics</Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">Settings</Button>
                </li>
              </ul>
              
              <Separator className="my-4" />
              
              <div className="p-4 bg-teal-50 rounded-md border border-teal-100">
                <h4 className="font-medium text-teal-800 mb-2">Need Help?</h4>
                <p className="text-sm text-teal-700 mb-3">Learn how to create effective marketplace listings that convert.</p>
                <Button variant="outline" size="sm" className="w-full border-teal-200 text-teal-800">
                  View Seller Guide
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="lg:col-span-9">
            <h1 className="text-3xl font-bold mb-2">Marketplace Listings</h1>
            <p className="text-gray-600 mb-6">Create and manage your listings for the ReLoop circular economy marketplace.</p>
            
            {message.type !== 'none' && (
              <Alert className={`mb-6 ${message.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                <div className="flex items-center">
                  {message.type === 'success' ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <AlertCircle className="h-4 w-4 mr-2" />}
                  <AlertTitle>{message.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
                </div>
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}
            
            {/* Create/Edit Listing Form */}
            <Card className="mb-8 bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle>{editingProduct ? 'Edit Listing' : 'Create New Listing'}</CardTitle>
                <CardDescription>
                  {editingProduct 
                    ? `Make changes to your ${editingProduct.type} listing`
                    : 'Add a new product or feedstock material to the marketplace'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                  <TabsList className="mb-4">
                    <TabsTrigger value="feedstock" disabled={editingProduct !== null && editingProduct.type !== 'feedstock'}>Feedstock Material</TabsTrigger>
                    <TabsTrigger value="loopcrafted" disabled={editingProduct !== null && editingProduct.type !== 'loopcrafted'}>LoopCrafted Product</TabsTrigger>
                  </TabsList>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            required
                            id="name"
                            name="name"
                            placeholder={activeTab === "feedstock" ? "e.g. Mixed Plastic Waste" : "e.g. Recycled Plastic Lumber"}
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="category">
                            Category <span className="text-red-500">*</span>
                          </Label>
                          <Select name="category" value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {(activeTab === "feedstock" ? feedstockCategories : loopCraftedCategories).map((category) => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="price">
                            Price <span className="text-red-500">*</span>
                          </Label>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500">$</span>
                            <Input
                              required
                              type="number"
                              id="price"
                              name="price"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                              value={formData.price}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="unit">
                            Unit <span className="text-red-500">*</span>
                          </Label>
                          <Select name="unit" value={formData.unit} onValueChange={(value) => setFormData({...formData, unit: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a unit" />
                            </SelectTrigger>
                            <SelectContent>
                              {units.map((unit) => (
                                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="available">
                            Available Quantity <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            required
                            type="number"
                            id="available"
                            name="available"
                            placeholder="0"
                            min="1"
                            value={formData.available}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="description">
                            Description <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            required
                            id="description"
                            name="description"
                            placeholder="Provide details about your product or material..."
                            className="h-32"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="location">
                            Location <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            required
                            id="location"
                            name="location"
                            placeholder="e.g. Portland, OR"
                            value={formData.location}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="tags">
                            Tags
                          </Label>
                          <Input
                            id="tags"
                            name="tags"
                            placeholder="e.g. Organic, Food-grade, Biodegradable"
                            value={formData.tags}
                            onChange={handleInputChange}
                          />
                          <p className="text-xs text-gray-500">Separate tags with commas</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label htmlFor="sustainability">
                              Sustainability Score
                            </Label>
                            <span className="text-sm font-medium">{formData.sustainability}%</span>
                          </div>
                          <Input
                            type="range"
                            id="sustainability"
                            name="sustainability"
                            min="0"
                            max="100"
                            step="5"
                            value={formData.sustainability}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Low</span>
                            <span>Medium</span>
                            <span>High</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="image">
                            Image URL
                          </Label>
                          <Input
                            id="image"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            value={formData.image}
                            onChange={handleInputChange}
                          />
                          <p className="text-xs text-gray-500">Leave blank to use a placeholder image</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-end space-x-4">
                      {editingProduct && (
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={cancelEdit}
                          disabled={isLoading}
                        >
                          Cancel
                        </Button>
                      )}
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Saving...' : editingProduct ? 'Update Listing' : 'Create Listing'}
                      </Button>
                    </div>
                  </form>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Existing listings */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Your Listings</h2>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All listings</SelectItem>
                    <SelectItem value="feedstock">Feedstock only</SelectItem>
                    <SelectItem value="loopcrafted">LoopCrafted only</SelectItem>
                    <SelectItem value="active">Active listings</SelectItem>
                    <SelectItem value="inactive">Inactive listings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {myListings.length === 0 ? (
                <div className="text-center py-12 bg-white/70 backdrop-blur-md rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Plus className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No listings yet</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    You haven't created any marketplace listings yet. Start by adding a new feedstock or product listing.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Create your first listing
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myListings.map((listing) => (
                    <Card key={listing.id} className="bg-white/70 backdrop-blur-md hover:shadow-md transition-shadow">
                      <div className="flex">
                        <div className="h-32 w-32 overflow-hidden">
                          <img
                            src={listing.image}
                            alt={listing.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = listing.type === 'feedstock' 
                                ? '/assets/marketplace/feedstock-placeholder.jpg'
                                : '/assets/marketplace/product-placeholder.jpg';
                            }}
                          />
                        </div>
                        
                        <div className="flex-grow p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <Badge variant={listing.type === 'feedstock' ? 'outline' : 'default'} className={listing.type === 'feedstock' ? 'border-teal-500 text-teal-600' : 'bg-blue-600'}>
                                {listing.type === 'feedstock' ? 'Feedstock' : 'LoopCrafted'}
                              </Badge>
                              <h3 className="font-semibold mt-1">{listing.name}</h3>
                            </div>
                            
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => handleEdit(listing)}>
                                  <Edit className="h-4 w-4 mr-2" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(listing.id)}>
                                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                            {listing.location}
                          </div>
                          
                          <div className="flex justify-between items-center mt-2">
                            <div className="text-lg font-bold text-gray-900">
                              ${listing.price}
                              <span className="text-xs font-normal text-gray-600 ml-1">{listing.unit}</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {listing.available.toLocaleString()} units
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete confirmation dialog */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this listing? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default CreateListing;