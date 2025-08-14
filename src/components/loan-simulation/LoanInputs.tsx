import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Calendar, User, Building, CreditCard, Shield } from 'lucide-react';
import { formatCurrency } from './loanCalculations';
import type { LoanInputData } from './loanCalculations';

interface LoanInputsProps {
  data: LoanInputData;
  onChange: (field: keyof LoanInputData, value: any) => void;
}

const businessTypes = [
  { value: 'retail', label: 'Retail Business' },
  { value: 'services', label: 'Professional Services' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'technology', label: 'Technology' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'construction', label: 'Construction' }
];

const creditScores = [
  { value: 'excellent', label: 'Excellent (750+)', color: 'text-success' },
  { value: 'good', label: 'Good (700-749)', color: 'text-primary' },
  { value: 'fair', label: 'Fair (650-699)', color: 'text-warning' },
  { value: 'poor', label: 'Poor (600-649)', color: 'text-danger' },
  { value: 'bad', label: 'Bad (<600)', color: 'text-danger' }
];

export const LoanInputs: React.FC<LoanInputsProps> = ({ data, onChange }) => {
  const formatTermDisplay = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${months} months`;
    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`;
    return `${years}y ${remainingMonths}m`;
  };

  return (
    <div className="space-y-6">
      {/* Loan Amount */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Banknote className="h-4 w-4 text-primary" />
          <Label className="text-sm font-medium">Loan Amount</Label>
        </div>
        <div className="space-y-2">
          <Slider
            value={[data.loanAmount]}
            onValueChange={([value]) => onChange('loanAmount', value)}
            min={50000}
            max={5000000}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₱50K</span>
            <span className="font-semibold text-primary">
              {formatCurrency(data.loanAmount)}
            </span>
            <span>₱5M</span>
          </div>
        </div>
      </div>

      {/* Loan Term */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <Label className="text-sm font-medium">Loan Term</Label>
        </div>
        <div className="space-y-2">
          <Slider
            value={[data.loanTerm]}
            onValueChange={([value]) => onChange('loanTerm', value)}
            min={6}
            max={60}
            step={6}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>6 months</span>
            <span className="font-semibold text-primary">
              {formatTermDisplay(data.loanTerm)}
            </span>
            <span>5 years</span>
          </div>
        </div>
      </div>

      {/* Monthly Income */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          <Label htmlFor="income" className="text-sm font-medium">Monthly Income</Label>
        </div>
        <Input
          id="income"
          type="number"
          value={data.monthlyIncome}
          onChange={(e) => onChange('monthlyIncome', parseInt(e.target.value) || 0)}
          placeholder="Enter monthly income"
          className="text-right"
        />
        <p className="text-xs text-muted-foreground">
          {formatCurrency(data.monthlyIncome)} per month
        </p>
      </div>

      {/* Business Type */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Building className="h-4 w-4 text-primary" />
          <Label className="text-sm font-medium">Business Type</Label>
        </div>
        <Select value={data.businessType} onValueChange={(value) => onChange('businessType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select business type" />
          </SelectTrigger>
          <SelectContent>
            {businessTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Credit Score */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-primary" />
          <Label className="text-sm font-medium">Credit Score Range</Label>
        </div>
        <Select value={data.creditScore} onValueChange={(value) => onChange('creditScore', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select credit score range" />
          </SelectTrigger>
          <SelectContent>
            {creditScores.map((score) => (
              <SelectItem key={score.value} value={score.value}>
                <span className={score.color}>{score.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Collateral */}
      <Card className="border-dashed">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <div>
                <Label className="text-sm font-medium">Collateral Available</Label>
                <p className="text-xs text-muted-foreground">Reduces interest rate by 2%</p>
              </div>
            </div>
            <Switch
              checked={data.hasCollateral}
              onCheckedChange={(checked) => onChange('hasCollateral', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};