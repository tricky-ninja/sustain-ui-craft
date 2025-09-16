import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Plus, Calendar } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Q4 2023 Sustainability Report",
    type: "Quarterly",
    status: "Published",
    date: "2024-01-15",
    format: "PDF",
    size: "2.4 MB"
  },
  {
    id: 2,
    title: "Carbon Footprint Analysis 2023",
    type: "Annual",
    status: "Draft",
    date: "2024-01-10",
    format: "PDF",
    size: "1.8 MB"
  },
  {
    id: 3,
    title: "Supply Chain LCA Report",
    type: "Custom",
    status: "In Progress",
    date: "2024-01-08",
    format: "PDF",
    size: "3.1 MB"
  },
  {
    id: 4,
    title: "ESG Compliance Dashboard",
    type: "Monthly",
    status: "Published",
    date: "2024-01-05",
    format: "Excel",
    size: "856 KB"
  }
];

const templates = [
  { name: "ISO 14040/14044 LCA Report", category: "Standards" },
  { name: "GRI Sustainability Report", category: "ESG" },
  { name: "Carbon Disclosure Project", category: "CDP" },
  { name: "TCFD Climate Report", category: "Climate" },
  { name: "EU Taxonomy Report", category: "Regulatory" }
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
                Reports
              </h1>
              <p className="text-muted-foreground">
                Generate and manage LCA and sustainability reports
              </p>
            </div>
            <Button className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">{report.type}</Badge>
                            <span className="text-sm text-muted-foreground">{report.format}</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <Badge variant={
                            report.status === "Published" ? "default" :
                            report.status === "Draft" ? "secondary" : "outline"
                          }>
                            {report.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{report.date}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Report Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {templates.map((template, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div>
                        <p className="font-medium text-sm">{template.name}</p>
                        <p className="text-xs text-muted-foreground">{template.category}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Use
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Scheduled Reports</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium text-sm">Monthly ESG Dashboard</p>
                    <p className="text-xs text-muted-foreground">Next: Feb 1, 2024</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium text-sm">Quarterly LCA Report</p>
                    <p className="text-xs text-muted-foreground">Next: Mar 31, 2024</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;