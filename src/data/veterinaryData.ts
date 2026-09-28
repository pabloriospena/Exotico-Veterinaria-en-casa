export interface SpeciesInfo {
  id: string;
  name: string;
  subtitle: string;
  category: 'roedores' | 'aves' | 'pequeños-mamiferos';
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
    id: 'conejos-roedores',
    name: 'Conejos & Roedores',
    subtitle: 'Cobayos / cuyes (como Punky), hámsters y chinchillas',
    category: 'roedores',
    icon: 'cruelty_free',
    badge: 'Atención especial para presas',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    description: 'Revisión de sacos perineales, corte y limado de incisivos y molares, palpación abdominal por sospecha de estasis digestiva y asesoría de nutrición basada 80% en heno de buena calidad.',
    commonSymptoms: [
      'Dejó de comer heno o balanceado (>6 horas es urgencia)',
      'Heces más pequeñas, unidas por pelo o ausencia de excretas',
      'Dientes sobrecrecidos o rechina el hocico con fuerza',
      'Sacos perineales obstruidos o acumulación de cecotrofos',
      'Inactividad, postura encorvada o chirrido de dolor'
    ],
    procedures: [
      'Limado y corte dental de incisivos y molares con instrumental suave',
      'Higiene de sacos perineales y glándulas marcadoras',
      'Protocolos de rehidratación y motilidad por estasis intestinal',
      'Evaluación de pododermatitis en patas traseras'
    ],
    careTip: 'El heno es el motor de su digestión y desgaste dental. Si un conejo o cuy pasa más de 12 horas sin comer heno, su flora intestinal entra en riesgo grave.'
  },
  {
    id: 'aves-finca',
    name: 'Aves de Finca & Compañía',
    subtitle: 'Periquitos, ninfas, agapornis, gallinas sedosas, Brahma, patos (como Ramón) y gansos',
    category: 'aves',
    icon: 'flutter',
    badge: 'Manejo aviario Fear-Free',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    description: 'Chequeo respiratorio in situ, sexaje aviar por ADN, examen de buche, corte y limado de picos con Dremel, pododermatitis (clumblefoot) y vacunación aviar preventiva.',
    commonSymptoms: [
      'Plumas erizadas y permanece en el piso de la jaula o gallinero',
      'Secreción nasal, estornudos o boqueo al respirar',
      'Buche blando lleno de fluido o duro/impactado',
      'Pico deformado que le impide alimentarse',
      'Pérdida de postura en gallinas o patas hinchadas'
    ],
    procedures: [
      'Corte y limado estético/funcional de picos y uñas con Dremel',
      'Sexaje genético por ADN (pluma o sangre)',
      'Lavado/sondeo de buche e inseminación/evaluación reproductiva',
      'Planes de vacunación aviar (Newcastle, Viruela) en fincas'
    ],
    careTip: 'Las aves enmascaran la enfermedad por instinto. Cuando notas que una ninfa o gallina está embolada o apática, suele llevar días sintiéndose mal.'
  },
  {
    id: 'pequenos-mamiferos',
    name: 'Pequeños Mamíferos & No Convencionales',
    subtitle: 'Erizos africanos (como Alma) y mini pigs (como Toreto)',
    category: 'pequeños-mamiferos',
    icon: 'pets',
    badge: 'Condicionamiento positivo',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    description: 'Desparasitación dirigida, evaluación dermatológica (ácaros/resequedad), recorte de pezuñas con paciencia y refuerzo positivo en su propio corral o recinto campestre.',
    commonSymptoms: [
      'Pérdida excesiva de púas o descamación en la piel (erizos)',
      'Pezuñas sobrecrecidas que causan cojera o dolor al caminar (mini pigs)',
      'Aumento exagerado de peso o problemas de comportamiento',
      'Rascado intenso, costras en orejas o pérdida de apetito'
    ],
    procedures: [
      'Corte técnico de pezuñas en mini pigs con técnica libre de violencia',
      'Examen dermatológico y raspado de piel para ácaros',
      'Planes de nutrición específicos para erizos y cerdos enanos',
      'Revisión cardiopulmonar y temperatura corporal'
    ],
    careTip: 'Para los erizos africanos, el frío del Oriente Antioqueño es un reto: asegúrate de mantener su recinto entre 24°C y 27°C para evitar hibernación patológica.'
  }
];

