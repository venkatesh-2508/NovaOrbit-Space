import React from 'react';
import { Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060a] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight font-sans">
                {COMPANY_INFO.name}
              </span>
            </div>

            <div className="text-xs font-mono text-cyan-400">
              {COMPANY_INFO.tagline}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.mission}
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>{COMPANY_INFO.status}</div>
              <div>{COMPANY_INFO.initiative}</div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="hover:text-cyan-400 transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-cyan-400 transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-cyan-400 transition-colors">
                  Interactive GIS Simulator
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Stakeholders & Impact */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              Stakeholders
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#stakeholders" className="hover:text-cyan-400 transition-colors">
                  Government Agencies
                </a>
              </li>
              <li>
                <a href="#stakeholders" className="hover:text-cyan-400 transition-colors">
                  Disaster Management
                </a>
              </li>
              <li>
                <a href="#stakeholders" className="hover:text-cyan-400 transition-colors">
                  First Responders
                </a>
              </li>
              <li>
                <a href="#stakeholders" className="hover:text-cyan-400 transition-colors">
                  Environmental NGOs
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-cyan-400 transition-colors">
                  Resilience Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Placeholders */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-white tracking-wider">
              Inquiries & Social
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Global Remote / Innovation Track</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[11px] font-mono text-slate-500 block mb-2">
                CONNECT CHANNELS
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="#demo"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <span className="font-mono text-xs font-bold">in</span>
                </a>
                <a
                  href="#demo"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  aria-label="X Profile"
                >
                  <span className="font-mono text-xs font-bold">𝕏</span>
                </a>
                <a
                  href="#demo"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <span className="font-mono text-xs font-bold">git</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Transparent Startup Notice */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="text-slate-500 text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="text-[10px] text-slate-600">
              Disclaimer: NovaOrbit Space is an emerging space technology venture developing its core predictive platform for the Wadhwani Foundation Entrepreneurship Program. All imagery and telemetry displays are demonstration prototypes.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
