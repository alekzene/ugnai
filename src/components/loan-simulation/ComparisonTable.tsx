import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp } from 'lucide-react';
import { formatCurrency, formatPercent, type LoanResults } from './loanCalculations';

interface ComparisonTableProps {
  current: LoanResults;
  optimal: LoanResults;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ current, optimal }) => {
  const comparisonItems = [
    {
      label: 'Monthly Payment',
      current: formatCurrency(current.monthlyPayment),
      optimal: formatCurrency(optimal.monthlyPayment),
      difference: optimal.monthlyPayment - current.monthlyPayment
    },
    {
      label: 'Interest Rate',
      current: formatPercent(current.interestRate),
      optimal: formatPercent(optimal.interestRate),
      difference: optimal.interestRate - current.interestRate
    },
    {
      label: 'Total Interest',
      current: formatCurrency(current.totalInterest),
      optimal: formatCurrency(optimal.totalInterest),
      difference: optimal.totalInterest - current.totalInterest
    },
    {
      label: 'Debt-to-Income',
      current: formatPercent(current.debtToIncomeRatio),
      optimal: formatPercent(optimal.debtToIncomeRatio),
      difference: optimal.debtToIncomeRatio - current.debtToIncomeRatio
    },
    {
      label: 'Approval Likelihood',
      current: `${current.approvalLikelihood}%`,
      optimal: `${optimal.approvalLikelihood}%`,
      difference: optimal.approvalLikelihood - current.approvalLikelihood
    }
  ];

  const getDifferenceDisplay = (difference: number, isPercentage?: boolean) => {
    if (Math.abs(difference) < 0.01) return null;
    
    const value = isPercentage ? `${Math.abs(difference).toFixed(1)}%` : formatCurrency(Math.abs(difference));
    const isPositive = difference > 0;
    
    return (
      <div className={`flex items-center gap-1 text-xs ${isPositive ? 'text-success' : 'text-danger'}`}>
        {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {value}
      </div>
    );
  };

  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Scenario Comparison</span>
          <Badge variant="outline">Current vs Optimal</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-xs font-medium text-muted-foreground border-b pb-2">
            <span>Metric</span>
            <span className="text-center">Current</span>
            <span className="text-center">Optimal</span>
          </div>
          
          {comparisonItems.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 items-center py-2">
              <div className="text-sm font-medium">{item.label}</div>
              <div className="text-center text-sm">{item.current}</div>
              <div className="text-center">
                <div className="text-sm">{item.optimal}</div>
                {getDifferenceDisplay(
                  item.difference,
                  item.label.includes('Rate') || item.label.includes('Income') || item.label.includes('Likelihood')
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Optimization Suggestions</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {optimal.monthlyPayment < current.monthlyPayment && (
              <li>• Lower monthly payment by extending term</li>
            )}
            {optimal.interestRate < current.interestRate && (
              <li>• Better interest rate with collateral</li>
            )}
            {optimal.approvalLikelihood > current.approvalLikelihood && (
              <li>• Improved approval chances</li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};