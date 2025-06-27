import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  X,
  User,
  LogIn
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-white/70 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">
                ReLoop
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-4 ml-6">
              <Link to="/feedstock" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Feedstock
              </Link>
              <Link to="/chemhub" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                ChemHub
              </Link>
              <Link to="/products" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                LoopCrafted
              </Link>
              <Link to="/marketplace" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Marketplace
              </Link>
              <Link to="/community" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Community
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="absolute inset-0 h-16 bg-white/90 backdrop-blur-md flex items-center px-4 z-10">
                <input
                  type="text"
                  placeholder="Search value chains, products, processes..."
                  className="flex-1 h-10 bg-white border border-slate-200 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-2 rounded-md text-slate-500 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-md text-slate-500 hover:text-slate-700"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
            
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-1" size="sm">
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
              <Button className="flex items-center gap-1" size="sm">
                <User className="h-4 w-4" />
                Sign Up
              </Button>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/feedstock" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                    Feedstock
                  </Link>
                  <Link to="/chemhub" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                    ChemHub
                  </Link>
                  <Link to="/products" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                    LoopCrafted
                  </Link>
                  <Link to="/marketplace" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                    Marketplace
                  </Link>
                  <Link to="/community" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                    Community
                  </Link>
                  
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <Button variant="outline" className="w-full mb-2">Log In</Button>
                    <Button className="w-full">Sign Up</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};