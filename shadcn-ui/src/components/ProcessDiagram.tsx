import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProcessStep } from '@/lib/types';

interface ProcessDiagramProps {
  steps: ProcessStep[];
  currentStep?: number;
  onStepClick?: (stepIndex: number) => void;
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({
  steps,
  currentStep = -1,
  onStepClick,
}) => {
  return (
    <div className="w-full py-6">
      {/* Horizontal Process Flow for Medium and Larger Screens */}
      <div className="hidden md:block">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Node */}
              <motion.div 
                className={`relative z-10 flex-shrink-0 ${onStepClick ? 'cursor-pointer' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => onStepClick && onStepClick(index)}
              >
                <div 
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-full border-2 
                    ${index === currentStep 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-slate-300 bg-white text-slate-500'}
                    ${index < currentStep ? 'border-primary/70 bg-primary/10 text-primary' : ''}
                  `}
                >
                  {index + 1}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span 
                    className={`text-sm font-medium ${index === currentStep ? 'text-primary' : 'text-slate-600'}`}
                  >
                    {step.name}
                  </span>
                </div>
              </motion.div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-grow mx-2 relative">
                  <div className="h-0.5 bg-slate-200 absolute top-6 left-0 right-0">
                    <motion.div 
                      className="h-full bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: index < currentStep ? 1 : 0 
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  </div>
                  <ArrowRightIcon 
                    className={`
                      absolute top-4 right-[-8px] h-4 w-4 
                      ${index < currentStep ? 'text-primary' : 'text-slate-300'}
                    `} 
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Vertical Process Flow for Small Screens */}
      <div className="md:hidden">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={`flex items-start ${onStepClick ? 'cursor-pointer' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => onStepClick && onStepClick(index)}
            >
              {/* Step Node */}
              <div 
                className={`
                  flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 mr-4
                  ${index === currentStep 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-slate-300 bg-white text-slate-500'}
                  ${index < currentStep ? 'border-primary/70 bg-primary/10 text-primary' : ''}
                `}
              >
                {index + 1}
              </div>
              
              {/* Step Information */}
              <div className="flex-grow">
                <h4 
                  className={`font-medium ${index === currentStep ? 'text-primary' : 'text-slate-800'}`}
                >
                  {step.name}
                </h4>
                
                {index === currentStep && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 text-sm text-slate-600"
                  >
                    <p>{step.description}</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="mr-2 mb-1">
                        {step.durationHours} hours
                      </Badge>
                      {step.temperature && (
                        <Badge variant="outline" className="mr-2 mb-1">
                          {step.temperature}°C
                        </Badge>
                      )}
                      {step.pressure && (
                        <Badge variant="outline" className="mb-1">
                          {step.pressure} psi
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute h-14 w-0.5 bg-slate-200 ml-5 mt-10">
                  <motion.div 
                    className="h-full bg-primary origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ 
                      scaleY: index < currentStep ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};