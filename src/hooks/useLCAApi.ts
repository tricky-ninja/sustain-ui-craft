import { useState } from 'react';
import { lcaApi, ScenarioRequest, LCAQueryRequest, ImpactForecastRequest, SustainabilityAdviceRequest, UncertaintyRequest, BenchmarkRequest } from '@/services/lcaApi';
import { useToast } from '@/hooks/use-toast';

export const useLCAApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleApiCall = async <T, R>(
    apiCall: (data: T) => Promise<R>,
    data: T,
    successMessage?: string
  ): Promise<R | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall(data);
      if (successMessage) {
        toast({
          title: "Success",
          description: successMessage,
        });
      }
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createScenario = (data: ScenarioRequest) =>
    handleApiCall(lcaApi.createScenario, data, "Scenario created successfully");

  const askLCA = (data: LCAQueryRequest) =>
    handleApiCall(lcaApi.askLCA, data);

  const getImpactForecast = (data: ImpactForecastRequest) =>
    handleApiCall(lcaApi.getImpactForecast, data, "Impact forecast generated");

  const getSustainabilityAdvice = (data: SustainabilityAdviceRequest) =>
    handleApiCall(lcaApi.getSustainabilityAdvice, data, "Sustainability advice generated");

  const getUncertainty = (data: UncertaintyRequest) =>
    handleApiCall(lcaApi.getUncertainty, data);

  const getBenchmark = (data: BenchmarkRequest) =>
    handleApiCall(lcaApi.getBenchmark, data, "Benchmark analysis complete");

  return {
    loading,
    error,
    createScenario,
    askLCA,
    getImpactForecast,
    getSustainabilityAdvice,
    getUncertainty,
    getBenchmark,
  };
};