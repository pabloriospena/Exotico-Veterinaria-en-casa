export interface SpeciesInfo {
  id: string;
  name: string;
  subtitle: string;
  category: 'pequeños-mamiferos' | 'roedores' | 'aves-compania' | 'aves-finca' | 'exoticos' | 'minipigs';
  icon: string;
  image: string;
  badge: string;
  description: string;
  commonSymptoms: string[];
  procedures: string[];
  careTip: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  highlights: string[];
  priceEst?: string;
  recommendedFor: string;
}

export interface MunicipalityInfo {
  name: string;
  isPrimary: boolean;
  veredas: string[];
  frequency: string;
  estimatedArrival: string;
}

export interface PatientStory {
  id: string;
  petName: string;
  ownerLocation: string;
  speciesTag: string;
  icon: string;
  testimonial: string;
  image?: string;
  treatment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'preparacion' | 'pagos' | 'bioseguridad' | 'urgencias';
}

export const SPECIES_LIST: SpeciesInfo[] = [
  {
    id: 'conejos',
    name: 'Conejos',
    subtitle: 'Lagomorfos / Pequeños Mamíferos',
    category: 'pequeños-mamiferos',
    icon: 'cruelty_free',
    badge: 'Atención & Medicina Preventiva',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    description: 'Atención médica general especializada para conejos domésticos. Examen físico completo, valoración de condición corporal, asesoría en nutrición equilibrada y prevención digestiva en su hogar.',
    commonSymptoms: [
      'Inapetencia o cambios en la ingesta de alimentos',
      'Cambio en el tamaño o consistencia de heces',
      'Posturas de incomodidad o baja actividad',
      'Revisión preventiva de rutinas de salud'
    ],
    procedures: [],
    careTip: 'El heno constante es fundamental para la salud digestiva y dental de tu conejo. Una revisión preventiva periódica asegura su bienestar integral.'
  },
  {
    id: 'roedores',
    name: 'Roedores',
    subtitle: 'Cobayos (Cuyes), Hámsters, Chinchillas y Ratas',
    category: 'roedores',
    icon: 'pets',
    badge: 'Consulta & Salud Digestiva',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    description: 'Medicina general especializada para cobayos (cuyes), hámsters, chinchillas y ratas. Evaluación clínica integral, asesoría nutricional, prevención digestiva y orientación para su cuidado diario.',
    commonSymptoms: [
      'Disminución del apetito o ingesta de alimento fresco',
      'Salivación o humedad recurrente alrededor de la boca',
      'Cambios de conducta o menor interacción',
      'Monitoreo general de peso y condición física'
    ],
    procedures: [],
    careTip: 'Los cobayos requieren aporte diario de vitamina C fresca en su alimentación. La prevención es la mejor herramienta para mantenerlos sanos.'
  },
  {
    id: 'aves-compania',
    name: 'Aves de Compañía',
    subtitle: 'Ninfas, Agapornis, Periquitos, Loros, Canarios y Cacatúas',
    category: 'aves-compania',
    icon: 'flutter',
    badge: 'Medicina & Bienestar Aviar',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    description: 'Medicina general especializada para aves de compañía. Chequeo preventivo de plumaje, examen físico general, asesoría en nutrición equilibrada y orientación en enriquecimiento ambiental.',
    commonSymptoms: [
      'Plumas erizadas o postura decaída',
      'Cambios en la vocalización o actividad normal',
      'Dificultad o esfuerzo inusual al alimentarse',
      'Evaluación médica general y sexaje'
    ],
    procedures: [],
    careTip: 'Las aves suelen disimular signos iniciales de malestar. Ante cualquier cambio de comportamiento, una valoración oportuna es clave.'
  },
  {
    id: 'aves-finca',
    name: 'Aves de Finca & Corral',
    subtitle: 'Gallinas Ornamentales, Patos, Gansos y Pavos',
    category: 'aves-finca',
    icon: 'egg',
    badge: 'Salud de Población & Corral',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    description: 'Atención médica veterinaria en finca para gallinas ornamentales, patos y gansos. Orientación en salud poblacional, nutrición, manejo sanitario y bienestar general.',
    commonSymptoms: [
      'Cojeras o molestias al caminar en corral',
      'Dificultad o molestia en la postura',
      'Cambios en el plumaje o aspecto general',
      'Inapetencia o aislamiento del resto del grupo'
    ],
    procedures: [],
    careTip: 'Mantener un suelo seco y limpio en corrales ayuda a conservar la salud de las patas y previene molestias infecciosas.'
  },
  {
    id: 'exoticos',
    name: 'Exóticos',
    subtitle: 'Erizos Africanos, Hurones y Pequeños Mamíferos Exóticos',
    category: 'exoticos',
    icon: 'shield_with_heart',
    badge: 'Atención Médica Especializada',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    description: 'Medicina general especializada para erizos africanos, hurones y pequeños mamíferos exóticos. Examen físico detallado, evaluación de piel, nutrición específica y recomendaciones de ambiente.',
    commonSymptoms: [
      'Cambios en el manto o piel (púas o pelaje)',
      'Apatía o menor movilidad en su hábitat',
      'Variaciones en hábitos alimenticios o ingesta de agua',
      'Chequeo médico de rutina'
    ],
    procedures: [],
    careTip: 'Los erizos africanos necesitan mantener un ambiente cálido constante para prevenir estados de aletargamiento en zonas frías.'
  },
  {
    id: 'minipigs',
    name: 'Minipigs',
    subtitle: 'Mini Pigs de Finca & Hogar',
    category: 'minipigs',
    icon: 'pig',
    badge: 'Manejo Integral & Bienestar',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    description: 'Atención médica y manejo respetuoso para cerdos enanos en finca y hogar. Evaluación general de salud, condición corporal, asesoría en nutrición, vacunación y convivencia armónica en su entorno.',
    commonSymptoms: [
      'Cambios en la marcha o postura al levantarse',
      'Molestias en la piel o rascado habitual',
      'Sensibilidad al tacto o cambios de ánimo',
      'Valoración médica de rutina en su espacio'
    ],
    procedures: [],
    careTip: 'Un entorno adecuado y una nutrición balanceada son esenciales para mantener una buena condición corporal y salud articular en minipigs.'
  }
];

