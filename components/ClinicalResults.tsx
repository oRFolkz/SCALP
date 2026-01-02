
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ClinicalResults: React.FC = () => {
  const reveal = useReveal();

  const ingredients = [
    {
      title: "O MOTOR DA FÓRMULA",
      subtitle: "Óleo de Girassol Ozonizado (O3)",
      description: "Rico em ozonídeos ativos, este óleo libera oxigênio nascente diretamente nas células. Ele combate microrganismos, estimula a produção de energia (ATP) mitocondrial e acelera a regeneração de tecidos lesionados. É o combustível para a cura.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )
    },
    {
      title: "ALÍVIO SENSORIAL",
      subtitle: "Complexo de Cânfora e Menta",
      description: "Atuam sinergicamente ativando os receptores térmicos da pele (crioterapia). Isso promove uma analgesia refrescante imediata, \"desligando\" a sensação de dor aguda e proporcionando conforto instantâneo após esforços físicos.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "RECUPERAÇÃO ESTRUTURAL",
      subtitle: "Extrato Puro de Arnica Montana",
      description: "Reconhecida mundialmente por sua potência contra traumas físicos. A Arnica reduz edemas (inchaços) e hematomas, modulando a resposta inflamatória para que você recupere a mobilidade e a estética da pele mais rápido.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="resultados-clinicos" className="pt-24 md:pt-32 pb-0 bg-[#F8F9FA] relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        <div ref={reveal.ref} className={`text-center max-w-4xl mx-auto mb-20 animeTexto ${reveal.className}`}>
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-6 leading-tight">
            Engenharia Natural de <br />
            <span className="italic font-normal">Alta Performance</span>
          </h2>
          <p className="text-gray-600 text-16 md:text-lg font-light leading-relaxed">
            Uma fusão precisa de <strong>Biotecnologia Ozonizada</strong> e Fitoterapia Avançada. Entenda como cada gota trabalha a seu favor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          {ingredients.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full animeTexto relative z-10 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 rounded-xl ${reveal.className}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="mb-6 text-[#063326] flex justify-center md:justify-start">
                <div className="p-4 rounded-full bg-[#F0F4F2] text-[#063326]">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-16 font-bold uppercase tracking-[0.2em] text-[#063326]/40 mb-2 block">
                  {item.title}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-[#063326] leading-tight">
                  {item.subtitle}
                </h4>
              </div>

              <p className="text-gray-500 text-16 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
