import { ArrowUpIcon, ArrowDownIcon, Activity, Zap, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Carbon Footprint",
    value: "2.4 kg CO₂e",
    change: "+12%",
    trend: "up",
    icon: Activity,
    description: "Per functional unit",
    color: "primary",
  },
  {
    title: "Water Footprint",
    value: "156 L",
    change: "-8%",
    trend: "down",
    icon: Globe,
    description: "Freshwater consumption",
    color: "secondary",
  },
  {
    title: "Energy Demand",
    value: "45.2 MJ",
    change: "+3%",
    trend: "up",
    icon: Zap,
    description: "Total energy input",
    color: "accent",
  },
  {
    title: "LCA Confidence",
    value: "87%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
    description: "AI uncertainty analysis",
    color: "success",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="gradient-card animate-slide-up border-0 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-${stat.color}/10`}>
              <stat.icon className={`h-4 w-4 text-${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <Badge
                variant={stat.trend === "up" ? "destructive" : "default"}
                className="text-xs"
              >
                {stat.trend === "up" ? (
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}