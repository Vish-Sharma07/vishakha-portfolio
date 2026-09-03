import React from 'react';
import { exploringData } from '../data/portfolioData';
import { 
  Sparkles, 
  Bot, 
  Terminal, 
  Database, 
  Layout, 
  Rocket, 
  ArrowUpRight 
} from 'lucide-react';

export const CurrentlyExploring: React.FC = () => {
  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case 'AI & Automation':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Python':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'SQL':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-purple-400" />;
      default:
        return <Rocket className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section 
      id="exploring" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Active Horizon</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Currently exploring.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Areas of active study, hands-on experimentation, and ongoing learning.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg">
            Ongoing Learning • Not Claimed Expertise
          </div>
        </div>

        {/* Exploring Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploringData.map((item, index) => (
            <div
              key={item.topic}
              className={`p-6 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 border-cyan-500/30 hover:border-cyan-400/50' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:bg-slate-850 transition-colors">
                    {getTopicIcon(item.topic)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.topic}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">Status</span>
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
