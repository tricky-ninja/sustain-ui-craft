const API_BASE_URL = 'http://localhost:8000';

// API Types
export interface ScenarioRequest {
  material: string;
  region: string;
  baseline_year: number;
  target_year: number;
  factors: string[];
}

export interface ScenarioResponse {
  material: string;
  region: string;
  scenario_forecast: Array<{
    year: number;
    carbon_tax: number;
    energy_mix: string;
    availability_index: number;
    predicted_emissions: number;
  }>;
  recommendations: string[];
}

export interface LCAQueryRequest {
  query: string;
  product_system: string;
  database: string;
  confidence_required: boolean;
}

export interface LCAQueryResponse {
  query: string;
  answer: string;
  data_sources: string[];
  confidence_score: number;
  follow_up_questions: string[];
}

export interface ImpactForecastRequest {
  supplier_region: string;
  coordinates: { lat: number; lon: number };
  product_system: string;
  impact_category: string;
  time_horizon: number;
}

export interface ImpactForecastResponse {
  region: string;
  impact_category: string;
  forecast: Array<{
    year: number;
    precipitation: number;
    drought_index: number;
    predicted_water_stress: string;
  }>;
  risk_assessment: string;
  recommendations: string[];
}

export interface SustainabilityAdviceRequest {
  product: string;
  current_material: string;
  constraints: {
    max_cost_increase_pct: number;
    min_recyclability_score: number;
    performance_requirements: string[];
  };
}

export interface SustainabilityAdviceResponse {
  product: string;
  alternatives: Array<{
    material: string;
    ghg_reduction_pct: number;
    cost_change_pct: number;
    recyclability_score: number;
    performance_match: string[];
  }>;
  best_choice: string;
  justification: string;
}

export interface UncertaintyRequest {
  impact_score: number;
  impact_category: string;
  confidence_level: number;
  data_sources: string[];
}

export interface UncertaintyResponse {
  impact_score: number;
  confidence_interval: [number, number];
  uncertainty_percent: number;
  major_sources_of_uncertainty: string[];
  explanation: string;
}

export interface BenchmarkRequest {
  product: string;
  impact_metrics: {
    ghg_emissions: number;
    water_footprint: number;
    recyclability_score: number;
  };
  industry: string;
}

export interface BenchmarkResponse {
  product: string;
  industry: string;
  benchmarks: {
    industry_average: {
      ghg_emissions: number;
      water_footprint: number;
      recyclability_score: number;
    };
    best_in_class: {
      ghg_emissions: number;
      water_footprint: number;
      recyclability_score: number;
    };
  };
  comparison: {
    ghg_emissions: string;
    water_footprint: string;
    recyclability_score: string;
  };
  recommendations: string[];
}

// API Service Functions
export const lcaApi = {
  async createScenario(data: ScenarioRequest): Promise<ScenarioResponse> {
    const response = await fetch(`${API_BASE_URL}/scenario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async askLCA(data: LCAQueryRequest): Promise<LCAQueryResponse> {
    const response = await fetch(`${API_BASE_URL}/ask_lca`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async getImpactForecast(data: ImpactForecastRequest): Promise<ImpactForecastResponse> {
    const response = await fetch(`${API_BASE_URL}/impact_forecast`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async getSustainabilityAdvice(data: SustainabilityAdviceRequest): Promise<SustainabilityAdviceResponse> {
    const response = await fetch(`${API_BASE_URL}/sustainability_advice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async getUncertainty(data: UncertaintyRequest): Promise<UncertaintyResponse> {
    const response = await fetch(`${API_BASE_URL}/uncertainty`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async getBenchmark(data: BenchmarkRequest): Promise<BenchmarkResponse> {
    const response = await fetch(`${API_BASE_URL}/benchmark`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },
};