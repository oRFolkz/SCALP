
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ProblemMechanism: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="py-16 md:py-24 bg-[#F1F5F2] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-start lg:items-center">
          
          {/* Coluna da Esquerda: Problema + Explicação Técnica */}
          <div className="w-full lg:w-7/12 px-4 mb-12 lg:mb-0">
            <div ref={reveal.ref} className={`animeTexto ${reveal.className}`}>
              {/* Headline integrada */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#063326] mb-6 leading-tight">
                Por que seu cabelo parou de <br />
                <span className="font-normal italic font-serif">responder aos tratamentos comuns?</span>
              </h2>
              
              {/* Copy de introdução compactada */}
              <div className="space-y-4 text-gray-600 text-base md:text-lg font-light leading-relaxed mb-10">
                <p>
                  Você aplica tônicos, toma vitaminas e usa shampoos caros, mas a queda persiste. O motivo não é o fio, é o <strong>terreno</strong>.
                </p>
                <p>
                  Assim como a pele, seu couro cabeludo sofre com a oxidação e inflamação silenciosa causada por estresse e poluição. Um folículo sem oxigênio entra em dormência. Ele não morre, ele apenas <strong>para de trabalhar</strong>.
                </p>
              </div>

              {/* Card de Tecnologia */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 mb-0">
                <h3 className="text-xl font-bold text-[#063326] mb-5 flex items-center gap-4">
                  <span className="w-10 h-10 bg-[#deb357]/10 flex items-center justify-center rounded-full text-[#deb357]">
                    <i className="fa-solid fa-atom"></i>
                  </span>
                  A Revolução do Ozônio (O3)
                </h3>
                <p className="text-gray-500 text-sm md:text-base font-light mb-8 leading-relaxed">
                  A tecnologia <strong>AQ - Scalp Blend</strong> infunde Ozônio Ativo em óleos vegetais nobres. Ao tocar a pele, o ozônio libera oxigênio nascente, reativando a microcirculação e eliminando fungos e bactérias que bloqueiam o crescimento.
                </p>
                
                {/* Lista de benefícios mais compacta */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { title: "Desintoxicação", icon: "fa-droplet-slash" },
                    { title: "Bioestimulação", icon: "fa-bolt" },
                    { title: "Anti-inflamatório", icon: "fa-heart-pulse" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-start gap-2">
                      <div className="text-[#deb357] text-sm">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <h4 className="font-bold text-[#063326] uppercase text-[10px] tracking-widest leading-tight">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Vídeo YouTube (Proporção 9:16) */}
          <div className="w-full lg:w-5/12 px-4 flex justify-center">
            <div className={`relative rounded-[32px] overflow-hidden shadow-2xl w-full max-w-[360px] aspect-[9/16] bg-black animeTexto ${reveal.className}`}>
              {/* Fix: use camelCase for React iframe attributes */}
              <iframe 
                width="337" 
                height="599" 
                src="https://www.youtube.com/embed/CmxOVLRcgus" 
                title="" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
              
              {/* Badge de Overlay */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-[#deb357] text-[#063326] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-2xl">
                  Assista o Vídeo
                </div>
              </div>

              {/* Acabamento de borda interna */}
              <div className="absolute inset-0 border-[10px] border-white/5 rounded-[32px] pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
