import React, { useState, useEffect } from 'react';

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
    author: 'Mary Luz García',
    location: 'La Ceja, Antioquia',
    pet: 'Erizo',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'La doctora trató muy bien a mi erizo, fue muy clara en el diagnóstico como en el tratamiento y todas las indicaciones. Es una persona que se ve que tiene mucho conocimiento con este tipo de animalitos.',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Erika Patiño',
    location: 'Oriente Antioqueño',
    pet: 'Mascota a Domicilio',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Muy buen servicio y la veterinaria muy tierna con las mascotas. Calidad humana y excelente profesional en cada consulta a domicilio.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Daniela Gonzalez',
    location: 'Oriente Antioqueño',
    pet: 'Gallinas de Corral',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Súper recomendada! La doctora María del Mar vino a casa para la primera consulta de todas mis gallinas y la experiencia fue buena. Es una profesional muy amable, diligente y con un trato tan cuidadoso que mis gallinas estuvieron tranquilas y a gusto durante toda la revisión. Además, se tomó el tiempo de enseñarnos y darnos excelentes recomendaciones para su cuidado. Muchas gracias por tu gran labor!!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Juan Pablo Martinez Bohorquez',
    location: 'Local Guide',
    pet: 'Gallinas, Conejos, Patos & Perros',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'He encontrado en "Exótico - Veterinaria Mascotas Exóticas" a las personas idóneas en las cuales puedo depositar la vida de mis animales de granja: la población de gallinas, conejos, patos y perros. No solo valoramos la pronta atención, sino que su conocimiento y calidez humana marcan toda la diferencia.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Helen Guadalupe Ramirez Ciro',
    location: 'Rionegro, Antioquia',
    pet: 'Hámster',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Una experiencia maravillosa para mí y mi hámster, ¡una calidad humana inmensa y un amor por los animales muy notorio! Es una veterinaria asombrosa, muy paciente y con una forma de ser muy tierna aparte de que su manera de explicar es muy fácil.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Juliana Valencia',
    location: 'La Ceja, Antioquia',
    pet: 'Mascota Exótica',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Nuestra experiencia con la doc, como le decimos de cariño, ha sido hermosa y muy acertada. Es una profesional en todo el ámbito, es cariñosa con nuestras mascotas, empática, tiene experiencia, una comunicación muy clara y nos ha guiado en todo momento.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-7',
    author: 'Jeniffer Ocerin',
    location: 'Carmen de Viboral',
    pet: 'Gallinas & Aves',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Una experiencia excelente. Es muy difícil encontrar veterinarios con experiencia en aves de corral y animales exóticos, y este equipo superó todas mis expectativas. Atendieron a mis gallinas en casa con muchísimo profesionalismo y dedicación.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-8',
    author: 'Samantha',
    location: 'El Retiro, Antioquia',
    pet: 'Mascota Exótica',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Esta veterinaria es excelente y súper recomendable. Me ha ayudado muchísimo con mis mascotas cada vez que lo he necesitado. Me alegra mucho que todavía existan personas con un amor tan grande por los animalitos 🫶🏽.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-9',
    author: 'María M. Orcasita Caballero',
    location: 'La Ceja, Antioquia',
    pet: 'Yoyi',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Ella es la mejor, siempre me atiende muy bien a mi Yoyi y me enseña cómo mejorar los cuidados.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-10',
    author: 'Dayana Rosales',
    location: 'La Ceja, Antioquia',
    pet: 'Mascota a Domicilio',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'La mejor doctora: paciente, dispuesta, humana, dedicada, comprometida y atenta todo el tiempo a sus pacientes. Siempre disponible, nos guía y explica con claridad. Esperamos siempre seguir contando con su ayuda.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-11',
    author: 'Director Cyber War',
    location: 'El Retiro, Antioquia',
    pet: 'Conejo (Charlie)',
    rating: 5,
    date: 'Hace 3 meses',
    text: '¡Absolutamente increíble! ¡La doctora veterinaria María es un regalo de los dioses! Su profesionalismo, atención al detalle y conocimiento médico de nuestro conejo familiar Charlie. Precisión quirúrgica al más alto nivel.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-12',
    author: 'Isabel Medina',
    location: 'Llanogrande, Antioquia',
    pet: 'Patos',
    rating: 5,
    date: 'Hace 3 meses',
    text: '¡Les recomiendo mucho a Exótico! La Dra. María del Mar es excelente, muy acertada en sus diagnósticos y tratamientos, tiene respuesta rápida y buena disponibilidad. Aparte es muy amable; ha atendido a mis patos y siempre nos ha ido muy bien.',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-13',
    author: 'Sebastian Arenas Ocampo',
    location: 'Rionegro, Antioquia',
    pet: 'Exóticos',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'Una muy buena atención, disposición y ayuda profesional, junto a una muy linda actitud de parte de la veterinaria y la auxiliar.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-14',
    author: 'M G',
    location: 'Local Guide',
    pet: 'Conejo 🐇',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'La doc María es lo mejor... delicada, dedicada, te entrega su tiempo y su conocimiento. Excelente persona y profesional 🐇.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-15',
    author: 'Sofía Carmona Ceballos',
    location: 'Rionegro, Antioquia',
    pet: 'Coneja',
    rating: 5,
    date: 'Hace 4 meses',
    text: 'La doctora es muy amable, brinda un servicio de calidad, y es muy buena explicando lo que debemos hacer como cuidadores para el bienestar de nuestras mascotas. Desde que la encontré, solo con ella encargo la salud y bienestar de mi coneja 🤍🫧.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-16',
    author: 'Jenny Molano Pineda',
    location: 'Rionegro, Antioquia',
    pet: 'Conejita',
    rating: 5,
    date: 'Hace 5 meses',
    text: 'Me encanta la atención y paciencia con la que revisó a mi conejita, me parece muy buena la asesoría y el acompañamiento para hacer seguimiento y resolver dudas durante todo el proceso. El tratamiento es muy completo y lo mejor de la revisión.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-17',
    author: 'Nataly Bustamante',
    location: 'Marinilla, Antioquia',
    pet: 'Conejita',
    rating: 5,
    date: 'Hace 6 meses',
    text: 'Recurrimos a la doctora María del Mar porque una de nuestras conejitas recibió una herida grave. La herida era bastante profunda y de mucha dificultad, sin embargo, su intervención quirúrgica y cuidados la salvaron por completo.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-18',
    author: 'Yurany López Orozco',
    location: 'Guarne, Antioquia',
    pet: 'Paciente (Milú)',
    rating: 5,
    date: 'Hace 6 meses',
    text: 'Quiero expresar mi agradecimiento a la veterinaria María Del Mar por el amor, la paciencia y el cuidado con el que atendió a Milú. Su profesionalismo y cariño por los animales se nota en cada detalle; hoy Milú está contenta comiendo y brincando por toda la casa.',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-19',
    author: 'Paula Pulgarin',
    location: 'Rionegro, Antioquia',
    pet: 'Conejín',
    rating: 5,
    date: 'Hace 8 meses',
    text: 'Excelente servicio, profesional y cálido con nuestras mascotas. Nuestro conejín fue el más consentido, tuvimos un diagnóstico y tratamiento acertado. ¡Mil gracias!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    verified: true
  },
  {
    id: 'rev-20',
    author: 'Jorge Aguirre C.',
    location: 'Local Guide',
    pet: 'Conejito (Koffy)',
    rating: 5,
    date: 'Hace 1 año',
    text: 'Cuando mi conejito Koffy se sintió mal, contacté a la doctora María del Mar quien vino prontamente y, con toda la calma del caso, lo examinó con esa delicadeza y amor que la caracteriza; recabó toda la información de sus síntomas e historia médica.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
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
  const [reviewsList, setReviewsList] = useState<GoogleReview[]>(REAL_GOOGLE_REVIEWS);
  const [overallRating, setOverallRating] = useState<number>(5.0);
  const [reviewsCount, setReviewsCount] = useState<number>(56);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      fetch('/api/google-reviews')
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'OK' && data.reviews && data.reviews.length > 0) {
            setOverallRating(data.rating || 5.0);
            setReviewsCount(data.user_ratings_total || 56);
            const dynamicReviews: GoogleReview[] = data.reviews.map((r: any, idx: number) => ({
              id: `api-rev-${idx}`,
              author: r.author_name || 'Cliente de Google',
              location: 'Google Maps',
              pet: 'Paciente Verificado',
              rating: r.rating || 5,
              date: r.relative_time_description || 'Hace poco',
              text: r.text || '',
              avatar: r.profile_photo_url || 'https://lh3.googleusercontent.com/a/default-user',
              verified: true,
            }));
            setReviewsList(dynamicReviews);
          }
        })
        .catch((err) => {
          console.warn('Google Places API call fallback to static dataset:', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isOpen]);

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
                <span className="text-xs bg-[#7c2800] px-2 py-0.5 rounded-full font-bold">{overallRating.toFixed(1)} ★</span>
              </div>
              <p className="text-xs text-[#b4f0cd]">{reviewsCount}+ opiniones en Google Maps (En Vivo)</p>
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
            <span className="text-3xl font-black text-[#003622]">{overallRating.toFixed(1)}</span>
            <div>
              <div className="flex text-amber-500 text-sm">
                {'★'.repeat(Math.round(overallRating))}
              </div>
              <span className="text-xs text-gray-600 font-medium">Basado en {reviewsCount} reseñas verificadas</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://maps.app.goo.gl/prjgBchypa6JDMqG7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-white border border-gray-300 text-[#003622] text-xs font-bold hover:bg-gray-100 transition-colors flex items-center gap-1 shadow-sm"
            >
              <span className="material-symbols-outlined text-red-600 text-[16px]">location_on</span>
              <span className="hidden sm:inline">Perfil</span> Google Maps
            </a>
            <a
              href="https://wa.me/c/573052417854"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-[#003622] text-white text-xs font-bold hover:bg-[#134e35] transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Reviews Feed */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {isLoading && (
            <div className="p-4 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
              <span>Cargando reseñas directamente desde Google...</span>
            </div>
          )}
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 hover:bg-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#003622] text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm shrink-0">
                    {rev.author.charAt(0)}
                  </div>
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
