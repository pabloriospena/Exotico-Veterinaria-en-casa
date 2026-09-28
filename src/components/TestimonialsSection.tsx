import React, { useState, useEffect } from 'react';
import { PATIENT_STORIES, PatientStory } from '../data/veterinaryData';

interface TestimonialsSectionProps {
  onOpenReviewsModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenReviewsModal,
}) => {
  const [filter, setFilter] = useState<string>('todos');
  const [rating, setRating] = useState<number>(5.0);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'OK' && data.rating) {
          setRating(data.rating);
        }
      })
      .catch(() => { });
  }, []);

  const filteredStories = PATIENT_STORIES.filter((st) => {
    if (filter === 'todos') return true;
    if (filter === 'roedores' && st.id === 'punky') return true;
    if (filter === 'aves' && st.id === 'ramon') return true;
    if (filter === 'erizos' && st.id === 'alma') return true;
    if (filter === 'pigs' && st.id === 'toreto') return true;
    return false;
  });

  return (
    <section id="reseñas" className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto">

      {/* Patient Stories Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-[#003622] font-bold">
            Reseñas & Opiniones
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003622]">
            Casos Reales con Final Feliz
          </h2>
        </div>

        <button
          onClick={onOpenReviewsModal}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-[#003622] font-bold text-xs shadow-sm hover:bg-gray-50 transition-colors"
        >
          <span className="text-amber-500 font-bold">{rating.toFixed(1)} ★</span>
          <span>Ver Reseñas Google</span>
        </button>
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
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${filter === f.id
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
              <span className="text-amber-500 font-bold">5.0 ★</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
