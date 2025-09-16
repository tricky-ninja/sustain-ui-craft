import { Brain, TrendingUp, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const insights = [
  {
    type: "optimization",
    icon: Lightbulb,
    title: "Supplier Switch Opportunity",
    description: "Switching to renewable energy supplier could reduce carbon footprint by 15%",
    confidence: 94,
    impact: "high",
    action: "View Details",
  },
  {
    type: "warning",
    icon: AlertTriangle,
    title: "Water Stress Risk",
    description: "Drought forecast in supplier region may increase water footprint by 23%",
    confidence: 87,
    impact: "medium",
    action: "Assess Risk",
  },
  {
    type: "success",
    icon: CheckCircle,
    title: "Target Achievement",
    description: "On track to meet 2025 carbon reduction target (83% progress)",
    confidence: 91,
    impact: "positive",
    action: "View Progress",
  },
  {
    type: "trend",
    icon: TrendingUp,
    title: "Industry Benchmark",
    description: "Your emissions are 18% below industry average for this sector",
    confidence: 96,
    impact: "positive",
    action: "Compare",
  },
];

export function AIInsights() {
  return (
    <Card className="gradient-card border-0 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-accent" />
          AI Insights & Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className={`p-2 rounded-lg ${
              insight.type === "warning" 
                ? "bg-warning/10 text-warning" 
                : insight.type === "success" || insight.type === "trend"
                ? "bg-success/10 text-success"
                : "bg-accent/10 text-accent"
            }`}>
              <insight.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{insight.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {insight.confidence}% confidence
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    insight.impact === "high" 
                      ? "destructive" 
                      : insight.impact === "medium"
                      ? "secondary"
                      : "default"
                  }
                  className="text-xs"
                >
                  {insight.impact === "positive" ? "Positive" : `${insight.impact} impact`}
                </Badge>
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
                  {insight.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}