
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FormulaIngredients: React.FC = () => {
  const reveal = useReveal();

  const ingredients = [
    { 
      name: "Ativação e Oxigenação", 
      role: "Girassol Ozonizado", 
      desc: "O Óleo de Girassol Ozonizado atua como um potente carreador de oxigênio e energia para as células do couro cabeludo. Ele estimula o metabolismo folicular, essencial para fortalecer os fios e acelerar o crescimento em fases onde o ciclo capilar está enfraquecido.", 
      icon: "fa-sun" 
    },
    { 
      name: "Ação Anti-inflamatória e Purificante", 
      role: "Copaíba e Melaleuca", 
      desc: "A combinação de Copaíba e Melaleuca (Tea Tree) age como um escudo natural. Estes ativos inibem processos inflamatórios, combatendo a caspa, dermatites e a escamação, além de equilibrar a higiene do couro cabeludo sem causar ressecamento.", 
      icon: "fa-shield-heart" 
    },
    { 
      name: "Estimulação da Microcirculação", 
      role: "Canela", 
      desc: "O óleo de Canela potencializa a circulação sanguínea local, garantindo que mais nutrientes cheguem à raiz do cabelo, o que ajuda a reverter a rarefação e a queda.", 
      icon: "fa-droplet" 
    }
  ];

  const steps = [
    "Aplicar quantidade suficiente para espalhar uniformemente no couro cabeludo",
    "Massagear suavemente para melhor absorção",
    "Deixar agir por no mínimo 3 horas - pode ser aplicado à noite",
    "Lavar normalmente no dia seguinte"
  ];

  return (
    <section className="py-24 bg-[#F1F5F2]">
      <div className="container mx-auto px-4">
        <div ref={reveal.ref} className={`text-center mb-20 animeTexto ${reveal.className}`}>
          {/* Kicker */}
          <p className="text-[#E3C08D] font-bold text-[12px] uppercase tracking-[0.2em] mb-4">
            MECANISMO DE AÇÃO
          </p>

          {/* Título */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-[1.2]">
            A Ciência por trás do SCALP BLEND: <br />
            <span className="font-normal">Como ele age no seu couro cabeludo</span>
          </h2>
          <p className="text-gray-500 text-[16px] font-light max-w-3xl mx-auto">
            Após a aplicação, o SCALP BLEND inicia um processo multifuncional de revitalização e tratamento diretamente no folículo piloso:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {ingredients.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center text-center group h-full">
               <div className="w-16 h-16 bg-[#deb357]/10 text-[#deb357] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#063326] group-hover:text-white transition-colors">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
               </div>
               <h4 className="text-lg font-bold text-[#063326] mb-1 leading-tight">{item.name}</h4>
               <p className="text-[#deb357] text-[12px] font-bold uppercase tracking-[0.2em] mb-4">{item.role}</p>
               <p className="text-gray-400 text-[14px] font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#063326] text-white rounded-3xl overflow-hidden flex flex-wrap shadow-2xl items-stretch">
          <div className="w-full lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-10 uppercase tracking-widest">MODO DE USO</h3>
            <div className="space-y-8 mb-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-3xl font-serif italic text-[#deb357] leading-none">{i + 1}.</span>
                  <p className="text-[14px] font-light leading-relaxed opacity-90">{step}</p>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10">
               <p className="text-[#deb357] text-[12px] font-bold uppercase tracking-[0.2em]">
                 Frequência: <span className="text-white font-light normal-case tracking-normal ml-2">Uso diário ou conforme necessidade</span>
               </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#deb357]/20 flex items-center justify-center overflow-hidden min-h-[400px]">
             <img 
               src="https://i.postimg.cc/RCcZrHG4/20260106-1636-Aplicacao-de-Oleo-Capilar-remix-01keacx6d3ewbt9rm53yw3z651.png" 
               alt="Processo Laboratorial AQ Scalp Blend" 
               className="w-full h-full object-cover grayscale-[10%] brightness-110"
               style={{ maxHeight: '650px' }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};
