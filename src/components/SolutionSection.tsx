import React from 'react';
import { Layers, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { SOLUTION_PILLARS } from '../data/content';
import satelliteSensorImg from '../assets/images/satellite_disaster_sensor_1792082911295.jpg';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            02. Our Solution
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Transforming complex satellite feeds and environmental data into rapid, actionable disaster intelligence.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            NovaOrbit Space is engineered to bridge the critical gap between spaceborne sensor technology and on-the-ground disaster response. We ingest multi-source satellite imagery, run automated AI hazard segmentation, and deliver clear operational directives directly to responders.
          </p>
        </div>

        {/* Visual + Architecture Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Satellite Sensor Imagery with Telemetry Framing */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-200">ORBITAL SENSOR INTEGRATION</span>
                <span className="text-cyan-400">SAR + OPTICAL FUSION</span>
              </div>
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <img
                  src={satelliteSensorImg}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/satellite_disaster_sensor_1792082911295.jpg';
                  }}
                  alt="Multispectral satellite scanning Earth for disaster risk intelligence"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-4 bg-slate-950/90 text-xs text-slate-400 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-300 font-semibold">ALL-WEATHER PENETRATION</span>
                  <span className="text-cyan-400">SYNTHETIC APERTURE RADAR</span>
                </div>
                <p className="text-slate-400">
                  Continuous day/night surface observation unaffected by storm clouds or smoke plumes.
                </p>
              </div>
            </div>

            {/* Platform Credo */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>The NovaOrbit Advantage</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Rather than delivering raw imagery files that require specialized GIS analysts to interpret over hours, NovaOrbit computes pre-analyzed hazard extents and vulnerable population footprints in minutes.
              </p>
            </div>
          </div>

          {/* Right: 3 Core Architectural Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {SOLUTION_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                        {pillar.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded">
                    {pillar.metric}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-11">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Value checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero complex manual GIS software needed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Cloud-native, scalable pipeline</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Rapid tactical output formats (GeoJSON, PDF)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Designed for low-bandwidth mobile units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
