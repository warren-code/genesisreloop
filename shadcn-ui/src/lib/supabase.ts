import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// Use default values if environment variables are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example-anon-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase credentials are missing. Please check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Authentication helpers
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { data, error };
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Database helpers for value chains
export async function getFeaturedValueChains() {
  const { data, error } = await supabase
    .from('value_chains')
    .select('*')
    .eq('featured', true)
    .limit(10);
  
  return { data, error };
}

export async function getAllValueChains() {
  const { data, error } = await supabase
    .from('value_chains')
    .select('*');
  
  return { data, error };
}

export async function getValueChainById(id: string) {
  const { data, error } = await supabase
    .from('value_chains')
    .select('*')
    .eq('id', id)
    .single();
  
  return { data, error };
}

// Node helpers
export async function getNodes() {
  const { data, error } = await supabase
    .from('nodes')
    .select('*');
  
  return { data, error };
}

// Platform statistics
export async function getPlatformStats() {
  const { data, error } = await supabase
    .from('platform_stats')
    .select('*')
    .single();
  
  return { data, error };
}