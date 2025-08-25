import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BPISidebar } from "./BPISidebar";
import { Button } from "@/components/ui/button";
import { Menu, User, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface BPILayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export function BPILayout({ children, onLogout }: BPILayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full bg-background">
        <BPISidebar onLogout={onLogout} />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger>
                  <Menu className="h-5 w-5" />
                </SidebarTrigger>
                <div className="flex items-center gap-4">
                  <h1 className="text-lg font-semibold text-foreground">
                    BPI Product Development Hub
                  </h1>
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search MSME Segment, Product Concept, or Campaign"
                      className="pl-10 w-80"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <User className="h-4 w-4 mr-2" />
                  Ana (Product Officer)
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}