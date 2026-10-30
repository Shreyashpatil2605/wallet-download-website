import React from 'react';
import { Smartphone, Shield, Zap, Sparkles, Heart, Code2 } from 'lucide-react';
import SparkleIcon from './SparkleIcon';
import appConfig from '../config/appConfig';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090D18]/80 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-lime-400 uppercase tracking-wider mb-4 shadow-sm">
              <SparkleIcon className="w-3.5 h-3.5 text-lime-400" color="#A3E635" />
              <span>About the Application</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Personal Finance, <span className="text-gradient-lime">Simplified.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Wallet was built with a single goal: giving you immediate, frictionless control over your daily income and expenditures without the bloat of traditional banking apps.
            </p>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Pillar 1 */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-lime-400/30 transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 mb-5">
                <Smartphone className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Native Android First</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Engineered with modern React Native for instant responsiveness, native gestures, and smooth edge-to-edge rendering.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-orange-400/30 transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 mb-5">
                <Shield className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Private & Ad-Free</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Zero third-party advertisement banners or trackers. Your financial records are yours to maintain and control.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-sky-400/30 transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-5">
                <Zap className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Math Sync</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Automatic real-time re-calculation of net totals whenever entries are created or deleted from your transaction history.
              </p>
            </div>

          </div>

          {/* Quick Info Box */}
          <div className="rounded-2xl p-6 glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-white">Continuous Development & Updates</p>
              <p className="text-xs text-slate-400 mt-0.5">
                Wallet v{appConfig.appVersion} is compiled directly for Android devices running Android 8.0 (API 26) and above.
              </p>
            </div>
            <a
              href={appConfig.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:border-lime-400/40 transition-all shrink-0"
            >
              <Code2 className="w-4 h-4 text-lime-400" />
              <span>Source Repository</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
