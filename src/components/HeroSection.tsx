import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Orbit, Globe2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreTech: () => void;
  onRequestDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTech,
  onRequestDemo,
}) => {
  return (
    <section id="top" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Clean Unboxed Metadata (NO PILLS) */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-6 tracking-wide">
          <span>NovaOrbit Space</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>SpaceTech Venture</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Wadhwani Foundation Track</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Disaster Preparedness Platform</span>
        </div>

        {/* 2-Column Split: Headline & Narrative on Left, High-Impact Space Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] [text-wrap:balance]">
              AI-Powered Disaster Intelligence for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Safer Earth
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              NovaOrbit Space combines satellite, weather, and environmental data with artificial intelligence to identify disaster risks, monitor vulnerable areas, and support faster, better-informed emergency decisions.
            </p>

            {/* Mission Statement Box */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Our Core Mission</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Harnessing satellite technology and artificial intelligence to improve disaster preparedness, enable faster emergency response, protect vulnerable communities, and build a safer, more resilient future.
              </p>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onRequestDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-lg shadow-cyan-950/50 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreTech}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-colors"
              >
                <Orbit className="w-4 h-4 text-cyan-400" />
                <span>Explore Our Technology</span>
              </button>
            </div>

            {/* Trust and Venture Footnote */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Pre-launch venture advancing proof-of-concept AI pipelines for civil protection & humanitarian resilience.
              </span>
            </div>
          </div>

          {/* Right Column: High-Resolution Satellite & Earth Orbital Stage */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              {/* Telemetry Header Bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-200">LEO ORBITAL MONITOR</span>
                </div>
                <span className="text-cyan-400 tabular-nums">ALT: 680 km · SUN-SYNC</span>
              </div>

              {/* Main Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src="/src/assets/images/hero_earth_satellite_1792082910763.jpg"
                  alt="NovaOrbit Space satellite in orbit over Earth capturing multispectral surface data"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                {/* Overlaid Satellite Sensor Telemetry Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 border border-slate-800 backdrop-blur-sm text-xs space-y-1">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">SENSOR MODALITY:</span>
                    <span className="text-cyan-300">OPTICAL + SAR RADAR</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">PRIMARY TARGET:</span>
                    <span className="text-slate-200">RAPID FLOOD & CYCLONE ZONING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Telemetry Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
              Sensor Constellation
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              Multi-Spectral
            </div>
            <p className="text-xs text-slate-400">
              Optical, SAR C-band, and Thermal IR
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
              Target Inference Speed
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
              &lt; 30 Minutes
            </div>
            <p className="text-xs text-slate-400">
              Automated pass ingestion to hazard polygons
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
              Hazard Archetypes
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
              4 Major Types
            </div>
            <p className="text-xs text-slate-400">
              Floods, Cyclones, Wildfires, Droughts
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
              Preparedness Objective
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-sky-400 tabular-nums">
              Zero Blindspots
            </div>
            <p className="text-xs text-slate-400">
              Granular coverage for vulnerable habitations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
