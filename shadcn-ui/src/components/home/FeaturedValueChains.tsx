import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ValueChainCard from '../value-chain/ValueChainCard';
import { valueChains } from '@/data/valueChains';

export default function FeaturedValueChains() {
  // Take only the first 6 value chains for featured display
  const featuredValueChains = valueChains.slice(0, 6);
  
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <Badge variant="outline" className="mb-3">
              100+ Value Chains
            </Badge>
            <h2 className="text-3xl font-bold">Featured Value Chains</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Explore our curated selection of circular economy opportunities with detailed process guides and economic analysis.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" asChild>
            <Link to="/value-chains">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredValueChains.map((valueChain, index) => (
            <motion.div
              key={valueChain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ValueChainCard valueChain={valueChain} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="border border-dashed bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-2">Can't find what you're looking for?</h3>
              <p className="text-muted-foreground mb-4">
                We're adding new value chains regularly. Suggest a new value chain or contribute to existing ones.
              </p>
              <Button variant="outline">Suggest a Value Chain</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}