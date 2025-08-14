import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Percent,
  CreditCard,
  Calendar,
  Building2,
  Handshake,
  TrendingUp,
  Search,
  Star,
  Gift
} from "lucide-react";
import { useState } from "react";

const rewardCatalog = [
  {
    id: 1,
    name: "Interest Rate Reduction",
    description: "Reduce your loan interest rate by 0.5% for next 6 months",
    points: 2000,
    icon: Percent,
    category: "Premium",
    savings: "Save ₱5,000-15,000",
    popular: true
  },
  {
    id: 2,
    name: "Processing Fee Waiver",
    description: "Waive processing fees on your next loan application",
    points: 800,
    icon: CreditCard,
    category: "Financial",
    savings: "Save ₱2,000-5,000",
    popular: true
  },
  {
    id: 3,
    name: "Extended Payment Terms",
    description: "Get flexible payment terms on your next loan",
    points: 1500,
    icon: Calendar,
    category: "Financial",
    savings: "Better cash flow",
    popular: false
  },
  {
    id: 4,
    name: "Business Consultation",
    description: "Free 2-hour consultation with business experts",
    points: 1000,
    icon: Building2,
    category: "Growth",
    savings: "Value: ₱8,000",
    popular: true
  },
  {
    id: 5,
    name: "Premium Support Access",
    description: "Priority customer support for 3 months",
    points: 600,
    icon: Handshake,
    category: "Service",
    savings: "Faster resolution",
    popular: false
  },
  {
    id: 6,
    name: "Marketing Credit",
    description: "₱3,000 credit for digital marketing platforms",
    points: 1200,
    icon: TrendingUp,
    category: "Growth",
    savings: "Boost visibility",
    popular: true
  },
  {
    id: 7,
    name: "Additional Loan Limit",
    description: "Increase your loan limit by 20% for next application",
    points: 2500,
    icon: TrendingUp,
    category: "Premium",
    savings: "Access more capital",
    popular: true
  },
  {
    id: 8,
    name: "Fast-Track Approval",
    description: "Get priority processing for your next loan application",
    points: 1000,
    icon: Star,
    category: "Service",
    savings: "Save time",
    popular: false
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "Premium", label: "Premium" },
  { value: "Financial", label: "Financial" },
  { value: "Growth", label: "Growth" },
  { value: "Service", label: "Service" }
];

export const MSMERewards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredRewards = rewardCatalog
    .filter(reward => {
      const matchesSearch = reward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           reward.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || reward.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.popular ? 1 : -1;
      if (sortBy === "points-low") return a.points - b.points;
      if (sortBy === "points-high") return b.points - a.points;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">MSME Rewards Catalog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exclusive rewards designed specifically to help your MSME grow, save money, and improve operations.
            Redeem your points for valuable business benefits.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search rewards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="points-low">Points: Low to High</SelectItem>
                <SelectItem value="points-high">Points: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRewards.map((reward) => (
            <Card key={reward.id} className="group hover:shadow-elevated transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-gradient-primary/10">
                    <reward.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{reward.category}</Badge>
                    {reward.popular && (
                      <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg">{reward.name}</CardTitle>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl font-bold text-primary">
                    {reward.points} pts
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {reward.savings}
                  </div>
                </div>
                <Button 
                  variant="gradient" 
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Redeem Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRewards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No rewards found matching your criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need More Points?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover all the ways you can earn points through financial responsibility, 
            community participation, and business growth activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              View Earning Opportunities
            </Button>
            <Button variant="outline" size="lg">
              Check My Points Balance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};