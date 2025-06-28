// src/data/chemHubs.ts
import { ChemHub } from '../types';

export const chemHubs: ChemHub[] = [
  {
    id: "chem-1",
    name: "Plastic Pyrolysis Process",
    description: "Converting mixed plastic waste into valuable fuel products through thermal decomposition in the absence of oxygen.",
    scientificBasis: "Pyrolysis breaks down polymer chains in plastics at temperatures of 400-600°C without oxygen.",
    processSteps: [
      {
        step: 1,
        title: "Feedstock Preparation",
        description: "Clean and sort plastic waste, remove contaminants, shred to 10-30mm particles."
      },
      {
        step: 2,
        title: "Pyrolysis Reaction",
        description: "Heat prepared plastic in an oxygen-free reactor to 450-550°C."
      },
      {
        step: 3,
        title: "Condensation",
        description: "Cool pyrolysis gases through a condensation system, converting them into liquid fuel."
      }
    ],
    equipment: [
      {
        name: "Plastic Shredder",
        description: "Industrial shredder for plastics.",
        estimatedCost: {
          min: 5000,
          max: 15000,
          currency: "USD"
        }
      },
      {
        name: "Pyrolysis Reactor",
        description: "Sealed, oxygen-free thermal chamber.",
        estimatedCost: {
          min: 25000,
          max: 100000,
          currency: "USD"
        }
      }
    ],
    safetyConsiderations: [
      "Process involves high temperatures - fire safety measures essential",
      "Potential for hazardous gas release - ventilation required"
    ],
    skills: [
      {
        skill: "Chemical Process Operation",
        level: "Intermediate",
        description: "Understanding of thermal processes."
      }
    ],
    startupCosts: [
      {
        item: "Equipment Purchase",
        cost: {
          min: 48000,
          max: 170000,
          currency: "USD"
        }
      }
    ],
    operationalCosts: [
      {
        item: "Labor",
        cost: {
          min: 4000,
          max: 8000,
          currency: "USD",
          per: "month"
        }
      }
    ],
    estimatedRevenue: {
      min: 10000,
      max: 30000,
      currency: "USD",
      per: "month"
    },
    estimatedPayback: {
      min: 12,
      max: 36,
      unit: "months"
    },
    inputFeedstockIds: ["feed-1"],
    outputProductIds: ["prod-1"],
    slug: "plastic-pyrolysis",
    image: "/assets/chemhubs/plastic-pyrolysis.jpg"
  },
  {
    id: "chem-2",
    name: "Textile Recycling Process",
    description: "Mechanical processing of textile waste into recycled fibers.",
    scientificBasis: "Mechanical shredding breaks down textiles into fibers while preserving length.",
    processSteps: [
      {
        step: 1,
        title: "Sorting and Preparation",
        description: "Sort textiles by material type."
      },
      {
        step: 2,
        title: "Mechanical Shredding",
        description: "Process sorted textiles through mechanical shredders."
      }
    ],
    equipment: [
      {
        name: "Industrial Textile Shredder",
        description: "Specialized machinery for textiles.",
        estimatedCost: {
          min: 20000,
          max: 80000,
          currency: "USD"
        }
      }
    ],
    safetyConsiderations: [
      "Dust generation - dust collection required",
      "Mechanical hazards - proper guards needed"
    ],
    skills: [
      {
        skill: "Textile Processing",
        level: "Intermediate",
        description: "Understanding of fiber properties."
      }
    ],
    startupCosts: [
      {
        item: "Equipment Purchase",
        cost: {
          min: 58000,
          max: 220000,
          currency: "USD"
        }
      }
    ],
    operationalCosts: [
      {
        item: "Labor",
        cost: {
          min: 5000,
          max: 12000,
          currency: "USD",
          per: "month"
        }
      }
    ],
    estimatedRevenue: {
      min: 15000,
      max: 40000,
      currency: "USD",
      per: "month"
    },
    estimatedPayback: {
      min: 18,
      max: 48,
      unit: "months"
    },
    inputFeedstockIds: ["feed-2"],
    outputProductIds: ["prod-2"],
    slug: "textile-recycling",
    image: "/assets/chemhubs/textile-recycling.jpg"
  },
  {
    id: "chem-3",
    name: "Aerobic Composting System",
    description: "Controlled decomposition of food waste into nutrient-rich compost.",
    scientificBasis: "Aerobic bacteria and fungi break down organic matter in the presence of oxygen.",
    processSteps: [
      {
        step: 1,
        title: "Feedstock Preparation",
        description: "Remove contaminants, mix with carbon-rich materials."
      }
    ],
    equipment: [
      {
        name: "In-vessel Composting System",
        description: "Enclosed system for controlled composting.",
        estimatedCost: {
          min: 20000,
          max: 100000,
          currency: "USD"
        }
      }
    ],
    safetyConsiderations: [
      "Biological hazards - pathogen exposure risk",
      "Odor management - proper aeration needed"
    ],
    skills: [
      {
        skill: "Microbiology Basics",
        level: "Basic",
        description: "Understanding of composting processes."
      }
    ],
    startupCosts: [
      {
        item: "Equipment Purchase",
        cost: {
          min: 41000,
          max: 197000,
          currency: "USD"
        }
      }
    ],
    operationalCosts: [
      {
        item: "Labor",
        cost: {
          min: 3000,
          max: 8000,
          currency: "USD",
          per: "month"
        }
      }
    ],
    estimatedRevenue: {
      min: 5000,
      max: 20000,
      currency: "USD",
      per: "month"
    },
    estimatedPayback: {
      min: 12,
      max: 36,
      unit: "months"
    },
    inputFeedstockIds: ["feed-3"],
    outputProductIds: ["prod-3"],
    slug: "aerobic-composting",
    image: "/assets/chemhubs/aerobic-composting.jpg"
  }
];

export default chemHubs;