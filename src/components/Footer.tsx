import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer" 
      className="border-t border-slate-800/80 bg-[#070b12] py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-100 text-sm tracking-tight font-sans">
              {personalInfo.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">
              Frontend Developer
            </span>
          </div>
          <p className="text-slate-500 text-[11px]">
            Building practical web applications with React & modern web standards.
          </p>
        </div>

        {/* Links & Built with */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <a
              id="footer-github-link"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            
            <span className="text-slate-700">|</span>

            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <span className="text-slate-700 hidden sm:inline">|</span>

          <div className="flex items-center gap-2 text-slate-500">
            <span>Built with React</span>
          </div>

          {/* Scroll to top button */}
          <button
            id="scroll-to-top-button"
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
