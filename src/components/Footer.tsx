import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-4 md:px-8 pt-8 pb-32 gap-6 bg-[#e2e2e2]/60 border-t border-gray-200 text-[#1a1c1c]">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#003622] text-[26px]">
              nest_eco_leaf
            </span>
            <span className="text-lg font-bold text-[#003622]">
              Exótico Vet Oriente Antioqueño
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#404943] max-w-xl leading-relaxed">
            Medicina compasiva, rigurosa y especializada para aves, gallinas, roedores y animales de compañía no convencionales en su hábitat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#404943]">
          <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl">
            <span className="material-symbols-outlined text-[#003622] text-[18px]">
              schedule
            </span>
            <span>Lunes a Sábado: 8:00 AM - 6:00 PM (Visitas Programadas)</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl">
            <span className="material-symbols-outlined text-[#003622] text-[18px]">
              location_city
            </span>
            <span>La Ceja, Rionegro y Oriente Antioqueño, Colombia</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white/70 rounded-xl">
            <span className="material-symbols-outlined text-[#003622] text-[18px]">
              verified_user
            </span>
            <span>Registro Profesional COMVEZCOL · Especialista MVZ</span>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-300 my-2"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#404943]">
          <div className="flex flex-wrap gap-4 font-medium">
            <a
              href="https://wa.me/c/573052417854"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#003622] transition-colors"
            >
              Catálogo WhatsApp
            </a>
            <span className="hover:text-[#003622] cursor-pointer">Términos del Servicio</span>
            <span className="hover:text-[#003622] cursor-pointer">Política de Privacidad</span>
          </div>
          <span className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Exótico Vet Oriente Antioqueño. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};
