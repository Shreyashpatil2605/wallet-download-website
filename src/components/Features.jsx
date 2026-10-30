import React from 'react';
import { featuresData } from '../data/featuresData';
import { Sparkles, Check } from 'lucide-react';
import SparkleIcon from './SparkleIcon';

export const Features = () => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'lime':
        return {
          bg: 'bg-lime-400/10',
          border: 'border-lime-400/20 group-hover:border-lime-400/50',
          text: 'text-lime-400',
          badge: 'bg-lime-400/10 text-lime-300 border-lime-400/20',
          glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.3)]',
          bullet: 'text-lime-400',
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-400/10',
          border: 'border-emerald-400/20 group-hover:border-emerald-400/50',
          text: 'text-emerald-400',
          badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
          glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]',
          bullet: 'text-emerald-400',
        };
      case 'orange':
        return {
          bg: 'bg-orange-400/10',
          border: 'border-orange-400/20 group-hover:border-orange-400/50',
          text: 'text-orange-400',
          badge: 'bg-orange-400/10 text-orange-300 border-orange-400/20',
          glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]',
          bullet: 'text-orange-400',
        };
      case 'sky':
      default:
        return {
          bg: 'bg-sky-400/10',
          border: 'border-sky-400/20 group-hover:border-sky-400/50',
          text: 'text-sky-400',
          badge: 'bg-sky-400/10 text-sky-300 border-sky-400/20',
          glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]',
          bullet: 'text-sky-400',
        };
    }
  };

  return (
    <section id="features" className="py-24 relative bg-[#090D18]/70 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-lime-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-lime-400 uppercase tracking-wider mb-4 shadow-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-lime-400" color="#A3E635" />
            <span>Application Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Financial Clarity.{' '}
            <span className="text-gradient-lime">Built for Everyday Life.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to track balances, review incomes, and keep your finances in order without confusing submenus or bloated advertising.
          </p>
        </div>

        {/* 4 Premium Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);

            return (
              <div
                key={feature.id}
                className={`group relative rounded-3xl p-8 glass-card border transition-all duration-300 hover:-translate-y-1.5 ${colors.border} ${colors.glow}`}
              >
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.text} border border-white/5 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${colors.badge}`}>
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-5 border-t border-white/5">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className={`w-4 h-4 rounded-full ${colors.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${colors.bullet} stroke-[3]`} />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
