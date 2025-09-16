import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Models from "./pages/Models";
import Scenarios from "./pages/Scenarios";
import Assistant from "./pages/Assistant";
import Databases from "./pages/Databases";
import Impact from "./pages/Impact";
import EarthData from "./pages/EarthData";
import Reports from "./pages/Reports";
import Benchmarking from "./pages/Benchmarking";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/models" element={<Models />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/databases" element={<Databases />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/earth-data" element={<EarthData />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/benchmarking" element={<Benchmarking />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
