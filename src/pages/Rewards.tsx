import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Star, 
  Gift, 
  Trophy,
  Target,
  CheckCircle,
  Calendar,
  Coins
} from "lucide-react";

const Rewards = () => {
  const currentPoints = 2350;
  const nextTierPoints = 3000;
  const progressToNext = (currentPoints / nextTierPoints) * 100;

  const availableRewards = [
    {
      id: 'fee-waiver',
      title: 'Loan Processing Fee Waiver',
      points: 1500,
      value: '₱5,000',
      description: 'Waive processing fees on your next loan application',
      category: 'Banking',
      available: true
    },
    {
      id: 'rate-discount',
      title: '0.5% Interest Rate Discount',
      points: 2000,
      value: '₱25,000+',
      description: '6-month discount on loan interest rate',
      category: 'Banking',
      available: true
    },
    {
      id: 'training-credit',
      title: 'Business Training Credit',
      points: 800,
      value: '₱8,000',
      description: 'Free enrollment in BPI business development courses',
      category: 'Education',
      available: true
    },
    {
      id: 'consultation',
      title: 'Financial Advisory Session',
      points: 1200,
      value: '₱12,000',
      description: '2-hour one-on-one session with financial advisor',
      category: 'Advisory',
      available: true
    },
    {
      id: 'premium-support',
      title: 'Priority Customer Support',
      points: 3000,
      value: 'Priceless',
      description: 'Dedicated support line for 12 months',
      category: 'Service',
      available: false
    }
  ];

  const earnedBadges = [
    {
      title: 'First Simulation',
      description: 'Completed your first loan simulation',
      earnedDate: '2024-11-01',
      points: 100
    },
    {
      title: 'Feedback Champion',
      description: 'Provided detailed feedback on 3 products',
      earnedDate: '2024-11-10',
      points: 300
    },
    {
      title: 'Consistent User',
      description: 'Used the platform for 30+ days',
      earnedDate: '2024-11-15',
      points: 500
    }
  ];

  const recentActivity = [
    {
      action: 'Completed sandbox trial',
      points: 200,
      date: '2024-11-20'
    },
    {
      action: 'Loan simulation analysis',
      points: 50,
      date: '2024-11-19'
    },
    {
      action: 'Product feedback submitted',
      points: 150,
      date: '2024-11-18'
    },
    {
      action: 'AI assistant interaction',
      points: 25,
      date: '2024-11-17'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Award className="h-8 w-8 text-primary" />
          Rewards & Recognition
        </h1>
        <p className="text-muted-foreground">
          Earn points by using UgnAI features and redeem them for valuable business benefits.
        </p>
      </div>

      {/* Points Overview */}
      <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="h-6 w-6" />
              Your Points Balance
            </div>
            <Badge className="bg-primary-foreground text-primary text-lg px-3 py-1">
              {currentPoints.toLocaleString()} pts
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Gold Tier</span>
              <span>{nextTierPoints - currentPoints} points to go</span>
            </div>
            <Progress value={progressToNext} className="h-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">Silver</div>
              <div className="text-sm opacity-80">Current Tier</div>
            </div>
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-80">Rewards Unlocked</div>
            </div>
            <div>
              <div className="text-2xl font-bold">₱45,000</div>
              <div className="text-sm opacity-80">Total Value Earned</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Available Rewards */}
        <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              Available Rewards
            </CardTitle>
            <CardDescription>
              Redeem your points for valuable business benefits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableRewards.map((reward) => (
                <Card key={reward.id} className={`border ${!reward.available ? 'opacity-50' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{reward.category}</Badge>
                      <div className="flex items-center gap-1 text-warning">
                        <Coins className="h-3 w-3" />
                        <span className="text-xs font-medium">{reward.points} pts</span>
                      </div>
                    </div>
                    <CardTitle className="text-base">{reward.title}</CardTitle>
                    <CardDescription className="text-sm">{reward.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-success">Value: {reward.value}</p>
                      </div>
                      <Button 
                        size="sm" 
                        disabled={!reward.available || currentPoints < reward.points}
                        className="bg-gradient-primary"
                        onClick={() => {
                          if (currentPoints >= reward.points) {
                            alert(`Redeemed: ${reward.title}!\nPoints deducted: ${reward.points}`);
                          }
                        }}
                      >
                        {currentPoints < reward.points ? 'Need More Points' : 'Redeem'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Badges & Activity */}
        <div className="space-y-6">
          {/* Earned Badges */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {earnedBadges.map((badge, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="p-2 rounded-full bg-warning text-warning-foreground">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-foreground">{badge.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{badge.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{badge.earnedDate}</span>
                      <Badge variant="outline" className="text-xs">+{badge.points} pts</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                  <Badge className="bg-success text-success-foreground text-xs">
                    +{activity.points} pts
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How to Earn Points */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            How to Earn More Points
          </CardTitle>
          <CardDescription>
            Different ways to accumulate points and unlock better rewards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="p-3 rounded-full bg-primary-light w-fit mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Complete Simulations</h4>
                <p className="text-sm text-muted-foreground">Earn 50-100 points per simulation</p>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-3 rounded-full bg-success-light w-fit mx-auto">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Sandbox Trials</h4>
                <p className="text-sm text-muted-foreground">Complete trials for 200-300 points</p>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-3 rounded-full bg-warning-light w-fit mx-auto">
                <Star className="h-6 w-6 text-warning" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Provide Feedback</h4>
                <p className="text-sm text-muted-foreground">Share insights for 100-200 points</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rewards;