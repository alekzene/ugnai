import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";

interface LoginFormProps {
  onSwitchToSignup: () => void;
  onLoginSuccess: () => void;
  onForgotPassword: () => void;
}

export function LoginForm({ onSwitchToSignup, onLoginSuccess, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock login delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    onLoginSuccess();
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-card border-0 shadow-lg">
      <CardHeader className="text-center space-y-2">
        <div className="bg-gradient-primary rounded-lg p-3 w-fit mx-auto text-white">
          <Lock className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
        <CardDescription>Sign in to your UgnAI account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-4 space-y-3">
          <button
            onClick={onForgotPassword}
            className="text-sm text-primary hover:underline w-full text-center"
          >
            Forgot your password?
          </button>
          
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="text-primary hover:underline font-medium"
            >
              Create Account
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}