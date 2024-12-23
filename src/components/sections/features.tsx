import { Shield, Globe, Zap, Lock, Clock, Users } from "lucide-react";
import { FeatureCard } from "../ui/feature-card";

const features = [
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "All transactions are recorded on the blockchain, ensuring complete transparency and security."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available to anyone with an internet connection, regardless of location or banking status."
  },
  {
    icon: Zap,
    title: "Instant Relief",
    description: "Automated smart contracts ensure immediate fund disbursement during emergencies."
  },
  {
    icon: Lock,
    title: "Decentralized Control",
    description: "No single entity controls the funds, ensuring fair and democratic distribution."
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Continuous operation without bureaucratic delays or time zone restrictions."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governed by the community, ensuring decisions align with those in need."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Why Choose DEF Protocol?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}