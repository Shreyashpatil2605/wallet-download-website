import React, { useState } from 'react';
import {
  Smartphone,
  PlusCircle,
  LogIn,
  Layers,
  ArrowRight,
  CheckCircle2,
  Tag,
  ShieldCheck,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import SparkleIcon from './SparkleIcon';
import appWelcome from '../assets/app-welcome.png';
import appScreenshot from '../assets/app-screenshot.png';
import appNewTransaction from '../assets/app-new-transaction.png';

export const AppFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const screens = [
    {
      id: 'welcome',
      tabLabel: '01. Welcome Page',
      stepNumber: '01',
      title: 'Welcome & Sign In',
      subtitle: 'First-time launch & account access',
      badge: 'Welcome Page',
      image: appWelcome,
      alt: 'Wallet Welcome Back sign-in screen on Android',
      description:
        'A clean, friendly welcome screen greets you every time. Enter your email and password to securely sign in or create a new account in seconds.',
      features: [
        'Secure email-based authentication',
        'Minimalist, distraction-free interface',
        'Instant session restore on app launch',
        'Clean, friendly 3D illustration design'
      ],
      glowColor: 'rgba(163, 230, 53, 0.25)',
      accentBorder: 'border-lime-400/40',
      badgeBg: 'bg-lime-400/10 text-lime-300 border-lime-400/30'
    },
    {
      id: 'dashboard',
      tabLabel: '02. Home Dashboard',
      stepNumber: '02',
      title: 'Total Balance & Ledger',
      subtitle: 'Real-time overview of your finances',
      badge: 'Home Screen',
      image: appScreenshot,
      alt: 'Wallet Home Screen with Total Balance ₹21900.00 and recent transactions',
      description:
        'Your daily financial dashboard. Monitor your current net balance, review monthly income and expense breakdowns, and inspect recent transaction records with pull-to-refresh sync.',
      features: [
        'Real-time net balance calculation (₹21,900.00)',
        'Side-by-side Income (+₹25,000.00) & Expense (-₹3,100.00)',
        'Recent transaction list with date & category tags',
        'One-tap entry deletion with instant recalculation'
      ],
      glowColor: 'rgba(56, 189, 248, 0.25)',
      accentBorder: 'border-sky-400/40',
      badgeBg: 'bg-sky-400/10 text-sky-300 border-sky-400/30'
    },
    {
      id: 'new-transaction',
      tabLabel: '03. How New Transaction Begins',
      stepNumber: '03',
      title: 'How a New Transaction Begins',
      subtitle: 'Tap + ADD to start recording expenses or income',
      badge: 'Transaction Flow',
      image: appNewTransaction,
      alt: 'Wallet New Transaction creation screen with expense/income toggle and category pills',
      description:
        'Tap the green + ADD button from the home screen to open the transaction creator. Easily switch between Expense and Income, enter the amount, title, and select a category.',
      features: [
        'Instant one-tap toggle between Expense and Income',
        'Live amount input with crisp rupee currency formatting',
        '7 pre-configured categories: Food & Drinks, Shopping, Transportation, Entertainment, Bills, Income, and Other',
        'Top-right Save ✓ confirmation that updates balance instantly'
      ],
      glowColor: 'rgba(249, 115, 22, 0.25)',
      accentBorder: 'border-orange-400/40',
      badgeBg: 'bg-orange-400/10 text-orange-300 border-orange-400/30'
    }
  ];

  const current = screens[activeStep];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#070A10] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-lime-400 uppercase tracking-wider mb-4 shadow-sm">
            <SparkleIcon className="w-3.5 h-3.5 text-lime-400" color="#A3E635" />
            <span>App Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Wallet Flow: <span className="text-gradient-lime">From Welcome to Every Entry</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See exactly how Wallet operates on Android — from your first sign-in on the welcome page to logging a new transaction in seconds.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl backdrop-blur-md">
            {screens.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeStep === idx
                    ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {step.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Active Flow Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Description & Feature Bullets */}
            <div className="lg:col-span-7 text-left order-2 lg:order-1">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 bg-slate-900">
                <span className="text-slate-400 font-mono">Step {current.stepNumber}</span>
                <span className="text-slate-600">•</span>
                <span className="text-lime-300 font-bold">{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                {current.title}
              </h3>
              
              <p className="text-sm sm:text-base text-lime-300/90 font-medium mb-4">
                {current.subtitle}
              </p>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-3.5 pt-6 border-t border-white/10 mb-8">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Quick Navigation Pills */}
              <div className="flex items-center gap-3 pt-2">
                {screens.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === idx
                        ? 'w-10 bg-lime-400'
                        : 'w-3 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Jump to screen ${step.stepNumber}`}
                  />
                ))}
              </div>

            </div>

            {/* Right Column: Realistic Phone Mockup displaying the screenshot */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
                
                {/* Device Glow */}
                <div
                  className="absolute inset-0 w-full h-full blur-3xl -z-10 rounded-full scale-110 opacity-70 transition-all duration-500"
                  style={{ backgroundColor: current.glowColor }}
                />

                {/* Smartphone Chassis */}
                <div className="rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600/70 shadow-[0_20px_50px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                  <div className="relative rounded-[36px] overflow-hidden bg-[#E5F1E3] border border-slate-700/60 shadow-inner">
                    
                    {/* Top Speaker Slot & Camera */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2 pointer-events-none">
                      <div className="w-10 h-1 bg-slate-700/80 rounded-full" />
                      <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-700" />
                    </div>

                    {/* Real Screenshot Image */}
                    <img
                      src={current.image}
                      alt={current.alt}
                      key={current.id}
                      className="w-full h-auto object-contain block select-none pointer-events-none animate-in fade-in duration-300"
                      loading="lazy"
                    />

                    {/* Subtle Sheen */}
                    <div className="absolute inset-0 phone-screen-sheen pointer-events-none" />
                  </div>
                </div>

                {/* Screen Caption */}
                <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                  {current.title} — Android Interface
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppFlow;
