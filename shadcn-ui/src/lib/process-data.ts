import { Equipment, Skill, ProcessStep } from './types';

// Equipment data
export const equipmentData: Equipment[] = [
  {
    id: "eq-001",
    name: "Industrial Shredder",
    description: "Heavy-duty shredder for breaking down plastic waste into smaller pieces",
    category: "Pre-processing",
    estimatedCost: 15000,
    specifications: ["Power: 20-30 kW", "Capacity: 500-1000 kg/hr", "Blade type: Rotary"],
    suppliers: ["EcoMachinery", "RecyclingTech", "GreenProcess Equipment"]
  },
  {
    id: "eq-002",
    name: "Washing System",
    description: "Automated washing system to clean contaminants from plastic flakes",
    category: "Pre-processing",
    estimatedCost: 22000,
    specifications: ["Capacity: 800 kg/hr", "Water usage: 2-3 m³/hr", "Includes water treatment"],
    suppliers: ["AquaClean Systems", "RecyclingTech", "PurifyPro"]
  },
  {
    id: "eq-003",
    name: "Flotation Tank",
    description: "Separation system using density differences to separate different plastics",
    category: "Sorting",
    estimatedCost: 18000,
    specifications: ["Tank volume: 5 m³", "Processing capacity: 600 kg/hr", "Separation efficiency: 95%"],
    suppliers: ["SeparationTech", "RecyclingTech", "PureSort Systems"]
  },
  {
    id: "eq-004",
    name: "Extruder",
    description: "Single-screw extruder for melting and forming plastic material",
    category: "Processing",
    estimatedCost: 35000,
    specifications: ["Screw diameter: 75mm", "L/D ratio: 30:1", "Output: 150-250 kg/hr"],
    suppliers: ["ExtruTech", "PolyMachine", "PlasticProcess"]
  },
  {
    id: "eq-005",
    name: "Polymerization Reactor",
    description: "Chemical reactor for polymer synthesis and modification",
    category: "Chemical Processing",
    estimatedCost: 75000,
    specifications: ["Volume: 1000L", "Max temperature: 350°C", "Pressure rating: 10 bar", "Material: Stainless steel"],
    suppliers: ["ChemReactor", "PolymerTech", "IndustrialReactors Ltd"]
  },
  {
    id: "eq-006",
    name: "Catalyst Recovery System",
    description: "System to recover and purify catalysts for reuse in chemical processes",
    category: "Chemical Processing",
    estimatedCost: 45000,
    specifications: ["Recovery rate: 90%", "Purification level: 99%", "Processing capacity: 100 kg/day"],
    suppliers: ["CatalystTech", "RecoveryPro", "ChemRecycle Systems"]
  },
  {
    id: "eq-007",
    name: "Pelletizer",
    description: "Equipment to form plastic melt into uniform pellets",
    category: "Processing",
    estimatedCost: 28000,
    specifications: ["Output: 200 kg/hr", "Pellet size: 2-5mm", "Cutting system: Underwater"],
    suppliers: ["PelletTech", "GranuleSystems", "PlasticProcess"]
  },
  {
    id: "eq-008",
    name: "Depolymerization Unit",
    description: "Specialized reactor for breaking down polymers into monomers using thermal/catalytic methods",
    category: "Chemical Processing",
    estimatedCost: 120000,
    specifications: ["Throughput: 500 kg/day", "Temperature range: 200-400°C", "Monomer yield: 85-95%"],
    suppliers: ["ChemReactor", "DepolyTech", "MonomerRecovery Inc"]
  },
  {
    id: "eq-009",
    name: "Distillation Column",
    description: "Fractionation system for separating and purifying chemical compounds",
    category: "Purification",
    estimatedCost: 65000,
    specifications: ["Height: 6m", "Diameter: 0.8m", "Number of trays: 20", "Material: Stainless steel"],
    suppliers: ["DistillTech", "PureSep Systems", "ChemicalEngineering Co"]
  },
  {
    id: "eq-010",
    name: "Quality Control Lab Equipment",
    description: "Testing equipment for analyzing material properties and quality",
    category: "Quality Control",
    estimatedCost: 40000,
    specifications: ["Includes: DSC, FTIR, tensile tester, viscometer", "Analysis time: 1-2 hours per sample"],
    suppliers: ["LabTech", "QualityAnalysis", "MaterialScience Equipment"]
  }
];

