import { HeroSection } from './components/hero-section';
import { Features } from './components/sections/features';
import { HowItWorks } from './components/sections/how-it-works';
import { UseCases } from './components/sections/use-cases';
import { CTA } from './components/sections/cta';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <Features />
      <HowItWorks />
      <UseCases />
      <CTA />
    </div>
  );
}

export default App;