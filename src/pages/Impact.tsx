import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Zap, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";

const impactCategories = [
  {
    category: "Climate Change",
    current: 2.4,
    target: 2.0,
    unit: "kg CO2-eq",
    trend: "down",
    progress: 75,
    status: "On Track"
  },
  {
    category: "Ozone Depletion",
    current: 0.00012,
    target: 0.00010,
    unit: "kg CFC-11-eq",
    trend: "down",
    progress: 60,
    status: "Needs Attention"
  },
  {
    category: "Acidification",
    current: 0.012,
    target: 0.010,
    unit: "kg SO2-eq",
    trend: "down",
    progress: 80,
    status: "On Track"
  },
  {
    category: "Eutrophication",
    current: 0.008,
    target: 0.007,
    unit: "kg PO4-eq",
    trend: "up",
    progress: 90,
    status: "Exceeding"
  },
  {
    category: "Water Depletion",
    current: 156,
    target: 140,
    unit: "m³ water-eq",
    trend: "down",
    progress: 45,
    status: "Behind Target"
  },
  {
    category: "Land Use",
    current: 0.45,
    target: 0.38,
    unit: "m² × year",
    trend: "up",
    progress: 30,
    status: "Critical"
  }
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
              Impact Assessment
            </h1>
            <p className="text-muted-foreground">
              Comprehensive environmental impact analysis across all categories
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactCategories.map((impact, index) => (
              <Card key={index} className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{impact.category}</CardTitle>
                    </div>
                    <Badge 
                      variant={
                        impact.status === "Exceeding" ? "default" :
                        impact.status === "On Track" ? "secondary" :
                        impact.status === "Critical" ? "destructive" : "outline"
                      }
                    >
                      {impact.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Current</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xl font-bold">{impact.current}</p>
                        {impact.trend === "down" ? (
                          <TrendingDown className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingUp className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{impact.unit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Target</p>
                      <p className="text-xl font-bold text-accent">{impact.target}</p>
                      <p className="text-xs text-muted-foreground">{impact.unit}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Progress to Target</p>
                      <span className="text-sm font-medium">{impact.progress}%</span>
                    </div>
                    <Progress 
                      value={impact.progress} 
                      className={`h-2 ${
                        impact.progress < 50 ? 'text-red-500' : 
                        impact.progress < 80 ? 'text-yellow-500' : 'text-green-500'
                      }`}
                    />
                  </div>

                  {impact.status === "Critical" && (
                    <div className="flex items-center space-x-2 p-2 bg-destructive/10 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <p className="text-sm text-destructive">Immediate action required</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Impact Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-500">3</p>
                <p className="text-sm text-muted-foreground">On Track</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">1</p>
                <p className="text-sm text-muted-foreground">Needs Attention</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-500">2</p>
                <p className="text-sm text-muted-foreground">Behind Target</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">67%</p>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Impact;