// Skills data
export const skillsData: Skill[] = [
  {
    id: "skill-001",
    name: "Polymer Chemistry",
    description: "Knowledge of polymer structures, properties, and reactions",
    category: "Chemistry",
    difficultyLevel: 4,
    trainingResources: ["University courses", "Industry certifications", "Online specialized courses"]
  },
  {
    id: "skill-002",
    name: "Chemical Process Operation",
    description: "Ability to run and monitor chemical processes safely and efficiently",
    category: "Operations",
    difficultyLevel: 3,
    trainingResources: ["Technical college courses", "On-the-job training", "Equipment manufacturer training"]
  },
  {
    id: "skill-003",
    name: "Analytical Testing",
    description: "Competence in using analytical instruments and interpreting results",
    category: "Quality Control",
    difficultyLevel: 3,
    trainingResources: ["Laboratory training programs", "Instrument-specific certifications", "Method validation courses"]
  },
  {
    id: "skill-004",
    name: "Process Optimization",
    description: "Ability to analyze and improve process parameters for better efficiency and output",
    category: "Engineering",
    difficultyLevel: 4,
    trainingResources: ["Industrial engineering courses", "Six Sigma certification", "Process simulation training"]
  },
  {
    id: "skill-005",
    name: "Safety Management",
    description: "Knowledge of safety protocols for handling chemicals and operating processing equipment",
    category: "Operations",
    difficultyLevel: 3,
    trainingResources: ["OSHA safety courses", "Chemical handling certification", "Emergency response training"]
  },
  {
    id: "skill-006",
    name: "Catalyst Handling",
    description: "Expertise in working with catalysts, including preparation, activation, and regeneration",
    category: "Chemistry",
    difficultyLevel: 4,
    trainingResources: ["Specialized chemistry courses", "Catalyst manufacturer training", "Research lab experience"]
  },
  {
    id: "skill-007",
    name: "Quality Assurance",
    description: "Knowledge of quality standards, testing protocols, and documentation",
    category: "Quality Control",
    difficultyLevel: 3,
    trainingResources: ["ISO certification courses", "Statistical quality control training", "GMP training"]
  },
  {
    id: "skill-008",
    name: "Maintenance & Troubleshooting",
    description: "Ability to perform preventative maintenance and solve equipment issues",
    category: "Technical",
    difficultyLevel: 3,
    trainingResources: ["Technical college courses", "Equipment-specific training", "Troubleshooting workshops"]
  }
];


// Process step factory function to help create steps with proper typing
const createProcessStep = (step: Omit<ProcessStep, 'equipment' | 'skills'> & { equipmentIds: string[], skillIds: string[] }): ProcessStep => {
  return {
    ...step,
    equipment: step.equipmentIds.map(id => equipmentData.find(eq => eq.id === id)!),
    skills: step.skillIds.map(id => skillsData.find(skill => skill.id === id)!)
  };
};

// Interface for the processes as they're actually used in the application
export interface ChemProcess {
  id: string;
  name: string;
  description: string;
  scientificBasis: string;
  steps: ProcessStep[];
  economicAnalysis: {
    startupCosts: {
      equipment: number;
      materials: number;
      space: number;
      training: number;
    };
    operationalCosts: {
      labor: number;
      materials: number;
      electricity: number;
      water: number;
      maintenance: number;
    };
    breakEvenMonths: number;
    roi1Year: number;
    roi5Year: number;
  };
  sustainabilityMetrics: {
    carbonReduction: number;
    waterReduction: number;
    wasteReduction: number;
    biodegradabilityScore: number;
    certifications: string[];
    communityImpact: string;
  };
  requiredEquipment: Equipment[];
  requiredSkills: Skill[];
}


