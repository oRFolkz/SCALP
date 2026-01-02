
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const RitualSection: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="py-24 md:py-32 bg-[#F4F9FF]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div className={`rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] animeZoom ${reveal.className}`}>
              <video 
                src="https://framerusercontent.com/assets/oGWOkSo3em8eufTAx5oecHE7YY.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 px-4 lg:ml-auto">
            <div ref={reveal.ref} className={`animeTexto ${reveal.className}`}>
              <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-8 leading-tight">
                Um momento de cuidado <br />que <span className="italic font-normal">vai além da rotina</span>
              </h2>
              
              <div className="space-y-8 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                  A pele é um espaço de conexão. Incorporar o AEROZON à sua rotina é transformar o cuidado corporal em um ritual consciente, onde cada aplicação se torna uma pausa.
                </p>
                <p>
                  Com movimentos simples e sem pressa, permita que o produto acompanhe seu tempo. A textura leve, o aroma suave e a aplicação delicada criam uma experiênca sensorial que convida ao autocuidado e à presença.
                </p>
                <p className="font-medium text-[#063326]">
                  Mais do que um produto, AEROZON é um convite para desacelerar e cuidar de si.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-200 flex items-center gap-6">
                <div className="text-[#deb357]">
                   <p className="text-3xl font-voyage italic">Mindful</p>
                   <p className="text-base font-bold uppercase tracking-[0.3em]">Application</p>
                </div>
                <div className="w-12 h-px bg-[#deb357]/20"></div>
                <p className="text-base text-gray-400 font-light max-w-[200px]">
                  Tecnologia que respeita o seu tempo e a sua pele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
