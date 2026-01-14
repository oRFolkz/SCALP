
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Ingredients: React.FC = () => {
  const reveal = useReveal();
  
  const items = [
    {
      id: "motor",
      title: "O Motor da Fórmula",
      subtitle: "Óleo de Girassol Ozonizado (O³)",
      description: "Não é apenas a base, é a tecnologia. O processo de ozonização modifica a estrutura do óleo, tornando-o capaz de <strong>oxigenar os tecidos</strong>, combater inflamações severas e potencializar a absorção dos outros ativos em até <strong>10x</strong>.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      id: "analgesico",
      title: "O Analgésico Natural",
      subtitle: "Arnica Montana Concentrada",
      description: "A referência mundial no tratamento de traumas. Atua diretamente na <strong>redução de edemas</strong>, hematomas e dores articulares crônicas, recuperando a mobilidade sem agredir o estômago como anti-inflamatórios orais.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      )
    },
    {
      id: "relaxamento",
      title: "O Relaxamento Imediato",
      subtitle: "Cânfora + Menta Piperita",
      description: "A dupla de ação sensorial. Enquanto a Cânfora promove um resfriamento que <strong>\"adormece\" a dor aguda</strong> e combate câimbras, a Menta estimula a circulação sanguínea, aliviando a sensação de pernas pesadas instantaneamente.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div id="ingredientes" ref={reveal.ref} className="relative py-12 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`bg-white p-10 shadow-xl border border-gray-100 flex flex-col h-full animeTexto rounded-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 group ${reveal.className}`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <div className="mb-8 text-[#deb357] flex justify-center md:justify-start">
              <div className="p-4 bg-gray-50 rounded-full group-hover:bg-[#deb357] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
            </div>

            <div className="mb-6 text-center md:text-left">
              <span className="text-16 font-bold uppercase tracking-[0.2em] text-[#deb357] mb-2 block">
                {item.title}
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-[#063326] leading-tight">
                {item.subtitle}
              </h4>
            </div>

            <p className="text-gray-500 text-16 leading-relaxed font-light flex-grow text-center md:text-left" dangerouslySetInnerHTML={{ __html: item.description }}>
            </p>
          </div>
        ))}
      </div>
      <div className="hidden lg:block absolute top-[60%] left-[15%] right-[15%] h-px bg-[#deb357]/10 z-0"></div>
    </div>
  );
};
