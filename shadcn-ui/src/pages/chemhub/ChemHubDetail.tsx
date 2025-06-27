import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeftIcon, Beaker, FlaskConical, Hammer, Leaf, ThermometerIcon, Weight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DetailSection } from '@/components/DetailSection';
import { ProcessDiagram } from '@/components/ProcessDiagram';
import ValueChainLayout from '@/layout/ValueChainLayout';
import { mockProcesses } from '@/lib/mock-data';
import { Process, Equipment, Skill } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const ChemHubDetail: React.FC = () => {
  const { processId } = useParams<{ processId: string }>();
  const [process, setProcess] = useState<Process | null>(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProcess = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProcess = mockProcesses.find(p => p.id === processId);
        setProcess(foundProcess || null);
        setLoading(false);
      }, 500);
    };

    fetchProcess();
  }, [processId]);

  if (loading) {
    return (
      <ValueChainLayout>
        <div className="flex items-center justify-center h-[60vh]">
          <div className="animate-spin h-8 w-8 border-t-2 border-primary rounded-full"></div>
        </div>
      </ValueChainLayout>
    );
  }

  if (!process) {
    return (
      <ValueChainLayout>
        <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
          <h2 className="text-2xl font-semibold">Process Not Found</h2>
          <p className="text-muted-foreground">The chemical process you're looking for doesn't exist or has been removed.</p>
          <Button variant="outline" className="mt-4" onClick={() => window.history.back()}>
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </div>
      </ValueChainLayout>
    );
  }

  const selectedStep = process.steps[selectedStepIndex];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const EquipmentCard: React.FC<{ equipment: Equipment }> = ({ equipment }) => (
    <div className="flex items-start p-3 border rounded-lg bg-white/50">
      <div className="bg-primary/10 p-2 rounded-lg mr-3">
        <Hammer className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">{equipment.name}</h4>
        <p className="text-sm text-muted-foreground">{equipment.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="text-xs">Cost: ${equipment.estimatedCost}</Badge>
          {equipment.manufacturer && (
            <Badge variant="outline" className="text-xs">Made by: {equipment.manufacturer}</Badge>
          )}
        </div>
      </div>
    </div>
  );

  const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="flex items-start p-3 border rounded-lg bg-white/50">
      <div className="bg-primary/10 p-2 rounded-lg mr-3">
        <FlaskConical className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">{skill.name}</h4>
        <p className="text-sm text-muted-foreground">{skill.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="text-xs">Level: {skill.level}</Badge>
          {skill.trainingTime && (
            <Badge variant="outline" className="text-xs">Training: {skill.trainingTime}</Badge>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <ValueChainLayout>
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <Button variant="outline" className="mb-6" onClick={() => window.history.back()}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to ChemHub
        </Button>

        {/* Process Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl font-bold">{process.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">{process.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Eco-friendly</Badge>
            <Badge variant="outline">Circular Process</Badge>
            <Badge variant="secondary">ChemHub Verified</Badge>
          </div>
        </motion.div>

        <Tabs defaultValue="process" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="process">Process Flow</TabsTrigger>
            <TabsTrigger value="science">Scientific Basis</TabsTrigger>
            <TabsTrigger value="economics">Economic Analysis</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>

          <TabsContent value="process">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3">
                <DetailSection 
                  title="Process Flow Diagram" 
                  icon={<Beaker />}
                  className="mb-8"
                >
                  <ProcessDiagram 
                    steps={process.steps} 
                    currentStep={selectedStepIndex}
                    onStepClick={setSelectedStepIndex}
                  />
                </DetailSection>
              </div>

              <div className="lg:col-span-2">
                <DetailSection 
                  title={`Step ${selectedStepIndex + 1}: ${selectedStep.name}`} 
                  icon={<FlaskConical />}
                >
                  <div className="space-y-4">
                    <p>{selectedStep.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                      <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg">
                        <ThermometerIcon className="mb-2 h-6 w-6 text-orange-500" />
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Temperature</p>
                          <p className="font-medium">{selectedStep.temperature || 'N/A'}°C</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg">
                        <Weight className="mb-2 h-6 w-6 text-blue-500" />
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Pressure</p>
                          <p className="font-medium">{selectedStep.pressure || 'N/A'} psi</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg">
                        <Leaf className="mb-2 h-6 w-6 text-green-500" />
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium">{selectedStep.durationHours} hours</p>
                        </div>
                      </div>
                    </div>

                    {selectedStep.parameters && Object.keys(selectedStep.parameters).length > 0 && (
                      <>
                        <h4 className="font-medium mt-4">Process Parameters</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {Object.entries(selectedStep.parameters).map(([key, value]) => (
                            <div key={key} className="p-3 bg-slate-50 rounded-lg">
                              <p className="text-sm text-muted-foreground">{key}</p>
                              <p className="font-medium">{String(value)}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </DetailSection>
              </div>

              <div className="lg:col-span-1">
                <DetailSection title="Required for this step" icon={<Hammer />}>
                  <div className="space-y-4">
                    <h4 className="font-medium">Equipment</h4>
                    <ScrollArea className="h-[200px] pr-4">
                      <div className="space-y-3">
                        {selectedStep.equipment.map(equipment => (
                          <EquipmentCard key={equipment.id} equipment={equipment} />
                        ))}
                      </div>
                    </ScrollArea>

                    <Separator className="my-4" />
                    
                    <h4 className="font-medium">Skills</h4>
                    <ScrollArea className="h-[200px] pr-4">
                      <div className="space-y-3">
                        {selectedStep.skills.map(skill => (
                          <SkillCard key={skill.id} skill={skill} />
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </DetailSection>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="science">
            <motion.div {...fadeInUp}>
              <DetailSection 
                title="Scientific Basis" 
                icon={<Beaker />}
                className="mb-8"
              >
                <div className="prose max-w-none">
                  <p className="text-lg">{process.scientificBasis}</p>
                  <h3 className="text-xl font-semibold mt-6">Key Chemical Reactions</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="p-3 bg-slate-50 rounded-lg">
                      <p className="font-medium">Depolymerization Reaction</p>
                      <p className="text-muted-foreground mt-1">
                        The process breaks down polymer chains into smaller units through hydrolysis
                      </p>
                      <code className="block p-2 bg-slate-100 rounded mt-2">
                        (C6H10O5)n + H2O → n(C6H12O6)
                      </code>
                    </li>
                    <li className="p-3 bg-slate-50 rounded-lg">
                      <p className="font-medium">Reduction Process</p>
                      <p className="text-muted-foreground mt-1">
                        Removal of oxygen groups from the depolymerized units
                      </p>
                      <code className="block p-2 bg-slate-100 rounded mt-2">
                        R-OH + H2 → R-H + H2O
                      </code>
                    </li>
                  </ul>
                </div>
              </DetailSection>
            </motion.div>
          </TabsContent>

          <TabsContent value="economics">
            <motion.div {...fadeInUp}>
              <DetailSection 
                title="Economic Analysis" 
                icon={<Beaker />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Startup Costs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Equipment</span>
                        <span className="font-medium">${process.economicAnalysis.startupCosts.equipment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Materials</span>
                        <span className="font-medium">${process.economicAnalysis.startupCosts.materials.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Space</span>
                        <span className="font-medium">${process.economicAnalysis.startupCosts.space.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Training</span>
                        <span className="font-medium">${process.economicAnalysis.startupCosts.training.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-4 bg-primary/10 rounded-lg font-semibold">
                        <span>Total Startup Cost</span>
                        <span>
                          ${(
                            process.economicAnalysis.startupCosts.equipment +
                            process.economicAnalysis.startupCosts.materials +
                            process.economicAnalysis.startupCosts.space +
                            process.economicAnalysis.startupCosts.training
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Operational Costs (Monthly)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Labor</span>
                        <span className="font-medium">${process.economicAnalysis.operationalCosts.labor.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Materials</span>
                        <span className="font-medium">${process.economicAnalysis.operationalCosts.materials.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Electricity</span>
                        <span className="font-medium">${process.economicAnalysis.operationalCosts.electricity.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Water</span>
                        <span className="font-medium">${process.economicAnalysis.operationalCosts.water.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                        <span>Maintenance</span>
                        <span className="font-medium">${process.economicAnalysis.operationalCosts.maintenance.toLocaleString()}/month</span>
                      </div>
                      <div className="flex justify-between p-4 bg-primary/10 rounded-lg font-semibold">
                        <span>Total Monthly Cost</span>
                        <span>
                          ${(
                            process.economicAnalysis.operationalCosts.labor +
                            process.economicAnalysis.operationalCosts.materials +
                            process.economicAnalysis.operationalCosts.electricity +
                            process.economicAnalysis.operationalCosts.water +
                            process.economicAnalysis.operationalCosts.maintenance
                          ).toLocaleString()}/month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Return on Investment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                      <h4 className="font-medium text-green-800">Break-even Point</h4>
                      <p className="text-3xl font-bold text-green-700 mt-2">{process.economicAnalysis.breakEvenMonths} months</p>
                      <p className="text-sm text-green-600 mt-1">Based on projected revenue</p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                      <h4 className="font-medium text-blue-800">ROI (1 Year)</h4>
                      <p className="text-3xl font-bold text-blue-700 mt-2">{process.economicAnalysis.roi1Year}%</p>
                      <p className="text-sm text-blue-600 mt-1">First year return</p>
                    </div>
                    <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                      <h4 className="font-medium text-purple-800">ROI (5 Years)</h4>
                      <p className="text-3xl font-bold text-purple-700 mt-2">{process.economicAnalysis.roi5Year}%</p>
                      <p className="text-sm text-purple-600 mt-1">Five year return</p>
                    </div>
                  </div>
                </div>
              </DetailSection>
            </motion.div>
          </TabsContent>

          <TabsContent value="sustainability">
            <motion.div {...fadeInUp}>
              <DetailSection 
                title="Sustainability Impact" 
                icon={<Leaf />}
                className="mb-8"
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Environmental Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="bg-green-100 p-2 rounded-full mr-2">
                            <Leaf className="h-5 w-5 text-green-600" />
                          </div>
                          <h4 className="font-medium">Carbon Reduction</h4>
                        </div>
                        <p className="text-sm text-slate-600">
                          This process reduces carbon emissions by {process.sustainabilityMetrics.carbonReduction}% compared to traditional methods.
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 p-2 rounded-full mr-2">
                            <div className="h-5 w-5 text-blue-600 flex items-center justify-center">💧</div>
                          </div>
                          <h4 className="font-medium">Water Usage</h4>
                        </div>
                        <p className="text-sm text-slate-600">
                          {process.sustainabilityMetrics.waterReduction}% less water used compared to conventional processes.
                        </p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="bg-amber-100 p-2 rounded-full mr-2">
                            <div className="h-5 w-5 text-amber-600 flex items-center justify-center">♻️</div>
                          </div>
                          <h4 className="font-medium">Waste Reduction</h4>
                        </div>
                        <p className="text-sm text-slate-600">
                          {process.sustainabilityMetrics.wasteReduction}% waste reduction through circular economy principles.
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="bg-purple-100 p-2 rounded-full mr-2">
                            <div className="h-5 w-5 text-purple-600 flex items-center justify-center">🌱</div>
                          </div>
                          <h4 className="font-medium">Biodegradability</h4>
                        </div>
                        <p className="text-sm text-slate-600">
                          Products created are {process.sustainabilityMetrics.biodegradabilityScore}% biodegradable at end of life.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sustainability Certifications</h3>
                    <div className="flex flex-wrap gap-3">
                      {process.sustainabilityMetrics.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="py-2 px-3 text-sm">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                    <p className="mb-4">{process.sustainabilityMetrics.communityImpact}</p>
                  </div>
                </div>
              </DetailSection>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </ValueChainLayout>
  );
};

export default ChemHubDetail;