/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { SpeciesSection } from './components/SpeciesSection';
import { ServicesSection } from './components/ServicesSection';
import { CoverageSection } from './components/CoverageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppBar } from './components/FloatingWhatsAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { GoogleReviewsModal } from './components/GoogleReviewsModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isReviewsOpen, setIsReviewsOpen] = useState<boolean>(false);

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'especies', 'servicios', 'cobertura', 'reseñas', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Outfit',sans-serif] min-h-screen flex flex-col relative selection:bg-[#134e35] selection:text-white">
      {/* Header Bar */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenReviewsModal={() => setIsReviewsOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex flex-col relative w-full pt-20 pb-12">
        <HeroSection
          onOpenReviewsModal={() => setIsReviewsOpen(true)}
        />

        <AboutMeSection />

        <SpeciesSection />

        <ServicesSection />

        <CoverageSection />

        <TestimonialsSection
          onOpenReviewsModal={() => setIsReviewsOpen(true)}
        />

        <FaqSection />

        <Footer />
      </main>

      {/* Floating Action WhatsApp Bar */}
      <FloatingWhatsAppBar />

      {/* Bottom Touch Navigation Bar */}
      <BottomNavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenReviewsModal={() => setIsReviewsOpen(true)}
      />

      {/* Google Reviews Modal */}
      <GoogleReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />
    </div>
  );
}
