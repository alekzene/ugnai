import React, { useState, useCallback, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoanInputs } from './LoanInputs';
import { LoanResults } from './LoanResults';
import { RiskAssessment } from './RiskAssessment';
import { ComparisonTable } from './ComparisonTable';
import { RecommendationsEngine } from './RecommendationsEngine';
import { ScenarioManager } from './ScenarioManager';
import { calculateLoanDetails, type LoanInputData, type LoanResults as LoanResultsType } from './loanCalculations';

const LoanSimulation = () => {
  const [loanData, setLoanData] = useState<LoanInputData>({
    loanAmount: 500000,
    loanTerm: 24,
    monthlyIncome: 50000,
    businessType: 'retail',
    creditScore: 'good',
    hasCollateral: false
  });

  const [savedScenarios, setSavedScenarios] = useState<Array<{ 
    name: string; 
    data: LoanInputData; 
    results: LoanResultsType 
  }>>([]);

  const loanResults = useMemo(() => 
    calculateLoanDetails(loanData), 
    [loanData]
  );

  const handleInputChange = useCallback((field: keyof LoanInputData, value: any) => {
    setLoanData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSaveScenario = useCallback((name: string) => {
    const newScenario = {
      name,
      data: { ...loanData },
      results: { ...loanResults }
    };
    setSavedScenarios(prev => [...prev, newScenario]);
  }, [loanData, loanResults]);

  const handleLoadScenario = useCallback((scenario: typeof savedScenarios[0]) => {
    setLoanData(scenario.data);
  }, []);

  const handleReset = useCallback(() => {
    setLoanData({
      loanAmount: 500000,
      loanTerm: 24,
      monthlyIncome: 50000,
      businessType: 'retail',
      creditScore: 'good',
      hasCollateral: false
    });
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Interactive Loan Simulator
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover your optimal loan scenario with real-time calculations and AI-powered recommendations
          </p>
        </div>

        {/* Scenario Management */}
        <ScenarioManager
          onSave={handleSaveScenario}
          onLoad={handleLoadScenario}
          onReset={handleReset}
          savedScenarios={savedScenarios}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Loan Configuration
                </CardTitle>
                <CardDescription>
                  Adjust parameters to see real-time calculations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoanInputs
                  data={loanData}
                  onChange={handleInputChange}
                />
              </CardContent>
            </Card>

            <RiskAssessment results={loanResults} />
          </div>

          {/* Middle Column - Results */}
          <div className="lg:col-span-1 space-y-6">
            <LoanResults results={loanResults} />
            <RecommendationsEngine 
              data={loanData} 
              results={loanResults} 
            />
          </div>

          {/* Right Column - Analysis */}
          <div className="lg:col-span-1 space-y-6">
            <ComparisonTable 
              current={loanResults}
              optimal={calculateLoanDetails({
                ...loanData,
                loanTerm: Math.min(36, loanData.loanTerm + 6),
                hasCollateral: true
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSimulation;