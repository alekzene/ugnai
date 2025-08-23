import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  FileText,
  Video,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Book
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const quickHelp = [
    {
      title: "Getting Started",
      description: "Learn the basics of loan simulation",
      icon: Book,
      articles: 5
    },
    {
      title: "Understanding Results",
      description: "How to interpret your simulation outputs",
      icon: FileText,
      articles: 8
    },
    {
      title: "AI Assistant Guide",
      description: "Make the most of your AI financial advisor",
      icon: MessageSquare,
      articles: 6
    },
    {
      title: "Sandbox Trials",
      description: "Step-by-step guide to product testing",
      icon: Video,
      articles: 4
    }
  ];

  const faqs = [
    {
      question: "How accurate are the loan simulations?",
      answer: "Our simulations use industry-standard financial formulas and your actual business data. While they provide reliable estimates, final loan terms may vary based on bank policies, credit checks, and current market conditions. We recommend using simulations as a planning tool and confirming details directly with banks."
    },
    {
      question: "Is my business data secure?",
      answer: "Yes, absolutely. We use bank-grade encryption and security measures to protect all your data. Your information is never shared without explicit consent, and you can control exactly what data is used for insights and product development."
    },
    {
      question: "What's the difference between simulation and sandbox trials?",
      answer: "Simulations calculate loan payments and impacts using mathematical models. Sandbox trials let you experience the entire loan lifecycle virtually - from application to repayment - giving you a feel for how different products work with your business patterns."
    },
    {
      question: "Can I use this if I already have existing loans?",
      answer: "Yes! The platform accounts for existing debt in your DSCR calculations and cash flow projections. This helps you understand if you can safely take on additional financing or if you should focus on paying down current obligations first."
    },
    {
      question: "How does the AI assistant work?",
      answer: "Our AI assistant is trained on financial best practices and your business context. It can explain complex terms in simple language, analyze your specific situation, and provide personalized recommendations based on your revenue, expenses, and goals."
    },
    {
      question: "What if I want to delete my account?",
      answer: "You can request account deletion anytime through the Privacy Center. This will permanently remove all your data from our systems. However, you'll lose access to your simulation history and any earned rewards points."
    }
  ];

  const contactOptions = [
    {
      method: "Live Chat",
      description: "Quick answers to common questions",
      availability: "24/7 automated, M-F 9AM-6PM human support",
      icon: MessageSquare,
      action: "Start Chat"
    },
    {
      method: "Email Support",
      description: "Detailed help with complex issues",
      availability: "Response within 24 hours",
      icon: Mail,
      action: "Send Email"
    },
    {
      method: "Phone Support",
      description: "Direct conversation with our team",
      availability: "M-F 9AM-6PM PST",
      icon: Phone,
      action: "Call Now"
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <HelpCircle className="h-8 w-8 text-primary" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">
          Get help with UgnAI features, understand financial concepts, and connect with our support team.
        </p>
      </div>

      {/* Search */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help articles, tutorials, or common questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Help Categories */}
      <Card className="bg-gradient-card border-0 shadow-md">
        <CardHeader>
          <CardTitle>Popular Help Topics</CardTitle>
          <CardDescription>
            Quick access to the most requested help topics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickHelp.map((topic, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="p-3 rounded-full bg-primary-light w-fit mx-auto mb-3">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{topic.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{topic.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {topic.articles} articles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ */}
        <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Frequently Asked Questions
              {searchQuery && (
                <Badge variant="outline">
                  {filteredFAQs.length} results
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              Common questions about UgnAI and financial planning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {filteredFAQs.length === 0 && searchQuery && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No FAQs found matching "{searchQuery}"</p>
                <Button variant="outline" className="mt-2" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="space-y-6">
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Contact Support
              </CardTitle>
              <CardDescription>
                Still need help? Our team is here for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactOptions.map((option, index) => (
                <div key={index} className="p-3 rounded-lg border bg-card/50">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary-light">
                      <option.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">{option.method}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{option.description}</p>
                      <div className="flex items-center gap-1 mb-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{option.availability}</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        {option.action}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Loan Simulator</span>
                <Badge className="bg-success text-success-foreground text-xs">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">AI Assistant</span>
                <Badge className="bg-success text-success-foreground text-xs">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Sandbox Trials</span>
                <Badge className="bg-success text-success-foreground text-xs">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Data Sync</span>
                <Badge className="bg-success text-success-foreground text-xs">Operational</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-primary-light border border-primary/20">
                <p className="text-sm text-primary font-medium">Pro Tip</p>
                <p className="text-xs text-foreground mt-1">
                  Use the AI assistant to explain any financial term you don't understand.
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-success-light border border-success/20">
                <p className="text-sm text-success font-medium">Best Practice</p>
                <p className="text-xs text-foreground mt-1">
                  Run multiple scenarios with different loan amounts to find the sweet spot.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;