import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Home,
  CircleNodes,
  Recycle,
  ShoppingBag,
  Users,
  VoteIcon,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("h-full flex flex-col gap-2", className)}>
      <div className="flex items-center gap-2 mb-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ReLoop</div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1">
        <div className="mb-6">
          <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">MAIN</h3>
          <SidebarItem to="/" icon={<Home size={18} />} label="Home" />
          <SidebarItem to="/value-chains" icon={<CircleNodes size={18} />} label="Value Chains" />
          <SidebarItem to="/marketplace" icon={<ShoppingBag size={18} />} label="Marketplace" />
          <SidebarItem to="/community" icon={<Users size={18} />} label="Community" />
          <SidebarItem to="/governance" icon={<VoteIcon size={18} />} label="Governance" />
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">EXPLORE</h3>
          <SidebarItem to="/feedstock" icon={<Recycle size={18} />} label="Feedstock Types" />
          <SidebarItem to="/processes" icon={<CircleNodes size={18} />} label="ChemHub Processes" />
          <SidebarItem to="/products" icon={<ShoppingBag size={18} />} label="LoopCrafted Products" />
          <SidebarItem to="/resources" icon={<BookOpen size={18} />} label="Resources" />
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">ACCOUNT</h3>
          <SidebarItem to="/profile" icon={<Settings size={18} />} label="Settings" />
          <SidebarItem to="/help" icon={<HelpCircle size={18} />} label="Help & Support" />
          <SidebarItem to="/auth" icon={<LogOut size={18} />} label="Sign In / Sign Up" />
        </div>
      </nav>

      <div className="mt-auto mb-4 px-3">
        <div className="rounded-lg bg-muted/50 p-4">
          <h4 className="font-medium mb-1">Set up your node</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Start transforming waste into value with your own processing node.
          </p>
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ to, icon, label, active }: SidebarItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      {icon}
      {label}
    </Link>
  );
}