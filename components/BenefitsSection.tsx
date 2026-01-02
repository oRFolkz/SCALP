
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const BenefitsSection: React.FC = () => {
  const reveal = useReveal();

  const benefits = [
    {
      title: "Cicatrização e regeneração",
      subtitle: "Apoio à recuperação da pele",
      desc: "Auxilia no cuidado da pele durante processos de recuperação superficial, contribuindo para uma aparência mais uniforme e cuidada ao longo do uso.",
      icon: <i className="fa-solid fa-wand-magic-sparkles"></i>
    },
    {
      title: "Queimaduras e ardor",
      subtitle: "Cuidado pós-sol e pós-calor",
      desc: "Indicado para o cuidado cosmético da pele sensibilizada por calor, como exposição solar, atrito ou sensação de ardor leve, promovendo conforto e frescor.",
      icon: <i className="fa-solid fa-fire-burner"></i>
    },
    {
      title: "Problemas de pele",
      subtitle: "Uso em áreas sensibilizadas",
      desc: "Pode ser utilizado como cuidado complementar em regiões com vermelhidão, ressecamento, descamação ou desconfortos recorrentes da pele.",
      icon: <i className="fa-solid fa-shield-virus"></i>
    },
    {
      title: "Inflamações aparentes",
      subtitle: "Sensação de alívio e conforto",
      desc: "Ajuda a acalmar a pele visualmente sensibilizada, oferecendo uma sensação agradável após a aplicação.",
      icon: <i className="fa-solid fa-wind"></i>
    },
    {
      title: "Cuidados intensivos localizados",
      subtitle: "Quando a pele pede atenção",
      desc: "Ideal para uso direcionado em áreas específicas do corpo que precisam de cuidado mais frequente.",
      icon: <i className="fa-solid fa-location-crosshairs"></i>
    },
    {
      title: "Cuidado diário da pele",
      subtitle: "Rotina simples e prática",
      desc: "Também pode ser incorporado ao cuidado diário para manter a pele com aparência equilibrada e confortável.",
      icon: <i className="fa-solid fa-calendar-check"></i>
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div ref={reveal.ref} className={`text-center max-w-3xl mx-auto mb-20 animeTexto ${reveal.className}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#063326] mb-6 leading-tight">
            Benefícios que fazem a <span className="font-normal italic">diferença</span>
          </h2>
          <p className="text-gray-600 text-16 md:text-lg font-light leading-relaxed">
            AEROZON foi desenvolvido para cuidar da pele em diferentes situações do dia a dia, oferecendo suporte quando ela está sensibilizada, fragilizada ou precisa de atenção extra.
          </p>
          <div className="w-16 h-px bg-[#deb357] mx-auto mt-8 opacity-40"></div>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className={`group bg-[#F8F9FA] p-8 rounded-2xl border border-transparent hover:border-[#deb357]/20 hover:bg-white hover:shadow-2xl transition-all duration-500 animeTexto ${reveal.className}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#deb357] text-2xl mb-6 group-hover:bg-[#063326] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#063326] mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-16 font-bold text-[#deb357] mb-4 uppercase tracking-wider">
                {item.subtitle}
              </p>
              <p className="text-gray-500 text-16 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Nota de Segurança */}
        <div className={`mt-20 text-center max-w-2xl mx-auto animeTexto ${reveal.className}`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100">
            <i className="fa-solid fa-circle-info text-[#deb357]"></i>
            <p className="text-[13px] md:text-16 text-gray-400 font-medium leading-tight">
              Uso cosmético tópico. Os benefícios descritos referem-se ao cuidado e à aparência da pele. Em condições dermatológicas ou queimaduras graves, procure orientação profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
