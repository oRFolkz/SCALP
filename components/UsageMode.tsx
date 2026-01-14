
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const UsageMode: React.FC = () => {
  const reveal = useReveal();
  
  const steps = [
    {
      title: "Treino & Performance",
      description: "Aplique antes ou depois da atividade física para <strong>preparar a musculatura</strong> e acelerar a recuperação, reduzindo a fadiga e prevenindo lesões.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M18.75 6.75l-1.5 1.5M15.75 9.75l-1.5 1.5M12.75 12.75l-1.5 1.5M9.75 15.75l-1.5 1.5M6.75 18.75l-1.5 1.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    },
    {
      title: "Alívio & Recuperação",
      description: "Ideal para dores crônicas ou traumas agudos. A ação profunda do ozônio e da arnica devolve sua <strong>mobilidade</strong> sem o uso de medicamentos orais.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 2.25c-4.5 6-7.5 9.75-7.5 12.75 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-3-3-6.75-7.5-12.75z" />
        </svg>
      )
    },
    {
      title: "Bem-estar & Estética",
      description: "Combate a sensação de <strong>pernas pesadas</strong> e inchaços, enquanto renova a luminosidade da pele e melhora a circulação local.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-[44px] font-bold mb-6 text-gray-900 leading-tight">
            O Ritual N2: <span className="font-normal italic">Versatilidade</span>
          </h2>
          <div className="w-24 h-px bg-[#063326] mx-auto opacity-30"></div>
        </div>

        <div ref={reveal.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center animeTexto bg-white p-12 rounded-xl border border-gray-100 hover:bg-[#063326] group transition-all duration-500 ${reveal.className}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="mb-8 text-[#063326] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 group-hover:text-white uppercase tracking-wider">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base group-hover:text-gray-200 leading-relaxed font-light transition-colors" dangerouslySetInnerHTML={{ __html: item.description }}>
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#063326]/40">
            Ações combinadas para uma <strong>vida em movimento</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};
