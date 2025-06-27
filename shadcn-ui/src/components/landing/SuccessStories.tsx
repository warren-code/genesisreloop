import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Quote, 
  Star 
} from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating: number;
  valueChain?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "ReLoop helped me transform my small recycling business into a thriving upcycling operation. The PET to polyester value chain documentation was incredibly detailed and practical.",
    author: {
      name: "James Wilson",
      title: "Founder",
      company: "EcoFiber Solutions",
      avatar: "/assets/images/testimonials/james.jpg"
    },
    rating: 5,
    valueChain: "PET Plastic to Polyester Fiber"
  },
  {
    id: "2",
    content: "As a sustainability manager, I was able to find reliable processors for our textile waste through ReLoop. The platform connected us to partners who could truly use our materials.",
    author: {
      name: "Maria Rodriguez",
      title: "Sustainability Lead",
      company: "FashionForward Inc.",
      avatar: "/assets/images/testimonials/maria.jpg"
    },
    rating: 5
  },
  {
    id: "3",
    content: "The coffee grounds to mushrooms value chain has completely transformed our café's waste stream. We now produce gourmet mushrooms from our own coffee waste and sell them to local restaurants.",
    author: {
      name: "David Chen",
      title: "Owner",
      company: "Urban Brew Café",
      avatar: "/assets/images/testimonials/david.jpg"
    },
    rating: 4,
    valueChain: "Coffee Grounds to Mushrooms"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Hear from members who have transformed waste into opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-sm border-white/10 text-white overflow-hidden transition-all duration-300 hover:bg-white/15"
            >
              <CardContent className="p-6 relative">
                <Quote className="h-10 w-10 text-white/10 absolute top-4 right-4" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400' : 'text-white/20'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                
                <p className="mb-6 text-slate-200">{testimonial.content}</p>
                
                {testimonial.valueChain && (
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                    {testimonial.valueChain}
                  </Badge>
                )}
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-white/20">
                    <AvatarImage src={testimonial.author.avatar} />
                    <AvatarFallback>{testimonial.author.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.author.name}</h4>
                    <p className="text-sm text-slate-300">
                      {testimonial.author.title}, {testimonial.author.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;