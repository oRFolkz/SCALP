
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const UsageSteps: React.FC = () => {
  const reveal = useReveal();

  const steps = [
    {
      title: "Limpe",
      desc: "Comece com a pele limpa e seca. Uma limpeza suave prepara a região para receber o produto com conforto.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1679431062928-bbd83ca870f4?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Aplique",
      desc: "Pulverize uma camada leve e uniforme sobre a área desejada. Não é necessário espalhar com as mãos.",
      imgUrl: "https://images.unsplash.com/photo-1599847954335-d7c7ca35f6a7?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Deixe agir",
      desc: "A absorção é natural e rápida. Aguarde alguns instantes e siga sua rotina normally.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1671717725615-5a5f732957bf?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div ref={reveal.ref} className={`text-center max-w-2xl mx-auto mb-20 animeTexto ${reveal.className}`}>
          {/* Kicker */}
          <p className="text-[#E3C08D] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            MODO DE USO
          </p>

          {/* Título */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-tight">
            Seu ritual em <span className="font-normal">três atos</span>
          </h2>
        </div>

        {/* Grid de Retângulos Verticais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`relative h-[550px] md:h-[650px] w-full overflow-hidden rounded-xl shadow-2xl group animeTexto ${reveal.className}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Imagem Vertical com Zoom no Hover */}
              <img 
                src={step.imgUrl} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay de Gradiente Sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#063326]/90 via-[#063326]/20 to-transparent"></div>
              
              {/* Conteúdo Posicionado na Base da Imagem */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-bold mb-4 font-sans tracking-tight">
                  {step.title}
                </h3>
                <p className="text-16 font-light text-gray-200 leading-relaxed max-w-xs opacity-90">
                  {step.desc}
                </p>
                
                {/* Indicador Numérico Elegante */}
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <span className="text-16 font-bold tracking-[0.3em] text-[#deb357] uppercase">Etapa 0{idx + 1}</span>
                  <div className="flex-grow h-px bg-white/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
