import { motion } from "framer-motion";
import { Wallet, ArrowRight, Database, Shield } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Contribute to the Fund",
      description: "Join the global community by contributing to the decentralized emergency fund."
    },
    {
      icon: Database,
      title: "Smart Contract Pool",
      description: "Funds are securely stored and managed by transparent smart contracts."
    },
    {
      icon: Shield,
      title: "Automated Distribution",
      description: "When emergencies occur, funds are automatically distributed to those in need."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex-1 flex flex-col items-center text-center max-w-sm"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-8 h-8 text-purple-500 absolute -right-4 top-1/2 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}