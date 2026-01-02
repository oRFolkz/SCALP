
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const TechnologySection: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="py-24 md:py-32 bg-[#F4F9FF] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div ref={reveal.ref} className={`max-w-xl animeTexto ${reveal.className}`}>
              <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-8 leading-tight">
                O que torna o <br /><span className="italic font-normal">AEROZON </span>diferente
              </h2>
              <p className="text-gray-600 text-lg mb-8 font-light leading-relaxed">
                Mais do que um óleo corporal, uma experiência tecnológica aplicada ao cuidado da pele. O diferencial está na forma como o óleo ozonizado é preparado e aplicado.
              </p>
              
              <div className="space-y-6 text-gray-500 font-light text-16 leading-relaxed mb-12">
                <p>
                  Enquanto formulações convencionais podem apresentar textura pesada ou odor intenso, o AEROZON foi desenvolvido para oferecer leveza, estabilidade e conforto sensorial.
                </p>
                <p>
                  A tecnologia de ozonização utilizada busca preservar as propriedades do óleo de forma equilibrada, resultando em um produto agradável ao toque e de rápida absorção.
                </p>
              </div>

              {/* Tabela Comparativa */}
              <div className="grid grid-cols-2 gap-4 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="bg-gray-50/50 p-6">
                  <h5 className="font-bold text-[#063326] text-16 uppercase tracking-widest mb-6">Óleos Tradicionais</h5>
                  <ul className="space-y-4">
                    {["Textura pesada", "Aplicação manual", "Odor intenso", "Uso trabalhoso"].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 text-16">
                        <i className="fa-solid fa-xmark text-xs text-red-300"></i> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#063326] p-6 text-white">
                  <h5 className="font-bold text-white text-16 uppercase tracking-widest mb-6">AEROZON</h5>
                  <ul className="space-y-4">
                    {["Textura leve", "Aplicação em spray", "Aroma suave", "Uso prático"].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-16 text-white">
                        <i className="fa-solid fa-check text-xs text-green-400"></i> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px]">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" 
                alt="Tecnologia Aerozon" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-[#063326]/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
