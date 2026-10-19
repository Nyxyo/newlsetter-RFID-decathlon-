/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnologySection } from './components/TechnologySection';
import { StoreImpactSection } from './components/StoreImpactSection';
import { LogisticsSection } from './components/LogisticsSection';
import { KeyMetricsSection } from './components/KeyMetricsSection';
import { ShareAndFooter } from './components/ShareAndFooter';

export default function App() {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleShareClick = () => {
    const shareSection = document.getElementById('partage');
    if (shareSection) {
      shareSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation bar following Top Bar Contract */}
      <Navbar onShareClick={handleShareClick} />

      {/* Main Editorial Storyline */}
      <main className="flex-1">
        <Hero />
        <TechnologySection />
        <StoreImpactSection />
        <LogisticsSection />
        <KeyMetricsSection />
      </main>

      {/* Sharing, QR Code & Footer */}
      <ShareAndFooter 
        shareModalOpen={shareModalOpen}
        onCloseShareModal={() => setShareModalOpen(false)}
      />
    </div>
  );
}
