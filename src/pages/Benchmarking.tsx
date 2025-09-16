import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, Award, Target } from "lucide-react";

const benchmarkData = [
  {
    category: "Carbon Intensity",
    yourValue: 2.4,
    industryAvg: 2.8,
    topPerformer: 1.9,
    unit: "kg CO2e/unit",
    percentile: 75,
    trend: "improving"
  },
  {
    category: "Water Usage",
    yourValue: 156,
    industryAvg: 180,
    topPerformer: 120,
    unit: "L/unit",
    percentile: 70,
    trend: "stable"
  },
  {
    category: "Energy Efficiency",
    yourValue: 0.8,
    industryAvg: 1.2,
    topPerformer: 0.6,
    unit: "kWh/unit",
    percentile: 85,
    trend: "improving"
  },
  {
    category: "Waste Generation",
    yourValue: 0.12,
    industryAvg: 0.15,
    topPerformer: 0.08,
    unit: "kg/unit",
    percentile: 72,
    trend: "declining"
  }
];

const peerComparison = [
  { company: "EcoTech Solutions", score: 87, industry: "Technology" },
  { company: "GreenManufacturing Co", score: 84, industry: "Manufacturing" },
  { company: "Your Company", score: 76, industry: "Manufacturing", isYou: true },
  { company: "SustainableCorp", score: 73, industry: "Manufacturing" },
  { company: "CleanEnergy Ltd", score: 71, industry: "Energy" }
];

const Benchmarking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
              Benchmarking
            </h1>
            <p className="text-muted-foreground">
              Compare your environmental performance against industry standards
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benchmarkData.map((data, index) => (
              <Card key={index} className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{data.category}</CardTitle>
                    <Badge variant={data.percentile >= 80 ? "default" : data.percentile >= 60 ? "secondary" : "outline"}>
                      {data.percentile}th percentile
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Your Value</p>
                      <p className="text-xl font-bold text-primary">{data.yourValue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Industry Avg</p>
                      <p className="text-xl font-bold">{data.industryAvg}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Top 10%</p>
                      <p className="text-xl font-bold text-accent">{data.topPerformer}</p>
                    </div>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">{data.unit}</p>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Performance vs Industry</p>
                      <span className="text-sm font-medium">{data.percentile}%</span>
                    </div>
                    <Progress value={data.percentile} className="h-2" />
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className={`h-4 w-4 ${
                      data.trend === "improving" ? "text-green-500" : 
                      data.trend === "stable" ? "text-yellow-500" : "text-red-500"
                    }`} />
                    <span className={`text-sm capitalize ${
                      data.trend === "improving" ? "text-green-500" : 
                      data.trend === "stable" ? "text-yellow-500" : "text-red-500"
                    }`}>
                      {data.trend}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Peer Comparison</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {peerComparison.map((peer, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg ${
                    peer.isYou ? "bg-primary/10 border border-primary/20" : "bg-muted/50"
                  }`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                      {index === 0 && <Award className="h-4 w-4 text-yellow-500" />}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${peer.isYou ? "text-primary" : ""}`}>
                        {peer.company}
                      </p>
                      <p className="text-sm text-muted-foreground">{peer.industry}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{peer.score}</p>
                      <p className="text-xs text-muted-foreground">Sustainability Score</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Improvement Opportunities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-green-600 mb-2">Quick Wins</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Optimize heating/cooling systems</li>
                    <li>• Implement LED lighting</li>
                    <li>• Improve packaging efficiency</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-yellow-600 mb-2">Medium-term Goals</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Renewable energy transition</li>
                    <li>• Supply chain optimization</li>
                    <li>• Waste reduction programs</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-blue-600 mb-2">Long-term Vision</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Carbon neutrality by 2030</li>
                    <li>• Circular economy implementation</li>
                    <li>• Industry leadership position</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Benchmarking;