import React from 'react';
import { ArrowRight, Video, Zap, Globe, Github, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-violet-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Aether Agents</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#kit" className="hover:text-white transition-colors">Starter Kit</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <button className="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-violet-400 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              v1.0 is now live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Dominate Short-Form <br /> with Autonomous AI
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              The ultimate 1-click toolkit to generate viral TikToks, Reels, and Shorts. 
              Powered by Gemini & OpenAI. Built for the next generation of creators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all flex items-center gap-2 shadow-lg shadow-violet-600/20">
                Buy Starter Kit for $97
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all">
                View Roadmap
              </button>
            </div>

            {/* Mockup Preview */}
            <div className="mt-20 relative max-w-5xl mx-auto">
              <div className="aspect-video rounded-2xl border border-white/10 bg-slate-900 overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <img 
                  src="/aether_agents_hero_mockup.webp" 
                  alt="Aether Agents Dashboard Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Status</p>
                      <p className="text-sm font-semibold text-green-400">Rendering Agent Active</p>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Queue</p>
                      <p className="text-sm font-semibold text-white">12 Videos Processed Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">1-Click Scripting</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Our agents research trending topics and write perfect hook-driven scripts optimized for retention.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-600/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Zero Editing Needed</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Automatic voiceover, subtitle generation, and B-roll cutting. The AI does the heavy lifting while you sleep.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Reach</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Instantly translate and localize your content into 20+ languages to capture international viewers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Kit */}
        <section id="kit" className="py-24 bg-white/[0.01]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale?</h2>
            <p className="text-slate-400 mb-12">
              The Aether Video-Agent Starter Kit is a production-ready codebase that you can deploy in minutes.
            </p>
            <div className="p-8 rounded-3xl border border-violet-500/20 bg-violet-500/[0.05] text-left">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Github className="w-5 h-5" /> What's inside:
              </h4>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                  <span>**Full Source Code:** Next.js Dashboard + Python Rendering Core</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                  <span>**Proprietary Prompt Database:** 50+ Retention-focused templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                  <span>**Deployment Guide:** 10-minute setup on Vercel & Railway</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                  <span>**Lifetime Updates:** All future agent patches & model upgrades</span>
                </li>
              </ul>
              <button className="w-full mt-10 py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all">
                Secure Early-Bird Access — $97
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 Aether Agents. Built by AI for the future of creation.</p>
      </footer>
    </div>
  );
}
