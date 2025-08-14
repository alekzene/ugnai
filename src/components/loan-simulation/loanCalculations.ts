export interface LoanInputData {
  loanAmount: number;
  loanTerm: number;
  monthlyIncome: number;
  businessType: 'retail' | 'services' | 'manufacturing' | 'technology' | 'agriculture' | 'healthcare' | 'construction';
  creditScore: 'excellent' | 'good' | 'fair' | 'poor' | 'bad';
  hasCollateral: boolean;
}

export interface LoanResults {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
  interestRate: number;
  debtToIncomeRatio: number;
  approvalLikelihood: number;
  riskLevel: 'low' | 'moderate' | 'high';
}

// Base interest rates by credit score
const BASE_RATES: Record<LoanInputData['creditScore'], number> = {
  excellent: 8.5,
  good: 12.0,
  fair: 15.5,
  poor: 18.0,
  bad: 20.0
};

// Business type multipliers
const BUSINESS_MULTIPLIERS: Record<LoanInputData['businessType'], number> = {
  technology: 0.8,
  healthcare: 0.85,
  services: 0.9,
  retail: 1.0,
  manufacturing: 1.1,
  construction: 1.2,
  agriculture: 1.3
};

export const calculateLoanDetails = (data: LoanInputData): LoanResults => {
  // Calculate interest rate
  let interestRate = BASE_RATES[data.creditScore];
  interestRate *= BUSINESS_MULTIPLIERS[data.businessType];
  
  // Apply collateral discount
  if (data.hasCollateral) {
    interestRate -= 2;
  }
  
  // Apply minimum rate floor
  interestRate = Math.max(5, interestRate);
  
  // Calculate monthly payment using PMT formula
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment = (data.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, data.loanTerm)) / 
                        (Math.pow(1 + monthlyRate, data.loanTerm) - 1);
  
  // Calculate totals
  const totalAmount = monthlyPayment * data.loanTerm;
  const totalInterest = totalAmount - data.loanAmount;
  
  // Calculate debt-to-income ratio
  const debtToIncomeRatio = (monthlyPayment / data.monthlyIncome) * 100;
  
  // Calculate approval likelihood
  let approvalLikelihood = 95;
  
  if (debtToIncomeRatio > 40) approvalLikelihood -= 30;
  else if (debtToIncomeRatio > 25) approvalLikelihood -= 15;
  
  if (data.creditScore === 'poor') approvalLikelihood -= 20;
  else if (data.creditScore === 'bad') approvalLikelihood -= 40;
  else if (data.creditScore === 'excellent') approvalLikelihood += 5;
  
  if (data.hasCollateral) approvalLikelihood += 10;
  
  approvalLikelihood = Math.max(10, Math.min(95, approvalLikelihood));
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' = 'low';
  if (debtToIncomeRatio > 40) riskLevel = 'high';
  else if (debtToIncomeRatio > 25) riskLevel = 'moderate';
  
  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
    interestRate: Math.round(interestRate * 100) / 100,
    debtToIncomeRatio: Math.round(debtToIncomeRatio * 100) / 100,
    approvalLikelihood: Math.round(approvalLikelihood),
    riskLevel
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatPercent = (percent: number): string => {
  return `${percent.toFixed(1)}%`;
};