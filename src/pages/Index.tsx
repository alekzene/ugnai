import { Hero } from "@/components/rewards/Hero";
import { Benefits } from "@/components/rewards/Benefits";
import { HowItWorks } from "@/components/rewards/HowItWorks";
import { Stats } from "@/components/rewards/Stats";
import { CTA } from "@/components/rewards/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Stats />
      <CTA />
    </div>
  );
};

export default Index;
