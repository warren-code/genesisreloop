// src/data/products.ts
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Pyrolytic Diesel Alternative",
    description: "A diesel fuel alternative derived from plastic waste through pyrolysis. This fuel can be used in diesel engines with minimal modifications and produces fewer particulate emissions than conventional diesel.",
    marketValue: {
      min: 0.80,
      max: 1.20,
      currency: "USD"
    },
    applications: [
      "Industrial generators", 
      "Agricultural machinery", 
      "Mixed with conventional diesel (up to 20%)",
      "Heating oil replacement"
    ],
    specifications: [
      {
        property: "Cetane Number",
        value: "38-45"
      },
      {
        property: "Sulfur Content",
        value: "<15 ppm"
      },
      {
        property: "Flash Point",
        value: "52°C"
      },
      {
        property: "Density at 15°C",
        value: "820-845 kg/m³"
      },
      {
        property: "Viscosity at 40°C",
        value: "2.0-4.5 mm²/s"
      }
    ],
    certifications: [
      "ASTM D975 (partial compliance)",
      "EN 590 (partial compliance)"
    ],
    image: "/assets/products/pyrolytic-diesel.jpg",
    relatedFeedstockId: "feed-1",
    relatedChemHubId: "chem-1",
    slug: "pyrolytic-diesel-alternative"
  },
  {
    id: "prod-2",
    name: "Recycled Textile Fiber",
    description: "High-quality recycled fiber derived from textile waste through mechanical and chemical processing. This fiber can be spun into new yarns and fabrics, reducing the need for virgin materials.",
    marketValue: {
      min: 1.50,
      max: 3.00,
      currency: "USD"
    },
    applications: [
      "Apparel manufacturing", 
      "Home textiles", 
      "Industrial fabrics",
      "Insulation materials"
    ],
    specifications: [
      {
        property: "Fiber Length",
        value: "38-52 mm"
      },
      {
        property: "Tensile Strength",
        value: "3.2-3.6 g/den"
      },
      {
        property: "Moisture Regain",
        value: "6-7%"
      },
      {
        property: "Blend Composition",
        value: "60-80% recycled content"
      }
    ],
    certifications: [
      "Global Recycled Standard (GRS)",
      "Recycled Claim Standard (RCS)",
      "OEKO-TEX Standard 100"
    ],
    image: "/assets/products/recycled-textile-fiber.jpg",
    relatedFeedstockId: "feed-2",
    relatedChemHubId: "chem-2",
    slug: "recycled-textile-fiber"
  },
  {
    id: "prod-3",
    name: "Premium Organic Compost",
    description: "High-quality compost produced from food waste through controlled aerobic decomposition. Rich in nutrients and beneficial microorganisms for soil health and plant growth.",
    marketValue: {
      min: 200,
      max: 400,
      currency: "USD"
    },
    applications: [
      "Urban farming", 
      "Organic agriculture", 
      "Landscaping",
      "Home gardening",
      "Green roofs and living walls"
    ],
    specifications: [
      {
        property: "Organic Matter",
        value: "45-60%"
      },
      {
        property: "pH",
        value: "6.5-7.5"
      },
      {
        property: "Carbon to Nitrogen Ratio",
        value: "15:1 - 20:1"
      },
      {
        property: "Moisture Content",
        value: "35-45%"
      },
      {
        property: "Particle Size",
        value: "< 12mm"
      }
    ],
    certifications: [
      "Organic Materials Review Institute (OMRI) Listed",
      "US Composting Council STA Certified"
    ],
    image: "/assets/products/organic-compost.jpg",
    relatedFeedstockId: "feed-3",
    relatedChemHubId: "chem-3",
    slug: "premium-organic-compost"
  },
  {
    id: "prod-4",
    name: "Glass Construction Aggregate",
    description: "Processed waste glass converted into a high-performance construction aggregate for concrete mixes, asphalt, and drainage applications.",
    marketValue: {
      min: 70,
      max: 150,
      currency: "USD"
    },
    applications: [
      "Concrete production", 
      "Road construction", 
      "Drainage systems",
      "Pipe bedding",
      "Landscaping"
    ],
    specifications: [
      {
        property: "Particle Size Range",
        value: "4-16mm"
      },
      {
        property: "Bulk Density",
        value: "1100-1300 kg/m³"
      },
      {
        property: "Water Absorption",
        value: "<3%"
      },
      {
        property: "Hardness (Mohs)",
        value: "5.5-6.5"
      }
    ],
    certifications: [
      "ASTM C33",
      "EN 12620",
      "LEED Credits Eligible"
    ],
    image: "/assets/products/glass-aggregate.jpg",
    relatedFeedstockId: "feed-4",
    relatedChemHubId: "chem-4",
    slug: "glass-construction-aggregate"
  },
  {
    id: "prod-5",
    name: "B100 Biodiesel",
    description: "100% biodiesel fuel produced from used cooking oil through transesterification. A renewable alternative to petroleum diesel with lower emissions and better lubricity.",
    marketValue: {
      min: 3.50,
      max: 5.00,
      currency: "USD"
    },
    applications: [
      "Transportation fleets", 
      "Agricultural equipment", 
      "Heating oil systems",
      "Marine applications",
      "Industrial machinery"
    ],
    specifications: [
      {
        property: "Cetane Number",
        value: ">51"
      },
      {
        property: "Cloud Point",
        value: "-2 to 15°C"
      },
      {
        property: "Sulfur Content",
        value: "<5 ppm"
      },
      {
        property: "Flashpoint",
        value: ">130°C"
      },
      {
        property: "Acid Number",
        value: "<0.5 mg KOH/g"
      }
    ],
    certifications: [
      "ASTM D6751",
      "EN 14214",
      "BQ-9000 Quality Management"
    ],
    image: "/assets/products/biodiesel.jpg",
    relatedFeedstockId: "feed-5",
    relatedChemHubId: "chem-5",
    slug: "b100-biodiesel"
  },
  {
    id: "prod-6",
    name: "Recovered Precious Metals",
    description: "High-purity precious metals recovered from electronic waste through advanced extraction processes, including gold, silver, palladium, and copper.",
    marketValue: {
      min: 25000,
      max: 50000,
      currency: "USD"
    },
    applications: [
      "Electronics manufacturing", 
      "Jewelry production", 
      "Medical devices",
      "Investment",
      "Industrial catalysts"
    ],
    specifications: [
      {
        property: "Gold Purity",
        value: ">99.9%"
      },
      {
        property: "Silver Purity",
        value: ">99.9%"
      },
      {
        property: "Palladium Purity",
        value: ">99.5%"
      },
      {
        property: "Copper Purity",
        value: ">99.9%"
      }
    ],
    certifications: [
      "London Bullion Market Association (LBMA) Good Delivery",
      "Responsible Minerals Initiative (RMI) Conformant"
    ],
    image: "/assets/products/recovered-metals.jpg",
    relatedFeedstockId: "feed-6",
    relatedChemHubId: "chem-6",
    slug: "recovered-precious-metals"
  },
  {
    id: "prod-7",
    name: "Agricultural Biochar",
    description: "High-carbon biochar produced from agricultural waste through pyrolysis, providing soil amendment properties and carbon sequestration benefits.",
    marketValue: {
      min: 500,
      max: 1500,
      currency: "USD"
    },
    applications: [
      "Soil amendment", 
      "Carbon sequestration", 
      "Water filtration",
      "Animal feed additive",
      "Compost accelerator"
    ],
    specifications: [
      {
        property: "Carbon Content",
        value: "70-90%"
      },
      {
        property: "Surface Area",
        value: "300-500 m²/g"
      },
      {
        property: "pH",
        value: "7.5-9.0"
      },
      {
        property: "Ash Content",
        value: "<15%"
      },
      {
        property: "Moisture Content",
        value: "<15%"
      }
    ],
    certifications: [
      "International Biochar Initiative (IBI) Certified",
      "European Biochar Certificate (EBC)"
    ],
    image: "/assets/products/biochar.jpg",
    relatedFeedstockId: "feed-7",
    relatedChemHubId: "chem-7",
    slug: "agricultural-biochar"
  },
  {
    id: "prod-8",
    name: "Gourmet Oyster Mushrooms",
    description: "Fresh oyster mushrooms grown on waste paper substrate, offering a nutritious, protein-rich food product with gourmet culinary applications.",
    marketValue: {
      min: 10,
      max: 15,
      currency: "USD"
    },
    applications: [
      "Restaurants and food service", 
      "Retail grocery", 
      "Food manufacturing",
      "Direct-to-consumer sales",
      "Farmers markets"
    ],
    specifications: [
      {
        property: "Protein Content",
        value: "25-35% (dry weight)"
      },
      {
        property: "Shelf Life",
        value: "7-10 days refrigerated"
      },
      {
        property: "Harvest Size",
        value: "5-15cm cap diameter"
      },
      {
        property: "Production Yield",
        value: "15-25% of substrate weight"
      }
    ],
    certifications: [
      "USDA Organic (where applicable)",
      "Good Agricultural Practices (GAP)"
    ],
    image: "/assets/products/oyster-mushrooms.jpg",
    relatedFeedstockId: "feed-8",
    relatedChemHubId: "chem-8",
    slug: "gourmet-oyster-mushrooms"
  },
  {
    id: "prod-9",
    name: "Recycled Rubber Mulch",
    description: "Durable, non-toxic rubber mulch made from processed waste tires, providing long-lasting ground cover for playgrounds, landscaping, and athletic surfaces.",
    marketValue: {
      min: 300,
      max: 600,
      currency: "USD"
    },
    applications: [
      "Playground safety surfaces", 
      "Athletic fields", 
      "Landscaping",
      "Garden pathways",
      "Equestrian arenas"
    ],
    specifications: [
      {
        property: "Particle Size",
        value: "10-30mm"
      },
      {
        property: "Critical Fall Height",
        value: "Up to 3m (at 15cm depth)"
      },
      {
        property: "Durability",
        value: "7-12 years"
      },
      {
        property: "Bulk Density",
        value: "400-600 kg/m³"
      }
    ],
    certifications: [
      "ASTM F1292 Impact Attenuation",
      "ASTM F2075 Heavy Metals Compliance",
      "IPEMA Certified"
    ],
    image: "/assets/products/rubber-mulch.jpg",
    relatedFeedstockId: "feed-9",
    relatedChemHubId: "chem-9",
    slug: "recycled-rubber-mulch"
  },
  {
    id: "prod-10",
    name: "Specialty Shiitake Mushrooms",
    description: "Premium shiitake mushrooms cultivated on spent coffee grounds, offering rich umami flavor and nutritional benefits for culinary applications.",
    marketValue: {
      min: 12,
      max: 18,
      currency: "USD"
    },
    applications: [
      "Gourmet restaurants", 
      "Specialty grocers", 
      "Farmers markets",
      "Medicinal supplements",
      "Culinary education"
    ],
    specifications: [
      {
        property: "Protein Content",
        value: "20-30% (dry weight)"
      },
      {
        property: "Shelf Life",
        value: "10-14 days refrigerated"
      },
      {
        property: "Antioxidant Content",
        value: "High (contains lentinan and ergothioneine)"
      },
      {
        property: "Production Yield",
        value: "10-20% of substrate weight"
      }
    ],
    certifications: [
      "USDA Organic (where applicable)",
      "Certified Naturally Grown"
    ],
    image: "/assets/products/shiitake-mushrooms.jpg",
    relatedFeedstockId: "feed-10",
    relatedChemHubId: "chem-10",
    slug: "specialty-shiitake-mushrooms"
  }
];

export default products;