export const SERVICES_LIST: ServiceInfo[] = [
  {
    id: 'consulta-preventiva',
    title: 'Consulta Preventiva & Valoración en Hábitat',
    shortDesc: 'Nuestro servicio estrella para detectar desbalances a tiempo en tu propio hogar o finca.',
    fullDesc: 'Evaluamos minuciosamente al paciente en su entorno habitual sin provocarle estrés de viaje. Revisamos dieta, recinto, signos vitales, pesaje de precisión y examen clínico completo.',
    icon: 'stethoscope',
    highlights: [
      'Revisión clínica integral de cabeza a cola',
      'Análisis de dieta, humedad, sustrato y temperatura',
      'Pesaje digital sensible gramo a gramo',
      'Recetario y plan de cuidados por escrito'
    ],
    recommendedFor: 'Revisión anual, nuevos integrantes o cambios de comportamiento.'
  },
  {
    id: 'ecografia-portatil',
    title: 'Ecografía Portátil SonoBook 8',
    shortDesc: 'Exploración abdominal y reproductiva in situ sin estrés ni traslados.',
    fullDesc: 'Contamos con ecógrafo portátil de alta resolución SonoBook 8 equipado con sondas microconvexas ideales para conejos, cuyes, aves y animales pequeños.',
    icon: 'monitor_heart',
    highlights: [
      'Diagnóstico de estasis digestiva y cuerpos extraños',
      'Detección de retención de huevos o masas reproductivas',
      'Evaluación renal, hepática y vejiga (cálculos en cuyes)',
      'Entrega de informe ecográfico en video e imágenes HD'
    ],
    recommendedFor: 'Dolor abdominal, sospecha de cálculos, distensión o chequeo gestacional.'
  },
  {
    id: 'odontologia-aviar-roedor',
    title: 'Corte & Limado Técnico con Dremel',
    shortDesc: 'Alineación dental y arreglo seguro de picos, uñas, espolones y pezuñas.',
    fullDesc: 'Uso de micromotores y discos de diamante especiales para rebajar con precisión picos sobrecrecidos en aves y pezuñas en mini pigs o gansos.',
    icon: 'content_cut',
    highlights: [
      'Rebajado dental de incisivos en conejos y cuyes',
      'Corrección de picos cruzados o deformes en ninfas y gallinas',
      'Despuntado de pezuñas en mini pigs en su corral',
      'Sin sedación innecesaria gracias a contención amigable'
    ],
    recommendedFor: 'Dificultad para comer, picos chuecos o pezuñas largas.'
  },
  {
    id: 'terapia-respiratoria',
    title: 'Nebulizaciones & Terapia Respiratoria',
    shortDesc: 'Tratamientos in situ para cuadros pulmonares, sinusales y traqueales.',
    fullDesc: 'Administración directa de mucolíticos, broncodilatadores y antibióticos mediante cámara de nebulización portátil en la comodidad de su jaula o habitáculo.',
    icon: 'air',
    highlights: [
      'Manejo de neumonías y coriza aviar',
      'Sesiones de nebulización amigables',
      'Control de humedad y oxigenación',
      'Prevención de secuelas crónicas'
    ],
    recommendedFor: 'Estornudos, secreción nasal, ruidos al respirar o silbidos.'
  },
  {
    id: 'medicina-poblacional',
    title: 'Medicina Poblacional Aviar & Fincas',
    shortDesc: 'Inspección sanitaria de criaderos, galpones y lotes de aves ornamentales.',
    fullDesc: 'Evaluación técnica sanitaria para fincas con gallinas ponedoras, aves ornamentales o de exhibición. Control epidemiológico y prevención de brotes.',
    icon: 'groups',
    highlights: [
      'Planes de vacunación de lote (Newcastle, Viruela)',
      'Toma de muestras de buche y heces para laboratorio',
      'Asesoría de Bioseguridad y control de parásitos',
      'Desparasitaciones colectivas medidas por peso'
    ],
    recommendedFor: 'Fincas en La Ceja, Rionegro, El Retiro con galpones o aves de corral.'
  },
  {
    id: 'sexaje-adn',
    title: 'Sexaje por ADN & Laboratorio Clínico',
    shortDesc: 'Identificación genético-reproductiva de aves y exámenes complementarios.',
    fullDesc: 'Toma de muestra de plumas o gota de sangre para determinar el sexo genético de aves monomórficas (agapornis, ninfas, loros) con certificado de laboratorio.',
    icon: 'science',
    highlights: [
      'Sexaje 99.9% certero con certificado digital',
      'Coprológicos e identificación de parásitos en heces',
      'Hemogramas y citologías aviarias/mamíferas',
      'Toma de muestra sin dolor'
    ],
    recommendedFor: 'Nuevas aves de cría o confirmación de especie.'
  }
];

