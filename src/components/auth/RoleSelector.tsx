import { Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RoleSelectorProps {
  onRoleSelect: (role: "msme" | "bpi") => void;
}

export function RoleSelector({ onRoleSelect }: RoleSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to UgnAI Platform
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your access portal to continue with the appropriate interface
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* MSME Portal */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 bg-gradient-primary rounded-full p-6 w-20 h-20 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">MSME Portal</CardTitle>
              <CardDescription className="text-base">
                Access financial assistance tools, loan simulators, and AI guidance for your business growth
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Loan Calculator & Simulator
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  AI Financial Assistant
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Progress Tracking & Rewards
                </div>
              </div>
              <Button 
                onClick={() => onRoleSelect("msme")} 
                className="w-full" 
                size="lg"
              >
                Enter MSME Portal
              </Button>
            </CardContent>
          </Card>

          {/* BPI Bank Portal */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-bpi-red/50">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 bg-bpi-red rounded-full p-6 w-20 h-20 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl">BPI Bank Portal</CardTitle>
              <CardDescription className="text-base">
                Product development sandbox for testing MSME financial products and gathering insights
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-bpi-green rounded-full"></div>
                  MSME Behavior Analytics
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-bpi-green rounded-full"></div>
                  A/B Testing & Simulations
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-bpi-green rounded-full"></div>
                  Product Performance Dashboard
                </div>
              </div>
              <Button 
                onClick={() => onRoleSelect("bpi")} 
                className="w-full bg-bpi-red hover:bg-bpi-red/90 text-bpi-red-foreground" 
                size="lg"
              >
                Enter BPI Portal
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 UgnAI Platform. All rights reserved.</p>
          <p className="mt-1">Secure financial innovation for MSMEs and Banking Partners</p>
        </div>
      </div>
    </div>
  );
}