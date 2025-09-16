import { Play, Plus, BarChart3, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const scenarios = [
  {
    name: "Renewable Energy Transition",
    status: "running",
    progress: 67,
    impact: "15% CO₂ reduction",
    timeframe: "2025-2030",
    confidence: 94,
  },
  {
    name: "Circular Economy Model",
    status: "completed",
    progress: 100,
    impact: "22% waste reduction",
    timeframe: "2024-2027",
    confidence: 89,
  },
  {
    name: "Local Supplier Network",
    status: "draft",
    progress: 0,
    impact: "12% transport reduction",
    timeframe: "2026-2028",
    confidence: 78,
  },
];

export function ScenarioAnalysis() {
  return (
    <Card className="gradient-card border-0 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-secondary" />
          Scenario Analysis
        </CardTitle>
        <Button size="sm" className="gradient-ai text-white border-0">
          <Plus className="h-4 w-4 mr-2" />
          New Scenario
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {scenarios.map((scenario, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="font-medium text-sm">{scenario.name}</h4>
                <Badge
                  variant={
                    scenario.status === "running"
                      ? "secondary"
                      : scenario.status === "completed"
                      ? "default"
                      : "outline"
                  }
                  className="text-xs"
                >
                  {scenario.status}
                </Badge>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{scenario.timeframe}</span>
                  <span>{scenario.progress}%</span>
                </div>
                <Progress value={scenario.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-success font-medium">{scenario.impact}</span>
                <span className="text-muted-foreground">{scenario.confidence}% confidence</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              {scenario.status === "running" && (
                <Button size="sm" variant="ghost">
                  <Play className="h-3 w-3" />
                </Button>
              )}
              <Button size="sm" variant="ghost">
                <FileText className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full mt-4 border-dashed">
          <Plus className="h-4 w-4 mr-2" />
          Generate AI Scenarios
        </Button>
      </CardContent>
    </Card>
  );
}