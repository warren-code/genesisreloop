import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 pb-16">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[70%] -left-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ReLoop: Transform Waste into Value
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the circular economy revolution with our marketplace of 100+ value chains.
            Connect waste providers, process operators, and product buyers in a sustainable ecosystem.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full">
              Explore Value Chains
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Join the Community
            </Button>
          </motion.div>
        </div>
        
        {/* Glassmorphic Card */}
        <motion.div 
          className="mt-16 max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="rounded-2xl overflow-hidden border bg-background/70 backdrop-blur-lg shadow-lg">
            <div className="p-6 md:p-10">
              <div className="aspect-video w-full bg-muted/50 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-2">3D Interactive Map</h3>
                  <p className="text-muted-foreground">Visualization of global circular economy nodes</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-muted-foreground">Value chains</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2,500+</p>
                  <p className="text-muted-foreground">Active nodes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">150+</p>
                  <p className="text-muted-foreground">Countries covered</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}