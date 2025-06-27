import React from 'react';

// Feedstock placeholder with teal/green colors
const FeedstockPlaceholder: React.FC<{
  className?: string;
  width?: number;
  height?: number;
}> = ({ className = "", width = 200, height = 200 }) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 ${className}`}
      style={{ width, height }}
    >
      <div className="text-white flex flex-col items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="w-12 h-12 mb-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
        <span className="text-sm font-medium opacity-90">Feedstock Material</span>
      </div>
    </div>
  );
};

export default FeedstockPlaceholder;