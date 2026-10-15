import React from 'react';
import { Telescope, Compass, Award, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const VisionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            07. Our Vision & Venture Journey
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            {COMPANY_INFO.vision}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We believe the future of civil protection lies at the intersection of orbital remote sensing and transparent AI. We are dedicated to ensuring that no community remains invisible to early warning systems simply due to geographic isolation or economic marginalization.
          </p>
        </div>

        {/* 3 Guiding Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Telescope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Democratizing Space Insights
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transitioning high-precision Earth observation out of exclusive defense silos and making actionable situational maps accessible to regional disaster authorities and rural district collectors.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Ground-Truth Calibrated AI
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Training computer vision algorithms directly against historical flood vectors, cyclone landfalls, and verified terrain topographies to deliver calibrated, explainable confidence intervals.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="p-3 w-fit rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Humanitarian-First Prioritization
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designing algorithms that explicitly detect unmapped settlements, rural hamlets, and public medical centers rather than restricting focus to commercial infrastructure.
            </p>
          </div>
        </div>

        {/* Entrepreneurship Program Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Wadhwani Foundation Entrepreneurship Track</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              From Prototype Innovation to Scalable Humanitarian Enterprise
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              NovaOrbit Space is actively participating in the Wadhwani Foundation entrepreneurship ecosystem, refining our core algorithmic pipelines, validating stakeholder requirements with disaster managers, and preparing for field validation pilots.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-400 space-y-1 bg-slate-950/80 p-3 rounded-lg border border-slate-800">
            <div><span className="text-slate-500">STAGE:</span> <strong className="text-cyan-300">Prototype Alpha</strong></div>
            <div><span className="text-slate-500">PROGRAM:</span> <span className="text-slate-200">Wadhwani Venture Track</span></div>
            <div><span className="text-slate-500">FOCUS:</span> <span className="text-slate-200">Civic Tech & SpaceTech</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
