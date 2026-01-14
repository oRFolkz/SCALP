
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const reveal = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FAQItem[] = [
    { 
      question: 'O produto tem cheiro "rançoso" ou de óleo estragado?', 
      answer: '<strong>Não.</strong> Alguns produtos no mercado podem apresentar cheiro de óleo rançoso (estragado) devido a processos de produção inadequados adotados por outras empresas.</br></br>No caso da Corpore Life, o óleo não é rançoso. Ele possui um cheiro característico do ozônio, que é natural do processo de ozonização e não indica deterioração ou má qualidade do produto.' 
    },
    { 
      question: 'Posso usar todos os dias?', 
      answer: 'Sim. AEROZON foi pensado para uso tópico frequente, integrando rotinas diárias de cuidado corporal e promovendo bem-estar contínuo.' 
    },
    { 
      question: 'Precisa espalhar com as mãos?', 
      answer: 'Não é necessário. A aplicação em spray permite uma cobertura uniforme e uma névoa fina que é absorvida naturalmente pela pele sem necessidade de fricção.' 
    },
    { 
      question: 'É um medicamento?', 
      answer: 'Não. AEROZON é um produto cosmético de uso tópico, dermatologicamente testado, voltado para o cuidado, conforto e bem-estar da pele.' 
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white font-sans">
      <div className="mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] font-bold mb-4 text-[#063326] leading-tight">
            Confiança e <span className="font-normal italic">Transparência</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">Tire suas dúvidas sobre a experiência AEROZON.</p>
        </div>

        <div ref={reveal.ref} className={`space-y-4 animeTexto ${reveal.className}`}>
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button 
                className="w-full p-6 flex justify-between items-center text-left hover:text-[#063326] transition-colors gap-4"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-16 text-[#063326]">
                  {item.question}
                </span>
                <i className={`fa-solid ${openIndex === idx ? 'fa-minus' : 'fa-plus'} text-[#063326] opacity-30`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-60 p-6 pt-0' : 'max-h-0'}`}>
                <p className="text-gray-500 text-16 leading-relaxed font-light border-t border-gray-100 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
