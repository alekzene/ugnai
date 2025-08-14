import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, ThumbsDown, Clock, Star } from "lucide-react";

export const FeedbackAnalysis = () => {
  const feedbackTopics = [
    { topic: "Interest Rates", sentiment: "negative", count: 89, percentage: 32 },
    { topic: "Approval Speed", sentiment: "positive", count: 156, percentage: 56 },
    { topic: "Documentation", sentiment: "neutral", count: 67, percentage: 24 },
    { topic: "Loan Amount", sentiment: "positive", count: 134, percentage: 48 },
    { topic: "Repayment Terms", sentiment: "negative", count: 78, percentage: 28 },
  ];

  const recentFeedback = [
    {
      id: 1,
      segment: "Retail",
      comment: "The quick approval process would really help during peak seasons when we need immediate working capital.",
      sentiment: "positive",
      rating: 4,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      segment: "Manufacturing",
      comment: "Interest rates seem high compared to current market conditions. Would need more competitive rates.",
      sentiment: "negative", 
      rating: 2,
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      segment: "Technology",
      comment: "Digital application process is great, but would like more flexibility in repayment schedules.",
      sentiment: "neutral",
      rating: 3,
      timestamp: "6 hours ago"
    },
    {
      id: 4,
      segment: "Healthcare",
      comment: "Perfect timing for our clinic expansion. The loan calculator helped us plan our finances better.",
      sentiment: "positive",
      rating: 5,
      timestamp: "1 day ago"
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "bg-green-100 text-green-800 border-green-200";
      case "negative": return "bg-red-100 text-red-800 border-red-200";
      case "neutral": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return <ThumbsUp className="h-3 w-3" />;
      case "negative": return <ThumbsDown className="h-3 w-3" />;
      default: return <MessageSquare className="h-3 w-3" />;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'text-secondary fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Feedback Topics Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedbackTopics.map((topic, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-foreground">{topic.topic}</span>
                    <Badge className={`${getSentimentColor(topic.sentiment)} text-xs border`}>
                      {getSentimentIcon(topic.sentiment)}
                      <span className="ml-1 capitalize">{topic.sentiment}</span>
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{topic.count} mentions</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">
                  {topic.percentage}% of total feedback
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Feedback Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="border-l-4 border-primary pl-4 py-3 bg-accent/30 rounded-r-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{feedback.segment}</Badge>
                    <Badge className={`${getSentimentColor(feedback.sentiment)} text-xs border`}>
                      {getSentimentIcon(feedback.sentiment)}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="flex">{renderStars(feedback.rating)}</div>
                    <Clock className="h-3 w-3" />
                    <span>{feedback.timestamp}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  "{feedback.comment}"
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};