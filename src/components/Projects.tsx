import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Code 
} from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Featured projects.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Practical web applications built with React, modern JavaScript, and Tailwind CSS. Each project includes source code and a live deployed demo.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 hidden sm:block">
            <span>Production Deploys on GitHub Pages</span>
          </div>
        </div>

        {/* Projects List: Large Premium Cards */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => {
            const isFirst = idx === 0;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`relative rounded-2xl bg-[#0c1220] border transition-all duration-300 overflow-hidden group ${
                  isFirst
                    ? 'border-cyan-500/40 hover:border-cyan-400/70 shadow-xl shadow-cyan-950/20'
                    : 'border-slate-800/90 hover:border-slate-700/90 shadow-lg shadow-black/20'
                }`}
              >
                {/* Subtle top indicator bar */}
                <div 
                  className={`h-1 w-full ${
                    isFirst 
                      ? 'bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-500' 
                      : 'bg-slate-800 group-hover:bg-slate-700'
                  }`}
                />

                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Info Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isFirst ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`}>
                    
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured Project</span>
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400">
                        {project.tagline}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Feature Highlights */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links: Live Demo & GitHub */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        id={`live-demo-link-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <a
                        id={`github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-750 hover:border-slate-600 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </div>

                  </div>

                  {/* Visual Preview / UI Mockup Column */}
                  <div className={`lg:col-span-6 ${isFirst ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}`}>
                    <div className="relative rounded-xl overflow-hidden border border-slate-800/80 shadow-2xl bg-black/40 p-1 group-hover:border-slate-700 transition-all">
                      <ProjectMockup type={project.type} />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
