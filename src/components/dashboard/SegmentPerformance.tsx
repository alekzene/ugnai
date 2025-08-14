import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const segmentData = [
  { segment: "Retail", interest: 92, simulations: 425, avgAmount: 850000 },
  { segment: "Food & Beverage", interest: 89, simulations: 356, avgAmount: 1200000 },
  { segment: "Manufacturing", interest: 85, simulations: 298, avgAmount: 3500000 },
  { segment: "Services", interest: 91, simulations: 387, avgAmount: 950000 },
  { segment: "Technology", interest: 88, simulations: 267, avgAmount: 2100000 },
  { segment: "Healthcare", interest: 94, simulations: 189, avgAmount: 1800000 },
];

const pieData = [
  { name: "High Interest", value: 45, fill: "hsl(var(--chart-primary))" },
  { name: "Medium Interest", value: 35, fill: "hsl(var(--chart-secondary))" },
  { name: "Low Interest", value: 20, fill: "hsl(var(--chart-accent))" },
];

export const SegmentPerformance = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Interest Rate by MSME Segment</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              interest: {
                label: "Interest Rate (%)",
                color: "hsl(var(--chart-primary))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={segmentData}>
                <XAxis 
                  dataKey="segment" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="interest" 
                  fill="hsl(var(--chart-primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Interest Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Percentage",
                color: "hsl(var(--chart-primary))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};