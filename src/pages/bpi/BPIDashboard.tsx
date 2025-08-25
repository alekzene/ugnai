import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Users, 
  Plus,
  Download,
  ArrowRight,
  Eye,
  MessageSquare,
  ThumbsUp,
  X
} from "lucide-react";

export default function BPIDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Product Development Dashboard</h1>
          <p className="text-muted-foreground">Monitor MSME product performance and behavior insights</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm" className="bg-bpi-red hover:bg-bpi-red/90">
            <Plus className="h-4 w-4 mr-2" />
            Start New Simulation
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Simulations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12% from last week
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Adoption Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.8%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +5.2% improvement
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confusion Points</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive flex items-center gap-1">
                <TrendingDown className="h-3 w-3" />
                +3 new this week
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4/10</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +0.3 this month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Product Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Product Performance Overview</CardTitle>
          <CardDescription>Track adoption rates and user behavior across different product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="loans" className="space-y-4">
            <TabsList>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>
            
            <TabsContent value="loans" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">SME Working Capital</span>
                    <span className="text-sm text-muted-foreground">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Equipment Financing</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Trade Finance</span>
                    <span className="text-sm text-muted-foreground">52%</span>
                  </div>
                  <Progress value={52} className="h-2" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="savings" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Business Savings</span>
                    <span className="text-sm text-muted-foreground">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Time Deposits</span>
                    <span className="text-sm text-muted-foreground">71%</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Foreign Currency</span>
                    <span className="text-sm text-muted-foreground">43%</span>
                  </div>
                  <Progress value={43} className="h-2" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="payments" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Digital Banking</span>
                    <span className="text-sm text-muted-foreground">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">POS Solutions</span>
                    <span className="text-sm text-muted-foreground">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Cash Management</span>
                    <span className="text-sm text-muted-foreground">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* MSME Behavior Heatmap & Live Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Behavior Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle>MSME Behavior Heatmap</CardTitle>
            <CardDescription>Visual representation of user interaction patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`h-8 rounded-sm ${
                      i % 4 === 0 ? 'bg-destructive' : 
                      i % 3 === 0 ? 'bg-warning' : 
                      i % 2 === 0 ? 'bg-success' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low Engagement</span>
                <span>High Confusion</span>
                <span>High Engagement</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-sm"></div>
                  <span className="text-sm">Step 2: Loan Terms - 45% drop-off</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-warning rounded-sm"></div>
                  <span className="text-sm">Step 4: Interest Rates - Confusion detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-sm"></div>
                  <span className="text-sm">Step 1: Application - High engagement</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Live Feedback Feed
              <Badge variant="outline" className="bg-success text-success-foreground">
                <div className="w-2 h-2 bg-success rounded-full mr-1"></div>
                Live
              </Badge>
            </CardTitle>
            <CardDescription>Real-time responses from MSME testers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl">😊</div>
                <div className="flex-1">
                  <p className="text-sm">"The loan calculator is very helpful for planning our expansion."</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">Retail Store Owner</Badge>
                    <span className="text-xs text-muted-foreground">2 min ago</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-destructive-light rounded-lg">
                <div className="text-2xl">😠</div>
                <div className="flex-1">
                  <p className="text-sm">"Didn't understand the penalty terms. Too confusing!"</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="destructive" className="text-xs">Confusion</Badge>
                    <Badge variant="secondary" className="text-xs">Food Vendor</Badge>
                    <span className="text-xs text-muted-foreground">5 min ago</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl">😐</div>
                <div className="flex-1">
                  <p className="text-sm">"Process is okay but could be faster. Takes too many steps."</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">Transport Operator</Badge>
                    <span className="text-xs text-muted-foreground">8 min ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Pin Insight
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Respond
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            AI-Driven Insights
            <Badge className="bg-gradient-primary text-white">AI</Badge>
          </CardTitle>
          <CardDescription>Automated analysis and recommendations based on user behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-warning-light border-l-4 border-warning rounded-r-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-warning-foreground">High Drop-off Alert</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    MSMEs in the Retail Persona dropped at Step 2 (Loan Terms) - 45% higher than average.
                  </p>
                  <p className="text-sm font-medium text-warning mt-2">
                    Suggested: Simplify loan terminology and add explanatory tooltips.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-success-light border-l-4 border-success rounded-r-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-success-foreground">Positive Trend</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Digital payment features show 89% adoption rate - highest across all categories.
                  </p>
                  <p className="text-sm font-medium text-success mt-2">
                    Recommendation: Expand digital features and promote as key selling point.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}