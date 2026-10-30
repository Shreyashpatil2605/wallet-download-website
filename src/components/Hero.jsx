import React, { useState } from 'react';
import {
  Download,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Wallet,
  ShieldCheck,
  Receipt,
  Layers,
  Sparkles,
  Lock,
  Tag,
  Plus
} from 'lucide-react';
import appConfig from '../config/appConfig';
import AndroidIcon from './AndroidIcon';
import SparkleIcon from './SparkleIcon';
import appScreenshot from '../assets/app-screenshot.png';
import appWelcome from '../assets/app-welcome.png';
import appNewTransaction from '../assets/app-new-transaction.png';

export const Hero = ({ onDownloadClick }) => {
  // Screen selector: 'dashboard' | 'welcome' | 'new-transaction'
  const [activeScreen, setActiveScreen] = useState('dashboard');

  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentImage =
    activeScreen === 'welcome'
      ? appWelcome
      : activeScreen === 'new-transaction'
      ? appNewTransaction
      : appScreenshot;

  const currentAlt =
    activeScreen === 'welcome'
      ? 'Wallet Welcome Back Screen on Android'
      : activeScreen === 'new-transaction'
      ? 'Wallet New Transaction Creation Screen on Android'
      : 'Wallet Android Application Screenshot showing real balance and transactions';

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Decorative Background Lighting inspired by Image 1 */}
      {/* Warm Orange / Amber Radial Glow on Left */}
      <div className="absolute top-1/4 -left-20 w-[520px] h-[520px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Vibrant Lime-Green Glow behind the Phone Mockup */}
      <div className="absolute top-1/3 right-10 lg:right-24 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Sky-Blue Ambient Accent */}
      <div className="absolute -top-10 right-1/3 w-[380px] h-[380px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Fine Geometric Background Grid & Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative Curved Background Lines inspired by Image 1 */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100 200 C 400 100, 800 500, 1200 350"
          stroke="url(#hero-line-grad)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 4"
        />
        <path
          d="M 200 600 C 600 400, 900 700, 1400 550"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#A3E635" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Sparkle Stars inspired by Image 1 */}
      <div className="absolute top-28 left-[12%] hidden sm:block pointer-events-none animate-sparkle">
        <SparkleIcon className="w-5 h-5 text-white/50" color="#FFFFFF" />
      </div>
      <div className="absolute top-44 right-[46%] hidden lg:block pointer-events-none animate-sparkle [animation-delay:1.5s]">
        <SparkleIcon className="w-6 h-6 text-lime-400" color="#A3E635" />
      </div>
      <div className="absolute bottom-28 right-[10%] hidden sm:block pointer-events-none animate-sparkle [animation-delay:2.5s]">
        <SparkleIcon className="w-5 h-5 text-lime-300" color="#BEF264" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* LEFT SIDE: Headline, Description & CTAs                 */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Version & Platform Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-lime-400/30 text-xs font-semibold text-lime-400 mb-6 shadow-sm shadow-lime-950/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <AndroidIcon className="w-3.5 h-3.5 text-lime-400" />
              <span>Official Android App</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-mono">v{appConfig.appVersion}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Your Money.{' '}
              <span className="relative inline-block">
                <span className="text-white">Your Control.</span>
                {/* Decorative multi-color curved swoop underline inspired by Image 1 */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 overflow-visible pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 8 C 50 1, 150 1, 198 8"
                    stroke="url(#headline-swoop-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="headline-swoop-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F97316" />
                      <stop offset="0.6" stopColor="#A3E635" />
                      <stop offset="1" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl text-lime-300/90 font-medium tracking-tight mb-4">
              Meet Wallet — a simpler way to manage your everyday finances.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-9">
              Keep track of your balance, income, expenses, and recent transactions in one convenient mobile application.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Primary Button: Bright Lime-Green inspired by Image 1 */}
              <button
                onClick={onDownloadClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-lime-400 via-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-slate-950 font-extrabold text-base shadow-xl shadow-lime-400/25 hover:shadow-lime-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label="Download Wallet for Android"
              >
                <AndroidIcon className="w-5 h-5 text-slate-950 stroke-[1.5]" />
                <span>Download for Android</span>
                <Download className="w-4 h-4 text-slate-950 stroke-[2.5] ml-1" />
              </button>

              {/* Secondary Button: Translucent Glassmorphism */}
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl glass-card text-slate-200 hover:text-white hover:border-lime-400/40 font-semibold text-base transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 group"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Specification Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-xs text-slate-400 font-medium">Platform</p>
                <p className="text-sm font-semibold text-white mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                  Android APK
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">File Size</p>
                <p className="text-sm font-semibold text-white mt-0.5">{appConfig.apkSize}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Compatibility</p>
                <p className="text-sm font-semibold text-white mt-0.5">Android 8.0+</p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT SIDE: Smartphone Mockup with Real Screenshot      */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Interactive Screen Switcher Pills */}
            <div className="mb-4 inline-flex p-1 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg backdrop-blur-md z-20">
              <button
                onClick={() => setActiveScreen('welcome')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeScreen === 'welcome'
                    ? 'bg-lime-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Welcome Page
              </button>
              <button
                onClick={() => setActiveScreen('dashboard')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeScreen === 'dashboard'
                    ? 'bg-lime-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveScreen('new-transaction')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeScreen === 'new-transaction'
                    ? 'bg-lime-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                New Transaction
              </button>
            </div>

            {/* Soft Green Glow Mesh behind Device */}
            <div className="absolute inset-0 w-full h-full phone-glow-mesh blur-3xl -z-10 scale-125" />

            {/* Phone Container */}
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] transform transition-transform hover:-translate-y-1 duration-300">
              
              {/* Outer Smartphone Frame (Realistic Bezel & Hardware) */}
              <div className="rounded-[44px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600/70 shadow-[0_25px_65px_-12px_rgba(0,0,0,0.95)] shadow-lime-950/40 ring-1 ring-white/10">
                
                {/* Inner Screen Bezel */}
                <div className="relative rounded-[36px] overflow-hidden bg-[#0A0D14] border border-slate-700/60 shadow-inner">
                  
                  {/* Top Speaker Slot & Punch-hole camera */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2 pointer-events-none">
                    <div className="w-12 h-1 bg-slate-700/80 rounded-full" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700" />
                  </div>

                  {/* REAL APP SCREENSHOT (IMAGE 2, Welcome, or New Transaction) */}
                  <div className="w-full flex items-center justify-center bg-[#E5F1E3] overflow-hidden min-h-[490px]">
                    <img
                      src={currentImage}
                      alt={currentAlt}
                      key={activeScreen}
                      className="w-full h-auto object-contain block select-none pointer-events-none animate-in fade-in duration-300"
                      loading="eager"
                    />
                  </div>

                  {/* Subtle glass reflection sheen overlay */}
                  <div className="absolute inset-0 phone-screen-sheen pointer-events-none" />
                </div>
              </div>

              {/* ==================================================== */}
              {/* FLOATING CONTEXTUAL UI ELEMENTS                     */}
              {/* ==================================================== */}
              
              {activeScreen === 'dashboard' && (
                <>
                  {/* Floating Card 1: Verified Income Card (Top-Right) */}
                  <div className="hidden sm:flex absolute -right-6 lg:-right-10 top-16 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-lime-400/30 animate-float-slow z-20">
                    <div className="w-9 h-9 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400">
                      <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-medium text-slate-400">Income</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30">
                          Verified
                        </span>
                      </div>
                      <p className="text-sm font-bold text-lime-300 tracking-tight">+₹25,000.00</p>
                      <p className="text-[10px] text-slate-400">Salary • Monthly</p>
                    </div>
                  </div>

                  {/* Floating Card 2: Verified Expense Card (Middle-Left) */}
                  <div className="hidden sm:flex absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-rose-500/30 animate-float-reverse z-20">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <TrendingDown className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-medium text-slate-400">Total Expenses</span>
                      <p className="text-sm font-bold text-rose-400 tracking-tight">-₹3,100.00</p>
                      <p className="text-[10px] text-slate-400">Rent & Food</p>
                    </div>
                  </div>

                  {/* Floating Card 3: Verified Total Balance Summary (Bottom-Right) */}
                  <div className="hidden sm:flex absolute -right-4 lg:-right-8 bottom-8 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-sky-400/30 animate-float-slow [animation-delay:2s] z-20">
                    <div className="w-9 h-9 rounded-xl bg-sky-400/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <Wallet className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-medium text-slate-400">Net Balance</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <p className="text-base font-extrabold text-white tracking-tight">₹21,900.00</p>
                      <p className="text-[10px] text-slate-400">Live Active Sync</p>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'welcome' && (
                <>
                  {/* Floating Welcome Pill 1 */}
                  <div className="hidden sm:flex absolute -left-6 lg:-left-10 top-20 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-lime-400/30 animate-float-slow z-20">
                    <div className="w-9 h-9 rounded-xl bg-lime-400/20 border border-lime-400/30 flex items-center justify-center text-lime-400">
                      <Lock className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-medium text-slate-400">Authentication</span>
                      <p className="text-sm font-bold text-white tracking-tight">Secure Sign-In</p>
                      <p className="text-[10px] text-lime-300">Protected Accounts</p>
                    </div>
                  </div>

                  {/* Floating Welcome Pill 2 */}
                  <div className="hidden sm:flex absolute -right-4 lg:-right-8 bottom-12 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-emerald-400/30 animate-float-reverse z-20">
                    <div className="w-9 h-9 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-medium text-slate-400">Welcome Screen</span>
                      <p className="text-sm font-bold text-white tracking-tight">Email & Password</p>
                      <p className="text-[10px] text-slate-400">Fast Sign Up Option</p>
                    </div>
                  </div>
                </>
              )}

              {activeScreen === 'new-transaction' && (
                <>
                  {/* Floating Transaction Pill 1 */}
                  <div className="hidden sm:flex absolute -left-6 lg:-left-12 top-20 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-orange-400/30 animate-float-slow z-20">
                    <div className="w-9 h-9 rounded-xl bg-orange-400/20 border border-orange-400/30 flex items-center justify-center text-orange-400">
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-medium text-slate-400">Transaction Creator</span>
                      <p className="text-sm font-bold text-white tracking-tight">Expense vs. Income</p>
                      <p className="text-[10px] text-orange-300">One-Tap Toggle</p>
                    </div>
                  </div>

                  {/* Floating Transaction Pill 2 */}
                  <div className="hidden sm:flex absolute -right-4 lg:-right-8 bottom-12 floating-glass-card px-4 py-3 rounded-2xl items-center gap-3 border border-sky-400/30 animate-float-reverse z-20">
                    <div className="w-9 h-9 rounded-xl bg-sky-400/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <Tag className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] font-medium text-slate-400">7 Smart Categories</span>
                      <p className="text-sm font-bold text-white tracking-tight">Food, Bills, Shopping...</p>
                      <p className="text-[10px] text-sky-300">Fast Classification</p>
                    </div>
                  </div>
                </>
              )}

              {/* Caption below mockup */}
              <p className="text-center text-xs text-slate-400 mt-4 font-medium tracking-wide">
                {activeScreen === 'welcome' && '1. Welcome Page — Authentication Flow'}
                {activeScreen === 'dashboard' && '2. Home Screen — Balance & Activity'}
                {activeScreen === 'new-transaction' && '3. New Transaction — Beginning an Entry'}
              </p>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SECTION 5: STATS / FEATURE HIGHLIGHTS ROW                */}
        {/* ======================================================== */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Highlight 1: Track Income */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-lime-400/30 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors">
                  Track Income
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  Log salary, dividends, and earnings with instant real-time credit updates directly to your net balance.
                </p>
              </div>
            </div>

            {/* Highlight 2: Manage Expenses */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-orange-400/30 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                <Receipt className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                  Manage Expenses
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  Categorize daily expenditures across rent, bills, groceries, and dining with clear debit indicators.
                </p>
              </div>
            </div>

            {/* Highlight 3: View Transactions */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-sky-400/30 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  View Transactions
                </h3>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  Review complete chronological transaction logs with accurate timestamps and one-touch management.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
