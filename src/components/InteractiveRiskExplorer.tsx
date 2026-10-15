import React, { useState } from 'react';
import {
  Layers,
  MapPin,
  AlertCircle,
  Eye,
  Download,
  Info,
  Radio,
  Share2,
  CheckCircle,
} from 'lucide-react';
import { SAMPLE_DISASTER_SCENARIOS } from '../data/content';
import { DisasterScenario } from '../types';

export const InteractiveRiskExplorer: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scenario-flood');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('hs-1');
  
  // Layer toggles
  const [showInundationLayer, setShowInundationLayer] = useState<boolean>(true);
  const [showPopulationHeatmap, setShowPopulationHeatmap] = useState<boolean>(true);
  const [showEvacuationCorridors, setShowEvacuationCorridors] = useState<boolean>(true);
  const [showSarRadarGrid, setShowSarRadarGrid] = useState<boolean>(true);

  // SitRep modal state
  const [showSitRepModal, setShowSitRepModal] = useState<boolean>(false);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  const scenario: DisasterScenario =
    SAMPLE_DISASTER_SCENARIOS.find((s) => s.id === selectedScenarioId) ||
    SAMPLE_DISASTER_SCENARIOS[0];

  const activeHotspot =
    scenario.hotspots.find((h) => h.id === activeHotspotId) || scenario.hotspots[0];

  const handleCopySitRep = () => {
    const text = `NOVAORBIT SPACE DISASTER INTELLIGENCE BRIEF\nSCENARIO: ${scenario.name}\nSEVERITY: ${scenario.severityLevel}\nLOCATION: ${scenario.location} (${scenario.coordinates})\nAFFECTED POPULATION: ${scenario.affectedPopulationEstimate}\nKEY INDICATOR: ${scenario.keyRiskIndicator}\nRECOMMENDATION: ${scenario.mitigationRecommendation}`;
    navigator.clipboard.writeText(text);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2500);
  };

  return (
    <section id="simulator" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Interactive Platform Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Interactive GIS Disaster Risk Simulator
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore how NovaOrbit Space fuses satellite imagery, elevation contours, and population data to generate tactical spatial awareness. Select a simulated disaster scenario and inspect vulnerability layers.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono bg-slate-900 border border-slate-800 rounded-lg p-3 shrink-0">
            <span className="text-cyan-400 font-semibold">STATUS:</span> Prototype Simulation Environment
            <br />
            <span className="text-slate-500">Prepared for Wadhwani Foundation Review</span>
          </div>
        </div>

        {/* Scenario Selector Segmented Control (Interactive Filter Buttons) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
          {SAMPLE_DISASTER_SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => {
                setSelectedScenarioId(sc.id);
                setActiveHotspotId(sc.hotspots[0]?.id || '');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                selectedScenarioId === sc.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>{sc.name.split(' ')[0]} Scenario:</span>
              <span className="font-normal opacity-90">{sc.type.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Main Simulator Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: GIS Map Viewport (8 Columns) */}
          <div className="lg:col-span-8 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
            {/* Map Top Bar */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold text-white">{scenario.location}</span>
                <span className="text-slate-500">({scenario.coordinates})</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400">SEVERITY:</span>
                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    scenario.severityLevel === 'Critical'
                      ? 'bg-rose-950 text-rose-400 border border-rose-800'
                      : scenario.severityLevel === 'Severe'
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-sky-950 text-sky-400 border border-sky-800'
                  }`}
                >
                  {scenario.severityLevel}
                </span>
              </div>
            </div>

            {/* Simulated Satellite Map Stage */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 overflow-hidden select-none">
              <img
                src="/src/assets/images/satellite_disaster_terrain_1792082912010.jpg"
                alt="Satellite remote sensing terrain with multispectral hazard overlay"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Layer 1: SAR Radar Grid Overlay */}
              {showSarRadarGrid && (
                <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />
              )}

              {/* Dynamic Layer 2: Simulated Inundation / Hazard Perimeter SVG */}
              {showInundationLayer && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 10 30 Q 30 20, 50 35 T 85 45 L 90 70 Q 70 85, 45 75 T 15 65 Z"
                      fill="rgba(6, 182, 212, 0.22)"
                      stroke="rgba(6, 182, 212, 0.7)"
                      strokeWidth="0.8"
                      strokeDasharray="2,1"
                    />
                    <circle cx="38" cy="42" r="7" fill="rgba(244, 63, 94, 0.25)" />
                    <circle cx="27" cy="53" r="5" fill="rgba(244, 63, 94, 0.2)" />
                  </svg>
                </div>
              )}

              {/* Dynamic Layer 3: Population Heatmap Overlay */}
              {showPopulationHeatmap && (
                <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_35%_45%,rgba(249,115,22,0.45)_0%,transparent_50%)]" />
              )}

              {/* Dynamic Layer 4: Evacuation Corridors SVG */}
              {showEvacuationCorridors && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 15 80 L 25 70 L 32 60 L 40 50 L 55 35 L 75 25"
                      fill="none"
                      stroke="rgba(16, 185, 129, 0.8)"
                      strokeWidth="0.75"
                      strokeDasharray="1.5,1.5"
                    />
                  </svg>
                </div>
              )}

              {/* Clickable Hotspot Pins */}
              {scenario.hotspots.map((hs) => {
                const isSelected = hs.id === activeHotspotId;
                return (
                  <button
                    key={hs.id}
                    type="button"
                    onClick={() => setActiveHotspotId(hs.id)}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                    title={hs.label}
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-7 h-7 rounded-full opacity-60 animate-ping ${
                          hs.evacuationPriority === 'Immediate'
                            ? 'bg-rose-500'
                            : hs.evacuationPriority === 'Standby'
                            ? 'bg-amber-500'
                            : 'bg-cyan-500'
                        }`}
                      />
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-lg transition-transform ${
                          isSelected ? 'scale-125 ring-2 ring-white' : 'group-hover:scale-110'
                        } ${
                          hs.evacuationPriority === 'Immediate'
                            ? 'bg-rose-600'
                            : hs.evacuationPriority === 'Standby'
                            ? 'bg-amber-600'
                            : 'bg-cyan-600'
                        }`}
                      >
                        !
                      </div>
                    </div>
                    {/* Hotspot Floating Label */}
                    <div
                      className={`mt-1 whitespace-nowrap text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/90 border border-slate-700 text-slate-200 pointer-events-none shadow-md ${
                        isSelected ? 'border-cyan-400 text-cyan-300' : ''
                      }`}
                    >
                      {hs.label}
                    </div>
                  </button>
                );
              })}

              {/* Map Scale & Legend Overlay */}
              <div className="absolute bottom-3 left-3 p-2.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1.5 backdrop-blur-sm pointer-events-auto">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">GIS Map Layers</div>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm bg-cyan-500/70" /> Inundation Perimeter
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/60" /> Pop Density
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/70" /> Passable Corridors
                  </span>
                </div>
              </div>
            </div>

            {/* GIS Layer Toggle Controls */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-mono text-slate-400">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>ACTIVE GIS LAYERS:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowInundationLayer(!showInundationLayer)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                    showInundationLayer
                      ? 'bg-cyan-950/80 border-cyan-500/60 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  [ {showInundationLayer ? '✓' : ' '} ] Hazard Polygon
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopulationHeatmap(!showPopulationHeatmap)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                    showPopulationHeatmap
                      ? 'bg-amber-950/80 border-amber-500/60 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  [ {showPopulationHeatmap ? '✓' : ' '} ] Vulnerable Settlements
                </button>
                <button
                  type="button"
                  onClick={() => setShowEvacuationCorridors(!showEvacuationCorridors)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                    showEvacuationCorridors
                      ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  [ {showEvacuationCorridors ? '✓' : ' '} ] Evacuation Routes
                </button>
                <button
                  type="button"
                  onClick={() => setShowSarRadarGrid(!showSarRadarGrid)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                    showSarRadarGrid
                      ? 'bg-slate-800 border-slate-700 text-slate-200'
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}
                >
                  [ {showSarRadarGrid ? '✓' : ' '} ] Coordinate Grid
                </button>
              </div>
            </div>
          </div>

          {/* Right: Telemetry & Hotspot Detail Panel (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Active Hotspot Inspector Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Inspected Hotspot</span>
                </div>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    activeHotspot.evacuationPriority === 'Immediate'
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : 'bg-amber-950 text-amber-300 border border-amber-800'
                  }`}
                >
                  PRIORITY: {activeHotspot.evacuationPriority}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  {activeHotspot.label}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {activeHotspot.details}
                </p>
              </div>

              {/* Click prompt */}
              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 bg-slate-950/60 p-2 rounded border border-slate-800/80">
                <Info className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>Click any pulsing map pin to inspect local hazard data</span>
              </div>
            </div>

            {/* Scenario Telemetry Summary Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3.5 text-xs">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                Scenario Telemetry Readout
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Affected Population:</span>
                  <span className="font-mono font-semibold text-white tabular-nums">
                    {scenario.affectedPopulationEstimate}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Satellite Sensor Bands:</span>
                  <span className="font-mono text-cyan-300 text-right">
                    {scenario.satelliteBands.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Key Risk Indicator:</span>
                  <span className="font-mono text-amber-300 text-right">
                    {scenario.keyRiskIndicator}
                  </span>
                </div>
              </div>

              {/* AI Mitigation Recommendation */}
              <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                  Action Recommendation
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {scenario.mitigationRecommendation}
                </p>
              </div>

              {/* SitRep Action Button */}
              <button
                type="button"
                onClick={() => setShowSitRepModal(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Generate Situation Report (SitRep)</span>
              </button>
            </div>
          </div>
        </div>

        {/* SitRep Modal */}
        {showSitRepModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowSitRepModal(false)}
          >
            <div
              className="max-w-xl w-full rounded-2xl bg-slate-900 border border-slate-700 p-6 space-y-5 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    NovaOrbit Space Situation Report (SitRep)
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {scenario.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSitRepModal(false)}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3 text-slate-300">
                <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2">
                  DISASTER INTELLIGENCE DISPATCH #NO-SIM-{scenario.id.toUpperCase()}
                </div>
                <p>
                  <strong className="text-white">GEO-LOCATION:</strong> {scenario.location} ({scenario.coordinates})
                </p>
                <p>
                  <strong className="text-white">SEVERITY INDEX:</strong> {scenario.severityLevel.toUpperCase()}
                </p>
                <p>
                  <strong className="text-white">EST. AFFECTED POPULATION:</strong> {scenario.affectedPopulationEstimate}
                </p>
                <p>
                  <strong className="text-white">PRIMARY SENSOR READINGS:</strong> {scenario.satelliteBands.join(' · ')}
                </p>
                <p>
                  <strong className="text-white">CRITICAL FINDING:</strong> {scenario.keyRiskIndicator}
                </p>
                <p>
                  <strong className="text-white">OPERATIONAL DIRECTIVE:</strong> {scenario.mitigationRecommendation}
                </p>
                <div className="pt-2 text-[10px] text-slate-500 border-t border-slate-800">
                  DISCLAIMER: Synthesized demonstration payload for Wadhwani Foundation prototype review.
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleCopySitRep}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                >
                  {copiedStatus ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy SitRep Brief</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowSitRepModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
