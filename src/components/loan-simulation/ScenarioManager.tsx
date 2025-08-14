import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Save, Upload, RotateCcw, Trash2 } from 'lucide-react';
import { formatCurrency, type LoanInputData, type LoanResults } from './loanCalculations';

interface ScenarioManagerProps {
  onSave: (name: string) => void;
  onLoad: (scenario: { name: string; data: LoanInputData; results: LoanResults }) => void;
  onReset: () => void;
  savedScenarios: Array<{ name: string; data: LoanInputData; results: LoanResults }>;
}

export const ScenarioManager: React.FC<ScenarioManagerProps> = ({
  onSave,
  onLoad,
  onReset,
  savedScenarios
}) => {
  const [scenarioName, setScenarioName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSave = () => {
    if (scenarioName.trim()) {
      onSave(scenarioName.trim());
      setScenarioName('');
      setIsDialogOpen(false);
    }
  };

  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle>Scenario Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save Current
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Save Scenario</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Enter scenario name"
                  value={scenarioName}
                  onChange={(e) => setScenarioName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} disabled={!scenarioName.trim()}>
                    Save Scenario
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="sm" onClick={onReset}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset to Default
          </Button>
        </div>

        {savedScenarios.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium mb-2">Saved Scenarios</h4>
            <div className="grid gap-2 max-h-40 overflow-y-auto">
              {savedScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{scenario.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {formatCurrency(scenario.data.loanAmount)}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {formatCurrency(scenario.results.monthlyPayment)}/month • 
                      {scenario.results.interestRate.toFixed(1)}% rate • 
                      {scenario.data.loanTerm} months
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onLoad(scenario)}
                    >
                      <Upload className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {savedScenarios.length === 0 && (
          <div className="text-center py-4 text-muted-foreground">
            <p className="text-sm">No saved scenarios yet</p>
            <p className="text-xs">Save your current configuration to compare different options</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};