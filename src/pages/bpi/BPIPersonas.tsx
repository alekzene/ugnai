import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Store, 
  UtensilsCrossed, 
  Truck, 
  ShoppingBag,
  TrendingUp,
  Eye,
  BarChart3,
  MessageSquare
} from "lucide-react";

const personas = [
  {
    id: 1,
    name: "Retail Store Owner",
    icon: Store,
    description: "Traditional brick-and-mortar retail businesses",
    avgIncome: "₱50K - ₱200K/month",
    capitalRange: "₱100K - ₱2M",
    techAdoption: 65,
    engagement: 78,
    color: "bg-blue-100 text-blue-700",
    lastProduct: "SME Working Capital Loan",
    feedback: "Positive response to digital onboarding process"
  },
  {
    id: 2,
    name: "Food Stall Vendor",
    icon: UtensilsCrossed,
    description: "Street food, market stalls, and small eateries",
    avgIncome: "₱20K - ₱80K/month",
    capitalRange: "₱50K - ₱500K",
    techAdoption: 45,
    engagement: 62,
    color: "bg-orange-100 text-orange-700",
    lastProduct: "Equipment Financing",
    feedback: "Needs simpler loan terms explanation"
  },
  {
    id: 3,
    name: "Logistics Operator",
    icon: Truck,
    description: "Delivery services, cargo, and transportation",
    avgIncome: "₱80K - ₱300K/month",
    capitalRange: "₱200K - ₱5M",
    techAdoption: 82,
    engagement: 85,
    color: "bg-green-100 text-green-700",
    lastProduct: "Vehicle Financing",
    feedback: "High satisfaction with mobile experience"
  },
  {
    id: 4,
    name: "Online Seller",
    icon: ShoppingBag,
    description: "E-commerce, social media sellers",
    avgIncome: "₱30K - ₱150K/month",
    capitalRange: "₱20K - ₱1M",
    techAdoption: 95,
    engagement: 92,
    color: "bg-purple-100 text-purple-700",
    lastProduct: "Digital Payment Solutions",
    feedback: "Excellent adoption of all digital features"
  }
];

export default function BPIPersonas() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">MSME Persona Library</h1>
          <p className="text-muted-foreground">Understand different MSME segments and their behavior patterns</p>
        </div>
        <Button className="bg-bpi-red hover:bg-bpi-red/90">
          Add New Persona
        </Button>
      </div>

      {/* Persona Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((persona) => {
          const IconComponent = persona.icon;
          return (
            <Card key={persona.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-3 rounded-full p-4 w-16 h-16 flex items-center justify-center ${persona.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">{persona.name}</CardTitle>
                <CardDescription className="text-sm">{persona.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Income:</span>
                    <span className="font-medium">{persona.avgIncome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital Range:</span>
                    <span className="font-medium">{persona.capitalRange}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tech Adoption</span>
                    <span>{persona.techAdoption}%</span>
                  </div>
                  <Progress value={persona.techAdoption} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Engagement</span>
                    <span>{persona.engagement}%</span>
                  </div>
                  <Progress value={persona.engagement} className="h-2" />
                </div>
                
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground mb-1">Last Tested:</p>
                  <Badge variant="secondary" className="text-xs">{persona.lastProduct}</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detailed View */}
      <Card>
        <CardHeader>
          <CardTitle>Retail Store Owner - Detailed Analysis</CardTitle>
          <CardDescription>In-depth insights and simulation history</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">Simulation History</TabsTrigger>
              <TabsTrigger value="feedback">Feedback Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Demographic Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Business Age:</span>
                      <span>3-10 years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Employees:</span>
                      <span>2-15 people</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <span>Urban/Suburban</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Primary Need:</span>
                      <span>Working Capital</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Behavioral Patterns</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Decision Time:</span>
                      <span>2-4 weeks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Research Method:</span>
                      <span>Online + Branch</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Key Concern:</span>
                      <span>Interest Rates</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Preferred Channel:</span>
                      <span>Mobile App</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Product Adoption</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Loans</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Savings</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Digital Payment</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <div className="space-y-3">
                {[
                  { date: "Dec 2024", product: "SME Working Capital", result: "78% adoption", status: "success" },
                  { date: "Nov 2024", product: "Business Savings", result: "65% adoption", status: "warning" },
                  { date: "Oct 2024", product: "Equipment Loan", result: "45% adoption", status: "error" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'success' ? 'bg-success' :
                        item.status === 'warning' ? 'bg-warning' : 'bg-destructive'
                      }`}></div>
                      <div>
                        <p className="font-medium">{item.product}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.result}</p>
                      <Button variant="outline" size="sm" className="mt-1">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="feedback" className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-success-light border-l-4 border-success rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-success">Positive Feedback</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        "The loan calculator is very helpful for planning our inventory purchases. 
                        The step-by-step process makes it easy to understand."
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">Working Capital Simulation</Badge>
                        <Badge variant="outline" className="text-xs">Dec 15, 2024</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-warning-light border-l-4 border-warning rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <p className="font-medium text-warning">Areas for Improvement</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        "Interest rate calculation seems confusing. Would like more explanation 
                        about how the rates are determined."
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">Equipment Loan Simulation</Badge>
                        <Badge variant="outline" className="text-xs">Nov 28, 2024</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary-light border-l-4 border-primary rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-primary">Feature Request</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        "Can you add a comparison tool to see different loan options side by side? 
                        This would help us make better decisions."
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">General Feedback</Badge>
                        <Badge variant="outline" className="text-xs">Dec 10, 2024</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}