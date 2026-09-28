import React, { useState } from 'react';
import { SERVICES_LIST, ServiceInfo } from '../data/veterinaryData';

interface ServicesSectionProps {
  onOpenAppointmentModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);

  return (
    <section id="servicios" className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto">
      {/* Banner Card */}
      <div className="rounded-3xl bg-gradient-to-br from-[#134e35] to-[#003622] text-white p-6 md:p-8 flex flex-col gap-5 shadow-lg relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d9e6da]/20 text-[#b4f0cd] self-start text-xs font-semibold">
          <span className="material-symbols-outlined text-[16px]">medical_services</span>
          <span>Equipamiento Diagnóstico Móvil a Domicilio</span>
        </div>

        <div className="flex flex-col gap-1 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Servicios Especializados en Finca & Hogar
          </h2>
          <p className="text-xs md:text-sm text-[#f0f1f1] opacity-90 leading-relaxed">
            Tecnología clínica avanzada transportable para diagnósticos precisos sin someter a tu mascota a viajes agotadores por carreteras o trochas.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 backdrop-blur-md cursor-pointer transition-all flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#b4f0cd] text-[#003622] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[22px]">{srv.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white group-hover:text-[#b4f0cd] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#f0f1f1] opacity-80 mt-0.5 line-clamp-2">
                  {srv.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#b4f0cd] font-semibold mt-2">
                  Ver detalles <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-sm shadow-md active:scale-95 transition-all text-center"
            href="https://wa.me/c/573052417854"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Consultar Catálogo de Servicios en WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Detail Modal if a Service is clicked */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-gray-200 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-2 border-b">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#d9e6da] text-[#003622] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">{selectedService.icon}</span>
                </span>
                <h3 className="text-base font-bold text-[#003622]">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-xs text-[#404943] leading-relaxed">{selectedService.fullDesc}</p>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#003622]">Puntos Clave del Servicio:</span>
              <ul className="space-y-1 text-xs text-[#404943]">
                {selectedService.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[#134e35] text-[14px] mt-0.5">
                      check_circle
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f3f3f3] p-3 rounded-xl text-[11px] text-[#404943]">
              <strong className="text-[#003622] block font-bold mb-0.5">Recomendado para:</strong>
              {selectedService.recommendedFor}
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenAppointmentModal();
                }}
                className="flex-1 py-3 bg-[#003622] text-white font-bold text-xs rounded-xl hover:bg-[#134e35] transition-colors"
              >
                Solicitar Servicio
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-3 bg-gray-100 text-gray-700 font-semibold text-xs rounded-xl hover:bg-gray-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
