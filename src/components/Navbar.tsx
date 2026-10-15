import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDemoClick = () => {
    setMobileMenuOpen(false);
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const element = document.getElementById('demo');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#07090e]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-2.5 text-slate-100 hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-sm group-hover:border-cyan-400 transition-colors">
            <svg
              className="w-4 h-4"
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
          <span className="text-lg font-bold tracking-tight text-white font-sans">
            {COMPANY_INFO.name}
          </span>
        </a>

        {/* Zone 2: 4-5 Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#problem"
            onClick={(e) => scrollToSection(e, 'problem')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            The Problem
          </a>
          <a
            href="#solution"
            onClick={(e) => scrollToSection(e, 'solution')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Our Solution
          </a>
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, 'features')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Key Features
          </a>
          <a
            href="#simulator"
            onClick={(e) => scrollToSection(e, 'simulator')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            GIS Simulator
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => scrollToSection(e, 'how-it-works')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="#stakeholders"
            onClick={(e) => scrollToSection(e, 'stakeholders')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Who We Serve
          </a>
          <a
            href="#impact"
            onClick={(e) => scrollToSection(e, 'impact')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Impact & Vision
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleDemoClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm shadow-cyan-900/30 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <span>Request a Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#07090e]/95 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#problem"
              onClick={(e) => scrollToSection(e, 'problem')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              The Problem
            </a>
            <a
              href="#solution"
              onClick={(e) => scrollToSection(e, 'solution')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Our Solution
            </a>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Key Features
            </a>
            <a
              href="#simulator"
              onClick={(e) => scrollToSection(e, 'simulator')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Interactive GIS Simulator
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#stakeholders"
              onClick={(e) => scrollToSection(e, 'stakeholders')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Who We Serve
            </a>
            <a
              href="#impact"
              onClick={(e) => scrollToSection(e, 'impact')}
              className="py-2 px-3 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Impact & Vision
            </a>
          </div>
          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={handleDemoClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
