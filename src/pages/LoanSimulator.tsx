import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Download,
  RefreshCw,
  PieChart
} from "lucide-react";

const LoanSimulator = () => {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [loanTerm, setLoanTerm] = useState([60]);
  const [interestRate, setInterestRate] = useState([12]);
  const [monthlyRevenue, setMonthlyRevenue] = useState("185000");
  const [monthlyExpenses, setMonthlyExpenses] = useState("125000");
  const [expectedIncrease, setExpectedIncrease] = useState("60000");

  const resultsRef = useRef<HTMLDivElement>(null);

  const exportPDF = async () => {
    if (!resultsRef.current) return;

    const canvas = await html2canvas(resultsRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("loan-simulation.pdf");
  };


  // Calculate loan payment using PMT formula
  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numPayments = loanTerm[0];
    
    if (monthlyRate === 0) return principal / numPayments;
    
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
           (Math.pow(1 + monthlyRate, numPayments) - 1);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalRepayment = monthlyPayment * loanTerm[0];
  const totalInterest = totalRepayment - loanAmount[0];
  const currentNetIncome = parseInt(monthlyRevenue) - parseInt(monthlyExpenses);
  const projectedNetIncome = currentNetIncome + parseInt(expectedIncrease || "0");
  const netCashAfterLoan = projectedNetIncome - monthlyPayment;
  const dscr = projectedNetIncome / monthlyPayment;

  const getRiskLevel = () => {
    if (dscr >= 1.5) return { level: "Low", color: "success", description: "Healthy cash flow buffer" };
    if (dscr >= 1.2) return { level: "Medium", color: "warning", description: "Moderate risk, monitor closely" };
    return { level: "High", color: "destructive", description: "Tight cash flow, consider reducing loan amount" };
  };

  const risk = getRiskLevel();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Calculator className="h-8 w-8 text-primary" />
          Loan Simulator
        </h1>
        <p className="text-muted-foreground">
          Try different loan amounts and see if you can afford them.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Controls */}
        <Card className="lg:col-span-1 bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
            <CardDescription>Move the sliders to try different amounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Loan Amount */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Loan Amount</Label>
              <div className="space-y-2">
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  max={2000000}
                  min={100000}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₱100K</span>
                  <span className="font-medium text-primary">₱{loanAmount[0].toLocaleString()}</span>
                  <span>₱2M</span>
                </div>
              </div>
            </div>

            {/* Loan Term */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Loan Term (months)</Label>
              <div className="space-y-2">
                <Slider
                  value={loanTerm}
                  onValueChange={setLoanTerm}
                  max={120}
                  min={12}
                  step={6}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 year</span>
                  <span className="font-medium text-primary">{loanTerm[0]} months</span>
                  <span>10 years</span>
                </div>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Interest Rate (% per annum)</Label>
              <div className="space-y-2">
                <Slider
                  value={interestRate}
                  onValueChange={setInterestRate}
                  max={25}
                  min={8}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>8%</span>
                  <span className="font-medium text-primary">{interestRate[0]}%</span>
                  <span>25%</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Business Inputs */}
              <div className="space-y-4">
              <h4 className="font-medium text-foreground">Your Business Now</h4>
              
              <div className="space-y-2">
                <Label htmlFor="revenue">Monthly Revenue</Label>
                <Input
                  id="revenue"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  placeholder="₱185,000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expenses">Monthly Expenses</Label>
                <Input
                  id="expenses"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(e.target.value)}
                  placeholder="₱125,000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="increase">Extra Income with Loan</Label>
                <Input
                  id="increase"
                  value={expectedIncrease}
                  onChange={(e) => setExpectedIncrease(e.target.value)}
                  placeholder="₱60,000"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card ref={resultsRef} className="lg:col-span-2 bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Simulation Results</span>
              <Badge className={`bg-${risk.color} text-${risk.color}-foreground`}>
                {risk.level} Risk
              </Badge>
            </CardTitle>
            <CardDescription>{risk.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary-light border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <PieChart className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Monthly Payment</span>
                </div>
                <div className="text-2xl font-bold text-foreground">
                  ₱{monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted border">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Total Interest</span>
                </div>
                <div className="text-2xl font-bold text-foreground">
                  ₱{totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-success-light border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium text-success">Net Cash Flow</span>
                </div>
                <div className="text-2xl font-bold text-foreground">
                  ₱{netCashAfterLoan.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Financial Impact Analysis</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current monthly net income:</span>
                    <span className="font-medium">₱{currentNetIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projected monthly net income:</span>
                    <span className="font-medium text-success">₱{projectedNetIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly loan payment:</span>
                    <span className="font-medium text-destructive">-₱{monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Net cash after loan:</span>
                    <span className={`font-bold ${netCashAfterLoan > 0 ? 'text-success' : 'text-destructive'}`}>
                      ₱{netCashAfterLoan.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total loan amount:</span>
                    <span className="font-medium">₱{loanAmount[0].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total repayment:</span>
                    <span className="font-medium">₱{totalRepayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DSCR (Debt Service Coverage):</span>
                    <span className={`font-medium ${dscr >= 1.5 ? 'text-success' : dscr >= 1.2 ? 'text-warning' : 'text-destructive'}`}>
                      {dscr.toFixed(2)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Payback period:</span>
                    <span className="font-bold text-primary">
                      {Math.ceil(loanAmount[0] / (projectedNetIncome - currentNetIncome))} months
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insight */}
            <div className="p-4 rounded-lg bg-primary-light border border-primary/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-primary">AI Insight</p>
                  <p className="text-sm text-foreground mt-1">
                    {dscr >= 1.5 ? 
                      `With a DSCR of ${dscr.toFixed(2)}, this loan looks very manageable. You'll have ₱${netCashAfterLoan.toLocaleString()} monthly buffer after payments.` :
                      dscr >= 1.2 ?
                      `Your DSCR of ${dscr.toFixed(2)} is acceptable but tight. Consider a longer term or smaller amount for better cash flow.` :
                      `This loan may strain your cash flow with a DSCR of ${dscr.toFixed(2)}. Consider reducing the amount or extending the term.`
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4" data-html2canvas-ignore="true">
              <Button variant="outline" className="flex-1 bg-gradient-primary" onClick={exportPDF}>
                <Download className="h-4 w-4 mr-2" />
                Save Scenario as PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoanSimulator;