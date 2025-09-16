import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Satellite, MapPin, RefreshCw } from "lucide-react";

const dataSources = [
  {
    id: 1,
    name: "NASA Earth Observations",
    type: "Satellite",
    status: "Live",
    lastUpdate: "5 minutes ago",
    coverage: "Global",
    parameters: ["Temperature", "CO2 Levels", "Vegetation Index"]
  },
  {
    id: 2,
    name: "ESA Copernicus",
    type: "Satellite",
    status: "Live",
    lastUpdate: "12 minutes ago",
    coverage: "Global",
    parameters: ["Land Use", "Ocean Data", "Atmospheric Composition"]
  },
  {
    id: 3,
    name: "NOAA Climate Data",
    type: "Ground Stations",
    status: "Live",
    lastUpdate: "1 hour ago",
    coverage: "Regional",
    parameters: ["Weather Patterns", "Ocean Temperature", "Ice Coverage"]
  },
  {
    id: 4,
    name: "Local Environmental Sensors",
    type: "IoT Network",
    status: "Active",
    lastUpdate: "3 minutes ago",
    coverage: "Local",
    parameters: ["Air Quality", "Soil Conditions", "Water Quality"]
  }
];

const EarthData = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
                Earth Data
              </h1>
              <p className="text-muted-foreground">
                Real-time environmental data from satellites and ground sensors
              </p>
            </div>
            <Button className="gradient-primary">
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync All Data
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {dataSources.map((source) => (
              <Card key={source.id} className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {source.type === "Satellite" && <Satellite className="h-6 w-6 text-primary" />}
                      {source.type === "Ground Stations" && <Globe className="h-6 w-6 text-primary" />}
                      {source.type === "IoT Network" && <MapPin className="h-6 w-6 text-primary" />}
                      <div>
                        <CardTitle className="text-lg">{source.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{source.type}</p>
                      </div>
                    </div>
                    <Badge variant={source.status === "Live" ? "default" : "secondary"}>
                      {source.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Coverage</p>
                      <p className="font-medium">{source.coverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Update</p>
                      <p className="font-medium">{source.lastUpdate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Available Parameters</p>
                    <div className="flex flex-wrap gap-2">
                      {source.parameters.map((param, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {param}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Data
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Global CO2 Levels</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">421.3 ppm</p>
                  <p className="text-sm text-muted-foreground">Current atmospheric CO2</p>
                  <p className="text-xs text-red-500 mt-2">↑ 0.2 ppm from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Satellite className="h-5 w-5 text-primary" />
                  <span>Global Temperature</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">+1.2°C</p>
                  <p className="text-sm text-muted-foreground">Above pre-industrial</p>
                  <p className="text-xs text-red-500 mt-2">↑ 0.1°C from last year</p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Data Quality</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">98.7%</p>
                  <p className="text-sm text-muted-foreground">Sensor uptime</p>
                  <p className="text-xs text-green-500 mt-2">↑ 0.3% this month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EarthData;