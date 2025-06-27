// src/data/valueChains.ts
import { ValueChain } from '../types';

export const valueChains: ValueChain[] = [
  {
    id: "vc-1",
    title: "Plastic to Fuel Conversion",
    description: "Transform plastic waste into usable fuel through pyrolysis. Convert non-recyclable plastic into diesel, gasoline, and kerosene alternatives.",
    category: "Waste to Energy",
    feedstockType: "Mixed Plastic Waste",
    productType: "Liquid Fuel",
    difficulty: 8,
    profitability: 4,
    sustainability: 4,
    image: "/assets/value-chains/plastic-to-fuel.jpg",
    slug: "plastic-to-fuel"
  },
  {
    id: "vc-2",
    title: "Textile Waste to New Fiber",
    description: "Process textile waste into reusable fiber for new fabric production. Mechanical recycling of natural and synthetic textiles.",
    category: "Textile Recycling",
    feedstockType: "Textile Waste",
    productType: "Recycled Fiber",
    difficulty: 6,
    profitability: 3,
    sustainability: 5,
    image: "/assets/value-chains/textile-waste-to-fiber.jpg",
    slug: "textile-waste-to-fiber"
  },
  {
    id: "vc-3",
    title: "Food Waste to Compost",
    description: "Convert food waste into premium compost for agricultural and gardening applications using aerobic decomposition.",
    category: "Organic Waste",
    feedstockType: "Food Waste",
    productType: "Compost",
    difficulty: 2,
    profitability: 3,
    sustainability: 5,
    image: "/assets/value-chains/food-waste-to-compost.jpg",
    slug: "food-waste-to-compost"
  },
  {
    id: "vc-4",
    title: "Glass Waste to Construction Materials",
    description: "Process waste glass into construction materials including aggregate for concrete, paving materials, and insulation.",
    category: "Construction Materials",
    feedstockType: "Waste Glass",
    productType: "Construction Aggregate",
    difficulty: 5,
    profitability: 3,
    sustainability: 4,
    image: "/assets/value-chains/glass-to-construction.jpg",
    slug: "glass-waste-to-construction"
  },
  {
    id: "vc-5",
    title: "Cooking Oil to Biodiesel",
    description: "Convert used cooking oil into biodiesel fuel through transesterification, creating a renewable alternative to petroleum diesel.",
    category: "Biofuels",
    feedstockType: "Used Cooking Oil",
    productType: "Biodiesel",
    difficulty: 5,
    profitability: 4,
    sustainability: 5,
    image: "/assets/value-chains/cooking-oil-to-biodiesel.jpg",
    slug: "cooking-oil-to-biodiesel"
  },
  {
    id: "vc-6",
    title: "Electronic Waste to Precious Metals",
    description: "Extract valuable metals from electronic waste through mechanical and chemical processes, recovering gold, silver, platinum, and copper.",
    category: "Metal Recovery",
    feedstockType: "Electronic Waste",
    productType: "Precious Metals",
    difficulty: 9,
    profitability: 5,
    sustainability: 4,
    image: "/assets/value-chains/e-waste-to-metals.jpg",
    slug: "e-waste-to-precious-metals"
  },
  {
    id: "vc-7",
    title: "Agricultural Waste to Biochar",
    description: "Transform agricultural waste into biochar through pyrolysis, creating a valuable soil amendment and carbon sequestration product.",
    category: "Agricultural Solutions",
    feedstockType: "Agricultural Waste",
    productType: "Biochar",
    difficulty: 4,
    profitability: 3,
    sustainability: 5,
    image: "/assets/value-chains/ag-waste-to-biochar.jpg",
    slug: "agricultural-waste-to-biochar"
  },
  {
    id: "vc-8",
    title: "Paper Waste to Mushroom Cultivation",
    description: "Use waste paper as a substrate for growing gourmet and medicinal mushrooms, creating a high-value food product from waste.",
    category: "Food Production",
    feedstockType: "Paper Waste",
    productType: "Gourmet Mushrooms",
    difficulty: 3,
    profitability: 4,
    sustainability: 5,
    image: "/assets/value-chains/paper-to-mushrooms.jpg",
    slug: "paper-waste-to-mushrooms"
  },
  {
    id: "vc-9",
    title: "Tire Waste to Rubber Products",
    description: "Process end-of-life tires into rubber crumb for playgrounds, sports surfaces, and manufacturing applications.",
    category: "Rubber Recycling",
    feedstockType: "Waste Tires",
    productType: "Rubber Crumb",
    difficulty: 7,
    profitability: 4,
    sustainability: 4,
    image: "/assets/value-chains/tire-to-rubber-products.jpg",
    slug: "tire-waste-to-rubber"
  },
  {
    id: "vc-10",
    title: "Coffee Grounds to Mushroom Cultivation",
    description: "Use spent coffee grounds as a growing medium for gourmet mushrooms, creating a high-value food product from cafe waste.",
    category: "Food Production",
    feedstockType: "Coffee Grounds",
    productType: "Gourmet Mushrooms",
    difficulty: 2,
    profitability: 4,
    sustainability: 5,
    image: "/assets/value-chains/coffee-to-mushrooms.jpg",
    slug: "coffee-grounds-to-mushrooms"
  },
];

export default valueChains;