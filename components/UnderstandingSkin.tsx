
import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Ingredients } from './Ingredients';

export const UnderstandingSkin: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="relative overflow-visible bg-[#F8F9FA] pb-24 lg:pb-32">
      <div className="container mx-auto px-4 pt-24 pb-12 text-center">
        <div ref={reveal.ref} className={`max-w-3xl mx-auto animeTexto ${reveal.className}`}>
          <h2 className="text-[#063326] text-3xl md:text-[48px] font-bold leading-tight mb-8">
            A Ciência por trás do Alívio: <br />
            <span className="italic font-normal">Sinergia Ozonizada.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
            A maioria dos produtos tópicos fica apenas na superfície da pele. O N2 utiliza o <strong>Ozônio Ativo</strong> como veículo para transportar ingredientes potentes até a origem da dor, garantindo <strong>absorção profunda e resultados acelerados</strong>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <Ingredients />
      </div>

      <div className="container mx-auto px-4 mt-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 mb-12 lg:mb-0">
             <img 
               src="https://i.postimg.cc/tgQWDNVh/Google-AI-Studio-2025-12-29T20-36-18-596Z.png" 
               alt="Ciência Ozonizada" 
               className="w-full h-auto grayscale-[30%] shadow-2xl rounded-xl"
             />
          </div>
          <div className="w-full lg:w-5/12 lg:ml-auto">
            <div className="space-y-8 text-gray-700 text-base md:text-lg font-light leading-relaxed">
              <h3 className="text-2xl font-bold text-[#063326] mb-4">Como o N2 Recupera entende seu corpo</h3>
              <p>
                O ato de cuidar do corpo estimula a <strong>renovação celular</strong>. O autocuidado contribui em longo prazo para o fortalecimento dos tecidos e regeneração muscular profunda.
              </p>
              <p>
                Nossa fórmula é ideal inclusive para <strong>peles mais sensíveis</strong> e a escolha por ativos botânicos é uma <strong>gentileza com a sua pele e com a natureza</strong>.
              </p>
              <div className="pt-6">
                <div className="w-16 h-px bg-[#063326]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
