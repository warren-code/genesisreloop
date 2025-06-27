import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface SuccessStory {
  id: string;
  name: string;
  location: string;
  title: string;
  quote: string;
  avatarUrl: string;
  avatarFallback: string;
  stats: {
    wasteProcessed: string;
    revenueGenerated: string;
    jobsCreated: string;
  };
}

const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Sarah Nguyen",
    location: "Portland, OR",
    title: "Textile Waste Recycler",
    quote: "ReLoop helped me launch my textile recycling business with clear process guides and connections to local waste suppliers. We've now diverted over 20 tons of textile waste from landfill.",
    avatarUrl: "",
    avatarFallback: "SN",
    stats: {
      wasteProcessed: "20+ tons",
      revenueGenerated: "$125K",
      jobsCreated: "6 local jobs"
    }
  },
  {
    id: "2",
    name: "Miguel Fernandez",
    location: "Barcelona, Spain",
    title: "Food Waste to Compost",
    quote: "The platform connected our food waste operation with local restaurants and now we're producing premium compost for urban farms. Our node is profitable and expanding fast.",
    avatarUrl: "",
    avatarFallback: "MF",
    stats: {
      wasteProcessed: "450 tons",
      revenueGenerated: "€210K",
      jobsCreated: "8 local jobs"
    }
  },
  {
    id: "3",
    name: "Aisha Mbeki",
    location: "Nairobi, Kenya",
    title: "Plastic to Construction Materials",
    quote: "ReLoop's process guides enabled us to turn plastic waste into durable construction materials. We've built relationships with waste collectors and construction companies.",
    avatarUrl: "",
    avatarFallback: "AM",
    stats: {
      wasteProcessed: "80+ tons",
      revenueGenerated: "KSh 4.2M",
      jobsCreated: "12 local jobs"
    }
  }
];

export default function SuccessStories() {
  const [activeStory, setActiveStory] = React.useState(0);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real people creating real impact with circular economy value chains. 
            See how ReLoop is helping transform waste into opportunity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border bg-background/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2 p-6 md:p-8">
                  <Quote className="h-12 w-12 text-muted-foreground/30 mb-4" />
                  <motion.blockquote 
                    key={successStories[activeStory].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-lg mb-6"
                  >
                    "{successStories[activeStory].quote}"
                  </motion.blockquote>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={successStories[activeStory].avatarUrl} alt={successStories[activeStory].name} />
                      <AvatarFallback className="bg-primary/20 text-primary-foreground">
                        {successStories[activeStory].avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{successStories[activeStory].name}</h4>
                      <p className="text-sm text-muted-foreground">{successStories[activeStory].title}</p>
                      <p className="text-sm text-muted-foreground">{successStories[activeStory].location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-6">
                  <h4 className="font-medium mb-4">Impact Metrics</h4>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">Waste Processed</dt>
                      <dd className="text-lg font-medium">{successStories[activeStory].stats.wasteProcessed}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Revenue Generated</dt>
                      <dd className="text-lg font-medium">{successStories[activeStory].stats.revenueGenerated}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Jobs Created</dt>
                      <dd className="text-lg font-medium">{successStories[activeStory].stats.jobsCreated}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeStory === index ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`View success story ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full">
              Read More Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}