export const SERVICES_LIST: ServiceInfo[] = [
  {
    id: 'consulta-preventiva',
    title: 'Consulta Preventiva y Chequeo de Hábitat',
    shortDesc: 'Valoración médica integral de bienestar, nutrición adecuada, enriquecimiento ambiental y manejo de estrés sin traslados.',
    fullDesc: 'Evaluamos minuciosamente al paciente en su entorno habitual sin provocarle estrés de viaje. Revisamos dieta, recinto, signos vitales, pesaje de precisión y examen clínico completo.',
    icon: 'consulta-preventiva',
    highlights: [
      'Revisión clínica integral',
      'Análisis de dieta',
      'Pesaje',
      'Recetario y plan de cuidados'
    ],
    recommendedFor: 'Revisión anual, nuevos integrantes o cambios de comportamiento.'
  },
  {
    id: 'sueroterapia-homeopatica',
    title: 'Sueroterapia Homeopática',
    shortDesc: 'Fluidoterapia y rehidratación con terapias biorreguladoras para desintoxicación celular, recuperación y soporte inmunológico.',
    fullDesc: 'Aplicación de sueros y soluciones de rehidratación enriquecidas con medicamentos homeopáticos biorreguladores. Promueve la desintoxicación, estimula el sistema inmune, alivia la inflamación y favorece la rápida recuperación sin sobrecargar sus órganos.',
    icon: 'sueroterapia-homeopatica',
    highlights: [
      'Rehidratación in situ sin estrés de hospitalización',
      'Medicamentos homeopáticos biorreguladores sin efectos secundarios',
      'Estimulación del sistema inmunológico',
      'Manejo antizootóxico integral'
    ],
    recommendedFor: 'Mascotas deshidratadas, inapetentes, en recuperación o con procesos crónicos.'
  },
  {
    id: 'terapia-respiratoria',
    title: 'Nebulizaciones y Terapias Respiratorias',
    shortDesc: 'Tratamientos inhalados para afecciones respiratorias en exóticos y mascotas no convencionales.',
    fullDesc: 'Administración directa de medicamentos inhalados mediante nebulizador portátil adaptado en la comodidad de su espacio.',
    icon: 'terapia-respiratoria',
    highlights: [
      'Manejo de afecciones respiratorias y coriza aviar',
      'Sesiones de nebulización amigables con cámara adaptada',
      'Prevención de secuelas crónicas'
    ],
    recommendedFor: 'Estornudos, secreción nasal, ruidos al respirar o silbidos.'
  },
  {
    id: 'medicina-poblacional',
    title: 'Medicina Poblacional Para Aves Ornamentales',
    shortDesc: 'Manejo sanitario integral, planes de bioseguridad, control de brotes y nutrición para aves ornamentales en el Oriente Antioqueño.',
    fullDesc: 'Asesoría de manejo para fincas con aves de corral y ornamentales.',
    icon: 'medicina-poblacional',
    highlights: [
      'Vacunación',
      'Toma de muestras',
      'Asesoría en nutrición y manejo',
      'Desparasitaciones'
    ],
    recommendedFor: 'Fincas en La Ceja, Rionegro, El Retiro con aves de corral.'
  },
  {
    id: 'toma-muestras',
    title: 'Toma de Muestras & Pruebas Diagnósticas',
    shortDesc: 'Exámenes complementarios y análisis de laboratorio a domicilio.',
    fullDesc: 'Obtención cuidadosa de muestras en la comodidad de tu hogar o finca (coprológicos, raspados y perfiles sanguíneos), procesados en laboratorios especializados e imagenología.',
    icon: 'toma-muestras',
    highlights: [
      'Ecografía y Radiografía',
      'Análisis coprológicos',
      'Perfiles sanguíneos y citologías veterinarias',
      'Toma de muestras profesional con manejo respetuoso'
    ],
    recommendedFor: 'Evaluación preventiva de salud, diagnóstico preciso o sexaje de aves.'
  }
];

