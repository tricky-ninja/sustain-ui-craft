import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    category: "Climate Change",
    current: 2.4,
    benchmark: 2.8,
    target: 2.0,
  },
  {
    category: "Acidification",
    current: 0.012,
    benchmark: 0.015,
    target: 0.010,
  },
  {
    category: "Eutrophication",
    current: 0.008,
    benchmark: 0.011,
    target: 0.007,
  },
  {
    category: "Water Depletion",
    current: 156,
    benchmark: 180,
    target: 140,
  },
  {
    category: "Land Use",
    current: 0.45,
    benchmark: 0.52,
    target: 0.38,
  },
];

export function ImpactChart() {
  return (
    <Card className="gradient-card border-0 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Impact Categories
          <span className="text-sm font-normal text-muted-foreground">
            Current vs Industry Benchmark
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar
              dataKey="current"
              fill="hsl(var(--primary))"
              name="Current"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="benchmark"
              fill="hsl(var(--secondary))"
              name="Industry Avg"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="target"
              fill="hsl(var(--accent))"
              name="Target"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}