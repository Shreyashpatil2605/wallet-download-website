import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppFlow from './components/AppFlow';
import HowToInstall from './components/HowToInstall';
import About from './components/About';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import ConfigGuideModal from './components/ConfigGuideModal';
import PrivacyModal from './components/PrivacyModal';
import appConfig from './config/appConfig';

export function App() {
  const [configGuideOpen, setConfigGuideOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Global download handler
  const handleDownloadClick = () => {
    if (appConfig.isApkConfigured()) {
      const url = appConfig.getDownloadUrl();
      // Opens official EAS APK download in browser download manager
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Show configuration guide modal if APK URL is unset
      setConfigGuideOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 flex flex-col font-sans selection:bg-lime-400/25 selection:text-lime-300">
      {/* Top Navigation */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Interactive Screen Switcher (Dashboard, Welcome, New Transaction) */}
        <Hero onDownloadClick={handleDownloadClick} />

        {/* Features Section (4 verified functionality cards) */}
        <Features />

        {/* App Walkthrough Flow: Welcome Page, Dashboard, & How New Transaction Begins */}
        <AppFlow />

        {/* How to Install Section (3-step Android APK guide) */}
        <HowToInstall />

        {/* About Section */}
        <About />

        {/* Prominent Download Section */}
        <DownloadSection onOpenConfigGuide={() => setConfigGuideOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onDownloadClick={handleDownloadClick}
      />

      {/* Modals */}
      <ConfigGuideModal
        isOpen={configGuideOpen}
        onClose={() => setConfigGuideOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
