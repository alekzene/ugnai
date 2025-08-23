import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AuthContainer } from "@/components/auth/AuthContainer";
import Dashboard from "./pages/Dashboard";
import LoanSimulator from "./pages/LoanSimulator";
import AIAssistant from "./pages/AIAssistant";
import ProgressTracker from "./pages/ProgressTracker";
import SandboxTrials from "./pages/SandboxTrials";
import Rewards from "./pages/Rewards";
import PrivacyCenter from "./pages/PrivacyCenter";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthContainer onAuthSuccess={() => setIsAuthenticated(true)} />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/simulator" element={<LoanSimulator />} />
              <Route path="/assistant" element={<AIAssistant />} />
              <Route path="/progress" element={<ProgressTracker />} />
              <Route path="/sandbox" element={<SandboxTrials />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/privacy" element={<PrivacyCenter />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
