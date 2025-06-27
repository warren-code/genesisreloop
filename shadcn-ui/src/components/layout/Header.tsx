import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, getCurrentUser } from '@/lib/supabase';
import { useEffect } from 'react';

const Header = () => {
  const [user, setUser] = useState<{ email?: string; user_metadata?: Record<string, string> } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    
    checkUser();
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">
            ReLoop
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Value Chains</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/feedstock" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                        <div className="font-medium">Feedstock</div>
                        <div className="text-sm text-slate-600">Explore waste source inputs and their potential</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/chemhub" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                        <div className="font-medium">ChemHub</div>
                        <div className="text-sm text-slate-600">Process chains and transformation methods</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/loopcrafted" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                        <div className="font-medium">LoopCrafted</div>
                        <div className="text-sm text-slate-600">Finished upcycled products and applications</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/marketplace" className={navigationMenuTriggerStyle()}>
                Marketplace
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/community" className={navigationMenuTriggerStyle()}>
                Community
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-500" />
            <Input
              type="search"
              placeholder="Search value chains..."
              className="w-64 pl-8 rounded-full h-9 bg-slate-100"
            />
          </div>

          {user ? (
            <div className="flex items-center space-x-2">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <div className="dropdown dropdown-end">
                <Avatar>
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback>{user.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="hidden dropdown-content absolute right-0 mt-2 p-2 shadow-lg rounded-lg bg-white z-50 min-w-[200px]">
                  <div className="py-2 px-4 border-b border-slate-200">
                    <p className="font-medium">{user.user_metadata?.full_name || user.email}</p>
                    <p className="text-sm text-slate-600 truncate">{user.email}</p>
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-slate-100 rounded-md">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-slate-100 rounded-md">Settings</Link>
                  <button 
                    onClick={handleSignOut} 
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-100 rounded-md"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          <Button variant="ghost" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;