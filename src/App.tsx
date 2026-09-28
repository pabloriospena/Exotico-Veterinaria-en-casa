/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpeciesSection } from './components/SpeciesSection';
import { ServicesSection } from './components/ServicesSection';
import { CoverageSection } from './components/CoverageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppBar } from './components/FloatingWhatsAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { AppointmentModal } from './components/AppointmentModal';
import { SymptomCheckerModal } from './components/SymptomCheckerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [isSymptomCheckerOpen, setIsSymptomCheckerOpen] = useState<boolean>(false);
  const [selectedSpeciesForAppointment, setSelectedSpeciesForAppointment] = useState<string>('');

  const handleOpenAppointmentModal = (species: string = '') => {
    setSelectedSpeciesForAppointment(species);
    setIsAppointmentOpen(true);
  };

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'especies', 'servicios', 'cobertura', 'faq'];
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
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="flex flex-col relative w-full pt-20 pb-12">
        <HeroSection
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
          onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
        />

        <SpeciesSection
          onOpenAppointmentModal={(species) => handleOpenAppointmentModal(species)}
        />

        <ServicesSection
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        />

        <CoverageSection
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
        />

        <TestimonialsSection
          onOpenAppointmentModal={() => handleOpenAppointmentModal()}
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
        onOpenSymptomChecker={() => setIsSymptomCheckerOpen(true)}
      />

      {/* Interactive Booking & WhatsApp Generator Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedSpecies={selectedSpeciesForAppointment}
      />

      {/* Interactive Pet Symptom Evaluator & Triaje Modal */}
      <SymptomCheckerModal
        isOpen={isSymptomCheckerOpen}
        onClose={() => setIsSymptomCheckerOpen(false)}
        onOpenAppointmentModal={(species) => handleOpenAppointmentModal(species)}
      />
    </div>
  );
}
