import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  PieChart
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Welcome back, User!</h1>
        <p className="text-muted-foreground">
          Your business health at a glance and what you can do next.
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₱185,000</div>
            <div className="flex items-center text-success text-sm">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash Runway</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8.2 months</div>
            <div className="flex items-center text-success text-sm">
              <CheckCircle className="h-3 w-3 mr-1" />
              Healthy buffer
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Loan</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₱245,000</div>
            <div className="flex items-center text-muted-foreground text-sm">
              30% remaining
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">DSCR Rating</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">1.68</div>
            <div className="flex items-center text-success text-sm">
              <CheckCircle className="h-3 w-3 mr-1" />
              Excellent
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Readiness */}
        <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Ready for Expansion?
            </CardTitle>
            <CardDescription>
              How ready you are for a bigger loan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Revenue Stability</span>
                  <Badge className="bg-success text-success-foreground">85%</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Cash Flow Health</span>
                  <Badge className="bg-success text-success-foreground">92%</Badge>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Debt Service Coverage</span>
                  <Badge className="bg-success text-success-foreground">78%</Badge>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">You're ready for a bigger loan!</p>
                  <p className="text-sm text-muted-foreground">Try: ₱500,000 - ₱800,000</p>
                </div>
                <Button className="bg-gradient-primary" onClick={() => navigate('/simulator')}>
                  Simulate Loan
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-primary-light border border-primary/20">
              <p className="text-sm font-medium text-primary">Good News</p>
              <p className="text-sm text-foreground mt-1">
                Your income is up 15%. Time to grow your shop?
              </p>
            </div>
            
            <div className="p-3 rounded-lg bg-warning-light border border-warning/20">
              <p className="text-sm font-medium text-warning">Heads Up</p>
              <p className="text-sm text-foreground mt-1">
                BPI has cheaper loans now. Check if you qualify.
              </p>
            </div>
            
            <Button variant="outline" className="w-full" onClick={() => navigate('./assistant')}>
              Chat with AI Assistant
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest simulations and decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-primary text-primary-foreground">
                <Target className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Simulated ₱800,000 expansion loan</p>
                <p className="text-sm text-muted-foreground">2 hours ago • 5-year term at 12% APR</p>
              </div>
              <Badge variant="outline">Favorable</Badge>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-success text-success-foreground">
                <CheckCircle className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Completed sandbox trial</p>
                <p className="text-sm text-muted-foreground">Yesterday • BPI FlexiLoan product</p>
              </div>
              <Badge variant="outline">Completed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;