
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const FormulaIngredients: React.FC = () => {
  const reveal = useReveal();

  const ingredients = [
    { name: "Girassol Ozonizado", role: "O Veículo Ativo", desc: "Transporta oxigênio para as camadas profundas da derme.", icon: "fa-sun" },
    { name: "Melaleuca (Tea Tree)", role: "O Purificador", desc: "Antifúngico natural que desobstrui os poros capilares.", icon: "fa-leaf" },
    { name: "Copaíba", role: "O Cicatrizante", desc: "Acalma inflamações e vermelhidão instantaneamente.", icon: "fa-droplet" },
    { name: "Canela", role: "O Estimulante", desc: "Ativa a circulação local nutrindo o bulbo capilar.", icon: "fa-fire" }
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
          <h2 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-4">
            O Segredo do <span className="font-normal italic">'Blend Booster'</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">A união da botânica brasileira com a tecnologia do ozônio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          {ingredients.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center text-center group">
               <div className="w-16 h-16 bg-[#deb357]/10 text-[#deb357] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#063326] group-hover:text-white transition-colors">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
               </div>
               <h4 className="text-lg font-bold text-[#063326] mb-1 leading-tight">{item.name}</h4>
               <p className="text-[#deb357] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{item.role}</p>
               <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
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
                  <p className="text-lg font-light leading-relaxed opacity-90">{step}</p>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-white/10">
               <p className="text-[#deb357] text-xs font-bold uppercase tracking-[0.2em]">
                 Frequência: <span className="text-white font-light normal-case tracking-normal ml-2">Uso diário ou conforme necessidade</span>
               </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#deb357]/20 flex items-center justify-center overflow-hidden min-h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1546877625-cb8c71916608?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
