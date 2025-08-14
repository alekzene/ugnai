import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from "recharts";

const trendData = [
  { month: "Jan", simulations: 856, interest: 82, completion: 68 },
  { month: "Feb", simulations: 923, interest: 84, completion: 71 },
  { month: "Mar", simulations: 1045, interest: 86, completion: 69 },
  { month: "Apr", simulations: 1156, interest: 87, completion: 73 },
  { month: "May", simulations: 1247, interest: 87, completion: 73 },
];

const impactData = [
  { scenario: "Current Product", positiveImpact: 72, neutralImpact: 18, negativeImpact: 10 },
  { scenario: "With Quick Approval", positiveImpact: 85, neutralImpact: 12, negativeImpact: 3 },
  { scenario: "With Flexible Terms", positiveImpact: 79, neutralImpact: 16, negativeImpact: 5 },
  { scenario: "With Lower Rates", positiveImpact: 91, neutralImpact: 7, negativeImpact: 2 },
];

export const SimulationResults = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Simulation Trends Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              simulations: {
                label: "Simulations",
                color: "hsl(var(--chart-primary))",
              },
              interest: {
                label: "Interest Rate (%)",
                color: "hsl(var(--chart-secondary))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="simulations" 
                  stroke="hsl(var(--chart-primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-primary))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="interest" 
                  stroke="hsl(var(--chart-secondary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--chart-secondary))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Product Impact Projections</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              positiveImpact: {
                label: "Positive Impact (%)",
                color: "hsl(var(--chart-primary))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={impactData}>
                <XAxis 
                  dataKey="scenario" 
                  tick={{ fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="positiveImpact"
                  stackId="1"
                  stroke="hsl(var(--chart-primary))"
                  fill="hsl(var(--chart-primary))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="neutralImpact"
                  stackId="1"
                  stroke="hsl(var(--chart-secondary))"
                  fill="hsl(var(--chart-secondary))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="negativeImpact"
                  stackId="1"
                  stroke="hsl(var(--chart-accent))"
                  fill="hsl(var(--chart-accent))"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};