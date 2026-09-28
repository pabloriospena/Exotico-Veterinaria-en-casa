import React from 'react';

interface HeroSectionProps {
  onOpenAppointmentModal: () => void;
  onOpenSymptomChecker: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAppointmentModal,
  onOpenSymptomChecker,
}) => {
  return (
    <section id="inicio" className="flex flex-col px-4 md:px-8 pt-4 pb-8 gap-5 max-w-5xl mx-auto">
      {/* Trust Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d9e6da] text-[#3e4a41] self-start shadow-sm border border-[#b4f0cd]">
        <span className="material-symbols-outlined text-[#003622] text-[18px]">verified</span>
        <span className="text-xs font-semibold tracking-wide">
          Medicina Veterinaria Especializada a Domicilio · Oriente Antioqueño (La Ceja, Rionegro y alrededores)
        </span>
      </div>

      {/* Main Headings */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-bold text-[#003622] tracking-tight leading-tight">
          Veterinaria de exóticos y animales no convencionales a domicilio en La Ceja y Oriente Antioqueño. Sin jaulas, sin estrés, en su propio entorno.
        </h1>
        <p className="text-sm md:text-base text-[#404943] leading-relaxed max-w-3xl">
          Sabemos que ellos no te van a decir que les duele. Los animales no convencionales ocultan el dolor por instinto: revisar a tiempo evita sufrimiento silencioso.
        </p>
      </div>

      {/* Social Proof Badges */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-1">
        <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-[#7c2800] text-[24px] fill-1">
            star
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-xs md:text-sm text-[#1a1c1c] font-bold truncate">4.9 en Google</span>
            <span className="text-[11px] text-[#404943] truncate">120+ opiniones reales</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white shadow-sm border border-gray-100">
          <span className="material-symbols-outlined text-[#003622] text-[24px]">
            workspace_premium
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-xs md:text-sm text-[#1a1c1c] font-bold truncate">Fauna Silvestre</span>
            <span className="text-[11px] text-[#404943] truncate">MVZ Esp. Certificado</span>
          </div>
        </div>

        <div
          onClick={onOpenSymptomChecker}
          className="col-span-2 md:col-span-1 flex items-center justify-between p-3 rounded-2xl bg-[#d9e6da]/60 hover:bg-[#d9e6da] cursor-pointer transition-colors border border-[#b4f0cd]"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#003622] text-[22px]">health_and_safety</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#003622]">Evaluador de Síntomas</span>
              <span className="text-[10px] text-[#3e4a41]">Triaje de dolor en casa</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-[#003622]">chevron_right</span>
        </div>
      </div>

      {/* Hero Visual Storytelling Card */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg group">
        <img
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          alt="Veterinario examinando un ave y conejo a domicilio con empatía en La Ceja Oriente Antioqueño"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfv7ZnuUoRJePDKiMPFgISZ4IDX0z1DhfTbRtqKVsjkRkcHBpWcrcohOy1JfBVr2AlQlRSxkTNy7RfDGyWG47nOpDEoKMII9SvT8g8zNB4UAHfXStrOZo6tMZ_3TsyR9ghuHAZi83iQ4gh5CsCx2PjQFw6cxXRLFbXHd2wS0i41yOSGQ1DGOHts4GsUHL2Hat-cZy2skBu7juGVKx0HBynFx-a_J7Lk8Fh5Q6HEsdSLwYHn5dLamxQxQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003622]/90 via-[#003622]/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#99d3b2] animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold drop-shadow-sm">
              Rutas activas en Oriente Antioqueño (La Ceja, Rionegro, El Retiro...)
            </span>
          </div>
          <span className="text-[11px] bg-[#003622]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-medium">
            Fear-Free en fincas y hogares
          </span>
        </div>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <a
          aria-label="Contacto directo WhatsApp"
          className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(124,40,0,0.35)] active:scale-[0.98] transition-all text-center"
          href="https://wa.me/c/573052417854"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span>Escribir al WhatsApp con Catálogo</span>
        </a>

        <button
          onClick={onOpenAppointmentModal}
          className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#d9e6da] hover:bg-[#b4f0cd] text-[#003622] font-bold text-sm active:scale-[0.98] transition-all text-center border border-[#b4f0cd]"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          <span>Agendar Consulta Preventiva</span>
        </button>
      </div>

      {/* Biosecurity Notice Banner */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f3f3f3] border border-gray-200 shadow-sm">
        <span className="material-symbols-outlined text-[#003622] text-[22px] shrink-0 mt-0.5">
          sanitizer
        </span>
        <p className="text-xs md:text-sm text-[#404943] leading-relaxed">
          <strong className="font-bold text-[#003622]">Atención personalizada y biosegura:</strong> Rutas programadas en fincas y residencias con instrumental desinfectado individualmente, ecografía SonoBook 8 y valoración holística sin apuros.
        </p>
      </div>
    </section>
  );
};
