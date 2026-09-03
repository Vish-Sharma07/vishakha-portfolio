import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send, 
  Sparkles,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderSubject, setSenderSubject] = useState('Entry-Level Frontend Opportunity');
  const [senderMessage, setSenderMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(senderSubject || 'Connecting regarding Frontend Role');
    const mailtoBody = encodeURIComponent(
      `Hi Vishakha,\n\n${senderMessage || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${senderName || 'Recruiter / Engineering Manager'}${senderEmail ? ` (${senderEmail})` : ''}`
    );
    
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative bg-radial-gradient"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-3.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's build something useful.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I'm open to entry-level tech opportunities, frontend roles and opportunities where I can learn, build and contribute.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy & Direct Link */}
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-100">{personalInfo.email}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  id="email-mailto-link"
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Email Client</span>
                </a>

                <button
                  id="copy-email-button"
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              id="contact-linkedin-link"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition-all group flex items-center justify-between block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Professional Profile</div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    LinkedIn / vishakha-sharma25
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              id="contact-github-link"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-slate-700 transition-all group flex items-center justify-between block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Repositories & Code</div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    GitHub / Vish-Sharma07
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </a>

            {/* Availability Status */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs font-mono text-emerald-300 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for immediate interviews & entry-level engineering roles.</span>
            </div>

          </div>

          {/* Quick Message Composer (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d1322] rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-semibold text-slate-100">
                Send a Quick Message
              </h3>
            </div>

            <form onSubmit={handleQuickSend} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 font-sans">
                  <label htmlFor="contact-name" className="text-slate-400 text-xs font-mono">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 text-sm font-sans"
                  />
                </div>

                <div className="space-y-1.5 font-sans">
                  <label htmlFor="contact-email" className="text-slate-400 text-xs font-mono">
                    Your Email (Optional)
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="yourname@email.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 text-sm font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5 font-sans">
                <label htmlFor="contact-subject" className="text-slate-400 text-xs font-mono">
                  Subject / Topic
                </label>
                <select
                  id="contact-subject"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 text-xs font-mono"
                >
                  <option value="Entry-Level Frontend Opportunity">Entry-Level Frontend Opportunity</option>
                  <option value="Full-Time Tech Role Inquiry">Full-Time Tech Role Inquiry</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="General Professional Connect">General Professional Connect</option>
                </select>
              </div>

              <div className="space-y-1.5 font-sans">
                <label htmlFor="contact-message" className="text-slate-400 text-xs font-mono">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Hi Vishakha, I came across your portfolio and would like to discuss..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 text-sm font-sans resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Transfers directly to your email client
                </span>

                <button
                  id="submit-message-button"
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors font-sans cursor-pointer shadow-sm"
                >
                  <span>Compose in Email</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {formSubmitted && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client opened! You can review and click send.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
