
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export const OfferFAQ: React.FC = () => {
  const reveal = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "O cheiro de ozônio é muito forte?", a: "Nossa fórmula possui um blend aromático com Canela e Melaleuca que suaviza o odor característico do ozônio." },
    { q: "Deixa o cabelo oleoso?", a: "O AQ Blend é absorvido rapidamente. Se lavado pela manhã, não deixa resíduos oleosos." },
    { q: "Posso usar em sobrancelhas?", a: "Sim! O blend é excelente para estimular o preenchimento de falhas nas sobrancelhas." },
    { q: "Em quanto tempo vejo resultados?", a: "Alívio e brilho são imediatos. A redução da queda é visível a partir de 15 dias." }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F1F5F2] border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div ref={reveal.ref} className={`max-w-3xl mx-auto animeTexto ${reveal.className}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#063326] mb-4">
              Perguntas <span className="font-normal italic">Frequentes</span>
            </h2>
            <p className="text-gray-400 font-light">Tudo o que você precisa saber sobre o Protocolo AQ Scalp Blend.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <button 
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-bold text-[#063326] text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border border-[#deb357]/30 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-[#deb357] text-white' : 'text-[#deb357]'}`}>
                    <i className={`fa-solid ${openIndex === i ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Ainda tem dúvidas? Fale com nosso suporte especializado.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
