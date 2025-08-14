import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

export const AIInsightsPanel = () => {
  const insights = [
    {
      type: "opportunity",
      icon: TrendingUp,
      title: "Retail Segment Opportunity",
      description: "Retail MSMEs show 92% interest rate but prefer shorter loan terms (12-18 months). Consider introducing flexible repayment options.",
      confidence: 94,
      impact: "High"
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "Manufacturing Concerns",
      description: "Manufacturing segment has lower interest (85%) due to concerns about interest rates during economic uncertainty. Consider risk mitigation features.",
      confidence: 87,
      impact: "Medium"
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Healthcare Segment Success",
      description: "Healthcare MSMEs highly value quick approval process (94% satisfaction). This feature should be highlighted in marketing.",
      confidence: 96,
      impact: "High"
    }
  ];

  const featurePreferences = [
    { feature: "Quick Approval", segments: ["Healthcare", "Technology", "Services"], score: 9.2 },
    { feature: "Flexible Terms", segments: ["Retail", "F&B"], score: 8.8 },
    { feature: "Lower Interest", segments: ["Manufacturing", "Retail"], score: 9.5 },
    { feature: "Digital Process", segments: ["Technology", "Services"], score: 8.9 },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "opportunity": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "success": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-primary text-primary-foreground";
      case "Medium": return "bg-secondary text-secondary-foreground";
      case "Low": return "bg-muted text-muted-foreground";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-foreground">
            <Brain className="h-5 w-5 text-primary" />
            <span>AI Insights & Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-2">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <insight.icon className={`h-4 w-4 ${getIconColor(insight.type)}`} />
                  <h4 className="font-medium text-foreground">{insight.title}</h4>
                </div>
                <div className="flex space-x-2">
                  <Badge className={getImpactColor(insight.impact)}>{insight.impact}</Badge>
                  <Badge variant="outline">{insight.confidence}% confidence</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Feature Preferences by Segment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {featurePreferences.map((pref, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-foreground">{pref.feature}</h4>
                  <span className="text-sm font-medium text-primary">{pref.score}/10</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(pref.score / 10) * 100}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {pref.segments.map((segment, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {segment}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};