import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export function UseCaseCard({ icon: Icon, title, description, image }: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      <div className="relative p-8">
        <Icon className="w-12 h-12 text-purple-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}