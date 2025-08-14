import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { type LoanResults } from './loanCalculations';

interface RiskAssessmentProps {
  results: LoanResults;
}

export const RiskAssessment: React.FC<RiskAssessmentProps> = ({ results }) => {
  const getRiskIndicators = () => {
    const indicators = [];
    
    if (results.debtToIncomeRatio <= 25) {
      indicators.push({
        icon: CheckCircle,
        text: 'Low debt-to-income ratio',
        status: 'positive'
      });
    } else if (results.debtToIncomeRatio <= 40) {
      indicators.push({
        icon: AlertTriangle,
        text: 'Moderate debt-to-income ratio',
        status: 'warning'
      });
    } else {
      indicators.push({
        icon: XCircle,
        text: 'High debt-to-income ratio',
        status: 'negative'
      });
    }

    if (results.interestRate <= 10) {
      indicators.push({
        icon: CheckCircle,
        text: 'Favorable interest rate',
        status: 'positive'
      });
    } else if (results.interestRate <= 15) {
      indicators.push({
        icon: AlertTriangle,
        text: 'Standard interest rate',
        status: 'warning'
      });
    } else {
      indicators.push({
        icon: XCircle,
        text: 'High interest rate',
        status: 'negative'
      });
    }

    if (results.approvalLikelihood >= 80) {
      indicators.push({
        icon: CheckCircle,
        text: 'Strong approval chances',
        status: 'positive'
      });
    } else if (results.approvalLikelihood >= 60) {
      indicators.push({
        icon: AlertTriangle,
        text: 'Moderate approval chances',
        status: 'warning'
      });
    } else {
      indicators.push({
        icon: XCircle,
        text: 'Low approval chances',
        status: 'negative'
      });
    }

    return indicators;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'positive': return 'text-success';
      case 'warning': return 'text-warning';
      case 'negative': return 'text-danger';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskBadgeVariant = () => {
    switch (results.riskLevel) {
      case 'low': return 'default';
      case 'moderate': return 'secondary';
      case 'high': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Risk Assessment</span>
          <Badge variant={getRiskBadgeVariant()}>
            {results.riskLevel.toUpperCase()} RISK
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {getRiskIndicators().map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <IconComponent className={`h-4 w-4 ${getStatusColor(indicator.status)}`} />
                <span className="text-sm">{indicator.text}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Risk Summary</h4>
          <p className="text-sm text-muted-foreground">
            {results.riskLevel === 'low' && 
              "Your loan profile shows low risk with favorable terms. You're likely to receive competitive rates."}
            {results.riskLevel === 'moderate' && 
              "Your loan profile shows moderate risk. Consider improving your debt-to-income ratio for better terms."}
            {results.riskLevel === 'high' && 
              "Your loan profile shows high risk. Consider reducing the loan amount or improving your financial position."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};