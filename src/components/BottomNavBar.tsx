import React from 'react';

interface BottomNavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenSymptomChecker: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeSection,
  setActiveSection,
  onOpenSymptomChecker,
}) => {
  const handleNavClick = (id: string) => {
    if (id === 'sintomas') {
      onOpenSymptomChecker();
      return;
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'home' },
    { id: 'especies', label: 'Especies', icon: 'pets' },
    { id: 'servicios', label: 'Servicios', icon: 'medical_services' },
    { id: 'sintomas', label: 'Triaje', icon: 'health_and_safety' },
    { id: 'cobertura', label: 'Cobertura', icon: 'distance' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#f9f9f9]/95 backdrop-blur-xl border-t border-[#c0c9c1]/30 shadow-[0_-2px_12px_rgba(19,78,53,0.06)]">
      <div className="flex justify-around items-center h-16 px-1 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center gap-0.5 w-16 h-14 transition-colors ${
                isActive
                  ? 'text-[#003622] font-bold'
                  : 'text-[#404943] hover:text-[#003622]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="text-[11px] font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
