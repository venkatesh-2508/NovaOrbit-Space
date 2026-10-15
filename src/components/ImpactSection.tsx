import React from 'react';
import {
  ShieldAlert,
  Zap,
  Users,
  TrendingDown,
  Globe,
  BarChart3,
} from 'lucide-react';
import { IMPACT_POINTS } from '../data/content';

export const ImpactSection: React.FC = () => {
  const impactIcons = [
    <ShieldAlert key="shield" className="w-5 h-5 text-cyan-400" />,
    <Zap key="zap" className="w-5 h-5 text-cyan-400" />,
    <Users key="users" className="w-5 h-5 text-cyan-400" />,
    <TrendingDown key="trend" className="w-5 h-5 text-cyan-400" />,
    <Globe key="globe" className="w-5 h-5 text-cyan-400" />,
    <BarChart3 key="chart" className="w-5 h-5 text-cyan-400" />,
  ];

  return (
    <section id="impact" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            06. Our Impact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Building long-term planetary resilience through actionable space intelligence.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            By shifting disaster management from post-calamity rescue to proactive, satellite-enabled preparedness, NovaOrbit Space aims to safeguard lives, preserve economic vitality, and support sustainable regional governance.
          </p>
        </div>

        {/* 6 Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 transition-colors">
                    {impactIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-cyan-400/90">
                    {item.focusArea}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>IMPACT OBJECTIVE</span>
                <span className="text-cyan-400">PRIORITY TARGET</span>
              </div>
            </div>
          ))}
        </div>

        {/* Command Center Spotlight Panel */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto bg-slate-950 overflow-hidden relative">
            <img
              src="/src/assets/images/disaster_operations_center_1792082912002.jpg"
              alt="Disaster operations command center coordinating crisis response with satellite maps"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/90 hidden lg:block" />
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Operational Vision
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              A Unified Common Operating Picture for Global Emergency Directors
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When disaster strikes, every minute of uncertainty compounds human vulnerability. Our platform bridges orbital physics, machine learning models, and emergency response workflows to deliver unambiguous geospatial truth to commanders on the front lines.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-cyan-400">● REAL-TIME TRIAGE</span>
              <span className="text-sky-400">● INTER-AGENCY ALIGNMENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
