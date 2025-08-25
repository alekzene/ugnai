import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { OTPVerification } from "./OTPVerification";
import { RoleSelector } from "./RoleSelector";
import { Brain } from "lucide-react";

interface AuthContainerProps {
  onAuthSuccess: (role: "msme" | "bpi") => void;
}

type AuthState = "role-select" | "login" | "signup" | "otp" | "forgot";

export function AuthContainer({ onAuthSuccess }: AuthContainerProps) {
  const [authState, setAuthState] = useState<AuthState>("role-select");
  const [userEmail, setUserEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<"msme" | "bpi" | null>(null);

  const handleRoleSelect = (role: "msme" | "bpi") => {
    setSelectedRole(role);
    setAuthState("login");
  };

  const handleLoginSuccess = () => {
    // For mock purposes, go directly to app
    if (selectedRole) {
      onAuthSuccess(selectedRole);
    }
  };

  const handleSignupSuccess = () => {
    // In real app, this would trigger OTP
    setAuthState("otp");
  };

  const handleOTPSuccess = () => {
    if (selectedRole) {
      onAuthSuccess(selectedRole);
    }
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
    <>
      {/* Role Selection */}
      {authState === "role-select" && (
        <RoleSelector onRoleSelect={handleRoleSelect} />
      )}

      {/* Auth Forms for selected role */}
      {authState !== "role-select" && (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`rounded-lg p-3 text-white ${
                  selectedRole === "bpi" ? "bg-bpi-red" : "bg-gradient-primary"
                }`}>
                  <Brain className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    {selectedRole === "bpi" ? "BPI Portal" : "UgnAI"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {selectedRole === "bpi" ? "Product Development Hub" : "MSME Financial Assistant"}
                  </p>
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
              <p>© 2024 UgnAI Platform. All rights reserved.</p>
              <p className="mt-1">
                {selectedRole === "bpi" 
                  ? "Secure product development for banking partners" 
                  : "Secure financial assistance for MSMEs"
                }
              </p>
            </div>

            {/* Back to role selection */}
            <div className="mt-4 text-center">
              <button 
                onClick={() => setAuthState("role-select")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Change Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}