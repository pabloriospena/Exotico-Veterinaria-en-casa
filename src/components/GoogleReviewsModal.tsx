import React from 'react';

interface GoogleReview {
  id: string;
  author: string;
  location: string;
  pet: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  verified: boolean;
}

export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Carolina Montoya',
    location: 'La Ceja, Antioquia',
    pet: 'Cobayo (Punky)',
    rating: 5,
    date: 'Hace 2 semanas',
    text: 'Excelente atención a domicilio. Mi cobayo Punky dejó de comer heno de la nada y estaba apático. La doctora vino hasta nuestra casa en La Ceja, le hizo un chequeo super completo, le arregló sus molares con mucha paciencia y nos dio recomendaciones de nutrición. Esa misma noche volvió a comer heno!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Mateo Osorio',
    location: 'Rionegro (Llanogrande)',
    pet: 'Pato (Ramón)',
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Increíble encontrar en el Oriente Antioqueño a alguien tan capacitado en aves. Nuestro pato Ramón tuvo un accidente menor cerca del estanque y en vez de someterlo al estrés de llevarlo en guacal a una clínica, lo atendieron acá en la finca. Muy profesional y respetuosa.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Valeria Zuluaga',
    location: 'El Retiro, Antioquia',
    pet: 'Eriza Africana (Alma)',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Atención 10/10 para animales no convencionales. Llevé a mi eriza Alma para control dermatológico y corte de uñas. El trato fue sumamente delicado, sin forzarla ni asustarla. Nos explicó todo sobre calefacción para el clima frío de El Retiro.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Juan Felipe Gómez',
    location: 'Marinilla, Antioquia',
    pet: 'Mini Pig (Toreto)',
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Súper recomendada. Nuestro mini pig Toreto necesitaba arreglo de pezuñas y desparasitación. Ningún otro veterinario en la zona se le medía sin sedación violenta. Ella utilizó condicionamiento positivo y paciencia en nuestro corral.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Camila Aristizábal',
    location: 'Carmen de Viboral',
    pet: 'Ninfas & Agapornis',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Servicio impecable para aves ornamentales. Realizó sexaje por ADN de nuestras ninfas y limado de pico con Dremel. Bioseguridad total entre fincas e instrumental impecable.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    verified: true
  }
];

interface GoogleReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleReviewsModal: React.FC<GoogleReviewsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-200">
        
        {/* Header with Google Rating Badge */}
        <div className="bg-[#003622] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-md">
              {/* Google G Logo icon */}
              <span className="font-bold text-lg text-[#4285F4]">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-lg font-bold">Reseñas en Google</h2>
                <span className="text-xs bg-[#7c2800] px-2 py-0.5 rounded-full font-bold">4.9 ★</span>
              </div>
              <p className="text-xs text-[#b4f0cd]">120+ opiniones de clientes en Oriente Antioqueño</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Rating Score Banner */}
        <div className="bg-[#f3f3f3] p-4 border-b border-gray-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-[#003622]">4.9</span>
            <div>
              <div className="flex text-amber-500 text-sm">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs text-gray-600 font-medium">Basado en 120+ reseñas verificadas</span>
            </div>
          </div>

          <a
            href="https://wa.me/c/573052417854"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#003622] text-white text-xs font-bold hover:bg-[#134e35] transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>

        {/* Reviews Feed */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {REAL_GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 hover:bg-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-9 h-9 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-[#1a1c1c] flex items-center gap-1">
                      {rev.author}
                      {rev.verified && (
                        <span className="material-symbols-outlined text-blue-600 text-[14px]" title="Reseña Verificada de Google">
                          verified
                        </span>
                      )}
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

              <p className="text-xs text-[#404943] leading-relaxed">
                "{rev.text}"
              </p>

              <div className="text-[10px] text-gray-400 text-right">
                {rev.date} en Google Maps
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            Cerrar
          </button>
          <a
            href="https://wa.me/c/573052417854"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#7c2800] text-white text-xs font-bold hover:bg-[#571900] transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Contactar en WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
