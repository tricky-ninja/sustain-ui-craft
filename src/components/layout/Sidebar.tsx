import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3,
  Database,
  MessageSquare,
  Settings,
  FileText,
  Zap,
  Globe,
  TrendingUp,
  Activity,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "LCA Models", href: "/models", icon: Activity },
  { name: "Scenarios", href: "/scenarios", icon: TrendingUp },
  { name: "AI Assistant", href: "/assistant", icon: MessageSquare },
  { name: "Databases", href: "/databases", icon: Database },
  { name: "Impact Assessment", href: "/impact", icon: Zap },
  { name: "Earth Data", href: "/earth-data", icon: Globe },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Benchmarking", href: "/benchmarking", icon: Users },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border bg-background shadow-md hover:shadow-lg"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4 pt-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <item.icon className={cn("h-4 w-4 flex-shrink-0", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )
          }
        >
          <Settings className={cn("h-4 w-4 flex-shrink-0", !isCollapsed && "mr-3")} />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>
      </div>
    </div>
  );
}