import React, { useState } from 'react';
import { FAQ_ITEMS, FaqItem } from '../data/veterinaryData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="flex flex-col px-4 md:px-8 py-8 gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-[#003622] font-bold">
          Dudas Habituales
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#003622]">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {FAQ_ITEMS.map((faq: FaqItem) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-4.5 flex items-center justify-between gap-3 text-sm md:text-base font-bold text-[#003622] hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#7c2800]' : 'text-gray-400'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="px-4.5 pb-4.5 text-xs md:text-sm text-[#404943] leading-relaxed border-t border-gray-100 pt-3 bg-[#f9f9f9]/50 animate-in fade-in duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
