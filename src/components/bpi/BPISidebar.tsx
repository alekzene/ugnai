import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  TestTube, 
  BarChart3, 
  Lightbulb, 
  Settings,
  Building2,
  LogOut
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/bpi", icon: LayoutDashboard },
  { title: "MSME Personas", url: "/bpi/personas", icon: Users },
  { title: "A/B Testing", url: "/bpi/testing", icon: TestTube },
  { title: "Analytics", url: "/bpi/analytics", icon: BarChart3 },
  { title: "Feature Requests", url: "/bpi/features", icon: Lightbulb },
  { title: "Settings", url: "/bpi/settings", icon: Settings },
];

interface BPISidebarProps {
  onLogout: () => void;
}

export function BPISidebar({ onLogout }: BPISidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent className="bg-bpi-red text-bpi-red-foreground">
        {/* Logo */}
        <div className="p-4 border-b border-bpi-red-light/20">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2">
              <Building2 className="h-6 w-6 text-bpi-red" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg">BPI</h1>
                <p className="text-xs text-bpi-red-foreground/80">Product Dev</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-bpi-red-foreground/80">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-bpi-red-foreground hover:bg-bpi-red-light/10"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <div className="mt-auto p-4">
          <Button
            onClick={onLogout}
            variant="outline"
            className="bg-bpi-red-light/10 text-bpi-red-foreground hover:bg-bpi-red-light/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            {!collapsed && "Sign Out"}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}