import React, { useState } from 'react';

interface SymptomCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointmentModal: (species?: string) => void;
}

interface SymptomOption {
  id: string;
  label: string;
  severity: 'rojo' | 'amarillo' | 'verde';
  speciesCat: 'roedores' | 'aves' | 'todos';
  advice: string;
}

const SYMPTOM_OPTIONS: SymptomOption[] = [
  {
    id: 'dejo-de-comer-heno',
    label: 'Dejó de comer heno o alimento fresco (>6 horas)',
    severity: 'rojo',
    speciesCat: 'roedores',
    advice: 'En conejos y cobayos, dejar de comer por más de 6-12 horas provoca alteración en la flora cecal y estasis intestinal potencialmente letal.'
  },
  {
    id: 'sin-excretas',
    label: 'Heces muy pequeñas, duras, unidas con pelo o ausentes',
    severity: 'rojo',
    speciesCat: 'roedores',
    advice: 'Signo claro de lentificación de la motilidad digestiva. Requiere hidratación y procinéticos bajo indicación veterinaria.'
  },
  {
    id: 'plumas-erizadas',
    label: 'Plumas erizadas / embolado en el piso de la jaula o gallinero',
    severity: 'rojo',
    speciesCat: 'aves',
    advice: 'Las aves solo se embolan cuando no logran mantener su temperatura corporal y están cursando con debilidad avanzada.'
  },
  {
    id: 'secresion-respiratoria',
    label: 'Secreción nasal, ocular, estornudos o silbido al respirar',
    severity: 'amarillo',
    speciesCat: 'todos',
    advice: 'Infecciones respiratorias como Pasteurella en conejos o Coriza en aves se propagan rápido en ambientes fríos o con corrientes.'
  },
  {
    id: 'sacos-perineales',
    label: 'Cloaca sucia, sacos perineales obstruidos o heces pegadas',
    severity: 'amarillo',
    speciesCat: 'todos',
    advice: 'Falta de acicalamiento por dolor articular, sobrepeso o diarrea secundaria.'
  },
  {
    id: 'dientes-pico-largos',
    label: 'Pico o dientes frontales sobrecrecidos o torcidos',
    severity: 'amarillo',
    speciesCat: 'todos',
    advice: 'Requiere limado técnico con Dremel para evitar ulceración en lengua, mejillas o paladar.'
  },
  {
    id: 'pododermatitis',
    label: 'Patitas rojas, cayos o apoyo doloroso en corrales',
    severity: 'amarillo',
    speciesCat: 'todos',
    advice: 'Pododermatitis / clumblefoot por humedad en sustrato o superficies duras.'
  },
  {
    id: 'chequeo-preventivo',
    label: 'Quiero un chequeo de rutina, vacunación o desparasitación',
    severity: 'verde',
    speciesCat: 'todos',
    advice: 'Ideal para valorar dieta, sustrato y prevenir problemas de salud antes de que aparezcan.'
  }
];

export const SymptomCheckerModal: React.FC<SymptomCheckerModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointmentModal,
}) => {
  const [selectedSpecies, setSelectedSpecies] = useState<'roedores' | 'aves' | 'todos'>('todos');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  if (!isOpen) return null;

  const filteredSymptoms = SYMPTOM_OPTIONS.filter(
    (s) => selectedSpecies === 'todos' || s.speciesCat === 'todos' || s.speciesCat === selectedSpecies
  );

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedObjects = SYMPTOM_OPTIONS.filter((s) => selectedSymptoms.includes(s.id));
  const hasRed = selectedObjects.some((s) => s.severity === 'rojo');
  const hasYellow = selectedObjects.some((s) => s.severity === 'amarillo');

  let urgencyLevel: 'rojo' | 'amarillo' | 'verde' = 'verde';
  if (hasRed) urgencyLevel = 'rojo';
  else if (hasYellow) urgencyLevel = 'amarillo';

  const handleBookWithTriaje = () => {
    onClose();
    onOpenAppointmentModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#ffffff] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#c0c9c1]/40">
        
        {/* Header */}
        <div className="bg-[#134e35] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#003622] flex items-center justify-center text-[#b4f0cd]">
              <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Evaluador de Síntomas & Triaje</h2>
              <p className="text-xs text-[#b4f0cd]">Atención temprana a domicilio en Oriente Antioqueño</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="bg-[#eeeeee] p-3 border-b border-gray-200 flex gap-1.5 justify-center">
          {[
            { id: 'todos', label: 'Todas las Especies', icon: 'pets' },
            { id: 'roedores', label: 'Conejos & Cuyes', icon: 'cruelty_free' },
            { id: 'aves', label: 'Aves & Gallinas', icon: 'flutter' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSpecies(tab.id as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                selectedSpecies === tab.id
                  ? 'bg-[#003622] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          <p className="text-xs text-gray-600 leading-relaxed bg-[#f3f3f3] p-3 rounded-xl border border-gray-200">
            💡 <strong>Sabías que:</strong> Los animales de presa disimulan sus síntomas por instinto natural. Selecciona las señales sutiles que observes en tu mascota:
          </p>

          <div className="space-y-2">
            {filteredSymptoms.map((symptom) => {
              const isSelected = selectedSymptoms.includes(symptom.id);
              return (
                <div
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    isSelected
                      ? symptom.severity === 'rojo'
                        ? 'bg-red-50 border-red-300 text-red-950 shadow-sm'
                        : symptom.severity === 'amarillo'
                        ? 'bg-amber-50 border-amber-300 text-amber-950 shadow-sm'
                        : 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-sm'
                      : 'bg-gray-50 border-gray-200 hover:bg-white text-gray-800'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {}}
                    className="mt-0.5 rounded text-[#003622] focus:ring-[#003622]"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold block">{symptom.label}</span>
                    {isSelected && (
                      <span className="mt-1 block text-[11px] opacity-90 leading-snug">
                        📌 {symptom.advice}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Triaje Outcome Result */}
          {selectedSymptoms.length > 0 && (
            <div
              className={`p-4 rounded-2xl border text-xs space-y-2 animate-in fade-in duration-200 ${
                urgencyLevel === 'rojo'
                  ? 'bg-red-100 border-red-300 text-red-900'
                  : urgencyLevel === 'amarillo'
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-emerald-100 border-emerald-300 text-emerald-900'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                <span className="material-symbols-outlined text-[20px]">
                  {urgencyLevel === 'rojo' ? 'warning' : urgencyLevel === 'amarillo' ? 'info' : 'check_circle'}
                </span>
                <span>
                  {urgencyLevel === 'rojo'
                    ? 'Atención Prioritaria Recomendada (Urgencia)'
                    : urgencyLevel === 'amarillo'
                    ? 'Revisión Médica Pronta Recomendada (24-48h)'
                    : 'Chequeo Preventivo Recomendado'}
                </span>
              </div>
              <p>
                {urgencyLevel === 'rojo'
                  ? 'Los síntomas seleccionados sugieren riesgo de descompensación rápida o estasis. Te aconsejamos solicitar visita prioritaria a domicilio en La Ceja, Rionegro o alrededores.'
                  : urgencyLevel === 'amarillo'
                  ? 'Se observan signos de malestar moderado. Conviene agendar visita a domicilio esta semana para evitar complicaciones mayores.'
                  : 'Perfecto momento para un control en su propio entorno y asesoría nutricional.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            Cerrar
          </button>
          <button
            onClick={handleBookWithTriaje}
            className="px-6 py-3 rounded-xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-xs shadow-md flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Agendar Visita Médica</span>
          </button>
        </div>
      </div>
    </div>
  );
};
