import React, { useState } from 'react';
import {
  Satellite,
  Cpu,
  MapPin,
  BellRing,
  Layers,
  FileText,
  CloudRain,
  LayoutDashboard,
  Check,
  ChevronRight,
} from 'lucide-react';
import { KEY_FEATURES } from '../data/content';
import { FeatureItem } from '../types';

export const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureItem | null>(null);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Satellite':
        return <Satellite className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-cyan-400" />;
      case 'BellRing':
        return <BellRing className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-cyan-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-cyan-400" />;
      default:
        return <Satellite className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            03. Platform Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Eight core intelligence capabilities built for proactive emergency preparedness.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From raw orbital sensor telemetry to frontline evacuation dispatch, each module in NovaOrbit Space is engineered to accelerate decision speed and eliminate human error during critical phases.
          </p>
        </div>

        {/* 8 Feature Cards Grid (4 columns on lg, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveFeature(feature)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-cyan-950/70 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide">
                    {feature.tagline}
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight mt-1 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {feature.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/70">
                  {feature.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 flex items-center justify-between text-xs font-medium text-cyan-400/90 group-hover:text-cyan-300">
                <span>View technical details</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Feature Details */}
        {activeFeature && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveFeature(null)}
          >
            <div
              className="max-w-lg w-full rounded-2xl bg-slate-900 border border-slate-750 p-6 space-y-5 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/30">
                    {getFeatureIcon(activeFeature.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                      {activeFeature.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {activeFeature.title}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveFeature(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeFeature.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technical Specifications & Deliverables
                </div>
                <ul className="space-y-2">
                  {activeFeature.capabilities.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveFeature(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
