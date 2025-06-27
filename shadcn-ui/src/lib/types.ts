// Types definitions for the ReLoop platform
export interface ValueChain {
  id: string;
  name: string;
  category: string;
  image: string;
  profitabilityScore: number;
  sustainabilityScore: number;
  difficultyScore: number;
  description: string;
}

export interface Feedstock {
  id: string;
  name: string;
  description: string;
  category: string;
  sources: string[];
  collectionMethods: string[];
  availabilityInfo: {
    regions?: string[];
    seasonality?: string;
    estimatedVolume?: string;
  };
  images: string[];
}

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
  durationHours: number;
  temperature?: number;
  pressure?: number;
  equipment: Equipment[];
  skills: Skill[];
  parameters?: Record<string, unknown>;
}

export interface Process {
  id: string;
  name: string;
  description: string;
  scientificBasis: string;
  steps: ProcessStep[];
  requiredEquipment: Equipment[];
  requiredSkills: Skill[];
  economicAnalysis: {
    startupCosts: {
      equipment: number;
      materials: number;
      space: number;
      licensing: number;
      other: number;
    };
    operationalCosts: {
      materials: number;
      labor: number;
      energy: number;
      maintenance: number;
      other: number;
    };
    revenueProjection: {
      lowEstimate: number;
      averageEstimate: number;
      highEstimate: number;
    };
    roiMonths: number;
  };
  safetyConsiderations: {
    risks: string[];
    precautions: string[];
    ppe: string[];
    regulations: string[];
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  technicalSpecifications: Record<string, string>;
  applications: string[];
  certifications: string[];
  marketInformation: {
    averagePrice: number;
    priceUnit: string;
    demandTrend: 'increasing' | 'stable' | 'decreasing';
    marketSize: string;
    competitiveProducts: string[];
  };
  images: string[];
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  category: string;
  estimatedCost: number;
  specifications: string[];
  suppliers: string[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  difficultyLevel: number;
  trainingResources: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'nodeOperator' | 'wasteProvider' | 'buyer';
  profile: UserProfile;
  subscriptions: Subscription[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  userId: string;
  bio: string;
  avatar: string;
  location: string;
  expertise: string[];
  interests: string[];
  contactInfo: {
    phone?: string;
    email?: string;
    website?: string;
  };
  publicProfile: boolean;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  lastActive: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'expired' | 'pending';
  startDate: Date;
  endDate: Date;
  billingDate: Date;
  amount: number;
  paymentMethod: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  features: Feature[];
  transactionLimit: number;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  isPremium: boolean;
}