import { Building2, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="bg-gradient-primary text-white p-8 rounded-lg shadow-elegant">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">BPI Product Development Dashboard</h1>
            <p className="text-white/80 text-lg">
              Simulation-Based Feedback Analytics for MSME Products
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Building2 className="h-12 w-12 text-white/60" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card className="p-4 shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Simulations</p>
              <p className="text-2xl font-bold text-foreground">1,247</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-secondary/20 rounded-lg">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">MSME Segments</p>
              <p className="text-2xl font-bold text-foreground">8</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-accent/60 rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-2xl font-bold text-foreground">Today</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};