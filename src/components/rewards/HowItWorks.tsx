import { CheckCircle, Settings, Trophy, Users } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Setup & Configure",
    description: "Customize your rewards program with your company branding, values, and specific recognition criteria.",
    step: "01"
  },
  {
    icon: Users,
    title: "Engage Your Team",
    description: "Invite employees to participate and start recognizing achievements across all departments and levels.",
    step: "02"
  },
  {
    icon: Trophy,
    title: "Recognize & Reward",
    description: "Acknowledge outstanding performance with personalized rewards and public recognition.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Track & Optimize",
    description: "Monitor engagement metrics and refine your program based on data-driven insights.",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple, intuitive platform designed for immediate impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-primary/20 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative mx-auto">
                    <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};