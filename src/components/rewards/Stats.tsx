const stats = [
  {
    value: "89%",
    label: "Increase in Employee Engagement",
    description: "Companies see significant improvement in engagement scores"
  },
  {
    value: "67%",
    label: "Reduction in Turnover",
    description: "Lower employee turnover leads to reduced hiring costs"
  },
  {
    value: "42%",
    label: "Boost in Productivity",
    description: "Teams perform better when achievements are recognized"
  },
  {
    value: "95%",
    label: "Employee Satisfaction Rate",
    description: "Employees love being recognized for their contributions"
  }
];

export const Stats = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that have transformed their workplace culture with our platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-card border border-border/50"
            >
              <div className="text-5xl font-bold text-primary mb-4">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};