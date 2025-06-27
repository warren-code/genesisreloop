import React from 'react';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-[url('/assets/patterns/grid.svg')] bg-fixed">
        <Navbar />
        <main>{children}</main>
        <footer className="py-8 px-4 mt-16 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold text-lg text-primary">ReLoop</h3>
                <p className="text-sm text-slate-600">Transform Waste into Value</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                  About
                </a>
                <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                  Terms
                </a>
                <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-slate-500">
              &copy; {new Date().getFullYear()} ReLoop. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};