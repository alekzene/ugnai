import { NavLink, useLocation } from "react-router-dom";
import {
  Calculator,
  MessageSquare,
  BarChart3,
  Target,
  Settings,
  HelpCircle,
  Brain,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Loan Simulator", url: "/simulator", icon: Calculator },
  { title: "AI Assistant", url: "/assistant", icon: Brain },
  { title: "Progress Tracker", url: "/progress", icon: Target },
];

const toolsItems = [
  { title: "Sandbox Trials", url: "/sandbox", icon: TrendingUp },
  { title: "Rewards", url: "/rewards", icon: Award },
  { title: "Privacy Center", url: "/privacy", icon: Shield },
];

const supportItems = [
  { title: "Help & Support", url: "/help", icon: HelpCircle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 w-full transition-all duration-200 p-2 rounded-md ${
      isActive 
        ? "bg-primary text-primary-foreground font-medium" 
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    }`;

  return (
    <Sidebar
      className="transition-all duration-300 border-r border-sidebar-border"
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <SidebarTrigger></SidebarTrigger>
          <div className="flex items-center gap-3">

            <div className="bg-gradient-primary rounded-lg p-2 text-white">
              <Brain className="h-6 w-6" />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <h2 className="font-bold text-lg text-sidebar-foreground">UgnAI</h2>
              <p className="text-xs text-sidebar-foreground/70">MSME Financial Assistant</p>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-medium group-data-[collapsible=icon]:hidden">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className="flex items-center gap-3 w-full transition-all duration-200 p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tools */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-medium group-data-[collapsible=icon]:hidden">
            Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 w-full transition-all duration-200 p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-medium group-data-[collapsible=icon]:hidden">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 w-full transition-all duration-200 p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}