
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const BrandComparison: React.FC = () => {
  const reveal = useReveal();

  const comparisonItems = [
    {
      label: "Tecnologia de Ozonização",
      corpore: "Exclusiva e Estabilizada",
      others: "Inexistente ou Instável",
      status: true
    },
    {
      label: "Padrão de Qualidade",
      corpore: "Protocolo de Madri (Referência Mundial)",
      others: "Sem padronização internacional",
      status: true
    },
    {
      label: "Composição da Fórmula",
      corpore: "100% Natural e Vegana",
      others: "Químicos agressivos e silicones",
      status: true
    },
    {
      label: "Segurança Dermatológica",
      corpore: "Testado em Laboratório Certificado",
      others: "Testes genéricos ou ausentes",
      status: true
    },
    {
      label: "Eficácia Clínica",
      corpore: "Resultados comprovados cientificamente",
      others: "Apenas promessas comerciais",
      status: true
    },
    {
      label: "Uso Diário",
      corpore: "Seguro para todos os tipos de fios",
      others: "Pode causar irritação ou acúmulo",
      status: true
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={reveal.ref} className={`text-center mb-16 animeTexto ${reveal.className}`}>
          {/* Kicker */}
          <p className="text-[#E3C08D] font-bold text-[12px] uppercase tracking-[0.2em] mb-4">
            POR QUE ESCOLHER
          </p>

          {/* Título */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4 leading-[1]">
            Diferenciais <span className="font-normal text-[#E3C08D]">Corpore Life</span>
          </h2>
          <p className="text-gray-500 text-[14px] font-light max-w-2xl mx-auto">
            Entenda por que somos a escolha número 1 de especialistas em tricologia natural.
          </p>
        </div>

        <div className={`w-full animeTexto ${reveal.className}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-[#F8F9FA] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
            {/* Header da Tabela */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#063326] text-white py-10 px-6 md:px-12 text-center md:text-left items-center">
              <div className="hidden md:block">
                <p className="text-[12px] font-bold uppercase tracking-[0.3em] opacity-40">Característica</p>
              </div>
              <div className="mb-4 md:mb-0">
                <p className="text-[14px] font-black uppercase tracking-[0.25em]">Corpore Life</p>
              </div>
              <div className="opacity-50">
                <p className="text-[12px] font-bold uppercase tracking-widest">Outras Marcas</p>
              </div>
            </div>

            {/* Linhas da Tabela */}
            <div className="divide-y divide-gray-200">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 items-center py-6 px-6 md:px-12 hover:bg-white transition-colors group">
                  {/* Label (Mobile: Título / Desktop: Coluna 1) */}
                  <div className="mb-2 md:mb-0">
                    <p className="text-[#063326] font-bold text-[14px]">{item.label}</p>
                  </div>

                  {/* Coluna Corpore Life */}
                  <div className="flex items-center gap-3 mb-4 md:mb-0 bg-[#063326]/5 md:bg-transparent p-3 md:p-0 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check text-white text-[10px]"></i>
                    </div>
                    <p className="text-[#063326] text-[14px] font-semibold">{item.corpore}</p>
                  </div>

                  {/* Coluna Outras Marcas */}
                  <div className="flex items-center gap-3 opacity-60">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-xmark text-gray-400 text-[10px]"></i>
                    </div>
                    <p className="text-gray-500 text-[14px] font-medium">{item.others}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer da Tabela */}
            <div className="bg-gray-50 py-10 px-6 md:px-12 text-center border-t border-gray-100">
               <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16">
                  {[
                    { icon: "fa-shield-halved", text: "Seguro" },
                    { icon: "fa-vial-circle-check", text: "Testado" },
                    { icon: "fa-leaf", text: "Natural" }
                  ].map((badge, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                       <i className={`fa-solid ${badge.icon} text-[#deb357] text-sm`}></i>
                       <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#063326]">{badge.text}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* CTA Adicional */}
        <div className={`mt-12 text-center animeTexto ${reveal.className}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-gray-400 text-[12px] font-bold uppercase tracking-[0.2em] mb-4">A tecnologia que seu cabelo esperava.</p>
          <div className="flex justify-center items-center gap-2">
            <span className="h-px w-8 bg-gray-200"></span>
            <i className="fa-solid fa-certificate text-[#deb357]"></i>
            <span className="h-px w-8 bg-gray-200"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