export const MUNICIPALITIES: MunicipalityInfo[] = [
  {
    name: 'La Ceja',
    isPrimary: true,
    veredas: ['San José', 'El Salto', 'Llanos de La Ceja', 'La Milagrosa', 'Pantanillo', 'El Tambo', 'Fátima', 'Colmenas', 'Rancho Triste'],
    frequency: 'Ruta Diaria (Sede Base)',
    estimatedArrival: '30 - 45 min'
  },
  {
    name: 'Rionegro',
    isPrimary: true,
    veredas: ['Llanogrande', 'Pontezuela', 'San Antonio de Pereira', 'Cabeceras', 'El Tablazo', 'Abreo', 'Santa Teresa', 'Barro Blanco'],
    frequency: 'Ruta Diaria',
    estimatedArrival: '45 - 60 min'
  },
  {
    name: 'El Retiro',
    isPrimary: true,
    veredas: ['Don Diego', 'Lejos del Nido', 'La María', 'El Borbollón', 'Pantancito', 'Carrizales'],
    frequency: 'Lunes, Miércoles y Viernes',
    estimatedArrival: '45 - 60 min'
  },
  {
    name: 'Marinilla',
    isPrimary: false,
    veredas: ['Belén', 'Cascajo', 'La Esmeralda', 'El Socorro', 'Chochoco'],
    frequency: 'Martes, Jueves y Sábados',
    estimatedArrival: '50 - 70 min'
  },
  {
    name: 'El Carmen de Viboral',
    isPrimary: false,
    veredas: ['La Chapa', 'Campo Alegre', 'Rivera', 'El Canadá'],
    frequency: 'Martes, Jueves y Sábados',
    estimatedArrival: '45 - 65 min'
  },
  {
    name: 'Guarne',
    isPrimary: false,
    veredas: ['San Isidro', 'Brazuela', 'La Clara', 'Bermejal'],
    frequency: 'Programación Semanal',
    estimatedArrival: '60 - 80 min'
  },
  {
    name: 'La Unión',
    isPrimary: false,
    veredas: ['Chuscalito', 'San Juan', 'La Madera'],
    frequency: 'Programación Semanal',
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
    icon: 'cruelty_free',
    testimonial: 'Dejó de comer de un día para otro y estaba muy decaído. La doctora vino a nuestra finca en La Ceja, le detectó sobrecrecimiento en molares traseros con otoscopio y limpió sus sacos perineales. Esa misma noche volvió a masticar su heno feliz.',
    treatment: 'Limado molar suave, higiene perineal y terapia de motilidad'
  },
  {
    id: 'ramon',
    petName: 'Ramón el pato',
    ownerLocation: 'Rionegro (Llanogrande)',
    speciesTag: 'Pato de Finca',
    icon: 'flutter',
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
    icon: 'sound_detection_dog_barking',
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
