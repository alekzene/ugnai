import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  RefreshCw
} from "lucide-react";

const ProgressTracker = () => {
  const metrics = [
    {
      title: "Revenue Stability",
      current: 85,
      target: 90,
      status: "good",
      description: "Consistent monthly revenue for 6+ months",
      icon: TrendingUp
    },
    {
      title: "Cash Flow Health",
      current: 92,
      target: 85,
      status: "excellent",
      description: "Strong positive cash flow trend",
      icon: DollarSign
    },
    {
      title: "Debt Service Coverage",
      current: 78,
      target: 75,
      status: "good",
      description: "Ability to service additional debt",
      icon: Target
    },
    {
      title: "Emergency Buffer",
      current: 65,
      target: 80,
      status: "warning",
      description: "6+ months operating expenses saved",
      icon: AlertCircle
    }
  ];

  const milestones = [
    {
      title: "6 Months Consistent Revenue",
      completed: true,
      date: "Completed Oct 2024",
      description: "Maintained steady revenue growth"
    },
    {
      title: "DSCR Above 1.5",
      completed: true,
      date: "Completed Nov 2024",
      description: "Achieved healthy debt service coverage"
    },
    {
      title: "Expansion Loan Ready",
      completed: false,
      date: "In Progress",
      description: "85% complete - working on emergency buffer"
    },
    {
      title: "Second Location Planning",
      completed: false,
      date: "Q2 2025 Target",
      description: "Financial metrics ready for major expansion"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'success';
      case 'good': return 'primary';
      case 'warning': return 'warning';
      default: return 'muted';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return CheckCircle;
      case 'good': return CheckCircle;
      case 'warning': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Target className="h-8 w-8 text-primary" />
          Progress Tracker
        </h1>
        <p className="text-muted-foreground">
          Monitor your business financial health and loan readiness metrics.
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Loan Readiness Score</span>
            <Badge className="bg-success text-success-foreground text-lg px-3 py-1">
              80%
            </Badge>
          </CardTitle>
          <CardDescription>
            Your overall readiness for expansion financing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={80} className="h-3 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-success">3</div>
              <div className="text-sm text-muted-foreground">Metrics Above Target</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">Needs Improvement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Target Achievement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">Q1 2025</div>
              <div className="text-sm text-muted-foreground">Ready For Expansion</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => {
          const StatusIcon = getStatusIcon(metric.status);
          const statusColor = getStatusColor(metric.status);
          
          return (
            <Card key={index} className="bg-gradient-card border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2">
                    <metric.icon className="h-4 w-4 text-primary" />
                    {metric.title}
                  </div>
                  <Badge className={`bg-${statusColor} text-${statusColor}-foreground`}>
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {metric.current}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current</span>
                    <span className="font-medium">{metric.current}%</span>
                  </div>
                  <Progress value={metric.current} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Target: {metric.target}%</span>
                    <span>{metric.current >= metric.target ? '✓ Met' : `${metric.target - metric.current}% to go`}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Milestones */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Expansion Milestones
          </CardTitle>
          <CardDescription>
            Track your progress toward major business goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-card/50">
                <div className={`p-2 rounded-full ${milestone.completed ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {milestone.completed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-foreground">{milestone.title}</h4>
                    <Badge variant={milestone.completed ? "default" : "outline"}>
                      {milestone.date}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>
            Steps to improve your loan readiness score
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-warning-light border border-warning/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="font-medium text-warning">Priority</span>
              </div>
              <h4 className="font-medium text-foreground mb-1">Build Emergency Buffer</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Increase savings to cover 6+ months of operating expenses. Currently at 65%.
              </p>
              <Button size="sm" variant="outline">
                View Savings Plan
              </Button>
            </div>
            
            <div className="p-4 rounded-lg bg-primary-light border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-medium text-primary">Opportunity</span>
              </div>
              <h4 className="font-medium text-foreground mb-1">Revenue Optimization</h4>
              <p className="text-sm text-muted-foreground mb-3">
                You're 5% away from excellent revenue stability. Focus on consistent growth.
              </p>
              <Button size="sm" variant="outline">
                Growth Strategies
              </Button>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-border">
            <Button className="bg-gradient-primary">
              <RefreshCw className="h-4 w-4 mr-2" />
              Update Metrics
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;