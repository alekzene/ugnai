import { Award, Gift, Target, TrendingUp, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Celebrate achievements with customizable recognition programs that align with your company values and goals."
  },
  {
    icon: Gift,
    title: "Flexible Rewards",
    description: "Choose from gift cards, experiences, charitable donations, or custom rewards that your employees actually want."
  },
  {
    icon: Target,
    title: "Performance Tracking",
    description: "Set clear goals and track progress with comprehensive analytics and real-time performance dashboards."
  },
  {
    icon: TrendingUp,
    title: "Boost Engagement",
    description: "Increase employee satisfaction and retention with meaningful recognition that drives long-term engagement."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Foster teamwork with peer-to-peer recognition and collaborative achievement programs."
  },
  {
    icon: Zap,
    title: "Instant Recognition",
    description: "Provide immediate feedback and recognition with real-time notifications and instant reward distribution."
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Our Rewards Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our comprehensive solution transforms workplace culture and drives exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card border hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="h-14 w-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};