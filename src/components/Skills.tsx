import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Layout, 
  Terminal, 
  Database, 
  GitBranch, 
  Check, 
  Cpu,
  Layers,
  Code2,
  Boxes
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Database className="w-5 h-5 text-amber-400" />;
      case 3:
        return <GitBranch className="w-5 h-5 text-purple-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  const getCategoryBorder = (index: number) => {
    switch (index) {
      case 0:
        return 'hover:border-cyan-500/50 group-hover:border-cyan-500/40';
      case 1:
        return 'hover:border-emerald-500/50 group-hover:border-emerald-500/40';
      case 2:
        return 'hover:border-amber-500/50 group-hover:border-amber-500/40';
      case 3:
        return 'hover:border-purple-500/50 group-hover:border-purple-500/40';
      default:
        return 'hover:border-slate-700';
    }
  };

  const getSkillTagColor = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25 hover:border-cyan-400/50 hover:bg-cyan-500/15';
      case 1:
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25 hover:border-emerald-400/50 hover:bg-emerald-500/15';
      case 2:
        return 'bg-amber-500/10 text-amber-300 border-amber-500/25 hover:border-amber-400/50 hover:bg-amber-500/15';
      case 3:
        return 'bg-purple-500/10 text-purple-300 border-purple-500/25 hover:border-purple-400/50 hover:bg-purple-500/15';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.title.toLowerCase().includes(selectedCategory));

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative bg-slate-950/40"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Tools & core competencies.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Organized by discipline. Focused on modern web fundamentals, practical languages, and dependable developer tooling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <button
              id="filter-all"
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-800 text-cyan-300 border-cyan-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              All Categories
            </button>
            <button
              id="filter-frontend"
              type="button"
              onClick={() => setSelectedCategory('frontend')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'frontend'
                  ? 'bg-slate-800 text-cyan-300 border-cyan-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              Frontend
            </button>
            <button
              id="filter-programming"
              type="button"
              onClick={() => setSelectedCategory('programming')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'programming'
                  ? 'bg-slate-800 text-emerald-300 border-emerald-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              Programming
            </button>
            <button
              id="filter-database"
              type="button"
              onClick={() => setSelectedCategory('database')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'database'
                  ? 'bg-slate-800 text-amber-300 border-amber-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              Database
            </button>
            <button
              id="filter-tools"
              type="button"
              onClick={() => setSelectedCategory('tools')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'tools'
                  ? 'bg-slate-800 text-purple-300 border-purple-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => {
            const originalIndex = skillCategories.findIndex(c => c.title === category.title);
            return (
              <div
                key={category.title}
                className={`group p-6 rounded-xl bg-[#0d1322] border border-slate-800/90 transition-all duration-300 ${getCategoryBorder(originalIndex)}`}
              >
                {/* Category Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-slate-800/80 transition-colors">
                      {getCategoryIcon(originalIndex)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills Pill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 ${getSkillTagColor(originalIndex)}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note regarding practical application & honest self-assessment */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Boxes className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Demonstrated in live projects: ATS document parsing, interactive state tables, and real-time filter mechanics.</span>
          </div>
          <a
            href="#projects"
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            <span>See practical implementations</span>
            <span>&darr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
