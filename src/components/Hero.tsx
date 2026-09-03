import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal,
  FileCode,
  Layers,
  ChevronRight
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer.ts' | 'stack.json' | 'goals.md'>('developer.ts');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    let textToCopy = personalInfo.codeSnippet;
    if (activeTab === 'stack.json') {
      textToCopy = JSON.stringify({
        frontend: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML/CSS"],
        programming: ["JavaScript", "Python", "C++"],
        database: ["SQL"],
        tools: ["Git", "GitHub"]
      }, null, 2);
    } else if (activeTab === 'goals.md') {
      textToCopy = `# Current Trajectory
- Target: Frontend Developer / Software Engineer
- Core Focus: Shipping clean, practical web applications
- Learning: Applied AI workflows & Python automation`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern bg-radial-gradient"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badge */}
          <div 
            id="status-indicator-badge"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium tracking-wide shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-emerald-200">{personalInfo.name}</span>.
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-cyan-400 font-mono">
                Frontend Developer
              </span>
              <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                React • JavaScript • Web UI
              </span>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-view-projects-btn"
              type="button"
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-view-resume-btn"
              href={personalInfo.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 cursor-pointer"
              title="View Resume in a new tab"
            >
              <span>View Resume ↗</span>
            </a>

            <button
              id="hero-connect-btn"
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 cursor-pointer"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Social Profiles & Quick Specs */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800/80 w-full max-w-lg">
            <div className="flex items-center gap-3">
              <a
                id="hero-github-link"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors py-1 px-2.5 rounded bg-slate-900/60 border border-slate-800 hover:border-slate-700"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="font-mono">GitHub</span>
              </a>

              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors py-1 px-2.5 rounded bg-slate-900/60 border border-slate-800 hover:border-slate-700"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>B.Tech CSE '25</span>
              <span className="text-slate-600">•</span>
              <span>QC Analyst @ HighSpring India</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Developer / Code Card */}
        <div className="lg:col-span-5 w-full">
          <div 
            id="developer-code-card"
            className="rounded-xl bg-[#0d1322] border border-slate-800/90 shadow-2xl shadow-cyan-950/20 overflow-hidden group hover:border-slate-700/80 transition-all duration-300"
          >
            {/* Editor Window Header */}
            <div className="bg-[#090d16] px-4 py-3 border-b border-slate-800/90 flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>vishakha-workspace</span>
                </span>
              </div>

              {/* Copy Button */}
              <button
                id="copy-snippet-button"
                type="button"
                onClick={handleCopyCode}
                className="text-xs font-mono flex items-center gap-1 text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-colors"
                title="Copy code snippet"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* File Tabs */}
            <div className="flex items-center bg-[#0b101c] px-2 pt-2 border-b border-slate-800/70 gap-1 overflow-x-auto text-xs font-mono">
              <button
                id="tab-developer-ts"
                type="button"
                onClick={() => setActiveTab('developer.ts')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md transition-colors border-t border-x ${
                  activeTab === 'developer.ts'
                    ? 'bg-[#0d1322] text-cyan-300 border-slate-800 border-b-transparent'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                <span>developer.ts</span>
              </button>

              <button
                id="tab-stack-json"
                type="button"
                onClick={() => setActiveTab('stack.json')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md transition-colors border-t border-x ${
                  activeTab === 'stack.json'
                    ? 'bg-[#0d1322] text-cyan-300 border-slate-800 border-b-transparent'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>stack.json</span>
              </button>

              <button
                id="tab-goals-md"
                type="button"
                onClick={() => setActiveTab('goals.md')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-md transition-colors border-t border-x ${
                  activeTab === 'goals.md'
                    ? 'bg-[#0d1322] text-cyan-300 border-slate-800 border-b-transparent'
                    : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>goals.md</span>
              </button>
            </div>

            {/* Code Content Area */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[260px] bg-[#0d1322]">
              {activeTab === 'developer.ts' && (
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400 font-semibold">const</span>{' '}
                    <span className="text-blue-300 font-semibold">developer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-slate-300">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"Vishakha Sharma"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-cyan-300">"Frontend Developer"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">"B.Tech CSE (2025)"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">currentRole:</span>{' '}
                    <span className="text-emerald-300">"Quality Control (QC) Analyst – Content Variation"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">company:</span>{' '}
                    <span className="text-emerald-300">"HighSpring India"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">stack:</span>{' '}
                    <span className="text-slate-400">[</span>
                    <span className="text-cyan-300">"React"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-cyan-300">"JavaScript"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-emerald-300">"Python"</span>
                    <span className="text-slate-400">, </span>
                    <span className="text-amber-300">"SQL"</span>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-emerald-300">"Building practical web apps & exploring AI"</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400">"Open to entry-level tech opportunities"</span>
                  </div>
                  <div>
                    <span className="text-slate-300">{'}'}</span>
                    <span className="text-slate-400">;</span>
                  </div>
                </div>
              )}

              {activeTab === 'stack.json' && (
                <div className="space-y-1 text-slate-300">
                  <div>{'{'}</div>
                  <div className="pl-4">
                    <span className="text-cyan-300">"frontend"</span>: [
                    <span className="text-emerald-300">"React"</span>,{' '}
                    <span className="text-emerald-300">"JavaScript"</span>,{' '}
                    <span className="text-emerald-300">"Tailwind CSS"</span>,{' '}
                    <span className="text-emerald-300">"Vite"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">"programming"</span>: [
                    <span className="text-emerald-300">"JavaScript"</span>,{' '}
                    <span className="text-emerald-300">"Python"</span>,{' '}
                    <span className="text-emerald-300">"C++"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">"database"</span>: [
                    <span className="text-emerald-300">"SQL"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-300">"tools"</span>: [
                    <span className="text-emerald-300">"Git"</span>,{' '}
                    <span className="text-emerald-300">"GitHub"</span>]
                  </div>
                  <div>{'}'}</div>
                </div>
              )}

              {activeTab === 'goals.md' && (
                <div className="space-y-2 text-slate-300">
                  <div className="text-purple-400 font-bold"># Career Trajectory</div>
                  <div className="text-slate-400">
                    - Target: Frontend Developer / Entry-Level Tech Roles
                  </div>
                  <div className="text-slate-400">
                    - Background: Quality Control & Operations (strong process & data foundation)
                  </div>
                  <div className="text-slate-400">
                    - Strengths: Practical web apps, component design, attention to detail
                  </div>
                  <div className="text-slate-400">
                    - Active Exploration: AI tooling, automation pipelines, SQL optimization
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="bg-[#090d16] px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>ready</span>
                </span>
                <span>UTF-8</span>
                <span>TypeScript</span>
              </div>
              <div className="text-slate-400 hover:text-cyan-300 cursor-pointer flex items-center gap-1" onClick={() => handleScrollTo('projects')}>
                <span>3 featured projects</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
