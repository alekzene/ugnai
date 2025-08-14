import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";

export const MetricsOverview = () => {
  const metrics = [
    {
      title: "Overall Interest Rate",
      value: "87.3%",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
      description: "Increase from last simulation cycle"
    },
    {
      title: "Average Simulation Amount",
      value: "₱2.4M",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      description: "Average loan amount simulated"
    },
    {
      title: "Completion Rate",
      value: "73.1%",
      change: "-2.1%",
      trend: "down",
      icon: Users,
      description: "Users completing full simulation"
    },
    {
      title: "Positive Feedback",
      value: "91.7%",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
      description: "Would consider the product"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <div className="flex items-center space-x-1 mt-1">
              <span className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
              {metric.trend === 'up' ? 
                <TrendingUp className="h-3 w-3 text-green-600" /> : 
                <TrendingDown className="h-3 w-3 text-red-600" />
              }
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};