import React, { ReactNode } from 'react';
import { MainLayout } from './MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, Beaker, Database, BarChart, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ValueChainLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  breadcrumbs: Array<{ title: string; href: string }>;
  activeTab: string;
  valueChainId?: string;
  type: 'feedstock' | 'chemhub' | 'product';
}

export const ValueChainLayout: React.FC<ValueChainLayoutProps> = ({
  children,
  title,
  subtitle,
  imageUrl,
  breadcrumbs,
  activeTab,
  valueChainId,
  type
}) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Info className="h-4 w-4 mr-1" /> },
    ...(type === 'feedstock' ? [
      { id: 'collection', label: 'Collection', icon: <Database className="h-4 w-4 mr-1" /> },
      { id: 'availability', label: 'Availability', icon: <BarChart className="h-4 w-4 mr-1" /> },
    ] : []),
    ...(type === 'chemhub' ? [
      { id: 'science', label: 'Scientific Basis', icon: <Beaker className="h-4 w-4 mr-1" /> },
      { id: 'implementation', label: 'Implementation', icon: <Database className="h-4 w-4 mr-1" /> },
      { id: 'economics', label: 'Economics', icon: <BarChart className="h-4 w-4 mr-1" /> },
      { id: 'skills', label: 'Skills & Staffing', icon: <Users className="h-4 w-4 mr-1" /> },
      { id: 'safety', label: 'Safety', icon: <Shield className="h-4 w-4 mr-1" /> },
    ] : []),
    ...(type === 'product' ? [
      { id: 'specifications', label: 'Specifications', icon: <Database className="h-4 w-4 mr-1" /> },
      { id: 'market', label: 'Market', icon: <BarChart className="h-4 w-4 mr-1" /> },
    ] : []),
    { id: 'connected', label: 'Connected Info', icon: <Info className="h-4 w-4 mr-1" /> },
  ];

  return (
    <MainLayout>
      {/* Hero Section with Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        
        {/* Breadcrumbs */}
        <div className="absolute top-4 left-4 text-white">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-white/80 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white mb-3"
            asChild
          >
            <Link to={`/${type === 'feedstock' ? 'feedstock' : type === 'chemhub' ? 'chemhub' : 'products'}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {type === 'feedstock' ? 'Feedstock' : type === 'chemhub' ? 'ChemHub' : 'Products'}
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          {subtitle && <p className="text-white/80">{subtitle}</p>}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="container mx-auto">
          <Tabs value={activeTab} className="w-full">
            <TabsList className="h-14 w-full justify-start overflow-x-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="h-14 px-4 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                  asChild
                >
                  <Link to={`/${type}/${valueChainId}/${tab.id}`} className="flex items-center">
                    {tab.icon}
                    {tab.label}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="pt-6 pb-12">
              <TabsContent value={activeTab} className="mt-0">
                {children}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};