import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tag, Recycle, Lightbulb, ArrowRightCircle } from 'lucide-react';

interface ValueChainProps {
  valueChain: {
    id: string;
    title: string;
    description: string;
    category: string;
    feedstockType: string;
    productType: string;
    difficulty: number;
    profitability: number;
    sustainability: number;
    image: string;
    slug: string;
  };
}

export default function ValueChainCard({ valueChain }: ValueChainProps) {
  const getDifficultyLabel = (level: number) => {
    if (level < 3) return { label: "Beginner", color: "bg-green-100 text-green-800 border-green-200" };
    if (level < 7) return { label: "Intermediate", color: "bg-amber-100 text-amber-800 border-amber-200" };
    return { label: "Advanced", color: "bg-red-100 text-red-800 border-red-200" };
  };

  const difficulty = getDifficultyLabel(valueChain.difficulty);
  
  // Simple function to render profitability/sustainability stars
  const renderRating = (rating: number, maxRating: number = 5) => {
    return (
      <div className="flex items-center">
        {[...Array(maxRating)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:-translate-y-1 border bg-background/80 backdrop-blur-sm">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={valueChain.image || "/images/placeholder-value-chain.jpg"} 
          alt={valueChain.title}
          className="w-full h-full object-cover"
        />
        <Badge 
          variant="outline" 
          className={`absolute top-3 right-3 ${difficulty.color}`}
        >
          {difficulty.label}
        </Badge>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="flex items-center gap-1 text-xs">
            <Tag className="h-3 w-3" />
            {valueChain.category}
          </Badge>
        </div>
        <h3 className="text-lg font-medium mb-2 line-clamp-1">{valueChain.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {valueChain.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Profitability</div>
            {renderRating(valueChain.profitability)}
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Sustainability</div>
            {renderRating(valueChain.sustainability)}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex flex-col gap-3">
        <div className="w-full border-t my-2"></div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <Recycle className="h-4 w-4 text-muted-foreground" />
            <span className="truncate" title={valueChain.feedstockType}>
              {valueChain.feedstockType}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
            <span className="truncate" title={valueChain.productType}>
              {valueChain.productType}
            </span>
          </div>
        </div>
        
        <Link 
          to={`/value-chains/${valueChain.slug}`} 
          className="flex items-center justify-end text-sm text-primary gap-1 hover:underline mt-1 group"
        >
          View Details
          <ArrowRightCircle className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
}