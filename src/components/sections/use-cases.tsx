import { motion } from "framer-motion";
import { CloudLightning, Stethoscope, HeartPulse, Building } from "lucide-react";
import { UseCaseCard } from "../ui/use-case-card";

const useCases = [
  {
    icon: CloudLightning,
    title: "Natural Disasters",
    description: "Immediate relief for communities affected by hurricanes, earthquakes, and other natural disasters.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: Stethoscope, // Changed from Virus to Stethoscope
    title: "Pandemic Response",
    description: "Quick financial support during health crises to cover medical expenses and basic needs.",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: HeartPulse,
    title: "Medical Emergencies",
    description: "Support for individuals facing unexpected medical expenses and health-related crises.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1920"
  },
  {
    icon: Building,
    title: "Community Projects",
    description: "Funding for local initiatives and community development during times of need.",
    image: "https://images.unsplash.com/photo-1525026198548-4baa812f1183?auto=format&fit=crop&q=80&w=1920"
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}