import React from 'react';

export const AboutMeSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="flex flex-col px-4 md:px-8 py-10 gap-8 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-[#003622] via-[#134e35] to-[#1c5c40] text-white rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#7c2800]/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-[#b4f0cd]/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Column 1: Profile Badge & Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative bg-[#002a1a] flex items-center justify-center">
                <img
                  src="/sobre-mi.jpg"
                  alt="Dra. María del Mar Mejía Cano - Médica Veterinaria de Exóticos"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#7c2800] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span> + 5 años de experiencia </span>
              </div>
            </div>

            <div className="space-y-1 mt-2">
              <h3 className="text-2xl font-black text-white tracking-tight">
                María del Mar Mejía Cano
              </h3>
              <p className="text-xs md:text-sm font-semibold text-[#b4f0cd] leading-snug">
                Médica Veterinaria · Grand Master en Medicina de Aves y Animales Exóticos
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-[14px] text-[#b4f0cd]">pets</span>
                <span>Aves & Exóticos</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-[14px] text-[#b4f0cd]">home_health</span>
                <span>Atención a Domicilio</span>
              </span>
            </div>
          </div>

          {/* Column 2: Full Biography Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-white/95">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#b4f0cd] text-xs font-bold uppercase tracking-wider self-start border border-white/10">
              <span className="material-symbols-outlined text-[16px]">person</span>
              <span>Sobre Mí</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
              Fundadora de Exótico – Veterinaria en Casa
            </h2>

            <div className="space-y-3.5 text-xs md:text-sm leading-relaxed font-light text-gray-100">
              <p>
                Soy <strong className="font-bold text-white">María del Mar Mejía Cano</strong>, médica veterinaria y fundadora de <strong className="font-bold text-[#b4f0cd]">Exótico – Veterinaria en casa</strong>, proyecto que nació en <strong className="font-bold text-white">2022</strong> con el propósito de ofrecer atención veterinaria a aves y mascotas no convencionales directamente en su hogar.
              </p>

              <p>
                Me dedico a la atención de <strong className="font-bold text-white">aves y mascotas no convencionales</strong>, con especial interés en comprender la medicina propia de cada especie y en ofrecer una atención clínica individualizada.
              </p>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-1.5 my-1">
                <div className="flex items-center gap-2 text-[#b4f0cd] font-bold text-xs uppercase tracking-wide">
                  <span className="material-symbols-outlined text-[18px]">school</span>
                  <span>Formación Especializada</span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed font-normal">
                  Mi formación como <strong className="font-bold text-white">Grand Master en Medicina de Aves y Animales Exóticos</strong> complementa mi práctica veterinaria y me permite abordar cada paciente considerando no solo sus signos clínicos, sino también su especie, comportamiento, alimentación, ambiente y manejo.
                </p>
              </div>

              <p>
                En Exótico llevo la consulta veterinaria al hogar, buscando que cada paciente reciba una valoración profesional, tranquila y adaptada a sus necesidades en su propio entorno.
              </p>
            </div>

            {/* Direct WhatsApp Action & Social Media Links */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
              <a
                href="https://wa.me/c/573052417854?text=Hola%20Dra.%20Mar%C3%ADa%20del%20Mar,%20quisiera%20agendar%20una%20consulta%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-xs transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Agendar Consulta por WhatsApp</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/exotico.vet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-xs transition-all shadow-md"
                  title="Siguenos en Instagram @exotico.vet"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@exotico.vet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-black hover:bg-gray-900 text-white font-bold text-xs transition-all shadow-md border border-white/20"
                  title="Siguenos en TikTok @exotico.vet"
                >
                  <svg className="w-4 h-4 fill-current text-[#25F4EE]" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.32V9.05a8.16 8.16 0 0 0 4.92 1.62V7.21a4.85 4.85 0 0 1-1-.52z" />
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
