import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ArrowLeft, RotateCcw } from "lucide-react";

interface OTPVerificationProps {
  email: string;
  onVerifySuccess: () => void;
  onBack: () => void;
}

export function OTPVerification({ email, onVerifySuccess, onBack }: OTPVerificationProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    
    if (otpCode.length !== 6) {
      alert("Please enter complete OTP code");
      return;
    }

    setLoading(true);
    
    // Mock OTP verification
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    onVerifySuccess();
  };

  const handleResend = async () => {
    setCanResend(false);
    setTimeLeft(60);
    
    // Mock resend
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("New OTP sent to your email!");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-card border-0 shadow-lg">
      <CardHeader className="text-center space-y-2">
        <button
          onClick={onBack}
          className="absolute left-6 top-6 p-2 hover:bg-muted rounded-full transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="bg-gradient-primary rounded-lg p-3 w-fit mx-auto text-white">
          <Shield className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Verify Email</CardTitle>
        <CardDescription>
          Enter the 6-digit code sent to<br />
          <span className="font-medium text-foreground">{email}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary"
            disabled={loading || otp.some(digit => !digit)}
          >
            {loading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <div className="text-sm text-muted-foreground">
            Didn't receive the code?
          </div>
          
          <button
            onClick={handleResend}
            disabled={!canResend}
            className="flex items-center justify-center gap-2 text-sm text-primary hover:underline disabled:text-muted-foreground disabled:no-underline mx-auto"
          >
            <RotateCcw className="h-4 w-4" />
            {canResend ? "Resend Code" : `Resend in ${timeLeft}s`}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}