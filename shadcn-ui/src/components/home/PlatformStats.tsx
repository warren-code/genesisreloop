import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  increase: string;
}

const stats: StatItem[] = [
  {
    value: "100+",
    label: "Value Chains",
    increase: "25% growth this quarter"
  },
  {
    value: "2,500+",
    label: "Active Nodes",
    increase: "300 new nodes this month"
  },
  {
    value: "10,000+",
    label: "Marketplace Transactions",
    increase: "15% increase in volume"
  },
  {
    value: "50,000+",
    label: "Tons of Waste Diverted",
    increase: "Saving 75,000 tons of CO₂"
  },
];

export default function PlatformStats() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ReLoop Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our growing network of circular economy practitioners is creating real environmental 
            and economic impact across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full border border-muted bg-background/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-medium mb-2">{stat.label}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <ChevronUp className="h-4 w-4 mr-1" />
                      <span>{stat.increase}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block rounded-full bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
            Data updated in real-time from our global network of nodes
          </div>
        </div>
      </div>
    </section>
  );
}