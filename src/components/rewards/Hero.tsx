import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-rewards.jpg";
export const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/50 rounded-full px-4 py-2 text-sm font-medium text-accent-foreground">
            <Star className="h-4 w-4" />
            Employee Recognition Platform
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Reward Excellence,
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Drive Success</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">Transform your workplace culture with our comprehensive rewards and incentive platform. Recognize achievements, boost engagement, and drive performance across your organization.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group">
              Start Rewarding Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img src={heroImage} alt="Team celebrating achievements" className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 bg-gradient-primary/10"></div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 bg-card rounded-xl p-4 shadow-card border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <Star className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-card-foreground">Achievement Unlocked!</div>
                <div className="text-sm text-muted-foreground">Sales Target Exceeded</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">+500</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};