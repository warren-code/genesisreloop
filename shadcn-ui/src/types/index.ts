// Types for the ReLoop platform

// Value Chain Types
export interface ValueChain {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  profitability: number; // 1-10 scale
  sustainability: number; // 1-10 scale
  difficulty: number; // 1-10 scale
  featured: boolean;
  created_at: string;
}

export interface FeedstockType {
  id: string;
  name: string;
  description: string;
  image: string;
  source_types: string[];
  collection_methods: string[];
  storage_requirements: string;
  value_chain_ids: string[];
}

export interface ProcessType {
  id: string;
  name: string;
  description: string;
  scientific_basis: string;
  equipment_requirements: string[];
  safety_considerations: string[];
  startup_cost: number;
  operational_cost: number;
  estimated_revenue: number;
  required_skills: string[];
  feedstock_ids: string[];
  product_ids: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  applications: string[];
  market_value: {
    min: number;
    max: number;
  };
  certifications: string[];
  physical_properties: Record<string, string>;
  chemical_properties: Record<string, string>;
  process_ids: string[];
}

// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  organization?: string;
  role: 'individual' | 'organization' | 'admin';
  created_at: string;
}

// Node Network Types
export interface Node {
  id: string;
  name: string;
  owner_id: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    country: string;
  };
  active_value_chains: string[];
  description: string;
  founded_date: string;
  contact_info: {
    email?: string;
    phone?: string;
    website?: string;
  };
  public: boolean;
}

// Marketplace Types
export interface Listing {
  id: string;
  seller_id: string;
  title: string;
  description: string;
  images: string[];
  category: 'feedstock' | 'product';
  related_item_id: string; // ID of related feedstock or product
  price: number;
  quantity: number;
  unit: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    country: string;
  };
  created_at: string;
  expires_at: string;
  status: 'active' | 'sold' | 'expired';
}

// Platform Statistics
export interface PlatformStats {
  value_chain_count: number;
  active_node_count: number;
  job_opportunity_count: number;
  waste_stream_count: number;
}

// Subscription Plans
export type SubscriptionTier = 'basic' | 'standard' | 'premium';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  billing_period: 'monthly' | 'annual';
  features: string[];
}