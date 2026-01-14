
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export const OfferFAQ: React.FC = () => {
  const reveal = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Posso usar todos os dias?", 
      a: "Sim! Fórmula segura para uso diário contínuo." 
    },
    { 
      q: "Funciona em sobrancelhas?", 
      a: "Sim! Ideal para sobrancelhas ralas ou com falhas." 
    },
    { 
      q: "Deixa o cabelo oleoso?", 
      a: "Sim! É um óleo." 
    },
    { 
      q: "Quanto tempo para ver resultados?", 
      a: "Primeiros resultados visíveis entre 15-30 dias de uso regular." 
    },
    { 
      q: "Preciso enxaguar?", 
      a: "Sim, lave normalmente no dia seguinte à aplicação. Deixar agir no mínimo 3 horas, ideal usar a noite e lavar pela manhã." 
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F1F5F2] border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div ref={reveal.ref} className={`w-full max-w-2xl mx-auto animeTexto ${reveal.className}`}>
          <div className="text-center mb-16">
            {/* Kicker */}
            <p className="text-[#E3C08D] font-bold text-[12px] uppercase tracking-[0.2em] mb-4">
              DÚVIDAS FREQUENTES
            </p>

            {/* Título */}
            <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-[1]">
              Perguntas <span className="font-normal">Frequentes</span>
            </h2>
            <p className="text-gray-400 font-light text-[14px]">Tudo o que você precisa saber sobre o Protocolo AQ Scalp Blend.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <button 
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-bold text-[#063326] text-[14px] pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border border-[#deb357]/30 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-[#deb357] text-white' : 'text-[#deb357]'}`}>
                    <i className={`fa-solid ${openIndex === i ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-gray-50 text-[14px]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