export const MUNICIPALITIES: MunicipalityInfo[] = [
  {
    name: 'La Ceja',
    isPrimary: true,
    veredas: ['San José', 'El Salto', 'Llanos de La Ceja', 'La Milagrosa', 'Pantanillo', 'El Tambo', 'Fátima', 'Colmenas', 'Rancho Triste'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '30 - 45 min'
  },
  {
    name: 'Rionegro',
    isPrimary: true,
    veredas: ['Llanogrande', 'Pontezuela', 'San Antonio de Pereira', 'Cabeceras', 'El Tablazo', 'Abreo', 'Santa Teresa', 'Barro Blanco'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '45 - 60 min'
  },
  {
    name: 'El Retiro',
    isPrimary: true,
    veredas: ['Don Diego', 'Lejos del Nido', 'La María', 'El Borbollón', 'Pantancito', 'Carrizales'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '45 - 60 min'
  },
  {
    name: 'Marinilla',
    isPrimary: false,
    veredas: ['Belén', 'Cascajo', 'La Esmeralda', 'El Socorro', 'Chochoco'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '50 - 70 min'
  },
  {
    name: 'El Carmen de Viboral',
    isPrimary: false,
    veredas: ['La Chapa', 'Campo Alegre', 'Rivera', 'El Canadá'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '45 - 65 min'
  },
  {
    name: 'Guarne',
    isPrimary: false,
    veredas: ['San Isidro', 'Brazuela', 'La Clara', 'Bermejal'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '60 - 80 min'
  },
  {
    name: 'La Unión',
    isPrimary: false,
    veredas: ['Chuscalito', 'San Juan', 'La Madera'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '45 - 60 min'
  },
  {
    name: 'El Santuario',
    isPrimary: false,
    veredas: ['Vargas', 'Las Hojas', 'El Carmelo'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '60 - 90 min'
  },
  {
    name: 'San Vicente Ferrer',
    isPrimary: false,
    veredas: ['Corrientes', 'Chaparral'],
    frequency: 'Programación Bajo Agenda',
    estimatedArrival: '70 - 90 min'
  }
];

export const PATIENT_STORIES: PatientStory[] = [
  {
    id: 'punky',
    petName: 'Punky el cobayo',
    ownerLocation: 'La Ceja, Antioquia',
    speciesTag: 'Cuy / Cobayo',
    icon: 'pets',
    testimonial: 'Dejó de comer de un día para otro y estaba muy decaído. La doctora vino a nuestra finca en La Ceja, le detectó sobrecrecimiento en molares traseros con otoscopio y limpió sus sacos perineales. Esa misma noche volvió a masticar su heno feliz.',
    treatment: 'Limado molar suave, higiene perineal y terapia de motilidad'
  },
  {
    id: 'ramon',
    petName: 'Ramón el pato',
    ownerLocation: 'Rionegro (Llanogrande)',
    speciesTag: 'Pato de Finca',
    icon: 'egg',
    testimonial: 'Sufrió una herida menor en el ala cerca al estanque. Desinfección, curación y manejo del dolor directo en su corral en Rionegro sin tener que meterlo a un huacal estresante por carretera.',
    treatment: 'Curación de herida aviaria, antibiótico depot y analgesia'
  },
  {
    id: 'alma',
    petName: 'Alma la eriza',
    ownerLocation: 'El Retiro, Antioquia',
    speciesTag: 'Eriza Africana',
    icon: 'pets',
    testimonial: 'Chequeo dermatológico completo para descartar ácaros y control de peso en El Retiro con una delicadeza única. Cero estrés para ella y consejos clave de calefacción para el clima frío de nuestra zona.',
    treatment: 'Tratamiento antiparasitario cutáneo y termorregulación'
  },
  {
    id: 'toreto',
    petName: 'Toreto el mini pig',
    ownerLocation: 'Marinilla, Antioquia',
    speciesTag: 'Mini Pig',
    icon: 'agriculture',
    testimonial: 'Recorte de pezuñas y plan antiparasitario con muchísima paciencia y refuerzo positivo en nuestra finca. Ningún otro veterinario se había tomado el tiempo de entender su conducta sin asustarlo.',
    treatment: 'Pedicura técnica con Dremel, desparasitación e inspección física'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo preparo a mi mascota para la visita a domicilio?',
    answer: 'No limpies la jaula, corral o recinto el mismo día de la visita: observar la acumulación de excretas y el estado normal de su sustrato es fundamental para el diagnóstico. Mantén una habitación o zona tranquila sin corrientes de aire ni perros o gatos cerca.',
    category: 'preparacion'
  },
  {
    id: 'faq-2',
    question: '¿Qué métodos de pago reciben?',
    answer: 'Aceptamos transferencias bancarias (Bancolombia, Davivienda), Nequi, Daviplata, datáfono móvil para tarjetas de crédito/débito y efectivo al finalizar la consulta médica.',
    category: 'pagos'
  },
  {
    id: 'faq-3',
    question: '¿Qué protocolos de bioseguridad manejan entre visitas?',
    answer: 'Cada paciente cuenta con material médico estéril o desinfectado en frío con viricidas de grado veterinario (F10 / Amonio de 5ta generación). El especialista utiliza bata limpia de cambio, guantes de nitrilo específicos y campos de exploración limpios para evitar cualquier contaminación cruzada entre fincas.',
    category: 'bioseguridad'
  },
  {
    id: 'faq-4',
    question: '¿Qué pasa si mi mascota necesita una cirugía urgente o rayos X?',
    answer: 'Si el diagnóstico indica necesidad quirúrgica, radiografía especializada o internamiento hospitalario, gestionamos de inmediato la derivación y transporte asistido a nuestros quirófanos aliados equipados con monitorización multiparámetro y anestesia inhalatoria con isoflurano/sevoflurano.',
    category: 'urgencias'
  },
  {
    id: 'faq-5',
    question: '¿Atienden urgencias en horario nocturno?',
    answer: 'Atendemos visitas programadas de Lunes a Sábado de 8:00 AM a 6:00 PM. Para emergencias fuera de horario, brindamos orientación de triaje previa vía WhatsApp para determinar si se requiere traslado inmediato a centro de urgencias 24h aliado.',
    category: 'urgencias'
  }
];
