import React from 'react';

// Product placeholder with blue colors
const ProductPlaceholder: React.FC<{
  className?: string;
  width?: number;
  height?: number;
}> = ({ className = "", width = 200, height = 200 }) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 ${className}`}
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        <span className="text-sm font-medium opacity-90">LoopCrafted Product</span>
      </div>
    </div>
  );
};

export default ProductPlaceholder;