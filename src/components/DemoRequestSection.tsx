import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { DemoFormData } from '../types';

export const DemoRequestSection: React.FC = () => {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    organization: '',
    email: '',
    stakeholderType: 'Disaster Management Authority',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Please provide your organization or agency name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your official email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@agency.gov or name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your operational interest or geographic focus.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters so we can understand your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable local storage persistence and submission processing
    setTimeout(() => {
      const generatedId = `NO-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedId);

      try {
        const stored = localStorage.getItem('novaorbit_demo_requests');
        const list = stored ? JSON.parse(stored) : [];
        list.push({
          ...formData,
          id: generatedId,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('novaorbit_demo_requests', JSON.stringify(list));
      } catch (err) {
        console.error('LocalStorage write failed:', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      stakeholderType: 'Disaster Management Authority',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="demo" className="py-16 md:py-24 border-b border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Stakeholder Engagement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              08. Connect With Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Request a Technical Demo & Partnership Briefing
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We welcome disaster authorities, civic agencies, environmental organizations, research partners, and entrepreneurship mentors to evaluate our prototype platform and discuss pilot deployments.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono text-cyan-300 font-semibold uppercase">
                  What Happens Next
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our founding technical team will schedule an interactive walkthrough demonstrating multi-spectral flood and cyclone risk layers tailored to your target geographic district.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                <span className="font-mono text-slate-300 font-semibold">
                  Wadhwani Foundation Reviewers:
                </span>
                <p>
                  Mentors and jury members are invited to request deep-dive architectural dossiers, feasibility analysis, and venture roadmap documents.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-500">
              DIRECT INQUIRIES: <span className="text-slate-300">{COMPANY_INFO.contactEmail}</span>
            </div>
          </div>

          {/* Right Column: Contact & Demo Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              {isSubmitted ? (
                <div className="space-y-6 py-6 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Request Successfully Recorded
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Thank You, {formData.fullName}
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your demonstration request on behalf of <strong className="text-white">{formData.organization}</strong> has been received and saved.
                    </p>
                  </div>

                  {/* Submission Details Card */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs font-mono space-y-2 max-w-md mx-auto text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-500">REFERENCE ID:</span>
                      <span className="text-cyan-400 font-bold">{referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">OFFICIAL EMAIL:</span>
                      <span className="text-slate-200">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">STAKEHOLDER SECTOR:</span>
                      <span className="text-slate-200">{formData.stakeholderType}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-sans">
                      <strong className="font-mono text-slate-300">Next Step: </strong>
                      Our team will reach out to this email to coordinate your tailored platform walkthrough and share prototype sandbox access.
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Request a Platform Demonstration
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete the details below to evaluate NovaOrbit Space for your organization.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-slate-300 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Dr. Jane Smith"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.fullName && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </div>
                    )}
                  </div>

                  {/* Organization & Sector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="organization"
                        className="block text-xs font-medium text-slate-300 flex items-center gap-1.5"
                      >
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Organization *</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => {
                          setFormData({ ...formData, organization: e.target.value });
                          if (errors.organization) setErrors({ ...errors, organization: undefined });
                        }}
                        placeholder="e.g. State Disaster Authority"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.organization
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.organization && (
                        <div className="flex items-center gap-1.5 text-xs text-rose-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.organization}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="stakeholderType"
                        className="block text-xs font-medium text-slate-300"
                      >
                        Stakeholder Sector
                      </label>
                      <select
                        id="stakeholderType"
                        value={formData.stakeholderType}
                        onChange={(e) =>
                          setFormData({ ...formData, stakeholderType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="Disaster Management Authority">Disaster Management Authority</option>
                        <option value="Government Agency / Ministry">Government Agency / Ministry</option>
                        <option value="Emergency Response Team">Emergency Response Team</option>
                        <option value="Environmental Monitoring NGO">Environmental Monitoring NGO</option>
                        <option value="Research & Academic Institution">Research & Academic Institution</option>
                        <option value="Wadhwani Foundation Mentor / Investor">Wadhwani Foundation Mentor / Investor</option>
                      </select>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-300 flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Official Email Address *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. name@ndma.gov or name@domain.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-300 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Message / Operational Context *</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your geographic region of interest, hazard focus (floods, cyclones, etc.), or specific pilot requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800/60 rounded-lg shadow-lg shadow-cyan-950/40 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    NovaOrbit Space values institutional privacy. Demo submissions are reviewed strictly by our authorized engineering and research coordinators.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
