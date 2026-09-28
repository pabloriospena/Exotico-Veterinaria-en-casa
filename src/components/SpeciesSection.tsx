import React, { useState } from 'react';
import { SPECIES_LIST, SpeciesInfo } from '../data/veterinaryData';

export const SpeciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  const filteredSpecies = SPECIES_LIST.filter(
    (s) => activeTab === 'todos' || s.category === activeTab
  );

  return (
    <section id="especies" className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-[#003622] font-bold">
          Pacientes No Convencionales
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#003622]">
          Especies que Atendemos en Casa & Finca
        </h2>
        <p className="text-xs md:text-sm text-[#404943]">
          Abordaje empático y adaptado a la etología de cada especie en su hábitat cotidiano en La Ceja, Rionegro y Oriente Antioqueño cercano.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'todos', label: 'Todas las Especies' },
          { id: 'roedores', label: 'Conejos & Roedores' },
          { id: 'aves', label: 'Aves & Gallinas' },
          { id: 'pequeños-mamiferos', label: 'Erizos & Mini Pigs' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === tab.id
              ? 'bg-[#003622] text-white shadow-sm'
              : 'bg-[#d9e6da]/60 text-[#003622] hover:bg-[#d9e6da]'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Species Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredSpecies.map((sp: SpeciesInfo) => (
          <div
            key={sp.id}
            className="p-5 rounded-3xl bg-white shadow-sm border border-gray-100 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-full bg-[#d9e6da] flex items-center justify-center text-[#003622]">
                    <span className="material-symbols-outlined text-[22px]">{sp.icon}</span>
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#003622] leading-snug">{sp.name}</h3>
                    <span className="text-[11px] text-[#404943] block leading-tight">{sp.subtitle}</span>
                  </div>
                </div>
              </div>

              <span className="inline-block text-[10px] font-bold bg-[#d9e6da] text-[#134e35] px-2.5 py-0.5 rounded-full">
                {sp.badge}
              </span>

              <p className="text-xs text-[#404943] leading-relaxed">{sp.description}</p>

              {/* Procedures Highlight */}
              <div className="space-y-1.5 pt-2 border-t border-gray-100">
                <span className="text-[11px] font-bold text-[#003622] uppercase tracking-wider block">
                  Procedimientos comunes:
                </span>
                <ul className="space-y-1 text-xs text-[#404943]">
                  {sp.procedures.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[#134e35] text-[14px] mt-0.5 shrink-0">
                        check
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Care Tip Box */}
              <div className="bg-[#f3f3f3] p-3 rounded-2xl border border-gray-200 text-[11px] text-[#404943]">
                <strong className="text-[#003622] block font-bold mb-0.5">💡 Consejo de la Especialista:</strong>
                {sp.careTip}
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={`https://wa.me/c/573052417854?text=${encodeURIComponent(`Hola, quisiera consultar para mi ${sp.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 mt-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
