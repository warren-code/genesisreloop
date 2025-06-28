import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getCurrentUser } from '@/lib/supabase';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
  BarChart,
  Activity,
  Users,
  Map,
  Package,
  Recycle,
  Leaf,
  AlertCircle,
  ChevronRight,
  Plus,
  Clock,
  Calendar
} from 'lucide-react';

// Sample data for the dashboard - in a real app, this would come from the backend
const recentActivity = [
  {
    id: 1,
    type: 'listing_created',
    title: 'New listing created',
    description: 'You created a listing for 500kg PET Plastic Bottles',
    time: '2 hours ago',
    icon: <Package className="h-4 w-4" />
  },
  {
    id: 2,
    type: 'connection_request',
    title: 'Connection request',
    description: 'EcoFiber Solutions wants to connect with you',
    time: '1 day ago',
    icon: <Users className="h-4 w-4" />
  },
  {
    id: 3,
    type: 'process_completion',
    title: 'Process completed',
    description: 'Coffee Grounds to Mushrooms batch #12 completed',
    time: '2 days ago',
    icon: <Recycle className="h-4 w-4" />
  }
];

const myValueChains = [
  {
    id: 1,
    name: 'PET to Polyester Fiber',
    status: 'active',
    progress: 75,
    nextStep: 'Quality testing',
    lastUpdated: '3 hours ago'
  },
  {
    id: 2,
    name: 'Coffee Grounds to Mushrooms',
    status: 'active',
    progress: 90,
    nextStep: 'Harvesting',
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    name: 'Textile Waste to Acoustic Panels',
    status: 'planning',
    progress: 20,
    nextStep: 'Equipment procurement',
    lastUpdated: '5 days ago'
  }
];

const impactStats = {
  wasteProcessed: 1250, // kg
  carbonSaved: 3750, // kg CO2e
  revenueGenerated: 8500, // $
  circularityScore: 82 // %
};

const upcomingEvents = [
  {
    id: 1,
    name: 'Introduction to Circular Economy',
    type: 'Webinar',
    date: 'June 30, 2025',
    time: '2:00 PM - 3:30 PM'
  },
  {
    id: 2,
    name: 'Regional Node Operator Meetup',
    type: 'In-person',
    date: 'July 5, 2025',
    time: '10:00 AM - 2:00 PM'
  }
];

const recommendedChains = [
  {
    id: 1,
    name: 'Glass to Construction Aggregates',
    match: 92,
    reason: 'Compatible with your current equipment'
  },
  {
    id: 2,
    name: 'Food Waste to Biogas',
    match: 85,
    reason: 'High demand in your location'
  }
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email?: string; user_metadata?: Record<string, string> } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          navigate('/login');
          return;
        }

        setUser(currentUser);
      } catch (error) {
        console.error('Authentication error:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="grid grid-cols-1 gap-6">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">Welcome back, {user?.user_metadata?.name || 'Circular Innovator'}</h1>
              <p className="text-slate-600">Here's what's happening with your circular economy projects</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center">
                <Map className="mr-2 h-4 w-4" />
                View Node Map
              </Button>
              <Button className="flex items-center bg-gradient-to-r from-teal-700 to-blue-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Value Chain
              </Button>
            </div>
          </div>

          {/* Action Required Alert */}
          <Alert className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              Your account verification is pending. Please check your email to complete verification.
            </AlertDescription>
            <Button variant="link" className="text-amber-800 ml-auto">
              Resend Email
            </Button>
          </Alert>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="value-chains">Value Chains</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Active Value Chains */}
                <Card className="col-span-2">
                  <CardHeader className="pb-3">
                    <CardTitle>My Value Chains</CardTitle>
                    <CardDescription>Your active implementation projects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {myValueChains.map((chain) => (
                      <div key={chain.id} className="flex flex-col space-y-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{chain.name}</h3>
                          <Badge 
                            variant="outline" 
                            className={chain.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200'}
                          >
                            {chain.status === 'active' ? 'Active' : 'Planning'}
                          </Badge>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{chain.progress}%</span>
                          </div>
                          <Progress value={chain.progress} className="h-2" />
                        </div>
                        
                        <div className="flex justify-between text-sm text-slate-600">
                          <span>Next step: {chain.nextStep}</span>
                          <span>Updated {chain.lastUpdated}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full flex justify-center items-center">
                      View All Value Chains
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your projects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="mt-1 bg-slate-100 p-2 rounded-full">
                          {activity.icon}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium text-sm">{activity.title}</h3>
                          <p className="text-sm text-slate-600">{activity.description}</p>
                          <div className="flex items-center text-xs text-slate-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full flex justify-center items-center">
                      View All Activity
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Impact Summary */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-green-600" />
                      Impact Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Waste Processed</span>
                      <span className="font-semibold">{impactStats.wasteProcessed} kg</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Carbon Saved</span>
                      <span className="font-semibold">{impactStats.carbonSaved} kg CO₂e</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Revenue Generated</span>
                      <span className="font-semibold">${impactStats.revenueGenerated}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Circularity Score</span>
                      <span className="font-semibold">{impactStats.circularityScore}%</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <BarChart className="h-4 w-4 mr-2" />
                      View Full Impact Report
                    </Button>
                  </CardFooter>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="p-3 rounded-lg border border-slate-200 space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{event.name}</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {event.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-slate-600">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <Button variant="ghost" className="w-full text-sm h-8">Register</Button>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full flex justify-center items-center">
                      View All Events
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Recommended Value Chains */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Activity className="h-5 w-5 mr-2 text-purple-600" />
                      Recommended for You
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recommendedChains.map((chain) => (
                      <div key={chain.id} className="p-3 rounded-lg border border-slate-200 space-y-2">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{chain.name}</h3>
                          <Badge className="bg-green-500">
                            {chain.match}% Match
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600">{chain.reason}</p>
                        <Button variant="outline" className="w-full text-sm h-8">Explore Chain</Button>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full flex justify-center items-center">
                      View All Recommendations
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs content would go here */}
            <TabsContent value="value-chains">
              <Card>
                <CardHeader>
                  <CardTitle>Your Value Chains</CardTitle>
                  <CardDescription>Manage your active, planned, and completed value chains</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12 text-slate-500">Value chains content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>Track your circular economy metrics and environmental achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12 text-slate-500">Impact metrics will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketplace">
              <Card>
                <CardHeader>
                  <CardTitle>Marketplace Activities</CardTitle>
                  <CardDescription>Manage your listings, transactions, and connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12 text-slate-500">Marketplace activities will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;