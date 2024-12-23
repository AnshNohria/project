import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Shield, Globe, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 animate-gradient">
              Decentralized Emergency Fund Protocol
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A blockchain-powered safety net ensuring rapid financial aid during emergencies.
            Transparent, efficient, and accessible to everyone, everywhere.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-card p-6 rounded-lg">
              <Shield className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
              <p className="text-muted-foreground">All transactions are recorded on the blockchain, ensuring complete transparency and security.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <Globe className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-muted-foreground">Available to anyone with an internet connection, regardless of location or banking status.</p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <Zap className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Instant Relief</h3>
              <p className="text-muted-foreground">Automated smart contracts ensure immediate fund disbursement during emergencies.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}