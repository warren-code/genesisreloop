import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Lightbulb, 
  Wrench, 
  ShoppingCart 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-teal-600" />,
      title: "Explore Value Chains",
      description: "Browse our library of 100+ circular economy value chains across different categories to find opportunities that match your resources and interests."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-amber-500" />,
      title: "Learn Processes",
      description: "Access detailed scientific information, step-by-step guides, and economic analyses to understand how to implement your chosen value chain."
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Set Up Your Node",
      description: "Follow our implementation guides to establish your circular economy node, source equipment, and develop necessary skills."
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-green-600" />,
      title: "Buy & Sell",
      description: "Connect with other members to source feedstock materials and sell your upcycled products through our integrated marketplace."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From waste to value in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200 transition-all duration-300 hover:shadow-md relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-slate-100/50 z-0"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-slate-600 text-center">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-slate-300"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-0 -translate-y-1/2 w-2 h-2 border-t border-r border-slate-300 rotate-45"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-xl mx-auto text-center">
          <p className="text-slate-600">
            Our platform provides everything you need to start your circular economy journey, from detailed process guides to marketplace connections and community support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;