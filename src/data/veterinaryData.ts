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
    badge: 'Manejo Fear-Free para Presas',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    description: 'Atención especializada en conejos domésticos. Revisión de dentición (incisivos/molares), palpación abdominal por estasis digestiva, limpieza de glándulas y prevención de pododermatitis.',
    commonSymptoms: [
      'Dejó de comer heno (>6 horas es urgencia)',
      'Heces pequeñas, duras, unidas con pelo o ausentes',
      'Rechina los dientes con dolor o postura encorvada',
      'Sacos perineales sucios o cecotrofos pegados'
    ],
    procedures: [
      'Limado y desgaste de incisivos y molares con Dremel',
      'Protocolos de rehidratación y motilidad digestiva',
      'Cuidado dermatológico y corte seguro de uñas',
      'Asesoría nutricional basada 80% en heno'
    ],
    careTip: 'El heno es el motor de su digestión y desgaste dental continuo. Si un conejo pasa más de 12 horas sin comer heno, su flora cecal entra en riesgo grave.'
  },
  {
    id: 'roedores',
    name: 'Roedores',
    subtitle: 'Cobayos (Cuyes como Punky), Hámsters, Chinchillas y Ratas',
    category: 'roedores',
    icon: 'pets',
    badge: 'Cuidado Odontológico & Digestivo',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    description: 'Evaluación de cobayos (cuyes), hámsters, chinchillas y ratas domésticas. Detección de sobrecrecimiento molar, cálculos vesicales, deficiencia de vitamina C (en cobayos) y respiración agitada.',
    commonSymptoms: [
      'Dejó de comer o masticar balanceado/fresco',
      'Salivación excesiva o babero mojado (problema dental)',
      'Dificultad para orinar o sangre en la orina (cobayos)',
      'Ruidos respiratorios, estornudos o apatía'
    ],
    procedures: [
      'Higiene perineal y desobstrucción de sacos en cuyes',
      'Corte y alineación técnica molar/incisiva',
      'Suplementación clínica de Vitamina C y fluidoterapia',
      'Evaluación clínica de vejiga y tracto urinario'
    ],
    careTip: 'Los cobayos (cuyes) no sintetizan vitamina C por sí mismos. Necesitan aporte diario en su dieta fresca o suplementación recomendada por el especialista.'
  },
  {
    id: 'aves-compania',
    name: 'Aves de Compañía',
    subtitle: 'Ninfas, Agapornis, Periquitos, Loros, Canarios y Cacatúas',
    category: 'aves-compania',
    icon: 'flutter',
    badge: 'Sexaje ADN & Medicina Aviar',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
    description: 'Medicina preventiva y curativa para psitácidos y passeriformes en el hogar. Arreglo funcional de picos, sexaje genético por ADN, control de picaje, buche y problemas respiratorios.',
    commonSymptoms: [
      'Plumas erizadas y permanece embolado en el piso',
      'Secreción nasal, estornudos o boqueo al respirar',
      'Pico deformado que le impide comer',
      'Buche blando lleno de fluido o impactado'
    ],
    procedures: [
      'Corte y limado estético/funcional de picos y uñas con Dremel',
      'Sexaje genético certero por ADN (pluma o sangre)',
      'Lavado/sondeo de buche y nebulizaciones',
      'Examen coprológico directo para parásitos'
    ],
    careTip: 'Las aves ocultan la enfermedad por instinto. Cuando notas que una ninfa o agapornis está embolado o decaído, suele llevar días sintiéndose mal.'
  },
  {
    id: 'aves-finca',
    name: 'Aves de Finca & Corral',
    subtitle: 'Gallinas (Sedosas, Brahma, Ponedoras), Patos (como Ramón), Gansos y Pavos',
    category: 'aves-finca',
    icon: 'egg',
    badge: 'Medicina Poblacional & Corral',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    description: 'Atención integral en fincas para gallinas ornamentales, ponedoras, patos y gansos. Tratamiento de pododermatitis (bumblefoot), retención de huevo, vacunas de lote y cortes de pico.',
    commonSymptoms: [
      'Cojera o inflamación con pus en la planta de la pata (pododermatitis)',
      'Abdomen abultado o postura de pingüino (retención de huevo)',
      'Secreción ocular/nasal o moquillo aviar',
      'Heridas por ataques de depredadores o peleas'
    ],
    procedures: [
      'Tratamiento de pododermatitis y curación de heridas',
      'Planes de vacunación preventiva (Newcastle, Viruela aviar)',
      'Desparasitación interna/externa de lote',
      'Atención de emergencias reproductivas'
    ],
    careTip: 'En patos y gallinas, la humedad constante en los corrales favorece bacterias en las patas. Un suelo seco con virita o pasto previene bumblefoot doloroso.'
  },
  {
    id: 'exoticos',
    name: 'Exóticos',
    subtitle: 'Erizos Africanos (como Alma), Hurones y Fauna No Convencional',
    category: 'exoticos',
    icon: 'pest_control',
    badge: 'Cuidados Especializados de Especie',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    description: 'Atención médica y dermatológica para erizos africanos, hurones y otros pequeños mamíferos exóticos. Evaluación de piel y púas, ácaros, nutrición específica y revisión cardiopulmonar.',
    commonSymptoms: [
      'Pérdida excesiva de púas, costras o resequedad (erizos)',
      'Soplos cardíacos, decaimiento o diarreas (hurones)',
      'Apatía, falta de apetito o bultos cutáneos',
      'Orejas deshilachadas o rascado intenso'
    ],
    procedures: [
      'Raspado cutáneo e identificación de ácaros bajo microscopio',
      'Examen clínico especializado de erizos y hurones',
      'Planes antiparasitarios y nutrición adaptada',
      'Asesoría de temperatura y habitáculo'
    ],
    careTip: 'Los erizos africanos no toleran las bajas temperaturas. En el clima frío del Oriente Antioqueño requieren placa térmica o calefacción constante para no entrar en hibernación peligrosa.'
  },
  {
    id: 'minipigs',
    name: 'Minipigs',
    subtitle: 'Mini Pigs de Finca & Hogar (como Toreto)',
    category: 'minipigs',
    icon: 'sound_detection_dog_barking',
    badge: 'Pedicura & Conducta en Corral',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    description: 'Atención especializada para cerdos enanos en fincas y casas campestres. Recorte técnico de pezuñas con Dremel y refuerzo positivo en su propio corral sin contención violenta ni sedación innecesaria.',
    commonSymptoms: [
      'Pezuñas sobrecrecidas o deformes que causan dolor/cojera',
      'Sobrepeso o rigidez articular al levantarse',
      'Problemas de piel, parásitos externos o rasquido',
      'Cambios de conducta o agresividad por malestar'
    ],
    procedures: [
      'Pedicura técnica con Dremel para minipigs en su corral',
      'Planes desparasitantes y control sanitario',
      'Examen físico general e inspección articular',
      'Asesoría de etología y refuerzo positivo'
    ],
    careTip: 'El sobrecrecimiento de pezuñas en minipigs afecta la pisada y genera problemas articulares en la columna. Mantener el arreglo periódico evita cojeras permanentes.'
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
    id: 'sueroterapia-homeopatica',
    title: 'Sueroterapia Homeopática',
    shortDesc: 'Fluidoterapia biorreguladora e hidratación especializada in situ para recuperación profunda.',
    fullDesc: 'Aplicación de sueros y soluciones de rehidratación enriquecidas con medicamentos homeopáticos biorreguladores. Promueve la desintoxicación, estimula el sistema inmune, alivia la inflamación y favorece la rápida recuperación en conejos, aves, cuyes y exóticos sin sobrecargar sus órganos.',
    icon: 'water_drop',
    highlights: [
      'Rehidratación in situ sin estrés de hospitalización',
      'Medicamentos homeopáticos biorreguladores sin efectos secundarios',
      'Estimulación del sistema inmunológico y drenaje toxémico',
      'Soporte vital en estasis digestiva, decaimiento e infecciones'
    ],
    recommendedFor: 'Mascotas deshidratadas, inapetentes, en recuperación o con procesos crónicos.'
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
    icon: 'pest_control',
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
