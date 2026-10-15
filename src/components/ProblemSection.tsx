import React from 'react';
import { AlertTriangle, Clock, Database, EyeOff } from 'lucide-react';
import { PROBLEM_POINTS } from '../data/content';

export const ProblemSection: React.FC = () => {
  const icons = [
    <Database key="db" className="w-5 h-5 text-amber-400" />,
    <Clock key="clock" className="w-5 h-5 text-amber-400" />,
    <EyeOff key="eye" className="w-5 h-5 text-amber-400" />,
    <AlertTriangle key="alert" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="problem" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            01. The Problem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Extreme climate hazards are escalating, but emergency teams remain constrained by fragmented data and critical latency.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Floods, intense tropical cyclones, raging wildfires, and protracted droughts threaten vulnerable communities worldwide. When disaster strikes, emergency coordinators and civic authorities face severe operational friction that costs lives and slows recovery.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEM_POINTS.map((problem, idx) => (
            <div
              key={problem.number}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400/80 font-semibold">
                    CHALLENGE {problem.number}
                  </span>
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    {icons[idx]}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-amber-300/90 font-medium">
                <span className="font-semibold text-amber-400">Impact: </span>
                {problem.consequence}
              </div>
            </div>
          ))}
        </div>

        {/* Real-World Context Callout */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 space-y-3">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Operational Reality
          </div>
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            Over <strong className="text-white">90% of disaster-related casualties</strong> in the developing world occur within vulnerable settlements that lack dedicated early warning sensors. Without fast, cloud-penetrating orbital intelligence, relief teams are forced to make life-critical deployment decisions based on hearsay and delayed ground reports.
          </p>
        </div>
      </div>
    </section>
  );
};
