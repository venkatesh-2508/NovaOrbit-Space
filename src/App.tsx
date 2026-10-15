import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveRiskExplorer } from './components/InteractiveRiskExplorer';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { ImpactSection } from './components/ImpactSection';
import { VisionSection } from './components/VisionSection';
import { DemoRequestSection } from './components/DemoRequestSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTechnology = () => {
    const techElement = document.getElementById('solution');
    if (techElement) {
      techElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Header / Navbar following strict 3-zone contract */}
      <Navbar onOpenDemo={scrollToDemo} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreTech={scrollToTechnology}
          onRequestDemo={scrollToDemo}
        />

        {/* 3. The Problem */}
        <ProblemSection />

        {/* 4. Our Solution */}
        <SolutionSection />

        {/* 5. Key Features */}
        <FeaturesSection />

        {/* Interactive GIS Risk Map Sandbox / Simulator */}
        <InteractiveRiskExplorer />

        {/* 6. How It Works (4-Step Process) */}
        <HowItWorksSection />

        {/* 7. Who We Serve */}
        <WhoWeServeSection />

        {/* 8. Our Impact */}
        <ImpactSection />

        {/* 9. Our Vision */}
        <VisionSection />

        {/* 10. Request a Demo Form */}
        <DemoRequestSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
