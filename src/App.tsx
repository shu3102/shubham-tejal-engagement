import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Header } from './components/Header';
import { ShareModal } from './components/ShareModal';
import { FloatingActions } from './components/FloatingActions';
import { InvocationSection } from './sections/InvocationSection';
import { HeroSection } from './sections/HeroSection';
import { CoupleSection } from './sections/CoupleSection';
import { StorySection } from './sections/StorySection';
import { GallerySection } from './sections/GallerySection';
import { ReelsSection } from './sections/ReelsSection';
import { SakharpudaSection } from './sections/SakharpudaSection';
import { BlessingsSection } from './sections/BlessingsSection';
import { EventDetailsSection } from './sections/EventDetailsSection';
import { RsvpSection } from './sections/RsvpSection';
import { FooterSection } from './sections/FooterSection';

export const AppContent: React.FC = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <div className="invitation-app">
      {/* Top Fixed Header */}
      <Header onOpenShare={() => setShareModalOpen(true)} />

      {/* Main Single Page Sections */}
      <main>
        <InvocationSection />
        <HeroSection />
        <CoupleSection />
        <StorySection />
        <GallerySection />
        <ReelsSection />
        <SakharpudaSection />
        <BlessingsSection />
        <EventDetailsSection />
        <RsvpSection />
      </main>

      {/* Footer Section */}
      <FooterSection />

      {/* Mobile Floating Action Bar */}
      <FloatingActions onOpenShare={() => setShareModalOpen(true)} />

      {/* Share / QR Code Modal */}
      <ShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
