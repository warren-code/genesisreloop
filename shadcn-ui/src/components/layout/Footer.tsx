import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">ReLoop</h3>
            <p className="text-slate-300 mb-6">
              Transforming waste into value through an interconnected network of circular economy value chains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-teal-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/feedstock" className="text-slate-300 hover:text-teal-400 transition">Feedstock</Link></li>
              <li><Link to="/chemhub" className="text-slate-300 hover:text-teal-400 transition">ChemHub</Link></li>
              <li><Link to="/loopcrafted" className="text-slate-300 hover:text-teal-400 transition">LoopCrafted</Link></li>
              <li><Link to="/marketplace" className="text-slate-300 hover:text-teal-400 transition">Marketplace</Link></li>
              <li><Link to="/community" className="text-slate-300 hover:text-teal-400 transition">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-slate-300 hover:text-teal-400 transition">Blog</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-teal-400 transition">Case Studies</Link></li>
              <li><Link to="/guides" className="text-slate-300 hover:text-teal-400 transition">Guides</Link></li>
              <li><Link to="/documentation" className="text-slate-300 hover:text-teal-400 transition">Documentation</Link></li>
              <li><Link to="/help-center" className="text-slate-300 hover:text-teal-400 transition">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-teal-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-300 hover:text-teal-400 transition">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-teal-400 transition">Contact</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-teal-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-300 hover:text-teal-400 transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} ReLoop Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;