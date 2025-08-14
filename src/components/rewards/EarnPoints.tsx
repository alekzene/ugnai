import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  DollarSign, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Percent,
  Gift,
  Building2,
  Handshake,
  Award,
  Calendar,
  CreditCard,
  FileText,
  Target,
  Zap
} from "lucide-react";

const earningSections = [
  {
    title: "Financial Performance",
    icon: DollarSign,
    color: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
    activities: [
      {
        name: "On-Time Loan Payments",
        description: "Pay your loan installments before the due date",
        points: "50-100",
        icon: CheckCircle,
        frequency: "Per payment"
      },
      {
        name: "Early Payment Bonus",
        description: "Pay 7+ days before due date for bonus points",
        points: "25",
        icon: Zap,
        frequency: "Per early payment"
      },
      {
        name: "Complete Loan Term",
        description: "Successfully complete your loan without defaults",
        points: "500-2000",
        icon: Award,
        frequency: "Per loan completion"
      },
      {
        name: "Maintain Good Standing",
        description: "Keep your account in good standing for 6 months",
        points: "200",
        icon: Star,
        frequency: "Every 6 months"
      }
    ]
  },
  {
    title: "Product Feedback & Testing",
    icon: MessageSquare,
    color: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
    activities: [
      {
        name: "Product Feedback Survey",
        description: "Complete detailed feedback surveys on our services",
        points: "30-75",
        icon: MessageSquare,
        frequency: "Per survey"
      },
      {
        name: "Beta Product Testing",
        description: "Test new financial products and provide insights",
        points: "100-300",
        icon: FileText,
        frequency: "Per testing period"
      },
      {
        name: "App Feature Review",
        description: "Review and rate new app features",
        points: "20",
        icon: Star,
        frequency: "Per review"
      },
      {
        name: "Service Improvement Ideas",
        description: "Submit ideas that improve our services",
        points: "50-500",
        icon: Target,
        frequency: "Per accepted idea"
      }
    ]
  },
  {
    title: "Learning & Development",
    icon: GraduationCap,
    color: "bg-gradient-to-r from-purple-500/20 to-violet-500/20",
    activities: [
      {
        name: "Financial Literacy Training",
        description: "Complete our financial literacy courses",
        points: "100-200",
        icon: GraduationCap,
        frequency: "Per course"
      },
      {
        name: "Business Skills Workshop",
        description: "Attend workshops on business management",
        points: "150",
        icon: Building2,
        frequency: "Per workshop"
      },
      {
        name: "Webinar Participation",
        description: "Join live webinars and Q&A sessions",
        points: "25",
        icon: Calendar,
        frequency: "Per webinar"
      },
      {
        name: "Certification Achievement",
        description: "Earn certificates in business or finance",
        points: "300-800",
        icon: Award,
        frequency: "Per certification"
      }
    ]
  },
  {
    title: "Community & Referrals",
    icon: Users,
    color: "bg-gradient-to-r from-orange-500/20 to-red-500/20",
    activities: [
      {
        name: "Successful Referrals",
        description: "Refer other MSMEs who get approved for loans",
        points: "200-500",
        icon: Users,
        frequency: "Per successful referral"
      },
      {
        name: "Community Forum Participation",
        description: "Help other businesses in our community forum",
        points: "10-50",
        icon: MessageSquare,
        frequency: "Per helpful post"
      },
      {
        name: "Success Story Sharing",
        description: "Share your business success story with our community",
        points: "100",
        icon: TrendingUp,
        frequency: "Per story"
      },
      {
        name: "Mentor Program",
        description: "Mentor new businesses in our network",
        points: "300",
        icon: Handshake,
        frequency: "Per month"
      }
    ]
  }
];


export const EarnPoints = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Earn Points</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the ways your MSME can earn points through financial responsibility, 
            community participation, and business growth activities.
          </p>
        </div>

        {/* Point Earning Activities */}
        <div className="space-y-8 mb-16">
          {earningSections.map((section, index) => (
            <div key={index} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${section.color}`}>
                  <section.icon className="h-6 w-6 text-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                {section.activities.map((activity, activityIndex) => (
                  <Card key={activityIndex} className="hover:shadow-elevated transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <activity.icon className="h-5 w-5 text-primary" />
                          <div>
                            <CardTitle className="text-lg">{activity.name}</CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {activity.frequency}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {activity.points}
                          </div>
                          <div className="text-xs text-muted-foreground">points</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {activity.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Earning Points?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of MSMEs who are already earning points and growing their businesses 
            with our rewards program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              View MSME Rewards
            </Button>
            <Button variant="outline" size="lg">
              View My Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};