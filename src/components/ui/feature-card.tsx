import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
      <Icon className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}