import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Plus, BarChart3 } from "lucide-react";

const scenarios = [
  {
    id: 1,
    name: "Renewable Energy Transition",
    description: "Impact of switching to 100% renewable energy",
    reduction: 35,
    status: "Running",
    progress: 75
  },
  {
    id: 2,
    name: "Circular Economy Implementation",
    description: "Effects of implementing circular economy principles",
    reduction: 28,
    status: "Completed",
    progress: 100
  },
  {
    id: 3,
    name: "Supply Chain Optimization",
    description: "Optimizing transportation and logistics",
    reduction: 18,
    status: "Draft",
    progress: 0
  }
];

const Scenarios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
                Scenario Analysis
              </h1>
              <p className="text-muted-foreground">
                Explore different scenarios and their environmental impact
              </p>
            </div>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              New Scenario
            </Button>
          </div>

          <div className="grid gap-6">
            {scenarios.map((scenario) => (
              <Card key={scenario.id} className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{scenario.name}</CardTitle>
                        <p className="text-muted-foreground mt-1">{scenario.description}</p>
                      </div>
                    </div>
                    <Badge variant={scenario.status === "Completed" ? "default" : scenario.status === "Running" ? "secondary" : "outline"}>
                      {scenario.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Potential Reduction</p>
                      <p className="text-2xl font-bold text-primary">{scenario.reduction}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Progress</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={scenario.progress} className="flex-1" />
                        <span className="text-sm font-medium">{scenario.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Results
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit Scenario
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scenarios;