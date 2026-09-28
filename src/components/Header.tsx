import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenReviewsModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'home' },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: 'person' },
    { id: 'especies', label: 'Especies', icon: 'cruelty_free' },
    { id: 'servicios', label: 'Servicios', icon: 'medical_services' },
    { id: 'cobertura', label: 'Cobertura', icon: 'map' },
    { id: 'reseñas', label: 'Reseñas', icon: 'star' },
    { id: 'faq', label: 'FAQ', icon: 'help' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#f9f9f9]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(19,78,53,0.06)] border-b border-[#c0c9c1]/20">
      <div className="h-16 px-4 md:px-8 flex items-center justify-between gap-3 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-expanded={drawerOpen}
            aria-label="Abrir menú de navegación"
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#003622] hover:bg-[#d9e6da]/60 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {drawerOpen ? 'close' : 'menu'}
            </span>
          </button>
          
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('inicio')}
          >
            <img
              alt="Logo Exótico - Veterinaria en casa"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-[0_2px_10px_-2px_rgba(19,78,53,0.3)] border-2 border-[#b4f0cd] group-hover:scale-105 transition-transform"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UWKwwNLIPxSgfzH1AGEUd-pmMgnTKV650mOutXR_qC7O9gH7bFre5W-RWGKX1BvIqFfpYlxiXAJUacZKGBovwBexsgvoTEktKucQw_GPHr6OHYhjActatK3YtVrDTLDkUAI7ThpCxAKvy7mtLhACgh7DItLs7Okcjst1MVF8aCJuzAY7QU5nsjIslgk6-JcGc3TslIGxg40nkTRZWRnzAKBZvk8porwPssDbAQTvgbwS9chAkAmqWNbu0GWdL4KuwpQQ07WOvKEA"
            />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#134e35] tracking-wider uppercase flex items-center gap-1">
                Exótico
              </span>
              <h1 className="text-[16px] md:text-[18px] font-black text-[#003622] tracking-tight leading-none">
                Oriente Antioqueño
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#eeeeee]/60 p-1.5 rounded-full border border-[#c0c9c1]/30">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all flex items-center gap-1.5 ${
                activeSection === item.id
                  ? 'bg-[#003622] text-white shadow-sm'
                  : 'text-[#404943] hover:text-[#003622] hover:bg-[#d9e6da]/50'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* WhatsApp Direct Action */}
          <a
            aria-label="Contacto directo WhatsApp"
            className="px-3.5 py-2 rounded-full bg-[#003622] hover:bg-[#134e35] text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5"
            href="https://wa.me/c/573052417854"
            target="_blank"
            rel="noopener noreferrer"
            title="Escribir por WhatsApp"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {drawerOpen && (
        <div className="fixed inset-x-0 top-16 bg-[#ffffff]/95 backdrop-blur-2xl shadow-xl p-4 flex flex-col gap-2 border-b border-[#c0c9c1]/40 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#003622]">Exótico</span>
            <span className="text-xs text-gray-500">Oriente Antioqueño</span>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-[15px] transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#d9e6da] text-[#003622]'
                    : 'text-[#1a1c1c] hover:bg-[#eeeeee]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#003622] text-[22px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </nav>

          <div className="pt-2 mt-1 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="https://wa.me/c/573052417854"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7c2800] text-white font-bold text-sm shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
