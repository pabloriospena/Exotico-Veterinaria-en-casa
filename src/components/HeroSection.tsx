import React from 'react';

interface HeroSectionProps {
  onOpenReviewsModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReviewsModal,
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
          Veterinaria de exóticos y mascotas no convencionales a domicilio en La Ceja y Oriente Antioqueño. Sin jaulas, sin estrés, en su propio entorno.
        </h1>
        <p className="text-sm md:text-base text-[#404943] leading-relaxed max-w-3xl">
          Sabemos que ellos no te van a decir que les duele. Los animales no convencionales ocultan el dolor por instinto: revisar a tiempo evita sufrimiento silencioso.
        </p>
      </div>

      {/* Social Proof Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* Google Reviews Clickable Badge */}
        <div
          onClick={onOpenReviewsModal}
          className="flex items-center justify-between p-3.5 rounded-2xl bg-white shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#7c2800] text-[24px] fill-1">
              star
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-xs md:text-sm text-[#1a1c1c] font-bold truncate">4.9 en Google</span>
              <span className="text-[11px] text-[#404943] truncate">120+ opiniones reales</span>
            </div>
          </div>
          <span className="text-xs text-[#003622] font-bold underline flex items-center gap-0.5">
            Ver reseñas <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </span>
        </div>

        {/* Qualification Badge */}
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white shadow-sm border border-gray-200">
          <span className="material-symbols-outlined text-[#003622] text-[24px]">
            workspace_premium
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-xs md:text-sm text-[#1a1c1c] font-bold truncate">Medicina Aves y Animales Exóticos</span>
            <span className="text-[11px] text-[#404943] truncate">MV. GRAND MASTER</span>
          </div>
        </div>
      </div>

      {/* Hero Visual Storytelling Card */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-lg group">
        <img
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          alt="Exótico a domicilio en La Ceja Oriente Antioqueño"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfv7ZnuUoRJePDKiMPFgISZ4IDX0z1DhfTbRtqKVsjkRkcHBpWcrcohOy1JfBVr2AlQlRSxkTNy7RfDGyWG47nOpDEoKMII9SvT8g8zNB4UAHfXStrOZo6tMZ_3TsyR9ghuHAZi83iQ4gh5CsCx2PjQFw6cxXRLFbXHd2wS0i41yOSGQ1DGOHts4GsUHL2Hat-cZy2skBu7juGVKx0HBynFx-a_J7Lk8Fh5Q6HEsdSLwYHn5dLamxQxQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003622]/90 via-[#003622]/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#99d3b2] animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold drop-shadow-sm">
              Cobertura en Oriente Antioqueño (La Ceja, Rionegro, El Retiro...)
            </span>
          </div>
          <span className="text-[11px] bg-[#003622]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-medium">
            Servicio en fincas y hogares
          </span>
        </div>
      </div>

      {/* SINGLE UNIQUE CTA: Talk via WhatsApp */}
      <div className="pt-1">
        <a
          aria-label="Contacto directo WhatsApp"
          className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-base shadow-[0_8px_20px_-4px_rgba(124,40,0,0.35)] active:scale-[0.98] transition-all text-center"
          href="https://wa.me/c/573052417854"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span>Escribir al WhatsApp</span>
        </a>
      </div>

      {/* Biosecurity Notice Banner */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#f3f3f3] border border-gray-200 shadow-sm">
        <span className="material-symbols-outlined text-[#003622] text-[22px] shrink-0 mt-0.5">
          sanitizer
        </span>
        <p className="text-xs md:text-sm text-[#404943] leading-relaxed">
          <strong className="font-bold text-[#003622]">Atención personalizada:</strong> Servicios programados en fincas y residencias y valoración holística sin apuros.
        </p>
      </div>
    </section>
  );
};
