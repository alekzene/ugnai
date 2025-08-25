import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Play, 
  CheckCircle, 
  Clock,
  Star,
  MessageSquare,
  BarChart3,
  Shield
} from "lucide-react";

const SandboxTrials = () => {
  const [selectedTrial, setSelectedTrial] = useState<string | null>(null);

  const availableTrials = [
    {
      id: 'flexi-loan',
      title: 'BPI FlexiLoan',
      description: 'Flexible repayment terms with seasonal adjustments',
      features: ['Variable payments', 'Grace periods', 'Early payment discounts'],
      amount: '₱500,000 - ₱2M',
      rate: '10.5% - 14%',
      term: '12-60 months',
      status: 'available',
      popularity: 85
    },
    {
      id: 'equipment-finance',
      title: 'Equipment Financing Plus',
      description: 'Specialized financing for auto repair equipment',
      features: ['Asset-backed', 'Lower rates', 'Tax benefits'],
      amount: '₱300,000 - ₱1.5M',
      rate: '9.5% - 12%',
      term: '24-84 months',
      status: 'available',
      popularity: 92
    },
    {
      id: 'working-capital',
      title: 'Smart Working Capital',
      description: 'AI-powered working capital with dynamic limits',
      features: ['Auto-adjusting limits', 'Real-time approval', 'No collateral'],
      amount: '₱100,000 - ₱1M',
      rate: '12% - 16%',
      term: '6-36 months',
      status: 'beta',
      popularity: 78
    }
  ];

  const completedTrials = [
    {
      id: 'completed-1',
      title: 'BPI FlexiLoan',
      completedDate: '2024-11-15',
      rating: 4,
      feedback: 'Great flexibility for seasonal business patterns',
      result: 'Interested'
    },
    {
      id: 'completed-2',
      title: 'Traditional Term Loan',
      completedDate: '2024-11-10',
      rating: 3,
      feedback: 'Repayment feels too short, I need longer terms',
      result: 'Not suitable'
    }
  ];

  const startTrial = (trialId: string) => {
    setSelectedTrial(trialId);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-primary" />
          Sandbox Trials
        </h1>
        <p className="text-muted-foreground">
          Test financial products virtually before applying. Experience how different loans work with your business.
        </p>
      </div>

      {/* Trial Progress */}
      {selectedTrial && (
        <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Active Trial: {availableTrials.find(t => t.id === selectedTrial)?.title}
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Simulating 6 months of loan experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={45} className="h-3" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">Month 3</div>
                  <div className="text-sm opacity-80">of 6 month trial</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₱52,500</div>
                  <div className="text-sm opacity-80">Payments made</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">₱18,200</div>
                  <div className="text-sm opacity-80">Interest saved vs traditional</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="sm">
                  Pause Trial
                </Button>
                <Button variant="secondary" size="sm" >
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Available Trials */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Available Product Trials</CardTitle>
          <CardDescription>
            Explore new financial products designed for MSMEs like yours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTrials.map((trial) => (
              <Card key={trial.id} className="border bg-card/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={trial.status === 'beta' ? 'bg-warning text-warning-foreground' : 'bg-success text-success-foreground'}>
                      {trial.status === 'beta' ? 'Beta' : 'Available'}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span className="text-xs text-muted-foreground">{trial.popularity}%</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{trial.title}</CardTitle>
                  <CardDescription className="text-sm">{trial.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">{trial.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">{trial.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Term:</span>
                      <span className="font-medium">{trial.term}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Key Features:</p>
                    <ul className="text-xs space-y-1">
                      {trial.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary"
                    onClick={() => startTrial(trial.id)}
                    disabled={selectedTrial === trial.id}
                  >
                    {selectedTrial === trial.id ? (
                      <>
                        <Clock className="h-4 w-4 mr-2" />
                        Active Trial
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start Trial
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Completed Trials */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Completed Trials
          </CardTitle>
          <CardDescription>Your trial history and feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedTrials.map((trial) => (
              <Card key={trial.id} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{trial.title}</h4>
                      <p className="text-sm text-muted-foreground">Completed {trial.completedDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < trial.rating ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <Badge variant={trial.result === 'Interested' ? 'default' : 'outline'}>
                        {trial.result}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-sm text-muted-foreground flex-1">{trial.feedback}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SandboxTrials;