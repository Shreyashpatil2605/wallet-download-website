import React, { useState } from 'react';
import {
  Download,
  AlertCircle,
  FileCheck2,
  Calendar,
  Layers,
  Smartphone,
  ExternalLink,
  Code2,
  Info,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import appConfig from '../config/appConfig';
import AndroidIcon from './AndroidIcon';
import SparkleIcon from './SparkleIcon';

export const DownloadSection = ({ onOpenConfigGuide }) => {
  const isConfigured = appConfig.isApkConfigured();
  const downloadUrl = appConfig.getDownloadUrl();
  const [copiedSha, setCopiedSha] = useState(false);

  const handleDownloadClick = (e) => {
    if (!isConfigured) {
      e.preventDefault();
      onOpenConfigGuide();
    }
  };

  const copySha = () => {
    if (appConfig.apkSha256) {
      navigator.clipboard.writeText(appConfig.apkSha256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-[#070A10]">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-lime-400/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="rounded-3xl p-8 sm:p-14 glass-panel border border-lime-400/30 shadow-2xl shadow-lime-950/40 relative overflow-hidden text-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-xs font-semibold text-lime-400 mb-6">
              <AndroidIcon className="w-4 h-4 text-lime-400" />
              <span>Official Android Release</span>
            </div>

            {/* Header */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get {appConfig.appName} for Android
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-9">
              Download the official APK directly to your smartphone. Free of third-party advertisements and background tracking.
            </p>

            {/* Download CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {isConfigured ? (
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-9 py-4.5 rounded-xl bg-gradient-to-r from-lime-400 via-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-lime-400/25 hover:shadow-lime-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  <AndroidIcon className="w-5 h-5 text-slate-950 stroke-[1.5]" />
                  <span>Download APK ({appConfig.apkSize})</span>
                  <Download className="w-5 h-5 text-slate-950 stroke-[2.5]" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleDownloadClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-9 py-4.5 rounded-xl bg-gradient-to-r from-lime-400 via-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-lime-400/25 hover:shadow-lime-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                  aria-label="Download Wallet APK"
                >
                  <AndroidIcon className="w-5 h-5 text-slate-950 stroke-[1.5]" />
                  <span>Download APK ({appConfig.apkSize})</span>
                  <Download className="w-5 h-5 text-slate-950 stroke-[2.5]" />
                </button>
              )}
            </div>

            {/* If not configured, show clear setup notification */}
            {!isConfigured && (
              <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-left max-w-xl mx-auto flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="font-semibold text-amber-300">Ready for APK Attachment: </span>
                  An active APK release URL has not been attached in <code className="text-amber-200">.env</code>. Tap the download button or{' '}
                  <button
                    onClick={onOpenConfigGuide}
                    className="text-lime-300 underline font-semibold hover:text-white"
                  >
                    open the Configuration Guide
                  </button>{' '}
                  to link your compiled APK in seconds.
                </div>
              </div>
            )}

            {/* Release Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <p className="text-[11px] font-medium text-slate-400">Release Version</p>
                <p className="text-sm font-bold text-white mt-1">v{appConfig.appVersion}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <p className="text-[11px] font-medium text-slate-400">Package Size</p>
                <p className="text-sm font-bold text-white mt-1">{appConfig.apkSize}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <p className="text-[11px] font-medium text-slate-400">Compatibility</p>
                <p className="text-sm font-bold text-white mt-1">Android 8.0+</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <p className="text-[11px] font-medium text-slate-400">Architecture</p>
                <p className="text-sm font-bold text-white mt-1">Universal APK</p>
              </div>
            </div>

            {/* Optional SHA-256 Checksum Display */}
            {appConfig.apkSha256 && (
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                <span>SHA-256: {appConfig.apkSha256.substring(0, 16)}...</span>
                <button
                  onClick={copySha}
                  className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Copy full checksum"
                >
                  {copiedSha ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
