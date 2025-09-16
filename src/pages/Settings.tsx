import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Globe } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your account and application preferences
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Settings */}
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Profile Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="EcoTech Solutions" />
                  </div>
                  <Button>Save Profile</Button>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>LCA Analysis Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when analysis completes</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Benchmark Updates</Label>
                      <p className="text-sm text-muted-foreground">Industry benchmark changes</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Report Generation</Label>
                      <p className="text-sm text-muted-foreground">When reports are ready</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Data & Privacy */}
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Data & Privacy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Data Sharing</Label>
                      <p className="text-sm text-muted-foreground">Share anonymized data for benchmarking</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>AI Training</Label>
                      <p className="text-sm text-muted-foreground">Use data to improve AI recommendations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      Download My Data
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Quick Settings */}
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <SettingsIcon className="h-5 w-5" />
                    <span>Quick Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Dark Mode</Label>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label>Auto-save</Label>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Default Currency</Label>
                    <select className="w-full p-2 border rounded-md bg-background">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>JPY</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Time Zone</Label>
                    <select className="w-full p-2 border rounded-md bg-background">
                      <option>UTC-5 (EST)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (CET)</option>
                      <option>UTC+9 (JST)</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Integration Settings */}
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5" />
                    <span>Integrations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Ecoinvent</p>
                      <p className="text-xs text-green-500">Connected</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">GaBi</p>
                      <p className="text-xs text-green-500">Connected</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">SAP</p>
                      <p className="text-xs text-muted-foreground">Not connected</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </CardContent>
              </Card>

              {/* API Settings */}
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <span>API Access</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Label>API Key</Label>
                    <div className="flex space-x-2">
                      <Input value="lca_••••••••••••••••" readOnly className="flex-1" />
                      <Button variant="outline" size="sm">Copy</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Generate New Key
                  </Button>
                  <Button variant="outline" className="w-full">
                    View API Docs
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

export default Settings;