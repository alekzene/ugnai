import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';
import { type LoanInputData, type LoanResults } from './loanCalculations';

interface RecommendationsEngineProps {
  data: LoanInputData;
  results: LoanResults;
}

export const RecommendationsEngine: React.FC<RecommendationsEngineProps> = ({ data, results }) => {
  const generateRecommendations = () => {
    const recommendations = [];

    // Collateral recommendation
    if (!data.hasCollateral && results.interestRate > 10) {
      recommendations.push({
        icon: Shield,
        type: 'improvement',
        title: 'Consider Providing Collateral',
        description: 'Adding collateral could reduce your interest rate by 2%, saving you money over the loan term.',
        priority: 'high'
      });
    }

    // Loan term recommendation
    if (results.debtToIncomeRatio > 35) {
      recommendations.push({
        icon: Clock,
        type: 'adjustment',
        title: 'Extend Loan Term',
        description: 'Extending your loan term could reduce monthly payments and improve your debt-to-income ratio.',
        priority: 'medium'
      });
    }

    // Income-based recommendation
    if (data.monthlyIncome > 100000 && results.debtToIncomeRatio < 25) {
      recommendations.push({
        icon: TrendingUp,
        type: 'opportunity',
        title: 'Consider Larger Loan Amount',
        description: 'Your income qualifies you for a larger loan amount while maintaining a healthy debt ratio.',
        priority: 'low'
      });
    }

    // Credit score improvement
    if (data.creditScore === 'poor' || data.creditScore === 'bad') {
      recommendations.push({
        icon: TrendingUp,
        type: 'improvement',
        title: 'Improve Credit Score',
        description: 'Improving your credit score could significantly reduce your interest rate and increase approval chances.',
        priority: 'high'
      });
    }

    // Business type optimization
    if (data.businessType === 'agriculture' || data.businessType === 'construction') {
      recommendations.push({
        icon: DollarSign,
        type: 'alternative',
        title: 'Explore Specialized Programs',
        description: 'Look for industry-specific loan programs that may offer better rates for your business type.',
        priority: 'medium'
      });
    }

    // High approval likelihood
    if (results.approvalLikelihood > 85 && results.debtToIncomeRatio < 20) {
      recommendations.push({
        icon: TrendingUp,
        type: 'opportunity',
        title: 'Premium Rate Qualification',
        description: 'Your strong profile may qualify you for premium rates. Consider negotiating better terms.',
        priority: 'medium'
      });
    }

    return recommendations;
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return <Badge variant="destructive">High Priority</Badge>;
      case 'medium': return <Badge variant="secondary">Medium Priority</Badge>;
      case 'low': return <Badge variant="outline">Low Priority</Badge>;
      default: return <Badge variant="outline">Info</Badge>;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'improvement': return 'text-warning';
      case 'opportunity': return 'text-success';
      case 'adjustment': return 'text-primary';
      case 'alternative': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  const recommendations = generateRecommendations();

  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recommendations.length === 0 ? (
          <div className="text-center py-6">
            <div className="text-success text-lg font-semibold mb-2">Excellent Profile!</div>
            <p className="text-sm text-muted-foreground">
              Your loan configuration is already optimized. You're getting competitive rates and terms.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((rec, index) => {
              const IconComponent = rec.icon;
              return (
                <div key={index} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`h-4 w-4 ${getTypeColor(rec.type)}`} />
                      <span className="font-medium text-sm">{rec.title}</span>
                    </div>
                    {getPriorityBadge(rec.priority)}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};