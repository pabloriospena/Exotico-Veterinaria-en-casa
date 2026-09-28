import React, { useState } from 'react';
import { MUNICIPALITIES, MunicipalityInfo } from '../data/veterinaryData';

export const CoverageSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMunicipality, setSelectedMunicipality] = useState<MunicipalityInfo | null>(
    MUNICIPALITIES[0]
  );

  const filteredMunicipalities = MUNICIPALITIES.filter((m) => {
    const q = searchQuery.toLowerCase();
    const matchName = m.name.toLowerCase().includes(q);
    const matchVereda = m.veredas.some((v) => v.toLowerCase().includes(q));
    return matchName || matchVereda;
  });

  return (
    <section id="cobertura" className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto bg-[#f3f3f3] rounded-3xl my-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-[#003622] font-bold">
          Zonas de Atención
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#003622]">
          Cobertura en Oriente Antioqueño
        </h2>
        <p className="text-xs md:text-sm text-[#404943]">
          Rutas programadas directamente en veredas, fincas campestres y cascos urbanos.
        </p>
      </div>

      {/* Route Badge Header Card */}
      <div className="bg-[#003622] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#134e35] flex items-center justify-center text-[#b4f0cd]">
            <span className="material-symbols-outlined text-[24px]">pin_drop</span>
          </div>
          <div>
            <h3 className="text-sm font-bold">Atención en Oriente Antioqueño</h3>
            <span className="text-xs text-[#b4f0cd]">La Ceja · Rionegro · El Retiro · Marinilla y más</span>
          </div>
        </div>
        <a
          href="https://wa.me/c/573052417854"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-[#7c2800] hover:bg-[#571900] text-white px-4 py-2 rounded-full font-bold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

      {/* Vereda / Municipality Search Filter */}
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3.5 top-3 text-gray-400 text-[20px]">
          search
        </span>
        <input
          type="text"
          placeholder="Busca tu vereda o municipio (ej: Llanogrande, San José, El Salto, Don Diego...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 bg-white text-xs md:text-sm font-medium focus:ring-2 focus:ring-[#003622] outline-none shadow-sm"
        />
      </div>

      {/* Municipality Pills Grid */}
      <div className="flex flex-wrap gap-2">
        {filteredMunicipalities.map((m) => (
          <button
            key={m.name}
            onClick={() => setSelectedMunicipality(m)}
            className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedMunicipality?.name === m.name
                ? 'bg-[#003622] text-white shadow-sm'
                : 'bg-white text-[#003622] border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <span>{m.name}</span>
            {m.isPrimary && (
              <span className="text-[9px] bg-[#d9e6da] text-[#134e35] px-1.5 py-0.2 rounded-full font-bold">
                Base
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Selected Municipality Details Card */}
      {selectedMunicipality && (
        <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-200 space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#003622] text-[20px]">location_on</span>
              <h3 className="text-base font-bold text-[#003622]">{selectedMunicipality.name}</h3>
            </div>
            <span className="text-xs bg-[#d9e6da] text-[#134e35] px-3 py-1 rounded-full font-semibold">
              {selectedMunicipality.frequency}
            </span>
          </div>

          <div>
            <span className="text-xs font-bold text-gray-700 block mb-1">
              Veredas y Sectores Atendidos Frecuentemente:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedMunicipality.veredas.map((v) => (
                <span
                  key={v}
                  className="text-[11px] bg-[#f3f3f3] text-gray-800 px-2.5 py-1 rounded-lg border border-gray-200"
                >
                  📍 {v}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100">
            <span className="text-gray-600">
              ⏱️ Tiempo estimado de llegada: <strong>{selectedMunicipality.estimatedArrival}</strong>
            </span>
            <a
              href={`https://wa.me/c/573052417854?text=${encodeURIComponent(`Hola, vivo en ${selectedMunicipality.name} y quisiera consultar disponibilidad`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7c2800] font-bold text-xs hover:underline flex items-center gap-1"
            >
              Consultar Disponibilidad →
            </a>
          </div>
        </div>
      )}

      {/* Help Notice */}
      <div className="p-4 rounded-xl bg-white flex items-start gap-3 shadow-sm border border-gray-200">
        <span className="material-symbols-outlined text-[#003622] text-[20px] shrink-0 mt-0.5">
          help
        </span>
        <p className="text-xs text-[#404943] leading-relaxed">
          ¿Tu vereda o sector queda más alejado o fuera del mapa principal? Escríbenos por WhatsApp para coordinar día de visita especial a finca.
        </p>
      </div>
    </section>
  );
};
