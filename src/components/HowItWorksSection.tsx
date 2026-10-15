import React from 'react';
import { Radio, BrainCircuit, ShieldAlert, MonitorPlay, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <Radio key="radio" className="w-5 h-5 text-cyan-400" />,
    <BrainCircuit key="brain" className="w-5 h-5 text-cyan-400" />,
    <ShieldAlert key="shield" className="w-5 h-5 text-cyan-400" />,
    <MonitorPlay key="monitor" className="w-5 h-5 text-cyan-400" />,
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            04. Architecture & Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            From orbital raw telemetry to life-saving frontline decisions in four coordinated stages.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            NovaOrbit Space automates the complete data lifecycle—ingesting constellations, inferring hazards through neural vision, pinpointing human vulnerabilities, and broadcasting synthesized alerts.
          </p>
        </div>

        {/* 4-Step Linear Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors flex flex-col justify-between space-y-5 relative group"
            >
              {/* Step indicator top */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center">
                  {stepIcons[idx]}
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-900/40">
                  {step.step}
                </span>
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Sub-bullets */}
              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-[11px] text-slate-400">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 shrink-0">›</span>
                    <span className="leading-tight">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Connecting arrow for desktop between cards */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Verification Strip */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span>Harmonized Multi-Agency Sensor Integration: Public Constellations + Open Meteorological APIs</span>
          </div>
          <span className="font-mono text-cyan-400/90">Zero proprietary hardware lock-in</span>
        </div>
      </div>
    </section>
  );
};
