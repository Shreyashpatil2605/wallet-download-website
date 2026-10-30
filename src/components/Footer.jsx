import React from 'react';
import { Mail, Github, ArrowUp, Shield } from 'lucide-react';
import appConfig from '../config/appConfig';
import WalletLogo from './WalletLogo';

export const Footer = ({ onOpenPrivacyModal, onDownloadClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'App Walkthrough', href: '#how-it-works' },
    { label: 'How to Install', href: '#how-to-install' },
    { label: 'About', href: '#about' },
    { label: 'Download APK', href: '#download' },
  ];

  const handleLinkClick = (e, href) => {
    if (href === '#') {
      e.preventDefault();
      scrollToTop();
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070D] text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <WalletLogo textClassName="text-2xl font-bold" />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {appConfig.appDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-slate-300 font-medium">
                Android Release v{appConfig.appVersion}
              </span>
              <span className="text-slate-400">React Native Client</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-lime-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project & Legal */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Project & Legal
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="flex items-center gap-2 hover:text-lime-300 transition-colors text-left"
                >
                  <Shield className="w-4 h-4 text-lime-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>

              {appConfig.contactEmail && (
                <li>
                  <a
                    href={`mailto:${appConfig.contactEmail}`}
                    className="flex items-center gap-2 hover:text-lime-300 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{appConfig.contactEmail}</span>
                  </a>
                </li>
              )}

              {appConfig.githubRepoUrl && (
                <li>
                  <a
                    href={appConfig.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-lime-300 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>GitHub Repository</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {appConfig.appName}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 transition-all text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
