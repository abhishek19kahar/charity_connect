import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.tsx";
import { Progress } from "./ui/progress.tsx";

// Mock data for the NGOs
const ngosData = [
  {
    id: 1,
    name: "Ocean Cleanup Initiative",
    story: "Dedicated to removing plastic waste from our oceans and preventing further pollution.",
    initiatives: [
      { name: "Coastal Cleanup Drive", fundingGoal: 50000, currentFunding: 35000 },
      { name: "Ocean Plastic Recycling", fundingGoal: 75000, currentFunding: 60000 },
    ],
    outcomes: [
      "Removed 500 tons of plastic from coastal areas",
      "Recycled 300 tons of ocean plastic into usable products",
    ],
  },
  {
    id: 2,
    name: "Reforestation Project",
    story: "Working to restore forests and combat climate change through large-scale tree planting.",
    initiatives: [
      { name: "Urban Tree Planting", fundingGoal: 30000, currentFunding: 28000 },
      { name: "Rainforest Restoration", fundingGoal: 100000, currentFunding: 85000 },
    ],
    outcomes: [
      "Planted 1 million trees across 5 cities",
      "Restored 500 hectares of rainforest",
    ],
  },
  {
    id: 3,
    name: "Education for All",
    story: "Providing access to quality education for underprivileged children worldwide.",
    initiatives: [
      { name: "School Building Project", fundingGoal: 200000, currentFunding: 150000 },
      { name: "Digital Learning Program", fundingGoal: 50000, currentFunding: 40000 },
    ],
    outcomes: [
      "Built 10 new schools in rural areas",
      "Provided 5000 students with access to digital learning tools",
    ],
  },
];

const TransparencyDashboard: React.FC = () => {
  const [selectedNGO, setSelectedNGO] = useState(ngosData[0].id);

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Transparency Dashboard</CardTitle>
        <CardDescription>See how your donations are making a difference</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedNGO.toString()} onValueChange={(value) => setSelectedNGO(parseInt(value))}>
          <TabsList className="grid w-full grid-cols-3">
            {ngosData.map((ngo) => (
              <TabsTrigger key={ngo.id} value={ngo.id.toString()}>
                {ngo.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {ngosData.map((ngo) => (
            <TabsContent key={ngo.id} value={ngo.id.toString()}>
              <Card>
                <CardHeader>
                  <CardTitle>{ngo.name}</CardTitle>
                  <CardDescription>{ngo.story}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Funded Initiatives</h3>
                    {ngo.initiatives.map((initiative, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{initiative.name}</span>
                          <span>{`₹${initiative.currentFunding.toLocaleString()} / ₹${initiative.fundingGoal.toLocaleString()}`}</span>
                        </div>
                        <Progress value={(initiative.currentFunding / initiative.fundingGoal) * 100} />
                      </div>
                    ))}
                    <h3 className="text-lg font-semibold mt-6">Measurable Outcomes</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {ngo.outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TransparencyDashboard;

