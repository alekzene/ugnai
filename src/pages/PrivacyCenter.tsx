import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  Eye, 
  Lock, 
  Download,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Settings,
  FileText
} from "lucide-react";

const PrivacyCenter = () => {
  const [dataSharing, setDataSharing] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);

  const dataCategories = [
    {
      category: 'Business Information',
      description: 'Revenue, expenses, business type and location',
      usage: 'Used for loan simulations and personalized recommendations',
      shared: true,
      essential: true
    },
    {
      category: 'Financial Metrics',
      description: 'Cash flow, DSCR, loan history and payment patterns',
      usage: 'Powers AI insights and risk assessments',
      shared: true,
      essential: true
    },
    {
      category: 'Platform Usage',
      description: 'Features used, time spent, simulation history',
      usage: 'Improves product recommendations and user experience',
      shared: analytics,
      essential: false
    },
    {
      category: 'Feedback & Ratings',
      description: 'Product feedback, survey responses, satisfaction ratings',
      usage: 'Helps banks improve financial products for MSMEs',
      shared: dataSharing,
      essential: false
    }
  ];

  const privacyActions = [
    {
      title: 'Download Your Data',
      description: 'Export all your personal and business data in a readable format',
      icon: Download,
      action: 'download'
    },
    {
      title: 'Request Data Deletion',
      description: 'Permanently delete your account and all associated data',
      icon: Trash2,
      action: 'delete',
      destructive: true
    },
    {
      title: 'Update Consent',
      description: 'Modify what data you\'re comfortable sharing',
      icon: Settings,
      action: 'consent'
    },
    {
      title: 'Privacy Report',
      description: 'Detailed report of how your data has been used',
      icon: FileText,
      action: 'report'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          Privacy Center
        </h1>
        <p className="text-muted-foreground">
          Manage your data privacy settings and understand how your information is used to improve MSME financial services.
        </p>
      </div>

      {/* Privacy Overview */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Your Privacy Status
          </CardTitle>
          <CardDescription>
            Current privacy settings and data sharing preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-success-light border border-success/20">
              <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
              <h4 className="font-medium text-success">Data Encrypted</h4>
              <p className="text-xs text-muted-foreground">All data stored with bank-grade encryption</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-primary-light border border-primary/20">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-medium text-primary">Consent-Based</h4>
              <p className="text-xs text-muted-foreground">You control what data is shared</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-warning-light border border-warning/20">
              <Lock className="h-8 w-8 text-warning mx-auto mb-2" />
              <h4 className="font-medium text-warning">Anonymous Option</h4>
              <p className="text-xs text-muted-foreground">Participate anonymously in research</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-muted border">
              <Trash2 className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <h4 className="font-medium text-foreground">Right to Delete</h4>
              <p className="text-xs text-muted-foreground">Remove your data anytime</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Controls */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Data Sharing Controls</CardTitle>
          <CardDescription>
            Customize how your data is used to improve financial products for MSMEs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium">Share aggregated insights with banks</Label>
                <p className="text-sm text-muted-foreground">
                  Help banks design better products by sharing anonymized usage patterns and preferences
                </p>
              </div>
              <Switch 
                checked={dataSharing} 
                onCheckedChange={setDataSharing}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium">Platform analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Allow analysis of platform usage to improve features and user experience
                </p>
              </div>
              <Switch 
                checked={analytics} 
                onCheckedChange={setAnalytics}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium">Marketing communications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive personalized offers and updates about relevant financial products
                </p>
              </div>
              <Switch 
                checked={marketing} 
                onCheckedChange={setMarketing}
              />
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg border bg-card/50 opacity-75">
              <div className="space-y-1 flex-1">
                <Label className="text-base font-medium flex items-center gap-2">
                  Third-party sharing
                  <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                </Label>
                <p className="text-sm text-muted-foreground">
                  Share data with approved fintech partners for expanded services
                </p>
              </div>
              <Switch 
                checked={thirdParty} 
                onCheckedChange={setThirdParty}
                disabled
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Categories */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Data We Collect</CardTitle>
          <CardDescription>
            Transparent breakdown of what information we use and why
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dataCategories.map((item, index) => (
              <div key={index} className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-foreground">{item.category}</h4>
                  <div className="flex items-center gap-2">
                    {item.essential && (
                      <Badge variant="outline" className="text-xs">Essential</Badge>
                    )}
                    <Badge className={item.shared ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'}>
                      {item.shared ? 'Shared' : 'Private'}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-primary">Purpose: {item.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy Actions */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Privacy Actions</CardTitle>
          <CardDescription>
            Manage your data and exercise your privacy rights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacyActions.map((action, index) => (
              <Card key={index} className={`border ${action.destructive ? 'border-destructive/20' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      action.destructive 
                        ? 'bg-destructive-light' 
                        : 'bg-primary-light'
                    }`}>
                      <action.icon className={`h-4 w-4 ${
                        action.destructive 
                          ? 'text-destructive' 
                          : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{action.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                      <Button 
                        size="sm" 
                        variant={action.destructive ? "destructive" : "outline"}
                        className="w-full"
                      >
                        {action.destructive ? 'Request Deletion' : 'Take Action'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy Promise */}
      <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Our Privacy Promise
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              We never sell your personal data to third parties
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              All data sharing is done with explicit consent
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              You can withdraw consent and delete data anytime
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Bank-grade security protects all information
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyCenter;