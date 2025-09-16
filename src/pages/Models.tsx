import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Database, Activity } from "lucide-react";

const models = [
  {
    id: 1,
    name: "Manufacturing Process Model",
    type: "Cradle-to-Gate",
    status: "Active",
    lastUpdated: "2024-01-15",
    emissions: "2.4 kg CO2e/unit"
  },
  {
    id: 2,
    name: "Product Lifecycle Model",
    type: "Cradle-to-Grave",
    status: "Draft",
    lastUpdated: "2024-01-12",
    emissions: "5.8 kg CO2e/unit"
  },
  {
    id: 3,
    name: "Transportation Model",
    type: "Gate-to-Gate",
    status: "Active",
    lastUpdated: "2024-01-10",
    emissions: "0.3 kg CO2e/km"
  }
];

const Models = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
                LCA Models
              </h1>
              <p className="text-muted-foreground">
                Manage and configure your life cycle assessment models
              </p>
            </div>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              New Model
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <Card key={model.id} className="gradient-card border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                    </div>
                    <Badge variant={model.status === "Active" ? "default" : "secondary"}>
                      {model.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Type: {model.type}</p>
                    <p className="text-sm text-muted-foreground">Updated: {model.lastUpdated}</p>
                    <p className="text-sm font-medium text-primary">{model.emissions}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Run
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

export default Models;