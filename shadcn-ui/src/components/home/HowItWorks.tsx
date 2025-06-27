import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Discover Value Chains",
    description: "Explore 100+ circular economy opportunities with detailed profitability and difficulty ratings.",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Connect with Suppliers",
    description: "Find local waste sources and establish relationships with feedstock providers in your area.",
    icon: "🔗",
  },
  {
    id: 3,
    title: "Follow Process Guides",
    description: "Use our detailed ChemHub process guides to set up your operation with expert knowledge.",
    icon: "📝",
  },
  {
    id: 4,
    title: "Sell Your Products",
    description: "List your upcycled products on our marketplace and connect with buyers seeking sustainable materials.",
    icon: "🛒",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ReLoop makes it simple to participate in the circular economy, whether you're a waste provider, 
            processor, or looking for sustainable materials.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div key={step.id} variants={item}>
              <Card className="h-full bg-background/70 backdrop-blur-sm border border-muted">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 bg-primary/10 rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Get started with your circular economy journey today
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600 shrink-0" />
                  <span>Expert guidance at every step</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600 shrink-0" />
                  <span>Connect with a global community</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600 shrink-0" />
                  <span>Access to proven, profitable value chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600 shrink-0" />
                  <span>Support for regulatory compliance</span>
                </li>
              </ul>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Tutorial Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}