import React, { useState } from 'react';
import {
  Building2,
  Shield,
  Truck,
  Trees,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { WHO_WE_SERVE_LIST } from '../data/content';
import { StakeholderItem } from '../types';

export const WhoWeServeSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('disaster-management');

  const selectedStakeholder: StakeholderItem =
    WHO_WE_SERVE_LIST.find((s) => s.id === selectedId) || WHO_WE_SERVE_LIST[0];

  const getStakeholderIcon = (id: string) => {
    switch (id) {
      case 'government':
        return <Building2 className="w-5 h-5" />;
      case 'disaster-management':
        return <Shield className="w-5 h-5" />;
      case 'emergency-response':
        return <Truck className="w-5 h-5" />;
      case 'environmental-orgs':
        return <Trees className="w-5 h-5" />;
      case 'research':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="stakeholders" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            05. Who We Serve
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Engineered for the key stakeholders safeguarding communities and critical infrastructure.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From national disaster authorities mobilizing emergency budgets to tactical rescue teams navigating flooded corridors, NovaOrbit Space provides tailored data views and permission-tiered access.
          </p>
        </div>

        {/* Stakeholder Selector Strip (Interactive Button Tabs) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          {WHO_WE_SERVE_LIST.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                selectedId === item.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{getStakeholderIcon(item.id)}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Stakeholder Deep Dive Panel */}
        <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                {getStakeholderIcon(selectedStakeholder.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Institutional Mandate
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {selectedStakeholder.title}
                </h3>
              </div>
            </div>

            <p className="text-xs font-mono text-slate-400 border-l-2 border-slate-700 pl-3">
              {selectedStakeholder.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedStakeholder.description}
            </p>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 space-y-1.5">
              <span className="font-mono text-[11px] font-semibold text-cyan-300 uppercase tracking-wide">
                Platform Social & Operational Return
              </span>
              <p className="leading-relaxed text-slate-300">
                {selectedStakeholder.platformValue}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-950 p-6 rounded-xl border border-slate-800/90 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Core Critical Needs Solved
            </div>

            <div className="space-y-3">
              {selectedStakeholder.keyNeeds.map((need) => (
                <div key={need} className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{need}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-cyan-400">STATUS: Pilot Onboarding Open</span>
              <a
                href="#demo"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>Request Stakeholder Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
