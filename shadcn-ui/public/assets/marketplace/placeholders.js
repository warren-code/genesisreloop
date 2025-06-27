/**
 * Placeholder Image Utility
 * 
 * This script provides fallback placeholder paths for the marketplace
 * when actual image files aren't available or fail to load.
 */

// Fallback paths to use in the app if images don't load
const PLACEHOLDER_PATHS = {
  // These are the paths we attempt to load first
  FEEDSTOCK: '/assets/marketplace/feedstock-placeholder.html',
  PRODUCT: '/assets/marketplace/product-placeholder.html',
  
  // These are the React component paths to use as fallbacks
  FALLBACK_FEEDSTOCK: 'FeedstockPlaceholder',
  FALLBACK_PRODUCT: 'ProductPlaceholder',
};

// CSS for embedded placeholders (used if loading the placeholder via iframe)
const PLACEHOLDER_STYLES = {
  feedstock: {
    background: 'linear-gradient(135deg, #14b8a6, #16a34a)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    height: '100%',
  },
  product: {
    background: 'linear-gradient(135deg, #3b82f6, #4f46e5)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    height: '100%',
  }
};

/**
 * Helper function to handle image loading errors by replacing with placeholders
 * @param {Event} event - The error event from the img element
 * @param {'feedstock'|'product'} type - The type of placeholder to use
 */
function handlePlaceholderFallback(event, type) {
  const target = event.target;
  if (!target) return;
  
  // Set a background color and add placeholder text
  target.style.background = type === 'feedstock' 
    ? PLACEHOLDER_STYLES.feedstock.background 
    : PLACEHOLDER_STYLES.product.background;
    
  target.style.display = 'flex';
  target.style.alignItems = 'center';
  target.style.justifyContent = 'center';
  
  // Add placeholder text
  const textElement = document.createElement('div');
  textElement.innerText = type === 'feedstock' ? 'Feedstock Material' : 'LoopCrafted Product';
  textElement.style.color = 'white';
  textElement.style.fontWeight = '500';
  textElement.style.fontSize = '14px';
  
  // Clear the element and append the text
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
  target.appendChild(textElement);
}

// Export the utilities for use in the application
window.MarketplacePlaceholders = {
  paths: PLACEHOLDER_PATHS,
  styles: PLACEHOLDER_STYLES,
  handleFallback: handlePlaceholderFallback
};