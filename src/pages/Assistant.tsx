import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Loader2, BarChart3, TrendingUp, GitCompare, FileText } from "lucide-react";
import { useLCAApi } from "@/hooks/useLCAApi";
import { LCAQueryRequest, ImpactForecastRequest, SustainabilityAdviceRequest, BenchmarkRequest } from "@/services/lcaApi";

const conversations = [
  {
    id: 1,
    message: "How can I reduce my carbon footprint in manufacturing?",
    response: "Based on your current data, switching to renewable energy could reduce emissions by 35%. I also recommend optimizing your supply chain logistics.",
    timestamp: "2 minutes ago"
  },
  {
    id: 2,
    message: "What's the impact of changing packaging materials?",
    response: "Switching to biodegradable packaging could reduce your packaging-related emissions by 60% and improve your overall sustainability score.",
    timestamp: "1 hour ago"
  }
];

const Assistant = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState(conversations);
  const { askLCA, getImpactForecast, getSustainabilityAdvice, getBenchmark, loading } = useLCAApi();

  const addMessage = (message: string, response?: string) => {
    const newMessage = {
      id: messages.length + 1,
      message,
      response: response || "",
      timestamp: "Just now"
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  };

  const updateMessageResponse = (messageId: number, response: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, response }
          : msg
      )
    );
  };

  const handleQuickAction = async (action: string) => {
    let messageId: number;
    
    switch (action) {
      case "analyze":
        messageId = addMessage("Analyze my current LCA data and provide insights");
        const analysisResponse = await askLCA({
          query: "Analyze current LCA data and provide key insights and recommendations",
          product_system: "general",
          database: "ecoinvent",
          confidence_required: true
        });
        if (analysisResponse) {
          updateMessageResponse(messageId, analysisResponse.answer);
        }
        break;
        
      case "improvements":
        messageId = addMessage("What improvements can I make to reduce environmental impact?");
        const adviceResponse = await getSustainabilityAdvice({
          product: "general product",
          current_material: "current materials",
          constraints: {
            max_cost_increase_pct: 15,
            min_recyclability_score: 0.7,
            performance_requirements: ["durability", "efficiency"]
          }
        });
        if (adviceResponse) {
          updateMessageResponse(messageId, `Best choice: ${adviceResponse.best_choice}. ${adviceResponse.justification}`);
        }
        break;
        
      case "forecast":
        messageId = addMessage("What's the future environmental impact forecast?");
        const forecastResponse = await getImpactForecast({
          supplier_region: "Europe",
          coordinates: { lat: 50.0, lon: 8.0 },
          product_system: "general manufacturing",
          impact_category: "climate_change",
          time_horizon: 2035
        });
        if (forecastResponse) {
          updateMessageResponse(messageId, `${forecastResponse.risk_assessment} Key recommendations: ${forecastResponse.recommendations.join(', ')}`);
        }
        break;
        
      case "benchmark":
        messageId = addMessage("How does my product compare to industry benchmarks?");
        const benchmarkResponse = await getBenchmark({
          product: "general product",
          impact_metrics: {
            ghg_emissions: 120,
            water_footprint: 250,
            recyclability_score: 0.6
          },
          industry: "manufacturing"
        });
        if (benchmarkResponse) {
          updateMessageResponse(messageId, `Comparison: ${Object.values(benchmarkResponse.comparison).join(', ')}. Recommendations: ${benchmarkResponse.recommendations.join(', ')}`);
        }
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const messageId = addMessage(query);
    setQuery("");

    const lcaQuery: LCAQueryRequest = {
      query,
      product_system: "general",
      database: "ecoinvent",
      confidence_required: true
    };

    const response = await askLCA(lcaQuery);
    
    if (response) {
      updateMessageResponse(messageId, response.answer);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight gradient-hero bg-clip-text text-transparent">
              AI Assistant
            </h1>
            <p className="text-muted-foreground">
              Get intelligent insights and recommendations for your LCA analysis
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="gradient-card border-0 shadow-md h-[600px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <span>AI Chat</span>
                    <Badge variant="secondary">Online</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                    {messages.map((conv) => (
                      <div key={conv.id} className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <User className="h-6 w-6 p-1 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-1" />
                          <div className="bg-muted/50 rounded-lg p-3 flex-1">
                            <p className="text-sm">{conv.message}</p>
                          </div>
                        </div>
                        {conv.response && (
                          <div className="flex items-start space-x-3">
                            <Bot className="h-6 w-6 p-1 rounded-full bg-accent/10 text-accent flex-shrink-0 mt-1" />
                            <div className="bg-accent/10 rounded-lg p-3 flex-1">
                              <p className="text-sm">{conv.response}</p>
                              <p className="text-xs text-muted-foreground mt-2">{conv.timestamp}</p>
                            </div>
                          </div>
                        )}
                        {!conv.response && conv.id === messages[messages.length - 1]?.id && loading && (
                          <div className="flex items-start space-x-3">
                            <Bot className="h-6 w-6 p-1 rounded-full bg-accent/10 text-accent flex-shrink-0 mt-1" />
                            <div className="bg-accent/10 rounded-lg p-3 flex-1">
                              <div className="flex items-center space-x-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <p className="text-sm">Analyzing your query...</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <Input 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask about your LCA data, scenarios, or get recommendations..."
                      className="flex-1"
                      disabled={loading}
                    />
                    <Button type="submit" className="gradient-primary" disabled={loading}>
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    onClick={() => handleQuickAction("analyze")}
                    disabled={loading}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analyze Current Data
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => handleQuickAction("improvements")}
                    disabled={loading}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Suggest Improvements
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => handleQuickAction("forecast")}
                    disabled={loading}
                  >
                    <GitCompare className="h-4 w-4 mr-2" />
                    Impact Forecast
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => handleQuickAction("benchmark")}
                    disabled={loading}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Benchmark Analysis
                  </Button>
                </CardContent>
              </Card>

              <Card className="gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle>AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Real-time LCA analysis</p>
                  <p>• Scenario optimization</p>
                  <p>• Environmental impact predictions</p>
                  <p>• Regulatory compliance checks</p>
                  <p>• Best practice recommendations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Assistant;