// Real processes data
export const processes: ChemProcess[] = [
  {
    id: "pet-depolymerization",
    name: "PET Glycolysis to BHET",
    description: "A chemical recycling process that converts PET plastic waste into bis(2-hydroxyethyl) terephthalate (BHET) through glycolysis",
    scientificBasis: "This process uses ethylene glycol to break down PET polymer chains through transesterification. The reaction breaks the ester bonds in PET, resulting in BHET monomers that can be purified and repolymerized into new PET or used for other applications.",
    steps: [
      createProcessStep({
        id: "step-1",
        name: "PET Preparation",
        description: "Shred and clean post-consumer PET waste to prepare it for chemical processing",
        durationHours: 2,
        temperature: 25,
        pressure: 1,
        equipmentIds: ["eq-001", "eq-002"],
        skillIds: ["skill-002", "skill-005"],
        parameters: {
          "Particle Size": "3-5mm",
          "Moisture Content": "<1%",
          "Contaminant Level": "<0.5%"
        }
      }),
      createProcessStep({
        id: "step-2",
        name: "Glycolysis Reaction",
        description: "React PET flakes with ethylene glycol in the presence of a catalyst to break down the polymer into BHET monomers",
        durationHours: 6,
        temperature: 190,
        pressure: 3,
        equipmentIds: ["eq-005", "eq-006"],
        skillIds: ["skill-001", "skill-002", "skill-006"],
        parameters: {
          "EG:PET Ratio": "4:1",
          "Catalyst": "Zinc Acetate (1 wt%)",
          "Nitrogen Atmosphere": "Yes",
          "Agitation Rate": "120 rpm"
        }
      }),
      createProcessStep({
        id: "step-3",
        name: "Filtration & Cooling",
        description: "Cool the reaction mixture and filter out undissolved particles and catalyst residues",
        durationHours: 3,
        temperature: 60,
        pressure: 1,
        equipmentIds: ["eq-003"],
        skillIds: ["skill-002", "skill-008"],
        parameters: {
          "Cooling Rate": "20°C/hour",
          "Filter Size": "5 micron",
          "Final Temperature": "50-60°C"
        }
      }),
      createProcessStep({
        id: "step-4",
        name: "Crystallization",
        description: "Cool the filtrate to crystallize BHET monomers from the solution",
        durationHours: 8,
        temperature: 10,
        pressure: 1,
        equipmentIds: ["eq-005"],
        skillIds: ["skill-001", "skill-002"],
        parameters: {
          "Cooling Rate": "5°C/hour",
          "Final Temperature": "10-15°C",
          "Agitation": "Gentle, intermittent"
        }
      }),
      createProcessStep({
        id: "step-5",
        name: "Purification",
        description: "Filter and wash the BHET crystals to remove residual ethylene glycol and impurities",
        durationHours: 4,
        temperature: 20,
        pressure: 1,
        equipmentIds: ["eq-003", "eq-002"],
        skillIds: ["skill-002", "skill-003", "skill-007"],
        parameters: {
          "Wash Solvent": "Cold Methanol",
          "Wash Temperature": "10-15°C",
          "Number of Washes": "3"
        }
      }),
      createProcessStep({
        id: "step-6",
        name: "Drying & Quality Control",
        description: "Dry the purified BHET crystals and test for quality parameters",
        durationHours: 5,
        temperature: 60,
        pressure: 0.5,
        equipmentIds: ["eq-010"],
        skillIds: ["skill-003", "skill-007"],
        parameters: {
          "Drying Temperature": "60°C",
          "Drying Time": "4-5 hours",
          "Vacuum": "0.5 bar",
          "Final Moisture": "<0.1%"
        }
      })
    ],
    economicAnalysis: {
      startupCosts: {
        equipment: 380000,
        materials: 45000,
        space: 120000,
        training: 35000
      },
      operationalCosts: {
        labor: 18000,
        materials: 12000,
        electricity: 5000,
        water: 2000,
        maintenance: 3000
      },
      breakEvenMonths: 18,
      roi1Year: 65,
      roi5Year: 320
    },
    sustainabilityMetrics: {
      carbonReduction: 70,
      waterReduction: 60,
      wasteReduction: 90,
      biodegradabilityScore: 85,
      certifications: ["ISO 14001", "Cradle to Cradle Certified", "GreenCircle Certified"],
      communityImpact: "This process helps divert PET waste from landfills and oceans while creating jobs in the circular economy. The resulting BHET monomer can be used to create new virgin-quality PET products without using petroleum resources."
    },
    requiredEquipment: [
      equipmentData.find(eq => eq.id === "eq-001")!,
      equipmentData.find(eq => eq.id === "eq-002")!,
      equipmentData.find(eq => eq.id === "eq-003")!,
      equipmentData.find(eq => eq.id === "eq-005")!,
      equipmentData.find(eq => eq.id === "eq-006")!,
      equipmentData.find(eq => eq.id === "eq-010")!
    ],
    requiredSkills: [
      skillsData.find(skill => skill.id === "skill-001")!,
      skillsData.find(skill => skill.id === "skill-002")!,
      skillsData.find(skill => skill.id === "skill-003")!,
      skillsData.find(skill => skill.id === "skill-005")!,
      skillsData.find(skill => skill.id === "skill-006")!,
      skillsData.find(skill => skill.id === "skill-007")!,
      skillsData.find(skill => skill.id === "skill-008")!
    ]
  },
  {
    id: "hdpe-pyrolysis",
    name: "HDPE Pyrolysis to Fuel Oil",
    description: "A thermal decomposition process that converts HDPE plastic waste into fuel oil through pyrolysis in an oxygen-free environment",
    scientificBasis: "This process uses high temperature in the absence of oxygen to break the polymer chains in HDPE into smaller hydrocarbon molecules. The process yields a mixture of gases, liquids, and char, with the liquid fraction being similar to petroleum distillates.",
    steps: [
      createProcessStep({
        id: "step-1",
        name: "HDPE Preparation",
        description: "Sort, shred, and clean HDPE waste to prepare it for pyrolysis",
        durationHours: 3,
        temperature: 25,
        pressure: 1,
        equipmentIds: ["eq-001", "eq-002"],
        skillIds: ["skill-002", "skill-005"],
        parameters: {
          "Particle Size": "5-10mm",
          "Moisture Content": "<0.5%",
          "Non-HDPE Contamination": "<1%"
        }
      }),
      createProcessStep({
        id: "step-2",
        name: "Pyrolysis Reactor Loading",
        description: "Load the prepared HDPE into the pyrolysis reactor and create an inert atmosphere",
        durationHours: 2,
        temperature: 30,
        pressure: 1,
        equipmentIds: ["eq-005"],
        skillIds: ["skill-002", "skill-005"],
        parameters: {
          "Batch Size": "200 kg",
          "Nitrogen Purge": "3 cycles",
          "Oxygen Level": "<0.1%"
        }
      }),
      createProcessStep({
        id: "step-3",
        name: "Thermal Decomposition",
        description: "Heat the HDPE to high temperature in the absence of oxygen to break down the polymer chains",
        durationHours: 4,
        temperature: 450,
        pressure: 2,
        equipmentIds: ["eq-005", "eq-008"],
        skillIds: ["skill-001", "skill-002", "skill-005"],
        parameters: {
          "Heating Rate": "10°C/min",
          "Hold Temperature": "450-500°C",
          "Hold Time": "2-3 hours",
          "Atmosphere": "Nitrogen"
        }
      }),
      createProcessStep({
        id: "step-4",
        name: "Vapor Condensation",
        description: "Condense the pyrolysis vapor into liquid hydrocarbon fuel",
        durationHours: 6,
        temperature: 35,
        pressure: 1,
        equipmentIds: ["eq-009"],
        skillIds: ["skill-002", "skill-004"],
        parameters: {
          "Condenser Temperature": "15-35°C",
          "Condenser Stages": "3",
          "Gas Flow Rate": "Controlled"
        }
      }),
      createProcessStep({
        id: "step-5",
        name: "Fuel Fractionation",
        description: "Separate the condensed liquid into different fuel fractions based on boiling point",
        durationHours: 5,
        temperature: 180,
        pressure: 1,
        equipmentIds: ["eq-009"],
        skillIds: ["skill-001", "skill-002", "skill-004"],
        parameters: {
          "Fractionation Temperatures": "40-330°C",
          "Number of Fractions": "3-4",
          "Reflux Ratio": "Variable"
        }
      }),
      createProcessStep({
        id: "step-6",
        name: "Product Analysis & Storage",
        description: "Test the fuel quality and store in appropriate containers",
        durationHours: 3,
        temperature: 25,
        pressure: 1,
        equipmentIds: ["eq-010"],
        skillIds: ["skill-003", "skill-007"],
        parameters: {
          "Storage Temperature": "15-25°C",
          "Container Material": "Carbon Steel or HDPE",
          "Stabilizer Addition": "As needed"
        }
      })
    ],
    economicAnalysis: {
      startupCosts: {
        equipment: 450000,
        materials: 30000,
        space: 150000,
        training: 40000
      },
      operationalCosts: {
        labor: 16000,
        materials: 8000,
        electricity: 7000,
        water: 1000,
        maintenance: 5000
      },
      breakEvenMonths: 24,
      roi1Year: 45,
      roi5Year: 280
    },
    sustainabilityMetrics: {
      carbonReduction: 60,
      waterReduction: 85,
      wasteReduction: 95,
      biodegradabilityScore: 30,
      certifications: ["ISO 14001", "Energy Recovery Certification"],
      communityImpact: "This process converts otherwise non-recyclable HDPE waste into valuable fuel products, reducing landfill waste and decreasing dependence on fossil fuel extraction. It provides an economical solution for waste plastic that would otherwise have environmental impact."
    },
    requiredEquipment: [
      equipmentData.find(eq => eq.id === "eq-001")!,
      equipmentData.find(eq => eq.id === "eq-002")!,
      equipmentData.find(eq => eq.id === "eq-005")!,
      equipmentData.find(eq => eq.id === "eq-008")!,
      equipmentData.find(eq => eq.id === "eq-009")!,
      equipmentData.find(eq => eq.id === "eq-010")!
    ],
    requiredSkills: [
      skillsData.find(skill => skill.id === "skill-001")!,
      skillsData.find(skill => skill.id === "skill-002")!,
      skillsData.find(skill => skill.id === "skill-003")!,
      skillsData.find(skill => skill.id === "skill-004")!,
      skillsData.find(skill => skill.id === "skill-005")!,
      skillsData.find(skill => skill.id === "skill-007")!
    ]
  },
  {
    id: "nylon-6-depolymerization",
    name: "Nylon-6 Depolymerization to Caprolactam",
    description: "A chemical recycling process that converts nylon-6 waste into caprolactam monomer through hydrolytic depolymerization",
    scientificBasis: "Nylon-6 is a condensation polymer that can be depolymerized back to its monomer (caprolactam) using high-pressure steam or acidic/basic catalysts. The amide bonds in the polymer chain are hydrolyzed, resulting in the original monomer that can be purified and repolymerized.",
    steps: [
      createProcessStep({
        id: "step-1",
        name: "Nylon-6 Preparation",
        description: "Sort, clean, and size-reduce nylon-6 waste material",
        durationHours: 3,
        temperature: 25,
        pressure: 1,
        equipmentIds: ["eq-001", "eq-002"],
        skillIds: ["skill-002", "skill-005"],
        parameters: {
          "Particle Size": "2-4mm",
          "Contaminant Level": "<1%",
          "Moisture Content": "<2%"
        }
      }),
      createProcessStep({
        id: "step-2",
        name: "Hydrolytic Depolymerization",
        description: "Break down nylon polymer chains using high-pressure steam in the presence of a catalyst",
        durationHours: 5,
        temperature: 300,
        pressure: 15,
        equipmentIds: ["eq-005", "eq-008"],
        skillIds: ["skill-001", "skill-002", "skill-006"],
        parameters: {
          "Steam Pressure": "15-17 bar",
          "Catalyst": "Phosphoric Acid (0.5-1%)",
          "Reaction Time": "4-5 hours",
          "Water:Polymer Ratio": "3:1"
        }
      }),
      createProcessStep({
        id: "step-3",
        name: "Phase Separation",
        description: "Separate the reaction mixture into aqueous and organic phases",
        durationHours: 2,
        temperature: 120,
        pressure: 1,
        equipmentIds: ["eq-003"],
        skillIds: ["skill-002"],
        parameters: {
          "Settling Time": "1-2 hours",
          "Separation Temperature": "90-120°C",
          "pH Adjustment": "6-7"
        }
      }),
      createProcessStep({
        id: "step-4",
        name: "Caprolactam Extraction",
        description: "Extract caprolactam from the aqueous phase using organic solvents",
        durationHours: 4,
        temperature: 60,
        pressure: 1,
        equipmentIds: ["eq-009"],
        skillIds: ["skill-001", "skill-002"],
        parameters: {
          "Solvent": "Toluene or Benzene",
          "Extraction Stages": "3",
          "Solvent:Feed Ratio": "2:1",
          "Extraction Temperature": "50-70°C"
        }
      }),
      createProcessStep({
        id: "step-5",
        name: "Solvent Recovery",
        description: "Recover and recycle extraction solvent for reuse",
        durationHours: 3,
        temperature: 110,
        pressure: 1,
        equipmentIds: ["eq-009"],
        skillIds: ["skill-002", "skill-004"],
        parameters: {
          "Distillation Temperature": "100-110°C",
          "Vacuum": "Optional",
          "Reflux Ratio": "3:1",
          "Recovery Rate": ">95%"
        }
      }),
      createProcessStep({
        id: "step-6",
        name: "Caprolactam Purification",
        description: "Purify crude caprolactam through crystallization and further distillation",
        durationHours: 6,
        temperature: 80,
        pressure: 0.1,
        equipmentIds: ["eq-009", "eq-010"],
        skillIds: ["skill-001", "skill-003", "skill-007"],
        parameters: {
          "Crystallization Temperature": "15-25°C",
          "Vacuum Distillation Pressure": "0.1-0.2 bar",
          "Distillation Temperature": "180-200°C",
          "Final Purity": ">99%"
        }
      }),
      createProcessStep({
        id: "step-7",
        name: "Quality Testing & Packaging",
        description: "Test caprolactam quality and package for reuse in nylon production",
        durationHours: 2,
        temperature: 25,
        pressure: 1,
        equipmentIds: ["eq-010"],
        skillIds: ["skill-003", "skill-007"],
        parameters: {
          "Melting Point Check": "69-71°C",
          "Moisture Content": "<0.1%",
          "Color Index": "<10 APHA",
          "Packaging": "Moisture-proof containers"
        }
      })
    ],
    economicAnalysis: {
      startupCosts: {
        equipment: 520000,
        materials: 50000,
        space: 160000,
        training: 45000
      },
      operationalCosts: {
        labor: 20000,
        materials: 15000,
        electricity: 6000,
        water: 2500,
        maintenance: 4500
      },
      breakEvenMonths: 30,
      roi1Year: 40,
      roi5Year: 250
    },
    sustainabilityMetrics: {
      carbonReduction: 75,
      waterReduction: 50,
      wasteReduction: 80,
      biodegradabilityScore: 60,
      certifications: ["ISO 14001", "Green Chemistry Certification", "Circular Economy Standard"],
      communityImpact: "This process enables closed-loop recycling of nylon carpet and textile waste, significantly reducing the environmental impact of nylon production. The recovered caprolactam has identical properties to virgin material, allowing for true circular manufacturing."
    },
    requiredEquipment: [
      equipmentData.find(eq => eq.id === "eq-001")!,
      equipmentData.find(eq => eq.id === "eq-002")!,
      equipmentData.find(eq => eq.id === "eq-003")!,
      equipmentData.find(eq => eq.id === "eq-005")!,
      equipmentData.find(eq => eq.id === "eq-008")!,
      equipmentData.find(eq => eq.id === "eq-009")!,
      equipmentData.find(eq => eq.id === "eq-010")!
    ],
    requiredSkills: [
      skillsData.find(skill => skill.id === "skill-001")!,
      skillsData.find(skill => skill.id === "skill-002")!,
      skillsData.find(skill => skill.id === "skill-003")!,
      skillsData.find(skill => skill.id === "skill-004")!,
      skillsData.find(skill => skill.id === "skill-005")!,
      skillsData.find(skill => skill.id === "skill-006")!,
      skillsData.find(skill => skill.id === "skill-007")!
    ]
  }
];
