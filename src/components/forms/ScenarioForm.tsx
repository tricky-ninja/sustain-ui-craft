import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useLCAApi } from "@/hooks/useLCAApi";
import { ScenarioRequest } from "@/services/lcaApi";
import { Loader2, Plus } from "lucide-react";

interface ScenarioFormProps {
  onScenarioCreated?: (scenario: any) => void;
}

export function ScenarioForm({ onScenarioCreated }: ScenarioFormProps) {
  const [formData, setFormData] = useState<ScenarioRequest>({
    material: "",
    region: "",
    baseline_year: 2020,
    target_year: 2035,
    factors: []
  });

  const { createScenario, loading } = useLCAApi();

  const availableFactors = [
    { id: "carbon_tax", label: "Carbon Tax" },
    { id: "energy_mix", label: "Energy Mix" },
    { id: "material_availability", label: "Material Availability" },
    { id: "transport_emissions", label: "Transport Emissions" },
    { id: "renewable_energy", label: "Renewable Energy" },
    { id: "waste_management", label: "Waste Management" }
  ];

  const handleFactorChange = (factorId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      factors: checked 
        ? [...prev.factors, factorId]
        : prev.factors.filter(f => f !== factorId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createScenario(formData);
    if (result && onScenarioCreated) {
      onScenarioCreated(result);
    }
  };

  return (
    <Card className="gradient-card border-0 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Create New Scenario
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="material">Material</Label>
              <Input
                id="material"
                value={formData.material}
                onChange={(e) => setFormData(prev => ({ ...prev, material: e.target.value }))}
                placeholder="e.g., aluminum, steel, plastic"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={formData.region} onValueChange={(value) => setFormData(prev => ({ ...prev, region: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="North America">North America</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                  <SelectItem value="South America">South America</SelectItem>
                  <SelectItem value="Africa">Africa</SelectItem>
                  <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="baseline_year">Baseline Year</Label>
              <Input
                id="baseline_year"
                type="number"
                value={formData.baseline_year}
                onChange={(e) => setFormData(prev => ({ ...prev, baseline_year: parseInt(e.target.value) }))}
                min="2000"
                max="2030"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="target_year">Target Year</Label>
              <Input
                id="target_year"
                type="number"
                value={formData.target_year}
                onChange={(e) => setFormData(prev => ({ ...prev, target_year: parseInt(e.target.value) }))}
                min="2025"
                max="2050"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Impact Factors</Label>
            <div className="grid grid-cols-2 gap-3">
              {availableFactors.map((factor) => (
                <div key={factor.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={factor.id}
                    checked={formData.factors.includes(factor.id)}
                    onCheckedChange={(checked) => handleFactorChange(factor.id, checked as boolean)}
                  />
                  <Label htmlFor={factor.id} className="text-sm font-normal">
                    {factor.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full gradient-primary" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Creating Scenario...
              </>
            ) : (
              "Create Scenario"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}