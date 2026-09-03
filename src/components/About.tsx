import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import workspaceImg from '../assets/images/developer_workspace_1788451421297.jpg';

export const About: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('/a_polished_futuristic_developer_workspace_scene.png');
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth entrance reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subtle interactive parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: x * 8, y: y * 8 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className={`flex flex-col items-start space-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Background & Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Bridging operational rigor with frontend engineering.
          </h2>
        </div>

        {/* Primary Row: Narrative beside Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Authentic Professional Narrative */}
          <div className={`lg:col-span-6 flex flex-col justify-between transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="h-full p-6 sm:p-8 rounded-xl bg-[#0d1322]/80 border border-slate-800 flex flex-col justify-between space-y-5 text-slate-300 leading-relaxed text-base">
              <div className="space-y-4">
                <p>
                  I am a Computer Science Engineering graduate (<strong className="text-slate-100 font-semibold">B.Tech CSE, Class of 2025</strong>) focused on building practical, responsive web applications with <span className="text-cyan-300 font-medium">React</span>, <span className="text-cyan-300 font-medium">JavaScript</span>, and modern UI tooling.
                </p>

                <p>
                  Currently, I work as a <strong className="text-slate-100 font-semibold">Quality Control (QC) Analyst – Content Variation</strong> at <span className="text-slate-100 font-medium">HighSpring India</span>, where I work with content-variation datasets, workflow quality checks, discrepancy analysis, and data quality processes supporting AI model training workflows.
                </p>

                <p>
                  My operational and quality-focused experience has strengthened my approach to data integrity, systematic problem solving, edge cases, process accuracy, and reliable execution.
                </p>

                <p>
                  Alongside my professional experience, I am actively transitioning toward <strong className="text-slate-100 font-semibold">frontend and entry-level software development roles</strong> by building practical React applications such as ATS/resume analysis tools, job application tracking systems, and operational dashboards.
                </p>

                <p>
                  I am also deepening my foundations in <span className="text-emerald-300 font-medium">Python</span> and <span className="text-amber-300 font-medium">SQL</span> while exploring <span className="text-cyan-300 font-medium">AI tooling and workflow automation</span>.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Real Projects, No Placeholder Claims</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quality & Data Operations Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Ready to Learn & Contribute</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workspace Presentation */}
          <div className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div 
              ref={cardRef}
              id="what-i-build-visual"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`relative rounded-xl border border-slate-800/90 bg-[#0c101d] overflow-hidden group shadow-2xl transition-all duration-500 ${!isHovered ? 'animate-gentle-float' : ''}`}
              style={{
                transform: `perspective(900px) rotateY(${parallax.x}deg) rotateX(${-parallax.y}deg) scale(${isHovered ? 1.01 : 1})`,
                transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Soft ambient back glow */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/15 to-blue-500/20 blur-xl animate-gentle-glow -z-10 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Window Frame / Terminal Top Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="h-3.5 w-px bg-slate-800 mx-1"></div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300">workspace.env</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready to Ship</span>
                  </span>
                </div>
              </div>

              {/* Image Container with Floating UI Elements */}
              <div className="relative overflow-hidden bg-slate-950">
                <img 
                  id="workspace-scene-image"
                  src={imgSrc}
                  alt="A polished developer workspace scene depicting modern multi-display frontend and data engineering workflow"
                  referrerPolicy="no-referrer"
                  onError={() => setImgSrc('/a_polished_futuristic_developer_workspace_scene.png')}
                  className="w-full h-[260px] sm:h-[320px] md:h-[340px] lg:h-[340px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle gradient overlay to enhance contrast */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0c101d] via-transparent to-transparent opacity-80 pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Floating UI Badge: Stack Info (Top Right) */}
                <div 
                  className="absolute top-3 right-3 backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono shadow-lg transition-transform duration-300"
                  style={{
                    transform: `translate3d(${parallax.x * 0.8}px, ${parallax.y * 0.8}px, 0)`,
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-cyan-400" />
                    <span>React • TypeScript • Tailwind</span>
                  </div>
                </div>

                {/* Floating UI Badge: Focus Area (Bottom Left) */}
                <div 
                  className="absolute bottom-3 left-3 backdrop-blur-md bg-slate-900/85 border border-slate-700/60 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono shadow-lg transition-transform duration-300"
                  style={{
                    transform: `translate3d(${-parallax.x * 0.6}px, ${-parallax.y * 0.6}px, 0)`,
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Data Precision & UI Performance</span>
                  </div>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="p-4 bg-[#0d1322] border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200 tracking-tight">
                      Building at the intersection of Frontend, Data & AI
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Applied frontend craft powered by structured analytical thinking
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-cyan-400 shrink-0">
                  <span>Interactive Visual</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Secondary Row: 4 Key Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Education */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Education</div>
              <h3 className="text-base font-semibold text-slate-100">B.Tech in CSE (2025)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Foundations in computer science, algorithms, OOP, database systems, and web architecture.
              </p>
            </div>
          </div>

          {/* Card 2: Current Role */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Current Professional Role</div>
              <h3 className="text-base font-semibold text-slate-100">QC Analyst – Content Variation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Quality control, dataset validation, discrepancy analysis, workflow outputs, and data quality processes supporting AI training operations.
              </p>
            </div>
          </div>

          {/* Card 3: Frontend Specialization */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">Frontend Specialization</div>
              <h3 className="text-base font-semibold text-slate-100">Component Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Crafting clean, accessible, and reactive web interfaces with React, modern JavaScript, and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Card 4: Exploration Track */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
            <div className="p-2.5 w-fit rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Exploration Track</div>
              <h3 className="text-base font-semibold text-slate-100">AI Tooling & Automation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experimenting with applied AI workflows, prompt interfaces, and Python scripts to automate practical tasks.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

