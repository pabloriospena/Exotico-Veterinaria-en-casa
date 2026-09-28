import React from 'react';

export const FloatingWhatsAppBar: React.FC = () => {
  return (
    <aside className="fixed inset-x-0 bottom-16 sm:bottom-20 z-40 px-4 pointer-events-none mb-1">
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          className="w-full flex items-center justify-between gap-3 bg-[#7c2800] hover:bg-[#571900] text-white py-3.5 px-6 rounded-full shadow-[0_8px_20px_-4px_rgba(124,40,0,0.4)] active:scale-[0.98] transition-all group border border-white/20"
          href="https://wa.me/c/573052417854"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">
              support_agent
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Hablar por WhatsApp (Catálogo)
            </span>
          </div>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </a>
      </div>
    </aside>
  );
};
