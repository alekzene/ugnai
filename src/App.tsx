import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BPILayout } from "@/components/bpi/BPILayout";
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
import BPIDashboard from "./pages/bpi/BPIDashboard";
import BPIPersonas from "./pages/bpi/BPIPersonas";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<"msme" | "bpi" | null>(null);

  const handleAuthSuccess = (role: "msme" | "bpi") => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  if (!isAuthenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthContainer onAuthSuccess={handleAuthSuccess} />
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
          {userRole === "bpi" ? (
            <BPILayout onLogout={handleLogout}>
              <Routes>
                <Route path="/" element={<BPIDashboard />} />
                <Route path="/bpi" element={<BPIDashboard />} />
                <Route path="/bpi/personas" element={<BPIPersonas />} />
                <Route path="/bpi/testing" element={<div className="p-6"><h1 className="text-2xl font-bold">A/B Testing Module (Coming Soon)</h1></div>} />
                <Route path="/bpi/analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics Dashboard (Coming Soon)</h1></div>} />
                <Route path="/bpi/features" element={<div className="p-6"><h1 className="text-2xl font-bold">Feature Requests (Coming Soon)</h1></div>} />
                <Route path="/bpi/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings (Coming Soon)</h1></div>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BPILayout>
          ) : (
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
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
