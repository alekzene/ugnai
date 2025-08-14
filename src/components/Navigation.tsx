import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Gift, Trophy, Target, Users, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Earn Points", href: "/earn-points", icon: Target },
  { name: "MSME Rewards", href: "/msme-rewards", icon: Gift },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ item, mobile = false }: { item: typeof navigation[0], mobile?: boolean }) => {
    const isActive = location.pathname === item.href;
    const baseClasses = mobile
      ? "flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-colors"
      : "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors";
    
    const activeClasses = isActive
      ? "bg-gradient-primary text-primary-foreground"
      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground";

    return (
      <Link
        to={item.href}
        className={`${baseClasses} ${activeClasses}`}
        onClick={mobile ? () => setOpen(false) : undefined}
      >
        <item.icon className={mobile ? "h-5 w-5" : "h-4 w-4"} />
        {item.name}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-xl font-bold text-foreground">
                RewardsPro
              </Link>
              
              <div className="flex items-center gap-2">
                {navigation.map((item) => (
                  <NavLink key={item.name} item={item} />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button variant="gradient" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="text-xl font-bold text-foreground">
            RewardsPro
          </Link>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <NavLink key={item.name} item={item} mobile />
                  ))}
                </div>
                
                <div className="space-y-3 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                  <Button variant="gradient" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};