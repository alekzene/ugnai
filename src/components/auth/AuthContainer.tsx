import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { OTPVerification } from "./OTPVerification";
import { Brain } from "lucide-react";

interface AuthContainerProps {
  onAuthSuccess: () => void;
}

type AuthState = "login" | "signup" | "otp" | "forgot";

export function AuthContainer({ onAuthSuccess }: AuthContainerProps) {
  const [authState, setAuthState] = useState<AuthState>("login");
  const [userEmail, setUserEmail] = useState("");

  const handleLoginSuccess = () => {
    // For mock purposes, go directly to app
    onAuthSuccess();
  };

  const handleSignupSuccess = () => {
    // In real app, this would trigger OTP
    setAuthState("otp");
  };

  const handleOTPSuccess = () => {
    onAuthSuccess();
  };

  const handleForgotPassword = () => {
    const email = prompt("Enter your email address:");
    if (email) {
      setUserEmail(email);
      setAuthState("otp");
      alert("Password reset code sent to your email!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-primary rounded-lg p-3 text-white">
              <Brain className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">UgnAI</h1>
              <p className="text-sm text-muted-foreground">MSME Financial Assistant</p>
            </div>
          </div>
        </div>

        {/* Auth Forms */}
        {authState === "login" && (
          <LoginForm
            onSwitchToSignup={() => setAuthState("signup")}
            onLoginSuccess={handleLoginSuccess}
            onForgotPassword={handleForgotPassword}
          />
        )}

        {authState === "signup" && (
          <SignupForm
            onSwitchToLogin={() => setAuthState("login")}
            onSignupSuccess={handleSignupSuccess}
          />
        )}

        {authState === "otp" && (
          <OTPVerification
            email={userEmail || "user@example.com"}
            onVerifySuccess={handleOTPSuccess}
            onBack={() => setAuthState(userEmail ? "login" : "signup")}
          />
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>© 2024 UgnAI. All rights reserved.</p>
          <p className="mt-1">Secure financial assistance for MSMEs</p>
        </div>
      </div>
    </div>
  );
}