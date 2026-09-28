import React, { useState } from 'react';
import { MUNICIPALITIES, SPECIES_LIST } from '../data/veterinaryData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpecies?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedSpecies = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [municipality, setMunicipality] = useState<string>('La Ceja');
  const [vereda, setVereda] = useState<string>('');
  const [species, setSpecies] = useState<string>(preselectedSpecies || 'Conejo / Cuy');
  const [petName, setPetName] = useState<string>('');
  const [reason, setReason] = useState<string>('Consulta Preventiva & Chequeo en Finca');
  const [symptomsText, setSymptomsText] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('Esta semana');

  if (!isOpen) return null;

  const currentMunicipalityObj = MUNICIPALITIES.find((m) => m.name === municipality);

  const generateWhatsAppURL = () => {
    const text = `¡Hola Dra! Quisiera agendar una consulta veterinaria a domicilio para mi mascota.

📍 *Ubicación:* ${municipality}${vereda ? ` - Vereda/Sector: ${vereda}` : ''}
🐾 *Mascota:* ${petName ? petName : 'Mi mascota'} (${species})
🩺 *Motivo:* ${reason}
⏱️ *Urgencia:* ${urgency}
${symptomsText ? `📝 *Observaciones/Síntomas:* ${symptomsText}` : ''}

¿Tienen disponibilidad en ruta para este sector? Gracias!`;

    return `https://wa.me/c/573052417854?text=${encodeURIComponent(text)}`;
  };

  const handleSendWhatsApp = () => {
    window.open(generateWhatsAppURL(), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#ffffff] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#c0c9c1]/40">
        
        {/* Modal Header */}
        <div className="bg-[#003622] text-white p-5 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#134e35] flex items-center justify-center text-[#b4f0cd]">
              <span className="material-symbols-outlined text-[24px]">calendar_month</span>
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">Agendar Consulta a Domicilio</h2>
              <p className="text-xs text-[#b4f0cd] opacity-90">
                La Ceja, Rionegro y Oriente Antioqueño
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Wizard Steps Bar */}
        <div className="bg-[#f3f3f3] px-6 py-2.5 border-b border-[#c0c9c1]/20 flex items-center justify-between text-xs font-semibold text-[#404943]">
          <span className={step === 1 ? 'text-[#003622] font-bold' : ''}>1. Ubicación</span>
          <span className="text-gray-300">•</span>
          <span className={step === 2 ? 'text-[#003622] font-bold' : ''}>2. Paciente</span>
          <span className="text-gray-300">•</span>
          <span className={step === 3 ? 'text-[#003622] font-bold' : ''}>3. Confirmar</span>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {step === 1 && (
            <div className="space-y-4 animate-in slide-in-from-right-4 duration-150">
              <label className="block">
                <span className="text-sm font-bold text-[#003622] mb-1.5 block">
                  Municipio de Atención en Oriente Antioqueño:
                </span>
                <select
                  value={municipality}
                  onChange={(e) => {
                    setMunicipality(e.target.value);
                    setVereda('');
                  }}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#003622] text-sm font-semibold outline-none transition-all"
                >
                  {MUNICIPALITIES.map((m) => (
                    <option key={m.name} value={m.name}>
                      {m.name} ({m.frequency})
                    </option>
                  ))}
                </select>
              </label>

              {currentMunicipalityObj && (
                <div>
                  <span className="text-xs font-bold text-gray-600 mb-1 block">
                    Vereda o Sector Campestre (Opcional):
                  </span>
                  <input
                    type="text"
                    placeholder="Ej: Llanogrande, San José, Vereda El Salto, Finca Las Palmas"
                    value={vereda}
                    onChange={(e) => setVereda(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-[#003622] outline-none"
                  />
                  {currentMunicipalityObj.veredas.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="text-[10px] text-gray-500 font-bold self-center mr-1">Veredas comunes:</span>
                      {currentMunicipalityObj.veredas.slice(0, 5).map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setVereda(v)}
                          className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
                            vereda === v
                              ? 'bg-[#003622] text-white border-[#003622]'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="bg-[#d9e6da]/60 p-3.5 rounded-xl border border-[#b4f0cd] text-xs text-[#003622] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[20px] shrink-0 text-[#134e35]">
                  local_shipping
                </span>
                <div>
                  <strong className="block font-bold">Llegada a Fincas y Residencias:</strong>
                  {currentMunicipalityObj?.isPrimary
                    ? `Atención diaria en ${municipality}. Tiempo promedio de llegada estimado: ${currentMunicipalityObj?.estimatedArrival}.`
                    : `Programamos rutas coordinadas para ${municipality} (${currentMunicipalityObj?.frequency}).`}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in slide-in-from-right-4 duration-150">
              <div>
                <span className="text-sm font-bold text-[#003622] mb-1.5 block">Especie del Paciente:</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Conejo', icon: 'cruelty_free' },
                    { label: 'Cuy / Cobayo', icon: 'pets' },
                    { label: 'Ave de Finca / Gallina', icon: 'flutter' },
                    { label: 'Erizo Africano', icon: 'pest_control' },
                    { label: 'Mini Pig', icon: 'sound_detection_dog_barking' },
                    { label: 'Otro Exótico', icon: 'favorite' },
                  ].map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setSpecies(s.label)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs font-semibold ${
                        species === s.label
                          ? 'bg-[#003622] text-white border-[#003622] shadow-sm'
                          : 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-700 mb-1 block">Nombre de la Mascota:</span>
                <input
                  type="text"
                  placeholder="Ej: Punky, Ramón, Alma, Toreto..."
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-[#003622] outline-none"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-gray-700 mb-1 block">Motivo de la Consulta:</span>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 text-sm font-semibold focus:ring-2 focus:ring-[#003622] outline-none"
                >
                  <option value="Consulta Preventiva & Chequeo en Finca">Consulta Preventiva / Chequeo Nutricional</option>
                  <option value="Corte/Limado Dental o Pico con Dremel">Corte/Limado Dental o de Pico (Dremel)</option>
                  <option value="Ecografía Portátil SonoBook 8">Ecografía Portátil SonoBook 8</option>
                  <option value="Sintomatología / Mascota Enferma">Sintomatología / Mascota Enferma</option>
                  <option value="Sexaje por ADN / Vacunación Aviar">Sexaje por ADN / Vacunación Aviar</option>
                  <option value="Desparasitación & Recorte de Pezuñas">Desparasitación & Recorte de Pezuñas</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in slide-in-from-right-4 duration-150">
              <div>
                <span className="text-sm font-bold text-[#003622] mb-1.5 block">Urgencia / Disponibilidad Preferida:</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Lo antes posible (Hoy/Mañana)', tag: 'Alta' },
                    { label: 'Esta semana', tag: 'Normal' },
                    { label: 'Fin de semana', tag: 'Programada' },
                    { label: 'Solo consulta de información', tag: 'Info' },
                  ].map((u) => (
                    <button
                      key={u.label}
                      type="button"
                      onClick={() => setUrgency(u.label)}
                      className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                        urgency === u.label
                          ? 'bg-[#7c2800] text-white border-[#7c2800]'
                          : 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-700 mb-1 block">
                  ¿Alguna observación especial o síntomas visibles?
                </span>
                <textarea
                  rows={2}
                  placeholder="Ej: Dejó de comer heno hace horas, tiene plumas erizadas, estornuda..."
                  value={symptomsText}
                  onChange={(e) => setSymptomsText(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-[#003622] outline-none"
                />
              </div>

              {/* Pre-Summary Preview Card */}
              <div className="bg-[#f3f3f3] p-4 rounded-2xl border border-gray-200 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#003622] font-bold text-sm pb-1 border-b border-gray-200">
                  <span>Resumen del Agendamiento</span>
                  <span className="text-[10px] bg-[#d9e6da] px-2 py-0.5 rounded-full text-[#134e35]">
                    WhatsApp Directo
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-gray-700">
                  <div><strong>Municipio:</strong> {municipality}</div>
                  <div><strong>Sector:</strong> {vereda || 'Centro / No especificado'}</div>
                  <div><strong>Especie:</strong> {species}</div>
                  <div><strong>Nombre:</strong> {petName || 'Sin indicar'}</div>
                  <div className="col-span-2"><strong>Motivo:</strong> {reason}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-[#f9f9f9] p-4 border-t border-gray-200 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold text-xs hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Atrás
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-gray-500 font-semibold text-xs hover:text-gray-800"
            >
              Cancelar
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl bg-[#003622] text-white font-bold text-xs hover:bg-[#134e35] transition-colors flex items-center gap-1 shadow-md"
            >
              Siguiente
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          ) : (
            <button
              onClick={handleSendWhatsApp}
              className="px-6 py-3 rounded-xl bg-[#7c2800] hover:bg-[#571900] text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Enviar Mensaje a WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
