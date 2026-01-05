
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ValueSection: React.FC = () => {
  const reveal = useReveal();

  const values = [
    {
      title: "O poder da ozonização",
      subtitle: "Sensação de cuidado e frescor",
      desc: "A presença do ozônio na fórmula contribui para uma sensação de pele mais confortável, fresca e cuidada, tornando o uso agradável desde a primeira aplicação.",
      icon: <i className="fa-solid fa-atom text-xl"></i>
    },
    {
      title: "Aplicação sem fricção",
      subtitle: "Praticidade no dia a dia",
      desc: "O formato em spray evita o contato direto com a pele. Não é preciso espalhar óleo nem lavar as mãos depois — basta aplicar e seguir sua rotina com leveza.",
      icon: <i className="fa-solid fa-spray-can text-xl"></i>
    },
    {
      title: "Dermatologicamente testado",
      subtitle: "Seguro para uso frequente",
      desc: "Desenvolvido para o cuidado corporal diário, respeitando a pele e oferecendo conforto mesmo em rotinas contínuas de uso.",
      icon: <i className="fa-solid fa-microscope text-xl"></i>
    },
    {
      title: "Experiência premium",
      subtitle: "Leveza que se sente",
      desc: "Textura leve, aroma suave e rápida absorção criam uma experiência confortável e agradável, ideal para quem valoriza praticidade sem abrir mão do cuidado.",
      icon: <i className="fa-solid fa-leaf text-xl"></i>
    }
  ];

  const featuredImage = "https://plus.unsplash.com/premium_photo-1671717725615-5a5f732957bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="py-24 bg-[#F4F9FF]">
      <div className="container mx-auto px-4">
        {/* Título no topo */}
        <div ref={reveal.ref} className={`text-center mb-20 animeTexto ${reveal.className}`}>
          {/* Kicker */}
          <p className="text-[#E3C08D] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            VALORES DA MARCA
          </p>

          {/* Título */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] leading-tight">
            Por que sua pele merece o <span className="font-normal">melhor</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Foto na esquerda */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] animeZoom ${reveal.className}`}>
              <img 
                src={featuredImage} 
                alt="Estética e Cuidado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#063326]/5"></div>
            </div>
          </div>

          {/* Cards em vertical na direita */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col gap-6 lg:pl-12">
              {values.map((item, idx) => (
                <div 
                  key={idx}
                  className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex items-start gap-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animeTexto ${reveal.className}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#deb357]/10 rounded-xl flex items-center justify-center text-[#deb357]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-[#063326] mb-1 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-16 font-bold text-[#deb357] mb-3 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-500 text-16 leading-relaxed font-light max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
