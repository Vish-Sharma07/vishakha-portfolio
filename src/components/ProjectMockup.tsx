import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  SlidersHorizontal, 
  UploadCloud, 
  Kanban, 
  BarChart3, 
  TrendingUp,
  Clock,
  Briefcase,
  Check,
  ChevronRight,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'resume-analyzer' | 'job-tracker' | 'operational-dashboard';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  // Interactive state for Resume Analyzer mockup
  const [atsScore, setAtsScore] = useState<number>(88);
  const [activeResumeTab, setActiveResumeTab] = useState<'overview' | 'keywords' | 'formatting'>('overview');

  // Interactive state for Job Tracker mockup
  const [activePipelineColumn, setActivePipelineColumn] = useState<'all' | 'interview' | 'applied'>('all');

  // Interactive state for Operational Dashboard mockup
  const [filterPriority, setFilterPriority] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (type === 'resume-analyzer') {
    return (
      <div className="w-full bg-[#090e1a] rounded-xl border border-slate-800 p-4 sm:p-5 font-sans select-none overflow-hidden text-xs">
        {/* Mockup App Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
              RA
            </div>
            <span className="font-semibold text-slate-200">ATS Resume Scanner</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">PDF.js</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Analysis Complete
            </span>
          </div>
        </div>

        {/* Mockup Body */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
          {/* Left: Document Info & ATS Score */}
          <div className="sm:col-span-5 bg-[#0d1424] rounded-lg p-3.5 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-300 font-medium mb-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="truncate">vishakha_frontend_resume.pdf</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono mb-3">
                Parsed 428 words • Target: Frontend Developer
              </div>

              {/* ATS Score Gauge */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                <div className="relative w-14 h-14 rounded-full border-4 border-emerald-500/30 border-t-emerald-400 flex items-center justify-center font-mono font-bold text-base text-emerald-300 shrink-0">
                  {atsScore}%
                </div>
                <div>
                  <div className="font-bold text-slate-200 text-xs">High ATS Match</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Ready for applicant tracking systems
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex justify-between font-mono">
              <span>Keywords: 14/16</span>
              <span className="text-emerald-400">Format: Clean</span>
            </div>
          </div>

          {/* Right: Analysis Tabs & Breakdown */}
          <div className="sm:col-span-7 bg-[#0d1424] rounded-lg p-3.5 border border-slate-800/80 flex flex-col">
            <div className="flex items-center gap-1 border-b border-slate-800 pb-2 mb-2 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActiveResumeTab('overview')}
                className={`px-2 py-1 rounded transition-colors ${activeResumeTab === 'overview' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Skills Match
              </button>
              <button
                type="button"
                onClick={() => setActiveResumeTab('keywords')}
                className={`px-2 py-1 rounded transition-colors ${activeResumeTab === 'keywords' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Keywords
              </button>
              <button
                type="button"
                onClick={() => setActiveResumeTab('formatting')}
                className={`px-2 py-1 rounded transition-colors ${activeResumeTab === 'formatting' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Sections
              </button>
            </div>

            {activeResumeTab === 'overview' && (
              <div className="space-y-2">
                <div className="text-[11px] text-slate-400 font-medium">Matched Required Skills:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS', 'Git', 'REST APIs'].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 text-[10px] font-mono flex items-center gap-1">
                      <Check className="w-2.5 h-2.5 text-emerald-400" />
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-[10px] text-slate-500 mt-2">
                  <span className="text-amber-400 font-mono">Suggested Addition:</span> Add TypeScript or unit testing mentions to increase score to 95%.
                </div>
              </div>
            )}

            {activeResumeTab === 'keywords' && (
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Job Description Match</span>
                  <span className="text-emerald-400 font-mono">88%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full w-[88%]"></div>
                </div>
                <p className="text-[10px] text-slate-400 pt-1">
                  14 core frontend development keywords present in both document and job description.
                </p>
              </div>
            )}

            {activeResumeTab === 'formatting' && (
              <div className="space-y-1 text-[10px] text-slate-400 font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Section Headers</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Contact Information</span>
                  <span className="text-emerald-400">Parsed</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Font & Layout Standard</span>
                  <span className="text-emerald-400">Pass</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'job-tracker') {
    return (
      <div className="w-full bg-[#090e1a] rounded-xl border border-slate-800 p-4 sm:p-5 font-sans select-none overflow-hidden text-xs">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
              JT
            </div>
            <span className="font-semibold text-slate-200">Application Pipeline</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">11 Applications</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
              Active Search
            </span>
          </div>
        </div>

        {/* Pipeline Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Column 1: Applied */}
          <div className="bg-[#0d1424] rounded-lg p-3 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] pb-1.5 border-b border-slate-800">
              <span className="text-slate-300 font-semibold">Applied</span>
              <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">6</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] space-y-1 hover:border-slate-700 transition-colors">
              <div className="font-semibold text-slate-200">Frontend Developer</div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>FinTech Solutions</span>
                <span className="text-slate-500 font-mono">Yesterday</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] space-y-1 hover:border-slate-700 transition-colors">
              <div className="font-semibold text-slate-200">React UI Engineer</div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>ScaleUp SaaS</span>
                <span className="text-slate-500 font-mono">3d ago</span>
              </div>
            </div>
          </div>

          {/* Column 2: Interviewing */}
          <div className="bg-[#0d1424] rounded-lg p-3 border border-cyan-500/20 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] pb-1.5 border-b border-slate-800">
              <span className="text-cyan-300 font-semibold">Interviewing</span>
              <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">3</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/90 border border-cyan-500/30 text-[11px] space-y-1 shadow-xs">
              <div className="font-semibold text-cyan-200 flex items-center justify-between">
                <span>Frontend Associate</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>Digital Cloud Inc</span>
                <span className="text-cyan-400 font-mono">Round 2</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] space-y-1">
              <div className="font-semibold text-slate-200">Junior Web Dev</div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>Global Media Tech</span>
                <span className="text-emerald-400 font-mono">Tech Task</span>
              </div>
            </div>
          </div>

          {/* Column 3: Offers & Stages */}
          <div className="bg-[#0d1424] rounded-lg p-3 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] pb-1.5 border-b border-slate-800">
              <span className="text-emerald-300 font-semibold">Stage Metric</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300">92% Resp</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] space-y-1.5">
              <div className="text-[10px] text-slate-400">Response Conversion</div>
              <div className="w-full bg-slate-800 rounded-full h-1.5">
                <div className="bg-emerald-400 h-1.5 rounded-full w-[65%]"></div>
              </div>
              <div className="text-[10px] text-slate-500 font-mono flex justify-between">
                <span>Follow-ups: 4</span>
                <span className="text-emerald-400">Active</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-900/60 border border-slate-800/80 text-[10px] text-slate-400 font-mono text-center">
              + Filter by Date or Company
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Operational Dashboard mockup
  return (
    <div className="w-full bg-[#090e1a] rounded-xl border border-slate-800 p-4 sm:p-5 font-sans select-none overflow-hidden text-xs">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-xs">
            OD
          </div>
          <span className="font-semibold text-slate-200">Operations Task Analytics</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-800/40 text-purple-300 font-mono flex items-center gap-1">
            <FileSpreadsheet className="w-2.5 h-2.5" />
            ops_tasks_q3.csv
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            142 Records Synced
          </span>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        <div className="p-2.5 rounded bg-[#0d1424] border border-slate-800">
          <div className="text-[10px] text-slate-400">Total Tasks</div>
          <div className="text-base font-bold text-slate-100 font-mono">142</div>
        </div>
        <div className="p-2.5 rounded bg-[#0d1424] border border-slate-800">
          <div className="text-[10px] text-slate-400">Completed</div>
          <div className="text-base font-bold text-emerald-400 font-mono">98</div>
        </div>
        <div className="p-2.5 rounded bg-[#0d1424] border border-slate-800">
          <div className="text-[10px] text-slate-400">In Progress</div>
          <div className="text-base font-bold text-cyan-400 font-mono">32</div>
        </div>
        <div className="p-2.5 rounded bg-[#0d1424] border border-slate-800">
          <div className="text-[10px] text-slate-400">Escalated</div>
          <div className="text-base font-bold text-amber-400 font-mono">12</div>
        </div>
      </div>

      {/* Data Table Preview */}
      <div className="bg-[#0d1424] rounded-lg border border-slate-800 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 font-mono text-[10px]">
            <tr>
              <th className="py-1.5 px-2.5">Task ID</th>
              <th className="py-1.5 px-2.5">Title</th>
              <th className="py-1.5 px-2.5">Status</th>
              <th className="py-1.5 px-2.5">Priority</th>
              <th className="py-1.5 px-2.5 text-right">SLA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-[10px]">
            <tr className="text-slate-300 hover:bg-slate-800/40">
              <td className="py-2 px-2.5 text-cyan-400">OPS-1082</td>
              <td className="py-2 px-2.5 font-sans text-slate-200">Daily reconciliation audit</td>
              <td className="py-2 px-2.5">
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                  Completed
                </span>
              </td>
              <td className="py-2 px-2.5 text-slate-400">High</td>
              <td className="py-2 px-2.5 text-right text-emerald-400">100%</td>
            </tr>
            <tr className="text-slate-300 hover:bg-slate-800/40">
              <td className="py-2 px-2.5 text-cyan-400">OPS-1083</td>
              <td className="py-2 px-2.5 font-sans text-slate-200">Workflow automation triage</td>
              <td className="py-2 px-2.5">
                <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                  In Review
                </span>
              </td>
              <td className="py-2 px-2.5 text-amber-400">Urgent</td>
              <td className="py-2 px-2.5 text-right text-cyan-400">94%</td>
            </tr>
            <tr className="text-slate-300 hover:bg-slate-800/40">
              <td className="py-2 px-2.5 text-cyan-400">OPS-1084</td>
              <td className="py-2 px-2.5 font-sans text-slate-200">System user log validation</td>
              <td className="py-2 px-2.5">
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Pending
                </span>
              </td>
              <td className="py-2 px-2.5 text-slate-400">Standard</td>
              <td className="py-2 px-2.5 text-right text-slate-400">98%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
