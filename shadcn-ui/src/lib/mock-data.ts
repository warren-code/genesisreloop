import { ValueChain } from './types';

// Mock data for featured value chains
export const featuredValueChains: ValueChain[] = [
  {
    id: "1",
    name: "PET Plastic to Textile",
    category: "Plastic Recycling",
    image: "/assets/value-chains/pet-textile.jpg",
    profitabilityScore: 85,
    sustainabilityScore: 90,
    difficultyScore: 60,
    description: "Transform PET plastic waste into high-quality polyester textile fibers"
  },
  {
    id: "2",
    name: "Coffee Grounds to Mushrooms",
    category: "Food Waste",
    image: "/assets/value-chains/coffee-mushrooms.jpg",
    profitabilityScore: 70,
    sustainabilityScore: 95,
    difficultyScore: 40,
    description: "Use spent coffee grounds as substrate for gourmet mushroom cultivation"
  },
  {
    id: "3",
    name: "Sawdust to Biochar",
    category: "Wood Waste",
    image: "/assets/value-chains/sawdust-biochar.jpg",
    profitabilityScore: 65,
    sustainabilityScore: 90,
    difficultyScore: 55,
    description: "Convert sawdust waste into biochar for soil amendment and carbon sequestration"
  },
  {
    id: "4",
    name: "Food Waste to Compost",
    category: "Food Waste",
    image: "/assets/value-chains/food-compost.jpg",
    profitabilityScore: 60,
    sustainabilityScore: 85,
    difficultyScore: 30,
    description: "Process food waste into high-quality compost for agricultural applications"
  },
  {
    id: "5",
    name: "Used Cooking Oil to Biodiesel",
    category: "Food Waste",
    image: "/assets/value-chains/oil-biodiesel.jpg",
    profitabilityScore: 75,
    sustainabilityScore: 80,
    difficultyScore: 65,
    description: "Convert used cooking oil into biodiesel fuel for transportation"
  },
  {
    id: "6",
    name: "Glass Waste to Construction Materials",
    category: "Glass Recycling",
    image: "/assets/value-chains/glass-construction.jpg",
    profitabilityScore: 70,
    sustainabilityScore: 75,
    difficultyScore: 60,
    description: "Process waste glass into construction materials like countertops and tiles"
  },
  {
    id: "7",
    name: "Textile Waste to Insulation",
    category: "Textile Recycling",
    image: "/assets/value-chains/textile-insulation.jpg",
    profitabilityScore: 65,
    sustainabilityScore: 85,
    difficultyScore: 50,
    description: "Convert textile waste into thermal and acoustic insulation materials"
  },
  {
    id: "8",
    name: "Agricultural Waste to Packaging",
    category: "Agricultural Waste",
    image: "/assets/value-chains/agri-packaging.jpg",
    profitabilityScore: 60,
    sustainabilityScore: 90,
    difficultyScore: 70,
    description: "Transform agricultural waste like rice husks into biodegradable packaging"
  },
  {
    id: "9",
    name: "E-waste to Precious Metals",
    category: "Electronic Waste",
    image: "/assets/value-chains/ewaste-metals.jpg",
    profitabilityScore: 90,
    sustainabilityScore: 70,
    difficultyScore: 85,
    description: "Recover gold, silver, and other precious metals from electronic waste"
  },
  {
    id: "10",
    name: "Construction Debris to Aggregate",
    category: "Construction Waste",
    image: "/assets/value-chains/debris-aggregate.jpg",
    profitabilityScore: 65,
    sustainabilityScore: 75,
    difficultyScore: 45,
    description: "Process construction and demolition waste into recycled aggregate for new construction"
  }
];

// Mock data for subscription plans
export const subscriptionPlans = [
  {
    id: "1",
    name: "Basic",
    description: "Perfect for startups and small businesses",
    price: 49,
    billingPeriod: "monthly",
    features: [
      { id: "1", name: "Access to all value chain documentation", description: "Full access to our library of 100+ value chain processes", isPremium: false },
      { id: "2", name: "Basic marketplace features", description: "List up to 10 items per month", isPremium: false },
      { id: "3", name: "Community access", description: "Connect with other circular economy enthusiasts", isPremium: false },
      { id: "4", name: "Single node registration", description: "Register one physical location on our network", isPremium: false }
    ],
    transactionLimit: 10
  },
  {
    id: "2",
    name: "Standard",
    description: "Ideal for growing businesses",
    price: 149,
    billingPeriod: "monthly",
    features: [
      { id: "1", name: "Access to all value chain documentation", description: "Full access to our library of 100+ value chain processes", isPremium: false },
      { id: "2", name: "Enhanced marketplace features", description: "List up to 50 items per month", isPremium: true },
      { id: "3", name: "Community access", description: "Connect with other circular economy enthusiasts", isPremium: false },
      { id: "4", name: "Multiple node registration", description: "Register up to 3 physical locations on our network", isPremium: true },
      { id: "5", name: "Advanced analytics", description: "Get detailed insights into your circular economy operations", isPremium: true }
    ],
    transactionLimit: 50
  },
  {
    id: "3",
    name: "Premium",
    description: "For established businesses and organizations",
    price: 349,
    billingPeriod: "monthly",
    features: [
      { id: "1", name: "Access to all value chain documentation", description: "Full access to our library of 100+ value chain processes", isPremium: false },
      { id: "2", name: "Unlimited marketplace listings", description: "No limit on marketplace listings", isPremium: true },
      { id: "3", name: "Community access", description: "Connect with other circular economy enthusiasts", isPremium: false },
      { id: "4", name: "Unlimited node registration", description: "Register unlimited physical locations on our network", isPremium: true },
      { id: "5", name: "Advanced analytics", description: "Get detailed insights into your circular economy operations", isPremium: true },
      { id: "6", name: "Dedicated support", description: "Get personalized support from our team of experts", isPremium: true },
      { id: "7", name: "Custom integrations", description: "API access and custom integrations with your existing systems", isPremium: true }
    ],
    transactionLimit: Infinity
  }
];