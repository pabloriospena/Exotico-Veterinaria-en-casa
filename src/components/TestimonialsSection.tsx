import React, { useState, useEffect } from 'react';
import { REAL_GOOGLE_REVIEWS } from './GoogleReviewsModal';

interface TestimonialsSectionProps {
  onOpenReviewsModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenReviewsModal,
}) => {
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

  // Show top real Google reviews in a clean card preview
  const featuredReviews = REAL_GOOGLE_REVIEWS.slice(0, 4);

  return (
    <section id="reseñas" className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#003622] font-bold">
              Reputación Verificada
            </span>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              {rating.toFixed(1)} ★★★★★
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003622]">
            Reseñas de Google
          </h2>
          <p className="text-xs md:text-sm text-[#404943]">
            Opiniones de familias de La Ceja, Rionegro, El Retiro y Oriente Antioqueño.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenReviewsModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 text-[#003622] font-bold text-xs shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-amber-500 font-bold">{rating.toFixed(1)} ★</span>
            <span>Ver más reseñas</span>
          </button>
          <a
            href="https://maps.app.goo.gl/prjgBchypa6JDMqG7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-[#003622] text-white font-bold text-xs shadow-sm hover:bg-[#134e35] transition-colors"
            title="Abrir en Google Maps"
          >
            <span className="material-symbols-outlined text-red-400 text-[16px]">location_on</span>
            <span>Google Maps</span>
          </a>
        </div>
      </div>

      {/* Featured Google Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col justify-between gap-3 hover:border-gray-200 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#003622] text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm shrink-0">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1a1c1c] flex items-center gap-1">
                      {rev.author}
                      <span className="material-symbols-outlined text-blue-600 text-[14px]" title="Reseña Verificada de Google">
                        verified
                      </span>
                    </h3>
                    <span className="text-[11px] text-gray-500">
                      📍 {rev.location} · <strong className="text-[#003622]">{rev.pet}</strong>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  {'★'.repeat(rev.rating)}
                </div>
              </div>

              <p className="text-xs text-[#404943] leading-relaxed italic">
                "{rev.text}"
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span>{rev.date} en Google</span>
              <a
                href="https://maps.app.goo.gl/prjgBchypa6JDMqG7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003622] font-semibold hover:underline flex items-center gap-0.5"
              >
                <span>Google Maps</span>
                <span className="material-symbols-outlined text-[12px]">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
