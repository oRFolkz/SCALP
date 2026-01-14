
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ScientificComparison: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="pt-16 md:pt-24 pb-24 md:pb-32 bg-[#F8F9FA] overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div ref={reveal.ref} className={`text-center max-w-4xl mx-auto mb-20 animeTexto ${reveal.className}`}>
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-6 leading-tight">
            Resultados Visíveis: <br />
            <span className="italic font-normal">A Jornada de Regeneração.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            Veja como o N2 Recupera Blend atua na redução de processos inflamatórios e na restauração da integridade da pele em tempo recorde.
          </p>
        </div>

        {/* Grid de Comparação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {/* Imagem 1: Antes */}
          <div className={`relative overflow-hidden rounded-xl aspect-[3/4] shadow-2xl animeTexto ${reveal.className}`} style={{ transitionDelay: '200ms' }}>
            <img 
              src="https://i.postimg.cc/yx6L3RZX/image.png" 
              alt="Fase Inflamatória Aguda" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Dia 0
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#063326] via-[#063326]/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">Fase Inflamatória Aguda</h3>
              <p className="text-sm md:text-base font-light leading-relaxed opacity-90">
                Músculo tensionado com sinais visíveis de edema (inchaço), vermelhidão e aspecto de fadiga tecidual. A circulação local está comprometida e a dor é limitante.
              </p>
            </div>
          </div>

          {/* Imagem 2: Depois */}
          <div className={`relative overflow-hidden rounded-xl aspect-[3/4] shadow-2xl animeTexto ${reveal.className}`} style={{ transitionDelay: '400ms' }}>
            <img 
              src="https://i.postimg.cc/L5qZW6dC/image.png" 
              alt="Recuperação e Vitalidade" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-[#063326]/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Dia 7
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#063326] via-[#063326]/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">Recuperação e Vitalidade</h3>
              <p className="text-sm md:text-base font-light leading-relaxed opacity-90">
                Tecido regenerado com aspecto saudável e tonificado. Redução completa do inchaço e hematomas. A pele apresenta brilho natural e elasticidade recuperada graças à hidratação profunda dos óleos ozonizados.
              </p>
            </div>
          </div>
        </div>

        {/* Descrição de Apoio e Métricas */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-12">
            A combinação de oxigenação celular e ação anti-inflamatória não apenas alivia a dor interna, mas transforma a aparência externa, eliminando vermelhidão, inchaço e hematomas.
          </p>
          <p className="text-[#063326] text-sm md:text-base font-bold uppercase tracking-[0.2em] leading-relaxed px-4">
            Essa transformação visível explica os <span className="text-lg md:text-xl border-b-2 border-[#063326]">94% de alívio</span> da dor e <span className="text-lg md:text-xl border-b-2 border-[#063326]">87% de redução</span> de inchaço.
          </p>
        </div>
      </div>
    </section>
  );
};
