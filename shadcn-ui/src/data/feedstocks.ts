// src/data/feedstocks.ts
import { Feedstock } from '../types';

export const feedstocks: Feedstock[] = [
  {
    id: "feed-1",
    name: "Mixed Plastic Waste",
    description: "Non-recyclable plastic waste, including polyethylene, polypropylene, and polystyrene materials that cannot be processed through conventional recycling systems.",
    sourceIndustries: [
      "Municipal solid waste",
      "Commercial waste",
      "Industrial packaging waste",
      "Post-consumer plastic"
    ],
    collectionMethods: [
      {
        title: "Source Separation",
        description: "Collection of plastic waste separated at the source from other waste streams."
      },
      {
        title: "Mechanical Sorting",
        description: "Using mechanical processes like air classification, flotation, or optical sorting to separate plastics from mixed waste."
      },
      {
        title: "Manual Picking",
        description: "Hand-picking of plastics from mixed waste at material recovery facilities."
      }
    ],
    storageRequirements: "Dry, covered storage area to prevent contamination and degradation. Should be protected from UV exposure for extended periods.",
    seasonalAvailability: "Year-round with slight increases during summer months and holiday seasons.",
    processingRequirements: "Cleaning, removal of labels and contaminants, shredding to uniform size (10-30mm), and drying to less than 5% moisture content.",
    image: "/assets/feedstocks/mixed-plastic-waste.jpg",
    relatedChemHubIds: ["chem-1"],
    slug: "mixed-plastic-waste"
  },
  {
    id: "feed-2",
    name: "Textile Waste",
    description: "Pre-consumer and post-consumer textile waste including cotton, polyester, nylon, and blended fabrics from manufacturing scraps, unsold inventory, and discarded clothing.",
    sourceIndustries: [
      "Apparel manufacturing",
      "Textile mills",
      "Post-consumer clothing",
      "Retail returns and unsold stock"
    ],
    collectionMethods: [
      {
        title: "Clothing Collection Bins",
        description: "Public collection points for used clothing and textiles."
      },
      {
        title: "Industrial Partnerships",
        description: "Direct collection from textile manufacturers for pre-consumer waste."
      },
      {
        title: "Retail Take-back Programs",
        description: "Brand-led initiatives for collecting used garments from consumers."
      }
    ],
    storageRequirements: "Dry, pest-free environment with low humidity to prevent mildew and degradation of fibers.",
    seasonalAvailability: "Consistent year-round with potential increases during seasonal wardrobe changes (spring/fall).",
    processingRequirements: "Sorting by fiber type, color, and condition. Removal of hardware (buttons, zippers). Cleaning and disinfection for post-consumer waste.",
    image: "/assets/feedstocks/textile-waste.jpg",
    relatedChemHubIds: ["chem-2"],
    slug: "textile-waste"
  },
  {
    id: "feed-3",
    name: "Food Waste",
    description: "Organic waste from food preparation, unsold produce, plate waste, and expired food products suitable for composting or biogas production.",
    sourceIndustries: [
      "Restaurants and food service",
      "Grocery stores",
      "Food processing",
      "Institutional cafeterias",
      "Residential waste"
    ],
    collectionMethods: [
      {
        title: "Separate Collection",
        description: "Dedicated bins for organic waste collection at the source."
      },
      {
        title: "Commercial Partnerships",
        description: "Direct collection agreements with food service and retail establishments."
      },
      {
        title: "Community Drop-off",
        description: "Centralized collection points for community food waste."
      }
    ],
    storageRequirements: "Short-term storage only. Sealed containers to prevent odors and pests. Refrigeration for extended storage.",
    seasonalAvailability: "Year-round with potential increases during harvest seasons and holidays.",
    processingRequirements: "Removal of non-organic contaminants (plastics, metals). Grinding or shredding for uniform particle size. Balancing carbon-to-nitrogen ratio with additional materials if needed.",
    image: "/assets/feedstocks/food-waste.jpg",
    relatedChemHubIds: ["chem-3"],
    slug: "food-waste"
  },
  {
    id: "feed-4",
    name: "Waste Glass",
    description: "Post-consumer and industrial glass waste including bottles, jars, window glass, and other glass products that can be processed into new materials.",
    sourceIndustries: [
      "Municipal recycling",
      "Beverage industry",
      "Construction and demolition",
      "Automotive glass replacement"
    ],
    collectionMethods: [
      {
        title: "Curbside Recycling",
        description: "Collection of glass through municipal recycling programs."
      },
      {
        title: "Bottle Deposit Systems",
        description: "Return schemes for beverage containers with deposit refunds."
      },
      {
        title: "Commercial Collection",
        description: "Direct collection from businesses generating significant glass waste."
      }
    ],
    storageRequirements: "Dry storage area with separation by color (clear, green, amber) if possible. Containment to prevent hazards from broken glass.",
    seasonalAvailability: "Consistent year-round with potential increases during summer months and holiday seasons.",
    processingRequirements: "Sorting by color, removal of contaminants (caps, corks, labels), crushing to specified particle size, washing to remove residues.",
    image: "/assets/feedstocks/waste-glass.jpg",
    relatedChemHubIds: ["chem-4"],
    slug: "waste-glass"
  },
  {
    id: "feed-5",
    name: "Used Cooking Oil",
    description: "Waste vegetable oils from commercial and residential cooking that can be processed into biodiesel and other valuable products.",
    sourceIndustries: [
      "Restaurants and food service",
      "Food manufacturing",
      "Institutional kitchens",
      "Residential homes"
    ],
    collectionMethods: [
      {
        title: "Commercial Collection Services",
        description: "Regular pickup of used cooking oil from restaurants and food services."
      },
      {
        title: "Community Collection Points",
        description: "Designated drop-off locations for residential cooking oil."
      },
      {
        title: "Grease Trap Service Integration",
        description: "Combined collection with grease trap maintenance services."
      }
    ],
    storageRequirements: "Sealed, leak-proof containers away from heat sources. Secondary containment recommended to prevent spills.",
    seasonalAvailability: "Year-round with potential increases during holiday seasons and summer events.",
    processingRequirements: "Filtering to remove food particles, heating to remove water, testing for free fatty acid content, deacidification if needed.",
    image: "/assets/feedstocks/used-cooking-oil.jpg",
    relatedChemHubIds: ["chem-5"],
    slug: "used-cooking-oil"
  },
  {
    id: "feed-6",
    name: "Electronic Waste",
    description: "Discarded electronic devices and components containing valuable metals and materials that can be recovered and reused.",
    sourceIndustries: [
      "Consumer electronics",
      "IT industry",
      "Telecommunications",
      "Manufacturing",
      "Healthcare"
    ],
    collectionMethods: [
      {
        title: "E-Waste Collection Events",
        description: "Organized community collection days for electronic waste."
      },
      {
        title: "Retailer Take-back Programs",
        description: "Return programs at electronics retailers for old devices."
      },
      {
        title: "Business IT Asset Disposal",
        description: "Direct collection from businesses upgrading IT equipment."
      }
    ],
    storageRequirements: "Dry, secure storage to prevent theft of valuable components. Protection from weather to avoid leaching of hazardous materials.",
    seasonalAvailability: "Year-round with potential increases after holiday seasons and product release cycles.",
    processingRequirements: "Manual disassembly to separate components, mechanical processing (shredding, crushing), chemical treatment for metal extraction, proper handling of hazardous materials.",
    image: "/assets/feedstocks/electronic-waste.jpg",
    relatedChemHubIds: ["chem-6"],
    slug: "electronic-waste"
  },
  {
    id: "feed-7",
    name: "Agricultural Waste",
    description: "Crop residues, prunings, and processing byproducts from farming and agricultural operations that can be converted into value-added products.",
    sourceIndustries: [
      "Crop farming",
      "Orchards and vineyards",
      "Food processing",
      "Livestock operations"
    ],
    collectionMethods: [
      {
        title: "On-Farm Collection",
        description: "Direct collection of residues during or after harvest."
      },
      {
        title: "Processing Facility Partnerships",
        description: "Collection of byproducts from agricultural processing facilities."
      },
      {
        title: "Cooperative Collection",
        description: "Shared equipment and resources for collecting agricultural waste from multiple farms."
      }
    ],
    storageRequirements: "Protection from moisture to prevent decomposition and spontaneous combustion risk. Sufficient ventilation if stored in bulk.",
    seasonalAvailability: "Highly seasonal based on local crop harvest schedules and growing seasons.",
    processingRequirements: "Size reduction (chipping, grinding), drying to optimal moisture content (typically <15%), removal of non-organic contaminants.",
    image: "/assets/feedstocks/agricultural-waste.jpg",
    relatedChemHubIds: ["chem-7"],
    slug: "agricultural-waste"
  },
  {
    id: "feed-8",
    name: "Paper Waste",
    description: "Used paper products including office paper, newspaper, cardboard, and mixed paper that can be repurposed for new applications.",
    sourceIndustries: [
      "Offices and commercial buildings",
      "Printing and publishing",
      "Retail packaging",
      "Residential recycling"
    ],
    collectionMethods: [
      {
        title: "Office Collection Programs",
        description: "Dedicated paper recycling systems in office environments."
      },
      {
        title: "Curbside Recycling",
        description: "Municipal collection of paper and cardboard waste."
      },
      {
        title: "Commercial Cardboard Collection",
        description: "Specialized collection of corrugated cardboard from retail and industrial sources."
      }
    ],
    storageRequirements: "Dry storage to prevent degradation. Baling or compaction recommended for efficient storage and transportation.",
    seasonalAvailability: "Year-round with potential increases during holiday seasons due to packaging.",
    processingRequirements: "Sorting by grade, removal of contaminants (plastic, metal fasteners, food residue), shredding to appropriate size, sterilization for food applications.",
    image: "/assets/feedstocks/paper-waste.jpg",
    relatedChemHubIds: ["chem-8"],
    slug: "paper-waste"
  },
  {
    id: "feed-9",
    name: "Waste Tires",
    description: "End-of-life tires from vehicles that can be processed into rubber crumb, fuel, or other products instead of landfilling.",
    sourceIndustries: [
      "Auto repair shops",
      "Tire retailers",
      "Vehicle fleet operations",
      "Scrap yards"
    ],
    collectionMethods: [
      {
        title: "Tire Retailer Collection",
        description: "Collection of old tires when new ones are purchased."
      },
      {
        title: "Municipal Collection Points",
        description: "Designated drop-off locations for scrap tires."
      },
      {
        title: "Cleanup Initiatives",
        description: "Collection of illegally dumped tires through environmental programs."
      }
    ],
    storageRequirements: "Outdoor storage acceptable with measures to prevent water accumulation inside tires (mosquito breeding). Fire safety measures essential due to combustion risk.",
    seasonalAvailability: "Year-round with slight increases during seasonal tire change periods (winter/summer).",
    processingRequirements: "Removal of rims and foreign objects, whole tire shredding, wire removal, grinding to specified particle size.",
    image: "/assets/feedstocks/waste-tires.jpg",
    relatedChemHubIds: ["chem-9"],
    slug: "waste-tires"
  },
  {
    id: "feed-10",
    name: "Coffee Grounds",
    description: "Spent coffee grounds from cafés, restaurants, and food service operations that can be repurposed for growing mushrooms, composting, or other applications.",
    sourceIndustries: [
      "Coffee shops and cafés",
      "Restaurants",
      "Office buildings",
      "Food service operations"
    ],
    collectionMethods: [
      {
        title: "Café Partnerships",
        description: "Direct collection agreements with coffee shops and cafés."
      },
      {
        title: "Office Coffee Service Collection",
        description: "Collection from businesses with coffee services."
      },
      {
        title: "Community Collection",
        description: "Drop-off points for home coffee consumers."
      }
    ],
    storageRequirements: "Short-term storage in sealed containers to prevent mold growth. Refrigeration for storage beyond 24 hours.",
    seasonalAvailability: "Year-round with consistent availability.",
    processingRequirements: "Pasteurization to eliminate competing organisms, moisture level adjustment, optional nutrient supplementation for mushroom cultivation.",
    image: "/assets/feedstocks/coffee-grounds.jpg",
    relatedChemHubIds: ["chem-10"],
    slug: "coffee-grounds"
  }
];

export default feedstocks;