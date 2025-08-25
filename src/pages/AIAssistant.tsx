import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import OpenAI from "openai";
import { 
  Brain, 
  Send, 
  MessageSquare, 
  Lightbulb,
  HelpCircle,
  Calculator,
  TrendingUp
} from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}



const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello User! I'm your AI financial assistant. I can help explain loan terms, analyze your business finances, and provide personalized recommendations. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Can I afford a ₱800,000 loan?",
    "What's my debt service coverage ratio?",
    "Explain APR in simple terms",
    "When should I consider refinancing?",
    "How much working capital do I need?"
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    // Simulate AI response
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content: generateAIResponse(input),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInput("");
  };

  const client = new OpenAI({
    apiKey: "sk-xxxxxxxxxxxxxxxx", 
    dangerouslyAllowBrowser: true, 
  });

  const generateAIResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('800000') || lowerQ.includes('800,000')) {
      return "Based on your current financials, an ₱800,000 loan looks manageable! Here's why:\n\n• Your monthly revenue: ₱185,000\n• Current net income: ₱60,000\n• Estimated monthly payment: ₱17,796\n• Your DSCR would be 1.68 (Excellent)\n\nThis means you'd have ₱42,204 in net cash flow after the loan payment. The payback period for your principal would be approximately 19 months. Would you like me to run a detailed simulation?";
    }
    
    if (lowerQ.includes('dscr') || lowerQ.includes('debt service')) {
      return "Your Debt Service Coverage Ratio (DSCR) is currently 1.68, which is excellent!\n\n**What DSCR means:**\n• It's your ability to pay loan payments from your cash flow\n• Formula: Net Operating Income ÷ Total Debt Service\n• 1.25+ is generally considered good\n• 1.5+ is excellent (that's you!)\n\n**Your numbers:**\n• Monthly net income: ₱60,000\n• Current loan payment: ₱35,714\n• DSCR: 1.68\n\nThis shows you have a healthy buffer to take on additional financing if needed.";
    }
    
    if (lowerQ.includes('apr')) {
      return "APR (Annual Percentage Rate) is the true yearly cost of your loan, including interest and fees.\n\n**Simple explanation:**\n• Interest rate = just the borrowing cost\n• APR = interest + all fees (origination, processing, etc.)\n• APR is always higher than the interest rate\n\n**Example:**\n• Loan: ₱500,000\n• Interest rate: 12%\n• Fees: ₱25,000\n• APR: ~13.2%\n\n**Why it matters:** APR lets you compare different lenders fairly, even if they have different fee structures.";
    }
    
    return "That's a great question! Based on your business profile, I'd recommend focusing on cash flow management and timing your expansion carefully. Your current financial health is strong with consistent revenue growth. Would you like me to dive deeper into any specific aspect of your finances?";
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          AI Assistant
        </h1>
        <p className="text-muted-foreground">
          Get personalized financial advice and explanations in plain language.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <Card className="lg:col-span-3 bg-gradient-card border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Chat with AI
            </CardTitle>
            <CardDescription>
              Ask questions about loans, your business finances, or get explanations of financial terms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Messages */}
            <ScrollArea className="h-96 w-full">
              <div className="space-y-4 pr-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your finances..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-gradient-primary">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Info */}
        <div className="space-y-6">
          {/* Quick Questions */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-warning" />
                Quick Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left h-auto whitespace-normal justify-start"
                  onClick={() => handleQuickQuestion(question)}
                >
                  <HelpCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* AI Capabilities */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <Calculator className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Loan Analysis</p>
                  <p className="text-xs text-muted-foreground">Calculate payments, analyze affordability</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Financial Planning</p>
                  <p className="text-xs text-muted-foreground">Cash flow projections, growth planning</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <HelpCircle className="h-4 w-4 text-warning mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Term Explanations</p>
                  <p className="text-xs text-muted-foreground">Plain-language definitions of financial terms</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Context */}
          <Card className="bg-gradient-card border-0 shadow-md">
            <CardHeader>
              <CardTitle>Your Business Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Business:</span>
                <Badge variant="outline">Auto Repair</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Revenue:</span>
                <span className="text-sm font-medium">₱185,000/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">DSCR:</span>
                <Badge className="bg-success text-success-foreground">1.68</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Cash Runway:</span>
                <span className="text-sm font-medium">8.2 months</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;