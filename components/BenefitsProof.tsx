
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const BenefitsProof: React.FC = () => {
  const reveal = useReveal();

  const stats = [
    { value: "80%", label: "Redução da Queda", detail: "Comprovado via teste de tração após 30 dias." },
    { value: "73%", label: "Melhora na Aparência", detail: "Mais brilho, volume e controle de frizz." },
    { value: "0%", label: "De Reações Adversas", detail: "Segurança total em couro cabeludo sensível." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={reveal.ref} className={`text-center mb-20 animeTexto ${reveal.className}`}>
          {/* Kicker */}
          <p className="text-[#E3C08D] font-bold text-[12px] uppercase tracking-[0.2em] mb-4">
            EFICÁCIA COMPROVADA
          </p>
          
          {/* Título */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-[1]">
            Resultados que você vê no espelho e <span className="font-normal">sente no toque</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center p-8 rounded-2xl bg-[#F1F5F2] border border-gray-100 animeTexto ${reveal.className}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <p className="text-5xl md:text-7xl font-black text-[#deb357] mb-4 tracking-tighter">
                {stat.value}
              </p>
              <h4 className="text-lg font-bold text-[#063326] uppercase tracking-wider mb-2">{stat.label}</h4>
              <p className="text-gray-400 text-[12px] font-light">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
             <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-[#063326] mb-2">Um Blend, Múltiplos Alvos:</h3>
                {[
                  { title: "Estimula o crescimento", desc: "Ativa folículos para o nascimento de novos fios." },
                  { title: "Combate a queda", desc: "Fortalece a ancoragem e interrompe a perda capilar." },
                  { title: "Combate a Alopecia e Rarefação", desc: "Preenche falhas visíveis na raiz." },
                  { title: "Controle de Caspa e Seborreia", desc: "Ação fungicida potente da Melaleuca." },
                  { title: "Dermatite Capilar", desc: "Alivia a inflamação, coceira e descamação." },
                  { title: "Psoríase", desc: "Auxilia na redução de placas e acalma a pele." },
                  { title: "Inibe o aparecimento de fungos e bactérias", desc: "Proteção antimicrobiana profunda e natural." },
                  { title: "Ação Cicatrizante", desc: "Ideal para feridas e sensibilidade extrema." },
                  { title: "Uso em Sobrancelhas", desc: "Recupera o desenho natural do seu olhar." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-8 h-8 bg-[#063326] text-white flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-[#deb357] transition-colors">
                      <i className="fa-solid fa-check text-[10px]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#063326] text-[14px]">{item.title}</h4>
                      <p className="text-gray-400 text-[14px] font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="w-full lg:w-7/12 px-4">
             <div className="flex flex-col gap-6">
                {/* Depoimento 1 - Original */}
                <div className={`relative bg-[#063326] p-10 md:p-16 rounded-3xl text-white animeTexto ${reveal.className}`}>
                   <div className="text-4xl text-[#deb357] mb-8 opacity-40">
                     <i className="fa-solid fa-quote-left"></i>
                   </div>
                   <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                     "Meu couro cabeludo vivia inflamado e dolorido. O AQ não só parou a queda, como trouxe uma sensação de 'limpeza' e alívio que eu nunca senti com outro produto."
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold">MS</div>
                      <div>
                         <p className="font-bold text-lg uppercase tracking-widest">Mariana S.</p>
                         <p className="text-[#deb357] text-[12px] font-bold uppercase tracking-widest">Cliente da Corpore Life</p>
                      </div>
                   </div>
                </div>

                {/* Depoimento 2 - Dermatite/Psoríase */}
                <div className={`relative bg-[#F1F5F2] p-10 md:p-16 rounded-3xl text-[#063326] border border-gray-100 animeTexto ${reveal.className}`} style={{ transitionDelay: '200ms' }}>
                   <div className="text-4xl text-[#deb357] mb-8 opacity-100">
                     <i className="fa-solid fa-quote-left"></i>
                   </div>
                   <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                     "Sofria com descamação severa por psoríase. O Blend foi o único que controlou a inflamação sem agredir os fios. Em semanas, a coceira sumiu e a pele cicatrizou."
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#063326] text-white rounded-full flex items-center justify-center font-bold">FE</div>
                      <div>
                         <p className="font-bold text-lg uppercase tracking-widest">Fernanda E.</p>
                         <p className="text-[#deb357] text-[12px] font-bold uppercase tracking-widest">Tratamento de Psoríase</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
