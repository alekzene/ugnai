import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { SegmentPerformance } from "@/components/dashboard/SegmentPerformance";
import { AIInsightsPanel } from "@/components/dashboard/AIInsightsPanel";
import { SimulationResults } from "@/components/dashboard/SimulationResults";
import { FeedbackAnalysis } from "@/components/dashboard/FeedbackAnalysis";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        <MetricsOverview />
        <SegmentPerformance />
        <AIInsightsPanel />
        <SimulationResults />
        <FeedbackAnalysis />
      </div>
    </div>
  );
};

export default Index;
