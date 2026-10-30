import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import appConfig from '../config/appConfig';
import WalletLogo from './WalletLogo';
import AndroidIcon from './AndroidIcon';

export const Navbar = ({ onDownloadClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'features', 'how-it-works', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = section === 'home' ? document.body : document.getElementById(section);
        if (el) {
          const top = section === 'home' ? 0 : el.offsetTop;
          const height = section === 'home' ? 600 : el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-to-install' },
    { id: 'about', label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A10]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Wallet Logo & Brand Name */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#', 'home')}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-lg"
            aria-label="Wallet Home"
          >
            <WalletLogo />
          </a>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`relative text-sm font-medium transition-colors py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-md ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle multi-color indicator curve under active item inspired by Image 1 */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-orange-400 to-sky-400 shadow-[0_1px_6px_rgba(249,115,22,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Prominent Download APK Button (Login omitted as web login not supported) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-slate-950 font-bold text-sm shadow-lg shadow-lime-400/20 hover:shadow-lime-400/35 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label="Download Wallet APK"
            >
              <AndroidIcon className="w-4 h-4 text-slate-950" />
              <span>Download APK</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl glass-card text-slate-200 hover:text-white hover:border-lime-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-lime-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 px-4 rounded-2xl glass-panel border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-white/10 text-lime-300 border-l-2 border-lime-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onDownloadClick();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-slate-950 font-bold text-sm shadow-lg shadow-lime-400/25 active:scale-[0.98] transition-all"
                >
                  <AndroidIcon className="w-4 h-4 text-slate-950" />
                  <span>Download APK (v{appConfig.appVersion})</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
