import React, { useState } from 'react';
import { PATIENT_STORIES, PatientStory } from '../data/veterinaryData';

interface TestimonialsSectionProps {
  onOpenAppointmentModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [filter, setFilter] = useState<string>('todos');

  const filteredStories = PATIENT_STORIES.filter((st) => {
    if (filter === 'todos') return true;
    if (filter === 'roedores' && st.id === 'punky') return true;
    if (filter === 'aves' && st.id === 'ramon') return true;
    if (filter === 'erizos' && st.id === 'alma') return true;
    if (filter === 'pigs' && st.id === 'toreto') return true;
    return false;
  });

  return (
    <section className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto">
      {/* Vet Bio Card */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 rounded-3xl bg-white shadow-sm border border-gray-100">
        <div className="relative shrink-0">
          <img
            className="w-24 h-24 rounded-full object-cover shadow-sm border-2 border-[#b4f0cd]"
            alt="Dra. Médica Veterinaria Especialista"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeFqQFJSzlyMTwjvw60uY9-6Sgu9WMneBvdOTQRt61aoKadxgYgLBgFrUBHEo2JR-c0XSACLsDva5wf_h0jrGvBvZyyhOMYHYe_34WbbYa_zjC2ZXvTNIbV2u2HoNzEwt3BpA6F0zlchFfAyZeEuGcPVXaANwFib__nr9Ga_e44BdanAPu_VZiQ5llUBOYF1R1iM9vcLJm57MwGCDEVonJ2r5HUdH06_xXmyXrzYkksIhDPU5SaM-EpA"
          />
          <span className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#003622] flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[16px]">verified</span>
          </span>
        </div>

        <div className="flex flex-col text-center sm:text-left gap-1 flex-1">
          <span className="text-[11px] font-bold text-[#7c2800] uppercase tracking-wider">Sobre Mí</span>
          <h3 className="text-lg font-bold text-[#003622]">Dra. Médica Veterinaria Especialista</h3>
          <span className="text-xs font-semibold text-[#556158]">
            Fauna Silvestre & Animales No Convencionales
          </span>
          <p className="text-xs text-[#404943] pt-1 leading-relaxed">
            Viviendo el sueño de llevar salud y respeto a cada rincón del Oriente Antioqueño. Menos clínica blanca fría, más aire puro y tranquilidad para tu animalito.
          </p>
        </div>
      </div>

      {/* Patient Stories Header */}
      <div className="flex flex-col gap-1 pt-2">
        <span className="text-xs uppercase tracking-widest text-[#003622] font-bold">
          Pacientes Célebres
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#003622]">
          Casos Reales con Final Feliz
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'todos', label: 'Todos' },
          { id: 'roedores', label: 'Punky (Cuy)' },
          { id: 'aves', label: 'Ramón (Pato)' },
          { id: 'erizos', label: 'Alma (Eriza)' },
          { id: 'pigs', label: 'Toreto (Mini Pig)' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              filter === f.id
                ? 'bg-[#003622] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredStories.map((st: PatientStory) => (
          <div
            key={st.id}
            className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col justify-between gap-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#003622] text-[20px]">
                    {st.icon}
                  </span>
                  <span className="text-sm font-bold text-[#1a1c1c]">{st.petName}</span>
                </div>
                <span className="text-[10px] bg-[#d9e6da] text-[#003622] px-2.5 py-0.5 rounded-full font-bold">
                  {st.speciesTag}
                </span>
              </div>

              <span className="text-[11px] text-gray-500 font-medium block">
                📍 {st.ownerLocation}
              </span>

              <p className="text-xs text-[#404943] italic leading-relaxed">
                "{st.testimonial}"
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#134e35]">
              <span className="font-semibold">Tratamiento: {st.treatment}</span>
              <span className="material-symbols-outlined text-[16px]">verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
