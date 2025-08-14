import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircularGauge } from './CircularGauge';
import { Calculator, TrendingUp, DollarSign, Percent, CheckCircle } from 'lucide-react';
import { formatCurrency, formatPercent, type LoanResults as LoanResultsType } from './loanCalculations';

interface LoanResultsProps {
  results: LoanResultsType;
}

export const LoanResults: React.FC<LoanResultsProps> = ({ results }) => {
  const getRiskColor = (level: string): 'success' | 'warning' | 'danger' | 'primary' => {
    switch (level) {
      case 'low': return 'success';
      case 'moderate': return 'warning';
      case 'high': return 'danger';
      default: return 'primary';
    }
  };

  const getApprovalColor = (likelihood: number) => {
    if (likelihood >= 80) return 'success';
    if (likelihood >= 60) return 'warning';
    return 'danger';
  };

  return (
    <div className="space-y-6">
      {/* Monthly Payment - Main Result */}
      <Card className="bg-gradient-primary text-white shadow-gauge">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Calculator className="h-5 w-5" />
            Monthly Payment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold mb-2">
            {formatCurrency(results.monthlyPayment)}
          </div>
          <p className="text-primary-foreground/80 text-sm">
            Based on {formatPercent(results.interestRate)} interest rate
          </p>
        </CardContent>
      </Card>

      {/* Debt-to-Income Gauge */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Debt-to-Income Ratio
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <CircularGauge
            value={results.debtToIncomeRatio}
            max={50}
            size={120}
            strokeWidth={8}
            color={getRiskColor(results.riskLevel)}
          />
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold">
              {formatPercent(results.debtToIncomeRatio)}
            </div>
            <Badge variant={getRiskColor(results.riskLevel) as any} className="mt-1">
              {results.riskLevel.toUpperCase()} RISK
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Financial Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-card shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Total Interest</span>
            </div>
            <div className="text-xl font-bold text-warning">
              {formatCurrency(results.totalInterest)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Interest Rate</span>
            </div>
            <div className="text-xl font-bold text-primary">
              {formatPercent(results.interestRate)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approval Likelihood */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Approval Likelihood
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold">
              {results.approvalLikelihood}%
            </span>
            <Badge variant={getApprovalColor(results.approvalLikelihood) as any}>
              {results.approvalLikelihood >= 80 ? 'EXCELLENT' : 
               results.approvalLikelihood >= 60 ? 'GOOD' : 'NEEDS IMPROVEMENT'}
            </Badge>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                results.approvalLikelihood >= 80 ? 'bg-success' :
                results.approvalLikelihood >= 60 ? 'bg-warning' : 'bg-danger'
              }`}
              style={{ width: `${results.approvalLikelihood}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Total Amount */}
      <Card className="bg-gradient-card shadow-card border-l-4 border-l-primary">
        <CardContent className="pt-4">
          <div className="text-sm text-muted-foreground mb-1">Total Amount to Pay</div>
          <div className="text-2xl font-bold text-foreground">
            {formatCurrency(results.totalAmount)}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Principal: {formatCurrency(results.totalAmount - results.totalInterest)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};