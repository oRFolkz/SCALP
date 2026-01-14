
import React, { useState, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  const reveal = useReveal();
  const [sliderPos, setSliderPos] = useState(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="relative min-h-screen flex items-center bg-[#FCFDFD] overflow-visible pt-24 pb-16">
      {/* Background Decorativo Sutil - Ajustado para tom verde sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F7F5] z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4 items-start">
          
          {/* Coluna de Texto (Esquerda) */}
          <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0 pt-12">
            <div ref={reveal.ref} className={`animeTexto ${reveal.className}`}>
              {/* Kicker - Padrão Novo (12px Uppercase Bold) */}
              <p className="text-[#E3C08D] font-bold text-[12px] uppercase tracking-[0.2em] mb-4">
                FÓRMULA EXCLUSIVA
              </p>
              
              {/* Título Principal - Padrão Novo (30px Mobile / 44px Desktop) */}
              <h1 className="text-3xl md:text-[44px] font-bold text-[#063326] mb-8 leading-[1] tracking-tight">
                Não é apenas óleo. <br />
                É oxigênio puro <br className="hidden md:block" />
                para <span className="font-normal">a raiz do seu cabelo.</span>
              </h1>
              
              <div className="max-w-xl mb-12">
                <p className="text-[#555] text-[14px] leading-relaxed font-light">
                  Quando a raiz não recebe oxigênio suficiente, os <strong className="font-bold">fios enfraquecem e caem</strong>. Nosso protocolo ozonizado age diretamente na causa do problema, reativando a oxigenação do couro cabeludo. Com ele, é possível <span className="text-[#063326] font-bold">reduzir a queda em até 80%</span> e estimular o nascimento de novos fios, potencializados pela ação do Ozônio Medicinal e pelo aumento em até <strong className="font-bold">50x</strong> das propriedades terapêuticas dos óleos do blend.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#063326]/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#063326]/60">Eficácia Comprovada</span>
                </div>
                
                {[
                  { icon: "fa-leaf", text: "100% Natural e Vegano" },
                  { icon: "fa-microscope", text: "Dermatologicamente Aprovado" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <i className={`fa-solid ${item.icon} text-[#063326]/30 text-xs`}></i>
                    <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#063326]/60">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Depoimentos Adicionados - Atualizado para layout horizontal sem fotos */}
              <div className="mt-16 pt-10 border-t border-[#063326]/10 w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#063326]/40 mb-6">
                  Histórias Reais
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Testimonial 1 */}
                  <div className="flex flex-col items-start">
                     <div className="flex gap-1 mb-3">
                        {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-[10px] text-[#deb357]"></i>)}
                     </div>
                     <p className="text-[#555] text-[13px] font-medium leading-relaxed italic mb-3">
                        "Recuperei minha autoestima. Em 40 dias a diferença é brutal, as falhas sumiram."
                     </p>
                     <p className="text-[#063326] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        Roberto M. <i className="fa-solid fa-circle-check text-green-500 text-[8px]"></i>
                     </p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col items-start">
                     <div className="flex gap-1 mb-3">
                        {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-[10px] text-[#deb357]"></i>)}
                     </div>
                     <p className="text-[#555] text-[13px] font-medium leading-relaxed italic mb-3">
                        "Sensação de limpeza incrível e os fios novos aparecendo na linha da testa."
                     </p>
                     <p className="text-[#063326] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        Ana Paula S. <i className="fa-solid fa-circle-check text-green-500 text-[8px]"></i>
                     </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Coluna do Slider (Direita) */}
          <div className="w-full lg:w-6/12 px-4 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] overflow-visible">
              
              {/* Slider Antes e Depois */}
              <div 
                ref={sliderContainerRef}
                className={`relative z-10 shadow-[0_40px_80px_-15px_rgba(6,51,38,0.2)] rounded-[40px] overflow-hidden aspect-[4/5] cursor-ew-resize select-none animeZoom ${reveal.className}`}
                onMouseMove={onMouseMove}
                onMouseDown={(e) => { e.preventDefault(); handleMove(e.clientX); }}
                onTouchMove={onTouchMove}
              >
                {/* Imagem do DEPOIS (Fundo) */}
                <img 
                  src="https://i.postimg.cc/Bnzt4pBZ/Depois.jpg" 
                  alt="Depois" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Imagem do ANTES (Clipada) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img 
                    src="https://i.postimg.cc/L85hcwL8/Antes.jpg" 
                    alt="Antes" 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
                  />
                  <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-md text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-[0.2em]">
                    Antes
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-[#063326]/40 backdrop-blur-md text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-[0.2em] pointer-events-none">
                  Depois
                </div>

                {/* Linha Divisória */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-2xl z-20 flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-100/20">
                    <i className="fa-solid fa-arrows-left-right text-[#063326] text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Badge Flutuante -80% */}
              <div className={`absolute -top-6 -right-6 z-20 bg-[#deb357] text-[#063326] w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white rotate-6 hover:rotate-0 transition-transform duration-700 animeTexto ${reveal.className}`}>
                <span className="text-3xl font-black leading-none">-80%</span>
                <span className="text-[9px] font-extrabold uppercase tracking-tighter text-center px-4 leading-tight">Queda Capilar <br/> Comprovada</span>
              </div>

              {/* Card de Testemunhal Flutuante (Corrigido clipping) */}
              <div className={`absolute -bottom-8 -left-12 z-30 bg-white/95 backdrop-blur-md p-6 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.12)] rounded-3xl border border-white/50 hidden md:block max-w-[240px] animeTexto ${reveal.className}`}>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star text-[9px] text-[#deb357]"></i>)}
                </div>
                <p className="text-[#063326] text-[13px] font-medium leading-relaxed italic mb-3">
                  "Em apenas 30 dias de uso, o Scalp reduziu uma falha gigante que eu tinha em uns 70%! Fora que o cabelo está com uma qualidade muito melhor. Valeu cada centavo!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-[#deb357]"></div>
                  <p className="text-[#deb357] text-[9px] font-bold uppercase tracking-widest">Lucas Vinícios</p>
                </div>
              </div>

              {/* Label de Instrução */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-gray-300 font-bold text-[9px] uppercase tracking-[0.3em] whitespace-nowrap">
                <i className="fa-solid fa-hand-pointer animate-pulse"></i>
                Arraste para comparar
              </div>

              {/* Brilho decorativo */}
              <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#deb357]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
