import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ImpactChart } from "@/components/dashboard/ImpactChart";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { ScenarioAnalysis } from "@/components/dashboard/ScenarioAnalysis";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
              LCA Analysis Dashboard
            </h1>
            <p className="text-muted-foreground">
              AI-powered life cycle assessment with predictive scenarios and real-time insights
            </p>
          </div>

          {/* Stats Overview */}
          <StatsCards />

          {/* Main Content Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Impact Chart */}
            <div className="lg:col-span-1">
              <ImpactChart />
            </div>
            
            {/* AI Insights */}
            <div className="lg:col-span-1">
              <AIInsights />
            </div>
          </div>

          {/* Scenario Analysis */}
          <ScenarioAnalysis />
        </main>
      </div>
    </div>
  );
};

export default Index;
