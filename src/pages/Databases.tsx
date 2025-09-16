import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Plus, ExternalLink } from "lucide-react";

const databases = [
  {
    id: 1,
    name: "Ecoinvent 3.9",
    type: "External",
    records: "18,000+",
    status: "Connected",
    description: "Comprehensive LCI database with global coverage"
  },
  {
    id: 2,
    name: "GaBi Professional",
    type: "External",
    records: "15,000+",
    status: "Connected",
    description: "Industry-specific LCA data and models"
  },
  {
    id: 3,
    name: "Company Custom DB",
    type: "Internal",
    records: "1,250",
    status: "Active",
    description: "Internal company-specific environmental data"
  },
  {
    id: 4,
    name: "IDEMAT 2023",
    type: "External",
    records: "3,000+",
    status: "Available",
    description: "Material and process data for eco-design"
  }
];

const Databases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
                Databases
              </h1>
              <p className="text-muted-foreground">
                Manage LCA databases and data sources
              </p>
            </div>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Database
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {databases.map((database) => (
              <Card key={database.id} className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Database className="h-6 w-6 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{database.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{database.description}</p>
                      </div>
                    </div>
                    <Badge variant={database.status === "Connected" || database.status === "Active" ? "default" : "secondary"}>
                      {database.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium">{database.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Records</p>
                      <p className="font-medium">{database.records}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {database.status === "Connected" || database.status === "Active" ? (
                      <>
                        <Button variant="outline" size="sm" className="flex-1">
                          Browse Data
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1">
                        Connect
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Database Statistics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">37,250+</p>
                <p className="text-sm text-muted-foreground">Total Records</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Connected Sources</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">99.2%</p>
                <p className="text-sm text-muted-foreground">Data Coverage</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">2024</p>
                <p className="text-sm text-muted-foreground">Latest Update</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Databases;