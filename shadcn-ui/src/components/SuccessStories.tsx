import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Node Operator, GreenLoop Solutions",
      image: "/assets/testimonials/sarah.jpg",
      quote: "ReLoop helped us transform our local waste management business into a thriving circular economy hub. The process guides were detailed enough for us to implement them successfully despite having no prior experience in plastic recycling.",
      before: "2 employees, $50k revenue",
      after: "12 employees, $450k revenue"
    },
    {
      name: "David Chen",
      role: "Procurement Manager, EcoProducts Inc.",
      image: "/assets/testimonials/david.jpg",
      quote: "Finding reliable sources of recycled materials was always a challenge until we discovered ReLoop. Now we have consistent supply chains for our eco-friendly product lines, and the quality is excellent.",
      before: "30% recycled materials",
      after: "85% recycled materials"
    },
    {
      name: "Michael Thompson",
      role: "Entrepreneur & Node Owner",
      image: "/assets/testimonials/michael.jpg",
      quote: "I was looking to start a sustainable business with limited capital. ReLoop's coffee grounds to mushroom value chain had a low entry barrier but high profitability. Within 8 months, we've become profitable and are now expanding.",
      before: "Unemployment",
      after: "Profitable business with 5 employees"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          See how entrepreneurs and businesses are thriving with ReLoop
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-slate-600 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-slate-50 p-3 rounded-lg mt-auto">
                  <div className="grid grid-cols-2 divide-x divide-slate-200">
                    <div className="pr-3">
                      <p className="text-xs text-slate-500">Before</p>
                      <p className="text-sm font-medium">{testimonial.before}</p>
                    </div>
                    <div className="pl-3">
                      <p className="text-xs text-slate-500">After</p>
                      <p className="text-sm font-medium text-primary">{testimonial.after}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};