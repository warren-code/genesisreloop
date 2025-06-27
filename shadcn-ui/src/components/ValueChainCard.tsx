import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ValueChain } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ValueChainCardProps {
  valueChain: ValueChain;
  isActive?: boolean;
}

export const ValueChainCard: React.FC<ValueChainCardProps> = ({ valueChain, isActive = false }) => {
  const { 
    name, 
    category, 
    image, 
    profitabilityScore,
    sustainabilityScore,
    difficultyScore,
    description 
  } = valueChain;
  
  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      }
    },
    initial: {
      y: 0,
      transition: {
        duration: 0.2,
      }
    }
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
      }
    },
    initial: {
      x: 0,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      animate={isActive ? 'hover' : 'initial'}
    >
      <Card className="overflow-hidden h-full transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg border border-slate-200">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute bottom-3 left-3 bg-white/90 text-slate-800">{category}</Badge>
        </div>
        
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-2 line-clamp-1">{name}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-3 mb-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Profitability</span>
                <span className="font-medium">{profitabilityScore}%</span>
              </div>
              <Progress value={profitabilityScore} className="h-1.5" />
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Sustainability</span>
                <span className="font-medium">{sustainabilityScore}%</span>
              </div>
              <Progress value={sustainabilityScore} className="h-1.5 bg-slate-100" indicatorColor="bg-emerald-500" />
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Difficulty</span>
                <span className="font-medium">{difficultyScore}%</span>
              </div>
              <Progress value={difficultyScore} className="h-1.5 bg-slate-100" indicatorColor="bg-amber-500" />
            </div>
          </div>
          
          <div className="flex items-center justify-end pt-2 mt-2 border-t border-slate-100">
            <a href="#" className="text-sm font-medium text-primary flex items-center">
              Learn More
              <motion.span 
                variants={arrowVariants} 
                animate={isActive ? 'hover' : 'initial'}
              >
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </motion.span>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Custom Progress component indicatorColor prop support
const ProgressWithCustomColor = ({ value, className, indicatorColor }: { value: number, className?: string, indicatorColor?: string }) => {
  return (
    <Progress
      value={value}
      className={className}
      // This is a workaround since the original Progress doesn't support custom colors directly
      style={{
        '--indicator-color': indicatorColor || 'var(--primary)',
      } as React.CSSProperties}
    />
  );
};