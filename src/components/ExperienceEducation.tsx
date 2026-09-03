import React from 'react';
import { experiencesData, educationData } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Building2
} from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative bg-slate-950/30"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Experience & Education.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Real-world enterprise experience in quality control and operations coupled with formal Computer Science education.
          </p>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Experience Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Work Experience</span>
            </div>

            <div className="space-y-6">
              {experiencesData.map((exp, idx) => {
                const isCurrent = exp.status === 'Current';

                return (
                  <div 
                    key={exp.role} 
                    className={`p-6 sm:p-8 rounded-2xl bg-[#0d1322] border transition-all duration-300 space-y-5 ${
                      isCurrent 
                        ? 'border-emerald-500/30 hover:border-emerald-500/50 shadow-xl shadow-emerald-950/10' 
                        : 'border-slate-800/90 hover:border-slate-700/80 shadow-lg shadow-black/20'
                    }`}
                  >
                    {/* Header: Title, Org, Dates, Status */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800/80">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="text-sm font-mono font-medium text-slate-300">
                            {exp.company}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-slate-300">{exp.period}</span>
                        </div>
                      </div>

                      <div className="self-start sm:self-auto">
                        {isCurrent ? (
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Current Role</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-400 text-xs font-mono">
                            <span>Previous Role</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Accurate Responsibilities List */}
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Key Responsibilities:
                      </div>
                      <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isCurrent ? 'text-emerald-400' : 'text-slate-400'}`} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recruiter Disclosure Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-3 font-mono">
              <span className="text-cyan-400 shrink-0 font-bold">•</span>
              <span>
                Note for Recruiters: My background in quality control and IT operations reinforces data integrity, systematic verification, edge-case analysis, and reliable execution in my frontend engineering work.
              </span>
            </div>
          </div>

          {/* Education Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Formal Education</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800 space-y-5">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-100">
                  {educationData.degree}
                </h3>
                <div className="text-xs font-mono text-cyan-400">
                  Computer Science Engineering
                </div>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  {educationData.year}
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Core Foundations:
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {educationData.focus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400">
                Foundational computer science grounding in logic, system architectures, and software engineering principles.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
